/* ============================================================
   Pane-style portfolio — vanilla JS
   ============================================================ */

/* ---------- DATA ---------- */
/* Profil & angka diambil dari github.com/akhirudin08 (data publik) */
const profile = {
    name: "Akhirudin",
    fullName: "Mohamad Akhirudin",
    role: "Web Developer",
    location: "Karawang, Indonesia",
    company: "PT Indah Kiat Pulp & Paper Tbk",
    github: "akhirudin08",
    since: 2017,
    repos: 25,
    stars: 27,
    languages: 5
};

const projects = [
    { id:1, title:"Budgeting App", cat:"web", catLabel:"Web", status:"live", statusLabel:"Live",
      desc:"Aplikasi pencatatan keuangan pribadi berbasis TypeScript: catat pemasukan & pengeluaran, atur budget, lalu lihat ringkasan kondisi keuangan.",
      tech:["TypeScript","HTML","Vercel"], stars:0, forks:0,
      grad:"linear-gradient(135deg,#34d399,#059669)", ini:"BA", year:"2026", lang:"TypeScript",
      repo:"budgeting-app", live:"https://budgeting-app-sand.vercel.app", hue:"green", pin:false },
    { id:2, title:"Portfolio Dinamis", cat:"web", catLabel:"Web", status:"done", statusLabel:"Done",
      desc:"Web portfolio dinamis dengan dashboard untuk mengubah konten tanpa menyentuh kode. Repo dengan bintang terbanyak di profil GitHub saya.",
      tech:["PHP","HTML","CSS","Dashboard"], stars:16, forks:4,
      grad:"linear-gradient(135deg,#667eea,#764ba2)", ini:"PA", year:"2025", lang:"PHP",
      repo:"portfolio-akhirudin", live:null, hue:"blue", pin:true },
    { id:3, title:"Undangan Pernikahan Digital", cat:"web", catLabel:"Web", status:"done", statusLabel:"Done",
      desc:"Undangan digital interaktif: countdown hari H, jadwal akad & resepsi, RSVP via WhatsApp, galeri foto, dan QR code — tanpa dependensi eksternal.",
      tech:["HTML","CSS","JavaScript"], stars:4, forks:0,
      grad:"linear-gradient(135deg,#f093fb,#f5576c)", ini:"UP", year:"2025", lang:"CSS",
      repo:"simple-wedding-invitation", live:null, hue:"pink", pin:true },
    { id:4, title:"QR Generator & Scanner", cat:"tools", catLabel:"Tools", status:"live", statusLabel:"Live",
      desc:"Toolkit QR berbasis browser: buat QR dengan overlay logo, scan lewat kamera atau upload gambar, riwayat scan, ekspor CSV, dan kirim hasil ke WhatsApp.",
      tech:["JavaScript","HTML","CSS"], stars:3, forks:0,
      grad:"linear-gradient(135deg,#4facfe,#00f2fe)", ini:"QR", year:"2025", lang:"JavaScript",
      repo:"qr-generator-and-qr-scan", live:"https://akhirudin08.github.io/qr-generator-and-qr-scan/", hue:"teal", pin:true },
    { id:5, title:"Container Loading Planner 3D", cat:"tools", catLabel:"Tools", status:"done", statusLabel:"Done",
      desc:"Perencana muatan kontainer dengan visualisasi 3D: pilih kontainer 20', 40', atau 40' HC, ukuran custom, lalu susun daftar material secara dinamis.",
      tech:["JavaScript","Three.js","HTML","CSS"], stars:2, forks:1,
      grad:"linear-gradient(135deg,#f6d365,#fda085)", ini:"CL", year:"2025", lang:"JavaScript",
      repo:"container-cubix", live:null, hue:"orange", pin:true },
    { id:6, title:"Kiblat Kompas Digital", cat:"tools", catLabel:"Tools", status:"done", statusLabel:"Done",
      desc:"Kompas arah kiblat berbasis kamera dan sensor perangkat: hitung arah dengan GPS + algoritma great-circle, tampilkan panah animasi, dan bagikan lokasi.",
      tech:["JavaScript","Geolocation","Device Orientation"], stars:0, forks:4,
      grad:"linear-gradient(135deg,#89f7fe,#66a6ff)", ini:"KK", year:"2025", lang:"JavaScript",
      repo:"kiblat-kompas-digital", live:null, hue:"indigo", pin:false },
    { id:7, title:"Vessel Schedule Tanjung Priok", cat:"tools", catLabel:"Tools", status:"done", statusLabel:"Done",
      desc:"Satu tampilan jadwal kapal dari empat terminal Pelabuhan Tanjung Priok (JICT, MALT300, NPCT1, TPK Koja): pencarian instan dan ekspor Excel sekali klik.",
      tech:["PHP","HTML","Excel Export"], stars:0, forks:0,
      grad:"linear-gradient(135deg,#a18cd1,#fbc2eb)", ini:"VS", year:"2025", lang:"PHP",
      repo:"vesse-schedule", live:null, hue:"purple", pin:false },
    { id:8, title:"Tumbuhin — File Converter", cat:"tools", catLabel:"Tools", status:"done", statusLabel:"Done",
      desc:"Kumpulan tool konversi file dalam satu halaman, 100% client-side: TXT/HTML/JPG ke PDF, PDF ke JPG/PNG, dan konversi antar format gambar.",
      tech:["HTML","JavaScript","Client-side"], stars:1, forks:0,
      grad:"linear-gradient(135deg,#d4fc79,#96e6a1)", ini:"TB", year:"2025", lang:"HTML",
      repo:"tools-converting", live:null, hue:"green", pin:false },
    { id:9, title:"Quran Web App", cat:"web", catLabel:"Web", status:"live", statusLabel:"Live",
      desc:"Aplikasi Al-Quran berbasis Vue: daftar surah, pemutar audio ayat, tafsir, dan info surah. Sumber data dari API Quran.",
      tech:["Vue","TypeScript","SCSS"], stars:0, forks:1,
      grad:"linear-gradient(135deg,#fddb92,#d1fdff)", ini:"QW", year:"2023", lang:"TypeScript",
      repo:"quran", live:"https://akhirudinquran.vercel.app", hue:"yellow", pin:false }
];

