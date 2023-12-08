import GeneralStudy from "@classes/GeneralStudy";
import { Circuit, Fuse, Line } from "@elements";

describe("Testing Fuse Model", () => {
  const study = new GeneralStudy();
  const circuit = new Circuit("TestCircuit");
  study.add(circuit);

  const line = new Line("line1");
  const fuse = new Fuse("fuse1", {
    monitoredObj: "Line.line1",
  });
  study.add(line);
  study.add(fuse);
  study.build();
  study.solve();

  test("if component is in circuit", () => {
    expect(() => study.setActiveElement(fuse)).not.toThrow();
  });

  test.each(fuse.parameters)(
    "if %s is in OpenDSS and the class model",
    (parameter) => {
      expect(
        Object.prototype.hasOwnProperty.call(fuse, parameter),
      ).toBeTruthy();
      expect(() => study.getParameter(fuse, parameter)).not.toThrow();
    },
  );

  test("Unknown property will throw error", () => {
    expect(() => study.getParameter(fuse, "fakeParameter")).toThrow();
  });
});
