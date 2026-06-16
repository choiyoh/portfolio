<template>
  <header class="hero-section">
    <div class="glow-blur glow-sky"></div>
    <div class="glow-blur glow-violet"></div>
    
    <div class="container hero-container animate-fade-in">
      <div class="hero-content">
        <div class="hero-tag">
          <span class="tag-line"></span>
          <span class="tag-text">Senior Frontend Architect</span>
        </div>
        <h1 class="hero-title">
          데이터의 흐름을<br>
          <span class="text-gradient">경험으로 설계합니다.</span>
        </h1>
        <p class="hero-description">
          10년 차 프론트엔드 엔지니어로서 <strong>Vue 3, TypeScript, Nuxt.js</strong> 생태계를 기반으로 확장 가능하고 견고한 웹 아키텍처를 주도해 왔습니다. C++/MFC 기반 공장 자동화 백오피스부터 고성능 B2B 핀테크 플랫폼, AI 주도 개발 파이프라인 혁신까지 비즈니스 가치와 엔지니어링 생산성을 동시에 극대화합니다.
        </p>
        
        <div class="hero-actions">
          <a href="#projects" class="btn btn-primary">프로젝트 보기</a>
          <a href="#contact" class="btn btn-outline">연락하기</a>
        </div>
      </div>
      
      <div class="hero-stats">
        <div class="glass-card stat-card">
          <div class="stat-num text-gradient">10Y+</div>
          <div class="stat-label">실무 개발 경력</div>
          <p class="stat-desc">Industrial C++ & Modern Web</p>
        </div>
        <div class="glass-card stat-card">
          <div class="stat-num text-accent-emerald">533%</div>
          <div class="stat-label">AI 생산성 혁신</div>
          <p class="stat-desc">Codex 기반 워크플로우 단축</p>
        </div>
        <div class="glass-card stat-card">
          <div class="stat-num text-accent-sky">-30%</div>
          <div class="stat-label">퍼널 이탈률 감소</div>
          <p class="stat-desc">UX 개선 및 인터랙션 최적화</p>
        </div>
        <div class="glass-card stat-card">
          <div class="stat-num text-accent-violet">200%</div>
          <div class="stat-label">유저 리텐션 향상</div>
          <p class="stat-desc">실시간 상태 관리 기반 기능 구현</p>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
// Logic if needed in the future
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

.hero-description strong {
  color: var(--text-primary);
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
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.stat-card:hover {
  transform: translateY(-8px);
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
