<!-- src/components/Header.vue -->
<script setup lang="ts">
import { RouterLink } from 'vue-router'

</script>

<template>
  <header class="header">
    <div class="logo">
      <RouterLink to="/">
        <img src="/logo.svg" alt="Recetas del Mundo" class="logo-img">
        <span class="logo-text">Recetas del Mundo</span>
      </RouterLink>
    </div>

    <nav class="nav">
      <RouterLink to="/" class="nav-link" active-class="active">Inicio</RouterLink>
      <RouterLink to="/recetas" class="nav-link" active-class="active">Recetas</RouterLink>
      <RouterLink to="/categorias" class="nav-link" active-class="active">Categorías</RouterLink>
      <RouterLink to="/about" class="nav-link" active-class="active">Sobre mí</RouterLink>
    </nav>

    <div class="auth">
      <RouterLink to="/login" class="btn-login">Iniciar sesión</RouterLink>
      <RouterLink to="/registro" class="btn-registro">Registrarse</RouterLink>
      <!-- Más adelante aquí mostrarás el nombre del usuario y botón de logout -->
    </div>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #4d2323;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.logo a {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #333;
  font-weight: bold;
  gap: 0.5rem;
}

.logo-img {
  height: 40px;
  width: auto;
}

.logo-text {
  font-size: 1.5rem;
  color: #e67e22; /* Color naranja cocina */
}

.nav {
  display: flex;
  gap: 2rem;
}

.nav-link {
  text-decoration: none;
  color: #555;
  font-weight: 500;
  transition: color 0.3s;
}

.nav-link:hover {
  color: #e67e22;
}

.nav-link.active {
  color: #e67e22;
  border-bottom: 2px solid #e67e22;
}

.auth {
  display: flex;
  gap: 1rem;
}

.btn-login, .btn-registro {
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-weight: 500;
  transition: all 0.3s;
}

.btn-login {
  color: #e67e22;
  border: 1px solid #e67e22;
  background: transparent;
}

.btn-login:hover {
  background: #e67e22;
  color: white;
}

.btn-registro {
  background: #e67e22;
  color: white;
  border: 1px solid #e67e22;
}

.btn-registro:hover {
  background: #d35400;
  border-color: #d35400;
}

/* Responsive básico */
@media (max-width: 768px) {
  .header {
    flex-direction: column;
    padding: 1rem;
  }
  
  .nav {
    margin: 1rem 0;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .logo-text {
    font-size: 1.2rem;
  }
}
</style>