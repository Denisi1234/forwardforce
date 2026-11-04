/*!
 * Forward Force - real form delivery (newsletter, samples, resellers, etc.)
 *
 * Any <form data-ff-form="..."> on the site is submitted by AJAX to
 * FormSubmit (https://formsubmit.co), which emails every submission to
 * the company inbox below. No backend/PHP is required.
 *
 * ONE-TIME SETUP: the very first submission makes FormSubmit send an
 * "Activate Form" email to FF_INBOX. Click that link once and all later
 * submissions are delivered automatically.
 */
(function () {
  'use strict';

  var FF_INBOX = 'info@forwardforce.co.tz';
  var ENDPOINT = 'https://formsubmit.co/ajax/' + FF_INBOX;
  var WHATSAPP = 'https://wa.me/255710217583';

  var SUBJECTS = {
    newsletter: 'New newsletter subscriber - Forward Force website',
    samples: 'Sample kit request - Forward Force website',
    reseller: 'Reseller / agent application - Forward Force website',
    template: 'Artwork template request - Forward Force website'
  };

  var SUCCESS = {
    newsletter: 'Thank you! You are subscribed. We will email you our latest offers and product updates.',
    samples: 'Thank you! Your sample request has been sent. Our team will contact you shortly to arrange collection or delivery.',
    reseller: 'Thank you! Your application has been sent. Our team will contact you within 1-2 working days.',
    template: 'Thank you! Your template request has been sent. We will email the template to you shortly.'
  };

  function getStatusEl(form) {
    var el = form.querySelector('.ff-form-status');
    if (!el) {
      el = document.createElement('div');
      el.className = 'ff-form-status';
      el.setAttribute('role', 'status');
      el.setAttribute('aria-live', 'polite');
      // Newsletter form is flex, so place message after it.
      if (form.classList.contains('up-newsletter-form')) {
        form.parentNode.insertBefore(el, form.nextSibling);
      } else {
        form.appendChild(el);
      }
    }
    return el;
  }

  function showStatus(el, type, html) {
    el.className = 'ff-form-status show ' + type;
    el.innerHTML = html;
  }

  function formToObject(form) {
    var data = {};
    new FormData(form).forEach(function (value, key) {
      if (data[key]) {
        data[key] = data[key] + ', ' + value; // checkbox groups
      } else {
        data[key] = value;
      }
    });
    return data;
  }

  function handleSubmit(e) {
    var form = e.target.closest('form[data-ff-form]');
    if (!form) return;
    e.preventDefault();

    var type = form.getAttribute('data-ff-form');
    var status = getStatusEl(form);
    var btn = form.querySelector('[type="submit"]');
    var data = formToObject(form);

    // Honeypot: bots fill hidden "_honey" field - silently ignore.
    if (data._honey) {
      showStatus(status, 'success', SUCCESS[type] || 'Thank you!');
      form.reset();
      return;
    }

    data._subject = SUBJECTS[type] || 'New message - Forward Force website';
    data._template = 'table';
    data['Form type'] = type;
    data['Sent from page'] = window.location.href;
    if (data.email) data._replyto = data.email;

    var oldLabel = btn ? btn.innerHTML : '';
    if (btn) {
      btn.disabled = true;
      btn.innerHTML = 'SENDING...';
    }

    fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(function (res) { return res.json(); })
      .then(function (json) {
        if (json && (json.success === true || json.success === 'true')) {
          showStatus(status, 'success', SUCCESS[type] || 'Thank you! Your message has been sent.');
          form.reset();
        } else {
          throw new Error((json && json.message) || 'Submission failed');
        }
      })
      .catch(function (err) {
        if (window.console) console.warn('Forward Force form error:', err);
        showStatus(
          status,
          'error',
          'Sorry, we could not send this right now. Please email us at ' +
            '<a href="mailto:' + FF_INBOX + '">' + FF_INBOX + '</a> or ' +
            '<a href="' + WHATSAPP + '" target="_blank" rel="noopener">message us on WhatsApp</a>.'
        );
      })
      .then(function () {
        if (btn) {
          btn.disabled = false;
          btn.innerHTML = oldLabel;
        }
      });
  }

  document.addEventListener('submit', handleSubmit);
})();
