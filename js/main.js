function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  document.getElementById('page-' + name).classList.add('active');
  const navEl = document.getElementById('nav-' + name);
  if (navEl) navEl.classList.add('active');
  document.getElementById('nav').classList.remove('open');
  window.scrollTo({ top: 0 });
}

function toggleMenu() {
  document.getElementById('nav').classList.toggle('open');
}

function submitForm() {
  document.getElementById('contact-form').style.display = 'none';
  document.getElementById('form-success').style.display = 'block';
}