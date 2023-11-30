import { Circuit } from "./Circuit";
import { PriceShape } from "./PriceShape";

describe("Testing PriceShape Model", () => {
  const circuit = new Circuit("Esoura");
  const component = new PriceShape("example_component");
  circuit.add(component);
  circuit.solve();

  // FIXME: don't know how to test.
  test("Useless Test, to be replaced.", () => {
    expect(1).toBe(1);
  });
});
