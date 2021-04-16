import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
	root: {
		flexGrow: 1,
	},
	Grid: {
		marginTop: '15vh',
		marginBottom: '15px',
	},
	infected: {
		borderBottom: "10px solid rgba(0, 0, 255, 0.5)"
	},
	recovered: {
		borderBottom: "10px solid rgba(0, 255, 0, 0.5)"
	},

	deaths: {
		borderBottom: "10px solid rgba(255, 0, 0, 0.5)"
	}
}));
