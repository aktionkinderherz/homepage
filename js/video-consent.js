// Lädt ein YouTube-Video erst, wenn die Besucherin oder der Besucher auf das Vorschaubild klickt.
document.addEventListener('click', function (event) {
  var button = event.target.closest('.video-consent-button');
  if (!button) return;

  var container = button.closest('.video-consent');
  var iframe = document.createElement('iframe');
  iframe.src = 'https://www.youtube-nocookie.com/embed/' + container.getAttribute('data-youtube-id') + '?autoplay=1&rel=0';
  iframe.title = button.getAttribute('aria-label');
  iframe.setAttribute('frameborder', '0');
  iframe.setAttribute('allow', 'autoplay; encrypted-media; picture-in-picture; fullscreen');
  iframe.setAttribute('allowfullscreen', '');

  container.innerHTML = '';
  container.appendChild(iframe);
});
