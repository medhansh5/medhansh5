// Mobile navigation interface terminal toggle
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

  const mobileLinks = mobileMenu.querySelectorAll('a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('show');
      const icon = mobileMenuToggle.querySelector('.material-symbols-outlined');
      if (icon) icon.textContent = 'menu';
    });
  });
}

// Rigid smooth scroll engine parameters
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

// Telemetry Frequency Spectrum Renderer (Waveform Builder)
const waveformContainer = document.getElementById('waveform');
const barCount = 48; // Scaled efficiently for dashboard metrics
const barsArray = [];

if (waveformContainer) {
  // Generate structured rigid data bars
  for (let i = 0; i < barCount; i++) {
    const bar = document.createElement('div');
    bar.className = 'wave-bar bg-primary';
    
    // Balanced color assignment mapping the Force split concept (Jedi Blue vs Sith Red)
    const ratio = i / barCount;
    if (ratio < 0.5) {
      bar.style.backgroundColor = '#98cbff';
      bar.style.boxShadow = '0 0 8px rgba(152, 203, 255, 0.2)';
    } else {
      bar.style.backgroundColor = '#e60000';
      bar.style.boxShadow = '0 0 8px rgba(230, 0, 0, 0.25)';
    }
    
    bar.style.height = '15%';
    waveformContainer.appendChild(bar);
    barsArray.push(bar);
  }
}

// Unified Telemetry Waveform Animator Matrix
let animationInterval = null;
function runWaveformTelemetry() {
  barsArray.forEach(bar => {
    const randomHeight = Math.floor(Math.random() * 75) + 12;
    bar.style.height = `${randomHeight}%`;
  });
}

// Native Media Operational Core Bridge
const audioToggle = document.getElementById('audio-toggle');
const audioIcon = document.getElementById('audio-icon');
const audioText = document.getElementById('audio-text');

const audio = new Audio('audio/ash-velde-session.mp3');
let isPlaying = false;

audio.addEventListener('ended', () => {
  isPlaying = false;
  toggleAnimationState(false);
  updateAudioUI();
});

if (audioToggle) {
  audioToggle.addEventListener('click', () => {
    if (isPlaying) {
      audio.pause();
      toggleAnimationState(false);
    } else {
      audio.play().catch(err => console.log("Stream init block error context handled: ", err));
      toggleAnimationState(true);
    }
    isPlaying = !isPlaying;
    updateAudioUI();
  });
}

function toggleAnimationState(active) {
  if (active) {
    if (!animationInterval) {
      animationInterval = setInterval(runWaveformTelemetry, 140);
    }
  } else {
    if (animationInterval) {
      clearInterval(animationInterval);
      animationInterval = null;
    }
    // Return to default baseline scanning signature configuration
    barsArray.forEach(bar => bar.style.height = '15%');
  }
}

function updateAudioUI() {
  if (audioIcon && audioText) {
    audioIcon.textContent = isPlaying ? 'pause_circle' : 'play_circle';
    audioText.textContent = isPlaying ? 'STATE: ACTIVE // FEEDING' : 'STATE: IDLE // READY';
  }
}
