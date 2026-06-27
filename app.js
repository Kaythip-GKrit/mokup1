// State Management
const STATE = {
  currentUser: {
    username: "@kayth",
    name: "Kayth",
    email: "kayth@whopack.com",
    badges: {
      TPS: { name: "TPS (ThePayerSpliter)", desc: "ออกเงินสำรองจ่ายก่อนมากที่สุด (ต้องมีการหาร)", active: true },
      EPR: { name: "EPR (Explorer)", desc: "เพิ่มสถานที่มากที่สุด", active: true },
      SSD: { name: "SSD (Solo Spending)", desc: "ใช้เงินส่วนตัว/เดี่ยวสูงสุด", active: false }
    },
    profilePic: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    totalSpent: 0,
    projectCount: 3
  },
  presets: [
    {
      id: "preset-1",
      name: "พรีเซ็ทเที่ยวทะเล",
      items: ["กางเกงว่ายน้ำ", "ครีมกันแดด", "แว่นตากันแดด", "ผ้าเช็ดตัว", "หมวก"]
    }
  ],
  trips: [
    {
      id: "trip-1",
      name: "ไป shibuya crossing",
      location: "Shibuya Crossing, Japan",
      startDate: "2026-04-12",
      endDate: "2026-04-15",
      isShared: true,
      members: [
        { username: "@kayth", name: "Kayth" },
        { username: "@john_packer", name: "John Packer" },
        { username: "@alice_traveler", name: "Alice Traveler" }
      ],
      days: [
        {
          id: "day-1",
          date: "2026-04-12",
          dayName: "วันอาทิตย์",
          places: [
            { id: "place-1", name: "Shibuya Crossing", img: "https://media.cnn.com/api/v1/images/stellar/prod/190614113003-19-shibuya-crossing-story-only.jpg?q=w_4087,h_2725,x_0,y_0,c_fill", desc: "ห้าแยกชิบูย่า แลนด์มาร์กสำคัญระดับโลกที่ต้องมาเดินถ่ายรูปและสัมผัสความคึกคัก", seq: 1 },
            { id: "place-2", name: "Meiji Jingu Shrine", img: "https://travel.gaijinpot.com/app/uploads/sites/6/2019/05/Meiji-Jingu-2.jpg", desc: "ศาลเจ้าเมจิอันสงบเงียบท่ามกลางป่าใหญ่ใจกลางกรุงโตเกียว", seq: 2 }
          ]
        },
        {
          id: "day-2",
          date: "2026-04-13",
          dayName: "วันจันทร์",
          places: []
        }
      ],
      packingList: {
        "@kayth": [
          { id: "pack-1", text: "พาสปอร์ต", checked: true, alert: null },
          { id: "pack-2", text: "ยาสามัญประจำตัว", checked: false, alert: { hours: 2, mins: 30, count: 3 } }
        ],
        "@john_packer": [
          { id: "pack-3", text: "ตั๋วเครื่องบิน", checked: true, alert: null },
          { id: "pack-4", text: "แปรงสีฟัน", checked: false, alert: null }
        ],
        "@alice_traveler": [
          { id: "pack-5", text: "กล้องถ่ายรูป", checked: false, alert: null }
        ]
      },
      sharedPackingList: [
        { id: "shared-1", text: "ปลั๊กแปลงไฟ Universal", checked: true },
        { id: "shared-2", text: "กระเป๋ายาปฐมพยาบาล", checked: false }
      ],
      shoppingList: [
        { id: "shop-1", text: "ซิมอินเทอร์เน็ตญี่ปุ่น", qty: 3, price: 399, category: "travel", payee: "@kayth", splitType: "all", splitMembers: ["@kayth", "@john_packer", "@alice_traveler"], creator: "@kayth" },
        { id: "shop-2", text: "ขนมราเมงที่ดอนกิ", qty: 2, price: 250, category: "food", payee: "@john_packer", splitType: "select", splitMembers: ["@john_packer", "@alice_traveler"], creator: "@john_packer" }
      ],
      budget: 15000,
      bankDetails: [
        { username: "@kayth", bank: "KBANK", account: "012-3-45678-9", qr: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=PromptPayKayth" },
        { username: "@john_packer", bank: "SCB", account: "987-6-54321-0", qr: "" },
        { username: "@alice_traveler", bank: "BBL", account: "111-2-33344-5", qr: "" }
      ],
      note: "เตรียมตั๋วรถไฟ JR Pass และจองโต๊ะร้านซูชิก่อนเดินทาง!",
      ended: false,
      endedWinners: []
    },
    {
      id: "trip-2",
      name: "แคมป์ปิ้งเขาใหญ่ ดื่มด่ำธรรมชาติ",
      location: "เขาใหญ่ นครราชสีมา",
      startDate: "2026-05-18",
      endDate: "2026-05-20",
      isShared: false,
      members: [
        { username: "@kayth", name: "Kayth" },
        { username: "@bob_spender", name: "Bob Spender" }
      ],
      days: [
        { id: "day-x1", date: "2026-05-18", dayName: "วันจันทร์", places: [] }
      ],
      packingList: {
        "@kayth": [],
        "@bob_spender": []
      },
      sharedPackingList: [],
      shoppingList: [],
      budget: 5000,
      bankDetails: [],
      note: "เตรียมเต็นท์และยากันยุงไปด้วยเยอะๆ",
      ended: false,
      endedWinners: []
    }
  ],
  chats: [
    {
      partner: "@john_packer",
      partnerName: "John Packer",
      messages: [
        { sender: "incoming", text: "สวัสดีครับ สนใจทริปญี่ปุ่นที่แชร์ลงคอมมูนิตี้จังเลยครับ เดินทางเหนื่อยไหมครับ?", time: "22:15" },
        { sender: "outgoing", text: "สวัสดีครับ ไม่เหนื่อยเท่าไหร่ครับ เน้นเที่ยวชิลๆ มีพรีเซ็ทกระเป๋าเตรียมไว้ทำให้จัดของง่ายมากครับ", time: "22:18" }
      ]
    }
  ],
  currentView: "home", // home, create-trip, trip-details, community-details
  activeTripId: null,
  activeSidebarTab: "dates",
  viewOnlyCommunity: false, // flag for view-only preview from community
  selectedCommunityTrip: null,
  isAdmin: false,

  // Admin Mock Database
  admin: {
    defaultCategories: ["อาบน้ำ", "เครื่องประดับ", "สิ่งที่จำเป็นต่อการเดินทาง", "เกี่ยวกับเด็กเล็ก", "สัตว์เลี้ยง"],
    badges: [
      { code: "TPS", name: "ThePayerSpliter", desc: "ออกเงินสำรองจ่ายก่อนมากที่สุด" },
      { code: "EPR", name: "Explorer", desc: "เพิ่มสถานที่ท่องเที่ยวมากที่สุด" },
      { code: "SSD", name: "Solo Spending", desc: "ใช้เงินเดี่ยวสูงสุดในทริป" }
    ],
    reports: [
      { id: "rep-1", reporter: "@alice_traveler", reportedUser: "@scammer_bot", msg: "ลิงก์โฆษณาเว็บพนัน", status: "รอดำเนินการ" }
    ],
    users: [
      { username: "@kayth", status: "active" },
      { username: "@john_packer", status: "active" },
      { username: "@alice_traveler", status: "active" },
      { username: "@bob_spender", status: "active" },
      { username: "@scammer_bot", status: "suspended" }
    ]
  }
};

// Application Utilities
function showToast(message, type = "info") {
  const container = document.getElementById("toast-container");
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;

  let icon = "💡";
  if (type === "success") icon = "✅";
  if (type === "warning") icon = "⚠️";
  if (type === "danger") icon = "❌";

  toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    showToast("คัดลอกลิงก์โปรเจกต์ลงคลิปบอร์ดแล้ว! ส่งต่อให้เพื่อนเพื่อเข้าร่วมทริปได้เลย", "success");
  }).catch(() => {
    // Fallback if clipboard API fails
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    showToast("คัดลอกลิงก์โปรเจกต์แล้ว!", "success");
  });
}

// Dialog Controller
const Dialog = {
  open(id, onConfirm = null) {
    const overlay = document.getElementById(id);
    if (overlay) {
      overlay.classList.add("active");
      if (onConfirm) {
        overlay.confirmHandler = onConfirm;
      }
    }
  },
  close(id) {
    const overlay = document.getElementById(id);
    if (overlay) {
      overlay.classList.remove("active");
    }
  },
  confirm(id, data = null) {
    const overlay = document.getElementById(id);
    if (overlay && overlay.confirmHandler) {
      overlay.confirmHandler(data);
    }
    this.close(id);
  }
};

// Routing and Page Navigation
function navigateTo(viewName, tripId = null, viewOnly = false) {
  STATE.currentView = viewName;
  STATE.viewOnlyCommunity = viewOnly;

  if (tripId) {
    STATE.activeTripId = tripId;
  }

  // Close any active menus or dialogs
  document.getElementById("profile-dropdown").classList.remove("active");

  // Hide all views
  document.querySelectorAll(".view-section").forEach(view => {
    view.classList.remove("active");
  });

  // Show target view
  const targetElement = document.getElementById(`${viewName}-view`);
  if (targetElement) {
    targetElement.classList.add("active");
  }

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Trigger appropriate view renders
  if (viewName === "home") {
    renderHome();
  } else if (viewName === "trip-details") {
    STATE.activeSidebarTab = "dates"; // reset sidebar
    renderTripDetails();
  } else if (viewName === "create-trip") {
    initCreateTripForm();
  }
}

// Smooth scroll helper
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

// Curated Unsplash images helper for trip destinations
function getTripCoverImage(location) {
  const loc = (location || "").toLowerCase();
  if (loc.includes("japan") || loc.includes("shibuya") || loc.includes("tokyo")) {
    return "https://media.cnn.com/api/v1/images/stellar/prod/190614113003-19-shibuya-crossing-story-only.jpg?q=w_4087,h_2725,x_0,y_0,c_fill"; // Tokyo Temple
  }
  if (loc.includes("เขาใหญ่") || loc.includes("camping") || loc.includes("เขา") || loc.includes("forest") || loc.includes("mountain") || loc.includes("khaoyai")) {
    return "https://mpics.mgronline.com/pics/Images/564000010482201.JPEG"; // Forest camp
  }
  if (loc.includes("ทะเล") || loc.includes("beach") || loc.includes("เกาะ") || loc.includes("phuket") || loc.includes("sea") || loc.includes("krabi")) {
    return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_QZOEpbhRt6zebG7Pf2LsnKM0-JIrqcpxcQ&s"; // Beach sunset
  }
  if (loc.includes("chiang mai") || loc.includes("เชียงใหม่") || loc.includes("temple") || loc.includes("วัด")) {
    return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0elI4kJqaQNa7O_GIIuuVECUCPEdxqr-WAg&s"; // Thai temple
  }
  // Default travel landscape
  return "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&auto=format&fit=crop&q=80";
}

// Curated Unsplash images helper for packing presets
function getPresetCoverImage(name) {
  const n = (name || "").toLowerCase();
  if (n.includes("ทะเล") || n.includes("beach") || n.includes("เกาะ") || n.includes("sea")) {
    return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCkO5HuTA9AAuP1gEQNbJTmHruloMr9TPXMw&s"; // Beach sunny items
  }
  if (n.includes("เขา") || n.includes("ป่า") || n.includes("แคมป์") || n.includes("camp") || n.includes("forest") || n.includes("hiking")) {
    return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNFbPnraZxme2bIxu6D099w5lJ3p86n6fqww&s"; // Pine forest hike
  }
  if (n.includes("ต่างประเทศ") || n.includes("บิน") || n.includes("japan") || n.includes("flight") || n.includes("เที่ยวบิน")) {
    return "https://as2.ftcdn.net/v2/jpg/02/96/78/67/1000_F_296786762_ucj0pcmqEJPxURshkvm8ufQ7NV6TbArL.jpg"; // Airplane view
  }
  // Default backpack / gear
  return "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&auto=format&fit=crop&q=80";
}

// Home View Renderer
function renderHome() {
  // Update project count statistics
  STATE.currentUser.projectCount = STATE.trips.length;

  // 1. Render Active Trip Cards (Dashboard Style)
  const tripsContainer = document.getElementById("active-trips-list");
  tripsContainer.innerHTML = "";

  if (STATE.trips.length === 0) {
    tripsContainer.innerHTML = `
      <div style="text-align:center; padding:3rem; grid-column: 1 / -1; background:var(--bg-card); border:1px solid var(--border-color); border-radius:var(--radius-xl);">
        <p style="font-size:1.1rem; color:var(--text-muted); margin-bottom:1rem;">📂 คุณยังไม่มีโปรเจกต์การเดินทางใดๆ ในขณะนี้</p>
        <button class="btn btn-primary btn-sm-pill" onclick="navigateTo('create-trip')">➕ เริ่มต้นสร้างทริปใหม่</button>
      </div>
    `;
  } else {
    STATE.trips.forEach(trip => {
      const isMember = trip.members.some(m => m.username === STATE.currentUser.username);

      // Copy link URL simulation
      const inviteLink = `${window.location.origin}/join-trip?id=${trip.id}`;

      const card = document.createElement("div");
      card.className = "trip-dashboard-card";

      const coverImg = getTripCoverImage(trip.location);

      card.innerHTML = `
        <div class="trip-dash-img-wrapper" style="background-image: url('${coverImg}')">
        </div>
        <div class="trip-dash-info">
          <h3 class="trip-dash-name" onclick="navigateTo('trip-details', '${trip.id}', false)">${trip.name}</h3>
          <p class="trip-dash-meta">${trip.location} |${formatThaiDate(trip.startDate)} - ${formatThaiDate(trip.endDate)}</p>
          <p class="trip-dash-members">สมาชิก ${trip.members.length} คน: ${trip.members.map(m => m.name).join(", ")}</p>
          <div class="trip-dash-actions">
            <button class="btn btn-secondary btn-sm-pill" onclick="copyToClipboard('${inviteLink}')">🔗 ลิงก์เชิญเพื่อน</button>
            <button class="btn btn-primary btn-sm-pill" onclick="navigateTo('trip-details', '${trip.id}', false)">แก้ไขทริปเดินทาง</button>
          </div>
        </div>
      `;
      tripsContainer.appendChild(card);
    });
  }

  // 2. Render Presets Grid
  renderPresets();

  // 3. Render Community List
  renderCommunity();

  // Update global stats
  updateUserStats();
}

// Preset Renderers & Actions
function renderPresets() {
  const counter = document.getElementById("presets-counter-label");
  counter.innerText = `${STATE.presets.length}/3`;

  const presetList = document.getElementById("preset-items-list");
  presetList.innerHTML = "";

  STATE.presets.forEach(preset => {
    const card = document.createElement("div");
    card.className = "preset-img-card";

    const coverImg = getPresetCoverImage(preset.name);

    card.innerHTML = `
      <div class="preset-img-backdrop" style="background-image: url('${coverImg}')">
        <div class="preset-img-overlay"></div>
        <div class="preset-img-content" onclick="openPresetDetailsDialog('${preset.id}')">
          <span class="preset-card-count-badge"> ${preset.items.length} รายการ</span>
          <h4 class="preset-card-name">${preset.name}</h4>
        </div>
        <button class="preset-card-delete-btn" onclick="event.stopPropagation(); triggerDeletePreset('${preset.id}', '${preset.name}')" title="ลบพรีเซ็ท">🗑️</button>
      </div>
    `;
    presetList.appendChild(card);
  });

  // Preset limit logic: If less than 3, show "Add Preset Button" inside intro card
  const addBtnContainer = document.getElementById("add-preset-btn-container");
  if (STATE.presets.length < 3) {
    addBtnContainer.innerHTML = `
      <button class="btn btn-light btn-sm-pill" style=" width:100%; justify-content:center; font-size: 20px; " onclick="openCreatePresetDialog()">
        เพิ่มพรีเซ็ทใหม่
      </button>
    `;
  } else {
    addBtnContainer.innerHTML = "";
  }
}

