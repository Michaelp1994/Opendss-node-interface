import GeneralStudy from "@classes/GeneralStudy";
import { PVSystem } from ".";
import Circuit from "./Circuit";
import TShape from "./TShape";

describe("Testing TShape Model", () => {
  const study = new GeneralStudy();
  const circuit = new Circuit("TestCircuit");
  study.add(circuit);

  const shape = new TShape("shape1");
  const pvsystem = new PVSystem("pvsystem1", {
    Tyearly: "shape1",
  });
  study.add(shape);
  study.add(pvsystem);

  study.build();
  study.solve();
  test("if TShape is properly loaded", () => {
    expect(study.getParameter(pvsystem, "Tyearly")).toBe("shape1");
  });
});
