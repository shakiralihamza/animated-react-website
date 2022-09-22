import React from 'react';
import {Box, Container, Grid, Stack, Typography} from "@mui/material";
import Ott2 from '../assets/images/ott2.jpg';
import Ott3 from '../assets/images/ott3.jpg';

const Aim = () => {
    const imageBorderRadius = '8px';
    return (<>
        <Container maxWidth={'lg'} sx={{height: '100vh'}}>
            <Grid container justifyContent={'space-between'} pt={15}>
                <Grid item xs={4}>
                    <Stack>
                        <Box sx={{width:'35px', height:'3px', backgroundColor: 'primary.dark'}} mb={0.5} ml={0.7}/>
                        <Typography variant={'h2'} lineHeight={0.8} mt={1} fontWeight={600}>Built to</Typography>
                        <Typography variant={'h2'} lineHeight={0.9} fontWeight={600}>empower</Typography>
                        <Typography variant={'h2'} lineHeight={1} fontWeight={600} color={'primary'}>everyone</Typography>
                        <Typography variant={'body1'} mt={3} pl={0.5}>We provide small industries, organizations,
                            and institutes of high-tech industries with modern components.
                        </Typography>
                    </Stack>
                </Grid>
                <Grid item xs={'auto'}>
                    <Grid container spacing={2}>
                        <Grid item>
                            <Stack alignItems={'flex-end'} spacing={1}>
                                <Box><img src={Ott3} alt="img" style={{
                                    height: '250px', borderRadius: imageBorderRadius, borderBottomRightRadius: 0
                                }}/></Box>
                                <Box><img src={Ott2} alt="img"
                                          style={{
                                              height: '150px', borderRadius: imageBorderRadius, borderTopRightRadius: 0
                                          }}/></Box>
                            </Stack>
                        </Grid>
                        <Grid item>
                            <Stack alignItems={'flex-start'} spacing={1.5}>
                                <Box mt={7} sx={{
                                    height: '50px',
                                    bgcolor: 'secondary.light',
                                    width: '50px',
                                    borderRadius: 0,
                                    borderTopRightRadius: '100%'
                                }}/>
                                <Box>
                                    <img src={Ott2} alt="img" style={{
                                        height: '250px', borderRadius: '20px', borderBottomLeftRadius: 0
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