const skills = [
    { name:"HTML", count:"9 repo", lvl:100, hue:"orange", tags:["Semantic markup","Responsive"] },
    { name:"JavaScript", count:"5 repo", lvl:56, hue:"yellow", tags:["Vanilla JS","DOM & Web APIs"] },
    { name:"PHP", count:"3 repo", lvl:33, hue:"indigo", tags:["Web app","Dashboard"] },
    { name:"TypeScript", count:"2 repo", lvl:22, hue:"blue", tags:["Vue","Web app"] },
    { name:"CSS", count:"2 repo", lvl:22, hue:"teal", tags:["Layout","Animation"] },
    { name:"Git & GitHub", count:"25 repo", lvl:100, hue:"purple", tags:["Versioning","GitHub Pages"] },
    { name:"Three.js", count:"1 repo", lvl:11, hue:"green", tags:["3D rendering","Container planner"] },
    { name:"Vue", count:"1 repo", lvl:11, hue:"green", tags:["Composition API","SPA"] },
    { name:"Firebase", count:"1 repo", lvl:11, hue:"yellow", tags:["Hosting","Web app"] },
    { name:"Excel / CSV", count:"2 repo", lvl:22, hue:"teal", tags:["Export data","Reporting"] }
];

const ROUTES = ["home","projects","about","skills","contact"];
const TITLES = { home:"Home", projects:"Projects", about:"About", skills:"Skills", contact:"Contact" };

