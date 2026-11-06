(() => {
  const menu = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  menu?.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') === 'true';
    menu.setAttribute('aria-expanded', String(!open));
    menu.setAttribute('aria-label', open ? 'Открыть меню' : 'Закрыть меню');
    nav.classList.toggle('is-open', !open);
  });
  nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('is-open'); menu?.setAttribute('aria-expanded', 'false');
  }));
  const items = [...document.querySelectorAll('.gallery-item')];
  const dialog = document.querySelector('.lightbox');
  const image = dialog?.querySelector('img');
  const caption = dialog?.querySelector('p');
  let current = 0;
  function show(i) { current = (i + items.length) % items.length; const item = items[current]; image.src = item.dataset.src; image.alt = item.dataset.alt; caption.textContent = item.dataset.alt; }
  items.forEach((item, i) => item.addEventListener('click', () => { show(i); dialog.showModal(); }));
  dialog?.querySelector('.close')?.addEventListener('click', () => dialog.close());
  dialog?.querySelector('.prev')?.addEventListener('click', () => show(current - 1));
  dialog?.querySelector('.next')?.addEventListener('click', () => show(current + 1));
  dialog?.addEventListener('click', e => { if (e.target === dialog) dialog.close(); });
  dialog?.addEventListener('keydown', e => { if (e.key === 'ArrowLeft') show(current - 1); if (e.key === 'ArrowRight') show(current + 1); });
})();
