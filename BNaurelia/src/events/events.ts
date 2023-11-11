import { DataRepository } from "services/dataRepository";
import {  inject} from "aurelia-framework";
import {Router} from 'aurelia-router'
@inject(DataRepository, Router)
export class Events {
  events: any;


  constructor(private dataRepository, private router) {
    dataRepository.getEvents().then( events => {
      this.events = events
      // this.events.array.forEach(item => item.detailUrl = 
      //   router.generate('eventDetail', {eventId: item.id}));
    }) 
  }
}