/* ---------- ELEMENTS ---------- */
const html = document.documentElement;
const navTrack = document.getElementById("navTrack");
const navLens = navTrack.querySelector(".nav__lens");
const tabTrack = document.getElementById("tabTrack");
const tabLens = tabTrack.querySelector(".tabbar__lens");
const compactTitle = document.getElementById("compactTitle");
const projectsGrid = document.getElementById("projectsGrid");
const skillsGrid = document.getElementById("skillsGrid");
const categoryFilter = document.getElementById("categoryFilter");
const countProjects = document.getElementById("countProjects");
const pinnedList = document.getElementById("pinnedList");
const lookPop = document.getElementById("lookPop");
const btnLook = document.getElementById("btnLook");
const btnLookTop = document.getElementById("btnLookTop");
const btnTheme = document.getElementById("btnTheme");
const finder = document.getElementById("finder");
const finderQ = document.getElementById("finderQ");
const finderList = document.getElementById("finderList");
const modal = document.getElementById("modal");
const toastWrap = document.getElementById("toastWrap");

/* ---------- LOOK (theme / wall / accent) ---------- */
function loadLook() {
    try { return JSON.parse(localStorage.getItem("pane-look") || "{}"); }
    catch (e) { return {}; }
}
function saveLook(patch) {
    const look = Object.assign(loadLook(), patch);
    localStorage.setItem("pane-look", JSON.stringify(look));
    applyLook(look);
}
function applyLook(look) {
    const t = look.theme || "dark";
    const resolved = t === "system"
        ? (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
        : t;
    html.dataset.theme = resolved;
    if (look.wall) html.dataset.wall = look.wall;
    if (look.accent) html.dataset.accent = look.accent;
    syncLookUI();
}
function syncLookUI() {
    const look = loadLook();
    const t = look.theme || "dark";
    document.querySelectorAll("[data-theme-val]").forEach(b =>
        b.setAttribute("aria-pressed", String(b.dataset.themeVal === t)));
    document.querySelectorAll("[data-wall-val]").forEach(b =>
        b.setAttribute("aria-pressed", String(b.dataset.wallVal === (look.wall || "ash"))));
    document.querySelectorAll("[data-accent-val]").forEach(b =>
        b.setAttribute("aria-pressed", String(b.dataset.accentVal === (look.accent || "blue"))));
}

function openLookPop(anchor) {
    lookPop.hidden = false;
    const r = anchor.getBoundingClientRect();
    const w = lookPop.offsetWidth;
    let left = r.left;
    if (left + w > innerWidth - 12) left = innerWidth - w - 12;
    lookPop.style.left = Math.max(12, left) + "px";
    lookPop.style.top = (r.bottom + 8) + "px";
    syncLookUI();
}
function closeLookPop() { lookPop.hidden = true; }

[btnLook, btnLookTop].forEach(b => b && b.addEventListener("click", e => {
    e.stopPropagation();
    lookPop.hidden ? openLookPop(b) : closeLookPop();
}));
document.addEventListener("click", e => {
    if (!lookPop.hidden && !lookPop.contains(e.target)) closeLookPop();
});
lookPop.addEventListener("click", e => {
    const t = e.target.closest("[data-theme-val],[data-wall-val],[data-accent-val]");
    if (!t) return;
    if (t.dataset.themeVal) saveLook({ theme: t.dataset.themeVal });
    if (t.dataset.wallVal) saveLook({ wall: t.dataset.wallVal });
    if (t.dataset.accentVal) saveLook({ accent: t.dataset.accentVal });
    syncLookUI();
});

btnTheme.addEventListener("click", () => {
    const next = html.dataset.theme === "dark" ? "light" : "dark";
    saveLook({ theme: next });
    toast(next === "dark" ? "🌙 Dark mode" : "☀️ Light mode");
});

/* ---------- ROUTING + LENS ---------- */
function currentRoute() {
    const h = location.hash.replace(/^#\/?/, "");
    return ROUTES.includes(h) ? h : "home";
}

function moveLens(track, lens, active) {
    if (!active) { lens.style.opacity = "0"; return; }
    const tr = track.getBoundingClientRect();
    const ar = active.getBoundingClientRect();
    lens.style.width = ar.width + "px";
    lens.style.height = ar.height + "px";
    lens.style.transform = `translate(${ar.left - tr.left}px, ${ar.top - tr.top}px)`;
    lens.style.opacity = "1";
}

/* ---------- SPLIT-TEXT: judul terbuka per huruf ---------- */
function splitTitle(view) {
    const title = view.querySelector(".head__title");
    const sub = view.querySelector(".head__sub");
    if (title) {
        if (!title.dataset.orig) title.dataset.orig = title.innerHTML;
        title.innerHTML = title.dataset.orig;
        let ci = 0;
        const splitNode = node => {
            [...node.childNodes].forEach(n => {
                if (n.nodeType === Node.TEXT_NODE) {
                    const frag = document.createDocumentFragment();
                    n.nodeValue.split(/(\s+)/).forEach(part => {
                        if (!part) return;
                        if (/^\s+$/.test(part)) {
                            frag.appendChild(document.createTextNode(part));
                            return;
                        }
                        const word = document.createElement("span");
                        word.className = "word";
                        [...part].forEach(c => {
                            const ch = document.createElement("span");
                            ch.className = "ch";
                            ch.style.animationDelay = (ci++ * 0.028).toFixed(3) + "s";
                            ch.textContent = c;
                            word.appendChild(ch);
                        });
                        frag.appendChild(word);
                    });
                    n.replaceWith(frag);
                } else if (n.nodeType === Node.ELEMENT_NODE && !n.hasAttribute("data-no-split")) {
                    splitNode(n);
                }
            });
        };
        splitNode(title);
    }
    if (sub) {
        sub.classList.remove("ani");
        void sub.offsetWidth;
        sub.classList.add("ani");
    }
}

/* ---------- RIPPLE klik di elemen kaca ---------- */
document.addEventListener("pointerdown", e => {
    const host = e.target.closest(".btn, .nav__item, .tbtn, .tab, .seg__btn, .contact-row");
    if (!host) return;
    const r = host.getBoundingClientRect();
    const size = Math.max(r.width, r.height) * .55;
    const s = document.createElement("span");
    s.className = "ripple";
    s.style.width = s.style.height = size + "px";
    s.style.left = (e.clientX - r.left - size / 2) + "px";
    s.style.top = (e.clientY - r.top - size / 2) + "px";
    if (getComputedStyle(host).position === "static") host.style.position = "relative";
    host.appendChild(s);
    s.addEventListener("animationend", () => s.remove(), { once: true });
});

function route() {
    const r = currentRoute();
    document.querySelectorAll(".view").forEach(v => {
        v.hidden = v.dataset.view !== r;
    });
    document.querySelectorAll(".nav__item").forEach(a => {
        a.dataset.route === r ? a.setAttribute("aria-current", "page") : a.removeAttribute("aria-current");
    });
    document.querySelectorAll(".tab").forEach(a => {
        a.dataset.route === r ? a.setAttribute("aria-current", "page") : a.removeAttribute("aria-current");
    });
    compactTitle.textContent = TITLES[r];
    document.title = `${TITLES[r]} · Pane Portfolio`;
    scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });

    const activeView = document.querySelector(`.view[data-view="${r}"]`);
    if (activeView) splitTitle(activeView);

    requestAnimationFrame(() => {
        moveLens(navTrack, navLens, navTrack.querySelector('[aria-current="page"]'));
        moveLens(tabTrack, tabLens, tabTrack.querySelector('[aria-current="page"]'));
    });

    if (r === "skills") animateSkills();
    if (r === "projects") renderProjects();
}