// Preset CRUD Popups
function openCreatePresetDialog() {
  const body = document.getElementById("preset-modal-body");
  body.innerHTML = `
    <div class="form-group">
      <label class="form-label">ชื่อพรีเซ็ท</label>
      <input type="text" id="new-preset-title" class="form-input" placeholder="เช่น พรีเซ็ทเที่ยวเขาใหญ่" required>
    </div>
    <div class="form-group">
      <label class="form-label">รายการสัมภาระตั้งต้น (ใส่เครื่องหมายจุลภาค , คั่นแต่ละอย่าง)</label>
      <textarea id="new-preset-items" class="form-input" style="height:100px;" placeholder="เช่น เสื้อยืด, กางเกงยีนส์, แปรงสีฟัน, ที่ชาร์จมือถือ"></textarea>
    </div>
  `;

  document.getElementById("preset-modal-title").innerText = "สร้างพรีเซ็ทสัมภาระใหม่";

  Dialog.open("preset-modal", () => {
    const titleVal = document.getElementById("new-preset-title").value.trim();
    const itemsVal = document.getElementById("new-preset-items").value;

    if (!titleVal) {
      showToast("กรุณาระบุชื่อพรีเซ็ท!", "warning");
      return;
    }

    const itemList = itemsVal.split(",")
      .map(i => i.trim())
      .filter(i => i.length > 0);

    const newPreset = {
      id: `preset-${Date.now()}`,
      name: titleVal,
      items: itemList
    };

    STATE.presets.push(newPreset);
    renderPresets();
    showToast("สร้างพรีเซ็ทสัมภาระเรียบร้อยแล้ว!", "success");
  });
}

function openPresetDetailsDialog(presetId) {
  const preset = STATE.presets.find(p => p.id === presetId);
  if (!preset) return;

  const body = document.getElementById("preset-modal-body");
  body.innerHTML = `
    <div class="form-group" style="display:flex; gap:0.5rem; align-items:flex-end;">
      <div style="flex-grow:1;">
        <label class="form-label">ชื่อพรีเซ็ท</label>
        <input type="text" id="edit-preset-name-input" class="form-input" value="${preset.name}">
      </div>
      <button class="btn btn-dark" onclick="updatePresetName('${preset.id}')">บันทึกชื่อ</button>
    </div>
    
    <label class="form-label">รายการสัมภาระในพรีเซ็ท</label>
    <div class="list-box" id="preset-items-details-box" style="margin-bottom:1rem; max-height:220px;">
      <!-- Renders preset items list -->
    </div>
    
    <div class="form-group" style="display:flex; gap:0.5rem;">
      <input type="text" id="add-item-to-preset-input" class="form-input" placeholder="เพิ่มสัมภาระชิ้นใหม่">
      <button class="btn" onclick="addItemToPreset('${preset.id}')">➕</button>
    </div>
  `;

  document.getElementById("preset-modal-title").innerText = `รายละเอียดพรีเซ็ท: ${preset.name}`;

  // Render list items inside details modal
  renderPresetItemsDetails(preset);

  // Setup dialog confirm to simply refresh the outer presets view
  Dialog.open("preset-modal", () => {
    renderPresets();
  });
}

function renderPresetItemsDetails(preset) {
  const listContainer = document.getElementById("preset-items-details-box");
  listContainer.innerHTML = "";

  if (preset.items.length === 0) {
    listContainer.innerHTML = `<div style="text-align:center; padding:1rem; color:var(--text-dim); font-size:0.85rem;">ยังไม่มีสัมภาระในพรีเซ็ทนี้</div>`;
    return;
  }

  preset.items.forEach((item, idx) => {
    const row = document.createElement("div");
    row.className = "list-box-item";
    row.innerHTML = `
      <span> ${item}</span>
      <button class="btn-danger btn btn-sm" style="padding:0.1rem 0.4rem; font-size:0.75rem;" onclick="removeItemFromPreset('${preset.id}', ${idx})">🗑️</button>
    `;
    listContainer.appendChild(row);
  });
}

function updatePresetName(presetId) {
  const preset = STATE.presets.find(p => p.id === presetId);
  const newName = document.getElementById("edit-preset-name-input").value.trim();
  if (preset && newName) {
    preset.name = newName;
    document.getElementById("preset-modal-title").innerText = `รายละเอียดพรีเซ็ท: ${preset.name}`;
    renderPresets();
    showToast("เปลี่ยนชื่อพรีเซ็ทแล้ว", "success");
  }
}

function addItemToPreset(presetId) {
  const preset = STATE.presets.find(p => p.id === presetId);
  const input = document.getElementById("add-item-to-preset-input");
  const val = input.value.trim();
  if (preset && val) {
    preset.items.push(val);
    input.value = "";
    renderPresetItemsDetails(preset);
    showToast(`เพิ่ม "${val}" เข้าพรีเซ็ทแล้ว`, "success");
  }
}

function removeItemFromPreset(presetId, idx) {
  const preset = STATE.presets.find(p => p.id === presetId);
  if (preset) {
    const deletedName = preset.items[idx];
    preset.items.splice(idx, 1);
    renderPresetItemsDetails(preset);
    showToast(`ลบ "${deletedName}" ออกแล้ว`, "info");
  }
}

function triggerDeletePreset(presetId, presetName) {
  const body = document.getElementById("confirm-modal-body");
  body.innerHTML = `<p>คุณต้องการลบพรีเซ็ทสัมภาระ <strong>"${presetName}"</strong> หรือไม่? ข้อมูลพรีเซ็ทนี้จะหายไปอย่างถาวร</p>`;

  Dialog.open("confirm-modal", () => {
    STATE.presets = STATE.presets.filter(p => p.id !== presetId);
    renderPresets();
    showToast("ลบพรีเซ็ทสัมภาระสำเร็จ", "info");
  });
}

// Community Rendering
function renderCommunity() {
  const grid = document.getElementById("community-trips-grid");
  grid.innerHTML = "";

  // Show trips that are set as isShared
  const sharedTrips = STATE.trips.filter(t => t.isShared);

  sharedTrips.forEach(trip => {
    const card = document.createElement("div");
    card.className = "community-card-new";

    // Calculate total trip spending for community view preview
    let totalSpend = 0;
    trip.shoppingList.forEach(item => {
      totalSpend += item.qty * item.price;
    });

    const coverImg = getTripCoverImage(trip.location);
    const startThai = formatThaiDate(trip.startDate);
    const endThai = formatThaiDate(trip.endDate);

    card.innerHTML = `
      <div class="dest-card-img-wrapper" style="background-image: url('${coverImg}')">
        <span class="dest-price-badge">ค่าใช้จ่าย: ฿${totalSpend.toLocaleString()}</span>
      </div>
      <div class="dest-card-details">
        <h4 class="dest-card-title">${trip.name}</h4>
        <p class="dest-card-location">${trip.location}</p>
        <p class="dest-card-dates">${startThai} - ${endThai}</p>
        <div class="dest-card-meta">
          <span class="dest-card-author">ทริปโดย @kayth</span>
          
        </div>
        <div class="dest-card-actions">
          <button class="btn btn-secondary btn-sm-pill" onclick="cloneTripAsTemplate('${trip.id}')" title="โคลนทริปนี้มาเป็นโปรเจกต์ของคุณ">ใช้ทริปเทมเพลต</button>
          <button class="btn btn-primary btn-sm-pill" onclick="navigateTo('trip-details', '${trip.id}', true)">ดูแผนทริป</button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}
// Create New Trip Flow
function initCreateTripForm() {
  document.getElementById("trip-dest-input").value = "";
  document.getElementById("trip-start-input").value = "2026-06-29";
  document.getElementById("trip-end-input").value = "2026-06-30";
}

function handleStartTripSubmit(event) {
  event.preventDefault();

  const dest = document.getElementById("trip-dest-input").value.trim();
  const start = document.getElementById("trip-start-input").value;
  const end = document.getElementById("trip-end-input").value;

  if (!dest) {
    showToast("กรุณาระบุสถานที่ปลายทาง!", "warning");
    return;
  }

  // Setup simulated dates list
  const daysList = [];
  const sDate = new Date(start);
  const eDate = new Date(end);
  const diffTime = Math.abs(eDate - sDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;

  const dayNames = ["วันอาทิตย์", "วันจันทร์", "วันอังคาร", "วันพุธ", "วันพฤหัสบดี", "วันศุกร์", "วันเสาร์"];

  for (let i = 0; i < diffDays; i++) {
    const current = new Date(sDate);
    current.setDate(sDate.getDate() + i);

    // Format YYYY-MM-DD
    const yyyy = current.getFullYear();
    const mm = String(current.getMonth() + 1).padStart(2, '0');
    const dd = String(current.getDate()).padStart(2, '0');
    const dateStr = `${yyyy}-${mm}-${dd}`;

    daysList.push({
      id: `day-${Date.now()}-${i}`,
      date: dateStr,
      dayName: dayNames[current.getDay()],
      places: []
    });
  }

  const newTrip = {
    id: `trip-${Date.now()}`,
    name: `ทริปไป ${dest}`,
    location: dest,
    startDate: start,
    endDate: end,
    isShared: false,
    members: [
      { username: STATE.currentUser.username, name: STATE.currentUser.name }
    ],
    days: daysList,
    packingList: {
      [STATE.currentUser.username]: []
    },
    sharedPackingList: [],
    shoppingList: [],
    budget: 10000,
    bankDetails: [
      { username: STATE.currentUser.username, bank: "KBANK", account: "012-3-45678-9", qr: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=PromptPayKayth" }
    ],
    note: "เขียนโน้ตเพิ่มเติมสำหรับทริปใหม่ที่นี่...",
    ended: false,
    endedWinners: []
  };

  // Pre-load default Shibuya simulation details if Shibuya was searched
  if (dest.toLowerCase().includes("shibuya")) {
    newTrip.name = "ทริปเยือนชิบูย่า แดนอาทิตย์อุทัย";
    if (newTrip.days.length > 0) {
      newTrip.days[0].places.push({
        id: "place-new-1",
        name: "Shibuya Crossing",
        img: "https://media.cnn.com/api/v1/images/stellar/prod/190614113003-19-shibuya-crossing-story-only.jpg?q=w_4087,h_2725,x_0,y_0,c_fill",
        desc: "สี่แยกที่มีคนข้ามมากที่สุดในโลก สัมผัสวิถีชีวิตชาวโตเกียวอย่างแท้จริง",
        seq: 1
      });
    }
  }

  STATE.trips.push(newTrip);
  showToast(`เริ่มทริปใหม่ "${newTrip.name}" สำเร็จ!`, "success");
  navigateTo("trip-details", newTrip.id, false);
}

// Clone a community trip as a personal trip template
function cloneTripAsTemplate(sourceTripId) {
  const source = STATE.trips.find(t => t.id === sourceTripId);
  if (!source) return;

  // Deep-clone the days and places (keep dates + locations, but reset IDs)
  const clonedDays = source.days.map((day, di) => ({
    id: `day-${Date.now()}-${di}`,
    date: day.date,
    dayName: day.dayName,
    places: day.places.map((place, pi) => ({
      id: `place-${Date.now()}-${di}-${pi}`,
      name: place.name,
      img: place.img,
      desc: place.desc,
      seq: place.seq
    }))
  }));

  const clonedTrip = {
    id: `trip-${Date.now()}`,
    name: `[เทมเพลต] ${source.name}`,
    location: source.location,
    startDate: source.startDate,
    endDate: source.endDate,
    isShared: false,
    members: [
      { username: STATE.currentUser.username, name: STATE.currentUser.name }
    ],
    days: clonedDays,
    packingList: {
      [STATE.currentUser.username]: []
    },
    sharedPackingList: [],
    shoppingList: [],
    budget: source.budget || 10000,
    bankDetails: [
      { username: STATE.currentUser.username, bank: "KBANK", account: "012-3-45678-9", qr: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=PromptPayKayth" }
    ],
    note: `โคลนจากทริป: ${source.name}`,
    ended: false,
    endedWinners: []
  };

  STATE.trips.push(clonedTrip);
  showToast(`✅ โคลนทริป "${source.name}" เป็นเทมเพลตของคุณสำเร็จ!`, "success");
  navigateTo("trip-details", clonedTrip.id, false);
}

// -------------------------------------------------------------
// TRIP DETAILS VIEW (SIDEBAR CONTROLLERS)
// -------------------------------------------------------------
function setTripSidebarTab(tabName) {
  STATE.activeSidebarTab = tabName;

  // Highlight tab button
  document.querySelectorAll(".sidebar-btn").forEach(btn => {
    btn.classList.remove("active");
  });
  const activeBtn = document.getElementById(`side-tab-${tabName}`);
  if (activeBtn) activeBtn.classList.add("active");

  renderTabContent();
}

function renderTripDetails() {
  const trip = STATE.trips.find(t => t.id === STATE.activeTripId);
  if (!trip) return;

  // 1. Render Header Area
  const headerArea = document.getElementById("trip-header-area");

  // Format Thai dates
  const startThai = formatThaiDate(trip.startDate);
  const endThai = formatThaiDate(trip.endDate);

  // Add special End Trip button at header if not view-only
  let endBtnHtml = "";
  if (!STATE.viewOnlyCommunity) {
    if (trip.ended) {
      endBtnHtml = `<button class="btn btn-success" disabled>🏁 จบทริปแล้ว</button>`;
    } else {
      endBtnHtml = `<button class="btn btn-danger" onclick="triggerEndTrip()">🛑 จบทริปการเดินทาง</button>`;
    }
  }

  headerArea.innerHTML = `
    <div class="trip-title-group">
      <h2>${trip.name} ${STATE.viewOnlyCommunity ? '<span style="font-size:0.9rem; padding:0.2rem 0.5rem; background:rgba(255,255,255,0.1); border-radius:10px; vertical-align:middle;">View-Only Mode</span>' : ''}</h2>
      <p class="trip-subtitle">${trip.location} | ${startThai} - ${endThai} | สมาชิก ${trip.members.length} คน</p>
    </div>
    <div class="trip-actions">
      ${endBtnHtml}
      ${STATE.viewOnlyCommunity ? `<button class="btn btn-success" onclick="cloneTripAsTemplate('${trip.id}')">📋 ใช้ทริปเทมเพลต</button>` : ''}
      ${!STATE.viewOnlyCommunity && !trip.isShared ? `<button class="btn btn-secondary" onclick="shareTripToCommunity()">แชร์ลงคอมมูนิตี้</button>` : ''}
      ${!STATE.viewOnlyCommunity ? `<button class="btn btn-primary" onclick="triggerInviteMember()">เพิ่มสมาชิก</button>` : ''}
    </div>
  `;

  // Show / Hide sidebar options according to community view rules
  const sidebar = document.getElementById("trip-sidebar");
  if (STATE.viewOnlyCommunity) {
    sidebar.innerHTML = `
      <button id="side-tab-dates" class="sidebar-btn active" onclick="setTripSidebarTab('dates')">วันเดินทาง</button>
      <button id="side-tab-budget" class="sidebar-btn" onclick="setTripSidebarTab('budget')">💰 งบประมาณกลุ่ม (ตาราง 3.5.3)</button>
      <button id="side-tab-end-award" class="sidebar-btn" onclick="setTripSidebarTab('end-award')">🏆 ป้ายรางวัล (ตาราง 3.7.1)</button>
      
      <div style="margin-top:1.5rem; padding:0 0.5rem;">
        <label class="form-label" style="font-size:0.75rem; color:var(--text-muted); display:block; margin-bottom:0.4rem;">💬 เลือกคนเพื่อแชทถาม</label>
        <select class="sort-select" style="width:100%; font-size:0.8rem; padding: 0.4rem;" onchange="if(this.value) { triggerChatWidget('${trip.id}', this.value); this.value=''; }">
          <option value="">-- เลือกสมาชิก --</option>
          ${trip.members.map(m => `<option value="${m.username}">${m.name} (${m.username})</option>`).join("")}
        </select>
      </div>
      
      <button class="btn btn-secondary" style="margin-top:1rem; width: 100%;" onclick="navigateTo('home')">⬅️ กลับหน้าหลัก</button>
    `;
    STATE.activeSidebarTab = "dates";
  } else {
    // Standard owner/member sidebar
    sidebar.innerHTML = `
      <button id="side-tab-dates" class="sidebar-btn active" onclick="setTripSidebarTab('dates')">วันที่การเดินทาง</button>
      <button id="side-tab-single-pack" class="sidebar-btn" onclick="setTripSidebarTab('single-pack')">สัมภาระเดี่ยว</button>
      <button id="side-tab-shared-pack" class="sidebar-btn" onclick="setTripSidebarTab('shared-pack')">สัมภาระที่ใช้ร่วมกัน</button>
      <button id="side-tab-shopping" class="sidebar-btn" onclick="setTripSidebarTab('shopping')">สิ่งที่ต้องซื้อเพิ่ม</button>
      <button id="side-tab-budget" class="sidebar-btn" onclick="setTripSidebarTab('budget')">งบประมาณและการใช้จ่าย</button>
      <button id="side-tab-map" class="sidebar-btn" onclick="setTripSidebarTab('map')">ดูแผนที่เดินทาง</button>
      <button class="btn btn-secondary" style="margin-top:2rem;" onclick="navigateTo('home')">กลับหน้าหลัก</button>
    `;
  }

  // Render active tab content
  renderTabContent();
}

function renderTabContent() {
  const trip = STATE.trips.find(t => t.id === STATE.activeTripId);
  const container = document.getElementById("trip-tab-content-area");
  container.innerHTML = "";

  if (!trip) return;

  switch (STATE.activeSidebarTab) {
    case "dates":
      renderDatesTab(trip, container);
      break;
    case "single-pack":
      renderSinglePackTab(trip, container);
      break;
    case "shared-pack":
      renderSharedPackTab(trip, container);
      break;
    case "shopping":
      renderShoppingTab(trip, container);
      break;
    case "budget":
      renderBudgetTab(trip, container);
      break;
    case "map":
      renderMapTab(trip, container);
      break;
    case "end-award":
      renderEndAwardView(trip, container);
      break;
  }
}

// -------------------------------------------------------------
// TAB 3.1: TRAVEL DATES TAB
// -------------------------------------------------------------
function renderDatesTab(trip, container) {
  container.innerHTML = `
    <h3 style="margin-bottom:1rem;">วันที่การเดินทางของคุณ</h3>
    <div id="dates-accordion-container"></div>
  `;

  if (!STATE.viewOnlyCommunity) {
    container.innerHTML += `
      <button class="btn btn-primary" style="margin-top:1rem;" onclick="openAddDayDialog()">➕ เพิ่มวันเดินทางใหม่</button>
    `;
  }

  const accContainer = document.getElementById("dates-accordion-container");

  trip.days.forEach((day, index) => {
    const accBox = document.createElement("div");
    accBox.className = `accordion-box ${index === 0 ? 'active' : ''}`;
    accBox.id = `day-acc-${day.id}`;

    // Place Pins rendering
    let placesHtml = "";
    if (day.places.length === 0) {
      placesHtml = `<div style="text-align:center; padding:1.5rem; color: white; font-size:0.9rem;">ยังไม่มีสถานที่จัดทริปสำหรับวันนี้</div>`;
    } else {
      placesHtml = `<div class="places-timeline">`;
      day.places.forEach((place) => {
        placesHtml += `
          <div class="place-item">
            <div class="place-pin-num">${place.seq}</div>
            <img src="${place.img}" class="place-img" alt="${place.name}">
            <div class="place-details">
              <span class="place-name">${place.name}</span>
              <span class="place-desc">${place.desc}</span>
            </div>
            ${!STATE.viewOnlyCommunity ? `<button class="place-delete-btn" onclick="deletePlace('${day.id}', '${place.id}')">🗑️ ลบ</button>` : ''}
          </div>
        `;
      });
      placesHtml += `</div>`;
    }

    // Recommendations list
    let recsHtml = "";
    if (!STATE.viewOnlyCommunity) {
      recsHtml = `
        <div class="suggested-places-box">
          <h4 class="suggested-title">💡 สถานที่แนะนำเพิ่มเติม</h4>
          <div class="suggested-grid">
            <div class="suggested-card">
              <img src="https://travel.gaijinpot.com/app/uploads/sites/6/2019/05/Meiji-Jingu-2.jpg" class="suggested-img">
              <div class="suggested-details">
                <span class="suggested-name">ศาลเจ้าเมจิเกียวโต</span>
                <span class="suggested-desc">แหล่งท่องเที่ยวประวัติศาสตร์ในธรรมชาติสงบ</span>
                <button class="suggested-add-btn" onclick="addRecommendedPlace('${day.id}', 'ศาลเจ้าเมจิเกียวโต', 'https://travel.gaijinpot.com/app/uploads/sites/6/2019/05/Meiji-Jingu-2.jpg', 'ศาลเจ้าประวัติศาสตร์อันสง่างาม')">➕ เพิ่มเข้าทริป</button>
              </div>
            </div>
            <div class="suggested-card">
              <img src="https://palanla.com/ckeditor/upload/files/id37/abroad_location/Sensoji/001.jpg" class="suggested-img">
              <div class="suggested-details">
                <span class="suggested-name">วัดเซนโซจิ อาซากุสะ</span>
                <span class="suggested-desc">วัดโบราณชื่อดังที่ต้องไปกราบไหว้ขอพรโคมแดง</span>
                <button class="suggested-add-btn" onclick="addRecommendedPlace('${day.id}', 'วัดเซนโซจิ อาซากุสะ', 'https://palanla.com/ckeditor/upload/files/id37/abroad_location/Sensoji/001.jpg', 'วัดชื่อดังย่านอาซากุสะ มีประตูโคมแดงยักษ์โดดเด่น')">➕ เพิ่มเข้าทริป</button>
              </div>
            </div>
            <div class="suggested-card">
              <img src="https://d1grca2t3zpuug.cloudfront.net/2025/06/t3568537_m-870x500-1750128596.webp" class="suggested-img">
              <div class="suggested-details">
                <span class="suggested-name">โตเกียวทาวเวอร์</span>
                <span class="suggested-desc">จุดชมวิวทิวทัศน์รอบกรุงโตเกียวมุมกว้าง</span>
                <button class="suggested-add-btn" onclick="addRecommendedPlace('${day.id}', 'โตเกียวทาวเวอร์', 'https://d1grca2t3zpuug.cloudfront.net/2025/06/t3568537_m-870x500-1750128596.webp', 'หอคอยสื่อสารขนาดใหญ่ สีส้มขาว สูงเด่นเป็นสง่า')">➕ เพิ่มเข้าทริป</button>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    accBox.innerHTML = `
      <div class="accordion-header" onclick="toggleAccordion('${day.id}')">
        <span class="accordion-title">${formatThaiDate(day.date)} - ${day.dayName}</span>
        <div class="accordion-header-actions" onclick="event.stopPropagation();">
          ${!STATE.viewOnlyCommunity ? `
            <button class="btn btn-secondary btn-sm" onclick="openEditDayDialog('${day.id}', '${day.date}')">✏️ แก้ไขวัน</button>
            <button class="btn-danger btn btn-sm" onclick="deleteDay('${day.id}')">🗑️ ลบ</button>
          ` : ''}
          <span class="accordion-arrow">▼</span>
        </div>
      </div>
      <div class="accordion-body">
        ${placesHtml}
        ${!STATE.viewOnlyCommunity ? `<button class="btn btn-success btn-sm" style="margin-top:1rem; width: 250px; height: 50px; font-size: 18px;" onclick="openAddPlaceMapDialog('${day.id}')">ค้นหาและปักหมุดสถานที่</button>` : ''}
        ${recsHtml}
      </div>
    `;
    accContainer.appendChild(accBox);
  });
}

