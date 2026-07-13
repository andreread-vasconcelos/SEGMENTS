
const gallery=document.getElementById('gallery');
const viewer=document.getElementById('viewer');
let current=0;
document.getElementById('count').textContent=`${works.length} fragments`;
works.forEach((w,i)=>{
  const b=document.createElement('button');
  b.className='tile'; b.type='button';
  b.innerHTML=`<img src="${w.src}" alt="${w.title}" loading="lazy"><span class="overlay"><span>${String(i+1).padStart(2,'0')}</span><strong>${w.title}</strong></span>`;
  b.addEventListener('click',()=>openWork(i)); gallery.appendChild(b);
});
function render(){
  const w=works[current];
  modalImage.src=w.src; modalImage.alt=w.title;
  modalNumber.textContent=`${String(current+1).padStart(2,'0')} / ${String(works.length).padStart(2,'0')}`;
  modalTitle.textContent=w.title; modalDescription.textContent=w.description; modalFragment.textContent=w.fragment;
}
function openWork(i){current=i;render();viewer.showModal();document.body.style.overflow='hidden'}
function closeViewer(){viewer.close();document.body.style.overflow=''}
document.getElementById('close').onclick=closeViewer;
document.getElementById('prev').onclick=()=>{current=(current-1+works.length)%works.length;render()};
document.getElementById('next').onclick=()=>{current=(current+1)%works.length;render()};
viewer.addEventListener('click',e=>{if(e.target===viewer)closeViewer()});
window.addEventListener('keydown',e=>{if(!viewer.open)return;if(e.key==='ArrowLeft')prev.click();if(e.key==='ArrowRight')next.click();if(e.key==='Escape')closeViewer()});
