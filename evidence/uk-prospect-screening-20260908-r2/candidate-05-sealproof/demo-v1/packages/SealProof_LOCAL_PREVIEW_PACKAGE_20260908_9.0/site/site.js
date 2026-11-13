'use strict';
const form=document.querySelector('#enquiry-form');
if(form){
 const result=document.querySelector('#form-result'),button=form.querySelector('button[type=submit]'),availability=document.querySelector('#form-availability');
 let requestId=crypto.randomUUID(),busy=false,uncertain=false;
 const names=['name','email','phone','subject','message'];
 const subjects={plumbing:'Repairs & plumbing',kitchens:'Kitchens & bathrooms',carpentry:'Carpentry & fitting',electrical:'Electrical',decorating:'Painting & decorating',security:'CCTV & security'};
 const category=new URLSearchParams(location.search).get('service');if(subjects[category])form.elements.subject.value=subjects[category];
 fetch('/api/form-status').then(r=>r.json()).then(data=>{availability.hidden=data.ready;availability.textContent=data.message;}).catch(()=>{availability.textContent='Online enquiry availability could not be checked. You can call or email SealProof directly.';});
 form.addEventListener('input',e=>{if(names.includes(e.target.name)){e.target.removeAttribute('aria-invalid');document.getElementById(e.target.name+'-error').textContent='';}if(!busy&&!uncertain)requestId=crypto.randomUUID();});
 form.addEventListener('submit',async e=>{
  e.preventDefault();if(busy||uncertain||!form.reportValidity())return;
  names.forEach(n=>{form.elements[n].removeAttribute('aria-invalid');document.getElementById(n+'-error').textContent='';});
  busy=true;button.disabled=true;button.textContent='Submitting…';result.dataset.state='pending';result.textContent='Submitting your enquiry…';form.setAttribute('aria-busy','true');
  const payload=Object.fromEntries(new FormData(form));payload.request_id=requestId;
  try{
   const response=await fetch('/api/enquiry',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});
   const data=await response.json();result.textContent=data.message+(data.reference?' Reference: '+data.reference+'.':'');result.dataset.state=data.ok?'success':'error';
   if(data.errors){for(const [name,message] of Object.entries(data.errors)){if(names.includes(name)){const field=form.elements[name];field.setAttribute('aria-invalid','true');field.setAttribute('aria-describedby',name+'-error');document.getElementById(name+'-error').textContent=message;}}}
   if(data.ok){form.reset();requestId=crypto.randomUUID();}else if(response.status===502||response.status===409){uncertain=true;}
   result.focus();
  }catch{uncertain=true;result.dataset.state='error';result.textContent='We could not confirm your enquiry was submitted. Please do not resend it immediately. Call or email SealProof for help. Your details remain in the form.';result.focus();}
  finally{busy=false;button.disabled=uncertain;button.textContent=uncertain?'Please call or email to confirm':'Send enquiry ↗';form.removeAttribute('aria-busy');}
 });
}
document.querySelectorAll('.mobile-nav nav a').forEach(link=>link.addEventListener('click',()=>link.closest('details').removeAttribute('open')));
