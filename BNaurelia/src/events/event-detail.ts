import { DataRepository } from 'services/dataRepository';

import {inject} from 'aurelia-framework';


@inject(DataRepository)
export class EventDetail {
  dataRepository:any
  event: any;
	constructor(DataRepository) {
		this.dataRepository = DataRepository;
	}	

	activate(params, routeConfig) {
		this.event = this.dataRepository.getEvent(parseInt(params.eventId));
	}
}
