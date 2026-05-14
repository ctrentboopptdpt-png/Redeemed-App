# Deploying to Netlify from GitHub

Use this folder as the GitHub repository root:

```text
C:\Users\ctren\Downloads\Coaching App\redeemed-in-chains-study-app
```

Do not upload the parent `Coaching App` folder. It contains unrelated files and local manuscript/OCR working files.

## Netlify Settings

When importing the GitHub repository into Netlify:

- Framework preset: Other
- Build command: leave blank
- Publish directory: `.`
- Install command: leave blank

The app is static and does not require a build step.

## Files Expected in the Repo

- `index.html`
- `styles.css`
- `app.js`
- `README.md`
- `DEPLOYMENT.md`
- `netlify.toml`
- `.gitignore`
- `assets/redeemed-cover.png`
