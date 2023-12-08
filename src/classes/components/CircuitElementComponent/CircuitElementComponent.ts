// import BaseInterface from "@interfaces/BaseInterface";
import BaseComponent from "./BaseComponent";

export default abstract class CircuitElementComponent extends BaseComponent {
  _editable = true as const;

  // constructor(nameOrOptions: string | BaseInterface) {
  //   super(nameOrOptions);
  // }
}
