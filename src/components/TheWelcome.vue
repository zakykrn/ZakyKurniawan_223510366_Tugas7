<template>
  <WelcomeItem>
    <div style="display: flex;">
      <img src="@/assets/saya.jpg" alt="Foto Profil" style="width: 100px; height: 100px; border-radius: 50%; margin-right: 20px;">
      <div style="flex-grow: 1;">
        <h2>Biodata</h2>
        <table>
          <tr>
            <td>Nama:</td>
            <td>Zaky Kurniawan</td>
          </tr>
          <tr>
            <td>Tanggal Lahir:</td>
            <td>12 Mei 2004</td>
          </tr>
          <tr>
            <td>Status:</td>
            <td>Mahasiswa</td>
          </tr>
          <tr>
            <td>Jurusan:</td>
            <td>Teknik Informatika</td>
          </tr>
        </table>
        <br />
        <hr>
        SAYA ADALAH MAHASISWA TEKNIK INFORMATIKA UNIVERSITAS ISLAM RIAU,SAAT INI SAYA BERADA DISEMESTER 4

        <br />

        Untuk informasi lebih lanjut tentang saya, silakan kunjungi profil saya di
        <a href="https://www.instagram.com/_zakykrnwan/" target="_blank" rel="noopener">Instagram</a>.
      </div>
    </div>
  </WelcomeItem>
</template>

<script setup>
import WelcomeItem from './WelcomeItem.vue'
</script>
