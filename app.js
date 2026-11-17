const properties = [
  {
    id: "willow-house", title: "A quieter kind of city living", type: "House", category: "House",
    location: "Indiranagar, Bengaluru", price: 28500000, mode: "Buy", beds: 4, baths: 3, area: 2480,
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80"
    ],
    description: "A leafy retreat tucked into one of Bengaluru's most loved neighbourhoods. Thoughtfully renovated interiors meet a sunlit garden, with room for slow mornings, lively dinners, and everything in between.",
    highlights: ["Private garden", "East-facing", "Recently renovated"], broker: "Ananya Rao"
  },
  {
    id: "salt-house", title: "Salt House by the water", type: "Apartment", category: "Apartment",
    location: "Reclamation, Bandra West", price: 175000, mode: "Rent", beds: 2, baths: 2, area: 1180,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80"
    ],
    description: "A calm, light-filled home just a short walk from the promenade. Natural textures, open-plan living, and a balcony that catches the evening breeze make this an easy place to settle in.",
    highlights: ["Sea-facing balcony", "Pet friendly", "Covered parking"], broker: "Kabir Mehta"
  },
  {
    id: "olive-villa", title: "Olive Grove weekend home", type: "Villa", category: "Villa",
    location: "Nandi Hills, Bengaluru", price: 42000000, mode: "Buy", beds: 3, baths: 3, area: 3100,
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80"
    ],
    description: "A warm, contemporary villa wrapped in olive trees and mountain air. Generous outdoor spaces, a quiet reading nook, and thoughtful materials bring a little more nature into every day.",
    highlights: ["Mountain views", "Private garden", "Solar powered"], broker: "Rhea Thomas"
  },
  {
    id: "green-apartment", title: "The Greenhouse apartment", type: "Apartment", category: "Apartment",
    location: "Jubilee Hills, Hyderabad", price: 12800000, mode: "Buy", beds: 3, baths: 2, area: 1640,
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Made for a slower pace, this bright apartment pairs clean, considered finishes with a canopy of green just beyond the windows. A welcoming home base close to the neighbourhood's best cafes.",
    highlights: ["Corner apartment", "Clubhouse access", "EV charging"], broker: "Vikram Shah"
  },
  {
    id: "terrace-studio", title: "A little sky above the city", type: "Studio", category: "Studio",
    location: "Koregaon Park, Pune", price: 42000, mode: "Rent", beds: 1, baths: 1, area: 680,
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80"
    ],
    description: "A well-planned city studio with a private terrace, soft afternoon light, and everything within easy reach. Smart storage and warm finishes make the most of every square foot.",
    highlights: ["Private terrace", "Furnished", "Walkable location"], broker: "Mira Kulkarni"
  },
  {
    id: "garden-row", title: "A home with room to grow", type: "Townhouse", category: "Townhouse",
    location: "Whitefield, Bengaluru", price: 19800000, mode: "Buy", beds: 3, baths: 3, area: 2050,
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80"
    ],
    description: "A welcoming townhouse with a small private garden, a bright kitchen, and flexible spaces for work or play. Quiet community living, with everyday essentials close at hand.",
    highlights: ["Private garden", "Gated community", "Home office"], broker: "Devika Nair"
  }
];

const reels = [
  { title: "A slow morning at Willow House", views: "2.4k views", image: properties[0].images[0], property: properties[0] },
  { title: "Small spaces, thoughtful living", views: "1.8k views", image: properties[4].images[0], property: properties[4] },
  { title: "The view from Olive Grove", views: "3.1k views", image: properties[2].images[0], property: properties[2] },
  { title: "A home made for golden hour", views: "980 views", image: properties[1].images[0], property: properties[1] },
  { title: "Your garden-side city escape", views: "1.2k views", image: properties[5].images[0], property: properties[5] },
  { title: "Room to breathe in Jubilee Hills", views: "760 views", image: properties[3].images[0], property: properties[3] }
];

const state = {
  page: "home",
  selectedProperty: properties[0],
  filter: "All homes",
  mode: "Buy",
  search: "",
  user: JSON.parse(localStorage.getItem("haven-user") || "null"),
  saved: JSON.parse(localStorage.getItem("haven-saved") || "[]"),
  customListings: JSON.parse(localStorage.getItem("haven-listings") || "[]"),
  messages: JSON.parse(localStorage.getItem("haven-messages") || "[]"),
  selectedReel: 0,
  formData: null,
  photoProcessing: false
};

const main = document.querySelector("#mainContent");
const modalBackdrop = document.querySelector("#modalBackdrop");
const modal = document.querySelector("#modal");
const toastElement = document.querySelector("#toast");
const categories = ["All homes", "Apartment", "House", "Villa", "Townhouse", "Studio", "Land", "Commercial"];
const categoryTypes = {
  Apartment: ["Apartment", "Penthouse", "Duplex"],
  House: ["Independent house", "Row house", "Farmhouse"],
  Villa: ["Villa", "Bungalow", "Holiday home"],
  Townhouse: ["Townhouse", "Row house"],
  Studio: ["Studio", "Loft", "Serviced apartment"],
  Land: ["Residential plot", "Agricultural land", "Commercial plot"],
  Commercial: ["Office", "Retail shop", "Warehouse", "Co-working space"]
};

