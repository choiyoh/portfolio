<template>
  <section id="experience" class="section">
    <div class="glow-blur glow-violet"></div>
    <div class="container">
      <h2 class="section-title">지금까지 해온 일</h2>
      <p class="section-subtitle">서비스를 만들고 운영하면서 맡았던 역할과 남긴 변화를 중심으로 정리했습니다.</p>

      <div class="timeline">
        <div v-for="experience in experiences" :key="experience.company" class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-date">{{ experience.period }}</div>
          <div class="glass-card timeline-card">
            <div class="card-header">
              <div class="company-logo">
                <span class="logo-placeholder">{{ experience.logo }}</span>
              </div>
              <div class="company-info">
                <h3 class="company-name">{{ experience.company }}</h3>
                <span class="role-badge">{{ experience.role }}</span>
              </div>
            </div>

            <p class="company-focus">{{ experience.focus }}</p>

            <div class="contribution-list">
              <p v-for="item in experience.contributions" :key="item" class="contribution-item">
                {{ item }}
              </p>
            </div>

            <div class="tech-stack-badges">
              <span v-for="tag in experience.tags" :key="tag" class="badge">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { experiences } from '../data/profile';
</script>

<style scoped>
.timeline {
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  padding: 1rem 0;
}

.timeline::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 15px;
  width: 2px;
  background: var(--surface-line);
}

.timeline-item {
  position: relative;
  margin-bottom: 3rem;
  padding-left: 50px;
}

.timeline-dot {
  position: absolute;
  left: 6px;
  top: 25px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--bg-primary);
  border: 4px solid var(--color-sky);
  box-shadow: 0 0 10px var(--color-sky);
  z-index: 2;
  transition: var(--transition-smooth);
}

.timeline-item:hover .timeline-dot {
  border-color: var(--color-violet);
  box-shadow: 0 0 12px var(--color-violet);
}

.timeline-date {
  font-family: 'Outfit', sans-serif;
  font-weight: 700;
  color: var(--color-sky);
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
}

.timeline-card {
  padding: 1.75rem;
}

.card-header {
  display: flex;
  gap: 1.25rem;
  align-items: center;
  margin-bottom: 1rem;
}

.company-logo {
  width: 3.25rem;
  height: 3.25rem;
  border-radius: 8px;
  background: var(--accent-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 8px 18px rgba(165, 82, 61, 0.16);
}

.logo-placeholder {
  color: white;
  font-family: 'Outfit', sans-serif;
  font-weight: 800;
  font-size: 1.05rem;
  letter-spacing: 0;
}

.company-info {
  display: flex;
  flex-direction: column;
}

.company-name {
  font-size: 1.3rem;
  font-weight: 800;
  color: var(--text-primary);
}

.role-badge {
  font-size: 0.85rem;
  color: var(--text-secondary);
  font-weight: 500;
  margin-top: 0.2rem;
}

.company-focus {
  color: var(--text-primary);
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.contribution-list {
  display: grid;
  gap: 0.65rem;
  margin-bottom: 1.5rem;
}

.contribution-item {
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.55;
  position: relative;
  padding-left: 1rem;
}

.contribution-item::before {
  content: '';
  position: absolute;
  top: 0.65rem;
  left: 0;
  width: 0.35rem;
  height: 0.35rem;
  border-radius: 50%;
  background: var(--color-sky);
}

.tech-stack-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

@media (min-width: 768px) {
  .timeline::before {
    left: 50%;
    transform: translateX(-50%);
  }
  
  .timeline-item {
    width: 50%;
    padding-left: 0;
    margin-bottom: 4rem;
  }
  
  .timeline-item:nth-child(odd) {
    left: 0;
    padding-right: 3rem;
    text-align: right;
  }
  
  .timeline-item:nth-child(odd) .card-header {
    flex-direction: row-reverse;
  }
  
  .timeline-item:nth-child(odd) .tech-stack-badges {
    justify-content: flex-end;
  }

  .timeline-item:nth-child(odd) .contribution-item {
    padding-left: 0;
    padding-right: 1rem;
  }

  .timeline-item:nth-child(odd) .contribution-item::before {
    left: auto;
    right: 0;
  }
  
  .timeline-item:nth-child(even) {
    left: 50%;
    padding-left: 3rem;
  }
  
  .timeline-dot {
    left: 50%;
    transform: translateX(-50%);
    top: 0;
  }
}
</style>
