<template>
  <header class="hero-section">
    <div class="glow-blur glow-sky"></div>
    <div class="glow-blur glow-violet"></div>
    
    <div class="container hero-container animate-fade-in">
      <div class="hero-content">
        <div class="hero-tag">
          <span class="tag-line"></span>
          <span class="tag-text">{{ hero.eyebrow }}</span>
        </div>
        <h1 class="hero-title">
          {{ titleLines[0] }}<br>
          <span class="text-accent">{{ titleLines[1] }}</span>
        </h1>
        <p class="hero-description">
          {{ hero.description }}
        </p>
        
        <div class="hero-actions">
          <a href="#projects" class="btn btn-primary">프로젝트 보기</a>
          <a href="#contact" class="btn btn-outline">연락하기</a>
        </div>
      </div>
      
      <div class="hero-stats">
        <div v-for="stat in hero.stats" :key="stat.label" class="glass-card stat-card">
          <div class="stat-num" :class="stat.colorClass">{{ stat.value }}</div>
          <div class="stat-label">{{ stat.label }}</div>
          <p class="stat-desc">{{ stat.description }}</p>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { hero } from '../data/profile';

const titleLines = computed(() => hero.title.split('\n'));
</script>

<style scoped>
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 7rem;
  padding-bottom: 4rem;
  overflow: hidden;
}

.hero-container {
  display: grid;
  grid-template-cols: 1.2fr 0.8fr;
  gap: 4rem;
  align-items: center;
  z-index: 1;
}

.hero-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.hero-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.tag-line {
  width: 2rem;
  height: 2px;
  background: var(--color-sky);
}

.tag-text {
  font-family: 'Outfit', sans-serif;
  color: var(--color-sky);
  font-weight: 700;
  text-transform: uppercase;
  font-size: 0.85rem;
  letter-spacing: 0.15em;
}

.hero-title {
  font-size: 4rem;
  font-weight: 900;
  line-height: 1.15;
  margin-bottom: 2rem;
}

.hero-description {
  font-size: 1.15rem;
  color: var(--text-secondary);
  line-height: 1.7;
  max-width: 620px;
  margin-bottom: 2.5rem;
}

.hero-actions {
  display: flex;
  gap: 1rem;
}

.hero-stats {
  display: grid;
  grid-template-cols: repeat(2, 1fr);
  gap: 1.5rem;
}

.stat-card {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.stat-card:hover {
  transform: translateY(-4px);
}

.stat-num {
  font-family: 'Outfit', sans-serif;
  font-size: 2.25rem;
  font-weight: 900;
  margin-bottom: 0.25rem;
}

.stat-label {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.25rem;
}

.stat-desc {
  font-size: 0.75rem;
  color: var(--text-muted);
}

@media (max-width: 1024px) {
  .hero-container {
    grid-template-cols: 1fr;
    gap: 3rem;
  }
  
  .hero-title {
    font-size: 3rem;
  }
  
  .hero-stats {
    max-width: 600px;
    width: 100%;
  }
}

@media (max-width: 576px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-stats {
    grid-template-cols: 1fr;
  }
  
  .hero-actions {
    width: 100%;
    flex-direction: column;
  }
  
  .btn {
    width: 100%;
  }
}
</style>
