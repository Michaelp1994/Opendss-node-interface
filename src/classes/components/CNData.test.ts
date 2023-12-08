import GeneralStudy from "@classes/GeneralStudy";
import { Line, LineSpacing } from ".";
import CNData from "./CNData";
import Circuit from "./Circuit";

describe("Testing CNData Model", () => {
  const study = new GeneralStudy();
  const circuit = new Circuit("TestCircuit");
  study.add(circuit);

  const cnData = new CNData("cable1", {
    diam: 46,
    rac: 2.8e-5,
    gmrAc: 27.105,
    rUnits: "km",
    radUnits: "mm",
    gmrUnits: "mm",
    normAmps: 793,
    insLayer: 21,
    diaIns: 92.6,
    epsR: 2.3,
    k: 50,
    diaStrand: 2.2,
    rStrand: 2.8e-5,
    gmrStrand: 0.85668,
    diaCable: 119.5,
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

  study.add(cnData);
  study.add(lineSpacing);
  study.add(line);
  study.build();
  study.saveScript("test.dss");
  study.solve();

  test("if CNData is properly loaded", () => {
    expect(study.getParameter(line, "cncables")).toBe("cable1 cable1 cable1");
  });
});
