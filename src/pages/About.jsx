// Mengimpor React
import React from "react";

// Mengimpor komponen Material UI
import {
  Card,
  CardContent,
  Typography,
  Divider
} from "@mui/material";

// Membuat komponen About
export default function About() {

  // Mengembalikan tampilan halaman About
  return (

    <Card>

      <CardContent>

        {/* Judul halaman */}
        <Typography variant="h4" gutterBottom>
          Tentang Saya
        </Typography>

        {/* Garis pembatas */}
        <Divider sx={{ mb: 2 }} />

        {/* Nama */}
        <Typography>
          <b>Nama :</b> Ibnu Haris
        </Typography>

        {/* Tempat dan tanggal lahir */}
        <Typography>
          <b>Tempat, Tanggal Lahir :</b> Cirebon, 18 Desember 2002
        </Typography>

        {/* Alamat */}
        <Typography>
          <b>Alamat :</b> Gumulung Lebak, Kabupaten Cirebon, Jawa Barat
        </Typography>

        {/* Email */}
        <Typography>
          <b>Email :</b> ibnuharis277@gmail.com
        </Typography>

        {/* Nomor HP */}
        <Typography>
          <b>No. HP :</b> 083154982519
        </Typography>

        {/* Pendidikan */}
        <Typography sx={{ mt: 2 }}>
          <b>Pendidikan :</b>
        </Typography>

        <Typography>
          • SMK
        </Typography>

        <Typography>
          • Sedang berkuliah di Universitas Insan Cita Indonesia
        </Typography>

        {/* Skill */}
        <Typography sx={{ mt: 2 }}>
          <b>Skill :</b>
        </Typography>

        <Typography>
          • HTML
        </Typography>

        <Typography>
          • CSS
        </Typography>

        {/* Hobi */}
        <Typography sx={{ mt: 2 }}>
          <b>Hobi :</b>
        </Typography>

        <Typography>
          • Berolahraga
        </Typography>

        {/* Tentang diri */}
        <Typography sx={{ mt: 2 }}>
          <b>Tentang Saya :</b>
        </Typography>

        <Typography>
          Saya adalah orang yang suka berolahraga dan sedang mempelajari
          pengembangan website menggunakan React.
        </Typography>

      </CardContent>

    </Card>

  );

}