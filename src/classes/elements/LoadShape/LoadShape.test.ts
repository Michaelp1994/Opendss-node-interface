import GeneralStudy from "@classes/GeneralStudy";
import { Load } from ".";
import Circuit from "./Circuit";
import LoadShape from "./LoadShape";

describe("Testing LoadShape Model", () => {
  const study = new GeneralStudy();
  const circuit = new Circuit("TestCircuit");
  study.add(circuit);

  const loadShape = new LoadShape("loadshape1");
  const load = new Load("load1", {
    yearly: "loadshape1",
  });

  study.add(loadShape);
  study.add(load);
  study.build();
  study.solve();

  test("if loadshape is properly loaded", () => {
    expect(study.getParameter(load, "yearly")).toBe("loadshape1");
  });
});
