const viewer=document.querySelector('#photo-viewer');
if(viewer&&typeof viewer.showModal==='function'){
  let origin;
  document.querySelectorAll('[data-photo]').forEach(link=>link.addEventListener('click',event=>{
    if(event.button!==0||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return;
    event.preventDefault();origin=link;
    const photo=new Image();photo.src=link.href;photo.alt=link.querySelector('img').alt;
    viewer.querySelector('.photo-stage').replaceChildren(photo);
    viewer.querySelector('#photo-caption').textContent=link.dataset.caption;
    viewer.showModal();
  }));
  viewer.querySelector('#close-photo').addEventListener('click',()=>viewer.close());
  viewer.addEventListener('click',event=>{if(event.target===viewer){const r=viewer.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)viewer.close()}});
  viewer.addEventListener('close',()=>{viewer.querySelector('.photo-stage').replaceChildren();origin?.focus()});
}
