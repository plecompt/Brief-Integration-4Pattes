document.querySelectorAll('[fontSize]').forEach(function(el) {
    el.style.setProperty('--fontSize', el.getAttribute('fontSize') + 'px');
});

document.querySelectorAll('[fontWeight]').forEach(function(el) {
    el.style.setProperty('--fontWeight', el.getAttribute('fontWeight'));
});