<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import HeroSection from './components/HeroSection.vue';
import ExperienceSection from './components/ExperienceSection.vue';
import ProjectSection from './components/ProjectSection.vue';
import SkillSection from './components/SkillSection.vue';
import ContactSection from './components/ContactSection.vue';

const isScrolled = ref(false);
const activeSection = ref('home');

const navItems = [
  { label: 'About', value: 'home' },
  { label: 'Experience', value: 'experience' },
  { label: 'Projects', value: 'projects' },
  { label: 'Skills', value: 'skills' },
  { label: 'Contact', value: 'contact' }
];

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
  
  // Active Section detection
  const sections = ['experience', 'projects', 'skills', 'contact'];
  let currentActive = 'home';
  
  for (const sectionId of sections) {
    const el = document.getElementById(sectionId);
    if (el) {
      const rect = el.getBoundingClientRect();
      if (rect.top <= 120 && rect.bottom >= 120) {
        currentActive = sectionId;
        break;
      }
    }
  }
  activeSection.value = currentActive;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div class="app-wrapper">
    <!-- Navigation Bar -->
    <nav :class="['nav-bar', { 'nav-scrolled': isScrolled }]">
      <div class="container nav-container">
        <a href="#" class="nav-logo">
          CHOI YOHAN
        </a>
        
        <div class="nav-links">
          <a 
            v-for="item in navItems" 
            :key="item.value"
            :href="item.value === 'home' ? '#' : `#${item.value}`"
            :class="['nav-link', { active: activeSection === item.value }]"
          >
            {{ item.label }}
          </a>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main>
      <HeroSection />
      <ExperienceSection />
      <ProjectSection />
      <SkillSection />
      <ContactSection />
    </main>

    <!-- Footer -->
    <footer class="footer">
      <div class="container footer-container">
        <p class="footer-logo">Senior Frontend Architect</p>
        <p class="footer-copy">© 2026 Choi Yohan. Powered by Vite, Vue 3 & TypeScript.</p>
      </div>
    </footer>
  </div>
</template>

<style>
.app-wrapper {
  position: relative;
  width: 100%;
}

/* Navigation */
.nav-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  z-index: 100;
  transition: var(--transition-smooth);
  border-bottom: 1px solid transparent;
}

.nav-scrolled {
  background: var(--glass-bg);
  backdrop-filter: var(--glass-blur);
  -webkit-backdrop-filter: var(--glass-blur);
  height: 4.5rem;
  border-bottom-color: var(--glass-border);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.nav-logo {
  font-family: 'Outfit', sans-serif;
  font-weight: 900;
  font-size: 1.4rem;
  letter-spacing: -0.05em;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-link {
  font-family: 'Outfit', sans-serif;
  font-weight: 700;
  font-size: 0.85rem;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  position: relative;
  padding: 0.5rem 0;
}

.nav-link:hover, .nav-link.active {
  color: var(--color-sky);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: var(--gradient-primary);
  transition: var(--transition-smooth);
  transform: translateX(-50%);
}

.nav-link:hover::after, .nav-link.active::after {
  width: 100%;
}

@media (max-width: 768px) {
  .nav-links {
    gap: 1rem;
  }
  
  .nav-link {
    font-size: 0.75rem;
  }
}

@media (max-width: 480px) {
  .nav-links {
    display: none; /* simple hidden for mobile context, or could be hamburger */
  }
}

/* Footer */
.footer {
  background: var(--bg-primary);
  padding: 3rem 0;
  border-top: 1px solid var(--glass-border);
  position: relative;
  z-index: 1;
}

.footer-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;
}

.footer-logo {
  font-family: 'Outfit', sans-serif;
  font-weight: 800;
  font-size: 1.1rem;
  color: var(--text-primary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.footer-copy {
  font-size: 0.8rem;
  color: var(--text-muted);
}
</style>
