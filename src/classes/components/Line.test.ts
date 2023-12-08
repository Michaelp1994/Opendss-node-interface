import GeneralStudy from "@classes/GeneralStudy";
import Circuit from "./Circuit";
import Line from "./Line";

describe("Testing Line Model", () => {
  const study = new GeneralStudy();
  const circuit = new Circuit("TestCircuit");
  study.add(circuit);

  const line = new Line("example_line");
  study.add(line);
  study.build();
  study.solve();
  test.each(line.parameters)("if %s is in OpenDSS", (parameter) =>
    expect(() => study.getParameter(line, parameter)).not.toThrow(),
  );

  test.each(line.parameters)("if %s is in class model", (parameter) =>
    expect(Object.prototype.hasOwnProperty.call(line, parameter)).toBeTruthy(),
  );

  test("Unknown property will throw error", () => {
    expect(() => study.getParameter(line, "fakeParameter")).toThrow();
  });
});
