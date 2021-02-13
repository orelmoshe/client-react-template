import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './context';

const ExampleProvider = (props) => {
	const { children } = props;
	const [example, setExample] = useState('');

	return <Context.Provider value={{ example, setExample }}>{children}</Context.Provider>;
};

ExampleProvider.propTypes = {
	children: PropTypes.element.isRequired,
};

export default ExampleProvider;
