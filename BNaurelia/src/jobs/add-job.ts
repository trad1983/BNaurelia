import {inject} from 'aurelia-framework';
import {DataRepository} from 'services/dataRepository';
import {  ValidationController,ValidationRules} from "aurelia-validation";

@inject(DataRepository, ValidationController, ValidationRules)
export class AddJob {
  job: {
    needDate: any; jobType: string; jobSkills: any[]; 
};
title:any
  dataRepository: any;
  states: any;
  jobTypes: any;
  jobSkills: any;
  router: any;
  controller: any;
  validationRules: any;
  validationController: any;
	constructor(dataRepository, ValidationController,ValidationRules) {
		//this.job = { jobType: "Full Time", jobSkills: [],needDate:'20/10/2015'};
		this.dataRepository = dataRepository;
    // this.validationRules = ValidationRules
		this.dataRepository.getStates().then(states=> {
			this.states = states;
		});
		this.dataRepository.getJobTypes().then(jobTypes => {
			this.jobTypes = jobTypes;
		})
		this.dataRepository.getJobSkills().then(jobSkills =>{
			this.jobSkills = jobSkills;
		})
    this.controller = ValidationController
    ValidationRules
    .ensure((t:any) => t.title)
    .required()
    .on(this.job) 
   
 
	}
 

	activate(params, routeConfig, navigationInstruction) {
		this.router = navigationInstruction.router;
	}

	save() {
	
		
		if (this.job.needDate) {
		this.job.needDate = new Date('20/10/2023');
		}
		this.dataRepository.addJob(this.job).then(job=> {
      console.log(this.job);
      this.router.navigateToRoute('jobs')
    });
	}



}
