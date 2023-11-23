from bs4 import BeautifulSoup
import requests
import re


def parseName(name: str):
    if name.startswith("%") or name[0].isdigit() or "-" in name:
        return '"{0}"'.format(name)
    else:
        return name


def parseDescription(description: str):
    addCommentFormatting = re.sub(r"\n", "\n\t* \n\t* ", description)
    nextStep = re.sub(r"\*/", "/", addCommentFormatting)
    # addCommentFormatting.replace("*/", "/")
    # removeinvalid = re.sub("*/", "/", addCommentFormatting)
    formatted = "\t/** " + nextStep + "*/\n"
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
    f = open("src/models/{0}.ts".format(element_name), "w")
    options = tbody.findAll("tr")
    file = 'import BaseComponent from "./BaseComponent";\n'
    file += 'import {{ {0}Interface }} from "../interfaces/{0}Interface";\n'.format(
        element_name
    )
    file += "/**  {0} */\n".format(element_type)
    file += "export class {0} extends BaseComponent {{\n".format(element_name)
    file += '_type= "{0}";\n'.format(element_name)
    file += "_parameters= [\n"
    for option in options:
        elements = option.findAll("td")
        name = elements[1].text
        file += '"{0}", \n'.format(name)
    file += "]; \n"
    for option in options:
        elements = option.findAll("td")
        index = elements[0].text
        name = elements[1].text
        type = elements[2].text
        description = elements[3].text
        jsType = getType(type)
        file += parseDescription(description)
        file += "\t{0}?: {1};\n".format(parseName(name), jsType)
    file += "  constructor(\n"
    file += "    nameOrOptions: string | {0}Interface,\n".format(element_name)
    file += '    options?: Omit<{0}Interface, "name">,\n'.format(element_name)
    file += "  ) {\n"
    file += "    super();\n"
    file += '    if (typeof nameOrOptions === "string") {\n'
    file += "      this.name = nameOrOptions;\n"
    file += "      Object.assign(this, options);\n"
    file += "    } else {\n"
    file += "      Object.assign(this, nameOrOptions);\n"
    file += "    }\n"
    file += "  }\n"
    file += "}\n"
    f.write(file)
