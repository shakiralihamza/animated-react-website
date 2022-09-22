import Header from "./components/header";
import Home from "./components/home";
import {createTheme, CssBaseline, ThemeProvider} from '@mui/material';
import Features from "./components/features";
import Aim from "./components/aim";
import Footer from "./components/footer";

const theme = createTheme({
    components: {
        MuiButtonBase: {
            textTransform: 'none',
            defaultProps: {
                disableRipple: true,
            },
        },
    },
    typography: {
        button: {
            textTransform: 'none',
        }
    },
    palette: {
        secondary: {
            main: '#8c3df6',
            light: '#d7c3ff'
        },
        background: {
            default: '#eef3fa',
        }
    }
});

function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <Header/>
                <Home/>
                <Features/>
                <Aim/>
                <Footer/>
            </ThemeProvider>
        </>
    );
}

export default App;
