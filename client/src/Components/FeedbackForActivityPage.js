import React, {Component} from 'react'
import FeedbackStore from "../Storing/FeedbackStore"
import FeedbackList from "../Containers/FeedbackList"
import PieChart from 'react-minimal-pie-chart'
import HeaderFeedbackForActivity from "../Containers/HeaderFeedbackForActivity";
import '../CSS/labels.css';

class FeedbackForActivityPage extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            idActivityFeedback: 0,
            specificFeedbacksActivity: [],
            smileyCount: 0,
            frownyCount: 0,
            surprisedCount: 0,
            confusedCount: 0
        };
        
        this.storeFeedback = new FeedbackStore();
        this.state.idActivityFeedback = this.props.match.params.activity_id;
    }
    
    componentDidMount() {
        this.storeFeedback.getSpecificFeedbackForActivity(this.state.idActivityFeedback)
        this.storeFeedback.emitter.addListener('GET_SPECIFIC_FEEDBACK_SUCCES', () => {
            this.setState({
                specificFeedbacksActivity: this.storeFeedback.specificFeedbacksActivity,
                smileyCount : this.storeFeedback.smileyCount,
                frownyCount : this.storeFeedback.frownyCount,
                surprisedCount : this.storeFeedback.surprisedCount,
                confusedCount : this.storeFeedback.confusedCount
            })
        });
    }
    
     render() {
        return (
            <div>
                <HeaderFeedbackForActivity idActivityFeedback={this.state.idActivityFeedback}/>

                  <ul className='legend-labels'>
                    <li><span className="smiley_face"></span>Smiley Face</li>
                    <li><span className="frowny_face"></span>Frowny Face</li>
                    <li><span className="surprised_face"></span>Surprised Face</li>
                    <li><span className="confused_face"></span>Confused Face</li>
                  </ul>
                <PieChart 
                          data={[
                            { title: 'Smiley_face', value: this.state.smileyCount, color: '#00FF7F' },
                            { title: 'Frowny_face', value: this.state.frownyCount, color: '#6A5ACD' },
                            { title: 'Surprised_face', value: this.state.surprisedCount, color: '#A52A2A' },
                            { title: 'Confused_face', value: this.state.confusedCount, color: '#FFD700' },
                            ]}
                            label
                            labelPosition={50}
                      
                                
                          style={{
                            height: '350px',
                            padding: '15px'
                          }}
                          
                          viewBoxSize={[
                            600,
                            600
                          ]}
                    />
                        
                <FeedbackList  specificFeedbacksActivity={this.state.specificFeedbacksActivity}/>
            </div>        
            )
         
     }
    
    
}

export default FeedbackForActivityPage;