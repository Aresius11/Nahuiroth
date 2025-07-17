// Animación de aparición para secciones
function initSectionAnimations() {
  const sections = document.querySelectorAll('section');
  sections.forEach(sec => sec.classList.add('fade-in'));
  const showSections = () => {
    sections.forEach(sec => {
      const rect = sec.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        sec.classList.add('visible');
      }
    });
  };
  showSections();
  window.addEventListener('scroll', showSections);
}

// Animación de menú activo
function initMenuActiveAnimation() {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(sec => {
      const secTop = sec.offsetTop - 120;
      if (window.scrollY >= secTop) {
        current = sec.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  });
}

// Animación de relámpagos en la sección de eventos
function resizeEventosCanvas() {
  const section = document.getElementById('eventos');
  const canvas = document.getElementById('eventos-canvas');
  if (section && canvas) {
    canvas.width = section.offsetWidth;
    canvas.height = section.offsetHeight;
  }
}

function drawLightning(ctx, w, h) {
  const startX = Math.random() * w;
  const startY = 0;
  let x = startX;
  let y = startY;
  ctx.save();
  ctx.strokeStyle = 'rgba(255,255,255,0.8)';
  ctx.lineWidth = 2 + Math.random() * 2;
  ctx.shadowColor = '#fff';
  ctx.shadowBlur = 12;
  ctx.beginPath();
  ctx.moveTo(x, y);
  for (let i = 0; i < 12; i++) {
    x += (Math.random() - 0.5) * 40;
    y += h / 12;
    ctx.lineTo(x, y);
  }
  ctx.stroke();
  ctx.restore();
}

function animateLightning() {
  const canvas = document.getElementById('eventos-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (Math.random() < 0.08) {
    drawLightning(ctx, canvas.width, canvas.height);
  }
  requestAnimationFrame(animateLightning);
}

// Animación de relámpagos en la sección de música
function resizeMusicaCanvas() {
  const section = document.getElementById('musica');
  const canvas = document.getElementById('musica-canvas');
  if (section && canvas) {
    canvas.width = section.offsetWidth;
    canvas.height = section.offsetHeight;
  }
}

function drawLightningMusica(ctx, w, h) {
  const startX = Math.random() * w;
  const startY = 0;
  let x = startX;
  let y = startY;
  ctx.save();
  ctx.strokeStyle = 'rgba(255,255,255,0.8)';
  ctx.lineWidth = 2 + Math.random() * 2;
  ctx.shadowColor = '#fff';
  ctx.shadowBlur = 12;
  ctx.beginPath();
  ctx.moveTo(x, y);
  for (let i = 0; i < 12; i++) {
    x += (Math.random() - 0.5) * 40;
    y += h / 12;
    ctx.lineTo(x, y);
  }
  ctx.stroke();
  ctx.restore();
}

function animateLightningMusica() {
  const canvas = document.getElementById('musica-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (Math.random() < 0.08) {
    drawLightningMusica(ctx, canvas.width, canvas.height);
  }
  requestAnimationFrame(animateLightningMusica);
}

// Animación de relámpagos en la sección de biografía
function resizeBiografiaCanvas() {
  const section = document.getElementById('biografia');
  const canvas = document.getElementById('biografia-canvas');
  if (section && canvas) {
    canvas.width = section.offsetWidth;
    canvas.height = section.offsetHeight;
  }
}

function drawLightningBiografia(ctx, w, h) {
  const startX = Math.random() * w;
  const startY = 0;
  let x = startX;
  let y = startY;
  ctx.save();
  ctx.strokeStyle = 'rgba(255,255,255,0.8)';
  ctx.lineWidth = 2 + Math.random() * 2;
  ctx.shadowColor = '#fff';
  ctx.shadowBlur = 12;
  ctx.beginPath();
  ctx.moveTo(x, y);
  for (let i = 0; i < 12; i++) {
    x += (Math.random() - 0.5) * 40;
    y += h / 12;
    ctx.lineTo(x, y);
  }
  ctx.stroke();
  ctx.restore();
}

function animateLightningBiografia() {
  const canvas = document.getElementById('biografia-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (Math.random() < 0.08) {
    drawLightningBiografia(ctx, canvas.width, canvas.height);
  }
  requestAnimationFrame(animateLightningBiografia);
}

// Inicializar animaciones al cargar el DOM
window.addEventListener('DOMContentLoaded', function() {
  initSectionAnimations();
  initMenuActiveAnimation();
  resizeEventosCanvas();
  animateLightning();
  resizeMusicaCanvas();
  animateLightningMusica();
  resizeBiografiaCanvas();
  animateLightningBiografia();
  window.addEventListener('resize', () => {
    resizeEventosCanvas();
    resizeMusicaCanvas();
    resizeBiografiaCanvas();
  });
});