function money(value, mode = "Buy") {
  if (mode === "Rent") return `₹${Number(value).toLocaleString("en-IN")}/mo`;
  if (value >= 10000000) return `₹${(value / 10000000).toFixed(value % 10000000 === 0 ? 0 : 2).replace(/\.?0+$/, "")} Cr`;
  if (value >= 100000) return `₹${(value / 100000).toFixed(value % 100000 === 0 ? 0 : 1).replace(/\.?0$/, "")} L`;
  return `₹${Number(value).toLocaleString("en-IN")}`;
}

function makeOverview(property) {
  const beds = property.beds ? `${property.beds} bedroom` : "";
  const baths = property.baths ? `${property.baths} bathroom` : "";
  const specs = [beds, baths, `${Number(property.area).toLocaleString("en-IN")} sq ft`].filter(Boolean).join(", ");
  const highlights = (property.highlights || []).slice(0, 2).map(item => item.toLowerCase());
  const highlightsText = highlights.length > 1 ? `${highlights[0]} and ${highlights[1]}` : highlights[0] || "";
  const purpose = property.mode === "Rent" ? "for rent" : "for sale";
  return `${property.type} in ${property.location}, ${purpose} at ${money(property.price, property.mode)}. ${specs ? `Featuring ${specs}, ` : ""}${highlightsText ? `with ${highlightsText}, ` : ""}and thoughtfully planned spaces.`;
}

function allProperties() {
  return [...state.customListings, ...properties];
}

function propertyCard(property) {
  const saved = state.saved.includes(property.id);
  return `<article class="property-card" data-property="${property.id}" tabindex="0" role="button" aria-label="View ${escapeHtml(property.title)}">
    <div class="property-image"><img src="${property.image}" alt="${escapeHtml(property.title)}" loading="lazy">
      <span class="tag">${property.mode === "Rent" ? "For rent" : "For sale"}</span>
      <button class="save-button ${saved ? "saved" : ""}" data-save="${property.id}" aria-label="${saved ? "Remove saved property" : "Save property"}">${saved ? "♥" : "♡"}</button>
    </div>
    <div class="property-info"><div class="property-price">${money(property.price, property.mode)} ${property.mode === "Rent" ? "" : `<span> · ${property.mode.toLowerCase()}</span>`}</div>
      <h3>${escapeHtml(property.title)}</h3><div class="property-location">⌖ &nbsp;${escapeHtml(property.location)}</div>
      <div class="property-meta"><span><strong>${property.beds}</strong> beds</span><span><strong>${property.baths}</strong> baths</span><span><strong>${Number(property.area).toLocaleString("en-IN")}</strong> sq ft</span></div>
    </div>
  </article>`;
}

function renderHome() {
  const matching = allProperties().filter(p => p.mode === state.mode)
    .filter(p => state.filter === "All homes" || p.category === state.filter || p.type === state.filter)
    .filter(p => !state.search || `${p.title} ${p.location} ${p.type}`.toLowerCase().includes(state.search.toLowerCase()));
  main.innerHTML = `<div class="page-shell">
    <section class="hero"><div class="hero-content">
      <span class="eyebrow">A better way to find home</span>
      <h1>Find a place<br>to call <em>yours.</em></h1>
      <p>Thoughtful homes, good people, and a little less searching. Your next chapter starts here.</p>
      <form class="search-box" id="searchForm">
        <label class="search-field"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 4.5 4.5"/></svg><input id="locationSearch" placeholder="City, neighbourhood, or postcode" value="${escapeHtml(state.search)}" aria-label="Search by location"></label>
        <span class="search-divider"></span>
        <select class="search-select" id="modeSelect" aria-label="Listing type"><option ${state.mode === "Buy" ? "selected" : ""}>Buy</option><option ${state.mode === "Rent" ? "selected" : ""}>Rent</option></select>
        <button class="button" type="submit">Find a home &nbsp; →</button>
      </form>
      <div class="trust-row"><div class="trust-avatars"><span>A</span><span>K</span><span>R</span><span>M</span></div><span>Good homes. Better beginnings.</span></div>
    </div></section>
    <section class="section"><div class="section-heading"><div><span class="eyebrow">A considered collection</span><h2>Find your kind of home</h2><p>Browse places that feel a little more like you.</p></div><button class="text-link" data-action="clear-search">Explore all homes &nbsp; →</button></div>
      <div class="category-row">${categories.map(c => `<button class="category-chip ${state.filter === c ? "active" : ""}" data-filter="${c}">${c}</button>`).join("")}</div>
    </section>
    <section class="section" id="homesSection"><div class="section-heading"><div><span class="eyebrow">${state.mode === "Buy" ? "Picked for you" : "Made for living"}</span><h2>${state.search ? "Homes near " + escapeHtml(state.search) : state.mode === "Buy" ? "Homes worth coming home to" : "Find your next rental"}</h2><p>${matching.length} thoughtfully selected ${matching.length === 1 ? "place" : "places"}</p></div><button class="text-link" data-action="show-all">View all &nbsp; →</button></div>
      <div class="property-grid">${matching.length ? matching.slice(0, 6).map(propertyCard).join("") : `<div class="empty-state" style="grid-column:1/-1"><div class="empty-icon">⌂</div><strong>No homes found just yet</strong><p>Try a different neighbourhood or category.</p><button class="button light small" data-action="clear-search">Clear filters</button></div>`}</div>
    </section>
    <section class="section"><div class="reel-feature"><div class="reel-preview" data-action="reel" data-reel="0"><img src="${reels[0].image}" alt="A warm, sunlit living room"><span class="play-button">▶</span><span class="reel-caption">A slow morning at Willow House · 0:28</span></div><div class="reel-copy"><span class="eyebrow">A little inspiration</span><h2>Good homes have<br>a story to tell.</h2><p>Take a peek inside the places, details, and neighbourhoods that make a house feel like home.</p><div class="reel-stats">✦ &nbsp;New stories, every week</div><button class="button" data-page="reels">Explore Haven Reels &nbsp; →</button></div></div></section>
    <section class="broker-banner"><div><span class="eyebrow" style="color:#e0c596">For the people who make it happen</span><h2>Have a home to share?</h2><p>Meet your next client with a listing that feels like you.</p></div><button class="button" data-page="dashboard" data-auth="true">Join as a broker &nbsp; →</button></section>
    <footer class="footer"><span>© 2025 Haven. Find your place.</span><span>Made for good beginnings.</span></footer>
  </div>`;
}

