import React, {useEffect} from 'react';
import {Box, Button, Container, Stack, Typography, useMediaQuery, useTheme} from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import useWebAnimations from "@wellyshen/use-web-animations";
import useOnScreen from "../hooks/onScreen";

const Footer = () => {
    const theme = useTheme();
    const isSmallerThanMD = useMediaQuery(theme.breakpoints.down('md'));

    const elementDuration = 1000;

    const element1 = useWebAnimations({
        keyframes: [
            {transform: 'translateY(0px)', opacity: 1},
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
            duration: elementDuration + 300,
            fill: 'forwards',
            easing: "ease-in-out",
        },
    })
    const element3 = useWebAnimations({
        keyframes: [
            {transform: 'translateY(0px)'},
        ],
        animationOptions: {
            duration: elementDuration + 500,
            fill: 'forwards',
            easing: "ease-in-out",
        },
    })
    const isVisible = useOnScreen(element1.ref);

    useEffect(() => {
        if (isVisible) {
            element1.getAnimation().play();
            element2.getAnimation().play();
            element3.getAnimation().play();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isVisible])
    return (
        <Box sx={{height: '350px', bgcolor: '#101125'}}>
            <Container maxWidth={'lg'} sx={{height: '100%'}}>
                <Stack justifyContent={'center'} alignItems={'center'} spacing={3} sx={{height: '100%'}}>
                    <Typography variant={'h2'} ref={element1.ref} fontWeight={600} sx={{
                        color: 'white', transform: 'translateY(20px)', opacity: 0.5,
                        ...isSmallerThanMD && {
                            fontSize: '2.5rem',
                        }
                    }}>
                        Ready to go live?
                    </Typography>
                    <Typography variant={'body2'} ref={element2.ref}
                                sx={{color: 'white', width: {md: '60%'}, transform: 'translateY(20px)'}}
                                align={'center'}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mattis lacus
                        eu erat rhoncus, a tristique elit dictum
                        Lorem ipsum dolor sit amet, consectetur
                        Lorem ipsum dolor sit amet
                        Lorem ipsum dolor sit amet
                    </Typography>
                    <Button ref={element3.ref} sx={{transform: 'translateY(20px)'}} variant={'contained'}
                            endIcon={<EastIcon sx={{fontSize: '13px !important'}}/>}>Get Started</Button>
                </Stack>
            </Container>
        </Box>
    );
}

export default Footer;
