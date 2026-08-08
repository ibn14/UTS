// Mengimpor React beserta hook useState dan useEffect
import React, { useState, useEffect } from "react";

// Mengimpor axios untuk mengambil data dari API
import axios from "axios";

// Mengimpor komponen Material UI
import {
  Card,
  CardContent,
  Typography,
  Button
} from "@mui/material";

// Membuat komponen Home
export default function Home() {

  // State untuk menyimpan quote dari API
  const [quote, setQuote] = useState("");

  // useEffect dijalankan saat halaman pertama kali dibuka
  useEffect(() => {

    // Fungsi mengambil data dari API
    const getQuote = async () => {

      try {

        // Mengambil data dari DummyJSON Quotes API
        const response = await axios.get(
          "https://dummyjson.com/quotes/random"
        );

        // Menyimpan isi quote ke state
        setQuote(response.data.quote);

      } catch (error) {

        // Menampilkan pesan jika terjadi error
        setQuote("Gagal mengambil data dari API.");

      }

    };

    // Memanggil fungsi API
    getQuote();

  }, []);

  // Mengembalikan tampilan halaman
  return (

    <Card>

      <CardContent>

        {/* Nama */}
        <Typography variant="h4">
          Ibnu Haris
        </Typography>

        {/* Status */}
        <Typography variant="h6">
          Mahasiswa Universitas Insan Cita Indonesia
        </Typography>

        {/* Tentang saya */}
        <Typography sx={{ mt: 2 }}>
          Saya adalah orang yang suka berolahraga dan sedang mempelajari
          pengembangan website menggunakan React.
        </Typography>

        {/* Menampilkan quote dari API */}
        <Typography sx={{ mt: 3 }}>
          <b>Quote Hari Ini:</b>
        </Typography>

        <Typography>
          {quote}
        </Typography>

        {/* Tombol menuju halaman About */}
        <Button
          href="/about"
          variant="contained"
          sx={{ mt: 3 }}
        >
          Lihat CV
        </Button>

      </CardContent>

    </Card>

  );

  <img
  src="/profile.jpg"
  alt="Foto Ibnu Haris"
  width="180"
  style={{
    borderRadius: "50%",
    marginBottom: "20px"
  }}
/>

}