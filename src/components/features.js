import React, {useEffect, useRef} from 'react';
import {
    Box,
    Button,
    Container,
    Grid,
    IconButton,
    Paper,
    Stack,
    Typography,
    useMediaQuery,
    useTheme
} from "@mui/material";
import PublicIcon from '@mui/icons-material/Public';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EastIcon from '@mui/icons-material/East';
import useWebAnimations from "@wellyshen/use-web-animations";
import useOnScreen from "../hooks/onScreen";


const Features = () => {
    const theme = useTheme();
    const isSmallerThanMD = useMediaQuery(theme.breakpoints.down('md'));

    const main = useRef();
    const isVisible = useOnScreen(main);
    const animDuration = 800;
    const animDelay = 300;

    const iconAnimationOptions = {
        keyframes: [
            {transform: 'translateY(0px)', opacity: 1},
        ],
        animationOptions: {
            duration: animDuration,
            fill: 'forwards',
            easing: "cubic-bezier(0,.1,.58,.95)",
            delay: animDelay
        },
    }
    const titleAnimationOptions = {
        keyframes: [
            {transform: 'translateY(0px)', opacity: 1},
        ],
        animationOptions: {
            duration: animDuration,
            fill: 'forwards',
            easing: "cubic-bezier(0,.1,.58,.95)",
            delay: animDelay

        },
    }
    const descriptionAnimationOptions = {
        keyframes: [
            {transform: 'translateY(0px)', opacity: 1},
        ],
        animationOptions: {
            duration: animDuration,
            fill: 'forwards',
            easing: "ease-in-out",
            delay: animDelay
        },
    }
    const iconContainer1Ref = useWebAnimations(iconAnimationOptions)
    const title1Ref = useWebAnimations(titleAnimationOptions)
    const description1Ref = useWebAnimations(descriptionAnimationOptions)
    const iconContainer2Ref = useWebAnimations({...iconAnimationOptions, animationOptions: {...iconAnimationOptions.animationOptions, delay: animDelay + 100}})
    const title2Ref = useWebAnimations({...iconAnimationOptions, animationOptions: {...iconAnimationOptions.animationOptions, delay: animDelay + 100}})
    const description2Ref = useWebAnimations({...iconAnimationOptions, animationOptions: {...iconAnimationOptions.animationOptions, delay: animDelay + 100}})
    const iconContainer3Ref = useWebAnimations({...iconAnimationOptions, animationOptions: {...iconAnimationOptions.animationOptions, delay: animDelay + 200}})
    const title3Ref = useWebAnimations({...iconAnimationOptions, animationOptions: {...iconAnimationOptions.animationOptions, delay: animDelay + 200}})
    const description3Ref = useWebAnimations({...iconAnimationOptions, animationOptions: {...iconAnimationOptions.animationOptions, delay: animDelay + 200}})

    const icon1Ref = useWebAnimations({
        keyframes: [
            {transform: 'rotate(0deg)'},
            {transform: 'rotate(360deg)'},
        ],
        animationOptions: {
            duration:3000,
            fill: 'forwards',
            iterations: 100000,
            easing: "ease-in-out",

        }
    })
    const icon2Ref = useWebAnimations({
        keyframes: [
            {transform: 'translateX(-10px) translateY(10px)', opacity: 0},
            {transform: 'translateX(0px) translateY(0px)', opacity: 1},
            {transform: 'translateX(0px) translateY(0px)', opacity: 1},
            {transform: 'translateX(0px) translateY(0px)', opacity: 1},
            {transform: 'translateX(0px) translateY(0px)', opacity: 1},
            {transform: 'translateX(0px) translateY(0px)', opacity: 1},
            {transform: 'translateX(0px) translateY(0px)', opacity: 1},
            {transform: 'translateX(0px) translateY(0px)', opacity: 1},
            {transform: 'translateX(10px) translateY(-10px)', opacity:0},
        ],
        animationOptions: {
            duration:2000,
            fill: 'forwards',
            iterations: 100000,

        }
    })
    const icon3Ref = useWebAnimations({
        keyframes: [
            {transform: 'rotate(0deg)'},
            {transform: 'rotate(360deg)'},
        ],
        animationOptions: {
            duration:3000,
            fill: 'forwards',
            iterations: 100000,
            easing: "ease-in-out",

        }
    })

    useEffect(() => {
        if (isVisible) {
            iconContainer1Ref.getAnimation().play();
            title1Ref.getAnimation().play();
            description1Ref.getAnimation().play();
            iconContainer2Ref.getAnimation().play();
            title2Ref.getAnimation().play();
            description2Ref.getAnimation().play();
            iconContainer3Ref.getAnimation().play();
            title3Ref.getAnimation().play();
            description3Ref.getAnimation().play();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isVisible])

    return (
        <>
            <Container maxWidth={'lg'} sx={{...!isSmallerThanMD&&{height: '100vh'}}}>
                <Typography variant={'button'} component={'p'} pt={15} color={'secondary'} align={'center'}
                            sx={{textTransform: 'uppercase'}}>
                    Our Features
                </Typography>
                <Typography variant={'h4'} align='center' fontWeight={500} mt={1} mb={4} sx={{
                    ...isSmallerThanMD && {
                        fontSize: '1.5rem'
                    }
                }}>
                    We believe we can save more life with you
                </Typography>
                <Grid container justifyContent={'center'} spacing={2} sx={{height: 'auto'}} py={5}>
                    <Grid item xs={12} sm={6} md={4} ref={main}>
                        <Feature
                            iconContainerRef={iconContainer1Ref.ref}
                            titleRef={title1Ref.ref}
                            descriptionRef={description1Ref.ref}
                            icon={<PublicIcon ref={icon1Ref.ref} color={'secondary'} fontSize={'large'}/>}
                            title={'Transparent'}
                            description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mattis lacus\n' +
                                '                            eu erat rhoncus, a tristique elit dictum'}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Feature
                            iconContainerRef={iconContainer2Ref.ref}
                            titleRef={title2Ref.ref}
                            descriptionRef={description2Ref.ref}
                            icon={<ArrowOutwardIcon ref={icon2Ref.ref} color={'secondary'} fontSize={'large'}/>}
                            title={'Quick Fundraise'}
                            description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mattis lacus\n' +
                                '                            eu erat rhoncus, a tristique elit dictum'}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Feature
                            iconContainerRef={iconContainer3Ref.ref}
                            titleRef={title3Ref.ref}
                            descriptionRef={description3Ref.ref}
                            icon={<AccessTimeIcon ref={icon3Ref.ref} color={'secondary'} fontSize={'large'}/>}
                            title={'Real Time'}
                            description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mattis lacus\n' +
                                '                            eu erat rhoncus, a tristique elit dictum'}
                        />
                    </Grid>
                </Grid>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <Button variant={'contained'} endIcon={<EastIcon sx={{fontSize:'13px !important'}}/>}>Fill the form</Button>
                </Box>
            </Container>
        </>
    );
}

const Feature = ({icon, title, description, iconContainerRef, titleRef, descriptionRef}) => {
    return (
        <Paper elevation={0} sx={{width: '100%', height: '100%', borderRadius: '20px'}}>
            <Stack spacing={2} justifyContent={'center'} alignItems={'center'} py={2} sx={{height: '100%'}}>
                <Box ref={iconContainerRef} sx={{transform:'translateY(15px)', opacity: 0.5}}>
                    <IconButton size={'large'} sx={{backgroundColor: '#f3f3f3 !important'}} disabled>
                        {icon}
                    </IconButton>
                </Box>
                <Box ref={titleRef} sx={{transform:'translateY(15px)', opacity: 0.5}}>
                    <Typography variant={'h6'} fontWeight={500} align={'center'}>
                        {title}
                    </Typography>
                </Box>
                <Box ref={descriptionRef} sx={{transform:'translateY(15px)', opacity: 0.5}}>
                    <Typography variant={'body2'} align={'center'} px={3}>
                        {description}
                    </Typography>
                </Box>
            </Stack>
        </Paper>
    );
}
export default Features;
