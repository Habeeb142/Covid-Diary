import React from 'react';

// import { Container, Grid, Box } from '@material-ui/core';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import { makeStyles } from '@material-ui/core/styles';

// import { AppContext } from '../AppContext';

import { AbInBev, Logo } from '../Assets';

const useStyles = makeStyles((theme) => ({
    root: {
        flex: 1,
        height: '60px',
        flexGrow: 1,
        backgroundColor: '#ffffff'
    },
    appBar: {
        boxShadow: '0px 1px 2px -1px #B11F24,0px 2px 3px 0px #B11F24,0px 1px 5px 0px #B11F24'
    },
    logo: {
        height: '2em',
        [theme.breakpoints.up('sm')]: {
            height: '3em',
        },
    },
}));

export default function (props) {
    const classes = useStyles();

    // const { state } = React.useContext(AppContext);

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar style={{ backgroundColor: '#ffffff', justifyContent: 'space-between' }}>
                    <img className={classes.logo} src={AbInBev} alt="Website Logo" />
                    <img className={classes.logo} src={Logo} alt="Website Logo" />
                </Toolbar>
            </AppBar>
        </div>
    );
}