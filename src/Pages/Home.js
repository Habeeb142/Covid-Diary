import React from 'react';

import Nav from '../Components/Nav';

import { makeStyles } from '@material-ui/core/styles';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { InlineShareButtons } from 'sharethis-reactjs';

import Eligible from '..//Modals/Eligible';

import {
    Grid,
    Container,
    Box,
    Typography,
    Button,
    CircularProgress,
    Paper,
} from '@material-ui/core';

import htmlToImage from 'html-to-image';
import download from 'downloadjs';

import {
    Template,
    My2020Moments
} from '../Assets';


const useStyles = makeStyles(theme => ({
    section: {
        marginTop: theme.spacing(6),
    },
    textField: {
        padding: '20px 24px',
        background: '#ffffff',
        border: 'none',
        width: '100%',
        borderBottom: '.4px solid #B11F24',
        color: '#000000',
        marginTop: theme.spacing(1),
    },
    font80: {
        fontSize: '5vw',
        wordWrap: 'break-word',
        [theme.breakpoints.up('rightHere')]: {
            fontSize: '35px',
        },
    },
    font40: {
        // lineHeight: '3.5vw',
        fontSize: '2.5vw',
        wordWrap: 'break-word',
        [theme.breakpoints.up('rightHere')]: {
            fontSize: '17.5px',
        },
    },
    font38: {
        fontSize: '2.375vw',
        // lineHeight: '3.5px',
        wordWrap: 'break-word',
        [theme.breakpoints.up('rightHere')]: {
            fontSize: '16.625px',
        },
    },
    font32: {
        fontSize: '2vw',
        // lineHeight: '2.2vw',
        wordWrap: 'break-word',
        [theme.breakpoints.up('rightHere')]: {
            fontSize: '14px',
        },
    },
    font30: {
        fontSize: '1.875vw',
        // lineHeight: '2.5vw',
        wordWrap: 'break-word',
        [theme.breakpoints.up('rightHere')]: {
            fontSize: '13.125px',
        },
    }
}))

async function postData(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    });
    return response.json();
}

