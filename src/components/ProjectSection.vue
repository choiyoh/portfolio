<template>
  <section id="projects" class="section">
    <div class="glow-blur glow-sky"></div>
    <div class="container">
      <h2 class="section-title">Key Projects</h2>
      <p class="section-subtitle">주요 비즈니스 과제를 고성능 아키텍처와 혁신적 기술 도입으로 해결한 성과들입니다.</p>

      <!-- 필터 카테고리 -->
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

      <!-- 프로젝트 그리드 -->
      <div class="projects-grid">
        <div 
          v-for="project in filteredProjects" 
          :key="project.id" 
          class="glass-card project-card"
          :class="{ 'expanded': expandedProjectId === project.id }"
        >
          <!-- 카드 상단 정보 -->
          <div class="project-header">
            <span class="project-company">{{ project.company }}</span>
            <span class="project-period">{{ project.period }}</span>
          </div>

          <h3 class="project-title">{{ project.title }}</h3>
          <p class="project-summary">{{ project.summary }}</p>

          <!-- 핵심 성과 수치 (인포그래픽) -->
          <div class="metrics-row" v-if="project.metrics && project.metrics.length > 0">
            <div 
              v-for="(metric, mIdx) in project.metrics" 
              :key="mIdx" 
              class="metric-box"
            >
              <span class="metric-value" :class="metric.colorClass">{{ metric.value }}</span>
              <span class="metric-label">{{ metric.label }}</span>
            </div>
          </div>

          <!-- 태그 목록 -->
          <div class="project-tags">
            <span 
              v-for="tag in project.tags" 
              :key="tag" 
              class="badge"
            >
              {{ tag }}
            </span>
          </div>

          <!-- 상세 설명 (토글) -->
          <div class="project-details" v-if="expandedProjectId === project.id">
            <div class="detail-section">
              <h4>담당 역할 & 기여</h4>
              <p>{{ project.role }}</p>
            </div>
            
            <div class="detail-section">
              <h4>상세 성과 및 아키텍처 핵심</h4>
              <ul>
                <li v-for="(detail, dIdx) in project.details" :key="dIdx">
                  {{ detail }}
                </li>
              </ul>
            </div>
            
            <div class="detail-section" v-if="project.link">
              <a :href="project.link" target="_blank" class="project-link-btn">
                서비스 링크 보기 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </a>
            </div>
          </div>

          <!-- 토글 버튼 -->
          <button class="expand-btn" @click="toggleExpand(project.id)">
            {{ expandedProjectId === project.id ? '상세 정보 접기' : '상세 성과 및 기술 보기' }}
            <span class="arrow-icon" :class="{ 'rotated': expandedProjectId === project.id }">↓</span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

interface Metric {
  label: string;
  value: string;
  colorClass: string;
}

interface Project {
  id: number;
  category: string;
  company: string;
  period: string;
  title: string;
  summary: string;
  role: string;
  tags: string[];
  metrics: Metric[];
  details: string[];
  link?: string;
}

const activeCategory = ref('all');
const expandedProjectId = ref<number | null>(null);

const categories = [
  { label: '전체 보기', value: 'all' },
  { label: 'Vue.js / Nuxt.js', value: 'vue' },
  { label: '하이브리드 & 크로스플랫폼', value: 'hybrid' },
  { label: '기타 솔루션', value: 'etc' }
];

