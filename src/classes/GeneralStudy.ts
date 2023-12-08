import type OpenDSSOptionsInterface from "@interfaces/OpenDSSOptionsInterface";
import { open } from "node:fs/promises";
import { EOL } from "node:os";

import CircuitElementComponent from "./components/CircuitElementComponent";
import OpenDssDriver from "./OpenDssDriver";
import BaseComponent from "./components/BaseComponent";

export default class GeneralStudy {
  private components: Array<BaseComponent>;

  private circuitSolved: boolean;

  driver: OpenDssDriver;

  constructor(options?: OpenDSSOptionsInterface) {
    this.circuitSolved = false;
    this.components = [];
    this.driver = new OpenDssDriver();
    this.driver.clear();
    if (options) this.driver.setOptions(options);
  }

  /** Add Component to the circuit  */
  add(component: BaseComponent) {
    this.components.push(component);
    this.circuitSolved = false;
  }

  /** remove component from a circuit */
  remove(component: BaseComponent) {
    const index = this.components.findIndex((c) => c.name === component.name);
    if (index === -1) throw Error("cannot find component in circuit");
    const removed = this.components.splice(index, 1);
    this.circuitSolved = false;
    if (removed[0].name !== component.name)
      throw Error(`Removed ${removed[0].name} instead of ${component.name}`);
  }

  /** save the script to a file */
  async saveScript(fileName: string) {
    const file = await open(fileName, "w");
    // const script: string[] = [];
    const script = this.components.map((component) =>
      component.create().join(EOL),
    );
    await file.appendFile(script.join(EOL));
    file.close();
  }

  /** output the script to console */
  printScript() {
    this.components.forEach((component) => {
      // eslint-disable-next-line no-console
      console.log(component.create());
    });
  }

  showCurrents() {
    this.driver.getCurrents();
  }

  setOptions(options: OpenDSSOptionsInterface) {
    this.driver.setOptions(options);
  }

  getOption(option: keyof OpenDSSOptionsInterface) {
    return this.driver.getOption(option);
  }

  setActiveElement(component: CircuitElementComponent) {
    this.driver.setActiveElement(`${component._type}.${component.name}`);
  }

  getParameter(component: CircuitElementComponent, property: string) {
    return this.driver.getParameter(
      `${component._type}.${component.name}`,
      property,
    );
  }

  changeParameter(
    component: CircuitElementComponent,
    property: string,
    value: string,
  ) {
    this.driver.changeParameter(
      `${component._type}.${component.name}`,
      property,
      value,
    );
  }

  readCurrent(component: CircuitElementComponent, index: number) {
    return this.driver.readCurrent(
      `${component._type}.${component.name}`,
      index,
    );
  }

  build() {
    this.driver.clear();
    // this.driver.send(this.create());
    this.components.forEach((component) => {
      this.driver.send(component.create());
    });
  }

  solve() {
    this.driver.solve();
    this.circuitSolved = true;
  }

  getBuses() {
    return this.driver.getBuses();
  }
}
