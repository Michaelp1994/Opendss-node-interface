import { Line } from ".";
import { Circuit } from "./Circuit";
import { LineSpacing } from "./LineSpacing";

describe("Testing LineSpacing Model", () => {
  const circuit = new Circuit("Esoura");
  const spacing = new LineSpacing("spacing1");
  const line = new Line("line1", {
    spacing: "spacing1",
  });
  circuit.add(spacing);
  circuit.add(line);
  circuit.build();
  circuit.solve();
  test("if lineSpacing is properly loaded", () => {
    expect(circuit.getParameter(line, "spacing")).toBe("spacing1");
  });
});
