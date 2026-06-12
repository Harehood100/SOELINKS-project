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

const form = document.getElementById('fs-form');

if (form) {
  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const data = new FormData(form);
    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.textContent = 'Sending…';
    submitBtn.disabled = true;

    try {
      const response = await fetch('https://formspree.io/f/mbdezbgb', {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        document.getElementById('contact-form').style.display = 'none';
        document.getElementById('form-success').style.display = 'block';
      } else {
        submitBtn.textContent = 'Something went wrong — try again';
        submitBtn.disabled = false;
      }
    } catch (error) {
      submitBtn.textContent = 'Network error — try again';
      submitBtn.disabled = false;
    }
  });
}