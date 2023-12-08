import GeneralStudy from "@classes/GeneralStudy";
import { Line, PVSystem, Storage } from ".";
import Circuit from "./Circuit";

describe("Testing ESPVLControl Model", () => {
  const study = new GeneralStudy();
  const circuit = new Circuit("TestCircuit");
  study.add(circuit);

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
  study.add(line);
  study.add(storage);
  study.add(pvSystem);
  study.add(pvSystem2);
  // study.add(controller);
  study.build();
  study.solve();

  // FIXME: don't know how to test yet.
  test("Useless Test, to be replaced.", () => {
    expect(1).toBe(1);
  });

  // test("if component is in circuit", () => {
  //   expect(() => study.setActiveElement(controller)).not.toThrow();
  // });

  // test.each(controller.parameters)(
  //   "if %s is in OpenDSS and the class model",
  //   (parameter) => {
  //     expect(controller.hasOwnProperty(parameter)).toBeTruthy();
  //     expect(() => study.getParameter(controller, parameter)).not.toThrow();
  //   }
  // );

  // test("Unknown property will throw error", () => {
  //   expect(() => study.getParameter(controller, "fakeParameter")).toThrow();
  // });
});
