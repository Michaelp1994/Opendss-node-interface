import { VsourceInterface } from "@interfaces/VsourceInterface";
import { OpenDssDriver } from "../OpenDssDriver";
import BaseComponent from "./BaseComponent";
import CircuitElementComponent from "./CircuitElementComponent";
import { Vsource } from "./Vsource";

/**   Circuit Element, PC Element  */
export class Circuit extends Vsource {
  _type = "Circuit";
  driver: OpenDssDriver;
  private components: Array<BaseComponent>;
  private _circuitSolved: Boolean;
  constructor(
    /** Name of the circuit or an object containing parameters */
    nameOrOptions: string | VsourceInterface,
    /** Options for the circuit Vsource */
    options?: Omit<VsourceInterface, "name">
  ) {
    super(nameOrOptions, options);
    this.components = [];
    this.driver = new OpenDssDriver();
    this.driver.clear();
  }

  /** Add Component to the circuit  */
  add(component: BaseComponent) {
    this.components.push(component);
    this._circuitSolved = false;
  }

  /** remove component from a circuit */
  remove(component: BaseComponent) {
    const index = this.components.findIndex((c) => c.name == component.name);
    if (index === -1) throw Error("cannot find component in circuit");
    const removed = this.components.splice(index, 1);
    this._circuitSolved = false;
    if (removed[0].name !== component.name)
      throw Error(`Removed ${removed[0].name} instead of ${component.name}`);
  }

  load(file: string) {}

  save(fileName: string) {
    console.log(this.create());
    this.components.forEach((component) => {
      console.log(component.create());
    });
  }

  setActiveElement(component: CircuitElementComponent) {
    this.driver.setActiveElement(`${component._type}.${component.name}`);
  }

  getParameter(component: CircuitElementComponent, property: string) {
    return this.driver.getParameter(
      `${component._type}.${component.name}`,
      property
    );
  }

  changeParameter(
    component: CircuitElementComponent,
    property: string,
    value: string
  ) {
    this.driver.changeParameter(
      `${component._type}.${component.name}`,
      property,
      value
    );
  }

  readCurrent(component: CircuitElementComponent) {
    return this.driver.readCurrent(`${component._type}.${component.name}`);
  }

  solve() {
    this.driver.clear();
    this.driver.send(this.create());
    this.components.forEach((component) => {
      this.driver.send(component.create());
    });
    this.driver.solve();
    this._circuitSolved = true;
  }

  getBuses() {
    return this.driver.getBuses();
  }
}