const projects = ref<Project[]>([
  {
    id: 1,
    category: 'vue',
    company: '주식회사 헥토데이터',
    period: '2025.12 ~ 2026.05 (6개월)',
    title: '셀러 성장 지원 서비스 (셀링부스터) 개발',
    summary: 'Vite & Nuxt.js 기반의 프론트엔드 환경에서 AI 에이전트를 개발 프로세스에 도입하여 폭발적인 생산성 혁신을 달성하고 품질을 안정적으로 관리한 대표 사례입니다.',
    role: '프론트엔드 개발 책임 (퍼블리셔 협업 및 백엔드 API 연동 주도)',
    tags: ['Nuxt.js', 'AI Codex', 'RESTful API', 'Productivity'],
    metrics: [
      { label: '생산성 향상', value: '533% ↑', colorClass: 'text-accent-emerald' },
      { label: '개발기간 단축', value: '83% ↓', colorClass: 'text-accent-sky' }
    ],
    details: [
      'AI 코딩 에이전트(Codex) 전면 도입 및 파이프라인 구축: 기존 수작업 시 약 4M/M(4개월)이 예상되던 방대한 화면 개발을 AI 에이전트 워크플로우 설계를 통해 단 3주 만에 완성',
      '단순 일회성 구현을 지양하고, 시스템 아키텍처 구조와 컴포넌트 설계 방향성을 명확히 정의한 상태에서 프롬프트 엔지니어링 수행',
      'RESTful API 기반 백엔드 팀과의 기민한 조율을 통해 데이터 응답 규격을 사전 정의하여 화면 렌더링 지연 및 통신 복잡도 최소화'
    ],
    link: 'https://sellingbooster.io'
  },
  {
    id: 2,
    category: 'vue',
    company: '주식회사 헥토데이터',
    period: '2025.02 ~ 2025.08 (7개월)',
    title: '인플루언서 성장 플랫폼 (라운드클럽) 개발',
    summary: '초기 시장 진입을 목표로 오가닉 트래픽을 극대화하기 위해 SSR(서버 사이드 렌더링)을 도입하고, 사용자 리텐션 유도를 위한 정교한 전역 상태 관리를 구현했습니다.',
    role: '프론트엔드 개발 팀장 (오가닉 트래픽 유입 및 리텐션 개선 주도)',
    tags: ['Nuxt.js', 'Pinia', 'SSR', 'SEO', 'State Management'],
    metrics: [
      { label: '사용자 리텐션', value: '200% ↑', colorClass: 'text-accent-violet' },
      { label: '구글 검색 랭킹', value: '1위 달성', colorClass: 'text-accent-emerald' }
    ],
    details: [
      'Nuxt.js 기반 SSR(서버 사이드 렌더링) 도입을 통해 SEO 성능을 극대화하여 마케팅 비용 투입 없이 초기 오가닉 트래픽 유입 확보',
      'Pinia 상태 관리 라이브러리를 활용하여 인플루언서와 팬 간 실시간 피드백, 챌린지 참여, 보상 시스템 등 복잡한 실시간 인터랙션 전역 상태를 단일 소스(Single Source of Truth)로 안정적 제어',
      '사용자 유입 및 이탈 단계 로깅 파이프라인 연계로 데이터 기반 UX 개선 지원'
    ]
  },
  {
    id: 3,
    category: 'vue',
    company: '주식회사 헥토데이터',
    period: '2023.12 ~ 2024.06 (7개월)',
    title: '자동차 보험 비교추천 서비스 개발',
    summary: '여러 보험사로부터 실시간 수신되는 비동기식 대용량 금융 데이터를 통합하고, 복잡한 사용자 입력 퍼널의 사용자 경험(UX)을 획기적으로 개선했습니다.',
    role: '리드 프론트엔드 개발자',
    tags: ['Vue.js 3.x', 'Pinia', 'Asynchronous API', 'Step-by-Step Funnel'],
    metrics: [
      { label: '퍼널 이탈률', value: '30% ↓', colorClass: 'text-accent-sky' },
      { label: '제휴 요구 대응력', value: '모듈화 완료', colorClass: 'text-accent-violet' }
    ],
    details: [
      '다중 API 비동기 데이터 정합성 보장: 서로 다른 구조를 지닌 보험사 API의 비동기 응답 데이터를 Pinia 스토어 레이어에서 동적으로 파싱 및 정규화하여 끊김 없고 신뢰성 있는 견적 화면 제공',
      '복잡한 차 정보 및 개인정보 입력 단계를 인터랙티브 폼(Step-by-Step Funnel) 구조로 개편하여 사용자 피로도를 줄이고 최종 이탈률 30% 감소 유도',
      'B2B 제휴사(삼쩜삼, IBK 등) 요구사항에 대응할 수 있도록 UI와 핵심 로직을 분리한 모듈식 아키텍처 설계'
    ]
  },
  {
    id: 4,
    category: 'hybrid',
    company: '주식회사 헥토데이터',
    period: '2023.08 ~ 2023.11 (4개월)',
    title: '그룹사 모바일 앱 웹뷰 페이지 리뉴얼',
    summary: '노후화된 Angular 레거시 시스템을 Vue.js 3 최신 아키텍처로 무중단 마이그레이션하고 모바일 웹뷰 특화 성능 최적화 및 네이티브 앱 연동 브릿지를 설계했습니다.',
    role: '메인 프론트엔드 개발자 (아키텍처 설계 및 최적화)',
    tags: ['Vue.js 3', 'Pinia', 'WebView Bridge', 'Migration', 'Performance'],
    metrics: [
      { label: '개발 공수 단축', value: '30% ↓', colorClass: 'text-accent-violet' },
      { label: '시스템 전환', value: '무중단 성공', colorClass: 'text-accent-emerald' }
    ],
    details: [
      'Angular 레거시 코드베이스의 의존성을 분석하여 주요 기능별로 점진적으로 마이그레이션하는 전략을 수립, 안정적인 무중단 이관 완료',
      'WebView 초기 로딩 속도 개선을 위해 Code Splitting 및 Lazy Loading 기법을 적극 활용하여 모바일 기기 내 화면 로딩 지연 극복',
      'WebView-Native Bridge 인터페이스를 직접 설계하여 푸시 알림, 간편 로그인 등 네이티브 기기 고유 기능과의 매끄러운 연동 환경 제공',
      '키패드가 입력 영역을 가리던 모바일 하이브리드 앱의 고질적 UI 버그를 네이티브 브릿지 기반 높이 감지 제어로 완벽히 해결'
    ]
  },
  {
    id: 5,
    category: 'hybrid',
    company: '주식회사 스탠드포인트',
    period: '2022.06 ~ 2022.09 (3개월)',
    title: '청소년 문화센터 좌석관리 키오스크 프로그램 및 어드민',
    summary: 'Electron 데스크톱 런타임 환경에서 Vue.js 및 Quasar를 활용하여 무인 키오스크 클라이언트 애플리케이션 및 실시간 어드민 대시보드를 구축했습니다.',
    role: '프론트엔드 개발 팀장 (키오스크 클라이언트 및 관리 페이지 개발 주도)',
    tags: ['Quasar', 'Vue 3', 'Pinia', 'Electron', 'Kiosk'],
    metrics: [
      { label: '플랫폼 지원', value: 'Cross-platform', colorClass: 'text-accent-sky' },
      { label: '실시간 제어', value: '동기화 완료', colorClass: 'text-accent-violet' }
    ],
    details: [
      'Electron 프레임워크를 기반으로 임베디드 기기 환경(키오스크)에서 오프라인 복구력과 데스크톱 하드웨어 자원을 효율적으로 사용하는 프론트엔드 구조 설계',
      'Quasar 컴포넌트 프레임워크를 도입하여 정밀한 대시보드 그리드와 다양한 반응형 상태 컴포넌트를 고속 구현',
      '키오스크 하드웨어 상태(프린터 용지 잔량, 장비 유휴 등)와 관리자 어드민 페이지 간 실시간 데이터 동기화 파이프라인 관리'
    ]
  },
  {
    id: 6,
    category: 'etc',
    company: '주식회사 스탠드포인트',
    period: '2021.09 ~ 2022.04 (7개월)',
    title: '스트라토 PaaS 및 SPTek CMP 클라우드 서비스 포털 퍼블리싱',
    summary: '원자 단위로 조립하는 Atomic Design 방법론을 실무에 적용하여, 클라우드 서비스 관리 포털의 거대한 공통 컴포넌트 구조를 설계하고 퍼블리싱 생산성을 극대화했습니다.',
    role: '퍼블리싱 리드 및 아키텍처 보조',
    tags: ['Vue 2', 'Vuetify', 'Vuex', 'Atomic Design', 'Publishing'],
    metrics: [
      { label: '재사용률', value: '최대화', colorClass: 'text-accent-emerald' },
      { label: '컴포넌트 수', value: '100+ 구축', colorClass: 'text-accent-sky' }
    ],
    details: [
      'Atomic Design 패턴을 실제 대형 클라우드 포털 프로젝트의 퍼블리싱에 적용하여 UI 컴포넌트를 Atom, Molecule, Organism 단위로 구조화',
      '공통 스타일 및 복잡한 레이아웃 요소를 패키지화하여 신규 요구사항 페이지 구축 시의 퍼블리싱 대응 공수를 비약적으로 단축',
      'Vuetify 기반의 UI 커스터마이징을 용이하게 할 수 있는 디자인 토큰 매핑 시스템 마련'
    ]
  }
]);

