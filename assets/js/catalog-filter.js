(function () {
  'use strict';

  var params = new URLSearchParams(window.location.search);
  var category = params.get('category') || '';
  var query = (params.get('q') || '').trim();
  var words = query.toLowerCase().split(/\s+/).filter(Boolean);

  // Category navigation pills
  var filterLinks = Array.from(document.querySelectorAll('.ap-category-nav [data-filter], .shop-category-links [data-filter]'));
  filterLinks.forEach(function (link) {
    var f = link.getAttribute('data-filter') || '';
    if ((category && f === category) || (!category && f === '')) {
      link.setAttribute('aria-current', 'page');
    } else {
      link.removeAttribute('aria-current');
    }
  });

  // Category hero banners dynamic update (for Apple-style hero banner)
  var heroTitle = document.getElementById('apCategoryTitle');
  var heroDesc = document.getElementById('apCategoryDesc');
  var heroImg = document.getElementById('apCategoryImg');
  var heroEyebrow = document.getElementById('apCategoryEyebrow');

  var categoryProfiles = {
    'Boxes & Packaging': {
      eyebrow: 'Packaging & Unboxing',
      title: 'Custom Packaging.',
      desc: 'Corrugated mailer boxes, barrier stand-up pouches, custom sealing tape, and premium unboxing essentials.',
      img: 'assets/images/products/custom-mailer-boxes-clean.png',
      alt: 'Custom Printed Mailer Boxes'
    },
    'Apparel & Promo': {
      eyebrow: 'Apparel & Uniforms',
      title: 'Custom Apparel.',
      desc: 'Precision embroidery and high-density DTF printing on premium cotton and pique fabrics.',
      img: 'assets/images/hero-forward-force-polo-apple.jpg',
      alt: 'Forward Force Premium Custom Apparel'
    },
    'Marketing Materials': {
      eyebrow: 'Business & Print Collateral',
      title: 'Cards & Flyers.',
      desc: 'Heavyweight soft-touch business cards, promotional flyers, brochures, and corporate stationery.',
      img: 'assets/images/business-cards-clean.png',
      alt: 'Luxury Soft-Touch Business Cards'
    },
    'Stickers & Labels': {
      eyebrow: 'Labels & Decals',
      title: 'Stickers & Labels.',
      desc: 'Precision die-cut vinyl stickers, waterproof roll labels, and eco-friendly kraft paper labels.',
      img: 'assets/images/products/kraft-paper-labels-clean.png',
      alt: 'Kraft Paper and Vinyl Stickers'
    },
    'Signs & Banners': {
      eyebrow: 'Large Format Displays',
      title: 'Signs & Banners.',
      desc: 'Heavyweight outdoor vinyl banners, roll-up pull banners, and weather-resistant yard signage.',
      img: 'assets/images/products/yard-signs-clean.png',
      alt: 'Signs and Large Format Displays'
    }
  };

  if (category && categoryProfiles[category]) {
    var profile = categoryProfiles[category];
    if (heroEyebrow) heroEyebrow.textContent = profile.eyebrow;
    if (heroTitle) heroTitle.textContent = profile.title;
    if (heroDesc) heroDesc.textContent = profile.desc;
    if (heroImg) {
      heroImg.src = profile.img;
      heroImg.alt = profile.alt;
    }
  }

  // Filter product tiles
  var visibleCount = 0;
  var tiles = document.querySelectorAll('#ffProductsGrid [data-product-id]');
  tiles.forEach(function (tile) {
    var titleEl = tile.querySelector('h3');
    var titleText = titleEl ? titleEl.textContent : '';
    var tileCat = tile.getAttribute('data-category') || '';
    var tileId = (tile.getAttribute('data-product-id') || '').replace(/-/g, ' ');

    var searchableText = [titleText, tileCat, tileId].join(' ').toLowerCase();

    var matches = (!category || tileCat === category) && words.every(function (word) {
      return searchableText.includes(word);
    });

    tile.hidden = !matches;
    if (matches) visibleCount++;
  });

  var gridTitle = document.getElementById('ffGridTitle');
  if (gridTitle) {
    if (query) {
      gridTitle.textContent = 'Results for “' + query + '”';
    } else if (category) {
      gridTitle.textContent = category;
    } else {
      gridTitle.textContent = 'All Products';
    }
  }

  var countEl = document.getElementById('ffProductCount');
  if (countEl) {
    countEl.textContent = visibleCount + (visibleCount === 1 ? ' item' : ' items');
  }

  var noResultsEl = document.getElementById('ffNoResults');
  if (noResultsEl) {
    noResultsEl.hidden = visibleCount !== 0;
  }
}());