function renderDetails(property = state.selectedProperty) {
  state.selectedProperty = property;
  main.innerHTML = `<div class="page-shell">
    <div class="breadcrumbs"><button data-page="home">Discover</button><span>›</span><span>${escapeHtml(property.location)}</span><span>›</span><span>${escapeHtml(property.type)}</span></div>
    <div class="detail-title-row"><div><span class="eyebrow">${property.mode === "Rent" ? "A place to settle in" : "A place to make yours"}</span><h1>${escapeHtml(property.title)}</h1><p>⌖ &nbsp;${escapeHtml(property.location)}</p></div><div class="property-price">${money(property.price, property.mode)}${property.mode === "Rent" ? "" : `<span> · ${property.mode.toLowerCase()}</span>`}</div></div>
    <div class="gallery">${property.images.map((image, i) => `<img src="${image}" alt="${escapeHtml(property.title)} — photo ${i + 1}" ${i > 2 ? "loading=lazy" : ""}>`).join("")}</div>
    <div class="detail-layout"><div class="detail-main">
      <section><div class="overview-card"><span class="eyebrow">The short version</span><p>${escapeHtml(makeOverview(property))}</p></div></section>
      <section><h2>A little about this home</h2><p>${escapeHtml(property.description)}</p><p style="margin-top:11px">${(property.highlights || []).map(h => `· ${escapeHtml(h)}`).join("&nbsp;&nbsp;&nbsp;")}</p></section>
      <section><h2>Home details</h2><div class="spec-grid"><div class="spec"><strong>${property.beds}</strong><span>Bedrooms</span></div><div class="spec"><strong>${property.baths}</strong><span>Bathrooms</span></div><div class="spec"><strong>${Number(property.area).toLocaleString("en-IN")}</strong><span>Square feet</span></div><div class="spec"><strong>${escapeHtml(property.type)}</strong><span>Property type</span></div></div></section>
      <section><h2>Around the neighbourhood</h2><div class="location-card">⌖ &nbsp;${escapeHtml(property.location)}</div><p style="margin-top:11px">A lovely neighbourhood with everyday essentials and local favourites close by.</p></section>
    </div><aside class="broker-card"><span class="eyebrow">Your point of contact</span><div class="broker-profile" style="margin-top:16px"><img class="broker-photo" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&q=80" alt=""><div><h3>${escapeHtml(property.broker || "Haven Broker")}</h3><p>Verified Haven broker · ★ 4.9</p></div></div><p>Ask a question, request a viewing, or simply say hello. Your details stay private until you choose to share them.</p><button class="button full" data-action="contact-broker">Message the broker &nbsp; →</button><button class="button outline full" style="margin-top:9px" data-action="request-viewing">Request a viewing</button><div class="privacy-note">🔒 Your phone number is never shown publicly.</div></aside></div>
  </div>`;
}

