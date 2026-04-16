/* ============================================================
   AAAI SRMIST - ENTERPRISE ELITE UI SYSTEM
   ============================================================ */

:root {
    /* Premium Corporate Palette */
    --brand - ink:     #020617;
    --brand - slate:   #0F172A;
    --accent:        #2563EB;
    --accent - glow:   #3B82F6;
    --accent - light: #EFF6FF;

    /* Architectural Surfaces */
    --bg - main: #F8FAFC;
    --surface: #FFFFFF;
    --section: #F1F5F9;

    /* High-Fidelity Typography */
    --text - main:     #0F172A;
    --text - sub:      #475569;
    --text - mute:     #94A3B8;

    /* Precision Borders & Layered Shadows */
    --border: rgba(15, 23, 42, 0.08);
    --border - hover: rgba(37, 99, 235, 0.3);
    --shadow - base: 0 2px 4px rgba(0, 0, 0, 0.02), 0 4px 6px rgba(0, 0, 0, 0.02);
    --shadow - hover: 0 10px 30px - 10px rgba(2, 6, 23, 0.1), 0 4px 10px - 4px rgba(37, 99, 235, 0.1);
    --shadow - glass: 0 8px 32px 0 rgba(31, 38, 135, 0.05);

    --radius - sm: 6px;
    --radius - md: 12px;
    --radius - lg: 20px;

    --ease: cubic - bezier(0.2, 0.8, 0.2, 1);
    --nav - h: 72px;
}

*, *:: before, *::after { box - sizing: border - box; margin: 0; padding: 0; }

html { scroll - behavior: smooth; -webkit - text - size - adjust: 100 %; scroll - padding - top: var(--nav - h); }
body {
    font - family: 'Inter', -apple - system, BlinkMacSystemFont, sans - serif;
    background - color: var(--bg - main);
    /* Subtle mesh grid background for architectural feel */
    background - image: radial - gradient(var(--border) 1px, transparent 1px);
    background - size: 24px 24px;
    color: var(--text - main);
    line - height: 1.6;
    overflow - x: hidden;
    -webkit - font - smoothing: antialiased;
}

a { text - decoration: none; color: inherit; transition: all 0.3s var(--ease); }
ul, ol { list - style: none; }
button { cursor: pointer; font - family: inherit; border: none; background: none; }
input { font - family: inherit; outline: none; }

h1, h2, h3, h4, .brand - font {
    font - family: 'Space Grotesk', sans - serif;
    font - weight: 700;
    letter - spacing: -0.03em;
    color: var(--brand - ink);
}
.mono { font - family: 'JetBrains Mono', monospace; }

/* ==================== GLOBAL LAYOUT & TYPOGRAPHY ==================== */
.app - wrapper { display: flex; flex - direction: column; min - height: 100vh; }
.main - content { flex: 1; }
.container { width: 100 %; max - width: 1240px; margin: 0 auto; padding: 0 clamp(20px, 5vw, 48px); }
.section - pad { padding: clamp(80px, 12vh, 140px) 0; position: relative; }

/* Cinematic Section Headings */
.section - title { margin - bottom: 48px; position: relative; display: flex; flex - direction: column; align - items: flex - start; }
.section - title h2 { font - size: clamp(36px, 5vw, 56px); margin - bottom: 16px; line - height: 1.05; position: relative; z - index: 2; }
.section - title p { color: var(--text - sub); font - size: 18px; max - width: 640px; line - height: 1.6; border - left: 2px solid var(--accent); padding - left: 16px; }

.eyebrow, .eyebrow - light { display: inline - flex; align - items: center; gap: 12px; font - size: 12px; font - weight: 700; letter - spacing: 0.15em; text - transform: uppercase; margin - bottom: 16px; color: var(--accent); }
.eyebrow:: before, .eyebrow - light::before { content: ''; display: block; width: 32px; height: 2px; background: var(--accent); }
.eyebrow - light { color: var(--accent - glow); }
.eyebrow - light::before { background: var(--accent - glow); }

/* Premium Buttons */
.btn { display: inline - flex; align - items: center; justify - content: center; gap: 8px; padding: 12px 24px; border - radius: var(--radius - sm); font - size: 14px; font - weight: 600; transition: all 0.3s var(--ease); white - space: nowrap; letter - spacing: 0.02em; position: relative; overflow: hidden; }
.btn - sm { padding: 8px 16px; font - size: 13px; }
.btn - full { width: 100 %; }

