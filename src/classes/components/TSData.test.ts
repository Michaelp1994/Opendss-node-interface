import { CNData, Line, LineSpacing } from ".";
import { Circuit } from "./Circuit";
import { TSData } from "./TSData";

describe("Testing TSData Model", () => {
  const circuit = new Circuit("Esoura");
  const tsData = new TSData("cable1", {
    normamps: 165,
    diam: 0.368,
    GMRac: 0.1332,
    Rac: 0.97,
    Runits: "mi",
    radunits: "in",
    GMRunits: "in",
    EpsR: 2.3,
    InsLayer: 0.22,
    DiaIns: 0.82,
    DiaCable: 1.06,
    DiaShield: 0.88,
    TapeLayer: 0.005,
    TapeLap: 20,
  });

  const lineSpacing = new LineSpacing("spacing1", {
    nconds: 3,
    nphases: 3,
    x: [-1.5, 0, 1.5],
    h: [15, 15, 15],
  });
  const line = new Line("line1", {
    spacing: "spacing1",
    tscables: ["cable1", "cable1", "cable1"],
  });
  circuit.add(lineSpacing);
  circuit.add(tsData);
  circuit.add(line);
  circuit.build();
  circuit.solve();

  test("if TSData is properly loaded", () => {
    expect(circuit.getParameter(line, "tscables")).toBe("cable1 cable1 cable1");
  });
});
