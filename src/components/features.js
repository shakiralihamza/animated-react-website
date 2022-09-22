import React from 'react';
import {Box, Button, Container, Grid, IconButton, Paper, Stack, Typography} from "@mui/material";
import PublicIcon from '@mui/icons-material/Public';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EastIcon from '@mui/icons-material/East';


const Features = () => {
    return (
        <>
            <Container maxWidth={'lg'} sx={{height: '100vh'}}>
                <Typography variant={'button'} component={'p'} pt={15} color={'secondary'} align={'center'}
                            sx={{textTransform: 'uppercase'}}>
                    Our Features
                </Typography>
                <Typography variant={'h4'} align='center' fontWeight={500} mt={1} mb={4}>
                    We believe we can save more life with you
                </Typography>
                <Grid container justifyContent={'center'} spacing={2} sx={{height: '250px'}}>
                    <Grid item xs={4}>
                        <Feature
                            icon={<PublicIcon color={'secondary'} fontSize={'large'}/>}
                            title={'Transparent'}
                            description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mattis lacus\n' +
                                '                            eu erat rhoncus, a tristique elit dictum'}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Feature
                            icon={<ArrowOutwardIcon color={'secondary'} fontSize={'large'}/>}
                            title={'Quick Fundraise'}
                            description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mattis lacus\n' +
                                '                            eu erat rhoncus, a tristique elit dictum'}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Feature
                            icon={<AccessTimeIcon color={'secondary'} fontSize={'large'}/>}
                            title={'Real Time'}
                            description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mattis lacus\n' +
                                '                            eu erat rhoncus, a tristique elit dictum'}
                        />
                    </Grid>
                </Grid>
                <Box mt={4} sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <Button variant={'contained'} endIcon={<EastIcon sx={{fontSize:'13px !important'}}/>}>Fill the form</Button>
                </Box>
            </Container>
        </>
    );
}

const Feature = ({icon, title, description}) => {
    return (
        <Paper elevation={0} sx={{width: '100%', height: '100%', borderRadius: '20px'}}>
            <Stack spacing={2} justifyContent={'center'} alignItems={'center'} sx={{height: '100%'}}>
                <Box>
                    <IconButton size={'large'} sx={{backgroundColor: '#f3f3f3 !important'}} disabled>

                        {icon}
                    </IconButton>
                </Box>
                <Box>
                    <Typography variant={'h6'} fontWeight={500} align={'center'}>
                        {title}

                    </Typography>
                </Box>
                <Box>
                    <Typography variant={'body2'} align={'center'} px={3}>
                        {description}

                    </Typography>
                </Box>
            </Stack>
        </Paper>
    );
}
export default Features;
