import GeneralStudy from "@classes/GeneralStudy";
import { Circuit, Transformer, XfmrCode } from "@elements";

describe("Testing XfmrCode Model", () => {
  const study = new GeneralStudy();
  const circuit = new Circuit("TestCircuit");
  study.add(circuit);

  const code = new XfmrCode("code1");
  const transformer = new Transformer("transformer1", {
    XfmrCode: "code1",
  });
  study.add(code);
  study.add(transformer);
  study.build();
  study.solve();

  test("if XFMRCode is properly loaded", () => {
    expect(study.getParameter(transformer, "XfmrCode")).toBe("code1");
  });
});
