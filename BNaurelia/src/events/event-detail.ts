import { DataRepository } from 'services/dataRepository';
import { DialogService } from "aurelia-dialog";
import {inject} from 'aurelia-framework';
import { EditDialog } from "events/edit-dialog";


@inject(DataRepository, DialogService)
export class EventDetail {
  dataRepository:any
  event: any;
  dailogService: any;
	constructor(DataRepository, DialogService) {
		this.dataRepository = DataRepository;
    this.dailogService = DialogService
	}	

	activate(params, routeConfig) {
		this.event = this.dataRepository.getEvent(parseInt(params.eventId));
	}
  editEvent(event){
    const orignial = JSON.parse(JSON.stringify(event))
    this.dailogService.open({viewModel: EditDialog, model:this.event})
    .then(result => {
    if(result.wasCancelled){
    this.event.title = orignial.title
    this.event.description = orignial.description
    }
    })
  }
}
