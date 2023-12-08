import GeneralStudy from "@classes/GeneralStudy";
import { Circuit } from "@elements";
import GICLine from "./GICLine";

describe("Testing GICLine Model", () => {
  const study = new GeneralStudy();
  const circuit = new Circuit("TestCircuit", {
    bus1: "sourceBus",
  });
  study.add(circuit);

  const component = new GICLine("example_component", {
    bus1: "sourceBus",
    bus2: "loadBus",
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
