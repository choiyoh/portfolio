<template>
  <section id="contact" class="section">
    <div class="glow-blur glow-sky"></div>
    <div class="container">
      <h2 class="section-title">Get in Touch</h2>
      <p class="section-subtitle">새로운 도전과 혁신을 함께할 준비가 되어 있습니다. 편하게 연락해 주세요.</p>

      <div class="contact-layout">
        <!-- 학력 & 자격증 정보 (왼쪽) -->
        <div class="glass-card info-card">
          <h3 class="info-card-title text-gradient">Qualifications</h3>
          
          <div class="info-section">
            <h4 class="info-sec-title">Education</h4>
            <div class="info-item">
              <span class="info-duration">2007.03 ~ 2015.02</span>
              <span class="info-main">한동대학교 (4년제) 졸업</span>
              <span class="info-sub">전산전자공학부 학사 학위 취득</span>
            </div>
          </div>

          <div class="info-section">
            <h4 class="info-sec-title">Certifications</h4>
            <div class="cert-grid">
              <div class="cert-item">
                <span class="cert-name">정보처리기사</span>
                <span class="cert-date">2016.07 (한국산업인력공단)</span>
              </div>
              <div class="cert-item">
                <span class="cert-name">워드프로세서 1급</span>
                <span class="cert-date">2003.07 (대한상공회의소)</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 연락처 & 소셜 링크 (오른쪽) -->
        <div class="glass-card contact-card">
          <h3 class="info-card-title text-gradient">Contact Detail</h3>
          <p class="contact-pitch">
            10년의 여정 동안 쌓아 올린 탄탄한 기본기와 실시간 상태 관리, 최신 AI 기반 생산성 노하우를 바탕으로 서비스의 가치를 한 단계 더 끌어올리겠습니다.
          </p>

          <div class="contact-methods">
            <div class="method-item">
              <div class="method-icon">✉</div>
              <div class="method-details">
                <span class="method-label">Email</span>
                <span class="method-value">cho****@naver.com</span>
              </div>
            </div>

            <div class="method-item">
              <div class="method-icon">☎</div>
              <div class="method-details">
                <span class="method-label">Phone</span>
                <span class="method-value">010-****-3777</span>
              </div>
            </div>

            <div class="method-item">
              <div class="method-icon">⚲</div>
              <div class="method-details">
                <span class="method-label">Location</span>
                <span class="method-value">충남 아산시 배방읍 광장로</span>
              </div>
            </div>
          </div>

          <div class="social-links">
            <a href="https://github.com" target="_blank" class="social-btn">
              <span>GitHub Profile</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.contact-layout {
  display: grid;
  grid-template-cols: repeat(2, 1fr);
  gap: 3rem;
  max-width: 1000px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .contact-layout {
    grid-template-cols: 1fr;
    gap: 2rem;
  }
}

.info-card, .contact-card {
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
}

.info-card-title {
  font-size: 1.6rem;
  font-weight: 800;
  margin-bottom: 2rem;
  font-family: 'Outfit', sans-serif;
  text-transform: uppercase;
}

.info-section {
  margin-bottom: 2rem;
}

.info-section:last-child {
  margin-bottom: 0;
}

.info-sec-title {
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-sky);
  text-transform: uppercase;
  margin-bottom: 1rem;
  font-family: 'Outfit', sans-serif;
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.info-duration {
  font-size: 0.8rem;
  color: var(--text-muted);
  font-weight: 600;
  font-family: 'Outfit', sans-serif;
}

.info-main {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text-primary);
}

.info-sub {
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.cert-grid {
  display: grid;
  grid-template-cols: 1fr;
  gap: 1rem;
}

.cert-item {
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.03);
  padding: 0.85rem 1.25rem;
  border-radius: 12px;
}

.cert-name {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--text-primary);
}

.cert-date {
  font-size: 0.8rem;
  color: var(--text-muted);
  margin-top: 0.2rem;
}

.contact-pitch {
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}

.method-item {
  display: flex;
  gap: 1.25rem;
  align-items: center;
}

.method-icon {
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 50%;
  background: rgba(14, 165, 233, 0.1);
  border: 1px solid rgba(14, 165, 233, 0.2);
  color: var(--color-sky);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
}

.method-details {
  display: flex;
  flex-direction: column;
}

.method-label {
  font-size: 0.75rem;
  color: var(--text-muted);
  font-weight: 600;
  text-transform: uppercase;
  font-family: 'Outfit', sans-serif;
}

.method-value {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
}

.social-links {
  margin-top: auto;
}

.social-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 1.5rem;
  width: 100%;
  background: var(--gradient-primary);
  color: white;
  font-weight: 600;
  font-family: 'Outfit', sans-serif;
  border-radius: 50px;
  box-shadow: 0 4px 15px rgba(139, 92, 246, 0.2);
}

.social-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(139, 92, 246, 0.4);
}
</style>
