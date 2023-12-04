import { PVSystem } from ".";
import { Circuit } from "./Circuit";
import { TShape } from "./TShape";

describe("Testing TShape Model", () => {
  const circuit = new Circuit("Esoura");
  const shape = new TShape("shape1");
  const pvsystem = new PVSystem("pvsystem1", {
    Tyearly: "shape1",
  });
  circuit.add(shape);
  circuit.add(pvsystem);

  circuit.build();
  circuit.solve();
  test("if TShape is properly loaded", () => {
    expect(circuit.getParameter(pvsystem, "Tyearly")).toBe("shape1");
  });
});
