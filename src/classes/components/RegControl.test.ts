import { Transformer } from ".";
import { Circuit } from "./Circuit";
import { RegControl } from "./RegControl";

describe("Testing RegControl Model", () => {
  const circuit = new Circuit("Esoura");
  const transformer = new Transformer("transformer1");
  const component = new RegControl("example_component", {
    transformer: "transformer1",
  });
  circuit.add(transformer);
  circuit.add(component);
  circuit.solve();

  test("if component is in circuit", () => {
    expect(() => circuit.setActiveElement(component)).not.toThrow();
  });

  test.each(component._parameters)(
    "if %s is in OpenDSS and the class model",
    (parameter) => {
      expect(component.hasOwnProperty(parameter)).toBeTruthy();
      expect(() => circuit.getParameter(component, parameter)).not.toThrow();
    }
  );

  test("Unknown property will throw error", () => {
    expect(() => circuit.getParameter(component, "fakeParameter")).toThrow();
  });
});
