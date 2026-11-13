const workPhotos=[{"src": "assets/photo-1.jpg", "caption": "Book-pattern wallcovering and painted panelling."}, {"src": "assets/photo-2.jpg", "caption": "Botanical wallcovering meeting painted doors and woodwork."}, {"src": "assets/photo-3.jpg", "caption": "Geometric wallcovering, laser alignment and protected furniture."}, {"src": "assets/photo-4.jpg", "caption": "Cream kitchen cabinetry from Chris's work gallery."}, {"src": "assets/photo-5.jpg", "caption": "Cream cabinetry, a second view."}, {"src": "assets/photo-6.jpg", "caption": "Green kitchen cabinetry with floor protection."}, {"src": "assets/photo-7.jpg", "caption": "Green painted kitchen beneath the window."}, {"src": "assets/photo-8.jpg", "caption": "Another view of the green kitchen and protected floor."}, {"src": "assets/photo-9.jpg", "caption": "Painted sitting room with garden doors and white woodwork."}, {"src": "assets/photo-10.jpg", "caption": "Painted walls and white woodwork in a sitting room."}, {"src": "assets/photo-11.jpg", "caption": "Painted walls around a sitting-room window."}, {"src": "assets/photo-12.jpg", "caption": "Tower Bridge wallcovering in a furnished room."}, {"src": "assets/photo-13.jpg", "caption": "A closer view of the Tower Bridge wallcovering."}, {"src": "assets/photo-14.jpg", "caption": "Cream kitchen cabinetry and painted details."}, {"src": "assets/photo-15.jpg", "caption": "Graphic lettering on a painted feature wall."}];
const viewer=document.querySelector('#photo-viewer');
if(viewer&&typeof viewer.showModal==='function'){
 let origin,position=0;
 function render(){const record=workPhotos[position];const photo=new Image();photo.src=record.src;photo.alt=record.caption;viewer.querySelector('.photo-stage').replaceChildren(photo);viewer.querySelector('#photo-caption').textContent=record.caption;viewer.querySelector('#photo-count').textContent=`${position+1} of ${workPhotos.length}`;}
 function move(offset){position=(position+offset+workPhotos.length)%workPhotos.length;render()}
 document.querySelectorAll('[data-photo]').forEach(link=>link.addEventListener('click',event=>{
  if(event.button!==0||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return;
  event.preventDefault();origin=link;position=workPhotos.findIndex(p=>new URL(p.src,location.href).href===link.href);if(position<0)position=0;render();viewer.showModal();
 }));
 viewer.querySelector('#close-photo').addEventListener('click',()=>viewer.close());
 viewer.querySelector('#previous-photo').addEventListener('click',()=>move(-1));viewer.querySelector('#next-photo').addEventListener('click',()=>move(1));
 viewer.addEventListener('keydown',event=>{if(event.key==='ArrowRight'){event.preventDefault();move(1)}if(event.key==='ArrowLeft'){event.preventDefault();move(-1)}});
 viewer.addEventListener('click',event=>{if(event.target===viewer){const r=viewer.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)viewer.close()}});
 viewer.addEventListener('close',()=>{viewer.querySelector('.photo-stage').replaceChildren();origin?.focus()});
}