.btn - primary { background: var(--brand - ink); color: #fff; box - shadow: 0 4px 14px rgba(2, 6, 23, 0.15); }
.btn - primary:hover { background: var(--accent); transform: translateY(-2px); box - shadow: 0 8px 24px rgba(37, 99, 235, 0.25); }

.btn - outline { background: rgba(255, 255, 255, 0.8); backdrop - filter: blur(8px); color: var(--brand - ink); border: 1px solid var(--border); box - shadow: var(--shadow - base); }
.btn - outline:hover { border - color: var(--accent); color: var(--accent); background: #fff; transform: translateY(-2px); box - shadow: var(--shadow - hover); }

.reveal { opacity: 0; transform: translateY(24px); transition: opacity 0.8s var(--ease), transform 0.8s var(--ease); }
.reveal.visible { opacity: 1; transform: translateY(0); }

/* ==================== NAVBAR (Glassmorphic) ==================== */
#navbar { position: fixed; top: 0; left: 0; right: 0; z - index: 1000; transition: all 0.4s var(--ease); background: transparent; padding: 20px 0; border - bottom: 1px solid transparent; }
#navbar.scrolled { background: rgba(255, 255, 255, 0.85); backdrop - filter: blur(16px); -webkit - backdrop - filter: blur(16px); box - shadow: var(--shadow - glass); padding: 0; border - bottom: 1px solid var(--border); }
#navbar.menu - open { background: var(--surface); border - bottom: 1px solid var(--border); padding: 0; }

.nav - inner { display: flex; align - items: center; justify - content: space - between; height: var(--nav - h); }
.nav - logo { display: flex; align - items: center; gap: 16px; z - index: 1001; flex - shrink: 0; }
.dual - logos { display: flex; align - items: center; gap: 16px; }

.nav - logo - img { height: clamp(28px, 4vw, 36px); width: auto; object - fit: contain; transition: all 0.3s var(--ease); filter: drop - shadow(0 2px 4px rgba(0, 0, 0, 0.1)); }
.srmist - logo { background: #fff; padding: 4px; border - radius: var(--radius - sm); }
.logo - divider { width: 1px; height: 24px; background: rgba(255, 255, 255, 0.3); }

#navbar.scrolled.logo - divider, #navbar.menu - open.logo - divider { background: var(--border); }
#navbar.scrolled.srmist - logo, #navbar.menu - open.srmist - logo { background: transparent; padding: 0; filter: none; }

.nav - text { display: flex; flex - direction: column; justify - content: center; border - left: 1px solid rgba(255, 255, 255, 0.2); padding - left: 16px; margin - left: 4px; }
#navbar.scrolled.nav - text, #navbar.menu - open.nav - text { border - color: var(--border); }

.nav - t1 { font - family: 'Space Grotesk', sans - serif; font - size: 16px; font - weight: 700; color: #fff; letter - spacing: -0.02em; line - height: 1.2; }
.nav - t2 { font - family: 'JetBrains Mono', monospace; font - size: 9px; font - weight: 700; letter - spacing: 0.2em; text - transform: uppercase; color: rgba(255, 255, 255, 0.7); margin - top: 2px; }
#navbar.scrolled.nav - t1, #navbar.menu - open.nav - t1 { color: var(--brand - ink); }
#navbar.scrolled.nav - t2, #navbar.menu - open.nav - t2 { color: var(--text - sub); }

@media(max - width: 600px) { .hide - mobile { display: none; } .nav - text { border: none; padding: 0; margin: 0; } }

.nav - desktop { display: none; align - items: center; gap: 32px; }
.nav - links { display: flex; align - items: center; gap: 24px; }
.nav - link { font - size: 14px; font - weight: 500; color: rgba(255, 255, 255, 0.8); transition: all 0.3s var(--ease); position: relative; }
.nav - link::after { content: ''; position: absolute; bottom: -4px; left: 0; width: 0; height: 2px; background: #fff; transition: width 0.3s var(--ease); }
.nav - link:hover { color: #fff; }
.nav - link: hover::after { width: 100 %; }
#navbar.scrolled.nav - link { color: var(--text - sub); }
#navbar.scrolled.nav - link:hover { color: var(--accent); }
#navbar.scrolled.nav - link::after { background: var(--accent); }

@media(min - width: 900px) { .nav - desktop { display: flex; } .hamburger - standard { display: none!important; } }

.hamburger - standard { display: flex; flex - direction: column; justify - content: space - around; width: 24px; height: 18px; cursor: pointer; z - index: 1001; margin - left: auto; }
.hamburger - standard.line { width: 100 %; height: 2px; background: #fff; border - radius: 2px; transition: all 0.3s var(--ease); transform - origin: left center; }
#navbar.scrolled.hamburger - standard.line, #navbar.menu - open.hamburger - standard.line { background: var(--brand - ink); }
.hamburger - standard.is - active.line: nth - child(1) { transform: rotate(45deg); }
.hamburger - standard.is - active.line: nth - child(2) { opacity: 0; width: 0; }
.hamburger - standard.is - active.line: nth - child(3) { transform: rotate(-45deg); }

/* Mobile Menu */
.mobile - menu - overlay { position: fixed; top: var(--nav - h); left: 0; right: 0; height: calc(100vh - var(--nav - h)); background: rgba(255, 255, 255, 0.98); backdrop - filter: blur(16px); z - index: 1000; display: flex; flex - direction: column; padding: 40px clamp(24px, 8vw, 48px); opacity: 0; pointer - events: none; transform: translateY(-10px); transition: all 0.4s var(--ease); border - top: 1px solid var(--border); }
.mobile - menu - overlay.open { opacity: 1; pointer - events: auto; transform: translateY(0); }
.mobile - nav - list { display: flex; flex - direction: column; gap: 32px; }
.mobile - nav - list li { opacity: 0; transform: translateY(20px); transition: all 0.4s var(--ease); transition - delay: var(--delay); }
.mobile - menu - overlay.open.mobile - nav - list li { opacity: 1; transform: translateY(0); }
.mobile - link { font - family: 'Space Grotesk', sans - serif; font - size: 36px; font - weight: 700; color: var(--brand - ink); letter - spacing: -0.03em; }

/* ==================== HERO SECTION (Enterprise Cinematic) ==================== */
#hero { min - height: 100vh; background: var(--brand - ink); position: relative; display: flex; flex - direction: column; justify - content: center; overflow: hidden; padding - top: var(--nav - h); }

/* Complex Dark Lighting Effects */
.hero - flow - bg { position: absolute; inset: 0; z - index: 0; background: radial - gradient(circle at 80 % 20 %, rgba(37, 99, 235, 0.15), transparent 40 %), radial - gradient(circle at 20 % 80 %, rgba(255, 255, 255, 0.05), transparent 40 %); }
.hero - grid { position: absolute; inset: 0; z - index: 1; background - image: linear - gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear - gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px); background - size: 40px 40px; mask - image: linear - gradient(to bottom, black 40 %, transparent 100 %); -webkit - mask - image: linear - gradient(to bottom, black 40 %, transparent 100 %); }

.hero - content { position: relative; z - index: 2; display: flex; flex - direction: column; align - items: flex - start; }

.h - tag { display: inline - flex; align - items: center; gap: 10px; margin - bottom: 32px; padding: 6px 16px; background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.1); border - radius: 100px; backdrop - filter: blur(12px); box - shadow: 0 4px 12px rgba(0, 0, 0, 0.1); }
.h - dot { width: 6px; height: 6px; border - radius: 50 %; background: #10B981; box - shadow: 0 0 12px #10B981; animation: pulse 2s infinite; }
.h - tag - text { font - family: 'JetBrains Mono', monospace; font - size: 11px; font - weight: 600; letter - spacing: 0.15em; text - transform: uppercase; color: rgba(255, 255, 255, 0.9); }

/* Gradient Typography for Hero */
.hero - title { font - size: clamp(48px, 8vw, 96px); margin - bottom: 24px; line - height: 1.05; letter - spacing: -0.04em; }
.hero - title.gradient - text { background: linear - gradient(135deg, #FFFFFF 0 %, #94A3B8 100 %); -webkit - background - clip: text; -webkit - text - fill - color: transparent; }
.hero - title span { color: var(--accent - glow); }

.hero - subtitle { font - size: clamp(20px, 3vw, 28px); color: #fff; margin - bottom: 24px; font - weight: 400; letter - spacing: -0.02em; border - left: 2px solid var(--accent); padding - left: 16px; }
.hero - desc { font - size: clamp(16px, 2vw, 18px); color: rgba(255, 255, 255, 0.6); max - width: 680px; line - height: 1.7; margin - bottom: 48px; font - weight: 400; }
.hero - ctas { display: flex; flex - wrap: wrap; gap: 16px; }

/* ==================== EVENT CALENDAR UI (Enterprise Dash) ==================== */
.filter - tabs { display: flex; gap: 12px; flex - wrap: wrap; margin - bottom: 40px; background: var(--surface); padding: 8px; border - radius: var(--radius - md); border: 1px solid var(--border); box - shadow: var(--shadow - base); display: inline - flex; }
.filter - tab { padding: 8px 20px; font - size: 13px; font - weight: 600; color: var(--text - sub); border - radius: var(--radius - sm); transition: all 0.3s var(--ease); }
.filter - tab.active, .filter - tab:hover { background: var(--brand - ink); color: #fff; box - shadow: 0 4px 12px rgba(2, 6, 23, 0.15); }

.events - list { display: flex; flex - direction: column; gap: 24px; }

.event - list - card { display: flex; flex - direction: column; background: var(--surface); border: 1px solid var(--border); border - radius: var(--radius - md); overflow: hidden; transition: all 0.4s var(--ease); box - shadow: var(--shadow - base); position: relative; }
/* Top Accent Line on Cards */
.event - list - card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: linear - gradient(90deg, var(--accent), transparent); opacity: 0; transition: opacity 0.4s var(--ease); }

@media(min - width: 768px) { .event - list - card { flex - direction: row; } }

.event - list - card:hover { transform: translateY(-4px); box - shadow: var(--shadow - hover); border - color: rgba(37, 99, 235, 0.2); }
.event - list - card: hover::before { opacity: 1; }
.event - list - card.is - expanded { border - color: var(--accent); box - shadow: var(--shadow - hover); }

.event - date - block { background: var(--section); color: var(--brand - ink); display: flex; flex - direction: column; align - items: center; justify - content: center; padding: 32px 24px; text - align: center; border - bottom: 1px solid var(--border); }
@media(min - width: 768px) { .event - date - block { width: 180px; border - bottom: none; border - right: 1px solid var(--border); } }
.ed - month { font - family: 'JetBrains Mono', monospace; font - size: 13px; font - weight: 700; letter - spacing: 0.15em; text - transform: uppercase; color: var(--accent); }
.ed - day { font - family: 'Space Grotesk', sans - serif; font - size: clamp(40px, 5vw, 56px); font - weight: 700; line - height: 1; margin - top: 8px; letter - spacing: -0.04em; }

.event - content - wrapper { flex: 1; display: flex; flex - direction: column; padding: 32px 40px; background: #fff; }
.event - header - row { display: flex; flex - direction: column; gap: 16px; cursor: pointer; }
@media(min - width: 900px) { .event - header - row { flex - direction: row; justify - content: space - between; align - items: flex - start; } }

.event - meta { display: flex; align - items: center; gap: 16px; margin - bottom: 16px; }
.event - type { font - family: 'JetBrains Mono', monospace; font - size: 11px; font - weight: 700; letter - spacing: 0.1em; text - transform: uppercase; color: var(--text - sub); }

.status - badge { display: inline - flex; align - items: center; gap: 8px; font - size: 10px; font - weight: 700; letter - spacing: 0.05em; text - transform: uppercase; padding: 6px 12px; border - radius: 100px; border: 1px solid var(--border); background: var(--section); }
.status - badge.upcoming { background: var(--accent - light); color: var(--accent); border - color: rgba(37, 99, 235, 0.2); }
.live - dot { width: 6px; height: 6px; border - radius: 50 %; background: var(--accent); animation: blink 2s infinite; }

.event - title { font - size: clamp(24px, 3vw, 32px); margin - bottom: 12px; line - height: 1.2; color: var(--brand - ink); transition: color 0.3s var(--ease); }
.event - list - card: hover.event - title { color: var(--accent); }
.event - venue { font - size: 15px; color: var(--text - sub); display: flex; align - items: center; font - weight: 400; }

.btn - expand - icon { font - size: 20px; font - weight: 300; width: 40px; height: 40px; border - radius: 50 %; display: flex; align - items: center; justify - content: center; color: var(--brand - ink); border: 1px solid var(--border); transition: all 0.3s var(--ease); background: var(--surface); align - self: flex - start; box - shadow: var(--shadow - base); }
.event - list - card: hover.btn - expand - icon { background: var(--brand - ink); color: #fff; }

.event - expandable - body { display: grid; grid - template - rows: 0fr; transition: grid - template - rows 0.5s var(--ease); }
.event - list - card.is - expanded.event - expandable - body { grid - template - rows: 1fr; }
.event - body - inner { overflow: hidden; }

.event - dossier { margin - top: 32px; padding - top: 32px; border - top: 1px solid var(--border); }
.event - rich - content { font - size: 16px; color: var(--text - main); line - height: 1.8; }
.event - rich - content p { margin - bottom: 20px; }
.event - rich - content strong { color: var(--brand - ink); font - weight: 600; }
.recap - meta { padding: 20px 24px; background: var(--section); border - radius: var(--radius - sm); margin - bottom: 32px; font - size: 14px; border - left: 3px solid var(--accent); }
.recap - meta p { margin - bottom: 8px; color: var(--text - main); }
.recap - meta p: last - child { margin - bottom: 0; }
.event - fallback - desc { font - size: 15px; color: var(--text - mute); font - style: italic; }

/* ==================== TEAM GRID (Executive Layout) ==================== */
.team - grid { display: grid; gap: 32px; grid - template - columns: 1fr; }
@media(min - width: 640px) { .team - grid { grid - template - columns: repeat(auto - fill, minmax(280px, 1fr)); } }

.team - member { background: var(--surface); border: 1px solid var(--border); border - radius: var(--radius - md); overflow: hidden; transition: all 0.4s var(--ease); padding: 40px 32px; display: flex; flex - direction: column; align - items: center; text - align: center; box - shadow: var(--shadow - base); position: relative; }
.team - member:hover { transform: translateY(-6px); box - shadow: var(--shadow - hover); border - color: rgba(37, 99, 235, 0.2); }

.tm - avatar { width: 88px; height: 88px; border - radius: 50 %; display: flex; align - items: center; justify - content: center; font - family: 'Space Grotesk', sans - serif; font - size: 24px; font - weight: 700; color: #fff; margin - bottom: 24px; background: var(--section); overflow: hidden; border: 4px solid var(--surface); box - shadow: 0 8px 16px rgba(0, 0, 0, 0.08); transition: transform 0.4s var(--ease); }
.team - member: hover.tm - avatar { transform: scale(1.05); }
.tm - avatar - img { width: 100 %; height: 100 %; object - fit: cover; }

.tm - name { font - size: 18px; margin - bottom: 4px; color: var(--brand - ink); }
.tm - role { font - family: 'JetBrains Mono', monospace; font - size: 11px; font - weight: 700; letter - spacing: 0.1em; text - transform: uppercase; color: var(--accent); margin - bottom: 12px; }
.tm - dept { font - size: 14px; color: var(--text - sub); margin - bottom: 24px; flex: 1; }

.tm - social { display: inline - flex; align - items: center; gap: 8px; font - size: 13px; font - weight: 600; color: var(--brand - ink); transition: all 0.3s var(--ease); padding: 10px 24px; border - radius: 100px; background: var(--section); width: 100 %; justify - content: center; }
.team - member: hover.tm - social { background: var(--brand - ink); color: #fff; }

/* ==================== EVENT GALLERY (Museum Grid) ==================== */
.gallery - group - header { margin - bottom: 32px; display: flex; flex - direction: column; gap: 8px; border - bottom: 1px solid var(--border); padding - bottom: 16px; }
.gallery - group - header h3 { font - size: 28px; color: var(--brand - ink); letter - spacing: -0.02em; }
.gallery - group - header p { font - family: 'JetBrains Mono', monospace; font - size: 13px; color: var(--text - mute); }

.gallery - grid { display: grid; grid - template - columns: repeat(auto - fill, minmax(280px, 1fr)); gap: 24px; }
.gallery - item { border - radius: var(--radius - sm); overflow: hidden; border: 1px solid var(--border); background: var(--section); transition: all 0.4s var(--ease); aspect - ratio: 4 / 3; position: relative; }
/* Cinematic Image Hover */
.gallery - item img { width: 100 %; height: 100 %; object - fit: cover; transition: transform 0.6s cubic - bezier(0.2, 0.8, 0.2, 1); }
.gallery - item:hover { border - color: rgba(0, 0, 0, 0.1); box - shadow: var(--shadow - hover); z - index: 2; }
.gallery - item:hover img { transform: scale(1.08); }

.gallery - placeholder { width: 100 %; height: 100 %; display: flex; align - items: center; justify - content: center; color: var(--text - mute); font - family: 'JetBrains Mono', monospace; font - size: 11px; text - transform: uppercase; letter - spacing: 0.1em; }

/* ==================== BLOG / RESEARCH JOURNAL (Premium Grid) ==================== */
.page - hero { background: var(--brand - ink); padding: calc(var(--nav - h) + 80px) 0 100px; position: relative; text - align: center; overflow: hidden; }
/* Hero glowing effect behind text */
.page - hero::before { content: ''; position: absolute; top: 50 %; left: 50 %; transform: translate(-50 %, -50 %); width: 600px; height: 600px; background: radial - gradient(circle, rgba(37, 99, 235, 0.15) 0 %, transparent 70 %); border - radius: 50 %; pointer - events: none; }
.page - hero.hero - title { background: linear - gradient(135deg, #FFFFFF 0 %, #94A3B8 100 %); -webkit - background - clip: text; -webkit - text - fill - color: transparent; margin - bottom: 20px; font - size: clamp(40px, 6vw, 64px); letter - spacing: -0.04em; }

.blog - controls { display: flex; flex - direction: column; gap: 24px; margin - bottom: 56px; background: #fff; padding: 16px 24px; border - radius: var(--radius - md); border: 1px solid var(--border); box - shadow: var(--shadow - base); }
@media(min - width: 900px) { .blog - controls { flex - direction: row; align - items: center; justify - content: space - between; } }
.blog - controls.filter - tabs { border: none; margin: 0; padding: 0; box - shadow: none; }

.search - wrapper { display: flex; align - items: center; gap: 12px; background: var(--section); border: 1px solid transparent; border - radius: var(--radius - sm); padding: 10px 16px; flex: 1; max - width: 360px; transition: all 0.3s var(--ease); }
.search - wrapper: focus - within { border - color: var(--accent); background: #fff; box - shadow: 0 0 0 3px rgba(37, 99, 235, 0.1); }
.search - wrapper input { border: none; background: transparent; width: 100 %; font - size: 14px; outline: none; color: var(--brand - ink); }

.blog - grid { display: grid; grid - template - columns: 1fr; gap: 40px; }
@media(min - width: 768px) { .blog - grid { grid - template - columns: repeat(2, 1fr); } }
@media(min - width: 1024px) { .blog - grid { grid - template - columns: repeat(3, 1fr); } }

/* Executive Blog Cards */
.blog - card { background: var(--surface); border: 1px solid var(--border); border - radius: var(--radius - lg); overflow: hidden; transition: all 0.4s var(--ease); display: flex; flex - direction: column; cursor: pointer; box - shadow: var(--shadow - base); position: relative; }
.blog - card::after { content: ''; position: absolute; inset: 0; border: 2px solid var(--accent); border - radius: var(--radius - lg); opacity: 0; transition: opacity 0.4s var(--ease); pointer - events: none; }
.blog - card:hover { transform: translateY(-6px); box - shadow: var(--shadow - hover); border - color: transparent; }
.blog - card: hover::after { opacity: 1; }

.blog - image - placeholder { height: 240px; background: var(--section); display: flex; align - items: center; justify - content: center; border - bottom: 1px solid var(--border); position: relative; overflow: hidden; }
/* Image Zoom on hover */
.blog - image - placeholder img { width: 100 %; height: 100 %; object - fit: contain; background: var(--section); transition: transform 0.6s var(--ease); }
.blog - card: hover.blog - image - placeholder img { transform: scale(1.05); }

.blog - image - placeholder span { font - family: 'JetBrains Mono', monospace; font - weight: 700; color: var(--text - mute); text - transform: uppercase; font - size: 11px; letter - spacing: 0.1em; }

.blog - content { padding: 32px; display: flex; flex - direction: column; flex: 1; }

/* Premium Featured Blog spans fully */
@media(min - width: 1024px) {
  .featured - blog { grid - column: 1 / -1; flex - direction: row; align - items: stretch; border - radius: var(--radius - lg); }
  .featured - blog.featured - img { width: 60 %; height: auto; min - height: 480px; border - bottom: none; border - right: 1px solid var(--border); }
  .featured - blog.featured - content { width: 40 %; padding: 64px; justify - content: center; }
  .blog - featured - title { font - size: clamp(36px, 4vw, 48px)!important; margin - bottom: 24px!important; letter - spacing: -0.04em!important; }
}

.blog - card.event - meta { margin - bottom: 20px; }
.blog - card.status - badge { border: none; background: var(--section); color: var(--text - sub); }

.blog - footer { display: flex; align - items: center; justify - content: space - between; margin - top: auto; padding - top: 24px; border - top: 1px solid var(--border); }
.blog - author { display: flex; align - items: center; gap: 12px; }
.author - av { width: 36px; height: 36px; border - radius: 50 %; background: var(--brand - ink); color: #fff; display: flex; align - items: center; justify - content: center; font - weight: 700; font - size: 14px; font - family: 'Space Grotesk', sans - serif; }
.author - info { display: flex; flex - direction: column; }
.author - name { font - size: 14px; font - weight: 600; color: var(--brand - ink); }
.author - date { font - family: 'JetBrains Mono', monospace; font - size: 10px; color: var(--text - mute); text - transform: uppercase; margin - top: 2px; letter - spacing: 0.05em; }

/* ==================== BLOG READER MODE (Deep Focus) ==================== */
.reader - mode - container { background: var(--surface); min - height: 100vh; padding - top: var(--nav - h); padding - bottom: 120px; animation: fadeIn 0.5s var(--ease); }
@keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }

.reader - top - bar { background: rgba(255, 255, 255, 0.95); backdrop - filter: blur(16px); border - bottom: 1px solid var(--border); padding: 16px 0; position: sticky; top: var(--nav - h); z - index: 99; }
.btn - back { display: inline - flex; align - items: center; font - size: 14px; font - weight: 600; color: var(--text - sub); transition: color 0.3s; padding: 8px 16px; border - radius: 100px; }
.btn - back:hover { color: var(--brand - ink); background: var(--section); }

.reader - article { max - width: 760px; margin: 0 auto; padding: 80px 24px; }
.reader - header { text - align: left; margin - bottom: 56px; }
.reader - title { font - size: clamp(40px, 6vw, 64px); line - height: 1.1; margin - bottom: 32px; color: var(--brand - ink); letter - spacing: -0.04em; }

.reader - author - block { display: flex; align - items: center; gap: 20px; padding: 24px 0; border - top: 1px solid var(--border); border - bottom: 1px solid var(--border); }
.reader - image - hero { width: 100 %; aspect - ratio: 21 / 9; background: var(--bg - main); border - radius: var(--radius - md); margin - bottom: 64px; display: flex; align - items: center; justify - content: center; color: var(--text - mute); border: 1px solid var(--border); overflow: hidden; box - shadow: var(--shadow - base); }
.reader - image - hero img { width: 100 %; height: 100 %; object - fit: contain; }

.blog - rich - content { font - size: 19px; color: var(--text - main); line - height: 1.8; font - weight: 400; }
.blog - rich - content.lead - text { font - size: 24px; color: var(--text - sub); font - weight: 400; margin - bottom: 48px; line - height: 1.6; letter - spacing: -0.01em; }
.blog - rich - content h4 { margin: 56px 0 24px; font - size: 28px; color: var(--brand - ink); letter - spacing: -0.03em; border - bottom: 1px solid var(--border); padding - bottom: 12px; }
.blog - rich - content p { margin - bottom: 28px; }
.blog - rich - content ul { padding - left: 24px; margin - bottom: 40px; list - style - type: disc; color: var(--text - sub); }
.blog - rich - content li { margin - bottom: 16px; }
.blog - rich - content a { color: var(--accent); font - weight: 500; text - decoration: underline; text - decoration - color: rgba(37, 99, 235, 0.3); transition: all 0.3s; text - underline - offset: 6px; }
.blog - rich - content a:hover { text - decoration - color: var(--accent); background: rgba(37, 99, 235, 0.05); }

/* ==================== CHATBOT (ARIA) ==================== */
.aria - core - trigger { position: fixed; bottom: 32px; right: 32px; z - index: 991; width: 64px; height: 64px; border - radius: 50 %; transition: all 0.4s var(--ease); box - shadow: 0 8px 24px rgba(0, 82, 255, 0.3); }
.aria - core - trigger:hover { transform: scale(1.05) translateY(-4px); box - shadow: 0 12px 32px rgba(0, 82, 255, 0.4); }
.aria - core - trigger.hide { opacity: 0; pointer - events: none; transform: scale(0.8); }

.aria - orb { position: relative; width: 100 %; height: 100 %; display: flex; align - items: center; justify - content: center; }
.aria - ring { position: absolute; inset: 0; border - radius: 50 %; border: 1px solid rgba(255, 255, 255, 0.8); opacity: 0.8; }
.aria - ring - 1 { animation: spinRing 4s linear infinite; border - top - color: transparent; }
.aria - ring - 2 { animation: spinRing 3s linear infinite reverse; border - bottom - color: transparent; scale: 0.8; }
@keyframes spinRing { to { transform: rotate(360deg); } }

.aria - center { width: 50 %; height: 50 %; background: var(--brand - ink); border - radius: 50 %; display: flex; align - items: center; justify - content: center; color: #fff; font - family: 'JetBrains Mono', monospace; font - weight: 700; font - size: 16px; border: 2px solid #fff; }

.aria - terminal { position: fixed; bottom: 32px; right: 32px; z - index: 992; width: 380px; max - width: calc(100vw - 32px); max - height: 80vh; background: rgba(2, 6, 23, 0.95); backdrop - filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.1); border - radius: var(--radius - lg); box - shadow: 0 24px 48px rgba(0, 0, 0, 0.4); display: flex; flex - direction: column; overflow: hidden; opacity: 0; pointer - events: none; transform: translateY(20px) scale(0.98); transition: all 0.5s var(--ease); }
.aria - terminal.open { opacity: 1; pointer - events: auto; transform: translateY(0) scale(1); }

.aria - terminal - header { padding: 20px 24px; display: flex; justify - content: space - between; align - items: center; border - bottom: 1px solid rgba(255, 255, 255, 0.05); background: rgba(255, 255, 255, 0.02); }
.aria - sys - info { display: flex; align - items: center; gap: 12px; }
.aria - mini - orb { width: 8px; height: 8px; background: #10B981; border - radius: 50 %; box - shadow: 0 0 12px #10B981; animation: blink 2s infinite; }
.aria - title { font - family: 'JetBrains Mono', monospace; font - size: 12px; font - weight: 700; letter - spacing: 0.1em; color: #fff; text - transform: uppercase; }
.aria - close { color: rgba(255, 255, 255, 0.4); transition: color 0.3s; }
.aria - close:hover { color: #fff; }

.aria - terminal - body { height: 360px; padding: 24px; overflow - y: auto; display: flex; flex - direction: column; gap: 16px; }
.aria - msg { max - width: 85 %; font - size: 14px; padding: 14px 18px; border - radius: var(--radius - md); color: #fff; animation: msgFade 0.4s var(--ease); line - height: 1.5; }
@keyframes msgFade { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

.aria - msg.bot { background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.05); align - self: flex - start; border - bottom - left - radius: 4px; }
.aria - msg.user { background: var(--accent); align - self: flex - end; border - bottom - right - radius: 4px; box - shadow: 0 4px 12px rgba(37, 99, 235, 0.2); }
.aria - msg.typing { display: flex; gap: 6px; padding: 14px 18px; background: transparent; border: none; }
.aria - msg.typing.dot { width: 6px; height: 6px; background: rgba(255, 255, 255, 0.5); border - radius: 50 %; animation: typingBounce 1.4s infinite ease -in -out both; }
.aria - msg.typing.dot: nth - child(1) { animation - delay: -0.32s; }
.aria - msg.typing.dot: nth - child(2) { animation - delay: -0.16s; }

.aria - terminal - footer { padding: 16px 20px; background: rgba(0, 0, 0, 0.2); border - top: 1px solid rgba(255, 255, 255, 0.05); display: flex; gap: 12px; }
.aria - terminal - footer input { flex: 1; background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border - radius: 100px; padding: 12px 20px; color: #fff; font - size: 14px; transition: all 0.3s; }
.aria - terminal - footer input:focus { border - color: rgba(255, 255, 255, 0.3); background: rgba(255, 255, 255, 0.08); }
.aria - send { width: 44px; height: 44px; background: rgba(255, 255, 255, 0.05); color: rgba(255, 255, 255, 0.4); border - radius: 50 %; border: 1px solid rgba(255, 255, 255, 0.1); display: flex; align - items: center; justify - content: center; transition: all 0.3s; }
.aria - send.active { background: #fff; color: var(--brand - ink); border - color: #fff; box - shadow: 0 4px 12px rgba(255, 255, 255, 0.2); }

/* ==================== ELITE FOOTER ==================== */
#footer { background: var(--brand - ink); color: #fff; padding: 100px 0 0; margin - top: auto; border - top: 1px solid rgba(255, 255, 255, 0.1); position: relative; overflow: hidden; }
/* Subtle footer glow */
#footer::before { content: ''; position: absolute; bottom: 0; left: 50 %; transform: translateX(-50 %); width: 80 %; height: 200px; background: radial - gradient(ellipse at bottom, rgba(37, 99, 235, 0.15) 0 %, transparent 70 %); pointer - events: none; }

.footer - grid { display: grid; grid - template - columns: 1fr; gap: 56px 32px; padding - bottom: 80px; position: relative; z - index: 2; }
@media(min - width: 640px) { .footer - grid { grid - template - columns: repeat(2, 1fr); } }
@media(min - width: 1024px) { .footer - grid { grid - template - columns: 2fr 1fr 1fr 1fr; } }

.footer - logo - mark { width: 48px; height: 48px; background: linear - gradient(135deg, rgba(255, 255, 255, 0.1) 0 %, rgba(255, 255, 255, 0.02) 100 %); border: 1px solid rgba(255, 255, 255, 0.15); border - radius: var(--radius - sm); display: flex; align - items: center; justify - content: center; font - family: 'Space Grotesk', sans - serif; font - size: 20px; font - weight: 700; color: #fff; margin - bottom: 24px; box - shadow: 0 4px 12px rgba(0, 0, 0, 0.2); }
.footer - brand - name { font - family: 'Space Grotesk', sans - serif; font - size: 24px; font - weight: 700; color: #fff; letter - spacing: -0.03em; margin - bottom: 16px; }
.footer - brand p { font - size: 15px; color: rgba(255, 255, 255, 0.6); line - height: 1.7; max - width: 360px; }

.footer - col h4 { font - family: 'JetBrains Mono', monospace; font - size: 11px; font - weight: 700; letter - spacing: 0.15em; text - transform: uppercase; color: #fff; margin - bottom: 24px; }
.footer - links { display: flex; flex - direction: column; gap: 16px; }
.footer - link { font - size: 15px; color: rgba(255, 255, 255, 0.5); display: inline - block; transition: all 0.3s; }
.footer - link:hover { color: #fff; transform: translateX(4px); }

.footer - bottom { border - top: 1px solid rgba(255, 255, 255, 0.1); padding: 32px 0; text - align: center; display: flex; flex - direction: column; align - items: center; gap: 12px; position: relative; z - index: 2; background: rgba(0, 0, 0, 0.2); }
.footer - copy { font - family: 'JetBrains Mono', monospace; font - size: 11px; color: rgba(255, 255, 255, 0.4); text - transform: uppercase; letter - spacing: 0.1em; }

/* ==================== GO TO TOP ==================== */
.scroll - to - top { position: fixed; bottom: 32px; left: 32px; z - index: 990; width: 48px; height: 48px; background: rgba(255, 255, 255, 0.9); backdrop - filter: blur(8px); border: 1px solid var(--border); border - radius: var(--radius - sm); display: flex; align - items: center; justify - content: center; color: var(--brand - ink); box - shadow: var(--shadow - base); opacity: 0; pointer - events: none; transform: translateY(20px); transition: all 0.4s var(--ease); }
.scroll - to - top.visible { opacity: 1; pointer - events: auto; transform: translateY(0); }
.scroll - to - top:hover { border - color: var(--accent); color: var(--accent); transform: translateY(-4px); box - shadow: var(--shadow - hover); }

@media(max - width: 768px) {
  .scroll - to - top { bottom: 24px; left: 24px; width: 44px; height: 44px; }
  .aria - core - trigger { bottom: 24px; right: 24px; width: 56px; height: 56px; }
  .aria - terminal { bottom: 24px; right: 24px; left: 24px; width: auto; max - width: none; }
}