function openInvitation() {
  document.querySelector('.envelope').classList.add('open');
  setTimeout(() => {
    document.getElementById('invitation').classList.remove('hidden');
    document.querySelector('.envelope').style.display = 'none';
  }, 1000);
}

// Contador
const weddingDate = new Date("July 11, 2026 17:00:00").getTime();
const timer = document.getElementById("timer");

setInterval(() => {
  const now = new Date().getTime();
  const distance = weddingDate - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60));
  const minutes = Math.floor((distance % (1000*60*60))/(1000*60));
  const seconds = Math.floor((distance % (1000*60))/1000);
  timer.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);

function openInvitation() {
  document.querySelector('.envelope').classList.add('open');
  setTimeout(() => {
    document.getElementById('invitation').classList.remove('hidden');
    document.querySelector('.envelope').style.display = 'none';

    // Animar secciones una por una
    const sections = document.querySelectorAll('main section');
    sections.forEach((sec, i) => {
      setTimeout(() => sec.classList.add('visible'), i * 500);
    });
  }, 1000);
}
