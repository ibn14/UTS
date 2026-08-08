// Mengimpor React
import React from "react";

// Mengimpor komponen React Router
import { Routes, Route, Link } from "react-router-dom";

// Mengimpor komponen Material UI
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

// Mengimpor halaman
import Home from "./pages/Home";
import About from "./pages/About";
import Video from "./pages/Video";

// Membuat komponen utama aplikasi
export default function App() {

  // Mengembalikan tampilan utama
  return (

    <>
      {/* Navbar */}
      <AppBar position="static">

        <Toolbar>

          {/* Judul website */}
          <Typography
            variant="h6"
            sx={{ flexGrow: 1 }}
          >
            CV Online
          </Typography>

          {/* Tombol menuju Home */}
          <Button
            color="inherit"
            component={Link}
            to="/"
          >
            Home
          </Button>

          {/* Tombol menuju About */}
          <Button
            color="inherit"
            component={Link}
            to="/about"
          >
            About
          </Button>

          {/* Tombol menuju Video */}
          <Button
            color="inherit"
            component={Link}
            to="/video"
          >
            Video
          </Button>

        </Toolbar>

      </AppBar>

      {/* Container utama */}
      <Container sx={{ mt: 4 }}>

        {/* Daftar route */}
        <Routes>

          {/* Halaman Home */}
          <Route
            path="/"
            element={<Home />}
          />

          {/* Halaman About */}
          <Route
            path="/about"
            element={<About />}
          />

          {/* Halaman Video */}
          <Route
            path="/video"
            element={<Video />}
          />

        </Routes>

      </Container>

    </>

  );

}