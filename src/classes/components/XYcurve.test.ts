import GeneralStudy from "@classes/GeneralStudy";
import { Reactor } from ".";
import Circuit from "./Circuit";
import XYcurve from "./XYcurve";

describe("Testing XYcurve Model", () => {
  const study = new GeneralStudy();
  const circuit = new Circuit("TestCircuit");
  study.add(circuit);

  const curve = new XYcurve("curve1");
  const reactor = new Reactor("reactor1", {
    RCurve: "curve1",
  });
  study.add(curve);
  study.add(reactor);
  study.build();
  study.solve();

  test("if lineCode is properly loaded", () => {
    expect(study.getParameter(reactor, "RCurve")).toBe("curve1");
  });
});
