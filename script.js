(() => {
  const projectRoot = new URL('../', document.baseURI);
  const resolveImage = value => {
    if (!value) return '';
    try {
      return new URL(value, projectRoot).href;
    } catch {
      return value;
    }
  };

  const works = (window.SEGMENTS_WORKS || []).map(work => ({
    ...work,
    image: resolveImage(work.image)
  }));

  const gallery = document.querySelector('#gallery');
  const viewer = document.querySelector('#viewer');
  const image = document.querySelector('#viewer-image');
  const title = document.querySelector('#viewer-title');
  const description = document.querySelector('#viewer-description');
  const poem = document.querySelector('#viewer-poem');
  const index = document.querySelector('#viewer-index');
  const category = document.querySelector('#viewer-category');
  let visibleWorks = works.slice();
  let current = 0;

  const label = value => value ? value.charAt(0).toUpperCase() + value.slice(1) : '';

  function buildGallery() {
    gallery.innerHTML = '';

    if (!works.length) {
      gallery.innerHTML = '<p>Archive data could not be loaded.</p>';
      return;
    }

    works.forEach((work, i) => {
      const button = document.createElement('button');
      button.className = 'card';
      button.dataset.category = work.category || '';
      button.dataset.id = String(work.id);

      const media = document.createElement('span');
      media.className = 'card-media';

      const img = document.createElement('img');
      img.src = work.image;
      img.alt = work.title || 'Architectural investigation';
      img.loading = i < 3 ? 'eager' : 'lazy';
      img.decoding = 'async';
      if (i === 0) img.fetchPriority = 'high';

      img.addEventListener('load', () => {
        if (img.naturalHeight > img.naturalWidth) button.classList.add('portrait');
      }, { once: true });

      img.addEventListener('error', () => {
        console.error('SEGMENTS image failed to load:', work.image);
        img.remove();
        const error = document.createElement('span');
        error.className = 'image-error';
        error.textContent = 'Image unavailable';
        media.appendChild(error);
      }, { once: true });

      media.appendChild(img);

      const copy = document.createElement('span');
      copy.className = 'card-copy';
      copy.innerHTML = `
        <span><span class="card-title"></span><br><span class="card-category"></span></span>
        <span class="card-index">${String(i + 1).padStart(3, '0')}</span>`;
      copy.querySelector('.card-title').textContent = work.title || 'Untitled';
      copy.querySelector('.card-category').textContent = label(work.category);

      button.append(media, copy);
      button.addEventListener('click', () => openViewer(work.id));
      gallery.appendChild(button);
    });
  }

  function openViewer(id) {
    const workIndex = visibleWorks.findIndex(work => work.id === id);
    current = workIndex >= 0 ? workIndex : 0;
    updateViewer();
    viewer.showModal();
    document.body.classList.add('no-scroll');
  }

  function updateViewer() {
    const work = visibleWorks[current];
    if (!work) return;
    image.src = work.image;
    image.alt = work.title || 'Architectural investigation';
    title.textContent = work.title || 'Untitled';
    description.textContent = work.description || '';
    poem.textContent = work.poem || '';
    index.textContent = `${String(current + 1).padStart(3, '0')} / ${String(visibleWorks.length).padStart(3, '0')}`;
    category.textContent = label(work.category);

    const next = visibleWorks[(current + 1) % visibleWorks.length];
    if (next) {
      const preload = new Image();
      preload.src = next.image;
    }
  }

  function move(delta) {
    if (!visibleWorks.length) return;
    current = (current + delta + visibleWorks.length) % visibleWorks.length;
    updateViewer();
  }

  document.querySelectorAll('.filter').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.filter').forEach(item => item.classList.remove('active'));
      button.classList.add('active');
      const filter = button.dataset.filter;
      visibleWorks = filter === 'all' ? works.slice() : works.filter(work => work.category === filter);
      document.querySelectorAll('.card').forEach(card => {
        card.hidden = filter !== 'all' && card.dataset.category !== filter;
      });
    });
  });

  document.querySelector('#viewer-close').addEventListener('click', () => viewer.close());
  document.querySelector('#viewer-prev').addEventListener('click', () => move(-1));
  document.querySelector('#viewer-next').addEventListener('click', () => move(1));
  viewer.addEventListener('close', () => document.body.classList.remove('no-scroll'));
  viewer.addEventListener('click', event => {
    if (event.target === viewer) viewer.close();
  });

  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  nav.addEventListener('click', () => nav.classList.remove('open'));

  document.addEventListener('keydown', event => {
    if (!viewer.open) return;
    if (event.key === 'ArrowRight') move(1);
    if (event.key === 'ArrowLeft') move(-1);
    if (event.key === 'Escape') viewer.close();
  });

  buildGallery();
})();