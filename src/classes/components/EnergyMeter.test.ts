import GeneralStudy from "@classes/GeneralStudy";
import { Line } from ".";
import Circuit from "./Circuit";
import EnergyMeter from "./EnergyMeter";

describe("Testing EnergyMeter Model", () => {
  const study = new GeneralStudy();
  const circuit = new Circuit("TestCircuit", {
    bus1: "B_Esoura",
  });
  study.add(circuit);
  const line = new Line("line1", {
    bus1: "B_Esoura",
    bus2: "B_Toyota",
  });
  study.add(line);
  const component = new EnergyMeter("example_component", {
    element: "Line.line1",
  });
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
