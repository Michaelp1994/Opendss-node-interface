import GeneralStudy from "@classes/GeneralStudy";
import { Line, LineSpacing, WireData } from ".";
import Circuit from "./Circuit";
import LineGeometry from "./LineGeometry";

describe("Testing LineGeometry Model", () => {
  const study = new GeneralStudy();
  const circuit = new Circuit("TestCircuit");
  study.add(circuit);

  const phase = new WireData("wire", {
    diam: 18.29,
    radUnits: "mm",
    rac: 0.2081,
    rUnits: "km",
  });

  const spacing = new LineSpacing("spacing", {
    x: [-3.15, -3.15, -3.15],
    h: [14.08, 17.74, 21.4],
  });

  const geometry = new LineGeometry("geometry", {
    nconds: 3,
    spacing: spacing.name,
    wires: ["wire", "wire", "wire"],
  });
  const line = new Line("line1", {
    geometry: "geometry",
  });
  study.add(phase);
  // study.add(neutral);
  study.add(spacing);
  study.add(geometry);
  study.add(line);
  study.build();
  study.solve();

  test("if lineSpacing is properly loaded", () => {
    expect(study.getParameter(line, "geometry")).toBe("geometry");
  });
});
