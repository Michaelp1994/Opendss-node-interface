import { Reactor } from ".";
import { Circuit } from "./Circuit";
import { XYcurve } from "./XYcurve";

describe("Testing XYcurve Model", () => {
  const circuit = new Circuit("Esoura");
  const curve = new XYcurve("curve1");
  const reactor = new Reactor("reactor1", {
    RCurve: "curve1",
  });
  circuit.add(curve);
  circuit.add(reactor);
  circuit.build();
  circuit.solve();

  test("if lineCode is properly loaded", () => {
    expect(circuit.getParameter(reactor, "RCurve")).toBe("curve1");
  });
});
