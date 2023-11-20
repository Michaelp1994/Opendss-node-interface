import winax from "winax";
import Reactor from "./models/Reactor";
import LineGeometry from "./models/LineGeometry";
import WireData from "./models/WireData";
import LineSpacing from "./models/LineSpacing";
import Fault from "./models/Fault";
import Vsource from "./models/Vsource";
import Line from "./models/Line";

export class OpenDSSInterface {
  commands: string[] = [];
  dss: OpenDSSengine.DSS;
  dssCircuit: OpenDSSengine.DSS["ActiveCircuit"];
  dssSolution: OpenDSSengine.DSS["ActiveCircuit"]["Solution"];
  dssElem: OpenDSSengine.DSS["ActiveCircuit"]["ActiveCktElement"];
  dssMathLib: OpenDSSengine.DSS["CmathLib"];
  dssBus: OpenDSSengine.DSS["ActiveCircuit"]["ActiveBus"];
  dssText: OpenDSSengine.DSS["Text"];

  constructor() {
    this.dss = winax.Object("OpenDSSengine.DSS");
    this.dssCircuit = this.dss.ActiveCircuit;
    this.dssSolution = this.dssCircuit.Solution;
    this.dssElem = this.dssCircuit.ActiveCktElement;
    this.dssMathLib = this.dss.CmathLib;
    this.dssBus = this.dssCircuit.ActiveBus;
    this.dssText = this.dss.Text;
    this.commands = [];
  }

  createLine({
    name,
    bus1,
    bus2,
    geometry,
    phases,
    length,
    units,
    ...otherOptions
  }: Line) {
    const line = [
      `New line.${name}`,
      `bus1=${bus1}`,
      `bus2=${bus2}`,
      `geometry=${geometry}`,
      `phases=${phases}`,
      `length=${length}`,
      `units=${units}`,
    ];
    Object.keys(otherOptions).forEach((key) => {
      line.push(`${key}=${otherOptions[key]}`);
    });
    this.send(line.join(" "));
  }

  createReactor({ name, bus1, bus2, R, phases, ...otherOptions }: Reactor) {
    const reactor = [
      `New Reactor.${name}`,
      `bus1=${bus1}`,
      `bus2=${bus2}`,
      `R=${R}`,
      `phases=${phases}`,
    ];
    Object.keys(otherOptions).forEach((key) => {
      reactor.push(`${key}=${otherOptions[key]}`);
    });
    this.send(reactor.join(" "));
  }

  createLineGeometry({
    name,
    nconds,
    nphases,
    reduce,
    spacing,
    wires,
    ...otherOptions
  }: LineGeometry) {
    const lineGeometry = [
      `New LineGeometry.${name}`,
      `nconds=${nconds}`,
      `nphases=${nphases}`,
      `reduce=${reduce}`,
    ];
    Object.keys(otherOptions).forEach((key) => {
      lineGeometry.push(`${key}=${otherOptions[key]}`);
    });
    const lineGeometry2 = [`~ spacing=${spacing}`, `wires=[${wires}]`];
    this.send([lineGeometry.join(" "), lineGeometry2.join(" ")]);
  }

  createWiredata({
    name,
    diam,
    radunits,
    Rac,
    Runits,
    GMRac,
    GMRunits,
    ...otherOptions
  }: WireData) {
    const wireData = [
      `New WireData.${name}`,
      `diam=${diam}`,
      `radunits=${radunits}`,
      `RAC=${Rac}`,
      `Runits=${Runits}`,
      `GMRac=${GMRac}`,
      `GMRunits=${GMRunits}`,
    ];
    Object.keys(otherOptions).forEach((key) => {
      wireData.push(`${key}=${otherOptions[key]}`);
    });
    this.send(wireData.join(" "));
  }

  createLineSpacing({
    name,
    nconds,
    nphases,
    units,
    x,
    h,
    ...otherOptions
  }: LineSpacing) {
    const lineSpacing = [
      `New LineSpacing.${name}`,
      `nconds=${nconds}`,
      `nphases=${nphases}`,
      `units=${units}`,
    ];
    Object.keys(otherOptions).forEach((key) => {
      lineSpacing.push(`${key}=${otherOptions[key]}`);
    });
    const lineSpacing2 = [`~ x=[${x}]`];
    const lineSpacing3 = [`~ h=[${h}]`];
    this.send([
      lineSpacing.join(" "),
      lineSpacing2.join(" "),
      lineSpacing3.join(" "),
    ]);
  }

  createFault({ name, bus1, bus2, ...otherOptions }: Fault) {
    const fault = [`New Fault.${name}`, `bus1=${bus1}`, `bus2=${bus2}`];
    Object.keys(otherOptions).forEach((key) => {
      fault.push(`${key}=${otherOptions[key]}`);
    });
    this.send(fault.join(" "));
  }

  createVSource({
    name,
    bus1,
    basekv,
    phases,
    pu,
    x1r1,
    x0r0,
    Isc3,
    Isc1,
    ...otherOptions
  }: Vsource) {
    const vSource = [
      `New Vsource.${name}`,
      `bus1=${bus1}`,
      `basekv=${basekv}`,
      `phases=${phases}`,
      `pu=${pu}`,
    ];
    Object.keys(otherOptions).forEach((key) => {
      vSource.push(`${key}=${otherOptions[key]}`);
    });
    const vSource2 = [`~ x1r1==${x1r1}`, `Isc3=${Isc3}`];
    const vSource3 = [`~ x0r0=${x0r0}`, `Isc1=${Isc1}`];
    this.send([vSource.join(" "), vSource2.join(" "), vSource3.join(" ")]);
  }

  createCircuit({
    name,
    bus1,
    basekv,
    phases,
    pu,
    x1r1,
    x0r0,
    Isc1,
    Isc3,
    ...otherOptions
  }: Vsource) {
    const circuit = [
      `New Circuit.${name}`,
      `bus1=${bus1}`,
      `basekv=${basekv}`,
      `phases=${phases}`,
      `pu=${pu}`,
    ];
    Object.keys(otherOptions).forEach((key) => {
      circuit.push(`${key}=${otherOptions[key]}`);
    });
    const circuit2 = [`~ x1r1==${x1r1}`, `Isc3=${Isc3}`];
    const circuit3 = [`~ x0r0=${x0r0}`, `Isc1=${Isc1}`];
    this.send([circuit.join(" "), circuit2.join(" "), circuit3.join(" ")]);
  }

  setActiveElement(name) {
    this.dssCircuit.SetActiveElement(name);
    if (this.dssElem.Name.toLowerCase() !== name.toLowerCase())
      throw Error(
        `Can't find ${name} in circuit. [Found ${this.dssElem.Name}]`
      );
  }
  getBuses() {
    return this.dssCircuit.AllBusNames;
  }

  send(commands: string | string[]) {
    if (typeof commands === "string") {
      this.commands.push(commands);
      this.dssText.Command = commands;
    } else if (Array.isArray(commands)) {
      commands.forEach((command) => {
        this.commands.push(command);
        this.dssText.Command = command;
      });
    }
  }

  solve() {
    this.dssSolution.Solve();
  }
}
