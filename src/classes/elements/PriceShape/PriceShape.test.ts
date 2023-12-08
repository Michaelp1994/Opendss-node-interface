import GeneralStudy from "@classes/GeneralStudy";
import { Circuit } from "@elements";
import PriceShape from "./PriceShape";

describe("Testing PriceShape Model", () => {
  const study = new GeneralStudy();
  const circuit = new Circuit("TestCircuit");
  study.add(circuit);

  const component = new PriceShape("example_component");
  study.add(component);
  study.build();
  study.solve();

  // FIXME: don't know how to test.
  test("Useless Test, to be replaced.", () => {
    expect(1).toBe(1);
  });
});
