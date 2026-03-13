<template>
  <div class="inicio">
    <section class="hero">
      <div class="container hero-content">
        <h1 class="hero-title">Descubre los sabores del mundo</h1>
        <p class="hero-subtitle">Recetas auténticas llenas de tradición.</p>
        <RouterLink to="/recetas" class="hero-btn">Explorar recetas</RouterLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero {
  width: 100%;
  background-image: url('/hero-bg.jpg');
  background-size: cover;
  background-position: center;
  position: relative;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 6rem 2rem;
  color: white;
}

.hero-title {
  font-size: 3.5rem;
  margin-bottom: 1rem;
}

.hero-subtitle {
  font-size: 1.25rem;
  margin-bottom: 2rem;
}

.hero-btn {
  display: inline-block;
  background: #e67e22;
  color: white;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
}

.hero-btn:hover {
  background: #d35400;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  .hero-subtitle {
    font-size: 1rem;
  }
  .hero-content {
    padding: 4rem 1rem;
  }
}
</style>