# Kavipriyan Kalaiyarasan — profile site

Static site: open `index.html` locally or publish with **GitHub Pages**.

## Put this repo on GitHub

1. Create a new repository at [github.com/new](https://github.com/new) (any name, e.g. `kavi-profile`).  
   Leave it **empty** (no README, no .gitignore from GitHub).

2. In PowerShell, from this folder:

```powershell
cd D:\Kavi_profile
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

Replace `YOUR_USERNAME` and `YOUR_REPO` with your GitHub username and repository name.

## Turn on GitHub Pages

1. On GitHub: **Settings** → **Pages** (left sidebar).  
2. Under **Build and deployment** → **Source**: choose **Deploy from a branch**.  
3. **Branch**: `main` → folder **`/ (root)`** → **Save**.

After a minute, the site will be at:

**`https://YOUR_USERNAME.github.io/YOUR_REPO/`**

(If the repo is named `YOUR_USERNAME.github.io`, the site URL is `https://YOUR_USERNAME.github.io/`.)

## Update stats and text (every phone / laptop sees the same data)

1. Edit **`stats.json`** in your repo (on GitHub: open the file → pencil icon, or edit locally).
2. Change numbers, about text, club/role, or the `achievements.items` list — keep valid JSON (quotes, commas).
3. **Commit** and **push** to `main` (or commit on the GitHub website).

The live site loads `stats.json` with `cache: no-cache`, so after GitHub Pages finishes updating (usually under a minute), **all devices** show the new content on refresh.

**Local preview:** preferred — use `start-local-server.bat` and open `http://localhost:8080`.

If you **double-click `index.html`**, the browser blocks loading `stats.json` from disk; the site will then try to load data from **GitHub’s raw URL** (needs internet) or use the small embedded copy in `index.html`. After you change `stats.json` on GitHub, double‑click users get updates via that URL; optionally paste the same JSON into the `#stats-fallback-data` script in `index.html` for fully offline demos.