function toggleAccordion(id) {
  const box = document.getElementById(`day-acc-${id}`);
  if (box) {
    box.classList.toggle("active");
  }
}

function openAddDayDialog() {
  const body = document.getElementById("confirm-modal-body");
  body.innerHTML = `
    <div class="form-group">
      <label class="form-label">เลือกวันที่เดินทางเพิ่มเติม</label>
      <input type="date" id="new-day-date-picker" class="form-input" value="2026-07-01">
    </div>
  `;

  Dialog.open("confirm-modal", () => {
    const trip = STATE.trips.find(t => t.id === STATE.activeTripId);
    const selectedDate = document.getElementById("new-day-date-picker").value;
    if (trip && selectedDate) {
      const d = new Date(selectedDate);
      const dayNames = ["วันอาทิตย์", "วันจันทร์", "วันอังคาร", "วันพุธ", "วันพฤหัสบดี", "วันศุกร์", "วันเสาร์"];

      trip.days.push({
        id: `day-${Date.now()}`,
        date: selectedDate,
        dayName: dayNames[d.getDay()],
        places: []
      });

      // Sort days chronologically
      trip.days.sort((a, b) => new Date(a.date) - new Date(b.date));

      renderTabContent();
      showToast("เพิ่มวันเดินทางสำเร็จ", "success");
    }
  });
}

function openEditDayDialog(dayId, currentDate) {
  const body = document.getElementById("confirm-modal-body");
  body.innerHTML = `
    <div class="form-group">
      <label class="form-label">แก้ไขวันที่เดินทาง</label>
      <input type="date" id="edit-day-date-picker" class="form-input" value="${currentDate}">
    </div>
  `;

  Dialog.open("confirm-modal", () => {
    const trip = STATE.trips.find(t => t.id === STATE.activeTripId);
    const day = trip.days.find(d => d.id === dayId);
    const selectedDate = document.getElementById("edit-day-date-picker").value;

    if (day && selectedDate) {
      const d = new Date(selectedDate);
      const dayNames = ["วันอาทิตย์", "วันจันทร์", "วันอังคาร", "วันพุธ", "วันพฤหัสบดี", "วันศุกร์", "วันเสาร์"];

      day.date = selectedDate;
      day.dayName = dayNames[d.getDay()];

      trip.days.sort((a, b) => new Date(a.date) - new Date(b.date));
      renderTabContent();
      showToast("แก้ไขวันเดินทางสำเร็จ", "success");
    }
  });
}

function deleteDay(dayId) {
  Dialog.open("confirm-modal", () => {
    const trip = STATE.trips.find(t => t.id === STATE.activeTripId);
    if (trip) {
      trip.days = trip.days.filter(d => d.id !== dayId);
      renderTabContent();
      showToast("ลบวันเดินทางแล้ว", "info");
    }
  });
  const body = document.getElementById("confirm-modal-body");
  body.innerHTML = `<p>คุณยืนยันที่จะลบวันเดินทางนี้ใช่หรือไม่? แผนการเดินทางสำหรับวันนี้จะถูกลบทั้งหมด</p>`;
}

// Add/Delete places
function openAddPlaceMapDialog(dayId) {
  const body = document.getElementById("confirm-modal-body");
  body.innerHTML = `
    <div class="form-group">
      <label class="form-label">ค้นหาสถานที่บนแผนที่</label>
      <div style="display:flex; gap:0.5rem; margin-bottom:1rem;">
        <input type="text" id="map-search-place-input" class="form-input" placeholder="เช่น Shibuya Crossing หรือ Meiji shrine" value="Shibuya Crossing">
        <button class="btn btn-primary" onclick="simulateMapSearch()">ค้นหา</button>
      </div>
      <div id="map-search-result-pane" style="background:rgba(0,0,0,0.3); border:1px solid var(--border-color); border-radius:8px; padding:1rem;">
        <p style="font-size:0.85rem; color:var(--text-muted); text-align:center;">กดปุ่มค้นหาเพื่อจำลองระบบระบุตำแหน่งสถานที่</p>
      </div>
    </div>
  `;

  Dialog.open("confirm-modal", () => {
    // The "confirm" button of confirm-modal will serve as "Add place to trip"
    const trip = STATE.trips.find(t => t.id === STATE.activeTripId);
    const day = trip.days.find(d => d.id === dayId);
    const resultName = document.getElementById("hidden-search-place-name");

    if (day && resultName) {
      const pName = resultName.value;
      const pDesc = document.getElementById("hidden-search-place-desc").value;
      const pImg = document.getElementById("hidden-search-place-img").value;

      day.places.push({
        id: `place-${Date.now()}`,
        name: pName,
        img: pImg,
        desc: pDesc,
        seq: day.places.length + 1
      });

      renderTabContent();
      showToast(`ปักหมุดและเพิ่ม "${pName}" ลงทริปเรียบร้อย`, "success");
    }
  });
}

function simulateMapSearch() {
  const val = document.getElementById("map-search-place-input").value.trim();
  const pane = document.getElementById("map-search-result-pane");

  if (!val) {
    pane.innerHTML = `<p style="color:var(--danger); font-size:0.85rem;">กรุณากรอกชื่อสถานที่</p>`;
    return;
  }

  let pName = val;
  let pDesc = `สถานที่ปักหมุดที่ตั้งใจจะเดินทางไปเยือน สวยงามและคุ้มค่ากับการแวะพักผ่อน`;
  let pImg = `https://images.unsplash.com/photo-1540959733332-eab4deceeaf7?w=300&auto=format&fit=crop&q=80`;

  if (val.toLowerCase().includes("shibuya")) {
    pName = "Shibuya Crossing";
    pDesc = "ห้าแยกชิบูย่าแห่งโตเกียว ดื่มด่ำแสงสีเสียงและถ่ายพรีเวดดิ้งหรือเช็คอินแบบคนชิคๆ";
    pImg = "https://media.cnn.com/api/v1/images/stellar/prod/190614113003-19-shibuya-crossing-story-only.jpg?q=w_4087,h_2725,x_0,y_0,c_fill";
  } else if (val.toLowerCase().includes("meiji")) {
    pName = "Meiji Jingu Shrine";
    pDesc = "ศาลเจ้ายอดฮิตที่ร่มรื่นเงียบสงบ เดินรับโอโซนท่ามกลางต้นไม้ศักดิ์สิทธิ์";
    pImg = "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=300&auto=format&fit=crop&q=80";
  }

  pane.innerHTML = `
    <div style="display:flex; gap:0.8rem; align-items:center;">
      <img src="${pImg}" style="width:70px; height:50px; border-radius:6px; object-fit:cover;">
      <div style="font-size:0.85rem;">
        <p style="font-weight:600; color:white;">${pName}</p>
        <p style="color:var(--text-muted); font-size:0.75rem;">${pDesc}</p>
      </div>
    </div>
    <input type="hidden" id="hidden-search-place-name" value="${pName}">
    <input type="hidden" id="hidden-search-place-desc" value="${pDesc}">
    <input type="hidden" id="hidden-search-place-img" value="${pImg}">
  `;
}

function addRecommendedPlace(dayId, name, img, desc) {
  const trip = STATE.trips.find(t => t.id === STATE.activeTripId);
  const day = trip.days.find(d => d.id === dayId);
  if (day) {
    day.places.push({
      id: `place-${Date.now()}`,
      name: name,
      img: img,
      desc: desc,
      seq: day.places.length + 1
    });
    renderTabContent();
    showToast(`เพิ่มสถานที่แนะนำ "${name}" ลงในแผนการเดินทางแล้ว`, "success");
  }
}

