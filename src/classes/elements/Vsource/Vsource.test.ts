import GeneralStudy from "@classes/GeneralStudy";
import { Line } from ".";
import Circuit from "./Circuit";
import Vsource from "./Vsource";

describe("Testing Vsource Model", () => {
  const study = new GeneralStudy();
  const circuit = new Circuit("TestCircuit", {
    bus1: "bus1",
  });
  study.add(circuit);
  const line = new Line("Line1", {
    bus1: "bus1",
    bus2: "bus2",
    length: 400,
    units: "m",
  });
  study.add(line);
  const vsource = new Vsource("vsource", {
    bus1: "bus2",
  });
  study.add(vsource);
  study.build();
  study.solve();

  test("if component is in circuit", () => {
    expect(() => study.setActiveElement(vsource)).not.toThrow();
  });

  test.each(vsource.parameters)(
    "if %s is in OpenDSS and the class model",
    (parameter) => {
      expect(
        Object.prototype.hasOwnProperty.call(vsource, parameter),
      ).toBeTruthy();
      expect(() => study.getParameter(vsource, parameter)).not.toThrow();
    },
  );

  test("Unknown property will throw error", () => {
    expect(() => study.getParameter(vsource, "fakeParameter")).toThrow();
  });
});
