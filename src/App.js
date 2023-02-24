import React from "react";
import "./App.css";
import PrimarySearchAppBar from "./components/PrimarySearchAppBar";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import JobDetailPage from "./pages/JobDetailPage";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgba(255, 255, 255, 0.08)",
    },
    secondary: {
      main: "#424242",
    },
    tertiary: {
      main: "#FF4500",
    },
    line: {
      main: "#9e9e9e",
    },
    background: {
      default: "#121212",
    },
    text: {
      primary: "#fff",
      secondary: "#fff",
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <PrimarySearchAppBar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/job/:id" element={<JobDetailPage />}></Route>
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
