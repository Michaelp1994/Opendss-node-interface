import GeneralStudy from "@classes/GeneralStudy";
import { Fuse, Line } from ".";
import Circuit from "./Circuit";
import TCC_Curve from "./TCC_Curve";

describe("Testing TCC_Curve Model", () => {
  const study = new GeneralStudy();
  const circuit = new Circuit("TestCircuit");
  study.add(circuit);

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
  study.add(curve);
  study.add(line);
  study.add(fuse);
  study.build();
  study.solve();
  test("if TShape is properly loaded", () => {
    expect(study.getParameter(fuse, "fuseCurve")).toBe("curve1");
  });
});
