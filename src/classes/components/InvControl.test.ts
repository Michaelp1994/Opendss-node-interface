import { PVSystem } from ".";
import { Circuit } from "./Circuit";
import { InvControl } from "./InvControl";

describe("Testing InvControl Model", () => {
  const circuit = new Circuit("Esoura");
  const pvSystem = new PVSystem("pvsystem");
  const invControl = new InvControl("invControl1");
  circuit.add(pvSystem);
  circuit.add(invControl);
  circuit.solve();

  test("if component is in circuit", () => {
    expect(() => circuit.setActiveElement(invControl)).not.toThrow();
  });

  test.each(invControl._parameters)(
    "if %s is in OpenDSS and the class model",
    (parameter) => {
      expect(invControl.hasOwnProperty(parameter)).toBeTruthy();
      expect(() => circuit.getParameter(invControl, parameter)).not.toThrow();
    }
  );

  test("Unknown property will throw error", () => {
    expect(() => circuit.getParameter(invControl, "fakeParameter")).toThrow();
  });
});
