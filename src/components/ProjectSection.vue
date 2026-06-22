<template>
  <section id="projects" class="section">
    <div class="glow-blur glow-sky"></div>
    <div class="container">
      <h2 class="section-title">기억에 남는 프로젝트</h2>
      <p class="section-subtitle">업무에서 부딪힌 문제와 직접 운영해 본 서비스 경험을 함께 담았습니다.</p>

      <div class="filter-container">
        <button 
          v-for="cat in categories" 
          :key="cat.value" 
          :class="['filter-btn', { active: activeCategory === cat.value }]"
          @click="activeCategory = cat.value"
        >
          {{ cat.label }}
        </button>
      </div>

      <div class="projects-grid">
        <div 
          v-for="project in filteredProjects" 
          :key="project.id" 
          class="glass-card project-card"
          :class="{ expanded: expandedProjectId === project.id }"
        >
          <div class="project-header">
            <span class="project-company">{{ project.company }}</span>
            <span class="project-period">{{ project.period }}</span>
          </div>

          <h3 class="project-title">{{ project.title }}</h3>

          <div class="project-brief">
            <p>{{ project.problem }}</p>
            <p>맡은 역할은 {{ project.role }}입니다. {{ project.result }}</p>
          </div>

          <div class="metrics-row" v-if="project.metrics.length > 0">
            <div 
              v-for="metric in project.metrics" 
              :key="metric.label" 
              class="metric-box"
            >
              <span class="metric-value" :class="metric.colorClass">{{ metric.value }}</span>
              <span class="metric-label">{{ metric.label }}</span>
            </div>
          </div>

          <div class="project-tags">
            <span 
              v-for="tag in project.tags" 
              :key="tag" 
              class="badge"
            >
              {{ tag }}
            </span>
          </div>

          <div class="project-details" v-if="expandedProjectId === project.id">
            <div class="detail-section">
              <ul>
                <li v-for="detail in project.details" :key="detail">
                  {{ detail }}
                </li>
              </ul>
            </div>
            
            <div class="detail-section" v-if="project.link">
              <a :href="project.link" target="_blank" rel="noreferrer" class="project-link-btn">
                서비스 링크 보기
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </a>
            </div>
          </div>

          <button class="expand-btn" @click="toggleExpand(project.id)">
            {{ expandedProjectId === project.id ? '상세 정보 접기' : '상세 성과 및 기술 보기' }}
            <span class="arrow-icon" :class="{ rotated: expandedProjectId === project.id }">↓</span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { projects } from '../data/profile';

const activeCategory = ref('all');
const expandedProjectId = ref<number | null>(null);

const categories = [
  { label: '전체 보기', value: 'all' },
  { label: 'Vue.js / Nuxt.js', value: 'vue' },
  { label: '금융 / 데이터', value: 'finance' },
  { label: '하이브리드 / 데스크톱', value: 'hybrid' },
  { label: '개인 / 운영', value: 'personal' }
];

const filteredProjects = computed(() => {
  if (activeCategory.value === 'all') return projects;
  return projects.filter(project => project.category === activeCategory.value);
});

const toggleExpand = (id: number) => {
  expandedProjectId.value = expandedProjectId.value === id ? null : id;
};
</script>

<style scoped>
.filter-container {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.filter-btn {
  background: var(--bg-tertiary);
  border: 1px solid var(--glass-border);
  color: var(--text-secondary);
  padding: 0.6rem 1.25rem;
  border-radius: 999px;
  font-family: 'Outfit', sans-serif;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition-smooth);
}

.filter-btn:hover, .filter-btn.active {
  background: var(--color-sky-glow);
  border-color: var(--color-sky);
  color: var(--color-sky);
  transform: translateY(-2px);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

@media (max-width: 992px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}

.project-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
  align-items: flex-start;
  height: 100%;
}

.project-header {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  font-size: 0.78rem;
  color: var(--text-muted);
  margin-bottom: 0.75rem;
  font-family: 'Outfit', sans-serif;
  font-weight: 600;
  letter-spacing: 0;
  text-transform: uppercase;
}

.project-title {
  font-size: 1.42rem;
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: 1rem;
  line-height: 1.35;
}

.project-brief {
  display: grid;
  gap: 0.65rem;
  margin-bottom: 1.5rem;
  flex-grow: 1;
}

.project-brief p {
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.55;
}

.metrics-row {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  width: 100%;
}

.metric-box {
  flex: 1;
  background: var(--surface-subtle);
  border: 1px solid var(--surface-line);
  padding: 0.75rem 1rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.metric-value {
  font-family: 'Outfit', sans-serif;
  font-size: 1.35rem;
  font-weight: 900;
}

.metric-label {
  font-size: 0.75rem;
  color: var(--text-muted);
  font-weight: 600;
  margin-top: 0.15rem;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.project-details {
  width: 100%;
  border-top: 1px solid var(--surface-line);
  padding-top: 1.5rem;
  margin-bottom: 1.5rem;
  animation: fadeInUp 0.4s ease-out;
}

.detail-section {
  margin-bottom: 1.25rem;
}

.detail-section:last-child {
  margin-bottom: 0;
}

.detail-section ul {
  list-style: none;
}

.detail-section li {
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 0.5rem;
  position: relative;
  padding-left: 1.25rem;
}

.detail-section li::before {
  content: '>';
  position: absolute;
  left: 0;
  color: var(--color-violet);
  font-weight: bold;
}

.project-link-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-sky);
  font-size: 0.85rem;
  font-weight: 700;
  text-decoration: underline;
}

.project-link-btn:hover {
  color: var(--color-violet);
}

.expand-btn {
  background: transparent;
  border: none;
  color: var(--text-secondary);
  font-family: 'Outfit', sans-serif;
  font-weight: 700;
  font-size: 0.85rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: auto;
  align-self: center;
  transition: var(--transition-smooth);
}

.expand-btn:hover {
  color: var(--color-sky);
}

.arrow-icon {
  display: inline-block;
  font-weight: bold;
  transition: var(--transition-smooth);
}

.arrow-icon.rotated {
  transform: rotate(180deg);
  color: var(--color-sky);
}
</style>