addEventListener("hashchange", route);
addEventListener("resize", () => {
    moveLens(navTrack, navLens, navTrack.querySelector('[aria-current="page"]'));
    moveLens(tabTrack, tabLens, tabTrack.querySelector('[aria-current="page"]'));
    if (!lookPop.hidden) closeLookPop();
});

/* ---------- RENDER: HOME ---------- */
function renderHome() {
    document.getElementById("homeStats").innerHTML = [
        { l:"Repo publik", v:profile.repos, s:"" },
        { l:"Stars", v:profile.stars, s:"" },
        { l:"Sejak", v:profile.since, s:"" },
        { l:"Bahasa", v:profile.languages, s:"" }
    ].map(s => `<div class="stat"><span class="stat__label">${s.l}</span><span class="stat__value">${s.v}<small>${s.s}</small></span></div>`).join("");

    const live = projects.filter(p => p.status === "live").length;
    document.getElementById("homeWidgets").innerHTML = `
        <div class="card glass">
            <div class="card__head">
                <div><h3 class="card__title">Tentang singkat</h3><p class="card__sub">Web developer · Karawang</p></div>
                <img class="av av--md av--photo" src="assets/avatar.jpg" alt="" width="36" height="36">
            </div>
            <p class="muted" style="font-size:14.5px;line-height:1.7">Saya suka coding dan membangun aplikasi web: portfolio dinamis, undangan digital, toolkit QR, visualisasi 3D, sampai tools konversi file. Sehari-hari bekerja di ${profile.company}, dan merilis proyek open source sejak ${profile.since}.</p>
            <div class="chips" style="margin-top:14px">
                <span class="chip">PHP</span><span class="chip">JavaScript</span><span class="chip">TypeScript</span><span class="chip">HTML/CSS</span><span class="chip">Git</span>
            </div>
        </div>
        <div class="card glass">
            <div class="card__head"><div><h3 class="card__title">Status</h3><p class="card__sub">Ringkasan project</p></div>
                <button class="btn btn--glass btn--sm" data-focus>
                    <svg class="ico" viewBox="0 0 24 24" style="width:16px;height:16px"><circle cx="12" cy="13.5" r="7.5"/><path d="M12 9.5v4l2.5 1.8M9.5 2.5h5"/></svg>Focus 25m
                </button>
            </div>
            <div class="head__stats">
                <div class="stat"><span class="stat__label">Live</span><span class="stat__value">${live}</span></div>
                <div class="stat"><span class="stat__label">Selesai</span><span class="stat__value">${projects.filter(p=>p.status==="done").length}</span></div>
                <div class="stat"><span class="stat__label">Total</span><span class="stat__value">${projects.length}</span></div>
            </div>
        </div>
        <div class="card glass">
            <div class="card__head"><div><h3 class="card__title">Project terbaru</h3></div><a class="btn btn--ghost btn--sm" href="#/projects">Semua</a></div>
            <div class="contact-list">
                ${projects.slice(0,3).map(p => `
                    <button class="contact-row" data-open="${p.id}" style="width:100%;text-align:left">
                        <span class="lead" style="background:${p.grad};color:#fff;font-weight:700;font-size:12px">${p.ini}</span>
                        <span><b>${p.title}</b><small>${p.catLabel} · ${p.statusLabel}</small></span>
                    </button>`).join("")}
            </div>
        </div>`;
}

