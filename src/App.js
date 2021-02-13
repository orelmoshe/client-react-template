import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ExampleProvider from './providers';
import Example from './components/Example';

const appStyles = makeStyles((theme) => ({
	root: {
		height: '100%',
	},
}));

const App = () => {
	const classes = appStyles();

	return (
		<Grid container justify="center" alignItems="center" className={classes.root}>
			<ExampleProvider>
				<Router>
					<Switch>
						<Route exact path="/" component={Example} />
						{/* <Route path="/example" component={Example} />
							<Route path="/:id" component={Example} /> */}
					</Switch>
				</Router>
			</ExampleProvider>
		</Grid>
	);
};

export default App;
