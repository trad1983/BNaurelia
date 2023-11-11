import {eventsData} from 'services/eventsData';
import moment from 'moment';
	
export class DataRepository {

  constructor(){
  this.events = eventsData
  }
	getEvents() {
		var promise = new Promise((resolve, reject) => {
			if (!this.events) {
				setTimeout(_ => {
					this.events = eventsData;
					eventsData.forEach(item => {
						var dateTime = moment(item.dateTime).format("MM/DD/YYYY HH:mm");
						item.dateTime = dateTime;
					});
					resolve(this.events);					
				},2000);
			}
			else {
				resolve(this.events);
			}
		});
		return promise;
	}
	
	getEvent(id) {
		return this.events.find(item => item.id == id);
	}
}