function renderDashboard() {
  const listings = [...state.customListings, ...properties.slice(0, 3)];
  const total = listings.length;
  main.innerHTML = `<div class="page-shell">
    <div class="page-intro"><div><span class="eyebrow">Your Haven workspace</span><h1>Good morning, ${escapeHtml((state.user?.name || "Ananya").split(" ")[0])}.</h1><p>Here's what's happening with your properties today.</p></div><button class="button" data-page="add-property">＋ &nbsp; Add a property</button></div>
    <div class="stat-grid"><div class="stat-card"><span>Active listings</span><strong>${total}</strong><small>↑ &nbsp;2 added this month</small></div><div class="stat-card"><span>Listing views</span><strong>1,284</strong><small>↑ &nbsp;18% this week</small></div><div class="stat-card"><span>New enquiries</span><strong>${Math.max(3, state.messages.length + 3)}</strong><small>↑ &nbsp;2 need a reply</small></div><div class="stat-card"><span>Viewings booked</span><strong>4</strong><small>Next one · Today, 4:30 pm</small></div></div>
    <div class="dashboard-grid"><section class="panel"><div class="panel-heading"><h2>Your properties</h2><button class="text-link" data-action="show-all">View all →</button></div>${listings.slice(0, 4).map(p => `<div class="listing-row"><img src="${p.image}" alt=""><div class="listing-row-copy"><strong>${escapeHtml(p.title)}</strong><small>${escapeHtml(p.location)} · ${p.beds} beds</small></div><span class="listing-price">${money(p.price, p.mode)}</span><span class="status">Live</span></div>`).join("")}</section>
      <section class="panel"><div class="panel-heading"><h2>Recent activity</h2><button class="text-link" data-page="messages">All messages →</button></div>
        <div class="activity"><span class="activity-icon">✉</span><div><strong>Priya asked about Willow House</strong><p>“Is the garden pet-friendly?”</p></div><time>12 min</time></div>
        <div class="activity"><span class="activity-icon">⌖</span><div><strong>Viewing confirmed</strong><p>Salt House · Today at 4:30 pm</p></div><time>1 hr</time></div>
        <div class="activity"><span class="activity-icon">♡</span><div><strong>Your listing was saved</strong><p>Willow House · Indiranagar</p></div><time>3 hr</time></div>
        <div class="activity"><span class="activity-icon">✉</span><div><strong>Arjun sent you a message</strong><p>About the weekend viewing</p></div><time>Yesterday</time></div>
      </section></div>
  </div>`;
}

function renderAddProperty() {
  const d = state.formData || {};
  const categoriesForForm = ["Apartment", "House", "Villa", "Townhouse", "Studio", "Land", "Commercial"];
  main.innerHTML = `<div class="page-shell">
    <div class="breadcrumbs"><button data-page="dashboard">Your workspace</button><span>›</span><span>Add a property</span></div>
    <div class="page-intro"><div><span class="eyebrow">A home worth sharing</span><h1>Tell us about your place.</h1><p>A few thoughtful details help the right person find their way home.</p></div><div class="step-indicator"><span class="step-dot">1</span> &nbsp; Listing details &nbsp; — &nbsp; 2 Preview</div></div>
    <div class="form-layout"><form class="form-card" id="propertyForm">
      <div class="form-section"><h2>Let's start with the basics</h2><p>What kind of home are we helping someone find?</p>
        <div class="field-grid">
          <div class="field wide"><label>I'm looking to</label><div class="radio-row"><label class="radio-option"><input type="radio" name="mode" value="Buy" ${d.mode !== "Rent" ? "checked" : ""}> Sell my property</label><label class="radio-option"><input type="radio" name="mode" value="Rent" ${d.mode === "Rent" ? "checked" : ""}> Rent my property</label></div></div>
          <div class="field"><label for="propertyCategory">Property category *</label><select name="category" id="propertyCategory" required><option value="">Choose a category</option>${categoriesForForm.map(c => `<option ${d.category === c ? "selected" : ""}>${c}</option>`).join("")}</select></div>
          <div class="field"><label for="propertyType">Property type *</label><select name="type" id="propertyType" required><option value="">Select category first</option></select></div>
          <div class="field wide"><label for="propertyTitle">Listing title *</label><input id="propertyTitle" name="title" required maxlength="70" placeholder="Give your home a lovely name" value="${escapeHtml(d.title || "")}"></div>
        </div>
      </div>
      <div class="form-section"><h2>Where it feels like home</h2><p>Your exact address stays private until you decide to share it.</p><div class="field-grid">
        <div class="field wide"><label for="address">Street address *</label><input id="address" name="address" required placeholder="Building, street, locality" value="${escapeHtml(d.address || "")}"></div>
        <div class="field"><label for="city">City *</label><input id="city" name="city" required placeholder="e.g. Bengaluru" value="${escapeHtml(d.city || "")}"></div>
        <div class="field"><label for="pin">PIN code</label><input id="pin" name="pin" inputmode="numeric" placeholder="6-digit PIN code" value="${escapeHtml(d.pin || "")}"></div>
      </div></div>
      <div class="form-section"><h2>The little details</h2><p>Help people imagine their everyday here.</p><div class="field-grid">
        <div class="field"><label for="beds">Bedrooms *</label><select id="beds" name="beds" required>${[1,2,3,4,5,6].map(n => `<option value="${n}" ${Number(d.beds || 2) === n ? "selected" : ""}>${n}${n === 6 ? "+" : ""} bedroom${n > 1 ? "s" : ""}</option>`).join("")}</select></div>
        <div class="field"><label for="baths">Bathrooms *</label><select id="baths" name="baths" required>${[1,2,3,4,5].map(n => `<option value="${n}" ${Number(d.baths || 2) === n ? "selected" : ""}>${n}${n === 5 ? "+" : ""} bathroom${n > 1 ? "s" : ""}</option>`).join("")}</select></div>
        <div class="field"><label for="area">Area (sq ft) *</label><input id="area" type="number" min="1" name="area" required placeholder="e.g. 1,250" value="${escapeHtml(d.area || "")}"></div>
        <div class="field"><label for="price">Price (₹) *</label><input id="price" type="number" min="1" name="price" required placeholder="Your asking price" value="${escapeHtml(d.price || "")}"></div>
        <div class="field wide"><label for="description">Description *</label><textarea id="description" name="description" required minlength="20" placeholder="Tell us what makes this place special...">${escapeHtml(d.description || "")}</textarea></div>
        <div class="field wide"><label for="highlights">Standout features</label><input id="highlights" name="highlights" placeholder="e.g. Private garden, east-facing, pet friendly" value="${escapeHtml(d.highlights || "")}"></div>
      </div></div>
      <div class="form-section"><h2>Show them around</h2><p>Listings with photos help people picture life there. Add at least one photo.</p>
        <label class="upload-area" for="photoUpload"><strong>＋ &nbsp; Add photos</strong><p>Choose image files from your device (up to 8)</p><input id="photoUpload" type="file" accept="image/*" multiple><div class="upload-previews" id="uploadPreviews"></div></label>
      </div>
      <div class="form-actions"><span class="muted" style="font-size:10px">🔒 Your contact details are never public.</span><button class="button" type="submit">Preview your listing &nbsp; →</button></div>
    </form>
    <aside class="form-aside"><div class="aside-card"><span class="eyebrow">A little reassurance</span><h3>Your details, your choice.</h3><p>Your private address and contact information are never published. Interested people will reach you through Haven messages.</p></div><div class="aside-card"><h3>Listing categories</h3><p>Choose the closest fit for your home. Available types:</p><ul>${Object.entries(categoryTypes).map(([category, types]) => `<li><strong>${category}:</strong> ${types.join(", ")}</li>`).join("")}</ul></div></aside></div>
  </div>`;
  updateTypeOptions(d.type || "");
  if (d.photoUrls) showPhotoPreviews(d.photoUrls);
}

