<template>
  <section id="contact" class="section">
    <div class="glow-blur glow-sky"></div>
    <div class="container">
      <h2 class="section-title">연락처</h2>
      <p class="section-subtitle">더 자세한 이력은 PDF로 확인하실 수 있고, 연락은 이메일로 편하게 주시면 됩니다.</p>

      <div class="contact-layout">
        <div class="glass-card info-card">
          <h3 class="info-card-title text-accent">학력과 자격</h3>
          
          <div class="info-section">
            <h4 class="info-sec-title">학력</h4>
            <div class="info-item">
              <span class="info-duration">2007.03 ~ 2015.02</span>
              <span class="info-main">한동대학교 졸업</span>
              <span class="info-sub">전산전자공학부 학사</span>
            </div>
          </div>

          <div class="info-section">
            <h4 class="info-sec-title">자격</h4>
            <div class="cert-grid">
              <div class="cert-item">
                <span class="cert-name">정보처리기사</span>
                <span class="cert-date">2016.07 / 한국산업인력공단</span>
              </div>
              <div class="cert-item">
                <span class="cert-name">워드프로세서 1급</span>
                <span class="cert-date">대한상공회의소</span>
              </div>
            </div>
          </div>
        </div>

        <div class="glass-card contact-card">
          <h3 class="info-card-title text-accent">연락</h3>
          <p class="contact-pitch">
            금융/데이터 플랫폼, 제품형 프론트엔드 개발, 레거시 전환 경험이 필요한 팀과 잘 맞습니다.
          </p>

          <div class="contact-methods">
            <a :href="contact.emailHref" class="method-item">
              <div class="method-icon">✉</div>
              <div class="method-details">
                <span class="method-label">이메일</span>
                <span class="method-value">{{ contact.email }}</span>
              </div>
            </a>

            <div class="method-item">
              <div class="method-icon">⌂</div>
              <div class="method-details">
                <span class="method-label">위치</span>
                <span class="method-value">{{ contact.location }}</span>
              </div>
            </div>
          </div>

          <div class="social-links">
            <a :href="contact.github" target="_blank" rel="noreferrer" class="social-btn">
              <span>GitHub</span>
            </a>
            <a :href="contact.resumeHref" download class="social-btn social-btn-outline">
              <span>이력서 PDF</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { contact } from '../data/profile';
</script>

<style scoped>
.contact-layout {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  max-width: 1000px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .contact-layout {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

.info-card, .contact-card {
  padding: 2.25rem;
  display: flex;
  flex-direction: column;
}

.info-card-title {
  font-size: 1.45rem;
  font-weight: 800;
  margin-bottom: 2rem;
  font-family: 'Outfit', sans-serif;
}

.info-section {
  margin-bottom: 2rem;
}

.info-section:last-child {
  margin-bottom: 0;
}

.info-sec-title {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--color-sky);
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
  grid-template-columns: 1fr;
  gap: 1rem;
}

.cert-item {
  display: flex;
  flex-direction: column;
  background: var(--surface-subtle);
  border: 1px solid var(--surface-line);
  padding: 0.85rem 1.25rem;
  border-radius: 8px;
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
  background: rgba(31, 111, 104, 0.1);
  border: 1px solid rgba(31, 111, 104, 0.2);
  color: var(--color-sky);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
}

.method-details {
  display: flex;
  flex-direction: column;
}

.method-label {
  font-size: 0.75rem;
  color: var(--text-muted);
  font-weight: 600;
  font-family: 'Outfit', sans-serif;
}

.method-value {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
}

.social-links {
  margin-top: auto;
  display: grid;
  gap: 0.85rem;
}

.social-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 1.5rem;
  width: 100%;
  background: var(--accent-primary);
  color: white;
  font-weight: 600;
  font-family: 'Outfit', sans-serif;
  border-radius: 999px;
  box-shadow: 0 10px 24px rgba(31, 111, 104, 0.18);
}

.social-btn:hover {
  transform: translateY(-2px);
  background: var(--accent-secondary);
  box-shadow: 0 14px 28px rgba(165, 82, 61, 0.2);
}

.social-btn-outline {
  background: transparent;
  border: 1px solid var(--glass-border-hover);
  color: var(--text-primary);
  box-shadow: none;
}

.social-btn-outline:hover {
  background: rgba(31, 111, 104, 0.08);
  box-shadow: none;
}
</style>
