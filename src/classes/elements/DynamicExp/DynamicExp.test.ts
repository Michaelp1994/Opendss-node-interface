import GeneralStudy from "@classes/GeneralStudy";
import { Generator } from ".";
import Circuit from "./Circuit";
import DynamicExp from "./DynamicExp";

describe("Testing DynamicExp Model", () => {
  const study = new GeneralStudy();
  const circuit = new Circuit("TestCircuit");
  study.add(circuit);

  const dynamic = new DynamicExp("dynamic1");
  const generator = new Generator("generator1", {
    DynamicEq: "dynamic1",
  });
  study.add(dynamic);
  study.add(generator);
  study.build();
  study.solve();

  test("if dynamicExp is properly loaded", () => {
    expect(study.getParameter(generator, "dynamicEq")).toBe("dynamic1");
  });
});