document.addEventListener("click", e => {
    const b = e.target.closest("[data-open]");
    if (b) openProject(Number(b.dataset.open));
    if (e.target.closest("[data-focus]")) startFocus();
});

/* ---------- RENDER: PROJECTS ---------- */
function filteredProjects() {
    const cat = categoryFilter.value;
    return projects.filter(p => cat === "all" || p.cat === cat);
}

function renderProjects() {
    const list = filteredProjects();
    if (!list.length) {
        projectsGrid.innerHTML = `<div class="empty">
            <svg class="ico" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <span class="empty__title">Tidak ada project</span><span>Coba ganti filter kategori.</span></div>`;
        return;
    }
    projectsGrid.innerHTML = list.map(p => `
        <article class="pcard glass" data-id="${p.id}" tabindex="0" role="button" aria-label="Detail ${p.title}">
            <div class="pcard__cover" style="background:${p.grad}">
                <span>${p.ini}</span>
                <em class="pcard__badge badge--${p.status}" style="font-style:normal">${p.statusLabel}</em>
            </div>
            <div class="pcard__body">
                <span class="pcard__cat">${p.catLabel}</span>
                <h3 class="pcard__title">${p.title}</h3>
                <p class="pcard__desc">${p.desc}</p>
                <div class="chips">${p.tech.map(t => `<span class="chip">${t}</span>`).join("")}</div>
                <div class="pcard__foot">
                    <div class="pcard__meta">
                        <span><svg class="ico" viewBox="0 0 24 24"><polygon points="12 2 15.1 8.3 22 9.3 17 14.1 18.2 21 12 17.8 5.8 21 7 14.1 2 9.3 8.9 8.3 12 2"/></svg>${p.stars}</span>
                        <span><svg class="ico" viewBox="0 0 24 24"><circle cx="12" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><path d="M18 9v2a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9"/></svg>${p.forks}</span>
                        <span>${p.year}</span>
                    </div>
                    <span class="pcard__go"><svg class="ico" viewBox="0 0 24 24" style="width:15px;height:15px"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg></span>
                </div>
            </div>
        </article>`).join("");
}

