(function () {
  var path    = window.location.pathname;
  var section = path.replace(/^\//, '').split('/')[0];

  var nav = [
    {
      id: 'thai-drivers-license', label: "Thai Driver's License",
      items: [
        { label: 'Do I Need a Thai License?',       href: '/thai-drivers-license/do-i-need-a-thai-license' },
        { label: 'Eligibility & Requirements',      href: '/thai-drivers-license/eligibility-and-requirements' },
        { label: 'Required Documents',              href: '/thai-drivers-license/required-documents' },
        { label: 'The Application Process',         href: '/thai-drivers-license/application-process' },
        { divider: true },
        { group: 'The Tests' },
        { label: 'The Theory Test',                 href: '/thai-drivers-license/theory-test' },
        { label: 'The Practical Driving Test',      href: '/thai-drivers-license/practical-test' },
        { label: 'Theory Test Practice',            href: '/thai-drivers-license/theory-test-practice' },
        { divider: true },
        { label: 'Renewing Your License',           href: '/thai-drivers-license/renewing-your-license' },
        { label: 'International Driving Permit',    href: '/thai-drivers-license/international-driving-permit' },
        { label: 'License Assistance Services',     href: '/thai-drivers-license/license-assistance-services' }
      ]
    },
    {
      id: 'renting-a-bike', label: 'Renting a Bike',
      items: [
        { group: 'Rental Shops' },
        { label: 'North Thailand',              href: '/renting-a-bike/rental-shops-north' },
        { label: 'Bangkok & Central',           href: '/renting-a-bike/rental-shops-central' },
        { label: 'South Thailand',              href: '/renting-a-bike/rental-shops-south' },
        { divider: true },
        { group: 'Choosing & Learning' },
        { label: 'Choosing the Right Bike',     href: '/renting-a-bike/choosing-the-right-bike' },
        { label: 'Learning How to Ride',        href: '/renting-a-bike/learning-how-to-ride' },
        { label: 'Scooters in the Mountains',   href: '/renting-a-bike/scooters-in-the-mountains' },
        { divider: true },
        { group: 'Before You Sign' },
        { label: 'Pre-Rental Inspection',       href: '/renting-a-bike/pre-rental-inspection-guide' },
        { label: 'Deposit & Damage Policies',   href: '/renting-a-bike/deposit-and-damage-policies' },
        { label: 'Home Country Licence',        href: '/renting-a-bike/home-country-license' },
        { label: 'What Happens if I Crash?',    href: '/renting-a-bike/what-happens-if-i-crash' },
        { label: 'Rental Bike Across Borders',  href: '/renting-a-bike/rental-bike-across-borders' }
      ]
    },
    {
      id: 'bikes-and-gear', label: 'Buying a Bike & Gear',
      items: [
        { label: 'Popular Bikes in Thailand',       href: '/bikes-and-gear/popular-bikes-in-thailand' },
        { label: 'Gear for the Thai Climate',       href: '/bikes-and-gear/gear-for-the-thai-climate' },
        { label: 'Where to Buy Gear',               href: '/bikes-and-gear/where-to-buy-gear' },
        { label: 'Common Repairs & Breakdowns',     href: '/bikes-and-gear/common-repairs-breakdowns' }
      ]
    },
    {
      id: 'community-and-culture', label: 'Bike Events & Culture',
      items: [
        { label: 'Riding Clubs & Group Rides',  href: '/community-and-culture/riding-clubs-group-rides' },
        { label: 'Events & Festivals',          href: '/community-and-culture/events-and-festivals' },
        { label: 'Road Etiquette',              href: '/community-and-culture/road-etiquette' }
      ]
    },
    {
      id: 'routes', label: 'Tour Routes',
      items: [
        { label: 'The Mae Hong Son Loop — Thailand\'s Greatest Motorbike Route',  href: '/routes/mae-hong-son-loop' },
        { label: 'The Nan Loop — Northern Thailand\'s Hidden Riding Route',       href: '/routes/nan-loop' },
        { label: 'The Golden Triangle Loop — Riding to the Top of Thailand',      href: '/routes/golden-triangle-loop' },
        { label: 'The Beach Run — Phuket, Krabi & Koh Samui',                    href: '/routes/the-beach-run' },
        { label: 'River Kwai Route — Bangkok & Kanchanaburi',                    href: '/routes/river-kwai-route' },
        { label: 'East Coast Ride — Bangkok, Pattaya & Koh Chang',               href: '/routes/east-coast-bangkok-pattaya-koh-chang' },
        { label: 'The Gulf Coast Run — Bangkok to Hua Hin',                      href: '/routes/gulf-coast-run' }
      ]
    },
    {
      id: 'weather', label: 'Weather by Region',
      items: [
        { label: 'Northern Thailand',                       href: '/weather/north' },
        { label: 'Northeast Thailand — Isan',               href: '/weather/northeast' },
        { label: 'Central Thailand',                        href: '/weather/central' },
        { label: 'West Coast — Phuket & Krabi',             href: '/weather/west-coast' },
        { label: 'Gulf Coast — Koh Samui & Koh Chang',      href: '/weather/gulf-coast' }
      ]
    },
    {
      id: 'safety-and-laws', label: 'Safety & Laws',
      items: [
        { label: 'Thai Traffic Laws',           href: '/safety-and-laws/thai-traffic-laws' },
        { label: 'Licensing Requirements',      href: '/safety-and-laws/licensing-requirements' },
        { label: 'Helmet Laws',                 href: '/safety-and-laws/helmet-laws' },
        { label: 'What to Do in an Accident',   href: '/safety-and-laws/what-to-do-in-an-accident' },
        { label: 'Insurance Options',           href: '/safety-and-laws/insurance-options' },
        { label: 'Emergency Contacts',          href: '/safety-and-laws/emergency-contacts' }
      ]
    }
  ];

  /* ── Inject a <style> block so dropdown works independent of Tailwind build ── */
  var style = document.createElement('style');
  style.textContent = [
    '#desktop-nav { display:flex; align-items:center; gap:4px; }',
    '.tmr-nav-item { position:relative; }',
    '.tmr-nav-link { display:flex; align-items:center; gap:4px; padding:6px 10px; font-size:14px; font-weight:500; color:#2C2C2C; text-decoration:none; border-radius:4px; white-space:nowrap; transition:color .15s; }',
    '.tmr-nav-link:hover { color:#2D5016; }',
    '.tmr-nav-link.active { color:#2D5016; font-weight:700; border-bottom:2px solid #2D5016; border-radius:0; }',
    '.tmr-nav-link svg { width:12px; height:12px; opacity:.5; }',
    '.tmr-dropdown { display:none; position:absolute; top:100%; left:0; margin-top:6px; background:#fff; border:1px solid #e5e7eb; border-radius:8px; box-shadow:0 10px 30px rgba(0,0,0,.12); min-width:230px; padding:6px 0; z-index:200; }',
    '.tmr-dropdown.open { display:block; }',
    '.tmr-dropdown a { display:block; padding:9px 16px; font-size:13px; color:#2C2C2C; text-decoration:none; white-space:nowrap; transition:background .1s,color .1s; }',
    '.tmr-dropdown a:hover { background:#EDEDEA; color:#2D5016; }',
    '.tmr-dropdown hr { margin:4px 0; border:none; border-top:1px solid #f0f0f0; }',
    '.tmr-dropdown .tmr-group-label { padding:8px 16px 3px; font-size:10px; font-weight:700; color:#9ca3af; text-transform:uppercase; letter-spacing:.08em; }'
  ].join('\n');
  document.head.appendChild(style);

  /* ── Replace text logo with image ── */
  function replaceLogo() {
    var logoLink = document.querySelector('header a[href="/"]');
    if (logoLink) {
      logoLink.innerHTML = '<img src="/images/logo.webp" alt="Thailand Motorbike Riders" style="height:44px;width:auto;display:block;">';
      logoLink.style.cssText = 'display:block;line-height:0;';
    }
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', replaceLogo);
  } else {
    replaceLogo();
  }

  /* ── Build desktop nav ── */
  var desktopEl = document.getElementById('desktop-nav');
  if (desktopEl) {
    desktopEl.innerHTML = '';
    nav.forEach(function (s) {
      /* wrapper */
      var wrap = document.createElement('div');
      wrap.className = 'tmr-nav-item';

      /* top-level link */
      var link = document.createElement('a');
      link.href = '/' + s.id;
      link.className = 'tmr-nav-link' + (section === s.id ? ' active' : '');
      link.innerHTML = s.label +
        '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>';

      /* dropdown panel */
      var drop = document.createElement('div');
      drop.className = 'tmr-dropdown';

      s.items.forEach(function (item) {
        if (item.divider) {
          drop.appendChild(document.createElement('hr'));
        } else if (item.group) {
          var g = document.createElement('div');
          g.className = 'tmr-group-label';
          g.textContent = item.group;
          drop.appendChild(g);
        } else {
          var a = document.createElement('a');
          a.href  = item.href;
          a.textContent = item.label;
          drop.appendChild(a);
        }
      });

      wrap.appendChild(link);
      wrap.appendChild(drop);
      desktopEl.appendChild(wrap);

      /* hover logic */
      var timer;
      wrap.addEventListener('mouseenter', function () {
        clearTimeout(timer);
        drop.classList.add('open');
      });
      wrap.addEventListener('mouseleave', function () {
        timer = setTimeout(function () { drop.classList.remove('open'); }, 120);
      });
    });
  }

  /* ── Build mobile nav ── */
  var mobileEl = document.getElementById('mobile-nav');
  if (mobileEl) {
    mobileEl.innerHTML = '';
    nav.forEach(function (s) {
      var section_wrap = document.createElement('div');
      section_wrap.style.cssText = 'border-bottom:1px solid #f3f4f6;';

      var topLink = document.createElement('a');
      topLink.href = '/' + s.id;
      topLink.style.cssText = 'display:block;padding:10px 0;font-weight:' + (section === s.id ? '700' : '500') + ';color:' + (section === s.id ? '#2D5016' : '#2C2C2C') + ';text-decoration:none;';
      topLink.textContent = s.label;

      var subWrap = document.createElement('div');
      subWrap.style.cssText = 'padding-left:12px;padding-bottom:8px;';

      s.items.forEach(function (item) {
        if (!item.divider && !item.group) {
          var a = document.createElement('a');
          a.href = item.href;
          a.style.cssText = 'display:block;padding:5px 0;font-size:13px;color:#555;text-decoration:none;';
          a.textContent = item.label;
          subWrap.appendChild(a);
        }
      });

      section_wrap.appendChild(topLink);
      section_wrap.appendChild(subWrap);
      mobileEl.appendChild(section_wrap);
    });
  }

})();
