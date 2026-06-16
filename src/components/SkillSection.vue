<template>
  <section id="skills" class="section">
    <div class="glow-blur glow-violet"></div>
    <div class="container">
      <h2 class="section-title">Core Competencies</h2>
      <p class="section-subtitle">프론트엔드 전문성을 축으로 비즈니스와 개발 환경을 혁신하는 핵심 기술력입니다.</p>

      <div class="skills-layout">
        <!-- 핵심 기술 설명 (왼쪽) -->
        <div class="skills-highlight">
          <h3 class="highlight-title">Focus Areas</h3>
          
          <div class="glass-card highlight-card">
            <div class="card-icon text-accent-sky">✦</div>
            <div class="card-info">
              <h4>Vue/Nuxt 생태계 리더십</h4>
              <p>Composition API, Pinia 상태 관리, SSR(서버 사이드 렌더링)을 활용한 검색 최적화 및 다중 API 비동기 제어 구조 설계 전문가입니다.</p>
            </div>
          </div>

          <div class="glass-card highlight-card">
            <div class="card-icon text-accent-emerald">⚡</div>
            <div class="card-info">
              <h4>AI 주도 개발 (AI-Driven Development)</h4>
              <p>AI 에이전트를 개발 파이프라인에 주도적으로 도입하여 시스템 설계 원칙 아래 개발 생산성을 530% 이상 극대화한 실전 경험을 보유하고 있습니다.</p>
            </div>
          </div>

          <div class="glass-card highlight-card">
            <div class="card-icon text-accent-violet">❖</div>
            <div class="card-info">
              <h4>크로스플랫폼 및 하이브리드 UX</h4>
              <p>Electron, Quasar, Cordova를 비롯하여 WebView-Native Bridge를 직접 커스텀 설계하여 모바일과 데스크톱 한계를 극복해 왔습니다.</p>
            </div>
          </div>
        </div>

        <!-- 기술 스택 그룹별 그리드 (오른쪽) -->
        <div class="skills-groups">
          <div v-for="group in skillGroups" :key="group.title" class="glass-card skill-group-card">
            <h4 class="group-title text-gradient">{{ group.title }}</h4>
            <div class="skills-list">
              <div v-for="skill in group.skills" :key="skill.name" class="skill-item">
                <div class="skill-info">
                  <span class="skill-name">{{ skill.name }}</span>
                  <span class="skill-level">{{ skill.level }}</span>
                </div>
                <div class="progress-bar-bg">
                  <div class="progress-bar-fill" :style="{ width: skill.percent + '%', background: group.color }"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Skill {
  name: string;
  level: string;
  percent: number;
}

interface SkillGroup {
  title: string;
  color: string;
  skills: Skill[];
}

const skillGroups = ref<SkillGroup[]>([
  {
    title: 'Frameworks',
    color: 'var(--color-sky)',
    skills: [
      { name: 'Vue.js (Vue 3 & 2)', level: 'Expert', percent: 95 },
      { name: 'Nuxt.js', level: 'Expert', percent: 90 },
      { name: 'React.js / Next.js', level: 'Intermediate', percent: 75 }
    ]
  },
  {
    title: 'State & Tooling',
    color: 'var(--color-violet)',
    skills: [
      { name: 'Pinia / Vuex', level: 'Expert', percent: 95 },
      { name: 'Vite / Webpack', level: 'Advanced', percent: 85 },
      { name: 'Git & GitHub Actions', level: 'Advanced', percent: 85 }
    ]
  },
  {
    title: 'Hybrid / Desktop',
    color: 'var(--color-emerald)',
    skills: [
      { name: 'WebView-Native Bridge', level: 'Expert', percent: 90 },
      { name: 'Quasar / Cordova', level: 'Advanced', percent: 85 },
      { name: 'Electron', level: 'Advanced', percent: 80 }
    ]
  },
  {
    title: 'Methodology & Innovation',
    color: 'var(--color-amber)',
    skills: [
      { name: 'AI Coding (Codex) / Prompting', level: 'Expert', percent: 95 },
      { name: 'Atomic Design & Modularity', level: 'Advanced', percent: 85 },
      { name: 'C++ / MFC (Industrial System)', level: 'Prior Exp', percent: 70 }
    ]
  }
]);
</script>

<style scoped>
.skills-layout {
  display: grid;
  grid-template-cols: 0.9fr 1.1fr;
  gap: 3rem;
}

@media (max-width: 1024px) {
  .skills-layout {
    grid-template-cols: 1fr;
    gap: 2rem;
  }
}

.skills-highlight {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.highlight-title {
  font-size: 1.8rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
  font-family: 'Outfit', sans-serif;
}

.highlight-card {
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
  padding: 1.5rem;
}

.card-icon {
  font-size: 1.75rem;
  font-weight: 900;
  line-height: 1;
}

.card-info h4 {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.card-info p {
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.5;
}

.skills-groups {
  display: grid;
  grid-template-cols: repeat(2, 1fr);
  gap: 1.5rem;
}

@media (max-width: 576px) {
  .skills-groups {
    grid-template-cols: 1fr;
  }
}

.skill-group-card {
  padding: 1.75rem;
  height: 100%;
}

.group-title {
  font-size: 1.25rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.skills-list {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.skill-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.skill-info {
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
  font-weight: 600;
}

.skill-name {
  color: var(--text-primary);
}

.skill-level {
  color: var(--text-muted);
}

.progress-bar-bg {
  width: 100%;
  height: 6px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 3px;
  overflow: hidden;
}

.progress-bar-fill {
  height: 100%;
  border-radius: 3px;
  transition: width 1.5s cubic-bezier(0.16, 1, 0.3, 1);
}
</style>
