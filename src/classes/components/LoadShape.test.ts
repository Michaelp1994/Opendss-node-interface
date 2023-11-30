import { Load } from ".";
import { Circuit } from "./Circuit";
import { LoadShape } from "./LoadShape";

describe("Testing LoadShape Model", () => {
  const circuit = new Circuit("Esoura");
  const loadShape = new LoadShape("loadshape1");
  const load = new Load("load1", {
    yearly: "loadshape1",
  });

  circuit.add(loadShape);
  circuit.add(load);
  circuit.solve();

  test("if loadshape is properly loaded", () => {
    expect(circuit.getParameter(load, "yearly")).toBe("loadshape1");
  });
});
