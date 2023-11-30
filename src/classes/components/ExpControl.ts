import { ExpControlInterface } from "@interfaces/ExpControlInterface";
import CircuitElementComponent from "./CircuitElementComponent";

/**   Circuit Element, Control Element  */
export class ExpControl extends CircuitElementComponent {
  _type = "ExpControl";
  _parameters = [
    "PVSystemList",
    "Vreg",
    "Slope",
    "VregTau",
    "Qbias",
    "VregMin",
    "VregMax",
    "QmaxLead",
    "QmaxLag",
    "EventLog",
    "DeltaQ_factor",
    "PreferQ",
    "Tresponse",
    "DERList",
    "basefreq",
    "enabled",
    "like",
  ];
  /** Array list of PVSystems to be controlled.
   *
   * If not specified, all PVSystems in the circuit are assumed to be controlled by this ExpControl.*/
  PVSystemList?: string[];
  /** Per-unit voltage at which reactive power is zero; defaults to 1.0.
   *
   * This may dynamically self-adjust when VregTau > 0, limited by VregMin and VregMax.If imput as 0, Vreg will be initialized from a snapshot solution with no inverter Q.The equilibrium point of reactive power is also affected by Qbias*/
  Vreg?: number;
  /** Per-unit reactive power injection / per-unit voltage deviation from Vreg; defaults to 50.
   *
   * Unlike InvControl, base reactive power is constant at the inverter kva rating.*/
  Slope?: number;
  /** Time constant for adaptive Vreg. Defaults to 1200 seconds.
   *
   * When the control injects or absorbs reactive power due to a voltage deviation from the Q=0 crossing of the volt-var curve, the Q=0 crossing will move toward the actual terminal voltage with this time constant. Over time, the effect is to gradually bring inverter reactive power to zero as the grid voltage changes due to non-solar effects. If zero, then Vreg stays fixed. IEEE1547-2018 requires adjustability from 300s to 5000s*/
  VregTau?: number;
  /** Equilibrium per-unit reactive power when V=Vreg; defaults to 0.
   *
   * Enter > 0 for lagging (capacitive) bias, < 0 for leading (inductive) bias.*/
  Qbias?: number;
  /** Lower limit on adaptive Vreg; defaults to 0.95 per-unit*/
  VregMin?: number;
  /** Upper limit on adaptive Vreg; defaults to 1.05 per-unit*/
  VregMax?: number;
  /** Limit on leading (inductive) reactive power injection, in per-unit of base kva; defaults to 0.44.For Category A inverters per P1547/D7, set this value to 0.25.
   *
   * Regardless of QmaxLead, the reactive power injection is still limited by dynamic headroom when actual real power output exceeds 0%*/
  QmaxLead?: number;
  /** Limit on lagging (capacitive) reactive power injection, in per-unit of base kva; defaults to 0.44.
   *
   * For Category A inverters per P1547/D7, set this value to 0.25.Regardless of QmaxLag, the reactive power injection is still limited by dynamic headroom when actual real power output exceeds 0%*/
  QmaxLag?: number;
  /** {Yes/True* | No/False} Default is No for ExpControl. Log control actions to Eventlog.*/
  EventLog?: boolean;
  /** Convergence parameter; Defaults to 0.7.
   *
   * Sets the maximum change (in per unit) from the prior var output level to the desired var output level during each control iteration. If numerical instability is noticed in solutions such as var sign changing from one control iteration to the next and voltages oscillating between two values with some separation, this is an indication of numerical instability (use the EventLog to diagnose). If the maximum control iterations are exceeded, and no numerical instability is seen in the EventLog of via monitors, then try increasing the value of this parameter to reduce the number of control iterations needed to achieve the control criteria, and move to the power flow solution.*/
  DeltaQ_factor?: number;
  /** {Yes/True* | No/False} Default is No for ExpControl.
   *
   * Curtails real power output as needed to meet the reactive power requirement. IEEE1547-2018 requires Yes, but the default is No for backward compatibility of OpenDSS models.*/
  PreferQ?: boolean;
  /** Open-loop response time for changes in Q.
   *
   * The value of Q reaches 90% of the target change within Tresponse, which corresponds to a low-pass filter having tau = Tresponse / 2.3026. The behavior is similar to LPFTAU in InvControl, but here the response time is input instead of the time constant. IEEE1547-2018 default is 10s for Catagory A and 5s for Category B, adjustable from 1s to 90s for both categories. However, the default is 0 for backward compatibility of OpenDSS models.*/
  Tresponse?: number;
  /** Alternative to PVSystemList for CIM export and import.
   *
   * However, storage is not actually implemented yet. Use fully qualified PVSystem names.*/
  DERList?: string[];
  /** Base Frequency for ratings.*/
  basefreq?: number;
  /** {Yes|No or True|False} Indicates whether this element is enabled.*/
  enabled?: boolean;
  constructor(
    nameOrOptions: string | ExpControlInterface,
    options?: Omit<ExpControlInterface, "name">
  ) {
    super();
    if (typeof nameOrOptions === "string") {
      this.name = nameOrOptions;
      Object.assign(this, options);
    } else {
      Object.assign(this, nameOrOptions);
    }
  }
}
