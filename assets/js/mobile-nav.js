(function () {
  function initMobileNavigation() {
    var wrappers = document.querySelectorAll('.up-nav-dropdown-wrapper');
    var nav = document.querySelector('.up-nav-container');
    var header = document.querySelector('.ff-market-header');

    if (!nav || !header) return;

    function closeMenus(except) {
      wrappers.forEach(function (wrapper) {
        if (wrapper === except) return;
        wrapper.classList.remove('is-open');
        var button = wrapper.querySelector('.up-nav-toggle');
        if (button) {
          button.setAttribute('aria-expanded', 'false');
          button.setAttribute('aria-label', 'Open ' + button.getAttribute('data-label') + ' menu');
        }
      });
    }

    wrappers.forEach(function (wrapper, index) {
      var link = wrapper.querySelector('.up-nav-item');
      var menu = wrapper.querySelector('.up-mega-dropdown');
      if (!link || !menu || wrapper.querySelector('.up-nav-toggle')) return;

      var label = link.textContent.trim();
      var menuId = menu.id || 'ff-mega-menu-' + index;
      menu.id = menuId;

      var button = document.createElement('button');
      button.type = 'button';
      button.className = 'up-nav-toggle';
      button.setAttribute('aria-controls', menuId);
      button.setAttribute('aria-expanded', 'false');
      button.setAttribute('aria-label', 'Open ' + label + ' menu');
      button.setAttribute('data-label', label);
      button.innerHTML = '<span aria-hidden="true">&#9662;</span>';
      wrapper.appendChild(button);

      button.addEventListener('click', function (event) {
        event.preventDefault();
        event.stopPropagation();

        var opening = !wrapper.classList.contains('is-open');
        closeMenus(wrapper);
        wrapper.classList.toggle('is-open', opening);
        button.setAttribute('aria-expanded', opening ? 'true' : 'false');
        button.setAttribute('aria-label', (opening ? 'Close ' : 'Open ') + label + ' menu');

        if (opening) {
          var headerBottom = Math.ceil(header.getBoundingClientRect().bottom);
          document.documentElement.style.setProperty('--ff-mobile-nav-top', headerBottom + 'px');
        }
      });
    });

    document.addEventListener('click', function (event) {
      if (!nav.contains(event.target)) closeMenus();
    });

    document.addEventListener('keydown', function (event) {
      if (event.key !== 'Escape') return;
      var openWrapper = document.querySelector('.up-nav-dropdown-wrapper.is-open');
      if (!openWrapper) return;
      closeMenus();
      var button = openWrapper.querySelector('.up-nav-toggle');
      if (button) button.focus();
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 768) closeMenus();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMobileNavigation);
  } else {
    initMobileNavigation();
  }
}());
