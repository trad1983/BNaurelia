/* eslint-disable prefer-const */
import { DataRepository } from "services/dataRepository";
import {  inject} from "aurelia-framework";
import {Router} from 'aurelia-router'
@inject(DataRepository, Router)
export class Events {
  events: any;


  constructor(private dataRepository, private router) {

}
goToDisc(){
// first way 
// this.router.navigate('#/discussion')
//second way
this.router.navigateToRoute('eventDetail', {eventId: this.events[0].id})
}
activate(params) {
  this.dataRepository.getEvents().then(events => {
    if (params.speakers || params.topic) {
      const filterResult = []
      events.forEach(item => {
        if(params.speaker && item.speaker.toLowerCase()
        .indexOf(params.speaker.toLowerCase()) >= 0){
      filterResult.push(item)
        }
        if(params.topic && item.title.toLowerCase()
        .indexOf(params.topic.toLowerCase()) >= 0){
      filterResult.push(item)
        }
      });
      this.events = filterResult
    }else{
      this.events = events
    }
    
    this.events.forEach(item => {
      item.detailUrl =  this.router.generate('eventDetail', {eventId: item.id})
  }) 
})
}
}
/*
first way to router 
1-on app.ts add this router   route: 'eventDetail/:eventId', moduleId:('events/event-detail'),
2-add this to events template <a href="#/eventDetail/${event.id}">  ${event.id} : ${event.title}</a>
3- on eventDetail module we add activate methods
	activate(params, routeConfig) {
		this.event = this.dataRepository.getEvent(parseInt(params.eventId));
	}
4- only this steps we need
second way generate Urls dynamic 
1- add name to route first 'eventDetail'
2- on event add  <a href.bind='event.detailUrl'>
3- add function to this on events.ts see the up on constructer
    dataRepository.getEvents().then( events => {
      this.events = events
      this.events.forEach(item => {
        item.detailUrl =  router.generate('eventDetail', {eventId: item.id})
    }) 
  })
  third way query string parameter my faivrote
1- we must used activate methods
2-





*/
