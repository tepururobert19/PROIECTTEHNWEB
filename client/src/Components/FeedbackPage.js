import React, {Component} from 'react';
import '../CSS/feedbackStyle.css';
import HeaderFeedback from "../Containers/HeaderFeedback";
import FeedbackStore from "../Storing/FeedbackStore";
import ActivityStore from "../Storing/ActivityStore";
import StudentStore from "../Storing/StudentStore";

class FeedbackPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showText: false,
            text: "",
            activityID: 0,
            studentID: 0,
            activity:{}
        };

        this.store = new FeedbackStore();
        this.storeActivity = new ActivityStore();
        this.storeStudent = new StudentStore();




        this.state.studentID = this.props.match.params.stud_id;
        this.state.activityID = this.props.match.params.activity_id;

        this.storeStudent.getActivityById(this.state.activityID);

        this.storeStudent.emitter.addListener('GET_ACTIVITY_SUCCESS', () => {
            this.setState({
                activity: this.storeStudent.activity
            })
        });

        this.onClickImage = (e) => {
            this.setState({showText: true, text: e.target.alt});
            let tempDate = new Date();
            if (e.target.name === "smiley_face") {
                let time_stamp = tempDate.getFullYear()
                    + '-' + (tempDate.getMonth() + 1)
                    + '-' + tempDate.getDate()
                    + ' ' + tempDate.getHours()
                    + ':' + tempDate.getMinutes()
                    + ':' + tempDate.getSeconds()
                    + ' timeZone:' + Intl.DateTimeFormat().resolvedOptions().timeZone
                    
                    console.log(Intl.DateTimeFormat().resolvedOptions().timeZone)
                
                const feedback = {
                    time_stamp: time_stamp,
                    id_activity: this.state.activityID,
                    emoji: "smiley face",
                    studentId: this.state.studentID
                };
                this.store.addFeedback(feedback);
                
                
                
               
                
            } else if (e.target.name === "frowny_face") {
                let time_stamp = tempDate.getFullYear()
                    + '-' + (tempDate.getMonth() + 1)
                    + '-' + tempDate.getDate()
                    + ' ' + tempDate.getHours()
                    + ':' + tempDate.getMinutes()
                    + ':' + tempDate.getSeconds()
                    + ' timeZone:' + Intl.DateTimeFormat().resolvedOptions().timeZone
                const feedback = {
                    time_stamp: time_stamp,
                    id_activity: this.state.activityID,
                    emoji: "frowny face",
                    studentId: this.state.studentID
                };
                this.store.addFeedback(feedback);
                
                
                
                
            } else if (e.target.name === "surprised_face") {
                let time_stamp = tempDate.getFullYear()
                    + '-' + (tempDate.getMonth() + 1)
                    + '-' + tempDate.getDate()
                    + ' ' + tempDate.getHours()
                    + ':' + tempDate.getMinutes()
                    + ':' + tempDate.getSeconds()
                    + ' timeZone:' + Intl.DateTimeFormat().resolvedOptions().timeZone
                const feedback = {
                    time_stamp: time_stamp,
                    id_activity: this.state.activityID,
                    emoji: "surprised face",
                    studentId: this.state.studentID
                };
                this.store.addFeedback(feedback);
                
                
                
                
            } else if (e.target.name === "confused_face") {
                let time_stamp = tempDate.getFullYear()
                    + '-' + (tempDate.getMonth() + 1)
                    + '-' + tempDate.getDate()
                    + ' ' + tempDate.getHours()
                    + ':' + tempDate.getMinutes()
                    + ':' + tempDate.getSeconds()
                    + ' timeZone:' + Intl.DateTimeFormat().resolvedOptions().timeZone
                const feedback = {
                    time_stamp: time_stamp,
                    id_activity: this.state.activityID,
                    emoji: "confused face",
                    studentId: this.state.studentID
                };
                this.store.addFeedback(feedback);
                
                
                
                
            }

        };
        this.viewText = () => {
            return (<div className="container right">
                <div className="content">
                    {`The feedback chosen is ${this.state.text}`}
                </div>
            </div>);
        }
    }



    render() {
        const styleIcon = {
            width: '200px',
            height: '200px'
        }

        return (
            <div>
                <HeaderFeedback/>
                <h1 align="center">Choose a feedback </h1>
                
                 
            </div>
        );
    }

}

export default FeedbackPage;
