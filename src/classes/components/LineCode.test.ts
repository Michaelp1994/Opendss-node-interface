import { Circuit } from "./Circuit";
import { Line } from "./Line";
import { LineCode } from "./LineCode";

describe("Testing LineCode Model", () => {
  const circuit = new Circuit("Esoura");
  const linecode = new LineCode("linecode1", {});
  const line = new Line("line1", {
    linecode: "linecode1",
  });
  circuit.add(linecode);
  circuit.add(line);
  circuit.solve();

  test("if lineCode is properly loaded", () => {
    expect(circuit.getParameter(line, "linecode")).toBe("linecode1");
  });
});
