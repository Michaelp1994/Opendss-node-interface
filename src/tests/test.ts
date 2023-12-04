import { Circuit, Fault, Line, Reactor, Vsource } from "@components/index";

test("Create a Circuit", () => {
  const circuit = new Circuit("Toyota", {
    bus1: "b_toyota",
    Isc1: 3000,
    Isc3: 4000,
    x0r0: 3,
    x1r1: 4,
    phases: 3,
  });
  const esoura = new Vsource("Esoura", {
    bus1: "b_esoura",
    Isc1: 3000,
    Isc3: 4000,
    x0r0: 3,
    x1r1: 4,
    phases: 4,
  });
  const line = new Line("Line", {
    bus1: "b_toyota",
    bus2: "T1",
    length: 1,
    units: "km",
    phases: 4,
  });
  const reactor = new Reactor("T1_RT", {
    bus1: "T1",
    X: 0,
    R: 2,
    phases: 1,
  });
  const line2 = new Line("Line2", {
    bus1: "T1",
    bus2: "b_esoura",
    length: 1,
    units: "km",
    phases: 5,
  });

  const fault = new Fault("SHORT_CIRCUIT", {
    bus1: "T1.1",
    bus2: "T1.4",
  });
  circuit.add(esoura);
  circuit.add(line);
  circuit.add(line2);
  circuit.add(reactor);
  circuit.add(fault);
  circuit.build();
  circuit.solve();
  const current = circuit.readCurrent(fault, 1);
  expect(current).toBeGreaterThan(0);
});

test("should build a basic circuit and test the correct buses.", () => {
  const circuit = new Circuit("Toyota", { bus1: "b_toyota" });
  const line = new Line("Line1", {
    bus1: "b_toyota",
    bus2: "b_esoura",
    length: 1000,
    units: "km",
    phases: 3,
    Xg: 0,
    Rg: 0,
    rho: 100,
    C0: 0,
    C1: 1,
    B0: 10,
    B1: 500,
    normamps: 1000,
    r0: 500,
    r1: 500,
    EarthModel: "Carson",
    x0: 10,
    x1: 10,
    basefreq: 60,
  });

  circuit.add(line);
  circuit.build();
  circuit.solve();
  const buses = circuit.getBuses();
  expect(buses).toStrictEqual(["b_toyota", "b_esoura"]);
});
