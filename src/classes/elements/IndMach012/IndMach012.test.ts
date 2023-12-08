import GeneralStudy from "@classes/GeneralStudy";
import { Circuit, Line } from "@elements";
import IndMach012 from "./IndMach012";

describe("Testing IndMach012 Model", () => {
  const study = new GeneralStudy();
  const circuit = new Circuit("TestCircuit", {
    bus1: "bus1",
    basekv: 12.47,
    pu: 1.0,
  });

  study.add(circuit);
  const line = new Line("line", {
    bus1: "bus1",
  });
  study.add(line);
  const component = new IndMach012("example_component", {
    bus1: "bus1",
    phases: 3,
    kv: 12.47,
  });

  study.add(component);
  study.build();
  study.solve();

  test("if component is in circuit", () => {
    expect(() => study.setActiveElement(component)).not.toThrow();
  });

  test.each(component.parameters)(
    "if %s is in OpenDSS and the class model",
    (parameter) => {
      expect(
        Object.prototype.hasOwnProperty.call(component, parameter),
      ).toBeTruthy();
      expect(() => study.getParameter(component, parameter)).not.toThrow();
    },
  );

  test("Unknown property will throw error", () => {
    expect(() => study.getParameter(component, "fakeParameter")).toThrow();
  });
});
