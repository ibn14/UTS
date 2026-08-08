// Mengimpor fungsi defineConfig dari Vite
import { defineConfig } from "vite";

// Mengimpor plugin React agar Vite dapat menjalankan file React (.jsx)
import react from "@vitejs/plugin-react";

// Mengekspor konfigurasi Vite
export default defineConfig({

  // Mendaftarkan plugin React
  plugins: [
    react()
  ]

});