import GeneralStudy from "@classes/GeneralStudy";
import { Circuit, Line, PVSystem } from "@elements";
import ExpControl from "./ExpControl";

describe("Testing ExpControl Model", () => {
  const study = new GeneralStudy();
  const circuit = new Circuit("TestCircuit", {
    bus1: "bus1",
  });
  study.add(circuit);

  const pvSystem = new PVSystem("pvsystem1", {
    bus1: "bus1",
  });
  const line = new Line("line", {
    bus1: "bus1",
    length: 10,
    units: "km",
  });
  const expControl = new ExpControl("expControl", {
    // PVSystemList: "[pvsystem1]",
  });
  study.add(pvSystem);
  study.add(line);
  study.add(expControl);

  study.build();
  study.solve();

  test("if expControl is in circuit", () => {
    expect(() => study.setActiveElement(expControl)).not.toThrow();
  });

  test.each(expControl.parameters)(
    "if %s is in OpenDSS and the class model",
    (parameter) => {
      expect(
        Object.prototype.hasOwnProperty.call(expControl, parameter),
      ).toBeTruthy();
      expect(() => study.getParameter(expControl, parameter)).not.toThrow();
    },
  );

  test("Unknown property will throw error", () => {
    expect(() => study.getParameter(expControl, "fakeParameter")).toThrow();
  });
});
