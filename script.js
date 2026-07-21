(() => {
  const works = Array.isArray(window.SEGMENTS_WORKS) ? window.SEGMENTS_WORKS : [];
  const gallery = document.querySelector('#gallery');
  const status = document.querySelector('#gallery-status');
  const filters = [...document.querySelectorAll('.filter')];
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#site-nav');
  const dialog = document.querySelector('#viewer');
  const image = document.querySelector('#viewer-image');
  const title = document.querySelector('#viewer-title');
  const description = document.querySelector('#viewer-description');
  const poem = document.querySelector('#viewer-poem');
  const indexLabel = document.querySelector('#viewer-index');
  const categoryLabel = document.querySelector('#viewer-category');
  const closeBtn = document.querySelector('#viewer-close');
  const prevBtn = document.querySelector('#viewer-prev');
  const nextBtn = document.querySelector('#viewer-next');
  let visible = works.slice();
  let activeIndex = 0;

  const esc = (s='') => String(s).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
  const pad = n => String(n).padStart(2,'0');

  function render(filter='all') {
    visible = filter === 'all' ? works.slice() : works.filter(w => w.category === filter);
    gallery.innerHTML = '';
    status.textContent = `${visible.length} investigation${visible.length === 1 ? '' : 's'}`;
    if (!works.length) {
      status.textContent = 'Gallery data did not load. Confirm that works.js is beside index.html.';
      return;
    }
    visible.forEach((work, i) => {
      const card = document.createElement('button');
      card.className = 'card';
      card.type = 'button';
      card.setAttribute('aria-label', `Open ${work.title}`);
      card.innerHTML = `<div class="card-media"><img src="${esc(work.image)}" alt="${esc(work.alt || work.title)}" loading="lazy" decoding="async"></div><div class="card-meta"><span class="card-title">${pad(i+1)} — ${esc(work.title)}</span><span class="card-category">${esc(work.category)}</span></div>`;
      const img = card.querySelector('img');
      img.addEventListener('error', () => {
        const wrap = card.querySelector('.card-media');
        wrap.innerHTML = `<div class="image-error">Missing image<br>${esc(work.image)}</div>`;
      }, {once:true});
      card.addEventListener('click', () => openViewer(i));
      gallery.appendChild(card);
    });
  }

  function openViewer(i) {
    activeIndex = i;
    const work = visible[activeIndex];
    image.src = work.image;
    image.alt = work.alt || work.title;
    title.textContent = work.title;
    description.textContent = work.description || '';
    poem.textContent = work.poem || '';
    indexLabel.textContent = `${pad(activeIndex+1)} / ${pad(visible.length)}`;
    categoryLabel.textContent = work.category || '';
    if (typeof dialog.showModal === 'function') dialog.showModal();
    else dialog.setAttribute('open','');
  }

  function step(delta) {
    activeIndex = (activeIndex + delta + visible.length) % visible.length;
    openViewer(activeIndex);
  }

  filters.forEach(btn => btn.addEventListener('click', () => {
    filters.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    render(btn.dataset.filter);
  }));
  menuToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
  });
  nav.addEventListener('click', () => { nav.classList.remove('open'); menuToggle.setAttribute('aria-expanded','false'); });
  closeBtn.addEventListener('click', () => dialog.close());
  prevBtn.addEventListener('click', () => step(-1));
  nextBtn.addEventListener('click', () => step(1));
  dialog.addEventListener('click', e => { if (e.target === dialog) dialog.close(); });
  document.addEventListener('keydown', e => {
    if (!dialog.open) return;
    if (e.key === 'ArrowLeft') step(-1);
    if (e.key === 'ArrowRight') step(1);
  });

  render();
})();
