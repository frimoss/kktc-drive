// Highlight the active stop in the sticky sidebar as the visitor scrolls
(function () {
    var links = document.querySelectorAll('.stop-list__item');
    var sections = document.querySelectorAll('.stop-card');
    if (!('IntersectionObserver' in window) || !sections.length) return;

    var map = {};
    links.forEach(function (item) {
        var id = item.querySelector('a').getAttribute('href').slice(1);
        map[id] = item;
    });

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            links.forEach(function (l) { l.classList.remove('is-active'); });
            var active = map[entry.target.id];
            if (active) active.classList.add('is-active');
        }
        });
    }, { rootMargin: '-20% 0px -60% 0px', threshold: 0 });

    sections.forEach(function (s) { observer.observe(s); });
    })();

    // "Show on map" buttons open a Google Maps search for the stop name
    document.querySelectorAll('.show-on-map').forEach(function (btn) {
    btn.addEventListener('click', function () {
        var query = encodeURIComponent(btn.dataset.stop + ', Northern Cyprus');
        window.open('https://www.google.com/maps/search/?api=1&query=' + query, '_blank', 'noopener');
    });
});