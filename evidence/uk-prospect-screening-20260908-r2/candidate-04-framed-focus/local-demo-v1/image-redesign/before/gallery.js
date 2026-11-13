(() => {
  const dialog = document.querySelector('#photo-viewer');
  if (!dialog || typeof dialog.showModal !== 'function') return;
  const content = document.querySelector('#viewer-content');
  let trigger;
  document.querySelectorAll('.image-view').forEach(link => {
    link.addEventListener('click', event => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault(); trigger = link;
      const original = link.querySelector('img');
      const image = document.createElement('img');
      image.src = original.src; image.alt = original.alt;
      image.width = original.naturalWidth || original.width;
      const caption = document.createElement('p'); caption.textContent = original.alt;
      content.replaceChildren(image, caption); dialog.showModal();
    });
  });
  document.querySelector('#close-viewer').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => { content.replaceChildren(); if (trigger) trigger.focus(); });
})();

(() => {
  const button = document.querySelector('#copy-page-link');
  if (!button || !navigator.clipboard?.writeText) return;
  button.hidden = false;
  button.addEventListener('click', async () => {
    const status = document.querySelector('#share-status');
    try { await navigator.clipboard.writeText(location.href); status.textContent = 'Link copied. Ready to share.'; }
    catch { status.textContent = 'Copy the address from your browser to share this page.'; }
  });
})();
