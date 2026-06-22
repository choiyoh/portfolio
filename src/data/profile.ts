export interface Metric {
  label: string;
  value: string;
  colorClass: string;
}

export interface Experience {
  company: string;
  period: string;
  role: string;
  focus: string;
  contributions: string[];
  tags: string[];
  logo: string;
}

export interface Project {
  id: number;
  category: string;
  company: string;
  period: string;
  title: string;
  problem: string;
  role: string;
  result: string;
  tags: string[];
  metrics: Metric[];
  details: string[];
  link?: string;
}

export interface SkillGroup {
  title: string;
  level: string;
  skills: string[];
}

export const hero = {
  eyebrow: '서비스 경험을 설계하는 프론트엔드 개발자',
  title: '복잡한 데이터 흐름을\n명확한 사용자 경험으로 만듭니다.',
  description:
    '10년 차 프론트엔드 개발자로 Vue 3, Nuxt.js, TypeScript 기반의 금융/데이터 플랫폼과 하이브리드 웹뷰를 설계해 왔습니다. 레거시 마이그레이션, 다중 API 상태 관리, AI 기반 개발 워크플로우 개선까지 제품 속도와 안정성을 함께 끌어올립니다.',
  stats: [
    { value: '10Y+', label: '실무 개발 경력', description: '산업 시스템부터 웹 플랫폼까지', colorClass: 'text-accent' },
    { value: '533%', label: '개발 생산성 향상', description: 'AI 에이전트 기반 화면 개발', colorClass: 'text-accent-emerald' },
    { value: '-30%', label: '퍼널 이탈률 감소', description: '보험 비교추천 입력 UX 개선', colorClass: 'text-accent-sky' },
    { value: '200%', label: '리텐션 지표 개선', description: '참여형 플랫폼 상태 관리', colorClass: 'text-accent-violet' }
  ]
};

export const experiences: Experience[] = [
  {
    company: '주식회사 헥토데이터',
    period: '2022.10 ~ 재직중',
    role: '프론트엔드 개발 책임',
    focus: '금융 마이데이터, 데이터 플랫폼, Vue/Nuxt 기반 서비스 개발',
    logo: 'HD',
    contributions: [
      'Vue 3, Nuxt.js, Pinia 기반의 B2B/B2C 서비스 프론트엔드 구조 설계와 주요 화면 개발을 주도했습니다.',
      '레거시 Angular 웹뷰를 Vue 3 기반으로 점진 전환하고, 모바일 웹뷰 성능과 네이티브 브릿지 연동 품질을 개선했습니다.',
      'AI 코딩 에이전트를 개발 프로세스에 도입해 반복 화면 구현 시간을 줄이고, 백엔드 응답 규격 조율로 렌더링 지연을 낮췄습니다.'
    ],
    tags: ['Vue 3', 'Nuxt.js', 'TypeScript', 'Pinia', 'WebView Bridge', 'AI Workflow']
  },
  {
    company: '주식회사 스탠드포인트',
    period: '2021.08 ~ 2022.10',
    role: 'FE 개발팀 과장 / 팀장',
    focus: '클라우드 포털, 키오스크, 하이브리드 앱 프론트엔드 개발',
    logo: 'SP',
    contributions: [
      'Quasar, Vuetify, Electron, Cordova 기반의 웹/데스크톱/모바일 UI 개발을 리드했습니다.',
      'Atomic Design 방식으로 공통 컴포넌트 구조를 정리해 대형 포털 퍼블리싱 생산성과 일관성을 높였습니다.',
      '키오스크 클라이언트와 관리자 페이지 간 실시간 상태 흐름을 설계하고 운영 화면을 안정화했습니다.'
    ],
    tags: ['Quasar', 'Vuetify', 'Electron', 'Cordova', 'Vuex', 'Pinia']
  },
  {
    company: '주식회사 큐리오스테크',
    period: '2020.09 ~ 2021.08',
    role: 'IT 개발팀 대리',
    focus: '마케팅 분석 대시보드와 데이터 시각화',
    logo: 'CT',
    contributions: [
      '자동 문자 발송 시스템과 타겟 마케팅 분석 화면을 개발하며 고객 행동 데이터를 시각화했습니다.',
      '광고/마케팅 데이터 분석 흐름과 Google Analytics, GTM 연동 경험을 쌓았습니다.'
    ],
    tags: ['JavaScript', 'Dashboard', 'Data Visualization', 'Marketing API', 'GTM']
  },
  {
    company: 'David & Golyat',
    period: '2018.11 ~ 2020.09',
    role: 'Senior Developer',
    focus: '글로벌 웹 서비스 리뉴얼, 성능 최적화, SEO',
    logo: 'DG',
    contributions: [
      '해외 에듀테크 및 비즈니스 웹 서비스의 프론트엔드 리뉴얼과 운영 개선을 수행했습니다.',
      '웹 표준, 렌더링 성능, SEO, 추적 스크립트 관리를 함께 다루며 글로벌 서비스 운영 감각을 확장했습니다.'
    ],
    tags: ['HTML5', 'Vanilla JS', 'Web Performance', 'SEO', 'GTM']
  },
  {
    company: '초기 경력',
    period: '2014.12 ~ 2018.09',
    role: 'C++ 개발자 / 글로벌 고객 소통',
    focus: '산업 자동화 시스템 개발과 비즈니스 커뮤니케이션 기반 형성',
    logo: 'FE',
    contributions: [
      '동운시스템에서 현대제철 고로 생산관리 및 실적 산정 자동화 시스템을 C++/MFC로 개발, 유지보수했습니다.',
      'KLM 항공사 고객 상담 업무를 통해 비즈니스 영어와 사용자 요구를 구조화하는 커뮤니케이션 역량을 길렀습니다.'
    ],
    tags: ['C++', 'MFC', 'Industrial Automation', 'Business English']
  }
];

