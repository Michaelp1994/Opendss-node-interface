import { Circuit } from "./Circuit";
import { VSConverter } from "./VSConverter";

describe("Testing VSConverter Model", () => {
  const circuit = new Circuit("Esoura");
  const component = new VSConverter("example_component");
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
