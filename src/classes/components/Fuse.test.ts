import { Circuit } from "./Circuit";
import { Fuse } from "./Fuse";
import { Line } from "./Line";

describe("Testing Fuse Model", () => {
  const circuit = new Circuit("Esoura");
  const line = new Line("line1");
  const fuse = new Fuse("fuse1", {
    monitoredObj: "Line.line1",
  });
  circuit.add(line);
  circuit.add(fuse);
  circuit.build();
  circuit.solve();

  test("if component is in circuit", () => {
    expect(() => circuit.setActiveElement(fuse)).not.toThrow();
  });

  test.each(fuse._parameters)(
    "if %s is in OpenDSS and the class model",
    (parameter) => {
      expect(fuse.hasOwnProperty(parameter)).toBeTruthy();
      expect(() => circuit.getParameter(fuse, parameter)).not.toThrow();
    }
  );

  test("Unknown property will throw error", () => {
    expect(() => circuit.getParameter(fuse, "fakeParameter")).toThrow();
  });
});
