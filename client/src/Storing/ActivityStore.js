import {EventEmitter} from 'fbemitter'

const SERVER = 'http://18.191.249.229:8080'

class ActivityStore {
    constructor() {
        this.activities = [];
        this.emitter = new EventEmitter();
    }

    async getActivities() {
        try {
            console.log("ActivityStore -> getActivities() try")
            let response = await fetch(`${SERVER}/activity-api/activities`)
            let data = await response.json();
            this.activities = data;
            
            this.emitter.emit('GET_ACTIVITIES_SUCCESS');


        } catch (err) {
            console.warn(err);
            console.log("ActivityStore -> getActivities() catch-err")
            this.emitter.emit('GET_ACTIVITIES_ERROR');
        }
    }
    
    async updateCountEmoji1(activityId) {
        console.log("ActivityStore -> updateCountEmoji1")
        try {
            await fetch(`${SERVER}/activity-api/activities/${activityId}/update-count-emoji1`, {
                method : 'put'
            })
        } catch (err) {
            console.warn(err)
            this.emitter.emit('UPDATE_ACTIVITY_ERROR')
        }
    }
    
    async updateCountEmoji2(activityId) {
        console.log("ActivityStore -> updateCountEmoji1")
        try {
            await fetch(`${SERVER}/activity-api/activities/${activityId}/update-count-emoji2`, {
                method : 'put'
            })
        } catch (err) {
            console.warn(err)
            this.emitter.emit('UPDATE_ACTIVITY_ERROR')
        }
    }
    
    async updateCountEmoji3(activityId) {
        console.log("ActivityStore -> updateCountEmoji1")
        try {
            await fetch(`${SERVER}/activity-api/activities/${activityId}/update-count-emoji3`, {
                method : 'put'
            })
        } catch (err) {
            console.warn(err)
            this.emitter.emit('UPDATE_ACTIVITY_ERROR')
        }
    }
    
    async updateCountEmoji4(activityId) {
        console.log("ActivityStore -> updateCountEmoji4")
        try {
            await fetch(`${SERVER}/activity-api/activities/${activityId}/update-count-emoji4`, {
                method : 'put'
            })
        } catch (err) {
            console.warn(err)
            this.emitter.emit('UPDATE_ACTIVITY_ERROR')
        }
    }


    async updateEmoji(activityID,activity) {
        try {
            await fetch(`${SERVER}/activity-api/activities/${activityID}`, {
                method: 'put',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(activity)
            })

            this.getActivities();
        } catch (err) {
            console.warn(err)
            this.emitter.emit('UPDATE_ACTIVITY_ERROR')
        }
    }
}

export default ActivityStore;