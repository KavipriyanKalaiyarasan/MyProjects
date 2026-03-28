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

**There is no “Save to website” button on free GitHub Pages** — there is no server to store data. You either (A) use the form editor and upload the file, or (B) edit `stats.json` by hand.

### Option A — Form UI (easiest)

1. Open **`edit-stats.html`** on your live site (footer link **Update stats**) or locally via `http://localhost:8080/edit-stats.html`.
2. Change fields → **Download stats.json** or **Copy JSON**.
3. On GitHub: open **`stats.json`** → edit → paste or replace → commit to **`main`**.

After ~1 minute, refresh the site; all devices get the new data.

### Option B — Edit JSON directly

1. Edit **`stats.json`** in the repo (GitHub pencil icon or locally). Keep valid JSON.
2. Commit and push to **`main`**.

The live site loads `stats.json` with `cache: no-cache`. For local `file://` opens, the page also tries **GitHub raw** or embedded fallback — see `script.js`.

**Local preview:** use `start-local-server.bat` and `http://localhost:8080`.