categoryFilter.addEventListener("change", renderProjects);

projectsGrid.addEventListener("click", e => {
    const c = e.target.closest(".pcard");
    if (c) openProject(Number(c.dataset.id));
});
projectsGrid.addEventListener("keydown", e => {
    const c = e.target.closest(".pcard");
    if (c && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); openProject(Number(c.dataset.id)); }
});

/* ---------- MODAL ---------- */
function openProject(id) {
    const p = projects.find(x => x.id === id);
    if (!p) return;
    modal.innerHTML = `
        <button class="modal__close" aria-label="Tutup"><svg class="ico" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
        <div class="modal__cover" style="background:${p.grad}">${p.ini}</div>
        <div class="modal__inner">
            <span class="pcard__cat">${p.catLabel} · ${p.statusLabel}</span>
            <h2>${p.title}</h2>
            <p class="modal__desc">${p.desc}</p>
            <dl class="modal__meta">
                <div><dt>Tahun</dt><dd>${p.year}</dd></div>
                <div><dt>Bahasa</dt><dd>${p.lang}</dd></div>
                <div><dt>Repo</dt><dd>${p.repo}</dd></div>
            </dl>
            <div class="chips">${p.tech.map(t => `<span class="chip">${t}</span>`).join("")}</div>
            <div class="modal__actions" style="margin-top:20px">
                ${p.live ? `<a class="btn btn--accent" href="${p.live}" target="_blank" rel="noopener noreferrer"><svg class="ico" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>Live Demo</a>` : ""}
                <a class="btn btn--glass" href="https://github.com/${profile.github}/${p.repo}" target="_blank" rel="noopener noreferrer"><svg class="ico" viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>Source</a>
            </div>
        </div>`;
    modal.showModal();
    modal.querySelector(".modal__close").addEventListener("click", () => modal.close());
}
modal.addEventListener("click", e => { if (e.target === modal) modal.close(); });

/* ---------- RENDER: SKILLS ---------- */
function renderSkills() {
    skillsGrid.innerHTML = skills.map(s => `
        <div class="card glass skill" style="--lvl:${s.lvl}%;--hue:var(--${s.hue})">
            <div class="skill__top"><span class="skill__name">${s.name}</span><span class="skill__pct">${s.count}</span></div>
            <div class="skill__bar"><span class="skill__fill"></span></div>
            <div class="chips" style="margin-top:2px">${s.tags.map(t => `<span class="chip">${t}</span>`).join("")}</div>
        </div>`).join("");
}
function animateSkills() {
    requestAnimationFrame(() => {
        document.querySelectorAll(".skill").forEach((el, i) => {
            el.classList.remove("is-in");
            setTimeout(() => el.classList.add("is-in"), 80 * i);
        });
    });
}

/* ---------- RENDER: PINNED ---------- */
function renderPinned() {
    pinnedList.innerHTML = projects.filter(p => p.pin).map(p =>
        `<li><a href="#/projects" class="hue--${p.hue}"><i></i><span>${p.title}</span></a></li>`).join("");
}

