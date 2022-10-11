import React, {useEffect, useRef} from 'react';
import {Box, Button, Container, Grid, Stack, Typography, useMediaQuery, useTheme} from "@mui/material";
import Netflix from '../assets/images/netflix.jpg';
import Ott1 from '../assets/images/ott1.jpg';
import Ott2 from '../assets/images/ott2.jpg';
import Ott3 from '../assets/images/ott3.jpg';
import EastIcon from '@mui/icons-material/East';
import useWebAnimations from "@wellyshen/use-web-animations";
import useOnScreen from "../hooks/onScreen";

const Home = () => {
    const theme = useTheme();
    const isSmallerThanMD = useMediaQuery(theme.breakpoints.down('md'));

    const main = useRef();
    const isVisible = useOnScreen(main);

    const imageBorderRadius = '20px';
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

    const element1 = useWebAnimations({
        keyframes: [
            {transform: 'translateY(-20px)'},
        ],
        animationOptions: {
            duration: elementDuration,
            fill: 'forwards',
            easing: "ease-in-out",
        },
    })
    const element2 = useWebAnimations({
        keyframes: [
            {transform: 'translateY(-20px)'},
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
    const imgR = useWebAnimations(imageAnimationOptions)
    const imgBR = useWebAnimations(imageAnimationOptions)


    useEffect(() => {
        if (isVisible) {
            element1.getAnimation().play();
            element2.getAnimation().play();
            imgTL.getAnimation().play();
            imgBL.getAnimation().play();
            imgTR.getAnimation().play();
            imgR.getAnimation().play();
            imgBR.getAnimation().play();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isVisible])

    return (
        <>
            <Container maxWidth={'lg'} sx={{height: '100vh'}} ref={main}>
                <Grid container justifyContent={'space-between'} pt={15}>
                    <Grid item xs={12} md={4}>
                        <Stack ref={element1.ref} sx={{mt: '50px'}}>
                            <Typography variant={'button'} fontSize={10} color={'primary'}
                                        sx={{textTransform: 'uppercase'}}>
                                <Box sx={{
                                    bgcolor: 'rgba(218,219,252,0.58)',
                                    display: 'inline-block',
                                    p: '5px 15px',
                                    borderRadius: '10px'
                                }}>
                                    built for operations by operations experts
                                </Box>
                            </Typography>
                            <Typography variant={'h2'} mt={1} fontWeight={600} sx={{
                                ...isSmallerThanMD && {
                                    fontSize: '2.5rem'
                                }
                            }}>Virtual NOC OTT</Typography>
                            <Typography variant={'h2'} fontWeight={600} color={'primary'} sx={{
                                ...isSmallerThanMD && {
                                    fontSize: '2.5rem'
                                }
                            }}>Operations Hub</Typography>
                            <Typography variant={'body1'} mt={1} pl={0.5} sx={{
                                ...isSmallerThanMD && {
                                    fontSize: '0.9rem',
                                },
                                width: '100vw'
                            }}
                            >
                                Find OTT delivery issues before your viewers are impacted
                            </Typography>
                        </Stack>
                        <Button ref={element2.ref} variant={'contained'}
                                endIcon={<EastIcon sx={{fontSize: '13px !important'}}/>} sx={{marginTop: '30px'}}>
                            Request Demo
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={'auto'}>
                        <Grid container spacing={2} sx={{
                            ...isSmallerThanMD && {
                                py: 2
                            }
                        }}>
                            <Grid item xs={6} sm>
                                <Stack alignItems={'flex-end'} spacing={1}>
                                    <Box
                                        ref={imgTL.ref}
                                        sx={{transform: `translateX(-${imageTranslate}px) translateY(-${imageTranslate}px)`}}
                                    >
                                        <img src={Ott2} alt="img"
                                             style={{
                                                 ...(isSmallerThanMD ? {width: '100%'} : {height: '250px'}),
                                                 borderRadius: imageBorderRadius,
                                                 borderBottomRightRadius: 0
                                             }}
                                        />
                                    </Box>
                                    <Box
                                        ref={imgBL.ref}
                                        sx={{
                                            transform: `translateX(-${imageTranslate}px) translateY(${imageTranslate}px)`,
                                            display: isSmallerThanMD ? 'none' : 'block',
                                        }}
                                    >
                                        <img src={Netflix} alt="img"
                                             style={{
                                                 height: '150px',
                                                 borderRadius: imageBorderRadius,
                                                 borderTopRightRadius: 0
                                             }}
                                        />
                                    </Box>
                                </Stack>
                            </Grid>
                            <Grid item xs={6} sm>
                                <Stack alignItems={'flex-start'} spacing={1.5}>
                                    <Box ref={imgTR.ref} sx={{
                                        transform: `translateX(${imageTranslate}px) translateY(-${imageTranslate}px)`,
                                        height: '80px',
                                        display: isSmallerThanMD ? 'none' : 'block',
                                        bgcolor: '#c99bfa',
                                        width: '80px',
                                        borderRadius: imageBorderRadius,
                                        borderBottomLeftRadius: 0
                                    }}/>
                                    <Box
                                        ref={imgR.ref}
                                        sx={{transform: `translateX(${imageTranslate}px) translateY(${imageTranslate}px)`}}
                                    >
                                        <img src={Ott3} alt="img" style={{
                                            ...(isSmallerThanMD ? {width: '100%'} : {height: '250px'}),
                                            borderRadius: '20px',
                                            borderBottomLeftRadius: 0
                                        }}/>
                                    </Box>
                                    <Box
                                        ref={imgBR.ref}
                                        sx={{
                                            transform: `translateX(${imageTranslate}px) translateY(${imageTranslate}px)`,
                                            display: isSmallerThanMD ? 'none' : 'block',
                                        }}
                                    >
                                        <img src={Ott1} alt="img" style={{
                                            height: '60px',
                                            borderRadius: imageBorderRadius,
                                            borderTopLeftRadius: 0
                                        }}/>
                                    </Box>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default Home;
