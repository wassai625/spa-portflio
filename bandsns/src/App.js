import React from "react";
import "./App.css";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { indigo } from "@mui/material/colors";
import Navbar from "./component/Navbar";
import Main from "./component/Main";
import ApiContextProvider from "./context/ApiContext"


const theme = createTheme({
  palette: {
    primary: indigo,
    secondary: {
      main: "#f44336",
    },
  },
  typography: {
    fontFamily: "Comic Neue",
  },
});

function App() {
  return (
    <ApiContextProvider>
      
        <ThemeProvider theme={theme}>
            <Navbar />
            <div className="container">
                <Main />
            </div>
        </ThemeProvider>
      
    </ApiContextProvider>
  );

}


export default App;