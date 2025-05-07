const scriptUrl = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';

fetch(scriptUrl)
  .then(response => response.json())
  .then(media => {
    const gallery = document.getElementById('gallery');
    media.forEach(item => {
      const element = document.createElement(item.type.startsWith('image/') ? 'img' : 'video');
      element.src = item.embedUrl;
      if (item.type.startsWith('video/')) {
        element.controls = true;
      }
      gallery.appendChild(element);
    });
  })
  .catch(error => console.error('Error loading gallery:', error));
