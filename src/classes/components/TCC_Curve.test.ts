import { Fuse, Line } from ".";
import { Circuit } from "./Circuit";
import { TCC_Curve } from "./TCC_Curve";

describe("Testing TCC_Curve Model", () => {
  const circuit = new Circuit("Esoura");
  const curve = new TCC_Curve("curve1", {
    npts: 3,
    C_array: [1, 2, 3],
    T_array: [1, 2, 3],
  });
  const line = new Line("line1");
  const fuse = new Fuse("fuse1", {
    monitoredObj: "Line.line1",
    fuseCurve: "curve1",
  });
  circuit.add(curve);
  circuit.add(line);
  circuit.add(fuse);
  circuit.solve();
  circuit.save("");
  test("if TShape is properly loaded", () => {
    expect(circuit.getParameter(fuse, "fuseCurve")).toBe("curve1");
  });
});
