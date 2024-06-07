<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="main-header">
      <div class="nama" >Zaky Kurniawan</div>
      <nav>
        <RouterLink to="/">Profile</RouterLink>
        <RouterLink to="/about">TodoList</RouterLink>
      </nav>
  </header>

  <RouterView />
</template>

<style scoped>

.main-header {
  background-color: #2300eb; 
  color: white;
  padding: 20px;
  display: flex;
  align-items: center;
}

.nama {
  margin-right: auto; 
}

nav {
  font-size: 14px;
  display: flex;
}

nav a {
  color: white;
  text-decoration: none;
  padding: 10px;
}

nav a.router-link-exact-active {
  font-weight: bold;
}

nav a:not(:last-child) {
  margin-right: 10px; /* Memberikan jarak antara link */
}

@media (max-width: 768px) {
  .main-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .nama {
    margin-right: 0;
    margin-bottom: 10px; /* Memberikan jarak antara logo dan navigasi pada tampilan mobile */
  }

  nav {
    flex-direction: column;
  }
}
</style>
