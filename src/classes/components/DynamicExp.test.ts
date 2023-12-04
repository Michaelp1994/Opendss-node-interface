import { Generator } from ".";
import { Circuit } from "./Circuit";
import { DynamicExp } from "./DynamicExp";

describe("Testing DynamicExp Model", () => {
  const circuit = new Circuit("Esoura");
  const dynamic = new DynamicExp("dynamic1");
  const generator = new Generator("generator1", {
    DynamicEq: "dynamic1",
  });
  circuit.add(dynamic);
  circuit.add(generator);
  circuit.build();
  circuit.solve();

  test("if dynamicExp is properly loaded", () => {
    expect(circuit.getParameter(generator, "dynamicEq")).toBe("dynamic1");
  });
});
