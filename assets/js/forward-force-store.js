(function () {
  'use strict';

  var catalog = [
    {
      id: "standard-business-cards",
      title: "Standard Business Cards (Pack of 250)",
      category: "Marketing Materials",
      unitPrice: 12.00,
      priceTzs: 30000,
      baseQty: 1,
      description: "Premium 350gsm matte or gloss coated cards with crisp double-sided printing.",
      image: "https://images.pexels.com/photos/10932011/pexels-photo-10932011.jpeg?auto=compress&cs=tinysrgb&w=900",
      imageAlt: "Standard Business Cards"
    },
    {
      id: "square-business-cards",
      title: "Square Business Cards (Pack of 200)",
      category: "Marketing Materials",
      unitPrice: 14.00,
      priceTzs: 35000,
      baseQty: 1,
      description: "Modern 2.5\" x 2.5\" square cards on extra-thick cardstock.",
      image: "https://staticecp.uprinting.com/98/600x600/Square_Business_Cards_Marketing_Material_A.jpg",
      imageAlt: "Square Business Cards"
    },
    {
      id: "rounded-corner-cards",
      title: "Rounded Corner Cards (Pack of 250)",
      category: "Marketing Materials",
      unitPrice: 15.00,
      priceTzs: 38000,
      baseQty: 1,
      description: "Smooth rounded corners that resist creasing with soft-touch protective finish.",
      image: "https://staticecp.uprinting.com/119/350x350/Rounded_Corner_Business_Cards_Marketing_Material_A.jpg",
      imageAlt: "Rounded Corner Business Cards"
    },
    {
      id: "gold-foil-cards",
      title: "Gold Foil Business Cards (Pack of 100)",
      category: "Marketing Materials",
      unitPrice: 20.00,
      priceTzs: 50000,
      baseQty: 1,
      description: "Shimmering metallic gold or silver foil stamping with velvety soft-touch lamination.",
      image: "https://staticecp.uprinting.com/121/300x300/Foil_Business_Cards_Marketing_Material_A.jpg",
      imageAlt: "Gold Foil Business Cards"
    },
    {
      id: "flyers",
      title: "Promotional Flyers (Pack of 100)",
      category: "Marketing Materials",
      unitPrice: 16.00,
      priceTzs: 40000,
      baseQty: 1,
      description: "Vibrant full-color A5 or A4 flyers on 150gsm gloss art paper.",
      image: "https://staticecp.uprinting.com/19240/250x250/UP_Flyers_PLA_Image_1.jpg",
      imageAlt: "Flyers"
    },
    {
      id: "brochures",
      title: "Tri-Fold Brochures (Pack of 100)",
      category: "Marketing Materials",
      unitPrice: 22.00,
      priceTzs: 55000,
      baseQty: 1,
      description: "Professional tri-fold or bi-fold corporate brochures with precision machine creasing.",
      image: "https://staticecp.uprinting.com/19242/250x250/UP_Booklets_PLA_Image_1.jpg",
      imageAlt: "Brochures"
    },
    {
      id: "booklets",
      title: "Custom Booklets & Catalogs (Pack of 50)",
      category: "Marketing Materials",
      unitPrice: 38.00,
      priceTzs: 95000,
      baseQty: 1,
      description: "Saddle-stitched multi-page company profiles and product catalogs.",
      image: "https://staticecp.uprinting.com/19242/250x250/UP_Booklets_PLA_Image_1.jpg",
      imageAlt: "Booklets"
    },
    {
      id: "notepads",
      title: "Branded Notepads (Pack of 20)",
      category: "Marketing Materials",
      unitPrice: 18.00,
      priceTzs: 45000,
      baseQty: 1,
      description: "Custom 50-sheet corporate notepads with hard backing and your logo on every sheet.",
      image: "https://staticecp.uprinting.com/19246/250x250/UP_Notepad_PLA_Image_1.jpg",
      imageAlt: "Notepads"
    },
    {
      id: "custom-stickers",
      title: "Die-Cut Vinyl Stickers (Pack of 100)",
      category: "Stickers & Labels",
      unitPrice: 10.00,
      priceTzs: 25000,
      baseQty: 1,
      description: "Waterproof, UV-resistant custom shape die-cut stickers for branding.",
      image: "https://staticecp.uprinting.com/6991/250x250/UP_Square_Stickers_PDP_Image_A.jpg",
      imageAlt: "Die Cut Stickers"
    },
    {
      id: "roll-labels",
      title: "Product Roll Labels (Pack of 500)",
      category: "Stickers & Labels",
      unitPrice: 24.00,
      priceTzs: 60000,
      baseQty: 1,
      description: "High-speed dispenser compatible roll labels for bottles, jars, and packaging.",
      image: "https://staticecp.uprinting.com/19249/250x250/UP_Roll_Labels_PLA_Image_2.jpg",
      imageAlt: "Roll Labels"
    },
    {
      id: "kraft-stickers",
      title: "Kraft Paper Labels (Pack of 100)",
      category: "Stickers & Labels",
      unitPrice: 12.00,
      priceTzs: 30000,
      baseQty: 1,
      description: "Eco-friendly textured rustic brown kraft stickers with strong adhesive.",
      image: "assets/logo_forward_force/kraftsticker.jpeg",
      imageAlt: "Kraft Stickers"
    },
    {
      id: "metallic-stickers",
      title: "Foil & Metallic Stickers (Pack of 100)",
      category: "Stickers & Labels",
      unitPrice: 16.00,
      priceTzs: 40000,
      baseQty: 1,
      description: "Eye-catching metallic chrome and holographic sticker finishes.",
      image: "https://staticecp.uprinting.com/19247/250x250/UP_Metallic_Stickers_PLA_Image_2.jpg",
      imageAlt: "Metallic Stickers"
    },
    {
      id: "mailer-box",
      title: "Custom Mailer Boxes (Pack of 25)",
      category: "Boxes & Packaging",
      unitPrice: 32.00,
      priceTzs: 80000,
      baseQty: 1,
      description: "Heavy-duty corrugated cardboard shipping boxes with vibrant custom exterior printing.",
      image: "assets/logo_forward_force/mailboxes.jpeg",
      imageAlt: "Custom Mailer Boxes"
    },
    {
      id: "standup-pouches",
      title: "Custom Stand-Up Pouches (Pack of 100)",
      category: "Boxes & Packaging",
      unitPrice: 28.00,
      priceTzs: 70000,
      baseQty: 1,
      description: "Resealable ziplock barrier pouches for coffee, dry foods, and consumer products.",
      image: "https://staticecp.uprinting.com/16760/250x250/UP%20Home%20Page%20Prod%20Images%20April%20-%20Pouches.jpg",
      imageAlt: "Stand-Up Pouches"
    },
    {
      id: "tissue-paper",
      title: "Custom Printed Tissue Paper (500 Sheets)",
      category: "Boxes & Packaging",
      unitPrice: 26.00,
      priceTzs: 65000,
      baseQty: 1,
      description: "Premium unboxing experience with all-over repeat logo pattern on soft tissue.",
      image: "https://staticecp.uprinting.com/19244/250x250/UP_Tissue_Paper_PLA_Image_1.jpg",
      imageAlt: "Tissue Paper"
    },
    {
      id: "custom-tape",
      title: "Branded Packing Tape (Roll of 100m)",
      category: "Boxes & Packaging",
      unitPrice: 10.00,
      priceTzs: 25000,
      baseQty: 1,
      description: "Reinforced water-activated or heavy-duty self-adhesive branded sealing tape.",
      image: "https://staticecp.uprinting.com/6458/250x250/Poly_Packing_Tape_Updated.jpg",
      imageAlt: "Custom Packing Tape"
    },
    {
      id: "vinyl-banners",
      title: "Outdoor Vinyl Banner (Large Format)",
      category: "Signs & Banners",
      unitPrice: 20.00,
      priceTzs: 50000,
      baseQty: 1,
      description: "Durable 510gsm weatherproof PVC banner with reinforced brass eyelets.",
      image: "https://staticecp.uprinting.com/19248/250x250/UP_Vinyl_Banner_PLA_Image_1.jpg",
      imageAlt: "Vinyl Banners"
    },
    {
      id: "roll-up-banner",
      title: "Roll-Up Pull Banner (With Stand)",
      category: "Signs & Banners",
      unitPrice: 36.00,
      priceTzs: 90000,
      baseQty: 1,
      description: "Retractable 85x200cm aluminium stand with carrying bag and full-color banner.",
      image: "https://staticecp.uprinting.com/19248/250x250/UP_Vinyl_Banner_PLA_Image_1.jpg",
      imageAlt: "Roll-Up Banner"
    },
    {
      id: "yard-signs",
      title: "Corrugated Yard Signs (Pack of 5)",
      category: "Signs & Banners",
      unitPrice: 24.00,
      priceTzs: 60000,
      baseQty: 1,
      description: "Weatherproof 4mm fluted plastic signs with metal H-stakes for outdoor display.",
      image: "assets/logo_forward_force/yard%20sign.jpeg",
      imageAlt: "Yard Signs"
    },
    {
      id: "teardrop-flags",
      title: "Teardrop Advertising Flag (With Pole & Base)",
      category: "Signs & Banners",
      unitPrice: 48.00,
      priceTzs: 120000,
      baseQty: 1,
      description: "Double-sided dye-sublimation feather flag complete with fiberglass pole and ground cross-base.",
      image: "https://staticecp.uprinting.com/19251/250x250/UP_Window_Decals_PLA_Image_1.jpg",
      imageAlt: "Teardrop Flag"
    },
    {
      id: "custom-hoodie",
      title: "Custom Heavyweight Fleece Hoodie",
      category: "Apparel & Promo",
      unitPrice: 18.00,
      priceTzs: 45000,
      baseQty: 1,
      description: "Plush 320gsm cotton-poly fleece hoodie with premium DTF print or embroidery.",
      image: "https://staticecp.uprinting.com/19238/250x250/UP_Hoodie_PLA_Image_1.jpg",
      imageAlt: "Custom Fleece Hoodie"
    },
    {
      id: "dtf-tshirts",
      title: "Branded DTF Cotton T-Shirt",
      category: "Apparel & Promo",
      unitPrice: 8.00,
      priceTzs: 20000,
      baseQty: 1,
      description: "100% combed cotton 180gsm t-shirt with vibrant high-density direct-to-film print.",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Branded DTF T-Shirt"
    },
    {
      id: "polo-shirts",
      title: "Embroidered Pique Polo Shirt",
      category: "Apparel & Promo",
      unitPrice: 12.00,
      priceTzs: 30000,
      baseQty: 1,
      description: "Classic corporate 220gsm polo shirt with high-stitch-count chest embroidery.",
      image: "https://assets.pens.com/image/upload/products/prd-va7p9gemd/055bbe3373f94574a87a762fc90fbc5e",
      imageAlt: "Embroidered Polo Shirt"
    },
    {
      id: "custom-hats",
      title: "Embroidered Snapback & Caps",
      category: "Apparel & Promo",
      unitPrice: 7.00,
      priceTzs: 18000,
      baseQty: 1,
      description: "Structured 6-panel twill cap with 3D puff embroidery and adjustable closure.",
      image: "https://images.unsplash.com/photo-1622445275576-721325763afe?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Embroidered Caps"
    },
    {
      id: "custom-bags",
      title: "Heavy Cotton Canvas Tote Bag",
      category: "Apparel & Promo",
      unitPrice: 5.00,
      priceTzs: 12000,
      baseQty: 1,
      description: "Eco-friendly reusable 10oz canvas shopping tote with reinforced handles.",
      image: "https://images.unsplash.com/photo-1572966059657-6e8910c8c3c0?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Canvas Tote Bag"
    },
    {
      id: "table-tents",
      title: "Cardstock Table Tents (Pack of 50)",
      category: "Marketing Materials",
      unitPrice: 14.00,
      priceTzs: 35000,
      baseQty: 1,
      description: "Self-standing die-cut table display cards for restaurants, cafes, and receptions.",
      image: "https://staticecp.uprinting.com/19243/250x250/P_Table_Tent_PLA_Image_2.jpg",
      imageAlt: "Table Tents"
    }
  ];

  var storageKey = 'forwardForceCartItems';
  var previousKey = 'uprintingCartItems';
  var legacyKey = 'forwardForceQuoteBasket';

  // Clear any legacy demo mock data once so the cart starts empty and genuinely real
  try {
    if (localStorage.getItem(previousKey)) {
      localStorage.removeItem(previousKey);
    }
  } catch (e) {}

  function readBasket() {
    try {
      var raw = localStorage.getItem(storageKey);
      if (!raw) return [];
      var items = JSON.parse(raw);
      if (!Array.isArray(items)) return [];
      // Filter out any leftover corrupted or zero items
      return items.filter(function (it) {
        return it && it.id && it.quantity > 0;
      });
    } catch (e) {
      return [];
    }
  }

  function saveBasket(items) {
    localStorage.setItem(storageKey, JSON.stringify(items));
    updateCounts(items);
  }

  function updateCounts(items) {
    var total = items.reduce(function (sum, line) {
      return sum + (Number(line.quantity) || 0);
    }, 0);
    document.querySelectorAll('[data-cart-count]').forEach(function (node) {
      node.textContent = String(total);
    });
  }

  function findProduct(id) {
    return catalog.find(function (item) { return item.id === id; });
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function addItem(id, details) {
    var product = findProduct(id) || {
      id: id,
      title: (details && details.title) || id.replace(/-/g, ' ').replace(/\b\w/g, function(l){return l.toUpperCase();}),
      category: (details && details.category) || 'Custom Print',
      unitPrice: (details && details.price) || 15.00,
      priceTzs: (details && details.priceTzs) || 38000,
      image: (details && details.image) || 'https://images.pexels.com/photos/10932011/pexels-photo-10932011.jpeg?auto=compress&cs=tinysrgb&w=900'
    };

    details = details || {};
    var qty = Math.max(1, parseInt(details.quantity || '1', 10));
    var size = details.size || 'Standard Spec';
    var paper = details.paper || 'Premium Finish';
    var artwork = details.artwork || 'I will send artwork via WhatsApp';
    var key = [id, size, paper].join('|');

    var items = readBasket();
    var existing = items.find(function (line) { return line.key === key; });
    if (existing) {
      existing.quantity += qty;
    } else {
      items.push({
        key: key,
        id: id,
        title: product.title,
        category: product.category,
        unitPrice: product.unitPrice || 15.00,
        priceTzs: product.priceTzs || (product.unitPrice ? product.unitPrice * 2500 : 38000),
        quantity: qty,
        size: size,
        paper: paper,
        artwork: artwork,
        image: product.image
      });
    }
    saveBasket(items);
    return product;
  }

  // Toast notification feedback
  function showToast(productTitle) {
    var existing = document.getElementById('up-active-toast');
    if (existing) {
      existing.remove();
    }

    var toast = document.createElement('div');
    toast.id = 'up-active-toast';
    toast.className = 'up-cart-toast';
    toast.innerHTML = 
      '<div class="up-toast-icon"><i class="fa fa-check"></i></div>' +
      '<div class="up-toast-body">' +
        '<div class="up-toast-title">"' + escapeHtml(productTitle) + '" added to your cart!</div>' +
        '<div class="up-toast-sub">Item is ready in your cart. Checkout completes on WhatsApp.</div>' +
      '</div>' +
      '<a href="cart.html" class="up-toast-view-cart">View Cart &rarr;</a>' +
      '<button type="button" class="up-toast-close" aria-label="Close">&times;</button>';

    document.body.appendChild(toast);

    setTimeout(function () {
      toast.classList.add('show');
    }, 10);

    var closeBtn = toast.querySelector('.up-toast-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', function () {
        toast.classList.remove('show');
        setTimeout(function () { toast.remove(); }, 300);
      });
    }

    setTimeout(function () {
      if (toast && toast.parentNode) {
        toast.classList.remove('show');
        setTimeout(function () {
          if (toast && toast.parentNode) toast.remove();
        }, 300);
      }
    }, 3500);
  }

  // Calculate pricing & totals
  function getCartFinancials(items, promoCode) {
    var subtotalUsd = items.reduce(function (sum, item) {
      return sum + ((item.unitPrice || 15.00) * item.quantity);
    }, 0);

    var subtotalTzs = items.reduce(function (sum, item) {
      var tzs = item.priceTzs || (item.unitPrice ? item.unitPrice * 2500 : 38000);
      return sum + (tzs * item.quantity);
    }, 0);

    var discountUsd = 0;
    var discountTzs = 0;
    if (promoCode && promoCode.toUpperCase() === 'UPRINT10') {
      discountUsd = subtotalUsd * 0.10;
      discountTzs = subtotalTzs * 0.10;
    }

    var totalUsd = Math.max(0, subtotalUsd - discountUsd);
    var totalTzs = Math.max(0, subtotalTzs - discountTzs);

    return {
      subtotal: subtotalUsd,
      subtotalTzs: subtotalTzs,
      discount: discountUsd,
      discountTzs: discountTzs,
      shipping: 0,
      tax: 0,
      total: totalUsd,
      totalTzs: totalTzs
    };
  }

  // Expose to window for global access
  window.UPCart = {
    readBasket: readBasket,
    saveBasket: saveBasket,
    addItem: addItem,
    findProduct: findProduct,
    getFinancials: getCartFinancials,
    catalog: catalog
  };

  document.addEventListener('DOMContentLoaded', function () {
    var items = readBasket();
    updateCounts(items);

    // Global Add to Cart listener
    document.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-add-to-cart]');
      if (!btn) return;
      e.preventDefault();
      var id = btn.getAttribute('data-add-to-cart');
      var addedProd = addItem(id);
      if (addedProd) {
        var old = btn.textContent;
        btn.textContent = 'Added ✓';
        btn.style.background = '#15833b';
        setTimeout(function () {
          btn.textContent = old;
          btn.style.background = '';
        }, 1500);

        showToast(addedProd.title || id);
      }
    });

    // Render cart on cart.html
    var cartContainer = document.getElementById('up-cart-items-list');
    if (cartContainer) {
      initCartPage(cartContainer);
    }
  });

  function initCartPage(container) {
    var appliedPromo = localStorage.getItem('upActivePromo') || '';

    function render() {
      var items = readBasket();
      var emptyNotice = document.getElementById('up-empty-cart');
      var cartTable = document.getElementById('up-cart-table-wrap');
      var orderSummary = document.getElementById('up-order-summary-box');

      if (!items.length) {
        if (emptyNotice) emptyNotice.style.display = 'block';
        if (cartTable) cartTable.style.display = 'none';
        if (orderSummary) orderSummary.style.display = 'none';
        container.innerHTML = '';
        return;
      }

      if (emptyNotice) emptyNotice.style.display = 'none';
      if (cartTable) cartTable.style.display = 'block';
      if (orderSummary) orderSummary.style.display = 'block';

      container.innerHTML = items.map(function (item) {
        var unitTzs = item.priceTzs || (item.unitPrice ? item.unitPrice * 2500 : 38000);
        var lineTzs = (unitTzs * item.quantity).toLocaleString();
        var lineUsd = ((item.unitPrice || 15) * item.quantity).toFixed(2);

        return [
          '<tr class="up-cart-row">',
          '  <td class="up-cart-col-prod">',
          '    <div class="up-cart-prod-flex">',
          '      <img class="up-cart-thumb" src="' + escapeHtml(item.image) + '" alt="' + escapeHtml(item.title) + '">',
          '      <div class="up-cart-prod-info">',
          '        <h4 class="up-cart-item-title">' + escapeHtml(item.title) + '</h4>',
          '        <span class="up-cart-item-cat">' + escapeHtml(item.category) + '</span>',
          '        <ul class="up-cart-item-specs">',
          '          <li><b>Finish/Option:</b> ' + escapeHtml(item.size || 'Standard') + '</li>',
          '          <li><b>Specification:</b> ' + escapeHtml(item.paper || 'Premium Quality') + '</li>',
          '          <li><b>Proofing:</b> Free PDF Proof via WhatsApp</li>',
          '        </ul>',
          '        <button class="up-remove-link" data-remove-key="' + escapeHtml(item.key) + '" type="button">',
          '          <i class="fa fa-trash-o"></i> Remove item',
          '        </button>',
          '      </div>',
          '    </div>',
          '  </td>',
          '  <td class="up-cart-col-qty">',
          '    <div class="up-qty-control">',
          '      <button class="up-qty-btn up-qty-minus" data-key="' + escapeHtml(item.key) + '">-</button>',
          '      <input class="up-qty-input" type="number" min="1" step="1" value="' + item.quantity + '" data-input-key="' + escapeHtml(item.key) + '">',
          '      <button class="up-qty-btn up-qty-plus" data-key="' + escapeHtml(item.key) + '">+</button>',
          '    </div>',
          '    <span class="up-unit-price">TZS ' + unitTzs.toLocaleString() + ' ($' + (item.unitPrice || 15).toFixed(2) + ')</span>',
          '  </td>',
          '  <td class="up-cart-col-total">',
          '    <span class="up-row-price" style="font-weight:700; color:#186f3b;">TZS ' + lineTzs + '</span>',
          '    <div style="font-size:12px; color:#777;">$' + lineUsd + '</div>',
          '  </td>',
          '</tr>'
        ].join('\n');
      }).join('\n');

      // Update Financials
      var fin = getCartFinancials(items, appliedPromo);
      var subtotalEl = document.getElementById('up-subtotal-val');
      var discountEl = document.getElementById('up-discount-val');
      var discountRow = document.getElementById('up-discount-row');
      var shippingEl = document.getElementById('up-shipping-val');
      var taxEl = document.getElementById('up-tax-val');
      var totalEl = document.getElementById('up-total-val');

      if (subtotalEl) subtotalEl.textContent = 'TZS ' + fin.subtotalTzs.toLocaleString() + ' ($' + fin.subtotal.toFixed(2) + ')';
      if (shippingEl) shippingEl.textContent = 'FREE (Within Dar)';
      if (taxEl) taxEl.textContent = 'Included';
      if (totalEl) totalEl.textContent = 'TZS ' + fin.totalTzs.toLocaleString() + ' ($' + fin.total.toFixed(2) + ')';

      if (discountRow) {
        if (fin.discount > 0) {
          discountRow.style.display = 'flex';
          if (discountEl) discountEl.textContent = '-TZS ' + fin.discountTzs.toLocaleString() + ' (-$' + fin.discount.toFixed(2) + ')';
        } else {
          discountRow.style.display = 'none';
        }
      }
    }

    render();

    // Event Delegations on Cart Items
    container.addEventListener('click', function (e) {
      var removeBtn = e.target.closest('[data-remove-key]');
      if (removeBtn) {
        var keyToRemove = removeBtn.getAttribute('data-remove-key');
        var items = readBasket().filter(function (it) { return it.key !== keyToRemove; });
        saveBasket(items);
        render();
        return;
      }

      var plusBtn = e.target.closest('.up-qty-plus');
      if (plusBtn) {
        var k = plusBtn.getAttribute('data-key');
        var items = readBasket();
        var item = items.find(function (it) { return it.key === k; });
        if (item) {
          item.quantity += 1;
          saveBasket(items);
          render();
        }
        return;
      }

      var minusBtn = e.target.closest('.up-qty-minus');
      if (minusBtn) {
        var k = minusBtn.getAttribute('data-key');
        var items = readBasket();
        var item = items.find(function (it) { return it.key === k; });
        if (item && item.quantity > 1) {
          item.quantity -= 1;
          saveBasket(items);
          render();
        }
        return;
      }
    });

    container.addEventListener('change', function (e) {
      var input = e.target.closest('.up-qty-input');
      if (input) {
        var k = input.getAttribute('data-input-key');
        var val = parseInt(input.value, 10);
        if (isNaN(val) || val < 1) val = 1;
        var items = readBasket();
        var item = items.find(function (it) { return it.key === k; });
        if (item) {
          item.quantity = val;
          saveBasket(items);
          render();
        }
      }
    });

    // Clear Cart
    var clearBtn = document.getElementById('up-clear-cart-btn');
    if (clearBtn) {
      clearBtn.addEventListener('click', function () {
        if (confirm('Are you sure you want to remove all items from your cart?')) {
          saveBasket([]);
          render();
        }
      });
    }

    // Promo Code Application
    var promoForm = document.getElementById('up-promo-form');
    if (promoForm) {
      promoForm.addEventListener('submit', function (e) {
        e.preventDefault();
        var code = (document.getElementById('up-promo-input').value || '').trim();
        var notice = document.getElementById('up-promo-msg');
        if (code.toUpperCase() === 'UPRINT10' || code.toUpperCase() === 'FORWARD10') {
          appliedPromo = 'UPRINT10';
          localStorage.setItem('upActivePromo', 'UPRINT10');
          if (notice) {
            notice.textContent = '10% promotional discount applied!';
            notice.className = 'up-promo-success';
          }
          render();
        } else {
          if (notice) {
            notice.textContent = 'Invalid promo code. Try "FORWARD10".';
            notice.className = 'up-promo-error';
          }
        }
      });
    }

    // Checkout Modal Simulation
    var checkoutBtn = document.getElementById('up-checkout-btn');
    var modal = document.getElementById('up-checkout-modal');
    var closeModal = document.getElementById('up-close-modal');
    var checkoutForm = document.getElementById('up-checkout-form');

    if (checkoutBtn && modal) {
      checkoutBtn.addEventListener('click', function () {
        var items = readBasket();
        if (!items.length) {
          alert('Your cart is empty. Please add items to proceed.');
          return;
        }
        var fin = getCartFinancials(items, appliedPromo);
        var modalTotal = document.getElementById('up-modal-total');
        if (modalTotal) modalTotal.textContent = 'TZS ' + fin.totalTzs.toLocaleString() + ' ($' + fin.total.toFixed(2) + ')';
        modal.style.display = 'flex';
      });
    }

    if (closeModal && modal) {
      closeModal.addEventListener('click', function () {
        modal.style.display = 'none';
      });
    }

    window.addEventListener('click', function (e) {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });

    if (checkoutForm) {
      checkoutForm.addEventListener('submit', function (e) {
        e.preventDefault();
        var fd = new FormData(checkoutForm);
        var name = fd.get('fullname') || 'Customer';
        var phone = fd.get('phone') || '';
        var address = fd.get('address') || '';
        var city = fd.get('city') || 'Dar es Salaam';
        var orderId = 'FF-' + Math.floor(100000 + Math.random() * 900000);

        var items = readBasket();
        var fin = getCartFinancials(items, appliedPromo);

        // Build itemized WhatsApp message
        var msgLines = [
          '*NEW ORDER FROM FORWARD FORCE WEBSITE*',
          'Order ID: ' + orderId,
          'Name: ' + name,
          'Phone: ' + phone,
          'Delivery Address: ' + address + (city ? (', ' + city) : ''),
          '',
          '*ORDER ITEMS:*'
        ];

        items.forEach(function (it, idx) {
          var unitTzs = it.priceTzs || (it.unitPrice ? it.unitPrice * 2500 : 38000);
          var lineTzs = (unitTzs * it.quantity).toLocaleString();
          msgLines.push((idx + 1) + '. ' + it.title + ' (Qty: ' + it.quantity + ') - TZS ' + lineTzs);
        });

        msgLines.push('');
        msgLines.push('*Total Amount:* TZS ' + fin.totalTzs.toLocaleString() + ' ($' + fin.total.toFixed(2) + ' USD)');
        if (appliedPromo) {
          msgLines.push('Promo Applied: ' + appliedPromo);
        }
        msgLines.push('');
        msgLines.push('Please confirm artwork and production timeline.');

        var waUrl = 'https://wa.me/255710217583?text=' + encodeURIComponent(msgLines.join('\n'));

        // Clear cart
        saveBasket([]);
        localStorage.removeItem('upActivePromo');

        // Show confirmation view
        document.getElementById('up-checkout-fields').style.display = 'none';
        var conf = document.getElementById('up-order-confirmation');
        conf.style.display = 'block';
        document.getElementById('up-conf-order-id').textContent = orderId;
        
        var waBtn = document.getElementById('up-wa-direct-btn');
        if (waBtn) {
          waBtn.href = waUrl;
        }

        // Open WhatsApp in new tab automatically
        window.open(waUrl, '_blank');
      });
    }
  }

})();
