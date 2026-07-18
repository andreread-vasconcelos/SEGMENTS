# SEGMENTS — Complete Website Package

A static, dependency-free website containing 56 architectural investigations.

## Preview locally

Open `index.html` in a modern browser. For the most reliable preview, run a local server from this folder:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish with GitHub Pages

1. Create a new GitHub repository.
2. Upload everything inside this folder to the repository root.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)` folder, then save.

## Main files

- `index.html` — structure and written content
- `styles.css` — visual design and responsive behavior
- `script.js` — filters, full-screen viewer, keyboard navigation, Leisure overlay
- `works.js` — all 56 investigation records
- `assets/images/` — archive images and full-screen Leisure image

## Editing projects

Edit `works.js` to change titles, categories, descriptions, poems, or image paths.
