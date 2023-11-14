import { PLATFORM } from 'aurelia-pal';
/* eslint-disable @typescript-eslint/no-empty-function */

import 'asset/styles/main.css'
import {RouterConfiguration, Router} from 'aurelia-router';

export class App {
  router: Router;
  constructor(){
  
  }
  configureRouter(config: RouterConfiguration, router: Router): void {
    this.router = router;
    config.title = 'Title';
    config.map([
      { 
        route: ['','events'],
        name: 'name', 
        moduleId:PLATFORM.moduleName('events/events'), 
        title:'Events', 
        nav:true
      },
      { 
        route: 'jobs',
        name: 'Jobs', 
        moduleId:PLATFORM.moduleName('jobs/jobs'), 
        title:'Jobs', 
        nav:true
      },
      { 
        route: 'discussion',
        name: 'Discussion', 
        moduleId:PLATFORM.moduleName('discussion/discussion'), 
        title:'Discussion', 
        nav:true
      },
      { 
        route: 'eventDetail/:eventId',
        name:'eventDetail',
        moduleId:PLATFORM.moduleName('events/event-detail'), 
      },


    ]);

  }
  
}
