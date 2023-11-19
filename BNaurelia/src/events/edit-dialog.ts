import { inject } from "aurelia-framework";
import { DialogController } from "aurelia-dialog";
@inject(DialogController)
export class EditDialog {
dialogController: any;
  event: any;
constructor(DialogController){
this.dialogController = DialogController
}
activate(event) {
  this.event = event
}
save(){
this.dialogController.ok()
}
cancel(){
  this.dialogController.cancel()
}
}