function renderPreview(data) {
  const image = data.photoUrls?.[0] || properties[0].image;
  const property = {
    ...data, id: "preview", category: data.category, image,
    location: `${data.city}${data.pin ? ` · ${data.pin}` : ""}`,
    mode: data.mode, highlights: data.highlights.split(",").map(x => x.trim()).filter(Boolean)
  };
  main.innerHTML = `<div class="page-shell">
    <div class="breadcrumbs"><button data-page="add-property">Edit listing</button><span>›</span><span>Preview</span></div>
    <div class="page-intro"><div><span class="eyebrow">One last look</span><h1>Looking good.</h1><p>Review your listing as it will appear to people looking for a home.</p></div><div class="step-indicator"><span class="step-dot">✓</span> &nbsp; Listing details &nbsp; — &nbsp; <span class="step-dot">2</span> Preview</div></div>
    <div class="preview-notice">This is a private preview. Your listing won't be visible until you publish it.</div>
    <div class="preview-card"><div class="property-image" style="height:310px"><img src="${image}" alt="${escapeHtml(data.title)}"><span class="tag">${data.mode === "Rent" ? "For rent" : "For sale"}</span></div>
      <div style="padding-top:20px"><div class="detail-title-row"><div><span class="eyebrow">${escapeHtml(data.type)}</span><h1 style="font-size:30px">${escapeHtml(data.title)}</h1><p>⌖ &nbsp;${escapeHtml(data.address)}, ${escapeHtml(data.city)}</p></div><div class="property-price">${money(data.price, data.mode)}</div></div>
      <div class="overview-card"><span class="eyebrow">Your property overview</span><p>${escapeHtml(makeOverview(property))}</p></div>
      <div class="spec-grid" style="margin-top:20px"><div class="spec"><strong>${data.beds}</strong><span>Bedrooms</span></div><div class="spec"><strong>${data.baths}</strong><span>Bathrooms</span></div><div class="spec"><strong>${Number(data.area).toLocaleString("en-IN")}</strong><span>Square feet</span></div><div class="spec"><strong>${escapeHtml(data.type)}</strong><span>Property type</span></div></div>
      <section style="padding-top:24px"><h2 style="font-size:18px">About this home</h2><p class="muted" style="font-size:12px;line-height:1.8">${escapeHtml(data.description)}</p></section>
      ${data.photoUrls?.length ? `<div class="upload-previews">${data.photoUrls.map(url => `<img src="${url}" alt="Listing photo">`).join("")}</div>` : ""}
      </div></div>
    <div class="form-actions" style="margin-top:20px"><button class="button outline" data-page="add-property">← &nbsp; Back to edit</button><button class="button" data-action="publish">Publish your listing &nbsp; →</button></div>
  </div>`;
}