function deletePlace(dayId, placeId) {
  const trip = STATE.trips.find(t => t.id === STATE.activeTripId);
  const day = trip.days.find(d => d.id === dayId);
  if (day) {
    day.places = day.places.filter(p => p.id !== placeId);
    // Re-sequence sequence numbers
    day.places.forEach((p, idx) => {
      p.seq = idx + 1;
    });
    renderTabContent();
    showToast("ลบสถานที่ปักหมุดแล้ว", "info");
  }
}

// -------------------------------------------------------------
// TAB 3.2: INDIVIDUAL PACKING LIST TAB
// -------------------------------------------------------------
function renderSinglePackTab(trip, container) {
  // Ensure every member has a list in state
  trip.members.forEach(member => {
    if (!trip.packingList[member.username]) {
      trip.packingList[member.username] = [];
    }
  });

  // Initialize sorting state if not present
  trip.sortPack = trip.sortPack || {};

  container.innerHTML = `
    <div style="margin-bottom:1.5rem;">
      <h3 style="margin-bottom:0.2rem;">เตรียมสัมภาระของคุณเร็วเข้า</h3>
      <p style="color:var(--text-muted); font-size:0.9rem;">โครงการเดินทาง: <strong>${trip.name}</strong></p>
    </div>
    <div id="single-pack-accordions"></div>
  `;

  const accsContainer = document.getElementById("single-pack-accordions");

  // Render accordion for each member in trip
  trip.members.forEach(member => {
    const list = trip.packingList[member.username] || [];
    const isCurrentUser = member.username === STATE.currentUser.username;

    const accBox = document.createElement("div");
    accBox.className = "accordion-box active"; // expanded by default

    // Sort logic from stored sort selection
    const activeSort = trip.sortPack[member.username] || "default";
    const sortedList = sortItemsList(list, activeSort);

    let itemsHtml = "";
    if (sortedList.length === 0) {
      itemsHtml = `<div style="text-align:center; padding:1.5rem; color:var(--text-dim); font-size:0.85rem;">ยังไม่มีรายการสัมภาระจัดเตรียม</div>`;
    } else {
      sortedList.forEach(item => {
        const isChecked = item.checked ? "checked" : "";
        const alertBellActive = item.alert ? "active" : "";

        itemsHtml += `
          <div class="packing-item ${isChecked}">
            <div class="packing-item-left">
              <label class="custom-checkbox">
                <input type="checkbox" ${item.checked ? 'checked' : ''} onchange="toggleItemChecked('${member.username}', '${item.id}', this.checked)">
                <span class="checkbox-checkmark"></span>
              </label>
              <span class="packing-item-text">${item.text}</span>
              ${item.alert ?  `<span style="font-size:0.7rem; color:var(--warning); background:rgba(245,158,11,0.1); padding:0.1rem 0.4rem; border-radius:4px; margin-left:0.5rem;">⏰ เตือนทุก ${item.alert.hours} ชม. (${item.alert.count} ครั้ง)</span>` : ''}
            </div>
            <div class="packing-item-right">
              <button class="bell-btn ${alertBellActive}" title="ตั้งเวลาแจ้งเตือน" onclick="openAlertSettingsDialog('${member.username}', '${item.id}')">🔔</button>
              <button class="btn-danger btn btn-sm" style="padding:0.2rem 0.4rem;" onclick="deletePackItem('${member.username}', '${item.id}')">🗑️</button>
            </div>
          </div>
        `;
      });
    }

    accBox.innerHTML = `
      <div class="accordion-header" style="background:rgba(255,255,255,0.02)">
        <span class="accordion-title">👤 @${member.username.replace("@", "")} (${member.name}) ${isCurrentUser ? '(คุณ)' : ''}</span>
        <span style="font-size:0.8rem; color:var(--text-muted);">จัดแล้ว ${list.filter(i => i.checked).length}/${list.length} ชิ้น</span>
      </div>
      <div class="accordion-body" style="display:block;">
        <div class="packing-controls">
          <div class="sort-group">
            <label style="font-size:0.8rem; color:var(--text-muted)">จัดเรียง:</label>
            <select id="sort-pack-${member.username}" class="sort-select" onchange="changeMemberPackSort('${trip.id}', '${member.username}', this.value)">
              <option value="default" ${activeSort === 'default' ? 'selected' : ''}>เริ่มต้น</option>
              <option value="asc" ${activeSort === 'asc' ? 'selected' : ''}>ก - ฮ</option>
              <option value="desc" ${activeSort === 'desc' ? 'selected' : ''}>ฮ - ก</option>
              <option value="latest" ${activeSort === 'latest' ? 'selected' : ''}>ล่าสุด</option>
            </select>
          </div>
          
          <div style="display:flex; gap:0.5rem;">
            <button class="btn btn-secondary btn-sm" onclick="openUsePresetDialog('${member.username}')">🎒 ใช้พรีเซ็ท</button>
            <button class="btn btn-secondary btn-sm" onclick="openDefaultItemsDialog('${member.username}')">📋 รายการแนะนำ</button>
          </div>
        </div>
        
        <div class="packing-list" style="margin-bottom:1rem;">
          ${itemsHtml}
        </div>
        
        <div style="display:flex; gap:0.5rem;">
          <input type="text" id="new-pack-item-input-${member.username}" class="form-input" placeholder="พิมพ์สัมภาระที่ต้องการจัด..." style="font-size:0.85rem; padding:0.5rem 0.8rem;">
          <button class="btn btn-primary btn-sm" onclick="addPackItem('${member.username}')">➕ เพิ่มสัมภาระ</button>
        </div>
      </div>
    `;
    accsContainer.appendChild(accBox);
  });
}

function changeMemberPackSort(tripId, username, value) {
  const trip = STATE.trips.find(t => t.id === tripId);
  if (trip) {
    trip.sortPack = trip.sortPack || {};
    trip.sortPack[username] = value;
    renderTabContent();
  }
}

function sortItemsList(list, sortType) {
  let listCopy = [...list];
  if (sortType === "asc") {
    listCopy.sort((a, b) => a.text.localeCompare(b.text, 'th'));
  } else if (sortType === "desc") {
    listCopy.sort((a, b) => b.text.localeCompare(a.text, 'th'));
  } else if (sortType === "latest") {
    listCopy.reverse(); // assuming state is pushed sequentially
  }
  return listCopy;
}

function toggleItemChecked(username, itemId, isChecked) {
  const trip = STATE.trips.find(t => t.id === STATE.activeTripId);
  const list = trip.packingList[username] || [];
  const item = list.find(i => i.id === itemId);
  if (item) {
    item.checked = isChecked;
    renderTabContent();
    showToast(isChecked ? "จัดสัมภาระชิ้นนี้แล้ว" : "ยกเลิกเครื่องหมายการจัดสัมภาระ", "info");
  }
}

function addPackItem(username) {
  const input = document.getElementById(`new-pack-item-input-${username}`);
  const val = input.value.trim();
  if (!val) return;

  const trip = STATE.trips.find(t => t.id === STATE.activeTripId);
  if (trip) {
    trip.packingList[username].push({
      id: `pack-${Date.now()}`,
      text: val,
      checked: false,
      alert: null
    });
    input.value = "";
    renderTabContent();
    showToast(`เพิ่ม "${val}" ในรายการจัดกระเป๋าแล้ว`, "success");
  }
}

function deletePackItem(username, itemId) {
  const trip = STATE.trips.find(t => t.id === STATE.activeTripId);
  if (trip) {
    trip.packingList[username] = trip.packingList[username].filter(i => i.id !== itemId);
    renderTabContent();
    showToast("ลบสัมภาระออกจากกระเป๋าแล้ว", "info");
  }
}

// 3.2.3.2 Use Preset Popup flow
function openUsePresetDialog(targetUsername) {
  const body = document.getElementById("confirm-modal-body");
  body.innerHTML = `
    <div class="form-group">
      <label class="form-label">เลือกพรีเซ็ทสัมภาระ</label>
      <select id="use-preset-selection-dropdown" class="form-input">
        <!-- Render from STATE.presets -->
      </select>
    </div>
  `;

  const dropdown = document.getElementById("use-preset-selection-dropdown");
  dropdown.innerHTML = STATE.presets.map(p => `<option value="${p.id}">${p.name} (${p.items.length} รายการ)</option>`).join("");

  if (STATE.presets.length === 0) {
    body.innerHTML = `<p style="text-align:center; padding:1rem; color:var(--text-muted);">คุณยังไม่มีพรีเซ็ทสำหรับจัดกระเป๋า ไปสร้างที่หน้าแรกก่อนนะ!</p>`;
    Dialog.open("confirm-modal", null);
    return;
  }

  Dialog.open("confirm-modal", () => {
    const selectedPresetId = dropdown.value;
    const preset = STATE.presets.find(p => p.id === selectedPresetId);
    const trip = STATE.trips.find(t => t.id === STATE.activeTripId);

    if (preset && trip) {
      preset.items.forEach(text => {
        trip.packingList[targetUsername].push({
          id: `pack-pre-${Date.now()}-${Math.random()}`,
          text: text,
          checked: false,
          alert: null
        });
      });

      renderTabContent();
      showToast(`โหลดพรีเซ็ท "${preset.name}" สำเร็จ!`, "success");
    }
  });
}

// 3.2.3.3 Recommendation dialog template
function openDefaultItemsDialog(targetUsername) {
  const body = document.getElementById("confirm-modal-body");
  body.innerHTML = `
    <h4 style="margin-bottom:0.8rem; font-family:var(--font-logo);">รายการสำเร็จรูปที่แนะนำ</h4>
    
    <div class="accordion-box active" style="margin-bottom:0.5rem;">
      <div class="accordion-header" style="padding:0.6rem 0.8rem; font-size:0.85rem;" onclick="event.stopPropagation(); toggleCheckboxCategory('bath')">
        <span>🚿 เกี่ยวกับการอาบน้ำ</span>
        <input type="checkbox" id="cat-select-bath" onchange="toggleCategorySelectAll('bath', this.checked)">
      </div>
      <div class="accordion-body" style="display:block; padding:0.5rem 1rem;">
        <label><input type="checkbox" class="cat-item-bath" value="สบู่และแชมพู"> สบู่และแชมพู</label><br>
        <label><input type="checkbox" class="cat-item-bath" value="ยาสีฟันและแปรงสีฟัน"> ยาสีฟันและแปรงสีฟัน</label><br>
        <label><input type="checkbox" class="cat-item-bath" value="โฟมล้างหน้า"> โฟมล้างหน้า</label>
      </div>
    </div>

    <div class="accordion-box active" style="margin-bottom:0.5rem;">
      <div class="accordion-header" style="padding:0.6rem 0.8rem; font-size:0.85rem;">
        <span>💍 เครื่องประดับ</span>
        <input type="checkbox" id="cat-select-acc" onchange="toggleCategorySelectAll('acc', this.checked)">
      </div>
      <div class="accordion-body" style="display:block; padding:0.5rem 1rem;">
        <label><input type="checkbox" class="cat-item-acc" value="นาฬิกาข้อมือ"> นาฬิกาข้อมือ</label><br>
        <label><input type="checkbox" class="cat-item-acc" value="สร้อยคอ"> สร้อยคอ</label><br>
        <label><input type="checkbox" class="cat-item-acc" value="แว่นตากันแดด"> แว่นตากันแดด</label>
      </div>
    </div>

    <div class="accordion-box active" style="margin-bottom:0.5rem;">
      <div class="accordion-header" style="padding:0.6rem 0.8rem; font-size:0.85rem;">
        <span>✈️ สิ่งที่จำเป็นต่อการเดินทาง</span>
        <input type="checkbox" id="cat-select-ess" onchange="toggleCategorySelectAll('ess', this.checked)">
      </div>
      <div class="accordion-body" style="display:block; padding:0.5rem 1rem;">
        <label><input type="checkbox" class="cat-item-ess" value="หนังสือเดินทาง (Passport)"> หนังสือเดินทาง (Passport)</label><br>
        <label><input type="checkbox" class="cat-item-ess" value="สายชาร์จและพาวเวอร์แบงค์"> สายชาร์จและพาวเวอร์แบงค์</label><br>
        <label><input type="checkbox" class="cat-item-ess" value="ตั๋วเครื่องบิน/ตั๋วเดินทาง"> ตั๋วเครื่องบิน/ตั๋วเดินทาง</label>
      </div>
    </div>

    <div class="accordion-box active" style="margin-bottom:0.5rem;">
      <div class="accordion-header" style="padding:0.6rem 0.8rem; font-size:0.85rem;">
        <span>👶 เกี่ยวกับเด็กเล็ก</span>
        <input type="checkbox" id="cat-select-kids" onchange="toggleCategorySelectAll('kids', this.checked)">
      </div>
      <div class="accordion-body" style="display:block; padding:0.5rem 1rem;">
        <label><input type="checkbox" class="cat-item-kids" value="แพมเพิสเด็ก"> แพมเพิสเด็ก</label><br>
        <label><input type="checkbox" class="cat-item-kids" value="ขวดนมและนมผง"> ขวดนมและนมผง</label><br>
        <label><input type="checkbox" class="cat-item-kids" value="ทิชชู่เปียกสูตรอ่อนโยน"> ทิชชู่เปียกสูตรอ่อนโยน</label>
      </div>
    </div>

    <div class="accordion-box active" style="margin-bottom:0.5rem;">
      <div class="accordion-header" style="padding:0.6rem 0.8rem; font-size:0.85rem;">
        <span>🐱 สัตว์เลี้ยง</span>
        <input type="checkbox" id="cat-select-pets" onchange="toggleCategorySelectAll('pets', this.checked)">
      </div>
      <div class="accordion-body" style="display:block; padding:0.5rem 1rem;">
        <label><input type="checkbox" class="cat-item-pets" value="อาหารเม็ดสัตว์เลี้ยง"> อาหารเม็ดสัตว์เลี้ยง</label><br>
        <label><input type="checkbox" class="cat-item-pets" value="สายจูง"> สายจูง</label><br>
        <label><input type="checkbox" class="cat-item-pets" value="แผ่นรองซับสิ่งปฏิกูล"> แผ่นรองซับสิ่งปฏิกูล</label>
      </div>
    </div>
  `;

  Dialog.open("confirm-modal", () => {
    const checkedBoxes = document.querySelectorAll("#confirm-modal-body input[type='checkbox']:checked:not([id^='cat-select'])");
    const trip = STATE.trips.find(t => t.id === STATE.activeTripId);

    if (trip && checkedBoxes.length > 0) {
      checkedBoxes.forEach(box => {
        trip.packingList[targetUsername].push({
          id: `pack-rec-${Date.now()}-${Math.random()}`,
          text: box.value,
          checked: false,
          alert: null
        });
      });
      renderTabContent();
      showToast(`เพิ่มสัมภาระแนะนำ ${checkedBoxes.length} รายการแล้ว`, "success");
    }
  });
}

function toggleCategorySelectAll(catCode, isChecked) {
  document.querySelectorAll(`.cat-item-${catCode}`).forEach(box => {
    box.checked = isChecked;
  });
}

