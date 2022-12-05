import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/signup";
import {createTheme, ThemeProvider } from "@material-ui/core"
import { green } from "@material-ui/core/colors"


const theme = createTheme({
  palette: {
    primary:{
      main: '#1bfd9c',
    },
    secondary: green, 
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  }
})

function App() {
  return (
    <div className="App">

      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={ <Signup /> } />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>

    </div>
  );
}

export default App;
