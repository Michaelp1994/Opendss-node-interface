import { Line } from ".";
import { Circuit } from "./Circuit";
import { LineSpacing } from "./LineSpacing";
import { WireData } from "./WireData";

describe("Testing WireData Model", () => {
  const circuit = new Circuit("Esoura");
  const wireData = new WireData("wire1", {
    normamps: 100,
    diam: 0.368,
    GMRac: 0.13356,
    Rac: 0.607,
    Runits: "mi",
    radunits: "in",
    GMRunits: "in",
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

  circuit.add(lineSpacing);
  circuit.add(wireData);
  circuit.add(line);

  circuit.build();
  circuit.solve();

  test("if wireData is properly loaded", () => {
    expect(circuit.getParameter(line, "wires")).toBe("wire1 wire1 wire1");
  });
});