/* ---------- ABOUT STATS ---------- */
function renderAboutStats() {
    document.getElementById("aboutStats").innerHTML = [
        { l:"Repo publik", v:profile.repos }, { l:"Stars", v:profile.stars },
        { l:"Bahasa", v:profile.languages }, { l:"Sejak", v:profile.since }
    ].map(s => `<div class="stat"><span class="stat__label">${s.l}</span><span class="stat__value">${s.v}</span></div>`).join("");
}

/* ---------- SEARCH FINDER ---------- */
function openFinder() {
    if (!finder.open) finder.showModal();
    finderQ.value = "";
    renderFinder("");
    finderQ.focus();
}
function renderFinder(q) {
    const query = q.toLowerCase().trim();
    const hits = projects.filter(p =>
        !query || p.title.toLowerCase().includes(query) ||
        p.tech.some(t => t.toLowerCase().includes(query)));
    finderList.innerHTML = hits.length
        ? hits.map((p, i) => `<li class="finder__opt" role="option" data-id="${p.id}" aria-selected="${i === 0}">
                <span class="lead" style="background:${p.grad};color:#fff;font-weight:700;font-size:11px">${p.ini}</span>
                <span><b>${p.title}</b><small>${p.catLabel} · ${p.tech.join(", ")}</small></span>
            </li>`).join("")
        : `<li class="finder__opt" style="cursor:default"><span></span><span><b>Tidak ditemukan</b></span></li>`;
}
document.getElementById("btnSearch").addEventListener("click", openFinder);
finderQ.addEventListener("input", () => renderFinder(finderQ.value));
finderList.addEventListener("click", e => {
    const opt = e.target.closest("[data-id]");
    if (!opt) return;
    finder.close();
    location.hash = "#/projects";
    setTimeout(() => openProject(Number(opt.dataset.id)), 120);
});
finderQ.addEventListener("keydown", e => {
    if (e.key === "Enter") {
        const first = finderList.querySelector("[data-id]");
        if (first) { finder.close(); location.hash = "#/projects"; setTimeout(() => openProject(Number(first.dataset.id)), 120); }
    }
});
document.addEventListener("keydown", e => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") { e.preventDefault(); openFinder(); }
});

/* ---------- GLINT (cahaya kaca mengikuti kursor) ---------- */
addEventListener("pointermove", e => {
    document.querySelectorAll(".glass").forEach(g => {
        const r = g.getBoundingClientRect();
        if (e.clientX < r.left - 80 || e.clientX > r.right + 80 ||
            e.clientY < r.top - 80 || e.clientY > r.bottom + 80) {
            g.style.setProperty("--gx", "-400px");
            return;
        }
        g.style.setProperty("--gx", (e.clientX - r.left) + "px");
        g.style.setProperty("--gy", (e.clientY - r.top) + "px");
    });
}, { passive: true });

/* ---------- TOAST ---------- */
function toast(msg) {
    const el = document.createElement("div");
    el.className = "toast glass glass--thick";
    el.innerHTML = `<i>✓</i><span>${msg}</span>`;
    toastWrap.appendChild(el);
    setTimeout(() => {
        el.classList.add("is-out");
        el.addEventListener("animationend", () => el.remove(), { once: true });
    }, 2600);
}

/* ---------- DYNAMIC ISLAND + FOCUS TIMER ---------- */
const island = document.getElementById("island");
const islandCompact = document.getElementById("islandCompact");
const islandTop = document.getElementById("islandTop");
const islandMsg = document.getElementById("islandMsg");
const islandNoteIco = document.getElementById("islandNoteIco");
const islandTimeC = document.getElementById("islandTimeC");
const islandTimeF = document.getElementById("islandTimeF");
const btnPause = document.getElementById("btnPause");
const btnStopFocus = document.getElementById("btnStopFocus");
const btnFocus = document.getElementById("btnFocus");

const FOCUS_MIN = 25;
const timer = { left: FOCUS_MIN * 60, id: null, running: false, started: false };
let noteT = null, noteReturn = "hidden";

