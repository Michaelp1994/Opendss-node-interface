import GeneralStudy from "@classes/GeneralStudy";
import { Line } from ".";
import Circuit from "./Circuit";
import LineSpacing from "./LineSpacing";
import WireData from "./WireData";

describe("Testing WireData Model", () => {
  const study = new GeneralStudy();
  const circuit = new Circuit("TestCircuit");
  study.add(circuit);

  const wireData = new WireData("wire1", {
    normAmps: 100,
    diam: 0.368,
    gmrac: 0.13356,
    rac: 0.607,
    rUnits: "mi",
    radUnits: "in",
    gmrUnits: "in",
  });

  const lineSpacing = new LineSpacing("spacing1", {
    nconds: 3,
    nphases: 3,
    x: [-1.5, 0, 1.5],
    h: [15, 15, 15],
  });

  const line = new Line("line1", {
    spacing: "spacing1",
    wires: ["wire1", "wire1", "wire1"],
  });

  study.add(lineSpacing);
  study.add(wireData);
  study.add(line);

  study.build();
  study.solve();

  test("if wireData is properly loaded", () => {
    expect(study.getParameter(line, "wires")).toBe("wire1 wire1 wire1");
  });
});
