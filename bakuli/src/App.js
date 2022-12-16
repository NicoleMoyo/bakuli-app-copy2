import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResetPassword from "./components/ResetPassword";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import CreateAccountRootRoot1 from "./components/SignUpStyled";
import './styles/App.css';
//import Home from "./pages/Home";
import { createTheme, ThemeProvider } from "@mui/material";
import ResetPasswordLink from "./components/ResetPasswordLink";
import Articles from "./components/Articles1";
import IndividualArticle from "./components/IndividualArticle";
import Settings from "./components/Settings1";
import Home from "./components/Home";
import FoodLog from "./components/FoodLog";


const theme = createTheme ({
  palette: {
    primary: {
      main: "#32580d"
    }
  }, 
  typography: {
    fontFamily: "'Manrope', sans-serif"
  },
  shape: {
    borderRadius: 12
  }
})

function App() {
  

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        {/* <Route path="/signupstyle" element={<CreateAccountRootRoot1 />} /> */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/resetlink" element={<ResetPasswordLink />} />
        <Route path="/dashboard/home" element={<Home />} />
        <Route path="/dashboard/food-log" element={<FoodLog />} />
        <Route path="/dashboard/healthspace" element={<Articles />} />
        <Route path="/dashboard/healthspace/:id" element={<IndividualArticle />} />
        <Route path="/dashboard/settings" element={<Settings />} />
      </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
