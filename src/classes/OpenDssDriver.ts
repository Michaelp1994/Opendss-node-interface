import winax from "winax";
import { ParameterUnknownError } from "../errors/ParameterUnknownError";

export class OpenDssDriver {
  private dss: OpenDSSengine.DSS;
  private dssCircuit: OpenDSSengine.DSS["ActiveCircuit"];
  private dssSolution: OpenDSSengine.DSS["ActiveCircuit"]["Solution"];
  private dssElem: OpenDSSengine.DSS["ActiveCircuit"]["ActiveCktElement"];
  private dssMathLib: OpenDSSengine.DSS["CmathLib"];
  private dssBus: OpenDSSengine.DSS["ActiveCircuit"]["ActiveBus"];
  private dssText: OpenDSSengine.DSS["Text"];
  constructor() {
    this.dss = winax.Object("OpenDSSengine.DSS");
    this.dssCircuit = this.dss.ActiveCircuit;
    this.dssSolution = this.dssCircuit.Solution;
    this.dssElem = this.dssCircuit.ActiveCktElement;
    this.dssMathLib = this.dss.CmathLib;
    this.dssBus = this.dssCircuit.ActiveBus;
    this.dssText = this.dss.Text;
  }

  clear() {
    // console.log("Clearing");
    this.dss.ClearAll();
  }

  setActiveElement(name: string) {
    this.dssCircuit.SetActiveElement(name);
    if (this.dssElem.Name.toLowerCase() !== name.toLowerCase())
      throw Error(
        `Can't find ${name} in circuit. [Found ${this.dssElem.Name}]`
      );
  }

  getParameter(name: string, property: string) {
    const prevName = this.dssElem.Name;
    this.setActiveElement(name);
    if (
      this.dssElem.Properties(property).Name.toLowerCase() !==
      property.toLowerCase()
    )
      throw new ParameterUnknownError();
    const val = this.dssElem.Properties(property).Val;
    this.setActiveElement(prevName);
    return val;
  }

  changeParameter(name: string, property: string, value: string) {
    const prevName = this.dssElem.Name;
    this.setActiveElement(name);
    if (
      this.dssElem.Properties(property).Name.toLowerCase() !==
      property.toLowerCase()
    )
      throw Error(`Can't find ${property} property on ${name} component.`);
    this.dssElem.Properties(property).Val = value;
    this.setActiveElement(prevName);
  }

  readCurrent(location: string) {
    const prevName = this.dssElem.Name;
    this.setActiveElement(location);
    const current = this.dssMathLib.ctopolardeg(
      this.dssElem.Currents[0], // FIXME: figure out the right current to extract
      this.dssElem.Currents[1]
    )[0];
    this.setActiveElement(prevName);
    return current;
  }

  getBuses() {
    return this.dssCircuit.AllBusNames;
  }

  solve() {
    this.dssSolution.Solve();
  }

  send(commands: string | string[]) {
    if (Array.isArray(commands)) {
      commands.forEach((commandLine) => {
        this.dssText.Command = commandLine;
      });
    } else {
      this.dssText.Command = commands;
    }
  }
}
