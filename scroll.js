document.addEventListener('DOMContentLoaded', function () {
  const joinBtn = document.getElementById('join-btn');
  const target = document.getElementById('why-best-server');

  if (joinBtn && target) {
    joinBtn.addEventListener('click', function () {
      target.scrollIntoView({ behavior: 'smooth' });
    });
  }
});
