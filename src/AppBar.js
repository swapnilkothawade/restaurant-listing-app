import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
const styles = {
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -18,
        marginRight: 10,
    },
};

function SimpleAppBar(props) {
    //const { classes } = props;
    return (
        <div>
            <AppBar position="static"><Typography variant="h6" color="inherit">Restaurant Listing App</Typography></AppBar>

        </div>
    )
}

SimpleAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar)
