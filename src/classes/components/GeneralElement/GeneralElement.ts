// import BaseInterface from "@interfaces/BaseInterface";
import BaseComponent from "./BaseComponent";

export default abstract class GeneralComponent extends BaseComponent {
  _editable = false as const;

  // constructor(nameOrOptions: string | BaseInterface) {
  //   super(nameOrOptions);
  // }
}