function fmt(sec) {
    const m = Math.floor(sec / 60), s = sec % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}
function islandMode(m) {
    island.dataset.mode = m;
    document.body.classList.toggle("island-on", m !== "hidden");
}
function timerUI() {
    const t = fmt(timer.left);
    islandTimeC.textContent = t;
    islandTimeF.textContent = t;
}
function islandNote(msg, kind = "ok", ms = 3400) {
    if (island.dataset.mode !== "note") noteReturn = island.dataset.mode;
    clearTimeout(noteT);
    islandNoteIco.className = "island__ico island__ico--" + kind;
    islandMsg.textContent = msg;
    islandMode("note");
    noteT = setTimeout(() => {
        islandMode(noteReturn === "note" ? "hidden" : noteReturn);
    }, ms);
}
function startFocus() {
    if (timer.started) {
        islandMode(island.dataset.mode === "full" ? "compact" : "full");
        return;
    }
    timer.left = FOCUS_MIN * 60;
    timer.running = true;
    timer.started = true;
    btnPause.textContent = "Jeda";
    island.classList.remove("is-paused");
    timer.id = setInterval(tick, 1000);
    timerUI();
    islandMode("compact");
    toast("⏱ Focus " + FOCUS_MIN + " menit dimulai");
}
function tick() {
    timer.left--;
    if (timer.left <= 0) { finishFocus(); return; }
    timerUI();
}
function finishFocus() {
    clearInterval(timer.id);
    timer.id = null;
    timer.running = false;
    timer.started = false;
    timer.left = 0;
    timerUI();
    clearTimeout(noteT);
    noteReturn = "hidden";
    islandNoteIco.className = "island__ico island__ico--ok";
    islandMsg.textContent = "Focus selesai! Waktunya istirahat 🎉";
    islandMode("note");
    toast("🎉 Focus " + FOCUS_MIN + " menit selesai!");
    noteT = setTimeout(() => islandMode("hidden"), 4200);
}
function stopFocus() {
    if (timer.id) clearInterval(timer.id);
    timer.id = null;
    timer.running = false;
    timer.started = false;
    clearTimeout(noteT);
    timer.left = FOCUS_MIN * 60;
    timerUI();
    islandMode("hidden");
    toast("Focus dihentikan");
}

btnFocus.addEventListener("click", startFocus);
islandCompact.addEventListener("click", () => islandMode("full"));
islandTop.addEventListener("click", () => islandMode("compact"));
islandTop.addEventListener("keydown", e => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); islandMode("compact"); }
});
btnPause.addEventListener("click", e => {
    e.stopPropagation();
    if (!timer.started) return;
    timer.running = !timer.running;
    if (timer.running) {
        timer.id = setInterval(tick, 1000);
        btnPause.textContent = "Jeda";
        island.classList.remove("is-paused");
    } else {
        clearInterval(timer.id);
        timer.id = null;
        btnPause.textContent = "Lanjut";
        island.classList.add("is-paused");
    }
});
btnStopFocus.addEventListener("click", e => { e.stopPropagation(); stopFocus(); });
document.addEventListener("keydown", e => {
    if (e.key !== "Escape") return;
    if (island.dataset.mode === "full") islandMode("compact");
    else if (island.dataset.mode === "note") { clearTimeout(noteT); islandMode(noteReturn === "note" ? "hidden" : noteReturn); }
});

/* ---------- CONTACT FORM ---------- */
document.getElementById("contactForm").addEventListener("submit", e => {
    e.preventDefault();
    clearTimeout(noteT);
    islandNote("✅ Pesan terkirim — saya balas dalam 24 jam", "ok", 3800);
    e.target.reset();
});

/* ---------- INIT ---------- */
applyLook(loadLook());
countProjects.textContent = String(projects.length);
renderHome();
renderProjects();
renderSkills();
renderPinned();
renderAboutStats();
if (!location.hash) location.hash = "#/home";
route();