// 3.2.3.5 Alarm Bell setup dialog
function openAlertSettingsDialog(username, itemId) {
  const trip = STATE.trips.find(t => t.id === STATE.activeTripId);
  const item = trip.packingList[username].find(i => i.id === itemId);
  if (!item) return;

  const body = document.getElementById("confirm-modal-body");
  body.innerHTML = `
    <h3 style="margin-bottom:0.8rem;">ตั้งเวลาการแจ้งเตือนอีเมล</h3>
    <p style="color:var(--text-muted); font-size:0.85rem; margin-bottom:1rem;">ระบบจะส่งการแจ้งเตือนเตือนสิ่งของ: "${item.text}" ที่ยังจัดไม่เสร็จ</p>
    
    <div class="form-group">
      <label class="form-label">เตือนฉันอีกในทุกๆ (ชั่วโมง และ นาที)</label>
      <div style="display:flex; gap:0.5rem;">
        <input type="number" id="alert-hours" class="form-input" min="0" max="23" value="${item.alert ? item.alert.hours : 1}">
        <span style="align-self:center;">ชม.</span>
        <input type="number" id="alert-mins" class="form-input" min="0" max="59" value="${item.alert ? item.alert.mins : 0}">
        <span style="align-self:center;">นาที</span>
      </div>
    </div>
    
    <div class="form-group">
      <label class="form-label">เลือกจำนวนครั้งในการเตือน</label>
      <div style="display:flex; gap:0.5rem; margin-bottom:0.8rem;">
        <button class="btn btn-secondary btn-sm" onclick="setPresetAlertCount(1)">1 ครั้ง</button>
        <button class="btn btn-secondary btn-sm" onclick="setPresetAlertCount(3)">3 ครั้ง</button>
        <button class="btn btn-secondary btn-sm" onclick="setPresetAlertCount(5)">5 ครั้ง</button>
      </div>
      <input type="number" id="alert-count-custom" class="form-input" placeholder="หรือกำหนดจำนวนครั้งเตือนเอง..." value="${item.alert ? item.alert.count : ''}">
    </div>
  `;

  Dialog.open("confirm-modal", () => {
    const hours = parseInt(document.getElementById("alert-hours").value) || 0;
    const mins = parseInt(document.getElementById("alert-mins").value) || 0;
    const count = parseInt(document.getElementById("alert-count-custom").value) || 1;

    if (hours === 0 && mins === 0) {
      item.alert = null; // Clear alert
      showToast("ยกเลิกการตั้งเวลาแจ้งเตือน", "info");
    } else {
      item.alert = { hours, mins, count };
      showToast(`ตั้งการแจ้งเตือนอีเมลสำเร็จแล้ว ทุก ${hours} ชั่วโมง ${mins} นาที สำหรับ "${item.text}"`, "success");
    }
    renderTabContent();
  });
}

function setPresetAlertCount(cnt) {
  document.getElementById("alert-count-custom").value = cnt;
}

// -------------------------------------------------------------
// TAB 3.3: SHARED PACKING LIST TAB
// -------------------------------------------------------------
function renderSharedPackTab(trip, container) {
  // Initialize sorting state if not present
  trip.sortShared = trip.sortShared || "default";

  container.innerHTML = `
    <div style="margin-bottom:1.5rem;">
      <h3 style="margin-bottom:0.2rem;">ของที่ใช้ร่วมกัน</h3>
      <p style="color:var(--text-muted); font-size:0.9rem;">สิ่งของสัมภาระส่วนกลางที่ทุกคนสามารถนำมาร่วมทริปได้</p>
    </div>
    
    <div class="packing-controls">
      <div class="sort-group">
        <label style="font-size:0.8rem; color:var(--text-muted)">จัดเรียง:</label>
        <select id="sort-shared-pack" class="sort-select" onchange="changeSharedPackSort(this.value)">
          <option value="default" ${trip.sortShared === 'default' ? 'selected' : ''}>เริ่มต้น</option>
          <option value="asc" ${trip.sortShared === 'asc' ? 'selected' : ''}>ก - ฮ</option>
          <option value="desc" ${trip.sortShared === 'desc' ? 'selected' : ''}>ฮ - ก</option>
          <option value="latest" ${trip.sortShared === 'latest' ? 'selected' : ''}>ล่าสุด</option>
        </select>
      </div>
    </div>
    
    <div id="shared-pack-items-list" class="packing-list" style="margin-bottom:1.5rem;"></div>
    
    <div style="display:flex; gap:0.5rem;">
      <input type="text" id="new-shared-pack-input" class="form-input" style="placeholder-color:black;" placeholder="พิมพ์ชื่อสัมภาระกองกลางที่นี่...">
      <button class="btn btn-primary" onclick="addSharedPackItem()">เพิ่มสัมภาระ</button>
    </div>
  `;

  const listContainer = document.getElementById("shared-pack-items-list");
  listContainer.innerHTML = "";

  const sorted = sortItemsList(trip.sharedPackingList, trip.sortShared);

  if (sorted.length === 0) {
    listContainer.innerHTML = `<div style="text-align:center; padding:1.5rem; color:var(--text-dim); font-size:0.85rem;">ยังไม่มีของใช้ร่วมกันในขณะนี้</div>`;
    return;
  }

  sorted.forEach(item => {
    const isChecked = item.checked ? "checked" : "";
    const creatorText = item.creator ? `เพิ่มโดย ${item.creator}` : "เพิ่มโดยระบบ";
    const alertBellActive = item.alert ? "active" : "";

    const el = document.createElement("div");
    el.className = `packing-item ${isChecked}`;
    el.innerHTML = `
      <div style="display:flex; flex-direction:column; flex-grow:1; gap:0.25rem;">
        <div class="packing-item-left">
          <label class="custom-checkbox">
            <input type="checkbox" ${item.checked ? 'checked' : ''} onchange="toggleSharedItemChecked('${item.id}', this.checked)">
            <span class="checkbox-checkmark"></span>
          </label>
          <span class="packing-item-text">${item.text}</span>
          ${item.alert ? `<span style="font-size:0.7rem; color:var(--warning); background:rgba(245,158,11,0.1); padding:0.1rem 0.4rem; border-radius:4px; margin-left:0.5rem;">⏰ เตือนทุก ${item.alert.hours} ชม. (${item.alert.count} ครั้ง)</span>` : ''}
        </div>
        <div style="font-size:0.75rem; color:var(--text-dim); padding-left:1.8rem; display:flex; flex-wrap:wrap; gap:0.8rem; align-items:center;">
          <span>📝 ${creatorText}</span>
          <span>👤 ผู้รับผิดชอบ: <strong>${item.responsible || 'ยังไม่มี'}</strong></span>
          <select class="sort-select" style="font-size:0.7rem; padding:0.1rem 0.3rem;" onchange="assignSharedItemResponsible('${item.id}', this.value)">
            <option value="">-- มอบหมาย --</option>
            ${trip.members.map(m => `<option value="${m.username}" ${item.responsible === m.username ? 'selected' : ''}>${m.name}</option>`).join("")}
            ${item.responsible ? `<option value="clear">❌ ยกเลิก</option>` : ''}
          </select>
        </div>
      </div>
      <div class="packing-item-right">
        <button class="bell-btn ${alertBellActive}" title="ตั้งเวลาแจ้งเตือน" onclick="openSharedItemAlertSettingsDialog('${item.id}')">🔔</button>
        <button class="btn-danger btn btn-sm" style="padding:0.2rem 0.4rem;" onclick="deleteSharedPackItem('${item.id}')">🗑️</button>
      </div>
    `;
    listContainer.appendChild(el);
  });
}

function changeSharedPackSort(value) {
  const trip = STATE.trips.find(t => t.id === STATE.activeTripId);
  if (trip) {
    trip.sortShared = value;
    renderTabContent();
  }
}

function assignSharedItemResponsible(itemId, username) {
  const trip = STATE.trips.find(t => t.id === STATE.activeTripId);
  if (!trip) return;
  const item = trip.sharedPackingList.find(i => i.id === itemId);
  if (item) {
    if (username === "clear" || !username) {
      item.responsible = null;
      showToast("ยกเลิกผู้รับผิดชอบสัมภาระกลาง", "info");
    } else {
      item.responsible = username;
      showToast(`มอบหมายให้ ${username} รับผิดชอบสัมภาระนี้แล้ว`, "success");
    }
    renderTabContent();
  }
}

function openSharedItemAlertSettingsDialog(itemId) {
  const trip = STATE.trips.find(t => t.id === STATE.activeTripId);
  if (!trip) return;
  const item = trip.sharedPackingList.find(i => i.id === itemId);
  if (!item) return;

  const body = document.getElementById("confirm-modal-body");
  body.innerHTML = `
    <h3 style="margin-bottom:0.8rem;">ตั้งเวลาแจ้งเตือนสัมภาระกลาง</h3>
    <p style="color:var(--text-muted); font-size:0.85rem; margin-bottom:1rem;">ระบบจะแจ้งเตือนเตือนสิ่งของ: "${item.text}" ที่ยังจัดไม่เสร็จ</p>
    
    <div class="form-group">
      <label class="form-label">เตือนฉันอีกในทุกๆ (ชั่วโมง และ นาที)</label>
      <div style="display:flex; gap:0.5rem;">
        <input type="number" id="alert-shared-hours" class="form-input" min="0" max="23" value="${item.alert ? item.alert.hours : 1}">
        <span style="align-self:center;">ชม.</span>
        <input type="number" id="alert-shared-mins" class="form-input" min="0" max="59" value="${item.alert ? item.alert.mins : 0}">
        <span style="align-self:center;">นาที</span>
      </div>
    </div>
    
    <div class="form-group">
      <label class="form-label">เลือกจำนวนครั้งในการเตือน</label>
      <div style="display:flex; gap:0.5rem; margin-bottom:0.8rem;">
        <button class="btn btn-secondary btn-sm" onclick="setPresetSharedAlertCount(1)">1 ครั้ง</button>
        <button class="btn btn-secondary btn-sm" onclick="setPresetSharedAlertCount(3)">3 ครั้ง</button>
        <button class="btn btn-secondary btn-sm" onclick="setPresetSharedAlertCount(5)">5 ครั้ง</button>
      </div>
      <input type="number" id="alert-shared-count-custom" class="form-input" placeholder="หรือกำหนดจำนวนครั้งเตือนเอง..." value="${item.alert ? item.alert.count : ''}">
    </div>
  `;

  Dialog.open("confirm-modal", () => {
    const hours = parseInt(document.getElementById("alert-shared-hours").value) || 0;
    const mins = parseInt(document.getElementById("alert-shared-mins").value) || 0;
    const count = parseInt(document.getElementById("alert-shared-count-custom").value) || 1;

    if (hours === 0 && mins === 0) {
      item.alert = null;
      showToast("ยกเลิกการตั้งเวลาแจ้งเตือนสัมภาระกลาง", "info");
    } else {
      item.alert = { hours, mins, count };
      showToast(`ตั้งแจ้งเตือนสำเร็จแล้ว สำหรับ "${item.text}"`, "success");
    }
    renderTabContent();
  });
}

function setPresetSharedAlertCount(cnt) {
  document.getElementById("alert-shared-count-custom").value = cnt;
}

function toggleSharedItemChecked(itemId, isChecked) {
  const trip = STATE.trips.find(t => t.id === STATE.activeTripId);
  const item = trip.sharedPackingList.find(i => i.id === itemId);
  if (item) {
    item.checked = isChecked;
    renderTabContent();
    showToast(isChecked ? "จัดสัมภาระร่วมกันชิ้นนี้เรียบร้อย" : "ยกเลิกจัดสัมภาระร่วมกัน", "info");
  }
}

function addSharedPackItem() {
  const input = document.getElementById("new-shared-pack-input");
  const val = input.value.trim();
  if (!val) return;

  const trip = STATE.trips.find(t => t.id === STATE.activeTripId);
  if (trip) {
    trip.sharedPackingList.push({
      id: `shared-${Date.now()}`,
      text: val,
      checked: false,
      creator: STATE.currentUser.username,
      responsible: null,
      alert: null
    });
    input.value = "";
    renderTabContent();
    showToast(`เพิ่มสัมภาระกลาง "${val}" เรียบร้อย`, "success");
  }
}

function deleteSharedPackItem(itemId) {
  const trip = STATE.trips.find(t => t.id === STATE.activeTripId);
  if (trip) {
    trip.sharedPackingList = trip.sharedPackingList.filter(i => i.id !== itemId);
    renderTabContent();
    showToast("ลบสัมภาระกองกลางเรียบร้อย", "info");
  }
}

// -------------------------------------------------------------
// TAB 3.4: SHOPPING LIST & SPLITTING EXPENSES
// -------------------------------------------------------------
function renderShoppingTab(trip, container) {
  container.innerHTML = `
    <div style="margin-bottom:1.5rem;">
      <h3 style="margin-bottom:0.2rem;">สิ่งที่จะซื้อเพิ่ม (Shopping & Bills)</h3>
      <p style="color:var(--text-muted); font-size:0.9rem;">วางแผนและหารค่าใช้จ่ายสำหรับของที่จำยอมต้องซื้อร่วมกัน</p>
    </div>
    
    <div id="shopping-accordion" class="accordion-box active">
      <div class="accordion-header">
        <span>🛒 รายการสิ่งที่ซื้อเพิ่ม</span>
        <span>ยอดใช้จ่ายรวม: ${calculateTripExpensesSum(trip).toLocaleString()} บาท</span>
      </div>
      <div class="accordion-body" style="display:block;">
        <div id="shopping-items-list-box" class="packing-list" style="margin-bottom:1.5rem;">
          <!-- List goes here -->
        </div>
        
        <h4 style="margin-bottom:0.8rem; font-family:var(--font-logo);">เพิ่มของที่จะซื้อเพิ่ม</h4>
        
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.8rem; margin-bottom:0.8rem;">
          <div>
            <label class="form-label" style="font-size:0.75rem;">ชื่อรายการสิ่งของ</label>
            <input type="text" id="shop-new-text" class="form-input" placeholder="เช่น ค่าเครื่องดื่มเบียร์ปาร์ตี้">
          </div>
          <div>
            <label class="form-label" style="font-size:0.75rem;">ประเภทการซื้อ</label>
            <select id="shop-new-category" class="form-input">
              <option value="food">🍔 อาหาร</option>
              <option value="fuel">⛽ น้ำมัน</option>
              <option value="travel">✈️ ค่าเดินทาง</option>
              <option value="shopping">🛍️ ช้อปปิ้ง</option>
            </select>
          </div>
        </div>
        
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.8rem; margin-bottom:1rem;">
          <div>
            <label class="form-label" style="font-size:0.75rem;">จำนวน</label>
            <div style="display:flex; gap:0.3rem;">
              <button class="btn" onclick="adjustNewShopQty(-1)">-</button>
              <input type="number" id="shop-new-qty" class="form-input" style="text-align:center;" value="1" min="1">
              <button class="btn" onclick="adjustNewShopQty(1)">+</button>
            </div>
          </div>
          <div>
            <label class="form-label" style="font-size:0.75rem;">ราคาต่อหน่วย (บาท)</label>
            <input type="number" id="shop-new-price" class="form-input" placeholder="ใส่ราคาเป็นตัวเลข..." value="0">
          </div>
        </div>
        
        <button class="btn btn-primary" style="width:100%;" onclick="triggerSetExpensePayer()">ตกลง (เลือกคนจ่าย & คนหาร)</button>
      </div>
    </div>
  `;

  renderShoppingItemsList(trip);
}

function adjustNewShopQty(val) {
  const el = document.getElementById("shop-new-qty");
  let cur = parseInt(el.value) || 1;
  cur = Math.max(1, cur + val);
  el.value = cur;
}

