import React from 'react';


import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import {
    Button,
    Box,
    Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100vw',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        backgroundColor: '#ffffff',
    },
    inputField: {
        border: "2px solid #000000",
        borderRadius: '2px',
        color: '#000000',
        fontSize: "20px",
        display: 'block',
        height: theme.spacing(8),
        width: theme.spacing(8),
        padding: theme.spacing(0),
        textAlign: 'center',
        marginTop: theme.spacing(2),
        cursor: 'pointer',
    },
    button: {
        backgroundColor: '#F49C00',
        '&:hover': {
            backgroundColor: '#F99E09',
        },
    },
}));

export default () => {
    const classes = useStyles();

    const [startDate, setStartDate] = React.useState(new Date());
    const [verified, setVerified] = React.useState(false);

    return (
        <Box className={classes.root}>
            <Box className={classes.ageGate}>
                <Box width={.75} mx="auto" mt={{ xs: 3, md: 12 }}>
                    <Typography align="center" color="primary" variant="h3">
                        You must be of legal drinking age to continue
                    </Typography>
                </Box>
                <Box width={.65} mx="auto" mt={{ xs: 1, md: 5 }}>
                    <Typography align="center" color="primary" variant="h5">
                        Please enter your birth date below
                    </Typography>
                </Box>
                <Box display="flex" justifyContent="center">
                    <DatePicker
                        selected={startDate}
                        onChange={date => setStartDate(date)}
                        peekNextMonth
                        showMonthDropdown
                        showYearDropdown
                        dropdownMode="select"
                        customInput={<CustomInputs setVerified={setVerified} />}
                        calendarContainer={MyContainer}
                    />
                </Box>
                <Box width={1} textAlign="center" mt={3} style={{ color: 'black' }}>
                    {!verified ?
                        "Not verified" : "Verified"
                    }
                </Box>
                <Box mt={7} align="center">
                    <a href={!verified ? "#" : '/'}>
                        <Button variant="contained" className={clsx(classes.button)}>
                            <Typography color="primary" variant="h6">
                                Continue to site
                                </Typography>
                        </Button>
                    </a>
                </Box>
                <Box width={1} align="center" mt={9} mb={8}>
                    <Typography color="primary" variant="h6">
                        By entering this site you are agreeing to the <u>Terms of Use</u> and <u>Privacy Policy</u>
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}
const CustomInputs = ({ value, onClick, setVerified }) => {
    const classes = useStyles();

    const month = value.split('/')[0];
    const day = value.split('/')[1];
    const year = value.split('/')[2];
    const date = new Date()

    if (date.getFullYear() - parseInt(year) > 18) {
        setVerified(true);
        localStorage.setItem('eligible', true);
    } else {
        setVerified(false);
    }

    return (
        <Box mt={4} width={1} display="flex" justifyContent="center">
            <Box align="center" color="primary" mx={2}>
                <Typography>YYYY</Typography>
                <input onClick={onClick} readOnly name="year" type="text" value={year} className={classes.inputField} />
            </Box>
            <Box align="center" color="primary" mx={2}>
                <Typography>MM</Typography>
                <input onClick={onClick} readOnly name="month" type="text" value={month} className={classes.inputField} />
            </Box>
            <Box align="center" color="primary" mx={2}>
                <Typography>DD</Typography>
                <input onClick={onClick} readOnly name="day" type="text" value={day} className={classes.inputField} />
            </Box>
        </Box>
    )
}

const MyContainer = ({ children }) => {
    return (
        <div style={{ position: 'fixed', background: "#ffffff", color: "#fff" }}>
            {children}
        </div>
    );
}