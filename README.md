# Forward Force Co. Ltd website

Professional printing and branding services in Kijitonyama, Dar es Salaam. The website presents Forward Force's DTF printing, embroidery, corporate branding, custom products, and project inquiry options.

## Run locally

Serve this folder with any static web server and open `index.html`. Product browsing, search, and the quote basket use the browser; project inquiries are sent through WhatsApp or email.

## Search indexing

`sitemap.xml` lists the public site pages, and `robots.txt` points crawlers to the sitemap. After deploying, submit `https://www.forwardforce.co.tz/sitemap.xml` in Google Search Console.

## Main pages

- `index.html` - homepage and featured products
- `services.html` - printing and branding services
- `products.html` - product catalog and search
- `product-details.html` - product customization
- `cart.html` - quote basket and order inquiry
- `about.html` - company profile
- `contact.html` - phone, email, WhatsApp, and project inquiry form
- `faq.html` - help and frequently asked questions
- `resellers.html` - reseller programme and application form
- `templates.html` - artwork guidelines, product sizes, template requests
- `blog.html` - printing and branding guides

## Forms (newsletter, resellers, templates)

All forms marked `data-ff-form` are sent by `assets/js/ff-forms.js` through
FormSubmit (https://formsubmit.co) to **info@forwardforce.co.tz**. No server code is needed.

One-time setup: after the site is online, submit any form once. FormSubmit emails an
"Activate Form" link to info@forwardforce.co.tz. Click it, and every later submission is delivered.

## Contact

Phone / WhatsApp: +255 710 217 583  
Email: info@forwardforce.co.tz  
Location: Kijitonyama, Dar es Salaam, Tanzania
