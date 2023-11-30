import { Load } from ".";
import { Circuit } from "./Circuit";
import { GrowthShape } from "./GrowthShape";

describe("Testing GrowthShape Model", () => {
  const circuit = new Circuit("Esoura");
  const component = new GrowthShape("growthShape1", {
    npts: 3,
    year: [2021, 2021, 2022],
    mult: [1.05, 1.025, 1.02],
  });
  const load = new Load("example_load", { growth: "growthShape1" });
  circuit.add(component);
  circuit.add(load);
  circuit.solve();
  test("if GrowthShape is added to circuit", () => {
    expect(circuit.getParameter(load, "growth")).toBe("growthShape1");
  });
});
