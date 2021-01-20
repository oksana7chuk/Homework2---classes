import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positiveFeedbackPercentage }) => {
	return (
		<>
			<p>Good:{good}</p>
			<p>Neutral:{neutral}</p>
			<p>Bad:{bad}</p>
			<p>Total:{total}</p>
			<p>Positive feedback:{positiveFeedbackPercentage} %</p>
		</>
	);
};

Statistics.propTypes = {
	good: PropTypes.number.isRequired,
	neutral: PropTypes.number.isRequired,
	bad: PropTypes.number.isRequired,
	total: PropTypes.number.isRequired,
	positiveFeedbackPercentage: PropTypes.number.isRequired
};

export default Statistics;

