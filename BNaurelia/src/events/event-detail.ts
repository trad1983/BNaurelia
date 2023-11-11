import { DataRepository } from "services/dataRepository";
import {  inject} from "aurelia-framework";
@inject(DataRepository)
export class EventDetail {
 
   dataRepository:any
  event: any;
  constructor(dataRepository) {
    this.dataRepository = dataRepository
  }
  activate(params, routeConfig) {
   this.event =  this.dataRepository.getEvent(+params.eventId)
  }
}
