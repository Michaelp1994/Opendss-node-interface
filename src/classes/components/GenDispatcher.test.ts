import { Line } from ".";
import { Circuit } from "./Circuit";
import { GenDispatcher } from "./GenDispatcher";

describe("Testing GenDispatcher Model", () => {
  const circuit = new Circuit("Esoura");
  const line = new Line("line1");
  const component = new GenDispatcher("example_component", {
    element: "Line.line1",
  });
  circuit.add(line);
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
