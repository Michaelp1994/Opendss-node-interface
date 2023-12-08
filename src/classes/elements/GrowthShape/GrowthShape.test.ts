import GeneralStudy from "@classes/GeneralStudy";
import { Circuit , Load } from "@elements";
import GrowthShape from "./GrowthShape";

describe("Testing GrowthShape Model", () => {
  const study = new GeneralStudy();
  const circuit = new Circuit("TestCircuit");
  study.add(circuit);

  const component = new GrowthShape("growthShape1", {
    npts: 3,
    year: [2021, 2021, 2022],
    mult: [1.05, 1.025, 1.02],
  });
  const load = new Load("example_load", { growth: "growthShape1" });
  study.add(component);
  study.add(load);
  study.build();
  study.solve();
  test("if GrowthShape is added to circuit", () => {
    expect(study.getParameter(load, "growth")).toBe("growthShape1");
  });
});
