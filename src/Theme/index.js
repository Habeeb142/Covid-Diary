import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

let Theme = createMuiTheme({
    palette: {
        type: 'light', 
        primary: {
            main: '#2B312E',
        },
        secondary: {
            main: '#ffffff',
        },
        text: {
            primary: '#2F3E39',
            secondary: '#FFFFFF',
            hint: "E00034",
        },
        error: {
            main: "#E6335D",
        },
        success: {
            main: "#009B48",
        },
        background: {
            paper: "#272c34"
        }
    },
    spacing: [0, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96, 104, 112, 120, 128, 136, 144, 152],
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    }
});

Theme = responsiveFontSizes(Theme);

export default Theme;