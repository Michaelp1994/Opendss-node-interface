import { Line, PVSystem, Storage } from ".";
import { Circuit } from "./Circuit";
import { ESPVLControl } from "./ESPVLControl";

describe("Testing ESPVLControl Model", () => {
  const circuit = new Circuit("Esoura");
  const line = new Line("line1");
  const pvSystem = new PVSystem("pvsystem1");
  const pvSystem2 = new PVSystem("pvsystem2");
  const storage = new Storage("storage1");
  // const controller = new ESPVLControl("controller1", {
  //   element: "Line.line1",
  //   Terminal: 1,
  //   kWBand: 100,
  //   kvarlimit: 10000,
  //   Type: "2",
  //   LocalControlList: "[pvsystem1 pvsystem2]",
  //   LocalControlWeights: "[1 1]",
  //   StorageList: "[storage1]",
  //   StorageWeights: "[1]",
  // });
  circuit.add(line);
  circuit.add(storage);
  circuit.add(pvSystem);
  circuit.add(pvSystem2);
  // circuit.add(controller);
  circuit.build();
  circuit.solve();

  // FIXME: don't know how to test yet.
  test("Useless Test, to be replaced.", () => {
    expect(1).toBe(1);
  });

  // test("if component is in circuit", () => {
  //   expect(() => circuit.setActiveElement(controller)).not.toThrow();
  // });

  // test.each(controller._parameters)(
  //   "if %s is in OpenDSS and the class model",
  //   (parameter) => {
  //     expect(controller.hasOwnProperty(parameter)).toBeTruthy();
  //     expect(() => circuit.getParameter(controller, parameter)).not.toThrow();
  //   }
  // );

  // test("Unknown property will throw error", () => {
  //   expect(() => circuit.getParameter(controller, "fakeParameter")).toThrow();
  // });
});
