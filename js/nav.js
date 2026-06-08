(function () {
  var path = window.location.pathname;
  var section = path.replace(/^\//, '').split('/')[0];

  var nav = [
    {
      id: 'renting-a-bike',
      label: 'Renting a Bike',
      items: [
        { group: 'Rental Shops' },
        { label: 'North Thailand',       href: '/renting-a-bike/rental-shops-north' },
        { label: 'Bangkok & Central',    href: '/renting-a-bike/rental-shops-central' },
        { label: 'South Thailand',       href: '/renting-a-bike/rental-shops-south' },
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
      id: 'routes',
      label: 'Routes & Destinations',
      items: [
        { label: 'Mae Hong Son Loop',                   href: '/routes/mae-hong-son-loop' },
        { label: 'Nan Loop',                            href: '/routes/nan-loop' },
        { label: 'Golden Triangle Loop',                href: '/routes/golden-triangle-loop' },
        { label: 'The Beach Run',                       href: '/routes/the-beach-run' },
        { label: 'River Kwai Route',                    href: '/routes/river-kwai-route' },
        { label: 'East Coast — Bangkok to Koh Chang',   href: '/routes/east-coast-bangkok-pattaya-koh-chang' },
        { label: 'Gulf Coast Run',                      href: '/routes/gulf-coast-run' }
      ]
    },
    {
      id: 'weather',
      label: 'Weather by Region',
      items: [
        { label: 'Northern Thailand',               href: '/weather/north' },
        { label: 'Northeast Thailand — Isan',       href: '/weather/northeast' },
        { label: 'Central Thailand',                href: '/weather/central' },
        { label: 'West Coast — Phuket & Krabi',     href: '/weather/west-coast' },
        { label: 'Gulf Coast — Koh Samui & Koh Chang', href: '/weather/gulf-coast' }
      ]
    },
    {
      id: 'safety-and-laws',
      label: 'Safety & Laws',
      items: [
        { label: 'Thai Traffic Laws',           href: '/safety-and-laws/thai-traffic-laws' },
        { label: 'Licensing Requirements',      href: '/safety-and-laws/licensing-requirements' },
        { label: 'Helmet Laws',                 href: '/safety-and-laws/helmet-laws' },
        { label: 'What to Do in an Accident',   href: '/safety-and-laws/what-to-do-in-an-accident' },
        { label: 'Insurance Options',           href: '/safety-and-laws/insurance-options' },
        { label: 'Emergency Contacts',          href: '/safety-and-laws/emergency-contacts' }
      ]
    },
    {
      id: 'bikes-and-gear',
      label: 'Bikes & Gear',
      items: [
        { label: 'Popular Bikes in Thailand',       href: '/bikes-and-gear/popular-bikes-in-thailand' },
        { label: 'Gear for the Thai Climate',       href: '/bikes-and-gear/gear-for-the-thai-climate' },
        { label: 'Where to Buy Gear',               href: '/bikes-and-gear/where-to-buy-gear' },
        { label: 'Common Repairs & Breakdowns',     href: '/bikes-and-gear/common-repairs-breakdowns' }
      ]
    },
    {
      id: 'community-and-culture',
      label: 'Community & Culture',
      items: [
        { label: 'Riding Clubs & Group Rides',  href: '/community-and-culture/riding-clubs-group-rides' },
        { label: 'Events & Festivals',          href: '/community-and-culture/events-and-festivals' },
        { label: 'Road Etiquette',              href: '/community-and-culture/road-etiquette' }
      ]
    }
  ];

  /* ── Desktop dropdown nav ───────────────────────────────────── */
  var desktopEl = document.getElementById('desktop-nav');
  if (desktopEl) {
    var dHtml = '';
    nav.forEach(function (s) {
      var active = section === s.id;
      var linkCls = active
        ? 'text-[#2D5016] font-semibold text-sm border-b-2 border-[#2D5016]'
        : 'text-[#2C2C2C] hover:text-[#2D5016] font-medium text-sm transition-colors';

      var dropItems = '';
      s.items.forEach(function (i) {
        if (i.divider) {
          dropItems += '<hr class="my-1 border-gray-100">';
        } else if (i.group) {
          dropItems += '<p class="px-4 pt-3 pb-1 text-[10px] font-semibold text-gray-400 uppercase tracking-widest">' + i.group + '</p>';
        } else {
          dropItems += '<a href="' + i.href + '" class="block px-4 py-2 text-sm text-[#2C2C2C] hover:bg-[#EDEDEA] hover:text-[#2D5016] transition-colors">' + i.label + '</a>';
        }
      });

      dHtml +=
        '<div class="relative group">' +
          '<a href="/' + s.id + '" class="flex items-center gap-1 ' + linkCls + '">' +
            s.label +
            '<svg class="w-3 h-3 mt-0.5 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">' +
              '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/>' +
            '</svg>' +
          '</a>' +
          '<div class="nav-dropdown">' +
            dropItems +
          '</div>' +
        '</div>';
    });
    desktopEl.innerHTML = dHtml;
  }

  /* ── Mobile nav ─────────────────────────────────────────────── */
  var mobileEl = document.getElementById('mobile-nav');
  if (mobileEl) {
    var mHtml = '';
    nav.forEach(function (s) {
      var active = section === s.id;
      var linkCls = active ? 'text-[#2D5016] font-semibold' : 'text-[#2C2C2C] font-medium';

      var subItems = '';
      s.items.forEach(function (i) {
        if (!i.divider && !i.group) {
          subItems += '<a href="' + i.href + '" class="block py-1.5 text-sm text-[#2C2C2C]/70 hover:text-[#2D5016] transition-colors">' + i.label + '</a>';
        }
      });

      mHtml +=
        '<div class="border-b border-gray-100 last:border-0">' +
          '<a href="/' + s.id + '" class="' + linkCls + ' block py-2">' + s.label + '</a>' +
          '<div class="pl-3 pb-2 flex flex-col">' + subItems + '</div>' +
        '</div>';
    });
    mobileEl.innerHTML = mHtml;
  }
})();
