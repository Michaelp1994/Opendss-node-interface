import GeneralStudy from "@classes/GeneralStudy";
import { Circuit , Transformer } from "@elements";
import RegControl from "./RegControl";

describe("Testing RegControl Model", () => {
  const study = new GeneralStudy();
  const circuit = new Circuit("TestCircuit");
  study.add(circuit);

  const transformer = new Transformer("transformer1");
  const component = new RegControl("example_component", {
    transformer: "transformer1",
  });
  study.add(transformer);
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
