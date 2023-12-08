import GeneralStudy from "@classes/GeneralStudy";
import { Circuit, Line, LineCode } from "@elements";

describe("Testing LineCode Model", () => {
  const study = new GeneralStudy();
  const circuit = new Circuit("TestCircuit");
  study.add(circuit);

  const linecode = new LineCode("linecode1", {});
  const line = new Line("line1", {
    linecode: "linecode1",
  });
  study.add(linecode);
  study.add(line);
  study.build();
  study.solve();

  test("if lineCode is properly loaded", () => {
    expect(study.getParameter(line, "linecode")).toBe("linecode1");
  });
});
