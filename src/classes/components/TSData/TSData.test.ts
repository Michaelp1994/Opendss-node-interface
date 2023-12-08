import GeneralStudy from "@classes/GeneralStudy";
import { Line, LineSpacing } from ".";
import Circuit from "./Circuit";
import TSData from "./TSData";

describe("Testing TSData Model", () => {
  const study = new GeneralStudy();
  const circuit = new Circuit("TestCircuit");
  study.add(circuit);

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
  study.add(lineSpacing);
  study.add(tsData);
  study.add(line);
  study.build();
  study.solve();

  test("if TSData is properly loaded", () => {
    expect(study.getParameter(line, "tscables")).toBe("cable1 cable1 cable1");
  });
});
