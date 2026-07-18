(() => {
  const works = window.SEGMENTS_WORKS || [];
  const gallery = document.querySelector('#gallery');
  const viewer = document.querySelector('#viewer');
  const leisure = document.querySelector('#leisure');
  const image = document.querySelector('#viewer-image');
  const title = document.querySelector('#viewer-title');
  const description = document.querySelector('#viewer-description');
  const poem = document.querySelector('#viewer-poem');
  const index = document.querySelector('#viewer-index');
  const category = document.querySelector('#viewer-category');
  let visibleWorks = works.slice();
  let current = 0;

  const label = value => value.charAt(0).toUpperCase() + value.slice(1);

  function buildGallery() {
    gallery.innerHTML = '';
    works.forEach((work, i) => {
      const button = document.createElement('button');
      button.className = 'card';
      button.dataset.category = work.category;
      button.dataset.id = work.id;
      button.innerHTML = `
        <span class="card-media"><img src="${work.image}" alt="${work.title}" loading="lazy"></span>
        <span class="card-copy">
          <span><span class="card-title">${work.title}</span><br><span class="card-category">${label(work.category)}</span></span>
          <span class="card-index">${String(i + 1).padStart(2,'0')}</span>
        </span>`;
      button.addEventListener('click', () => openViewer(work.id));
      gallery.appendChild(button);
      const probe = new Image();
      probe.onload = () => { if (probe.height > probe.width) button.classList.add('portrait'); };
      probe.src = work.image;
    });
  }

  function openViewer(id) {
    const workIndex = visibleWorks.findIndex(w => w.id === id);
    current = workIndex >= 0 ? workIndex : 0;
    updateViewer();
    viewer.showModal();
    document.body.classList.add('no-scroll');
  }

  function updateViewer() {
    const work = visibleWorks[current];
    if (!work) return;
    image.src = work.image;
    image.alt = work.title;
    title.textContent = work.title;
    description.textContent = work.description;
    poem.textContent = work.poem;
    index.textContent = `${String(current + 1).padStart(2,'0')} / ${String(visibleWorks.length).padStart(2,'0')}`;
    category.textContent = label(work.category);
  }

  function move(delta) {
    current = (current + delta + visibleWorks.length) % visibleWorks.length;
    updateViewer();
  }

  document.querySelectorAll('.filter').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.filter').forEach(b => b.classList.remove('active'));
      button.classList.add('active');
      const filter = button.dataset.filter;
      visibleWorks = filter === 'all' ? works.slice() : works.filter(w => w.category === filter);
      document.querySelectorAll('.card').forEach(card => {
        card.hidden = filter !== 'all' && card.dataset.category !== filter;
      });
    });
  });

  document.querySelector('#viewer-close').addEventListener('click', () => viewer.close());
  document.querySelector('#viewer-prev').addEventListener('click', () => move(-1));
  document.querySelector('#viewer-next').addEventListener('click', () => move(1));
  viewer.addEventListener('close', () => document.body.classList.remove('no-scroll'));
  viewer.addEventListener('click', e => { if (e.target === viewer) viewer.close(); });

  document.querySelector('#open-leisure').addEventListener('click', () => {
    leisure.showModal(); document.body.classList.add('no-scroll');
  });
  document.querySelector('#leisure-close').addEventListener('click', () => leisure.close());
  leisure.addEventListener('close', () => document.body.classList.remove('no-scroll'));

  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
  nav.addEventListener('click', e => { if (e.target.matches('a,button')) nav.classList.remove('open'); });

  document.addEventListener('keydown', e => {
    if (viewer.open) {
      if (e.key === 'ArrowRight') move(1);
      if (e.key === 'ArrowLeft') move(-1);
    }
  });

  buildGallery();
})();
