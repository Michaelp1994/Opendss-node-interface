import GeneralStudy from "@classes/GeneralStudy";
import { Circuit , Line, Storage } from "@elements";
import StorageController from "./StorageController";

describe("Testing StorageController Model", () => {
  const study = new GeneralStudy();
  const circuit = new Circuit("TestCircuit");
  study.add(circuit);

  const line = new Line("line1");
  const storage = new Storage("storage1");
  const component = new StorageController("example_component", {
    Element: "Line.line1",
  });
  study.add(line);
  study.add(storage);
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
