import { Line } from ".";
import { Circuit } from "./Circuit";
import { LineGeometry } from "./LineGeometry";

describe("Testing LineGeometry Model", () => {
  const circuit = new Circuit("Esoura");
  const geometry = new LineGeometry("geometry1");
  const line = new Line("line1", {
    geometry: "geometry1",
  });
  circuit.add(geometry);
  circuit.add(line);
  circuit.build();
  circuit.solve();

  test("if lineSpacing is properly loaded", () => {
    expect(circuit.getParameter(line, "geometry")).toBe("geometry1");
  });
});
