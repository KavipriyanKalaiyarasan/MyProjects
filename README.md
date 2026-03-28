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
