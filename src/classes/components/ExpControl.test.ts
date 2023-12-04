import { PVSystem } from ".";
import { Circuit } from "./Circuit";
import { ExpControl } from "./ExpControl";

describe("Testing ExpControl Model", () => {
  const circuit = new Circuit("Esoura");
  const pvSystem = new PVSystem("pvsystem1");
  const component = new ExpControl("example_component", {
    // PVSystemList: "[pvsystem1]",
  });
  circuit.add(pvSystem);
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
