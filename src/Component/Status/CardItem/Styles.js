import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
	root: {
		flexGrow: 1,
	},
	Grid: {
		flexWrap: 'nowrap ',
		margin: ' 50% 0 !important',
	},

	control: {
		padding: theme.spacing(2),
	},
	Card: {
		margin: ' 0 2% !important',

		marginRight: '10px',
	},
}));
