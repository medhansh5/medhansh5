// Mobile menu toggle
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuToggle && mobileMenu) {
  mobileMenuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');
    const icon = mobileMenuToggle.querySelector('.material-symbols-outlined');
    if (icon) {
      icon.textContent = mobileMenu.classList.contains('show') ? 'close' : 'menu';
    }
  });

  // Close mobile menu when clicking on a link
  const mobileLinks = mobileMenu.querySelectorAll('a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('show');
      const icon = mobileMenuToggle.querySelector('.material-symbols-outlined');
      if (icon) {
        icon.textContent = 'menu';
      }
    });
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Audio player for Ash Velde section - Native JavaScript Audio object
const audioToggle = document.getElementById('audio-toggle');
const audioIcon = document.getElementById('audio-icon');
const audioText = document.getElementById('audio-text');

// Instantiate single native Audio object pointing to exact file path
const audio = new Audio('audio/ash-velde-session.mp3');
let isPlaying = false;

// Handle audio end event
audio.addEventListener('ended', () => {
  isPlaying = false;
  updateAudioUI();
});

if (audioToggle) {
  audioToggle.addEventListener('click', () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    isPlaying = !isPlaying;
    updateAudioUI();
  });
}

function updateAudioUI() {
  if (audioIcon && audioText) {
    audioIcon.textContent = isPlaying ? 'pause_circle' : 'play_circle';
    audioText.textContent = isPlaying ? 'Pause Session' : 'Listen to Latest Session';
  }
}

// Mouse tracking for FusionNet gradient effect
const fusionNetSection = document.getElementById('fusion-net');
const fusionNetGradient = document.getElementById('fusion-net-gradient');

if (fusionNetSection && fusionNetGradient) {
  fusionNetSection.addEventListener('mousemove', (e) => {
    const rect = fusionNetSection.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    fusionNetGradient.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(45, 90, 39, 0.3) 0%, transparent 50%)`;
  });
}

// Sidebar collapse toggle
const sidebarCollapseBtn = document.querySelector('aside button');
if (sidebarCollapseBtn) {
  sidebarCollapseBtn.addEventListener('click', () => {
    const sidebar = document.querySelector('aside');
    if (sidebar) {
      sidebar.classList.toggle('manual-expand');
    }
  });
}
