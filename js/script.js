const buttons = document.querySelector('.seller__list');

buttons.addEventListener('click', e => {
  const btn = e.target.closest('button');
  if (!btn || !buttons.contains(btn)) return;

  if (btn.classList.contains('active')) return;

  buttons.querySelectorAll('button.active').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
});