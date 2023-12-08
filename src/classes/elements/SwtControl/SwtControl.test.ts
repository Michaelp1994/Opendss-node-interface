import GeneralStudy from "@classes/GeneralStudy";
import { Circuit , Line } from "@elements";
import SwtControl from "./SwtControl";

describe("Testing SwtControl Model", () => {
  const study = new GeneralStudy();
  const circuit = new Circuit("TestCircuit");
  study.add(circuit);
  const line = new Line("line1");
  const component = new SwtControl("example_component", {
    SwitchedObj: "Line.line1",
  });
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

  test("if trying to read an unknown property will throw an error", () => {
    expect(() => study.getParameter(component, "fakeParameter")).toThrow();
  });
});
