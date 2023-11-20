from bs4 import BeautifulSoup
import requests
import re


def parseName(name: str):
    if name.startswith("%") or name[0].isdigit():
        return '"{0}"'.format(name)
    else:
        return name


def parseDescription(description: str):
    addCommentFormatting = re.sub(r"\n", "\n\t* \n\t* ", description)
    addCommentFormatting.replace("*/", "/")
    # removeinvalid = re.sub("*/", "/", addCommentFormatting)
    formatted = "\t/** " + addCommentFormatting + "*/\n"
    return formatted


def getType(type: str):
    match type:
        case "real":
            return "number"
        case "integer":
            return "number"
        case "string(from enum.)":
            return "string"
        case "array of reals(symmetric matrix)":
            return "number[]"
        case "boolean(action)":
            return "boolean"
        case "boolean":
            return "boolean"
        case "array of reals":
            return "number[]"
        case "array of integers":
            return "number[]"
        case "deprecated/removed":
            return "number"
        case "real(on array)":
            return "number"
        case "integer(on array)":
            return "number"
        case "integer(from enum.)":
            return "number"
        case "complex":
            return "number[]"
        case _:
            if type.startswith("string"):
                return "string"
            if type.startswith("array of strings"):
                return "string[]"
            raise Exception("Can't Identify type: {0}".format(type))


url = "https://dss-extensions.org/dss_properties.html"
page = requests.get(url)

soup = BeautifulSoup(page.content, "html.parser")
elementSection = soup.find(id="elements")
elementTable = elementSection.find("table")
elements = elementTable.findAll("thead")
for element in elements:
    title = element.find("th", scope="rowgroup")
    title_text = title.contents[0].get_text()
    title_stripped = re.sub("\n", "", title_text)
    element_name_type = re.sub(r"\s\s+", " ", title_stripped)
    element_type_sindex = element_name_type.index("(")
    element_type_eindex = element_name_type.index(")")
    element_name = element_name_type[:element_type_sindex].strip()
    element_type = element_name_type[element_type_sindex + 1 : element_type_eindex]
    tbody = element.findNext("tbody")
    f = open("models/{0}.ts".format(element_name), "w")
    options = tbody.findAll("tr")
    file = "/**  {0} */\n".format(element_type)
    file += "export default class {0} {{\n".format(element_name)
    file += "/** Name of the component */\n"
    file += "name: string;\n"
    for option in options:
        elements = option.findAll("td")
        index = elements[0].text
        name = elements[1].text
        type = elements[2].text
        description = elements[3].text
        jsType = getType(type)
        file += parseDescription(description)
        file += "\t{0}: {1};\n".format(parseName(name), jsType)
    file += "}"
    f.write(file)
