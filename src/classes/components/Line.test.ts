import { Circuit } from "./Circuit";
import { Line } from "./Line";

describe("Testing Line Model", () => {
  const circuit = new Circuit("Esoura");
  const line = new Line("example_line");
  circuit.add(line);
  circuit.solve();
  test.each(line._parameters)("if %s is in OpenDSS", (parameter) =>
    expect(() => circuit.getParameter(line, parameter)).not.toThrow()
  );

  test.each(line._parameters)("if %s is in class model", (parameter) =>
    expect(line.hasOwnProperty(parameter)).toBeTruthy()
  );

  test("Unknown property will throw error", () => {
    expect(() => circuit.getParameter(line, "fakeParameter")).toThrow();
  });
});
