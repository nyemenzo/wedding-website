const scriptUrl = 'https://script.google.com/macros/s/AKfycbx14wUVyPFUF3WYg7ZGRuS6CgCowWxqOtlofPYebs_jmSNWWIPHWLlZ7tc2WQj5bO7gQQ/exec';

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
