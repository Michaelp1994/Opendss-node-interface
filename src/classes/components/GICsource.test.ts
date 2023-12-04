import { GICLine, Line } from ".";
import { Circuit } from "./Circuit";
import { GICsource } from "./GICsource";

describe("Testing GICsource Model", () => {
  const circuit = new Circuit("Esoura");
  // const gicLine = new GICLine("example_component");
  const line = new Line("example_component");
  const component = new GICsource("example_component");
  circuit.add(line);
  circuit.add(component);
  circuit.build();
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
