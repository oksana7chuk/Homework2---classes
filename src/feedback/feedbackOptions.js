import React from 'react';

const FeedbackOptions = ({options, onLeaveFeedback})=>{
    return (
        <div>
        {options.map((option) => (
				<button type="button" name={option} onClick={onLeaveFeedback}>{option}</button>))}
        </div>)
    
};

export default FeedbackOptions;