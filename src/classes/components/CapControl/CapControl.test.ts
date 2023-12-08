import GeneralStudy from "@classes/GeneralStudy";
import { Capacitor, Line } from ".";
import CapControl from "./CapControl";
import Circuit from "./Circuit";

describe("Testing CapControl Model", () => {
  const study = new GeneralStudy();
  const circuit = new Circuit("TestCircuit");
  study.add(circuit);

  const line = new Line("line1");
  const capacitor = new Capacitor("capacitor1");
  const component = new CapControl("example_component", {
    element: "Line.line1",
    capacitor: "capacitor1",
  });
  study.add(line);
  study.add(capacitor);
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
