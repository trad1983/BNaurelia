
import { PLATFORM } from 'aurelia-pal';
/* eslint-disable @typescript-eslint/no-empty-function */
import toastr from 'toastr'
import 'asset/styles/main.css'
import 'font-awesome/css/font-awesome.min.css'
import 'toastr/build/toastr.css'
import moment  from 'moment';
import {RouterConfiguration, Router} from 'aurelia-router';

export class App {
  router: Router;
  timeIs: string;
  constructor(){
  setInterval(()=> this.timeIs = moment().format('hh:mm:ss.SSS'),100)
  }
  configureRouter(config: RouterConfiguration, router: Router): void {
    this.router = router;
    config.title = 'Title';
    config.options.pushState =true
    // config.addPipelineStep('authorize', NavToastStep)
    // config.addPipelineStep('authorize', LogNextStep)
    // config.addPipelineStep('preActivate', LogNextStep)
    // config.addPipelineStep('preRender', LogNextStep)
    // config.addPipelineStep('postRender', LogNextStep)
    config.map([
      { 
        route: ['','events'], viewPorts: {
        mainContent:{ moduleId:PLATFORM.moduleName('events/events')},
        sidBar:     {moduleId:PLATFORM.moduleName('sidebar/sponsors')}},
        name: 'name', 
        title:'Events', 
        nav:true
      },
      { 
        route: 'jobs',
        name: 'jobs', 
        viewPorts:{mainContent:{ moduleId:PLATFORM.moduleName('jobs/jobs')}, 
                  sidBar: { moduleId:PLATFORM.moduleName('sidebar/sponsors')}}, 
        title:'Jobs', 
        nav:true
      },
      { 
        route: 'discussion', viewPorts:
         {mainContent: {moduleId:PLATFORM.moduleName('discussion/discussion')},
         sidBar: {moduleId:PLATFORM.moduleName('sidebar/ads')}},
        name: 'Discussion', 
        title:'Discussion', 
        nav:true
      },
      { 
        route: 'eventDetail/:eventId',
        viewPorts:{mainContent:{ moduleId:PLATFORM.moduleName('events/event-detail')},
        sidBar:{ moduleId:PLATFORM.moduleName('sidebar/ads')}},
        name:'eventDetail',
      },
      { 
        route: 'addJob',name:'addJob',
        viewPorts:{mainContent:{ moduleId:PLATFORM.moduleName('jobs/add-job')},
        sidBar:{ moduleId:PLATFORM.moduleName('sidebar/ads')}},
       
      },

    ]);

  }

  
}
class LogNextStep {
  run(navigationInstruction, next){
   return next().then( result => {
    console.log(JSON.stringify(result));
    
          return result;
  })
  }
}
// class NavToastStep {
// run(navigationInstruction, next){
// return next().then(result => {
// if(result.status === 'canceled'){
// toastr.error('cancel trad')
// }
// if(result.status === "completed")
// toastr.info('compleate trad')
// return result
// })
// }
// }
