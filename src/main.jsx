// Mengimpor React
import React from "react";

// Mengimpor ReactDOM untuk menampilkan React ke browser
import ReactDOM from "react-dom/client";

// Mengimpor BrowserRouter agar aplikasi memiliki fitur routing
import { BrowserRouter } from "react-router-dom";

// Mengimpor komponen utama aplikasi
import App from "./App";

// Mengimpor file CSS utama
import "./App.css";

// Membuat root React pada elemen HTML dengan id="root"
ReactDOM.createRoot(document.getElementById("root")).render(

  // StrictMode membantu mendeteksi potensi masalah saat development
  <React.StrictMode>

    {/* BrowserRouter mengaktifkan fitur React Router */}
    <BrowserRouter>

      {/* Menampilkan komponen utama */}
      <App />

    </BrowserRouter>

  </React.StrictMode>

);