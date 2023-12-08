import GeneralStudy from "@classes/GeneralStudy";
import { Circuit, Transformer } from "@elements";
import UPFC from "./UPFC";

describe("Testing UPFC Model", () => {
  const study = new GeneralStudy();
  const circuit = new Circuit("TestCircuit", {
    bus1: "sourceBus",
  });
  study.add(circuit);
  const transformer = new Transformer("t1", {
    buses: ["sourceBus.1.0", "UPFC_Input.1"],
  });
  study.add(transformer);
  const component = new UPFC("upfc", {
    Phases: 1,
    bus1: "UPFC_Input.1",
    bus2: "UPFC_Output.1",
    refkV: 0.242,
    Mode: 1,
    Tol1: 0.005,
    Xs: 0.02,
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
