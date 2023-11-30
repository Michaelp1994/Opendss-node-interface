import { Circuit } from "./Circuit";
import { Transformer } from "./Transformer";
import { XfmrCode } from "./XfmrCode";

describe("Testing XfmrCode Model", () => {
  const circuit = new Circuit("Esoura");
  const code = new XfmrCode("code1");
  const transformer = new Transformer("transformer1", {
    XfmrCode: "code1",
  });
  circuit.add(code);
  circuit.add(transformer);
  circuit.solve();

  test("if XFMRCode is properly loaded", () => {
    expect(circuit.getParameter(transformer, "XfmrCode")).toBe("code1");
  });
});