function renderMessages() {
  const received = [
    { name: "Priya Sharma", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80", property: "Willow House" },
    { name: "Arjun Kapoor", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80", property: "Salt House" },
    { name: "Maya Iyer", image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=100&q=80", property: "Olive Grove" }
  ];
  const active = received[0];
  const persisted = state.messages;
  const messages = [
    { text: "Hello! I came across Willow House and it looks lovely. Is the garden pet-friendly?", mine: false, time: "10:42 am" },
    { text: "Hi Priya, thank you! Yes, the garden is fully enclosed and very pet-friendly.", mine: true, time: "10:49 am" },
    { text: "That's wonderful. Could I arrange a viewing this weekend?", mine: false, time: "10:51 am" },
    ...persisted.map(text => ({ text, mine: true, time: "Just now" }))
  ];
  main.innerHTML = `<div class="page-shell"><div class="page-intro"><div><span class="eyebrow">A better way to connect</span><h1>Your messages.</h1><p>Good conversations make finding home a little easier.</p></div></div>
    <div class="inbox-layout"><aside class="thread-list"><h2>Inbox <span class="muted" style="font-size:11px">(${received.length})</span></h2>${received.map((m, i) => `<div class="thread-item ${i === 0 ? "active" : ""}" data-thread="${i}"><img src="${m.image}" alt=""><div><strong>${m.name}</strong><small>${m.property} · New message</small></div></div>`).join("")}</aside>
    <section class="chat-panel"><div class="chat-header"><img src="${active.image}" alt=""><div><strong>${active.name}</strong><small>Interested in ${active.property} · Haven member</small></div></div>
    <div class="chat-messages" id="chatMessages">${messages.map(m => `<div class="message ${m.mine ? "mine" : ""}">${escapeHtml(m.text)}<time>${m.time}</time></div>`).join("")}</div>
    <form class="message-compose" id="messageForm"><input name="message" placeholder="Write a thoughtful reply..." aria-label="Message" required><button aria-label="Send message">→</button></form></section></div>
    <p class="privacy-note" style="text-align:left">🔒 Haven keeps your personal phone number private. Keep conversations and viewing arrangements right here.</p>
  </div>`;
}

function renderReels() {
  main.innerHTML = `<div class="page-shell"><div class="page-intro"><div><span class="eyebrow">Places with personality</span><h1>A little home inspiration.</h1><p>Short stories from the places and people that make a neighbourhood.</p></div></div>
    <div class="reels-grid">${reels.map((reel, i) => `<article class="reel-card" data-action="reel" data-reel="${i}" tabindex="0"><img src="${reel.image}" alt="${escapeHtml(reel.title)}" loading="lazy"><span class="play-button">▶</span><div class="reel-card-copy"><strong>${escapeHtml(reel.title)}</strong><span>◉ &nbsp;${reel.views} &nbsp; · &nbsp; 0:${i % 2 ? "34" : "28"}</span></div></article>`).join("")}</div>
    <section class="broker-banner"><div><span class="eyebrow" style="color:#e0c596">Have a story worth sharing?</span><h2>Put your property in the spotlight.</h2><p>Create a listing and share what makes your place special.</p></div><button class="button" data-page="add-property" data-auth="true">Share a property &nbsp; →</button></section>
  </div>`;
}

function render() {
  document.querySelectorAll("[data-page]").forEach(el => {
    el.classList.toggle("active", el.dataset.page === state.page);
  });
  if (state.page === "home") renderHome();
  else if (state.page === "details") renderDetails(state.selectedProperty);
  else if (state.page === "dashboard") renderDashboard();
  else if (state.page === "add-property") renderAddProperty();
  else if (state.page === "preview") renderPreview(state.formData);
  else if (state.page === "messages") renderMessages();
  else if (state.page === "reels") renderReels();
  document.querySelector("#accountButton").textContent = state.user ? initials(state.user.name) : "↗";
  document.querySelector("#accountButton").setAttribute("aria-label", state.user ? `Account: ${state.user.name}` : "Sign in");
}

function initials(name = "Haven user") {
  return name.split(/\s+/).slice(0, 2).map(part => part[0] || "").join("").toUpperCase();
}

function escapeHtml(value = "") {
  return String(value).replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
}

function toast(message) {
  toastElement.textContent = message;
  toastElement.classList.add("show");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => toastElement.classList.remove("show"), 2600);
}

function navigate(page) {
  if (["dashboard", "messages", "add-property", "preview"].includes(page) && !state.user) {
    state.pendingPage = page;
    openAuth();
    return;
  }
  if (!modalBackdrop.hidden) closeModal();
  state.page = page;
  document.querySelector(".main-nav").classList.remove("open");
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openAuth(isRegister = false) {
  modalBackdrop.hidden = false;
  renderAuthModal(isRegister);
  setTimeout(() => modal.querySelector("input")?.focus(), 0);
}

function renderAuthModal(register = false) {
  modal.innerHTML = `<button class="modal-close" aria-label="Close dialog">×</button><span class="eyebrow">${register ? "Make yourself at home" : "Welcome to Haven"}</span>
    <h2 id="modalTitle">${register ? "Let's get to know you." : "Good to see you."}</h2>
    <p>${register ? "Create your account to save places, message brokers, and make your next move." : "Sign in to save homes, message brokers, and manage your listings."}</p>
    <form id="authForm">${register ? `<div class="field"><label for="authName">Your name</label><input id="authName" name="name" autocomplete="name" placeholder="e.g. Aanya Mehta" required></div>` : ""}
      <div class="field"><label for="authEmail">Email address</label><input id="authEmail" name="email" type="email" autocomplete="email" placeholder="you@example.com" required></div>
      <div class="field"><label for="authPassword">Password</label><input id="authPassword" name="password" type="password" autocomplete="${register ? "new-password" : "current-password"}" minlength="4" placeholder="At least 4 characters" required></div>
      <button class="button full" type="submit">${register ? "Create my account" : "Sign in"} &nbsp; →</button>
    </form><p class="auth-note">This frontend demo stores sign-in details only in this browser.</p>
    <div class="modal-switch">${register ? "Already have an account?" : "New to Haven?"} <button data-action="toggle-auth">${register ? "Sign in" : "Create an account"}</button></div>`;
}

function closeModal() {
  modalBackdrop.hidden = true;
  modal.innerHTML = "";
}

function updateTypeOptions(selected = "") {
  const category = document.querySelector("#propertyCategory")?.value;
  const typeSelect = document.querySelector("#propertyType");
  if (!typeSelect) return;
  const options = categoryTypes[category] || [];
  typeSelect.innerHTML = `<option value="">${options.length ? "Choose a type" : "Select category first"}</option>${options.map(t => `<option ${selected === t ? "selected" : ""}>${t}</option>`).join("")}`;
}

function showPhotoPreviews(urls) {
  const container = document.querySelector("#uploadPreviews");
  if (container) container.innerHTML = urls.map(url => `<img src="${url}" alt="Selected property photo">`).join("");
}

function optimizeImage(file) {
  return new Promise((resolve, reject) => {
    if (file.size > 12 * 1024 * 1024) {
      reject(new Error(`${file.name} is larger than 12 MB.`));
      return;
    }
    const source = URL.createObjectURL(file);
    const image = new Image();
    image.onload = () => {
      const scale = Math.min(1, 1400 / Math.max(image.naturalWidth, image.naturalHeight));
      const canvas = document.createElement("canvas");
      canvas.width = Math.max(1, Math.round(image.naturalWidth * scale));
      canvas.height = Math.max(1, Math.round(image.naturalHeight * scale));
      const context = canvas.getContext("2d");
      if (!context) {
        URL.revokeObjectURL(source);
        reject(new Error("Your browser couldn't prepare this photo."));
        return;
      }
      context.fillStyle = "#fff";
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.drawImage(image, 0, 0, canvas.width, canvas.height);
      URL.revokeObjectURL(source);
      resolve(canvas.toDataURL("image/jpeg", 0.82));
    };
    image.onerror = () => {
      URL.revokeObjectURL(source);
      reject(new Error(`${file.name} couldn't be opened as an image.`));
    };
    image.src = source;
  });
}

function getListingData(form) {
  const data = Object.fromEntries(new FormData(form).entries());
  data.mode = new FormData(form).get("mode") || "Buy";
  data.price = Number(data.price);
  data.area = Number(data.area);
  data.beds = Number(data.beds);
  data.baths = Number(data.baths);
  data.category = data.category;
  data.photoUrls = state.formData?.photoUrls || [];
  return data;
}

function publishListing() {
  const data = state.formData;
  const slug = (data.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "haven-home") + "-" + Date.now().toString(36);
  const listing = {
    ...data, id: slug, broker: state.user?.name || "Haven Broker",
    image: data.photoUrls?.[0] || properties[0].image,
    location: `${data.city}${data.pin ? ` · ${data.pin}` : ""}`,
    highlights: data.highlights.split(",").map(x => x.trim()).filter(Boolean)
  };
  state.customListings.unshift(listing);
  localStorage.setItem("haven-listings", JSON.stringify(state.customListings));
  state.formData = null;
  toast("Your property is live on Haven.");
  navigate("dashboard");
}

function openReel(index) {
  const reel = reels[index] || reels[0];
  state.selectedReel = index;
  modalBackdrop.hidden = false;
  modal.innerHTML = `<button class="modal-close" aria-label="Close reel">×</button><div style="position:relative;margin:-34px -34px 20px"><img src="${reel.image}" alt="${escapeHtml(reel.title)}" style="width:100%;height:min(56vh,420px);object-fit:cover;filter:brightness(.76)"><span class="play-button" style="font-size:13px">▶</span></div><span class="eyebrow">Haven stories · ${reel.views}</span><h2 id="modalTitle">${escapeHtml(reel.title)}</h2><p>A little look inside ${escapeHtml(reel.property.title)}. Explore the listing to see the details and meet the broker.</p><button class="button full" data-action="reel-property">Explore this home &nbsp; →</button>`;
}

document.addEventListener("click", event => {
  const pageButton = event.target.closest("[data-page]");
  if (pageButton) {
    event.preventDefault();
    navigate(pageButton.dataset.page);
    return;
  }
  const saveButton = event.target.closest("[data-save]");
  if (saveButton) {
    event.stopPropagation();
    if (!state.user) { openAuth(); return; }
    const id = saveButton.dataset.save;
    state.saved = state.saved.includes(id) ? state.saved.filter(x => x !== id) : [...state.saved, id];
    localStorage.setItem("haven-saved", JSON.stringify(state.saved));
    render();
    toast(state.saved.includes(id) ? "Saved to your favourites." : "Removed from your favourites.");
    return;
  }
  const card = event.target.closest("[data-property]");
  if (card && !event.target.closest("[data-save]")) {
    const property = allProperties().find(p => p.id === card.dataset.property);
    if (property) { state.selectedProperty = property; navigate("details"); }
    return;
  }
  const filter = event.target.closest("[data-filter]");
  if (filter) { state.filter = filter.dataset.filter; render(); return; }
  const action = event.target.closest("[data-action]");
  if (action) {
    if (action.dataset.action === "clear-search") { state.search = ""; state.filter = "All homes"; render(); }
    else if (action.dataset.action === "show-all") { state.filter = "All homes"; state.search = ""; if (state.page !== "home") navigate("home"); else render(); }
    else if (action.dataset.action === "contact-broker") { state.pendingMessage = true; if (!state.user) openAuth(); else navigate("messages"); }
    else if (action.dataset.action === "request-viewing") { if (!state.user) openAuth(); else { navigate("messages"); toast("Send the broker a message to arrange a viewing."); } }
    else if (action.dataset.action === "toggle-auth") renderAuthModal(!modal.querySelector("#authName"));
    else if (action.dataset.action === "reel") openReel(Number(action.dataset.reel));
    else if (action.dataset.action === "reel-property") { closeModal(); state.selectedProperty = reels[state.selectedReel].property; navigate("details"); }
    else if (action.dataset.action === "publish") publishListing();
    else if (action.dataset.action === "close-modal") closeModal();
  }
  if (event.target.closest(".modal-close")) closeModal();
});

document.addEventListener("submit", event => {
  if (event.target.id === "searchForm") {
    event.preventDefault();
    state.search = document.querySelector("#locationSearch").value.trim();
    state.mode = document.querySelector("#modeSelect").value;
    render();
    document.querySelector("#homesSection")?.scrollIntoView({ behavior: "smooth", block: "start" });
  } else if (event.target.id === "authForm") {
    event.preventDefault();
    const form = new FormData(event.target);
    const email = String(form.get("email")).trim();
    state.user = { name: form.get("name")?.trim() || email.split("@")[0], email };
    localStorage.setItem("haven-user", JSON.stringify(state.user));
    const target = state.pendingPage || (state.pendingMessage ? "messages" : null);
    state.pendingPage = null;
    state.pendingMessage = false;
    closeModal();
    toast(`Welcome${state.user.name ? `, ${state.user.name.split(" ")[0]}` : ""}. You're signed in.`);
    if (target) navigate(target); else render();
  } else if (event.target.id === "propertyForm") {
    event.preventDefault();
    if (state.photoProcessing) {
      toast("Please wait while your photos are prepared.");
      return;
    }
    const data = getListingData(event.target);
    if (!data.photoUrls.length) {
      toast("Add at least one property photo before previewing.");
      document.querySelector(".upload-area")?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    state.formData = data;
    navigate("preview");
  } else if (event.target.id === "messageForm") {
    event.preventDefault();
    const input = event.target.elements.message;
    const text = input.value.trim();
    if (!text) return;
    state.messages.push(text);
    localStorage.setItem("haven-messages", JSON.stringify(state.messages));
    renderMessages();
    document.querySelector("#chatMessages")?.scrollTo({ top: 10000, behavior: "smooth" });
  }
});

document.addEventListener("change", async event => {
  if (event.target.id === "propertyCategory") updateTypeOptions();
  if (event.target.id === "photoUpload") {
    const files = [...event.target.files].slice(0, 8);
    if (!files.length) return;
    const previewButton = document.querySelector('#propertyForm button[type="submit"]');
    state.photoProcessing = true;
    if (previewButton) {
      previewButton.disabled = true;
      previewButton.textContent = "Preparing photos...";
    }
    try {
      const photos = await Promise.all(files.map(optimizeImage));
      state.formData = state.formData || {};
      state.formData.photoUrls = photos;
      showPhotoPreviews(photos);
    } catch (error) {
      event.target.value = "";
      toast(error.message);
    } finally {
      state.photoProcessing = false;
      if (previewButton) {
        previewButton.disabled = false;
        previewButton.textContent = "Preview your listing →";
      }
    }
  }
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeModal();
  if ((event.key === "Enter" || event.key === " ") && event.target.matches(".property-card, .reel-card")) {
    event.preventDefault();
    event.target.click();
  }
});

document.querySelector("#accountButton").addEventListener("click", () => {
  if (state.user) {
    modalBackdrop.hidden = false;
    modal.innerHTML = `<button class="modal-close" aria-label="Close dialog">×</button><span class="eyebrow">Your Haven account</span><h2 id="modalTitle">Hello, ${escapeHtml(state.user.name.split(" ")[0])}.</h2><p>Signed in as ${escapeHtml(state.user.email)}. Your saved places and messages are right here.</p><button class="button full" data-page="dashboard">Go to my workspace &nbsp; →</button><button class="button outline full" style="margin-top:10px" data-action="sign-out">Sign out</button>`;
  } else openAuth();
});

document.querySelector("#mobileMenuButton").addEventListener("click", () => {
  document.querySelector(".main-nav").classList.toggle("open");
});

modalBackdrop.addEventListener("click", event => {
  if (event.target === modalBackdrop) closeModal();
});

document.addEventListener("click", event => {
  if (event.target.closest('[data-action="sign-out"]')) {
    state.user = null;
    localStorage.removeItem("haven-user");
    closeModal();
    navigate("home");
    toast("You've signed out.");
  }
});

render();