const filteredProjects = computed(() => {
  if (activeCategory.value === 'all') return projects.value;
  return projects.value.filter(p => p.category === activeCategory.value);
});

const toggleExpand = (id: number) => {
  if (expandedProjectId.value === id) {
    expandedProjectId.value = null;
  } else {
    expandedProjectId.value = id;
  }
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
  border-radius: 50px;
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
  grid-template-cols: repeat(2, 1fr);
  gap: 2rem;
}

@media (max-width: 992px) {
  .projects-grid {
    grid-template-cols: 1fr;
  }
}

.project-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2.25rem;
  align-items: flex-start;
  height: 100%;
}

.project-header {
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 0.8rem;
  color: var(--text-muted);
  margin-bottom: 0.75rem;
  font-family: 'Outfit', sans-serif;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.project-title {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: 1rem;
  line-height: 1.3;
}

.project-summary {
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex-grow: 1;
}

/* Metrics Row */
.metrics-row {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  width: 100%;
}

.metric-box {
  flex: 1;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.03);
  padding: 0.75rem 1rem;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.metric-value {
  font-family: 'Outfit', sans-serif;
  font-size: 1.4rem;
  font-weight: 900;
}

.metric-label {
  font-size: 0.75rem;
  color: var(--text-muted);
  font-weight: 600;
  margin-top: 0.15rem;
}

/* Tags */
.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

/* Details Section */
.project-details {
  width: 100%;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
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

.detail-section h4 {
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--color-sky);
  margin-bottom: 0.5rem;
  font-family: 'Outfit', sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

.detail-section p {
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.5;
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
  content: '▹';
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

/* Expand Button */
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
