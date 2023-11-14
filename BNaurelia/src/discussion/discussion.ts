/* eslint-disable no-mixed-spaces-and-tabs */

  function getDiscussionInput() {
    // fake data access
    return "";
  }
  
  function cloneObject(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
  
  export class Discussion {
    discussionInput: string;
    originalInput: any;
    activate() {
      this.discussionInput = getDiscussionInput();
      this.originalInput = cloneObject(this.discussionInput);
      return new Promise<void>((resolve, reject) => {
      	setTimeout(_ => resolve(), 1500);
      });		
    }
  
    save() {
      // simulate save
      this.originalInput = cloneObject(this.discussionInput);
    }
    
	canDeactivate() {
		if (JSON.stringify(cloneObject(this.discussionInput)) != 
			JSON.stringify(this.originalInput)) {
			if (confirm("Unsaved data, are you sure you want to navigate away?")) {
				return true;
			}
			else {
				return false;
			}
		}
		else {
			return true;
		}
	}

	deactivate() {
		console.log("Discussion deactivated");
	}
  }
