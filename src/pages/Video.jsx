// Mengimpor React
import React from "react";

// Mengimpor komponen Material UI
import {
  Card,
  CardContent,
  Typography
} from "@mui/material";

// Membuat komponen Video
export default function Video() {

  // Mengembalikan tampilan halaman Video
  return (

    <Card>

      <CardContent>

        {/* Judul halaman */}
        <Typography
          variant="h4"
          gutterBottom
        >
          Video Presentasi
        </Typography>

        {/* Penjelasan singkat */}
        <Typography
          sx={{ mb: 2 }}
        >
          Berikut adalah video presentasi CV Online saya.
        </Typography>

        {/* Menampilkan video YouTube */}
        <iframe
  width="100%"
  height="400"
  src="https://www.youtube.com/embed/eptr5jEa3l4"
  title="Video Presentasi"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen
></iframe>

      </CardContent>

    </Card>

  );

}