export const projects: Project[] = [
  {
    id: 1,
    category: 'vue',
    company: '주식회사 헥토데이터',
    period: '2025.12 ~ 2026.05',
    title: '셀러 성장 지원 서비스 개발',
    problem: '짧은 일정 안에 다수의 화면과 API 연동을 안정적으로 완성해야 했습니다.',
    role: '프론트엔드 개발 책임',
    result: 'AI 에이전트 기반 워크플로우로 예상 4M/M 수준의 구현 범위를 약 3주 안에 완성했습니다.',
    tags: ['Nuxt.js', 'Vite', 'AI Codex', 'REST API'],
    metrics: [
      { label: '생산성', value: '533% ↑', colorClass: 'text-accent-emerald' },
      { label: '개발기간', value: '83% ↓', colorClass: 'text-accent-sky' }
    ],
    details: [
      '화면 구조와 컴포넌트 기준을 먼저 정의한 뒤 AI 에이전트가 반복 구현을 맡도록 워크플로우를 설계했습니다.',
      '백엔드와 응답 규격을 사전에 조율해 화면 렌더링 지연과 통신 복잡도를 줄였습니다.',
      '퍼블리셔 협업 산출물을 서비스 화면으로 빠르게 전환하며 UI 일관성을 관리했습니다.'
    ],
    link: 'https://sellingbooster.io'
  },
  {
    id: 2,
    category: 'vue',
    company: '주식회사 헥토데이터',
    period: '2025.02 ~ 2025.08',
    title: '인플루언서 성장 플랫폼 개발',
    problem: '초기 서비스가 검색 유입과 참여 지표를 동시에 확보해야 했습니다.',
    role: '프론트엔드 개발 팀장',
    result: 'SSR 기반 검색 노출과 참여형 상태 관리로 리텐션 지표 개선을 지원했습니다.',
    tags: ['Nuxt.js', 'Pinia', 'SSR', 'SEO'],
    metrics: [
      { label: '리텐션', value: '200% ↑', colorClass: 'text-accent-violet' },
      { label: '검색 노출', value: '1위', colorClass: 'text-accent-emerald' }
    ],
    details: [
      'Nuxt SSR을 적용해 마케팅 비용 없이도 오가닉 검색 유입을 확보할 수 있는 기반을 만들었습니다.',
      'Pinia로 챌린지, 피드백, 보상 흐름을 단일 상태 관리 구조 안에서 안정적으로 다뤘습니다.',
      '유입과 이탈 지점 로깅을 연계해 제품 개선 의사결정에 필요한 데이터를 남겼습니다.'
    ]
  },
  {
    id: 3,
    category: 'finance',
    company: '주식회사 헥토데이터',
    period: '2023.12 ~ 2024.06',
    title: '자동차 보험 비교추천 서비스 개발',
    problem: '여러 보험사의 비동기 응답과 복잡한 입력 절차가 사용자 이탈을 만들었습니다.',
    role: '리드 프론트엔드 개발자',
    result: '입력 퍼널을 단계형 UX로 개편하고 API 응답 정합성을 관리해 이탈률을 낮췄습니다.',
    tags: ['Vue 3', 'Pinia', 'Async API', 'Funnel UX'],
    metrics: [
      { label: '퍼널 이탈률', value: '30% ↓', colorClass: 'text-accent-sky' },
      { label: '제휴 대응', value: '모듈화', colorClass: 'text-accent-violet' }
    ],
    details: [
      '보험사별 응답 구조를 Pinia 레이어에서 정규화해 견적 화면의 데이터 흐름을 안정화했습니다.',
      '차량/개인정보 입력 단계를 사용자가 따라가기 쉬운 단계형 퍼널로 재구성했습니다.',
      '제휴사별 요구사항에 대응할 수 있도록 UI와 핵심 로직을 분리했습니다.'
    ]
  },
  {
    id: 4,
    category: 'hybrid',
    company: '주식회사 헥토데이터',
    period: '2023.08 ~ 2023.11',
    title: '모바일 앱 웹뷰 페이지 리뉴얼',
    problem: 'Angular 기반 레거시 웹뷰를 서비스 중단 없이 현대화해야 했습니다.',
    role: '메인 프론트엔드 개발자',
    result: 'Vue 3 기반으로 점진 마이그레이션하고 모바일 웹뷰 특화 UX 문제를 해결했습니다.',
    tags: ['Vue 3', 'Migration', 'WebView Bridge', 'Performance'],
    metrics: [
      { label: '공수', value: '30% ↓', colorClass: 'text-accent-violet' },
      { label: '전환', value: '무중단', colorClass: 'text-accent-emerald' }
    ],
    details: [
      '기능 단위로 레거시 의존성을 분리해 점진 전환 전략을 세우고 실행했습니다.',
      '코드 스플리팅과 지연 로딩을 적용해 모바일 웹뷰 초기 로딩 부담을 줄였습니다.',
      '네이티브 브릿지로 키패드, 푸시, 간편 로그인 등 앱 연동 이슈를 안정적으로 처리했습니다.'
    ]
  },
  {
    id: 5,
    category: 'finance',
    company: '주식회사 헥토데이터',
    period: '프로젝트성 수행',
    title: '금융 마이데이터 보안/인증 흐름 개선',
    problem: '민감한 금융 데이터 화면에서 인증 흐름과 사용자 안내가 명확해야 했습니다.',
    role: '프론트엔드 개발자',
    result: '보안 요구사항을 지키면서 사용자가 이탈하지 않는 인증/동의 흐름을 구성했습니다.',
    tags: ['Vue 3', 'MyData', 'Security UX', 'API Integration'],
    metrics: [
      { label: '도메인', value: '금융', colorClass: 'text-accent-sky' },
      { label: '초점', value: '신뢰 UX', colorClass: 'text-accent-emerald' }
    ],
    details: [
      '인증, 동의, 에러 상태를 화면 흐름 안에서 분리해 예외 상황을 추적하기 쉽게 만들었습니다.',
      '민감 정보 노출을 줄이면서도 사용자가 다음 행동을 이해할 수 있는 안내 구조를 적용했습니다.',
      '백엔드 응답 상태와 화면 상태를 명확히 매핑해 운영 중 장애 대응성을 높였습니다.'
    ]
  },
  {
    id: 6,
    category: 'hybrid',
    company: '주식회사 스탠드포인트',
    period: '2022.06 ~ 2022.09',
    title: '청소년 문화센터 좌석관리 키오스크 및 어드민',
    problem: '현장 키오스크와 관리자 화면의 상태가 실시간으로 맞아야 했습니다.',
    role: '프론트엔드 개발 팀장',
    result: 'Electron 기반 키오스크와 어드민 화면을 구축해 현장 운영 흐름을 안정화했습니다.',
    tags: ['Quasar', 'Vue 3', 'Pinia', 'Electron'],
    metrics: [
      { label: '플랫폼', value: 'Desktop', colorClass: 'text-accent-sky' },
      { label: '운영', value: '실시간', colorClass: 'text-accent-violet' }
    ],
    details: [
      '키오스크 클라이언트와 관리자 대시보드의 상태 동기화 흐름을 설계했습니다.',
      '현장 장비 상태와 사용자 예약 흐름을 분리해 장애 상황을 빠르게 파악할 수 있게 했습니다.',
      'Quasar 컴포넌트 기반으로 운영자가 반복 사용하는 화면을 빠르게 구성했습니다.'
    ]
  },
  {
    id: 7,
    category: 'personal',
    company: 'Personal Project',
    period: '취미 운영',
    title: 'AS 로마 팬커뮤니티 개발 및 운영',
    problem: '축구 팬들이 소식과 의견을 나누는 커뮤니티에서 콘텐츠 탐색, 게시판 사용성, 운영 편의성을 함께 챙겨야 했습니다.',
    role: '개발 및 운영',
    result: 'www.laromacorea.com을 직접 개발하고 운영하며 약 400명의 회원이 실제로 활동하는 팬 커뮤니티로 성장시켰습니다.',
    tags: ['Fan Community', '400+ Members', 'Website Operation', 'Content UX'],
    metrics: [
      { label: '활동 회원', value: '400명+', colorClass: 'text-accent-emerald' },
      { label: '범위', value: 'End-to-end', colorClass: 'text-accent-sky' }
    ],
    details: [
      '약 400명의 회원이 실제로 활동하는 AS 로마 팬 커뮤니티를 직접 개발하고 운영했습니다.',
      '회원들이 경기, 선수, 구단 소식을 빠르게 찾고 의견을 나눌 수 있도록 콘텐츠 구조와 탐색 흐름을 개선했습니다.',
      '취미 프로젝트를 실제 운영 서비스로 유지하며 사용자 피드백, 운영 이슈, 지속 개선 사이클을 경험했습니다.'
    ],
    link: 'https://www.laromacorea.com'
  }
];

export const skillGroups: SkillGroup[] = [
  { title: '화면 개발', level: '주력', skills: ['Vue 3', 'Nuxt.js', 'React', 'Next.js', 'TypeScript', 'Composition API', 'Vite'] },
  { title: '상태 관리와 구조', level: '주력', skills: ['Pinia', 'Vuex', 'SSR', 'API State Normalization', 'Modular UI'] },
  { title: '앱과 웹뷰 환경', level: '실무 활용', skills: ['WebView Bridge', 'Electron', 'Quasar', 'Cordova', 'Mobile WebView UX'] },
  { title: 'AI와 개발 흐름', level: '실무 활용', skills: ['Codex', 'Prompting', 'Workflow Design', 'Code Review', 'Delivery Acceleration'] },
  { title: '이전 기반 기술', level: '이전 경력', skills: ['C++', 'MFC', 'Industrial Automation', 'Legacy Migration', 'Business English'] }
];

export const contact = {
  email: 'choeyoh@naver.com',
  emailHref: 'mailto:choeyoh@naver.com',
  github: 'https://github.com',
  location: 'Korea',
  resumeHref: '/resume.pdf'
};
