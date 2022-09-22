import React from 'react';
import {Box, Button, Container, Grid, Stack, Typography} from "@mui/material";
import Netflix from '../assets/images/netflix.jpg';
import Ott1 from '../assets/images/ott1.jpg';
import Ott2 from '../assets/images/ott2.jpg';
import Ott3 from '../assets/images/ott3.jpg';
import EastIcon from '@mui/icons-material/East';

const Home = () => {
    const imageBorderRadius = '20px';
    return (
        <>
            <Container maxWidth={'lg'} sx={{height: '100vh'}}>
                <Grid container justifyContent={'space-between'} pt={15}>
                    <Grid item xs={'auto'}>
                        <Stack>
                            <Typography variant={'button'} fontSize={11} pl={1.5} color={'primary'}
                                        sx={{textTransform: 'uppercase'}}>built for operations by operations
                                experts</Typography>
                            <Typography variant={'h2'} mt={1} fontWeight={600}>Virtual NOC OTT</Typography>
                            <Typography variant={'h2'} fontWeight={600} color={'primary'}>Operations Hub</Typography>
                            <Typography variant={'body1'} mt={1} pl={0.5}>Find OTT delivery issues before your viewers
                                are
                                impacted</Typography>
                        </Stack>
                        <Button variant={'contained'} endIcon={<EastIcon sx={{fontSize:'13px !important'}}/>} sx={{marginTop: '30px'}}>Request Demo</Button>
                    </Grid>
                    <Grid item xs={'auto'}>
                        <Grid container spacing={2}>
                            <Grid item>
                                <Stack alignItems={'flex-end'} spacing={1}>
                                    <Box><img src={Ott2} alt="img" style={{
                                        height: '250px',
                                        borderRadius: imageBorderRadius,
                                        borderBottomRightRadius: 0
                                    }}/></Box>
                                    <Box><img src={Netflix} alt="img"
                                              style={{
                                                  height: '150px',
                                                  borderRadius: imageBorderRadius,
                                                  borderTopRightRadius: 0
                                              }}/></Box>
                                </Stack>
                            </Grid>
                            <Grid item>
                                <Stack alignItems={'flex-start'} spacing={1.5}>
                                    <Box sx={{
                                        height: '80px',
                                        bgcolor: '#c99bfa',
                                        width: '80px',
                                        borderRadius: imageBorderRadius,
                                        borderBottomLeftRadius: 0
                                    }}/>
                                    <Box>
                                        <img src={Ott3} alt="img" style={{
                                            height: '150px',
                                            borderRadius: '20px',
                                            borderBottomLeftRadius: 0
                                        }}/>
                                    </Box>
                                    <Box>
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
