import GeneralStudy from "@classes/GeneralStudy";
import { Circuit , PVSystem } from "@elements";
import InvControl from "./InvControl";

describe("Testing InvControl Model", () => {
  const study = new GeneralStudy();
  const circuit = new Circuit("TestCircuit");
  study.add(circuit);

  const pvSystem = new PVSystem("pvsystem");
  const invControl = new InvControl("invControl1");
  study.add(pvSystem);
  study.add(invControl);
  study.build();
  study.solve();

  test("if component is in circuit", () => {
    expect(() => study.setActiveElement(invControl)).not.toThrow();
  });

  test.each(invControl.parameters)(
    "if %s is in OpenDSS and the class model",
    (parameter) => {
      expect(
        Object.prototype.hasOwnProperty.call(invControl, parameter),
      ).toBeTruthy();
      expect(() => study.getParameter(invControl, parameter)).not.toThrow();
    },
  );

  test("Unknown property will throw error", () => {
    expect(() => study.getParameter(invControl, "fakeParameter")).toThrow();
  });
});