function renderShoppingItemsList(trip) {
  const listContainer = document.getElementById("shopping-items-list-box");
  listContainer.innerHTML = "";

  if (trip.shoppingList.length === 0) {
    listContainer.innerHTML = `<div style="text-align:center; padding:1.5rem; color:var(--text-dim); font-size:0.85rem;">ยังไม่มีการบันทึกรายการใช้จ่าย</div>`;
    return;
  }

  trip.shoppingList.forEach(item => {
    const total = item.qty * item.price;
    const catIcons = { food: "🍔", fuel: "⛽", travel: "✈️", shopping: "🛍️" };

    // Split description string
    let splitText = "";
    if (item.splitType === "all") {
      splitText = "หารเฉลี่ยเท่ากันทุกคน";
    } else if (item.splitType === "select") {
      splitText = `หารเฉพาะผู้เข้าร่วม: ${item.splitMembers.join(", ")}`;
    } else {
      splitText = "ไม่หาร (รับผิดชอบทั้งหมดโดยผู้จ่าย)";
    }

    const div = document.createElement("div");
    div.className = "packing-item";
    div.style.flexDirection = "column";
    div.style.alignItems = "stretch";
    div.style.gap = "0.5rem";

    div.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <span style="font-weight:600; font-size:1rem;">${catIcons[item.category] || "🛍️"} ${item.text}</span>
        <span style="font-weight:700; color:var(--accent-purple); font-size:1rem;">${total.toLocaleString()}฿</span>
      </div>
      
      <div style="display:flex; justify-content:space-between; align-items:center; font-size:0.8rem; color:var(--text-muted);">
        <span>จำนวน: <strong>${item.qty} ชิ้น</strong> x ราคา ${item.price}฿</span>
        <span>จ่ายโดย: <strong>${item.payee}</strong></span>
      </div>
      
      <div style="font-size:0.75rem; color:var(--text-dim); border-top:1px solid rgba(255,255,255,0.05); padding-top:0.4rem; display:flex; justify-content:space-between; align-items:center;">
        <span>📝 บันทึกโดย ${item.creator} | Split: ${splitText}</span>
        <div style="display:flex; gap:0.3rem;">
          <button class="btn btn-secondary btn-sm" style="padding:0.1rem 0.4rem; font-size:0.75rem;" onclick="incrementShoppingQty('${item.id}')">ซื้อเพิ่ม +1</button>
          <button class="btn btn-secondary btn-sm" style="padding:0.1rem 0.4rem; font-size:0.75rem;" onclick="viewExpenseDetailModal('${item.id}')">รายละเอียด</button>
          <button class="btn-danger btn btn-sm" style="padding:0.1rem 0.4rem; font-size:0.75rem;" onclick="deleteExpenseItem('${item.id}')">ลบการซื้อ</button>
        </div>
      </div>
    `;
    listContainer.appendChild(div);
  });
}

function calculateTripExpensesSum(trip) {
  let total = 0;
  trip.shoppingList.forEach(item => {
    total += item.qty * item.price;
  });
  return total;
}

function triggerSetExpensePayer() {
  const text = document.getElementById("shop-new-text").value.trim();
  const cat = document.getElementById("shop-new-category").value;
  const qty = parseInt(document.getElementById("shop-new-qty").value) || 1;
  const price = parseFloat(document.getElementById("shop-new-price").value) || 0;

  if (!text) {
    showToast("กรุณาป้อนชื่อสัมภาระที่จะซื้อ!", "warning");
    return;
  }
  if (price <= 0) {
    showToast("กรุณากรอกราคาที่มากกว่า 0!", "warning");
    return;
  }

  const trip = STATE.trips.find(t => t.id === STATE.activeTripId);
  if (!trip) return;

  // Render Popup "เพิ่มการจ่าย"
  const body = document.getElementById("confirm-modal-body");
  body.innerHTML = `
    <h4 style="margin-bottom:0.8rem; font-family:var(--font-logo);">เพิ่มการจ่ายเงิน</h4>
    <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:1rem;">รายการ: ${text} | รวม: ${(qty * price).toLocaleString()}฿</p>
    
    <div class="form-group">
      <label class="form-label">จ่ายโดย (Paid by)</label>
      <select id="expense-payee-select" class="form-input">
        ${trip.members.map(m => `<option value="${m.username}">${m.name} (${m.username})</option>`).join("")}
      </select>
    </div>
    
    <div class="form-group">
      <label class="form-label">วิธีการหารค่าใช้จ่าย</label>
      <div style="display:flex; flex-direction:column; gap:0.5rem; background:rgba(0,0,0,0.2); padding:0.8rem; border-radius:8px; border:1px solid var(--border-color);">
        <label><input type="radio" name="split-radio" value="all" checked onchange="toggleSplitTypeSelection('all')"> หารเท่ากันทุกคน</label>
        <label><input type="radio" name="split-radio" value="none" onchange="toggleSplitTypeSelection('none')"> ไม่หาร (จ่ายเองทั้งหมด)</label>
        <label><input type="radio" name="split-radio" value="select" onchange="toggleSplitTypeSelection('select')"> เลือกคนหารเฉพาะเจาะจง...</label>
      </div>
    </div>
    
    <div class="form-group" id="split-checkboxes-wrapper" style="display:none;">
      <label class="form-label">เลือกผู้ร่วมหาร</label>
      <div style="display:flex; flex-direction:column; gap:0.4rem; padding-left:0.5rem;">
        ${trip.members.map(m => `<label><input type="checkbox" class="split-user-cb" value="${m.username}" checked> ${m.name}</label>`).join("")}
      </div>
    </div>
  `;

  Dialog.open("confirm-modal", () => {
    // Verified Confirm purchase
    const payee = document.getElementById("expense-payee-select").value;
    const splitType = document.querySelector('input[name="split-radio"]:checked').value;
    let splitMembers = [];

    if (splitType === "all") {
      splitMembers = trip.members.map(m => m.username);
    } else if (splitType === "select") {
      document.querySelectorAll(".split-user-cb:checked").forEach(cb => {
        splitMembers.push(cb.value);
      });
      if (splitMembers.length === 0) {
        showToast("ต้องเลือกผู้ร่วมหารอย่างน้อย 1 คน!", "warning");
        return;
      }
    } else {
      splitMembers = []; // none
    }

    const newItem = {
      id: `shop-${Date.now()}`,
      text: text,
      category: cat,
      qty: qty,
      price: price,
      payee: payee,
      splitType: splitType,
      splitMembers: splitMembers,
      creator: STATE.currentUser.username
    };

    trip.shoppingList.push(newItem);

    // Clear shopping fields
    document.getElementById("shop-new-text").value = "";
    document.getElementById("shop-new-price").value = "0";
    document.getElementById("shop-new-qty").value = "1";

    renderTabContent();
    showToast(`ยืนยันการบันทึกค่าใช้จ่าย "${text}" เรียบร้อย`, "success");
  });
}

function toggleSplitTypeSelection(type) {
  const wrap = document.getElementById("split-checkboxes-wrapper");
  if (type === "select") {
    wrap.style.display = "block";
  } else {
    wrap.style.display = "none";
  }
}

function deleteExpenseItem(itemId) {
  const trip = STATE.trips.find(t => t.id === STATE.activeTripId);
  if (trip) {
    trip.shoppingList = trip.shoppingList.filter(i => i.id !== itemId);
    renderTabContent();
    showToast("ลบรายการใช้จ่ายเรียบร้อยและอัปเดตยอดคงเหลือแล้ว", "info");
  }
}

function incrementShoppingQty(itemId) {
  const trip = STATE.trips.find(t => t.id === STATE.activeTripId);
  if (trip) {
    const item = trip.shoppingList.find(i => i.id === itemId);
    if (item) {
      item.qty += 1;
      renderTabContent();
      showToast(`ซื้อ "${item.text}" เพิ่มเติม +1 ชิ้น เรียบร้อย`, "success");
    }
  }
}

function viewExpenseDetailModal(itemId) {
  const trip = STATE.trips.find(t => t.id === STATE.activeTripId);
  if (!trip) return;
  const item = trip.shoppingList.find(i => i.id === itemId);
  if (!item) return;

  const body = document.getElementById("confirm-modal-body");

  let splitDetailStr = "";
  if (item.splitType === "all") {
    splitDetailStr = "ทุกคนในทริปหารเท่ากัน";
  } else if (item.splitType === "select") {
    splitDetailStr = `สมาชิกที่เข้าร่วมหาร: ${item.splitMembers.join(", ")}`;
  } else {
    splitDetailStr = "ไม่ต้องหาร (จ่ายเองโดยผู้ซื้อ)";
  }

  body.innerHTML = `
    <h3 style="margin-bottom:0.8rem; font-family:var(--font-logo);">รายละเอียดการใช้จ่าย</h3>
    <table style="width:100%; font-size:0.85rem;">
      <tr><td>รายการ</td><td><strong>${item.text}</strong></td></tr>
      <tr><td>ราคาชิ้นละ</td><td>${item.price.toLocaleString()}฿</td></tr>
      <tr><td>จำนวน</td><td>${item.qty} ชิ้น</td></tr>
      <tr><td>ราคารวม</td><td><strong>${(item.qty * item.price).toLocaleString()}฿</strong></td></tr>
      <tr><td>ผู้สำรองจ่าย</td><td>${item.payee}</td></tr>
      <tr><td>การหาร</td><td>${splitDetailStr}</td></tr>
      <tr><td>หมวดหมู่</td><td>${item.category}</td></tr>
    </table>
  `;

  Dialog.open("confirm-modal", null); // simple popup detail
}

// -------------------------------------------------------------
// TAB 3.5: BUDGET & SPLITTING TABLE
// -------------------------------------------------------------
function renderBudgetTab(trip, container) {
  // 1. Math calculation for settlements
  const calculations = calculateTripBalances(trip);

  // Update budget progress bar status
  const currentTotal = calculations.totalSpent;
  const budgetLimit = trip.budget;
  const percentage = budgetLimit > 0 ? Math.min(100, (currentTotal / budgetLimit) * 100) : 0;

  const barClass = currentTotal > budgetLimit ? "over-budget" : "";

  container.innerHTML = `
    <div style="margin-bottom:1.5rem;">
      <h3>จัดการงบประมาณกลุ่ม (Budget Management)</h3>
      <p style="color:var(--text-muted); font-size:0.9rem;">ติดตามค่าใช้จ่าย สัดส่วนงบประมาณของสมาชิก และสรุปยอดที่ต้องเคลียร์เงิน</p>
    </div>
    
    <!-- Budget Progress Bar -->
    <div class="budget-progress-container">
      <div class="budget-progress-labels">
        <span>งบประมาณกองกลาง: <strong>${currentTotal.toLocaleString()}฿</strong> / ${budgetLimit.toLocaleString()}฿ (${percentage.toFixed(1)}%)</span>
        
      </div>
      <div class="budget-bar-outer">
        <div class="budget-bar-inner ${barClass}" style="width: ${percentage}%"></div>
      </div>
      ${!STATE.viewOnlyCommunity ? `
        <button class="btn btn-secondary btn-sm" style="margin-top:0.8rem;" onclick="openEditBudgetDialog()">✏️ แก้ไขเป้าหมายงบประมาณกลุ่ม</button>
      ` : ''}
    </div>
    
    <!-- individual member stats table -->
    <h4 style="margin-bottom:0.8rem; font-family:var(--font-logo);">รายละเอียดตารางค่าใช้จ่ายของสมาชิก</h4>
    <div class="table-responsive">
      <table>
        <thead>
          <tr>
            <th>สมาชิก</th>
            <th>ใช้จ่ายทั้งหมด</th>
          </tr>
        </thead>
        <tbody>
          ${trip.members.map(member => {
    const owes = calculations.membersOwes[member.username] || 0;
    return `
              <tr>
                <td><strong> ${member.name}</strong> (${member.username})</td>
                <td>${owes.toLocaleString(undefined, { maximumFractionDigits: 2 })}฿</td>
              </tr>
            `;
  }).join("")}
        </tbody>
      </table>
    </div>

    <!-- settlement summaries -->
    <h4 style="margin-bottom:0.8rem; font-family:var(--font-logo);">ตารางสรุปการจ่ายหนี้และคืนเงิน</h4>
    <div class="table-responsive">
      <table>
        <thead>
          <tr>
            <th>ชื่อสมาชิก</th>
            <th>สถานะการเงิน</th>
            <th>จำนวนเงิน</th>
          </tr>
        </thead>
        <tbody id="settlements-tbody">
          <!-- Render settlements dynamically -->
        </tbody>
      </table>
    </div>

    ${!STATE.viewOnlyCommunity ? `
      <!-- bank setup form table -->
      <h4 style="margin-bottom:0.8rem; font-family:var(--font-logo);">ข้อมูลธนาคารของสมาชิก</h4>
      <div class="table-responsive">
        <table>
          <thead>
            <tr>
              <th>สมาชิก</th>
              <th>ธนาคาร</th>
              <th>เลขบัญชี</th>
              <th>คิวอาร์ พร้อมเพย์ (PromptPay)</th>
              <th>จัดการ</th>
            </tr>
          </thead>
          <tbody>
            ${trip.members.map(member => {
    const details = trip.bankDetails.find(b => b.username === member.username) || { bank: "-", account: "-", qr: "" };
    const isCurrentUser = member.username === STATE.currentUser.username;

    return `
                <tr>
                  <td><strong>${member.name}</strong></td>
                  <td>${details.bank}</td>
                  <td>${details.account}</td>
                  <td>
                    ${details.qr ? `<img src="${details.qr}" class="qr-code-img" alt="QR PromptPay">` : '<span style="color:var(--text-dim);">ยังไม่ระบุคิวอาร์โค้ด</span>'}
                  </td>
                  <td>
                    ${isCurrentUser ? `
                      <button class="btn btn-secondary btn-sm" onclick="openEditBankDetailsDialog()">✏️ แก้ไขข้อมูล</button>
                    ` : '<span style="color:var(--text-dim); font-size:0.75rem;">แก้ไขได้เฉพาะตนเอง</span>'}
                  </td>
                </tr>
              `;
  }).join("")}
          </tbody>
        </table>
      </div>
    ` : ''}
  `;

  renderSettlements(calculations.settlements);
}

function openEditBudgetDialog() {
  const trip = STATE.trips.find(t => t.id === STATE.activeTripId);
  if (!trip) return;
  const body = document.getElementById("confirm-modal-body");
  body.innerHTML = `
    <div class="form-group">
      <label class="form-label">กำหนดเป้าหมายงบประมาณกลุ่ม (บาท)</label>
      <input type="number" id="edit-budget-limit-input" class="form-input" value="${trip.budget}">
    </div>
  `;
  Dialog.open("confirm-modal", () => {
    const val = parseFloat(document.getElementById("edit-budget-limit-input").value) || 0;
    if (val > 0) {
      trip.budget = val;
      renderTabContent();
      showToast("ปรับปรุงเป้าหมายงบประมาณแล้ว", "success");
    }
  });
}

function openEditBankDetailsDialog() {
  const trip = STATE.trips.find(t => t.id === STATE.activeTripId);
  if (!trip) return;
  const myUsername = STATE.currentUser.username;
  const details = trip.bankDetails.find(b => b.username === myUsername) || { bank: "KBANK", account: "", qr: "" };

  const body = document.getElementById("confirm-modal-body");
  body.innerHTML = `
    <h3 style="margin-bottom:0.8rem; font-family:var(--font-logo);">ตั้งค่าข้อมูลบัญชี</h3>
    <div class="form-group">
      <label class="form-label">เลือกธนาคาร</label>
      <select id="bank-name-select" class="form-input">
        <option value="KBANK" ${details.bank === 'KBANK' ? 'selected' : ''}>กสิกรไทย (KBANK)</option>
        <option value="SCB" ${details.bank === 'SCB' ? 'selected' : ''}>ไทยพาณิชย์ (SCB)</option>
        <option value="BBL" ${details.bank === 'BBL' ? 'selected' : ''}>กรุงเทพ (BBL)</option>
        <option value="KTB" ${details.bank === 'KTB' ? 'selected' : ''}>กรุงไทย (KTB)</option>
      </select>
    </div>
    <div class="form-group">
      <label class="form-label">เลขบัญชีธนาคาร</label>
      <input type="text" id="bank-account-num" class="form-input" placeholder="เช่น 012-3-45678-9" value="${details.account}">
    </div>
    <div class="form-group">
      <label class="form-label">อัปโหลดรูปพร้อมเพย์ (จำลองรูปผ่านลิงก์)</label>
      <input type="text" id="bank-qr-url" class="form-input" placeholder="ใส่ลิงก์ภาพคิวอาร์ (เว้นว่างเพื่อใช้ภาพจำลองอัตโนมัติ)" value="${details.qr}">
    </div>
  `;

  Dialog.open("confirm-modal", () => {
    const bank = document.getElementById("bank-name-select").value;
    const account = document.getElementById("bank-account-num").value.trim();
    let qr = document.getElementById("bank-qr-url").value.trim();

    if (account && !qr) {
      // Simulate PromptPay QR image generation
      qr = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=PromptPay_${account}`;
    }

    const dbIndex = trip.bankDetails.findIndex(b => b.username === myUsername);
    const info = { username: myUsername, bank, account, qr };

    if (dbIndex >= 0) {
      trip.bankDetails[dbIndex] = info;
    } else {
      trip.bankDetails.push(info);
    }

    renderTabContent();
    showToast("บันทึกข้อมูลบัญชีธนาคารสำเร็จ", "success");
  });
}

