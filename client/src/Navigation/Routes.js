import React, {Component} from 'react'
import Professor from "../Components/Professor";
import Student from "../Components/Student";
import {Route, Routes, BrowserRouter} from "react-router-dom";
import Activity from "../Components/Activity";
import FeedbackPage from "../Components/FeedbackPage";
import FeedbackForActivityPage from "../Components/FeedbackForActivityPage";

class AppNavigation extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/professor/:id" component={Professor}/>
                    <Route path="/student/:id" component={Student}/>
                    <Route path="/activity/:stud_id/:activity_id" component={Activity}/>
                    <Route path="/feedback/:stud_id/:activity_id" component={FeedbackPage}/>
                    <Route path="/feedbackforactivity/:activity_id" component={FeedbackForActivityPage}/>
                </Routes>
            </BrowserRouter>
        )
    }
}

export default AppNavigation;