export default () => {

    const classes = useStyles();

    // User's name
    const [name, setName] = React.useState("");
    // User's current location 
    const [location, setLocation] = React.useState("");
    // User/s role in ab-inbev -- I guess
    const [role, setRole] = React.useState("");
    // User's most interesting moment
    const [moment, setMoment] = React.useState("");
    // User's word of wisdom/wisdumb
    const [WOW, setWOW] = React.useState("");
    // caption for the moment image
    const [caption, setCaption] = React.useState("");

    // storage for profile photo and moment photo
    const [profilePhoto, setProfilePhoto] = React.useState(null);
    const [momentPhoto, setMomentPhoto] = React.useState(null);

    // for when a user submits
    const [submitted, setSubmitted] = React.useState(false);

    // to show progress
    const [loading, setLoading] = React.useState(false);
    // to store errors that will be displayed 
    const [error, setError] = React.useState(false);

    // super simple validation -- once the required fields have been filled
    const formCompleted = name && location && role && moment && caption && profilePhoto && momentPhoto;

    // sending click down to the hidden file input
    const handleLaunchGallery = (id) => {
        document.getElementById(id).click();
    }

    // once the user submits the form
    const handleSubmit = () => {
        // if him never fill am finish, well, nada happens
        if (!formCompleted) {
            return;
        }
        // start showing a progress indicator
        setLoading(true);
        // send a request to the server with the info
        postData('https://covid-diary.herokuapp.com/uploader', {
            name: name,
            location: location,
            role: role,
            moment: moment,
            WOW: WOW,
            caption: caption,
        }).then(data => {
            // success bruh. Enough loading
            setLoading(false);
            // Time to switch to the Result page. Ladies first
            setSubmitted(true);
        }).catch(err => {
            // E don happen Motor don jam request. Just stop loading dude
            setLoading(false);
            // show the error joor
            setError(err);
        });
    }

    return (
        <>
            <Eligible />
            <Nav />
            <Container maxWidth="xl" className={classes.section}>
                <Container maxWidth="sm">
                    {submitted ?
                        // Ore mi ti submit. Give baba result
                        <Result data={{
                            name: name,
                            location: location,
                            role: role,
                            moment: moment,
                            WOW: WOW,
                            caption: caption,
                            profilePhoto: profilePhoto,
                            momentPhoto: momentPhoto,
                        }} />
                        :
                        // Give them form joor. 1 form is 50 naira. lmao
                        <Box mb={10}>
                            <My2020Moments style={{ maxWidth: '492px', minWidth: '250px', width: "60%", height: 'auto' }} />
                            <Box mt={8} py={1} width={1} display="flex" alignItems="center" style={{ backgroundColor: '#eeeeee' }}>
                                <Box ml={1} height='40px' width="4px" style={{ backgroundColor: '#F49C00' }}>
                                </Box>
                                <Box ml={1}><Typography variant="caption">Fields marked with * are required.</Typography></Box>
                            </Box>
                            {error &&
                                <Box mt={2} py={1} width={1} display="flex" alignItems="center" style={{ backgroundColor: '#eeeeee' }}>
                                    <Box ml={1} height='40px' width="4px" style={{ backgroundColor: '#B11F24' }}>
                                    </Box>
                                    <Box ml={1}><Typography variant="caption">An error occured. Please try again later.</Typography></Box>
                                </Box>
                            }
                            <Box mt={4}>
                                <Typography>Your name <span style={{ color: '#B11F24', fontWeight: 'bold' }}>*</span></Typography>
                                <input
                                    name="name"
                                    value={name}
                                    placeholder="Your name"
                                    onChange={(e) => setName(e.target.value)}
                                    className={classes.textField}
                                    required
                                />
                            </Box>
                            <Box mt={8}>
                                <Grid container spacing={5} alignItems="center">
                                    <Grid item xs={12} lg={6}>
                                        <Typography>Function <span style={{ color: '#B11F24', fontWeight: 'bold' }}>*</span></Typography>
                                        <input
                                            name="role"
                                            value={role}
                                            placeholder="Your function"
                                            onChange={(e) => setRole(e.target.value)}
                                            className={classes.textField}
                                        />
                                    </Grid>
                                    <Grid item xs={12} lg={6}>
                                        <Typography>Location <span style={{ color: '#B11F24', fontWeight: 'bold' }}>*</span></Typography>
                                        <input
                                            name="location"
                                            value={location}
                                            placeholder="Your Location"
                                            onChange={(e) => setLocation(e.target.value)}
                                            className={classes.textField}
                                        />
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box mt={8}>
                                <Typography>My most interesting/impactful moment in 2020 so far is: <span style={{ color: '#B11F24', fontWeight: 'bold' }}>*</span> </Typography>
                                <Box position="relative">
                                    <textarea
                                        name="moment"
                                        value={moment}
                                        placeholder="Describe your most interesting moment here..."
                                        rows={3}
                                        maxLength={90}
                                        onChange={(e) => setMoment(e.target.value)}
                                        className={classes.textField}
                                    />
                                    <Box position="absolute" bottom={5} right={10}>
                                        <Typography variant="caption">{90 - moment.length}</Typography>
                                    </Box>
                                </Box>
                            </Box>
                            <Box mt={8}>
                                <Typography> Word of wisdom / Note to self:</Typography>
                                <Box position="relative">
                                    <textarea
                                        name="word-of-wisdom"
                                        value={WOW}
                                        placeholder="Word of wisdom here..."
                                        rows={3}
                                        maxLength={120}
                                        onChange={(e) => setWOW(e.target.value)}
                                        className={classes.textField}
                                    />
                                    <Box position="absolute" bottom={5} right={10}>
                                        <Typography variant="caption">{120 - WOW.length}</Typography>
                                    </Box>
                                </Box>
                            </Box>
                            <Box mt={8}>
                                <Typography> Profile picture <span style={{ color: '#B11F24', fontWeight: 'bold' }}>*</span></Typography>
                                <Box display="flex" alignItems="center" mt={2}>
                                    <Box height={'100px'} minWidth={'50px'} width={'100px'} style={{ backgroundColor: '#DDDDDD' }}>
                                        {profilePhoto && <img src={profilePhoto} alt="Me" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
                                    </Box>
                                    <Box ml={1}>
                                        <Button
                                            variant="contained"
                                            onClick={() => handleLaunchGallery("profile-photo")}
                                            style={{ backgroundColor: '#F49C00', color: '#ffffff' }}
                                            startIcon={<CameraAltIcon />}
                                        >
                                            Choose
                                    </Button>
                                        <input type="file" id="profile-photo" hidden name="profile-photo" onChange={(e) => setProfilePhoto(URL.createObjectURL(e.target.files[0]))} />
                                    </Box>
                                </Box>
                            </Box>
                            <Box mt={8}>
                                <Typography> A picture that best explains your most impactful moment <span style={{ color: '#B11F24', fontWeight: 'bold' }}>*</span></Typography>
                                <Box display="flex" alignItems="flex-start" mt={2}>
                                    <Box textAlign="center">
                                        <Box mx={"auto"} height={'100px'} minWidth={'50px'} width={'100px'} style={{ backgroundColor: '#DDDDDD' }}>
                                            {momentPhoto && <img src={momentPhoto} alt="Me" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
                                        </Box>
                                        <Box mt={2}>
                                            <Button
                                                variant="contained"
                                                onClick={() => handleLaunchGallery("moment-photo")}
                                                style={{ backgroundColor: '#F49C00', color: '#ffffff' }}
                                                startIcon={<CameraAltIcon />}
                                            >
                                                Choose
                                        </Button>
                                            <input type="file" id="moment-photo" hidden name="moment-photo" onChange={(e) => setMomentPhoto(URL.createObjectURL(e.target.files[0]))} />
                                        </Box>
                                    </Box>
                                    <Box flex={1} ml={2}>
                                        <Box position="relative">
                                            <textarea
                                                name="caption"
                                                value={caption}
                                                placeholder="Caption"
                                                rows={3}
                                                maxLength={68}
                                                onChange={(e) => setCaption(e.target.value)}
                                                className={classes.textField}
                                            />
                                            <Box position="absolute" bottom={5} right={10}>
                                                <Typography variant="caption">{68 - caption.length}</Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                            <Box mt={8} textAlign="center" width={1}>
                                <Button onClick={handleSubmit} variant="contained" style={
                                    formCompleted ?
                                        { backgroundColor: '#B11F24', color: '#ffffff' }
                                        :
                                        { backgroundColor: '#cccccc', color: '#666666' }
                                }>
                                    <Typography>{loading ? < CircularProgress size={16} indeterminate color="secondary" /> : "SUBMIT"}</Typography>
                                </Button>
                            </Box>
                        </Box>
                    }
                </Container>
            </Container>
        </>
    );
}

function Result(props) {

    const classes = useStyles();
    const [hide, setHide] = React.useState(true);
    // const [image, setImage] = React.useState(null);
    const {
        name,
        location,
        role,
        moment,
        WOW,
        caption,
        profilePhoto,
        momentPhoto,
    } = props.data;

    // I'd like to keep this. Can't stress.
    // let name = "Oladosu Ayo",
    //     location = "England",
    //     role = 'Software Engineereeeeer',
    //     moment = "Man, it's some long as s loremb cdsn codscn dsocnds oncodsn codscd",
    //     WOW = "Man, it's some long ass lorem ipsubc dsncodsc ndsoc nd so nco dsncods cdsg  sdvsdbk dfghtyj",
    //     caption = "And the rest was sdsds asa ew kbdkan eidiwiew iksks iuweiwhe iksskc ifdisd.",
    //     profilePhoto = null,
    //     momentPhoto = null;

    // console.log(image)
    const filename = name + '_My_2020_Moments.png';
    React.useEffect(() => {
        setTimeout(() => {
            setHide(false);
        }, 3000);
    }, [])
    const handleDownload = () => {
        htmlToImage.toPng(document.getElementById('GodNoGoShameUs'))
            .then(function (dataUrl) {
                download(dataUrl, filename);
            });
    }
    return (
        <Box mb={10}>
            <Box my={1}>
                <a href="/">
                    <Button
                        size="small"
                        variant="contained"
                        color="secondary"
                        className={classes.button}
                        startIcon={<ArrowBackIosIcon />}
                    >
                        Start over
                    </Button>
                </a>
            </Box>
            <Paper id="GodNoGoShameUs" color="secondary" style={{
                maxWidth: '800px',
                visibility: hide ? 'hidden' : 'visible'
            }}>
                <Box position="relative">
                    <img id="template" src={Template} alt="template" style={{ width: "100%", height: "auto" }} />
                    <img
                        id="template"
                        src={profilePhoto}
                        alt="profile"
                        style={{
                            objectFit: 'cover',
                            borderRadius: '900px',
                            width: '27.4074074%',
                            height: '22.07407407407%',
                            position: "absolute",
                            left: "6.66666667%",
                            top: "18.2222222%"
                        }} />
                    {/* </Box> */}
                    <Box className={classes.font80} position="absolute" left="40.1851852%" top="20.8888889%" style={{
                        fontFamily: 'Give You Glory',
                        color: '#45130F',
                        width: '58.3333333%',
                    }}>
                        {name.split(' ')[0]}
                    </Box>
                    <Box className={classes.font38} position="absolute" left="40.1851852%" top="29.1851852%" style={{
                        fontFamily: 'Raleway',
                        fontWeight: '400',
                        color: '#45130F',
                        width: '58.3333333%',
                    }}>
                        {role}
                    </Box>
                    <Box className={classes.font40} position="absolute" left="40.1851852%" top="33.3333333%" style={{
                        fontFamily: 'Raleway',
                        fontWeight: '700',
                        color: '#B11F24',
                        width: '58.3333333%',
                    }}>
                        {location}
                    </Box>
                    <Box className={classes.font38} position="absolute" left="5.55555556%" top="44.5925926%" style={{
                        fontFamily: 'Raleway',
                        fontStyle: 'italic',
                        fontWeight: '600',
                        color: 'rgba(68,50,50,80)',
                        width: '88.1481481%',
                        height: '12.4444444%',
                    }}>
                        My most interesting/impactful moment in 2020 so far is {moment}
                    </Box>
                    <img id="template"
                        src={momentPhoto}
                        alt="moment"
                        style={{
                            left: "5.55555556%",
                            top: "61.7777778%",
                            borderRadius: '8px',
                            position: "absolute",
                            objectFit: 'cover',
                            width: '46.6666667%',
                            height: '27.2592593%',
                        }}
                    />
                    <Box className={classes.font30} position="absolute" left="5.55555556%" top="89.037037%" style={{
                        fontFamily: 'Raleway',
                        fontStyle: 'italic',
                        fontWeight: '600',
                        color: 'rgba(68,50,50,80)',
                        width: '46.6666667%',
                        height: '5.92592593%',
                        textAlign: 'center'
                    }}>
                        {caption}
                    </Box>
                    <Box className={classes.font32} position="absolute" left="55.9259259%" top="69.4814815%" style={{
                        fontFamily: 'Raleway',
                        fontStyle: 'italic',
                        fontWeight: '600',
                        color: '#B11F24',
                        width: '37.037037%',
                        height: '14.8148148%',
                    }}>
                        "{WOW}"
                            </Box>
                </Box>
            </Paper>
            <Box mt={5} textAlign="center" width={1}>
                <InlineShareButtons
                    config={{
                        alignment: 'center',  // alignment of buttons (left, center, right)
                        color: 'social',      // set the color of buttons (social, white)
                        enabled: true,        // show/hide buttons (true, false)
                        font_size: 16,        // font size for the buttons
                        labels: 'cta',        // button labels (cta, counts, null)
                        language: 'en',       // which language to use (see LANGUAGES)
                        networks: [           // which networks to include (see SHARING NETWORKS)
                            'whatsapp',
                            'linkedin',
                            'messenger',
                            'facebook',
                            'twitter'
                        ],
                        padding: 12,          // padding within buttons (INTEGER)
                        radius: 4,            // the corner radius on each button (INTEGER)
                        show_total: true,
                        size: 40,             // the size of each button (INTEGER)

                        // OPTIONAL PARAMETERS
                        url: 'https://my2020moments.herokuapp.com/', // (defaults to current url)
                        image: `https://https://my2020moments.herokuapp.com/favicon-32x32.png`,  // (defaults to og:image or twitter:image)
                        description: `Inspire the world by sharing your most impactful moment in 2020 so far #Moments2020 #Impactful #2020Impact #2020`,       // (defaults to og:description or twitter:description)
                        title: 'Share your most interesting & impactful moment in 2020 so far',            // (defaults to og:title or twitter:title)
                        // message: 'custom email text',     // (only for email sharing)
                        // subject: 'custom email subject',  // (only for email sharing)
                        // username: 'custom twitter handle' // (only for twitter sharing)
                    }}
                />
                {/* <Box display="inline-block " mr={1}>
                    <Button>
                        <div className="fb-share-button" data-href="" data-layout="button" data-size="large"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse" className="fb-xfbml-parse-ignore">Share</a></div>
                    </Button>
                </Box>
                <Box display="inline-block " mr={1}>
                    <Button variant="contained">
                        <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" style={{ textDecoration: 'none' }} className="twitter-share-button" data-size="large" data-hashtags="#LockDownMoments" data-show-count="false"><TwitterIcon /> Twitter</a><script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
                    </Button>
                </Box>
                <Box display="inline-block " mr={1}>
                    <Button variant="contained">
                        <a data-pin-tall="true" data-pin-custom="true" style={{ backgroundColor: 'none' }} href="https://www.pinterest.com/pin/create/button/" data-pin-do="buttonBookmark">
                            Pinterest
                        </a>
                    </Button>
                </Box> */}

                <Box display="inline-block " mt={2}>
                    <Button variant="contained" size="small" onClick={handleDownload}>
                        Download
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}