function calculateTripBalances(trip) {
  const membersPaid = {};
  const membersOwes = {};
  const membersSSD = {}; // individual solo expenditures (if splits are none)

  // Initialize
  trip.members.forEach(m => {
    membersPaid[m.username] = 0;
    membersOwes[m.username] = 0;
    membersSSD[m.username] = 0;
  });

  let totalSpent = 0;

  // Math loop through confirmed expenses
  trip.shoppingList.forEach(item => {
    const cost = item.qty * item.price;
    totalSpent += cost;

    // Add to payee's paid account
    if (membersPaid[item.payee] !== undefined) {
      membersPaid[item.payee] += cost;
    }

    // Add to split members owes account
    if (item.splitType === "all") {
      const share = cost / trip.members.length;
      trip.members.forEach(m => {
        membersOwes[m.username] += share;
      });
    } else if (item.splitType === "select" && item.splitMembers.length > 0) {
      const share = cost / item.splitMembers.length;
      item.splitMembers.forEach(username => {
        if (membersOwes[username] !== undefined) {
          membersOwes[username] += share;
        }
      });
    } else {
      // none (solo spending)
      if (membersOwes[item.payee] !== undefined) {
        membersOwes[item.payee] += cost;
        membersSSD[item.payee] += cost; // SSD award counter
      }
    }
  });

  // Compute net balances
  const balances = [];
  trip.members.forEach(m => {
    balances.push({
      username: m.username,
      name: m.name,
      net: membersPaid[m.username] - membersOwes[m.username]
    });
  });

  // Greedy settlement generator
  const settlements = [];
  const debtors = balances.filter(b => b.net < -0.01).sort((a, b) => a.net - b.net); // biggest debtor first
  const creditors = balances.filter(b => b.net > 0.01).sort((a, b) => b.net - a.net); // biggest creditor first

  let dIdx = 0;
  let cIdx = 0;

  while (dIdx < debtors.length && cIdx < creditors.length) {
    const debtor = debtors[dIdx];
    const creditor = creditors[cIdx];

    const debitAmount = Math.min(-debtor.net, creditor.net);

    settlements.push({
      debtorUsername: debtor.username,
      debtorName: debtor.name,
      creditorUsername: creditor.username,
      creditorName: creditor.name,
      amount: debitAmount
    });

    debtor.net += debitAmount;
    creditor.net -= debitAmount;

    if (Math.abs(debtor.net) < 0.01) dIdx++;
    if (Math.abs(creditor.net) < 0.01) cIdx++;
  }

  return {
    membersPaid,
    membersOwes,
    membersSSD,
    totalSpent,
    settlements
  };
}

function renderSettlements(settlements) {
  const tbody = document.getElementById("settlements-tbody");
  if (!tbody) return;
  tbody.innerHTML = "";

  const trip = STATE.trips.find(t => t.id === STATE.activeTripId);
  if (!trip) return;

  const calculations = calculateTripBalances(trip);

  // Build a row per member showing their net status
  const hasAnyBalance = trip.members.some(m => Math.abs((calculations.membersPaid[m.username] || 0) - (calculations.membersOwes[m.username] || 0)) > 0.01);

  if (!hasAnyBalance) {
    tbody.innerHTML = `<tr><td colspan="3" style="text-align:center; color:var(--text-dim);">ไม่มีเงินค้างชำระ ยอดใช้จ่ายสมดุลทั้งหมด</td></tr>`;
    return;
  }

  trip.members.forEach(m => {
    const paid = calculations.membersPaid[m.username] || 0;
    const owes = calculations.membersOwes[m.username] || 0;
    const net = paid - owes;

    if (Math.abs(net) < 0.01) return; // balanced, skip

    const isCreditor = net > 0;
    const statusLabel = isCreditor
      ? `<span class="badge-pill badge-success">💚 ได้รับเงิน</span>`
      : `<span class="badge-pill badge-danger">🔴 จ่ายเงิน</span>`;
    const amountStr = `${Math.abs(net).toLocaleString(undefined, { maximumFractionDigits: 2 })}฿`;

    // กูแก้ตรงนี้

    const row = document.createElement("tr");
    row.innerHTML = `
      <td><strong>${m.name}</strong> (${m.username})</td>
      <td>${statusLabel}</td>
      <td><strong>${isCreditor ? '+' : '-'}${amountStr}</strong></td>
    `;
    tbody.appendChild(row);
  });

  // If all members are balanced after filtering, show message
  if (tbody.children.length === 0) {
    tbody.innerHTML = `<tr><td colspan="3" style="text-align:center; color:var(--text-dim);">ไม่มีเงินค้างชำระ ยอดใช้จ่ายสมดุลทั้งหมด</td></tr>`;
  }
}

function simulatePaymentToast(debtor, creditor, amount) {
  showToast(`ระบบเปิดบาร์โค้ด QR Code: ${debtor} ชำระเงินให้ ${creditor} จำนวน ${amount.toFixed(2)}฿ เรียบร้อยแล้ว`, "success");
}

// -------------------------------------------------------------
// TAB 3.6: GRAPHICAL MAP VIEW TAB
// -------------------------------------------------------------
function renderMapTab(trip, container) {
  container.innerHTML = `
    <div style="margin-bottom:1.5rem;">
      <h3>ดูแผนที่และปักหมุดเส้นทาง (Route Map View)</h3>
      <p style="color:var(--text-muted); font-size:0.9rem;">ลากแผนที่เพื่อจัดอันดับการนำทริปท่องเที่ยวแบบระบุพิกัด 1 -> 2 -> 3 -> 4</p>
    </div>
    
    <div class="form-group" style="max-width:300px; margin-bottom:1rem;">
      <label class="form-label">เลือกวันเพื่อดูเส้นทาง</label>
      <select id="map-day-selector" class="form-input" onchange="drawMockMapRoute()">
        ${trip.days.map((day, idx) => `<option value="${day.id}">วันเดินทางที่ ${idx + 1} (${formatThaiDate(day.date)})</option>`).join("")}
      </select>
    </div>
    
    <div class="mock-map-container" id="mock-map-canvas-container">
      <canvas class="mock-map-canvas" id="mock-map-canvas-element"></canvas>
      <div id="map-pin-elements-overlay"></div>
    </div>
  `;

  // Call draw function asynchronously after element displays on DOM
  setTimeout(() => {
    drawMockMapRoute();
  }, 100);
}

function drawMockMapRoute() {
  const trip = STATE.trips.find(t => t.id === STATE.activeTripId);
  const dayId = document.getElementById("map-day-selector").value;
  const day = trip.days.find(d => d.id === dayId);

  const canvas = document.getElementById("mock-map-canvas-element");
  const overlay = document.getElementById("map-pin-elements-overlay");

  if (!canvas || !day) return;

  const ctx = canvas.getContext("2d");

  // Set dimensions
  const rect = canvas.parentNode.getBoundingClientRect();
  canvas.width = rect.width;
  canvas.height = rect.height;

  // Clear previous
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  overlay.innerHTML = "";

  if (day.places.length === 0) {
    ctx.font = "14px Inter";
    ctx.fillStyle = "#9ca3af";
    ctx.textAlign = "center";
    ctx.fillText("ไม่มีจุดปักหมุดสำหรับวันนี้ ค้นหาและเพิ่มสถานที่ในแท็บ 'วันเดินทาง'", canvas.width / 2, canvas.height / 2);
    return;
  }

  // Generate random static coords for places based on their indices to make drawing stable
  const coords = [];
  const spacing = canvas.width / (day.places.length + 1);

  day.places.forEach((place, idx) => {
    // Generate pseudo-random coordinates
    const x = spacing * (idx + 1);
    const y = 80 + ((idx * 80) % 200);
    coords.push({ x, y, name: place.name, seq: place.seq });
  });

  // 1. Draw route line connections
  ctx.beginPath();
  ctx.strokeStyle = "#8b5cf6";
  ctx.lineWidth = 3;
  ctx.setLineDash([5, 5]); // dashed line for route

  for (let i = 0; i < coords.length; i++) {
    if (i === 0) ctx.moveTo(coords[i].x, coords[i].y);
    else ctx.lineTo(coords[i].x, coords[i].y);
  }
  ctx.stroke();
  ctx.setLineDash([]); // reset

  // 2. Render overlays/dots HTML
  coords.forEach((pt) => {
    const pin = document.createElement("div");
    pin.className = "map-place-marker";
    pin.style.left = `${pt.x}px`;
    pin.style.top = `${pt.y}px`;
    pin.innerText = pt.seq;

    const label = document.createElement("div");
    label.className = "map-place-label";
    label.style.left = `${pt.x}px`;
    label.style.top = `${pt.y}px`;
    label.innerHTML = `#${pt.seq} - ${pt.name}`;

    overlay.appendChild(pin);
    overlay.appendChild(label);
  });
}

// -------------------------------------------------------------
// TAB 3.7: AWARD & END TRIP POPUPS
// -------------------------------------------------------------
function triggerEndTrip() {
  const trip = STATE.trips.find(t => t.id === STATE.activeTripId);
  if (!trip) return;

  const body = document.getElementById("confirm-modal-body");
  body.innerHTML = `
    <h3 style="color:var(--danger); margin-bottom:0.8rem; font-family:var(--font-logo);">🛑 สรุปและจบทริปเดินทาง</h3>
    <p>คุณต้องการสรุปและปิดทริปการเดินทาง <strong>"${trip.name}"</strong> ตอนนี้หรือไม่? ทุกคนจะเห็นรางวัลเกียรติยศและสรุปตารางการเคลียร์เงินชำระ</p>
  `;

  Dialog.open("confirm-modal", () => {
    trip.ended = true;

    // SSD Award calculations
    const calculations = calculateTripBalances(trip);
    let highestSpender = null;
    let maxSpent = -1;

    // Compare total SSD spent (or total net contribution owes + paid)
    // The requirement says: SSD (Solo Spending): คนที่ใช้เงินรวมสูงสุดในทริป (คำนวณจากการจ่ายเดี่ยวและจากการหารตามจำนวนเงินตนเองที่หาร)
    // "จ่ายเดี่ยว + ส่วนที่ตัวเองต้องหารรับผิดชอบ" ซึ่งก็คือค่า Owes สะสมทั้งหมด
    trip.members.forEach(m => {
      const totalCost = calculations.membersOwes[m.username] || 0;
      if (totalCost > maxSpent) {
        maxSpent = totalCost;
        highestSpender = m;
      }
    });

    if (highestSpender) {
      trip.endedWinners.push({
        badge: "SSD",
        username: highestSpender.username,
        name: highestSpender.name,
        amount: maxSpent
      });

      // If current user is the winner, award the badge globally
      if (highestSpender.username === STATE.currentUser.username) {
        STATE.currentUser.badges.SSD.active = true;
        updateUserStats();
      }
    }

    // Switch to date list rendering and open results modal
    navigateTo("trip-details", trip.id, false);
    openAwardPopup(trip);
  });
}

function openAwardPopup(trip) {
  const awardInfo = trip.endedWinners.find(w => w.badge === "SSD");
  const winnerText = awardInfo ? `@${awardInfo.username.replace("@", "")} (${awardInfo.name}) ได้รับรางวัล SSD (Solo Spending)` : "ไม่มีข้อมูลผู้ได้รับรางวัล";
  const amountStr = awardInfo ? `ยอดใช้จ่ายรวม: ${awardInfo.amount.toLocaleString(undefined, { maximumFractionDigits: 2 })}฿` : "";

  const body = document.getElementById("confirm-modal-body");
  body.innerHTML = `
    <div style="text-align:center; padding:1rem;">
      <span style="font-size:4rem; display:block; margin-bottom:1rem;">🏆</span>
      <h3 style="font-family:var(--font-logo); margin-bottom:0.5rem;">รางวัลเกียรติยศประจำทริป</h3>
      <p style="font-size:1.15rem; font-weight:700; color:var(--accent-pink); margin-bottom:0.5rem;">🥇 SSD (Solo Spending)</p>
      <p style="font-size:0.95rem; font-weight:600;">${winnerText}</p>
      <p style="color:var(--text-muted); font-size:0.85rem; margin-top:0.4rem;">${amountStr}</p>
      <p style="color:var(--text-dim); font-size:0.8rem; margin-top:1.2rem;">รางวัลนี้มอบให้กับสมาชิกที่ใช้เงินสุทธิรวมสูงที่สุดในโครงสร้างโครงการ!</p>
    </div>
  `;
  Dialog.open("confirm-modal", null); // open details without action
}

function renderEndAwardView(trip, container) {
  const awardInfo = trip.endedWinners.find(w => w.badge === "SSD");

  container.innerHTML = `
    <div style="text-align:center; padding:3rem 1.5rem;">
      <span style="font-size:5rem; display:block; margin-bottom:1rem;">🎖️</span>
      <h3 style="margin-bottom:0.5rem; font-family:var(--font-logo);">ผลสรุปรางวัลเกียรติยศ</h3>
      
      <div style="background:rgba(255,255,255,0.02); border:1px solid var(--border-color); border-radius:16px; padding:2rem; max-width:450px; margin:2rem auto;">
        <span style="font-size:2.5rem; display:block; margin-bottom:0.5rem;">🏆</span>
        <h4 style="color:var(--accent-pink); font-family:var(--font-logo); font-size:1.3rem;">SSD (Solo Spending)</h4>
        <p style="color:var(--text-muted); font-size:0.85rem; margin-bottom:1.5rem;">สมาชิกที่รับภาระค่าใช้จ่ายรวมสูงสุดในทริปนี้</p>
        
        ${awardInfo ? `
          <p style="font-size:1.2rem; font-weight:700; color:white;">${awardInfo.name} (${awardInfo.username})</p>
          <p style="color:var(--success); font-weight:600; margin-top:0.5rem;">ยอดสุทธิ: ${awardInfo.amount.toLocaleString(undefined, { maximumFractionDigits: 2 })}฿</p>
        ` : `
          <p style="color:var(--text-dim);">ไม่มีประวัติการบันทึกการสิ้นสุดโครงการ</p>
        `}
      </div>
    </div>
  `;
}

