import React, {useState} from 'react';
import {
    Box,
    Button,
    Container,
    Drawer,
    Grid,
    IconButton,
    Stack,
    Typography,
    useMediaQuery,
    useTheme
} from "@mui/material";
import BarChartIcon from '@mui/icons-material/BarChart';
import MenuIcon from "@mui/icons-material/Menu";

const menuItems = [
    'Home',
    'Our Solution',
    'Virtual Booth',
    'Resources',
    'About Us',
    'Contact Us'
];

const Header = () => {
    const theme = useTheme();
    const isSmallerThanMD = useMediaQuery(theme.breakpoints.down('md'));
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuOpen = () => {
        setMenuOpen(true);
    };
    const handleMenuClose = () => {
        setMenuOpen(false);
    };

    return (
        <Box sx={{position: 'fixed', top: 0, width: '100%', bgcolor: 'rgba(255,255,255,0.98)', zIndex: 999}}>
            <Container maxWidth={'lg'} sx={{height: '50px'}}>
                <Grid container justifyContent={'space-between'} alignItems={'center'} sx={{height: '100%'}}>
                    <Grid item xs='auto'>
                        <Stack direction={'row'} alignItems={'center'}>
                            <BarChartIcon color={'primary'} fontSize={'large'}/>
                            <Typography variant={'h5'} sx={{fontWeight: '200'}}>touchstream</Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={0} sm={6}>
                        {isSmallerThanMD ?
                            (<Drawer
                                anchor={"left"}
                                open={menuOpen}
                                onClose={handleMenuClose}
                                ModalProps={{
                                    keepMounted: true,
                                }}
                            >
                                <Box sx={{padding: '40px 40px'}}>
                                    <Stack direction={'column'} alignItems={'flex-start'} justifyContent={'center'}
                                           spacing={2}>
                                        <Nav menuItems={menuItems}/>
                                    </Stack>
                                </Box>
                            </Drawer>)
                            :
                            <Stack direction={'row'} alignItems={'center'} justifyContent={'center'} spacing={2}>
                                <Nav menuItems={menuItems}/>
                            </Stack>
                        }
                    </Grid>
                    <Grid item xs='auto'>
                        <Stack direction={'row'}>
                            {isSmallerThanMD ?

                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    onClick={handleMenuOpen}
                                    edge="start"
                                    sx={{mr: 2, ...(!isSmallerThanMD && {display: 'none'})}}
                                >
                                    <MenuIcon/>
                                </IconButton>
                                :
                                <Button variant={'outlined'} sx={{textTransform: 'none'}}>Request Demo</Button>
                            }
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

const Nav = ({menuItems}) => (
    menuItems.map((item, index) => (
        <NavButton name={item} key={index}/>
    ))
)
const NavButton = ({name}) => (
    <Button variant={'text'} color={'inherit'} sx={{fontSize: '0.8rem', textTransform: 'none'}}>{name}</Button>

)
export default Header;
