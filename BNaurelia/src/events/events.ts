import { PLATFORM } from 'aurelia-pal';
  import {RouterConfiguration, Router} from 'aurelia-router';
  export class Events {
    router:any
    configureRouter(config, router) {
      this.router = router;
      config.title = 'futer';
      config.map([
      { route: ['','future'], moduleId:PLATFORM.moduleName('events/eventslist'), 
        title: 'Future Events', nav: true , name:'future'},
      { route: 'past', moduleId: PLATFORM.moduleName('events/eventslist'), 
        title: 'Past Events', nav: true, href: '/events/past', name:'past'}
      ]);
    }
  
  }
