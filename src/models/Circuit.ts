import { VsourceInterface } from "../interfaces/VsourceInterface";
import BaseComponent from "./BaseComponent";
import { Vsource } from "./Vsource";
import winax from "winax";

/**   Circuit Element, PC Element  */
export class Circuit extends Vsource {
  _type = "Circuit";
  private dss: OpenDSSengine.DSS;
  private dssCircuit: OpenDSSengine.DSS["ActiveCircuit"];
  private dssSolution: OpenDSSengine.DSS["ActiveCircuit"]["Solution"];
  private dssElem: OpenDSSengine.DSS["ActiveCircuit"]["ActiveCktElement"];
  private dssMathLib: OpenDSSengine.DSS["CmathLib"];
  private dssBus: OpenDSSengine.DSS["ActiveCircuit"]["ActiveBus"];
  private dssText: OpenDSSengine.DSS["Text"];
  private components: Array<BaseComponent>;

  constructor(
    /** Name of the circuit or an object containing parameters */
    nameOrOptions: string | VsourceInterface,
    /** Options for the circuit Vsource */
    options?: Omit<VsourceInterface, "name">
  ) {
    super(nameOrOptions, options);
    this.dss = winax.Object("OpenDSSengine.DSS");
    this.dssCircuit = this.dss.ActiveCircuit;
    this.dssSolution = this.dssCircuit.Solution;
    this.dssElem = this.dssCircuit.ActiveCktElement;
    this.dssMathLib = this.dss.CmathLib;
    this.dssBus = this.dssCircuit.ActiveBus;
    this.dssText = this.dss.Text;
    this.components = [];
  }

  setActiveElement(name: string) {
    this.dssCircuit.SetActiveElement(name);
    if (this.dssElem.Name.toLowerCase() !== name.toLowerCase())
      throw Error(
        `Can't find ${name} in circuit. [Found ${this.dssElem.Name}]`
      );
  }
  /** Add Component to the circuit  */
  add(component: BaseComponent) {
    this.components.push(component);
  }

  solve() {
    this.dss.ClearAll();
    this.send(this.create());
    this.components.forEach((component) => {
      this.send(component.create());
    });
    this.dssSolution.Solve();
  }

  output() {
    this.print(this.create());
    this.components.forEach((component) => {
      this.print(component.create());
    });
  }

  getBuses() {
    return this.dssCircuit.AllBusNames;
  }

  print(commands: string | string[]) {
    if (typeof commands === "string") {
      console.log(commands);
    } else if (Array.isArray(commands)) {
      commands.forEach((command) => {
        console.log(command);
      });
    }
  }

  send(commands: string | string[]) {
    if (typeof commands === "string") {
      this.dssText.Command = commands;
    } else if (Array.isArray(commands)) {
      commands.forEach((command) => {
        this.dssText.Command = command;
      });
    }
  }
}
