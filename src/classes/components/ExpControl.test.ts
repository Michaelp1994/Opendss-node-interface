import GeneralStudy from "@classes/GeneralStudy";
import { PVSystem } from ".";
import Circuit from "./Circuit";
import ExpControl from "./ExpControl";

describe("Testing ExpControl Model", () => {
  const study = new GeneralStudy();
  const circuit = new Circuit("TestCircuit");
  study.add(circuit);

  const pvSystem = new PVSystem("pvsystem1");
  const component = new ExpControl("example_component", {
    // PVSystemList: "[pvsystem1]",
  });
  study.add(pvSystem);
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
