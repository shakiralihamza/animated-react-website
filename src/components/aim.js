import React, {useEffect, useRef} from 'react';
import {Box, Container, Grid, Stack, Typography, useMediaQuery, useTheme} from "@mui/material";
import Ott2 from '../assets/images/ott2.jpg';
import Ott3 from '../assets/images/ott3.jpg';
import useWebAnimations from "@wellyshen/use-web-animations";
import useOnScreen from "../hooks/onScreen";

const Aim = () => {
    const theme = useTheme();
    const isSmallerThanMD = useMediaQuery(theme.breakpoints.down('md'));

    const main = useRef();
    const isVisible = useOnScreen(main);

    const imageBorderRadius = '8px';
    const elementDuration = 800;
    const imageDuration = 1000;
    const imageTranslate = 20;

    const imageAnimationOptions = {
        keyframes: [
            {transform: 'translateX(0px) translateY(0px)'},
        ],
        animationOptions: {
            duration: imageDuration,
            fill: 'forwards',
            easing: "cubic-bezier(0,.1,.58,.95)",
        }
    }

    const element0 = useWebAnimations({
        keyframes: [
            {transform: 'scale(1)'},
        ],
        animationOptions: {
            duration: elementDuration,
            fill: 'forwards',
            easing: "ease-in-out",
        }
    })
    const element1 = useWebAnimations({
        keyframes: [
            {transform: 'translateY(0px)'},
        ],
        animationOptions: {
            duration: elementDuration,
            fill: 'forwards',
            easing: "ease-in-out",
        },
    })
    const element2 = useWebAnimations({
        keyframes: [
            {transform: 'translateY(0px)'},
        ],
        animationOptions: {
            duration: elementDuration + 100,
            fill: 'forwards',
            easing: "ease-in-out",
        },
    })

    const imgTL = useWebAnimations(imageAnimationOptions)
    const imgBL = useWebAnimations(imageAnimationOptions)
    const imgTR = useWebAnimations(imageAnimationOptions)
    const imgBR = useWebAnimations(imageAnimationOptions)

    useEffect(() => {
        if (isVisible) {
            element0.getAnimation().play();
            element1.getAnimation().play();
            element2.getAnimation().play();
            imgTL.getAnimation().play();
            imgBL.getAnimation().play();
            imgTR.getAnimation().play();
            imgBR.getAnimation().play();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isVisible])
    return (
        <>
            <Container maxWidth={'lg'} sx={{height: '100vh'}}>
                <Grid container justifyContent={'space-between'} pt={15}>
                    <Grid item xs={12} md={4}>
                        <Stack ref={main}>
                            <Box ref={element0.ref} sx={{
                                transform: 'scale(0.5)',
                                width: '35px',
                                height: '3px',
                                backgroundColor: 'primary.dark'
                            }} mb={0.5}
                                 ml={0.7}/>
                            <Box ref={element1.ref} sx={{transform: 'translateY(20px)'}}>
                                <Typography variant={'h2'} lineHeight={0.8} mt={1} fontWeight={600} sx={{
                                    ...isSmallerThanMD && {
                                        fontSize: '2.5rem'
                                    }
                                }}>
                                    Built to
                                </Typography>
                                <Typography variant={'h2'} lineHeight={0.9} fontWeight={600} sx={{
                                    ...isSmallerThanMD && {
                                        fontSize: '2.5rem'
                                    }
                                }}>
                                    empower
                                </Typography>
                                <Typography variant={'h2'} lineHeight={1} fontWeight={600}
                                            color={'primary'} sx={{
                                    ...isSmallerThanMD && {
                                        fontSize: '2.5rem'
                                    }
                                }}>
                                    everyone
                                </Typography>
                            </Box>
                            <Typography ref={element2.ref} sx={{transform: 'translateY(20px)'}} variant={'body1'} mt={3}
                                        pl={0.5}>We provide small industries, organizations,
                                and institutes of high-tech industries with modern components.
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={'auto'}>
                        <Grid container spacing={2} sx={{
                            ...isSmallerThanMD && {
                                py: 2
                            }
                        }}>
                            <Grid item xs={6} sm>
                                <Stack alignItems={'flex-end'} spacing={1}>
                                    <Box ref={imgTL.ref}
                                         sx={{transform: `translateX(-${imageTranslate}px) translateY(-${imageTranslate}px)`}}>
                                        <img src={Ott3} alt="img" style={{
                                            ...(isSmallerThanMD ? {width: '100%'} : {height: '250px'}),
                                            borderRadius: imageBorderRadius, borderBottomRightRadius: 0
                                        }}/>
                                    </Box>
                                    <Box ref={imgBL.ref}
                                         sx={{transform: `translateX(-${0}px) translateY(${imageTranslate + 5}px)`}}>
                                        <img src={Ott2} alt="img"
                                             style={{
                                                 display: isSmallerThanMD ? 'none' : 'block',
                                                 height: '150px',
                                                 borderRadius: imageBorderRadius,
                                                 borderTopRightRadius: 0
                                             }}/>
                                    </Box>
                                </Stack>
                            </Grid>
                            <Grid item xs={6} sm>
                                <Stack alignItems={'flex-start'} spacing={1.5}>
                                    <Box ref={imgTR.ref} mt={7} sx={{
                                        display: isSmallerThanMD ? 'none' : 'block',
                                        transform: `translateX(${imageTranslate}px) translateY(-${0}px)`,
                                        height: '50px',
                                        bgcolor: 'secondary.light',
                                        width: '50px',
                                        borderRadius: 0,
                                        borderTopRightRadius: '100%'
                                    }}/>
                                    <Box ref={imgBR.ref}
                                         sx={{transform: `translateX(${imageTranslate - 5}px) translateY(${imageTranslate + 5}px)`,}}>
                                        <img src={Ott2} alt="img" style={{
                                            ...(isSmallerThanMD ? {width: '100%'} : {height: '250px'}),
                                            borderRadius: '20px', borderBottomLeftRadius: 0
                                        }}/>
                                    </Box>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </>);
}

export default Aim;
