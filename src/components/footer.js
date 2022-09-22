import React from 'react';
import {Box, Button, Container, Stack, Typography} from "@mui/material";
import EastIcon from "@mui/icons-material/East";

const Footer = () => (
    <Box sx={{height:'350px', bgcolor:'#101125'}}>
        <Container maxWidth={'lg'} sx={{height: '100%'}}>
            <Stack justifyContent={'center'} alignItems={'center'} spacing={3} sx={{height: '100%'}}>
                <Typography variant={'h2'} fontWeight={600} sx={{color:'white'}}>Ready to go live?</Typography>
                <Typography variant={'body2'} sx={{color:'white', width:'700px'}} align={'center'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mattis lacus
                    eu erat rhoncus, a tristique elit dictum
                    Lorem ipsum dolor sit amet, consectetur
                    Lorem ipsum dolor sit amet
                    Lorem ipsum dolor sit amet
                </Typography>
                <Button variant={'contained'} endIcon={<EastIcon sx={{fontSize:'13px !important'}}/>}>Get Started</Button>
            </Stack>
        </Container>
    </Box>
);

export default Footer;
