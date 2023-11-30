import { Line, LineSpacing } from ".";
import { CNData } from "./CNData";
import { Circuit } from "./Circuit";

describe("Testing CNData Model", () => {
  const circuit = new Circuit("Esoura");
  const cnData = new CNData("cable1", {
    diam: 46,
    Rac: 2.8e-5,
    GMRac: 27.105829484365415,
    Runits: "km",
    radunits: "mm",
    GMRunits: "mm",
    normamps: 793,
    InsLayer: 21,
    DiaIns: 92.6,
    EpsR: 2.3,
    k: 50,
    DiaStrand: 2.2,
    Rstrand: 2.8e-5,
    GmrStrand: 0.85668,
    DiaCable: 119.5,
  });
  const lineSpacing = new LineSpacing("spacing1", {
    nconds: 3,
    nphases: 3,
    x: [-1.5, 0, 1.5],
    h: [15, 15, 15],
  });
  const line = new Line("line1", {
    spacing: "spacing1",
    cncables: ["cable1", "cable1", "cable1"],
  });

  circuit.add(cnData);
  circuit.add(lineSpacing);
  circuit.add(line);
  circuit.solve();

  test("if CNData is properly loaded", () => {
    expect(circuit.getParameter(line, "cncables")).toBe("cable1 cable1 cable1");
  });
});
