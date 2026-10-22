# Portfolio — Mohamad Akhirudin

Personal portfolio website with a liquid-glass ("Pane") look: sidebar navigation, project grid with filters and detail modal, dark/light mode, interactive wallpapers, dynamic island, and subtle motion.

**Live:** https://akhirudin08.github.io/portfolio/

## Fitur

- Sidebar navigation + mobile tab bar
- Project grid, kategori filter, dan modal detail dengan link Source / Live Demo
- Dark & light mode (tersimpan di `localStorage`)
- 6 wallpaper, 5 aksen warna, ripple click, split-text title
- Dynamic Island (timer fokus, notifikasi, mode compact/full/note)
- Finder ⌘K / Ctrl+K untuk mencari halaman & project
- Contact form dengan validasi dan toast
- Responsive dari 390 px sampai 1920 px

## Teknologi

HTML, CSS, dan JavaScript murni — tanpa framework, tanpa build step.

## Struktur

```
index.html      Struktur halaman & konten
styles.css      Design tokens, glass, animasi, responsive
script.js       Data profil/project/skills + render & interaksi
assets/         Foto profil
```

## Jalankan lokal

Buka `index.html` langsung di browser, atau jalankan server statis:

```bash
python -m http.server 8080
```

Lalu buka http://localhost:8080
