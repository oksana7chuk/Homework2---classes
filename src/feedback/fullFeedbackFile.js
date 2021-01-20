import React, { Component } from 'react';
import Statistics from './statistics';
import FeedbackOptions from './feedbackOptions';
import Section from './section';
import Notification from './notification';

class Feedback extends Component {
    static defaultProps = {
        click:1
    };
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
      }

      onLeaveFeedback = (e)=>{
        const feedbackName = e.target.name;
		this.setState((prevState) => ({
			[feedbackName]: prevState[feedbackName] + this.props.click
		}));
      };

    // handleGoodClick =()=>{
    //     this.setState(prevState=>({ 
    //         good:prevState.good + this.props.click,
    //     }));
    // };
    // handleNeutralClick =()=>{
    //     this.setState(prevState=>({ 
    //         neutral:prevState.neutral + this.props.click,
    //     }));
    // };
    // handleBadClick =()=>{
    //     this.setState(prevState=>({ 
    //         bad:prevState.bad + this.props.click,
    //     }));
    // };
    countTotalFeedback(){
        const {good, neutral, bad} = this.state;
        const totalFeedback = good + neutral + bad;
        return totalFeedback;
    };
    countPositiveFeedbackPercentage(){
        const result = this.countTotalFeedback();
		const {good} = this.state;
		const percentage = (good*100)/result;
		return Math.round(percentage);
    };
  
    render() {
        const {good, neutral, bad} = this.state;
        const total = this.countTotalFeedback() ;
        const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage() ;
        const objKey = Object.keys(this.state);
        return (
        <div>
            <Section title="Please leave feedback">
                <FeedbackOptions options={objKey} onLeaveFeedback={this.onLeaveFeedback}></FeedbackOptions>
            </Section>
            {total === 0 ? (<Notification message="No feedback given" />):(
            <Section title="Statistics">
                <Statistics good={good} neutral={neutral} bad={bad} total={total} positiveFeedbackPercentage={positiveFeedbackPercentage}/>
            </Section>)}
        </div>);
    }
};

export default Feedback;