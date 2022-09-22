import React from 'react';
import {Box, Button, Container, Grid, Stack, Typography} from "@mui/material";

const menuItems = [
    'Home',
    'Our Solution',
    'Virtual Booth',
    'Resources',
    'About Us',
    'Contact Us'
];

const Header = () => (
<Box sx={{position:'fixed', top:0, width:'100%', bgcolor:'rgba(255,255,255,0.98)'}}>
    <Container maxWidth={'lg'} sx={{height: '50px' }}>
        <Grid container justifyContent={'space-between'} alignItems={'center'} sx={{height: '100%'}}>
            <Grid item xs='auto'>
                <Stack direction={'row'}>
                    <Typography variant={'h5'} sx={{fontWeight: '200'}}>touchstream</Typography>
                </Stack>
            </Grid>
            <Grid item xs={6}>
                <Stack direction={'row'} alignItems={'center'} justifyContent={'center'} spacing={2}>
                    {
                        menuItems.map((item, index) => (
                            <NavButton name={item} key={index}/>
                        ))
                    }
                </Stack>
            </Grid>
            <Grid item xs='auto'>
                <Stack direction={'row'}>
                    <Button variant={'outlined'} sx={{textTransform: 'none'}}>Request Demo</Button>
                </Stack>
            </Grid>
        </Grid>
    </Container>
</Box>
);

const NavButton = ({name}) => (
    <Button variant={'text'} color={'inherit'} sx={{fontSize: '0.8rem', textTransform: 'none'}}>{name}</Button>

)
export default Header;
