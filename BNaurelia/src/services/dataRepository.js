/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-self-assign */
import {eventsData} from 'services/eventsData';
import moment from 'moment';
import {  jobsData, states, jobTypes, jobSkills} from "services/jobsData";
function filterAndFormat(pastOrFuture, events) {
	var results = JSON.parse(JSON.stringify(events));
	if (pastOrFuture == 'past') {
		results = results.filter(item => moment(item.dateTime) < moment());
	}
	else if (pastOrFuture == 'future') {
		results = results.filter(item => moment(item.dateTime) > moment());
	}
	else {
		results = results;
	}
	

	return results;
}

export class DataRepository {
	getEvents(pastOrFuture) {
		var promise = new Promise((resolve, reject) => {
			if (!this.events) {
				setTimeout(() => {
					this.events = eventsData.sort((a,b) =>
					 a.dateTime >= b.dateTime ? 1 : -1);
					resolve(filterAndFormat(pastOrFuture, this.events));					
				},10);
			}
			else {
				resolve(filterAndFormat(pastOrFuture, this.events));
			}
		});
		return promise;
	}
  getEvent(eventId) {
		return this.events.find(item => item.id == eventId);
	}
  addJob(job){
       let promise = new Promise((res, rej)=> {
        this.jobs.push(job)
        res(job)
      })
      return promise;
  }
 
  getJobs(){
    let promise = new Promise((res, rej)=> {
    if(!this.jobs){
    this.jobs =jobsData
    }
    res(this.jobs)
    })
    return promise;
    }
  getStates(){
  let promise = new Promise((res, rej)=> {
  if(!this.states){
  this.states = states
  }
  res(this.states)
  })
  return promise;
  }
  getJobTypes(){
    let promise = new Promise((res, rej)=> {
    if(!this.jobTypes){
    this.jobTypes =jobTypes
    }
    res(this.jobTypes)
    })
    return promise;
    }
    getJobSkills(){
      let promise = new Promise((res, rej)=> {
      if(!this.jobSkills){
      this.jobSkills =jobSkills
      }
      res(this.jobSkills)
      })
      return promise;
      }
}
