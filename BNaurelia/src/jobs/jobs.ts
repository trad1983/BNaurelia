
import { inject } from "aurelia-framework";
import {DataRepository  } from "services/dataRepository";
@inject(DataRepository)
export class Jobs {
  jobs: any[];
  router: any;
  constructor(private dataRepository){
 
  }
activate(params, routeConfig, navigationInstruction) {
  this.jobs = []
  this.router = navigationInstruction.router 
  return this.dataRepository.getJobs().then(jobs=> {
  this.jobs = jobs
  })

}
addJob(){
  this.router.navigateToRoute('addJob')
  }
}
