import { splitStringsIntoRows } from "../helpers/splitArray";
import { Circuit } from "../models/Circuit";
import { Line } from "../models/Line";

test("should split an array of strings into rows with a maximum length of 150 characters", () => {
  // Example usage:
  const inputArray = ["abcde", "xyz", "ijklm", "uvwxy", "qrst"];
  const result = splitStringsIntoRows(inputArray);
  result.forEach((row) => {
    const rowLength = row.length;
    //const rowLength = row.reduce((acc, str) => acc + str.length, 0);
    expect(rowLength).toBeLessThanOrEqual(150);
  });
});
test("Create a Circuit", () => {
  const circuit = new Circuit("Toyota", { bus1: "b_toyota" });
  const line = new Line("Line1");
  const line2 = new Line("Line2", {
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
  const line3 = new Line({
    name: "Line3",
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
  circuit.add(line2);
  circuit.add(line3);
  circuit.output();
});

test("should build a basic circuit", () => {
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
  circuit.solve();
  const buses = circuit.getBuses();
  expect(buses).toStrictEqual(["b_toyota", "b_esoura"]);
});
