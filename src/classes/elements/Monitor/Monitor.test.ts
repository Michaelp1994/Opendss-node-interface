import GeneralStudy from "@classes/GeneralStudy";
import { Circuit , Line } from "@elements";
import Monitor from "./Monitor";

describe("Testing Monitor Model", () => {
  const study = new GeneralStudy();
  const circuit = new Circuit("TestCircuit");
  study.add(circuit);
  const line1 = new Line("line1", { bus1: "bus1", bus2: "bus2" });
  const monitor = new Monitor("monitor", { element: "Line.line1" });
  study.add(line1);
  study.add(monitor);
  study.build();
  study.solve();

  test("if component is in circuit", () => {
    expect(() => study.setActiveElement(monitor)).not.toThrow();
  });

  test.each(monitor.parameters)(
    "if %s is in OpenDSS and the class model",
    (parameter) => {
      expect(
        Object.prototype.hasOwnProperty.call(monitor, parameter),
      ).toBeTruthy();
      expect(() => study.getParameter(monitor, parameter)).not.toThrow();
    },
  );

  test("Unknown property will throw error", () => {
    expect(() => study.getParameter(monitor, "fakeParameter")).toThrow();
  });
});
