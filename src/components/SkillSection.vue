<template>
  <section id="skills" class="section">
    <div class="glow-blur glow-violet"></div>
    <div class="container">
      <h2 class="section-title">자주 쓰는 기술</h2>
      <p class="section-subtitle">최근 프로젝트에서 자주 다뤘거나, 문제를 풀 때 자신 있게 꺼내 쓰는 도구들입니다.</p>

      <div class="skills-layout">
        <div class="skills-highlight">
          <h3 class="highlight-title">일할 때 강점이 되는 부분</h3>
          
          <div class="glass-card highlight-card">
            <div class="card-icon text-accent-sky">01</div>
            <div class="card-info">
              <h4>제품형 프론트엔드 개발</h4>
              <p>SSR, 상태 관리, API 정규화, 컴포넌트 구조화를 통해 검색 유입과 서비스 안정성을 함께 챙깁니다.</p>
            </div>
          </div>

          <div class="glass-card highlight-card">
            <div class="card-icon text-accent-emerald">02</div>
            <div class="card-info">
              <h4>AI 기반 개발 워크플로우</h4>
              <p>반복 구현을 AI 에이전트로 가속하되, 설계 기준과 리뷰 흐름은 사람이 통제하는 방식으로 품질을 관리합니다.</p>
            </div>
          </div>

          <div class="glass-card highlight-card">
            <div class="card-icon text-accent-violet">03</div>
            <div class="card-info">
              <h4>하이브리드/레거시 전환</h4>
              <p>모바일 웹뷰, Electron, 레거시 마이그레이션처럼 제약이 많은 환경에서 운영 가능한 구조를 만듭니다.</p>
            </div>
          </div>
        </div>

        <div class="skills-groups">
          <div v-for="group in skillGroups" :key="group.title" class="glass-card skill-group-card">
            <div class="group-heading">
              <h4 class="group-title text-accent">{{ group.title }}</h4>
              <span class="group-level">{{ group.level }}</span>
            </div>
            <div class="skill-chip-list">
              <span v-for="skill in group.skills" :key="skill" class="badge">{{ skill }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { skillGroups } from '../data/profile';
</script>

<style scoped>
.skills-layout {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 3rem;
}

@media (max-width: 1024px) {
  .skills-layout {
    grid-template-columns: 1fr;
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
  font-family: 'Outfit', sans-serif;
  font-size: 0.9rem;
  font-weight: 900;
  line-height: 1;
  letter-spacing: 0;
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
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.5rem;
}

@media (max-width: 576px) {
  .skills-groups {
    grid-template-columns: 1fr;
  }
}

.skill-group-card {
  padding: 1.75rem;
  height: 100%;
}

.group-heading {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: flex-start;
  margin-bottom: 1.25rem;
}

.group-title {
  font-size: 1.18rem;
  font-weight: 800;
  letter-spacing: 0;
}

.group-level {
  flex-shrink: 0;
  padding: 0.25rem 0.6rem;
  border-radius: 999px;
  border: 1px solid var(--glass-border);
  color: var(--text-secondary);
  font-size: 0.72rem;
  font-weight: 700;
}

.skill-chip-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
}
</style>
