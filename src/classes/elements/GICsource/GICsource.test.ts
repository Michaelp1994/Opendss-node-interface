import GeneralStudy from "@classes/GeneralStudy";
import { Circuit , Line } from "@elements";
import GICsource from "./GICsource";

describe("Testing GICsource Model", () => {
  const study = new GeneralStudy();
  const circuit = new Circuit("TestCircuit");
  study.add(circuit);

  // const gicLine = new GICLine("example_component");
  const line = new Line("example_component");
  const component = new GICsource("example_component");
  study.add(line);
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
