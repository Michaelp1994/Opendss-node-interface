import GeneralStudy from "@classes/GeneralStudy";
import { Circuit , Line } from "@elements";
import LineSpacing from "./LineSpacing";

describe("Testing LineSpacing Model", () => {
  const study = new GeneralStudy();
  const circuit = new Circuit("TestCircuit");
  study.add(circuit);

  const spacing = new LineSpacing("spacing1");
  const line = new Line("line1", {
    spacing: "spacing1",
  });
  study.add(spacing);
  study.add(line);
  study.build();
  study.solve();
  test("if lineSpacing is properly loaded", () => {
    expect(study.getParameter(line, "spacing")).toBe("spacing1");
  });
});