// -------------------------------------------------------------
// 1.4 COMMUNITY & MEMBERS LIVE CHAT WIDGET
// -------------------------------------------------------------
function triggerChatWidget(tripId) {
  const trip = STATE.trips.find(t => t.id === tripId);
  if (!trip) return;

  const chatPartner = "@john_packer"; // simulation partner

  let chatData = STATE.chats.find(c => c.partner === chatPartner);
  if (!chatData) {
    chatData = {
      partner: chatPartner,
      partnerName: "John Packer",
      messages: []
    };
    STATE.chats.push(chatData);
  }

  const chatWidget = document.getElementById("chat-widget-window");
  chatWidget.classList.add("active");

  document.getElementById("chat-partner-name-display").innerText = chatData.partnerName;
  document.getElementById("chat-partner-username-display").innerText = chatData.partner;

  renderChatMessages(chatData);
}

function closeChatWidget() {
  document.getElementById("chat-widget-window").classList.remove("active");
}

function renderChatMessages(chatData) {
  const body = document.getElementById("chat-messages-body");
  body.innerHTML = "";

  chatData.messages.forEach(msg => {
    const el = document.createElement("div");
    el.className = `chat-message ${msg.sender}`;
    el.innerHTML = `
      <span>${msg.text}</span>
      <span class="chat-time">${msg.time}</span>
      ${msg.sender === 'incoming' ? `<button class="chat-report-btn" onclick="reportChatMessage('${chatData.partner}', '${msg.text}')">🚩 รายงานผู้ใช้</button>` : ''}
    `;
    body.appendChild(el);
  });

  // scroll to bottom
  body.scrollTop = body.scrollHeight;
}

function sendChatMessage() {
  const input = document.getElementById("chat-message-input-text");
  const val = input.value.trim();
  if (!val) return;

  const chatPartner = "@john_packer";
  const chatData = STATE.chats.find(c => c.partner === chatPartner);

  if (chatData) {
    const t = new Date();
    const timeStr = `${String(t.getHours()).padStart(2, '0')}:${String(t.getMinutes()).padStart(2, '0')}`;

    chatData.messages.push({
      sender: "outgoing",
      text: val,
      time: timeStr
    });

    input.value = "";
    renderChatMessages(chatData);

    // Simulate automated answer
    setTimeout(() => {
      chatData.messages.push({
        sender: "incoming",
        text: `รับทราบครับ! ขอบคุณมากสำหรับคำตอบ เดี๋ยวผมลองกดเข้าทริปศึกษาตารางต่อนะครับ`,
        time: timeStr
      });
      renderChatMessages(chatData);
    }, 1500);
  }
}

function reportChatMessage(username, text) {
  const body = document.getElementById("confirm-modal-body");
  body.innerHTML = `
    <h3 style="color:var(--danger); margin-bottom:0.8rem; font-family:var(--font-logo);">🚩 รายงานข้อความไม่เหมาะสม</h3>
    <p>คุณต้องการรายงานข้อความ: <em>"${text}"</em> ของผู้ใช้ ${username} ไปยังแอดมินระบบใช่หรือไม่?</p>
  `;

  Dialog.open("confirm-modal", () => {
    STATE.admin.reports.push({
      id: `rep-${Date.now()}`,
      reporter: STATE.currentUser.username,
      reportedUser: username,
      msg: text,
      status: "รอดำเนินการ"
    });
    showToast("ส่งรายงานพฤติกรรมไม่เหมาะสมไปยัง Admin เรียบร้อยแล้ว", "success");
    renderAdminPanel();
  });
}

// -------------------------------------------------------------
// 1.5 USER PROFILE DROP DOWN CONTROLLERS & ACTIONS
// -------------------------------------------------------------
function toggleProfileDropdown() {
  const menu = document.getElementById("profile-dropdown");
  menu.classList.toggle("active");
}

function updateUserStats() {
  // Update name in trigger
  document.getElementById("navbar-username-label").innerText = STATE.currentUser.name;

  // Update details in dropdown menu
  document.getElementById("dropdown-username").innerText = STATE.currentUser.username;
  document.getElementById("dropdown-displayname").innerText = STATE.currentUser.name;
  document.getElementById("dropdown-email").innerText = STATE.currentUser.email;

  // Calculate expenses globally
  let totalExpensesSum = 0;
  STATE.trips.forEach(trip => {
    const calc = calculateTripBalances(trip);
    totalExpensesSum += calc.membersOwes[STATE.currentUser.username] || 0;
  });

  STATE.currentUser.totalSpent = totalExpensesSum;
  document.getElementById("dropdown-total-spent").innerText = `${totalExpensesSum.toLocaleString(undefined, { maximumFractionDigits: 2 })}฿`;
  document.getElementById("dropdown-project-count").innerText = STATE.trips.length;

  // Render Badge checkboxes
  const badgesContainer = document.getElementById("dropdown-badges-container");
  badgesContainer.innerHTML = "";

  Object.keys(STATE.currentUser.badges).forEach(code => {
    const b = STATE.currentUser.badges[code];
    const isAct = b.active;
    const item = document.createElement("span");
    item.className = `badge-item ${code.toLowerCase()} ${isAct ? '' : 'disabled'}`;
    item.title = b.desc;
    item.innerHTML = `🏷️ ${code} | ${isAct ? 'เปิดอยู่' : 'ปิดอยู่'}`;

    // Toggle state on click
    item.onclick = () => {
      b.active = !b.active;
      updateUserStats();
      showToast(`แก้ไขการแสดงป้ายรางวัล ${code} สำเร็จ`, "info");
    };

    badgesContainer.appendChild(item);
  });
}

function openEditProfileNameDialog() {
  const body = document.getElementById("confirm-modal-body");
  body.innerHTML = `
    <h3 style="margin-bottom:0.8rem; font-family:var(--font-logo);">แก้ไขข้อมูลส่วนตัว</h3>
    <div class="form-group">
      <label class="form-label">ชื่อผู้ใช้ (Display Name)</label>
      <input type="text" id="edit-display-name-input" class="form-input" value="${STATE.currentUser.name}">
    </div>
  `;
  Dialog.open("confirm-modal", () => {
    const val = document.getElementById("edit-display-name-input").value.trim();
    if (val) {
      STATE.currentUser.name = val;
      updateUserStats();
      showToast("อัปเดตชื่อแสดงผลสำเร็จ", "success");
    }
  });
}

function handleLogout() {
  showToast("กำลังออกจากระบบจำลอง...", "warning");
  setTimeout(() => {
    showToast("ออกจากระบบแล้ว! กำลังโหลดหน้าล็อกอินจำลองใหม่", "info");
    navigateTo("home");
  }, 1000);
}

// -------------------------------------------------------------
// INVITE MEMBER SIMULATION
// -------------------------------------------------------------
function triggerInviteMember() {
  const body = document.getElementById("confirm-modal-body");
  body.innerHTML = `
    <h3 style="margin-bottom:0.8rem; font-family:var(--font-logo);">เชิญเข้าร่วมการเดินทาง</h3>
    <div class="form-group">
      <label class="form-label">เลือกสมาชิกเพื่อเชิญเข้าร่วมโครงการ</label>
      <select id="invite-new-user-select" class="form-input">
        <option value="@bob_spender">Bob Spender (@bob_spender)</option>
        <option value="@alice_traveler">Alice Traveler (@alice_traveler)</option>
        <option value="@john_packer">John Packer (@john_packer)</option>
      </select>
    </div>
  `;

  Dialog.open("confirm-modal", () => {
    const trip = STATE.trips.find(t => t.id === STATE.activeTripId);
    const selectEl = document.getElementById("invite-new-user-select");
    const val = selectEl.value;

    if (trip && val) {
      const alreadyMem = trip.members.some(m => m.username === val);
      if (alreadyMem) {
        showToast("สมาชิกคนนี้อยู่ในทริปนี้แล้ว!", "warning");
        return;
      }

      const cleanName = val.replace("@", "").replace("_", " ");
      const newMember = { username: val, name: cleanName.charAt(0).toUpperCase() + cleanName.slice(1) };

      trip.members.push(newMember);
      trip.packingList[val] = [];

      // Update bank account placeholders
      trip.bankDetails.push({ username: val, bank: "-", account: "-", qr: "" });

      navigateTo("trip-details", trip.id, false);
      showToast(`ชวน ${val} เข้าทริปท่องเที่ยวสำเร็จ`, "success");
    }
  });
}

function shareTripToCommunity() {
  const trip = STATE.trips.find(t => t.id === STATE.activeTripId);
  if (trip) {
    trip.isShared = true;
    showToast(`แชร์ทริป "${trip.name}" ลงหน้าคอมมูนิตี้สาธารณะเรียบร้อย!`, "success");
    renderHome();
  }
}

// -------------------------------------------------------------
// ADMIN ACTIONS & COMPONENT RENDERS
// -------------------------------------------------------------
function toggleAdminPanel() {
  STATE.isAdmin = !STATE.isAdmin;
  const area = document.getElementById("admin-dashboard-container");

  if (STATE.isAdmin) {
    area.style.display = "block";
    showToast("สลับเข้าโหมด Admin เรียบร้อย", "success");
    renderAdminPanel();
  } else {
    area.style.display = "none";
    showToast("ออกจากโหมด Admin เรียบร้อย", "info");
  }
}

function renderAdminPanel() {
  const container = document.getElementById("admin-dashboard-container");
  container.innerHTML = `
    <div class="admin-card">
      <h3 style="font-family:var(--font-logo); border-bottom:1px solid var(--border-color); padding-bottom:0.5rem; color:var(--accent-pink);">🛡️ ผู้ดูแลระบบ (Admin Control Board)</h3>
      
      <div class="admin-grid">
        <!-- Default Packing category settings -->
        <div>
          <h4 style="font-size:0.9rem; margin-bottom:0.5rem;">หมวดหมู่สัมภาระเริ่มต้น</h4>
          <div class="list-box" id="admin-cat-list" style="margin-bottom:0.5rem;">
            ${STATE.admin.defaultCategories.map((c, i) => `
              <div class="list-box-item">
                <span>${c}</span>
                <button class="btn-danger btn btn-sm" style="padding:0 0.3rem;" onclick="adminDeleteCategory(${i})">🗑️</button>
              </div>
            `).join("")}
          </div>
          <div class="admin-form">
            <input type="text" id="admin-new-cat" class="form-input" style=".form-input::placeholder{color:black;}" style="font-size:0.75rem;" placeholder="หมวดใหม่...">
            <button class="btn" onclick="adminAddCategory()">➕</button>
          </div>
        </div>
        
        <!-- Badges list setup -->
        <div>
          <h4 style="font-size:0.9rem; margin-bottom:0.5rem;">🏆 เหรียญรางวัลระบบ</h4>
          <div class="list-box" id="admin-badges-list" style="margin-bottom:0.5rem;">
            ${STATE.admin.badges.map((b, i) => `
              <div class="list-box-item">
                <span title="${b.desc}">${b.code}</span>
                <button class="btn-danger btn btn-sm" style="padding:0 0.3rem;" onclick="adminDeleteBadge(${i})">🗑️</button>
              </div>
            `).join("")}
          </div>
          <div class="admin-form">
            <input type="text" id="admin-new-badge-code" class="form-input" style="font-size:0.75rem; width:100px;" placeholder="ชื่อป้าย">
            
            <button class="btn" onclick="adminAddBadge()">➕</button>
          </div>
        </div>
        
        <!-- User list suspensions -->
        <div>
          <h4 style="font-size:0.9rem; margin-bottom:0.5rem;">ผู้ใช้งานในระบบ</h4>
          <div class="list-box" style="margin-bottom:0.5rem;">
            ${STATE.admin.users.map(u => `
              <div class="list-box-item">
                <span style="${u.status === 'suspended' ? 'text-decoration:line-through; color:var(--danger)' : ''}">${u.username}</span>
                <button class="btn ${u.status === 'active' ? 'btn-danger' : 'btn-success'} btn-sm" style="padding:0 0.3rem; font-size:0.7rem;" onclick="adminToggleUserStatus('${u.username}')">
                  ${u.status === 'active' ? 'บล็อก' : 'ปลดบล็อก'}
                </button>
              </div>
            `).join("")}
          </div>
        </div>
        
        <!-- Shared projects & reports -->
        <div>
          <h4 style="font-size:0.9rem; margin-bottom:0.5rem;">🚩 แชทที่ถูกรายงานจากสมาชิก</h4>
          <div class="list-box">
            ${STATE.admin.reports.map(r => `
              <div class="list-box-item" style="flex-direction:column; align-items:flex-start; font-size:0.75rem;">
                <span>ผู้ถูกแจ้ง: <strong>${r.reportedUser}</strong></span>
                <span style="color:var(--text-muted)">ข้อความ: "${r.msg}"</span>
                <span style="font-weight:600; color:var(--warning)">สถานะ: ${r.status}</span>
              </div>
            `).join("")}
          </div>
        </div>
      </div>
      
      <div style="margin-top:1.5rem; display:flex; justify-content:space-between; align-items:center; border-top:1px solid var(--border-color); padding-top:1rem;">
        <span style="font-size:0.85rem; color:var(--text-muted);">📈 สถิติทริปบนคอมมูนิตี้ทั้งหมด: <strong>${STATE.trips.filter(t => t.isShared).length}</strong> โครงการ</span>
        <button class="btn btn-secondary btn-sm" onclick="toggleAdminPanel()">❌ ปิดแผงแอดมิน</button>
      </div>
    </div>
  `;
}

function adminAddCategory() {
  const val = document.getElementById("admin-new-cat").value.trim();
  if (val) {
    STATE.admin.defaultCategories.push(val);
    renderAdminPanel();
    showToast(`เพิ่มหมวดหมู่เริ่มต้น "${val}" เรียบร้อย`, "success");
  }
}

function adminDeleteCategory(idx) {
  STATE.admin.defaultCategories.splice(idx, 1);
  renderAdminPanel();
  showToast("ลบหมวดหมู่เริ่มต้นแล้ว", "info");
}

function adminAddBadge() {
  const code = document.getElementById("admin-new-badge-code").value.trim().toUpperCase();
  const name = document.getElementById("admin-new-badge-name").value.trim();
  if (code && name) {
    STATE.admin.badges.push({ code, name, desc: name });
    renderAdminPanel();
    showToast(`เพิ่มรางวัลระบบ [${code}] เรียบร้อย`, "success");
  }
}

function adminDeleteBadge(idx) {
  STATE.admin.badges.splice(idx, 1);
  renderAdminPanel();
  showToast("ลบรางวัลระบบแล้ว", "info");
}

function adminToggleUserStatus(username) {
  const user = STATE.admin.users.find(u => u.username === username);
  if (user) {
    user.status = (user.status === "active") ? "suspended" : "active";
    renderAdminPanel();
    showToast(`ปรับสถานะของผู้ใช้ ${username} เป็น ${user.status} สำเร็จ`, "info");
  }
}

// -------------------------------------------------------------
// HELPER FORMATTING FUNCTIONS
// -------------------------------------------------------------
function formatThaiDate(dateString) {
  if (!dateString) return "";
  const d = new Date(dateString);
  if (isNaN(d.getTime())) return dateString;
  const monthNames = ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."];
  return `${d.getDate()} ${monthNames[d.getMonth()]} ${d.getFullYear() + 543}`;
}

// -------------------------------------------------------------
// WINDOW ONLOAD INITS
// -------------------------------------------------------------
window.onload = () => {
  // Navigation trigger inits
  document.getElementById("logo-click-nav").addEventListener("click", () => navigateTo("home"));
  document.getElementById("create-trip-nav-btn").addEventListener("click", () => navigateTo("create-trip"));

  // Close modals clicking background overlay
  document.querySelectorAll(".modal-overlay").forEach(overlay => {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        Dialog.close(overlay.id);
      }
    });
  });

  // Set initial page view
  navigateTo("home");
};
