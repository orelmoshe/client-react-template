import React, { memo, useCallback, useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Context as ExampleContext } from '../../providers/example';

const Example2 = memo(() => {
	const { example } = useContext(ExampleContext);
	return <Grid>{example}</Grid>;
});

const Example = () => {
	const { setExample } = useContext(ExampleContext);
	const handleClick = useCallback(() => {
		setExample('hello context');
	}, [setExample]);
	return (
		<Grid>
			<Button color="primary" variant="contained" onClick={handleClick}>
				Click Me
			</Button>
			<Example2 />
		</Grid>
	);
};

export default memo(Example);
