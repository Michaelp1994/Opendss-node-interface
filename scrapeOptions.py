from bs4 import BeautifulSoup
import requests


def parseName(name: str):
    if name.startswith("%") or name[0].isdigit() or "-" in name:
        return '"{0}"'.format(name)
    else:
        return name[0].lower() + name[1:]


url = "https://dss-extensions.org/dss_properties.html"
page = requests.get(url)

soup = BeautifulSoup(page.content, "html.parser")
elementSection = soup.find(id="options")
elementTable = elementSection.find("tbody")
elements = elementTable.findAll("tr")
f = open("src/interfaces/OpenDSSOptions.ts", "w")
contents = "export interface OpenDSSOptions {\n"
for element in elements:
    title_td = element.find("td")
    title_text = title_td.contents[0].get_text()
    description = title_td.findNext("td")
    description_text = description.contents[0].get_text()
    contents += "\t /** {0} */\n".format(description_text)
    contents += "\t{0}: number;\n".format(parseName(title_text))
contents += "}"
f.write(contents)
