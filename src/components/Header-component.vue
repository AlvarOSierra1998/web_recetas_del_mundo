<!-- src/components/Header.vue -->
<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="header">
    <div class="header-container">
      <!-- Logo a la izquierda -->
      <div class="logo">
        <RouterLink to="/">
          <span class="logo-text">Recetas del Mundo</span>
        </RouterLink>
      </div>

      <!-- Navegación centrada -->
      <nav class="nav">
        <RouterLink to="/" class="nav-link" active-class="active">Inicio</RouterLink>
        <RouterLink to="/recetas" class="nav-link" active-class="active">Recetas</RouterLink>
        <RouterLink to="/categorias" class="nav-link" active-class="active">Categorías</RouterLink>
        <RouterLink to="/about" class="nav-link" active-class="active">Sobre mí</RouterLink>
      </nav>

      <!-- Botones de autenticación a la derecha -->
      <div class="auth">
        <RouterLink to="/login" class="btn-login">Iniciar sesión</RouterLink>
        <RouterLink to="/registro" class="btn-registro">Registrarse</RouterLink>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px; /* Altura fija para consistencia */
}

.logo a {
  text-decoration: none;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  letter-spacing: -0.5px;
}

.nav {
  display: flex;
  gap: 2.5rem;
}

.nav-link {
  text-decoration: none;
  color: #555;
  font-weight: 500;
  font-size: 1rem;
  transition: color 0.2s ease;
  position: relative;
}

.nav-link:hover {
  color: #000;
}

.nav-link.active {
  color: #000;
  font-weight: 600;
}

/* Efecto sutíl de subrayado en hover (opcional, como Mindvalley) */
.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #000;
  transition: width 0.2s ease;
}

.nav-link:hover::after {
  width: 100%;
}

.auth {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.btn-login {
  text-decoration: none;
  color: #555;
  font-weight: 500;
  font-size: 1rem;
  transition: color 0.2s ease;
}

.btn-login:hover {
  color: #000;
}

.btn-registro {
  text-decoration: none;
  background-color: #000;
  color: white;
  font-weight: 500;
  font-size: 1rem;
  padding: 0.5rem 1.2rem;
  border-radius: 30px;
  transition: background-color 0.2s ease;
}

.btn-registro:hover {
  background-color: #333;
}

/* Responsive para móviles */
@media (max-width: 768px) {
  .header-container {
    flex-direction: column;
    height: auto;
    padding: 1rem;
  }

  .nav {
    margin: 1rem 0;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem;
  }

  .auth {
    width: 100%;
    justify-content: center;
  }
}
</style>