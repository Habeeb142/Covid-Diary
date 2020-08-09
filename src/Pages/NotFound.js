import React from 'react';

import { Link, useHistory } from 'react-router-dom';

import {
    CssBaseline,
    Box,
    Typography,
} from '@material-ui/core';

export default () => {

    const history = useHistory();

    React.useEffect(() => {
        setTimeout(() => history.push('/'), 5000);
        // eslint-disable-next-line
    }, []);

    return (
        <React.Fragment>
            <CssBaseline />
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                height="100vh"
                width={1}
            >
                <Typography variant="h4">
                    Oops! Page Not Found
                </Typography>
                <Box mt={2}>
                    <Link to="/">
                        <Typography color="primary" variant="caption">
                            <Box fontStyle="italic">
                                Just hold on, we're going home... in 5
                            </Box>
                        </Typography>
                    </Link>
                </Box>
            </Box>
        </React.Fragment>
    );
}