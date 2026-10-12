# Sunil Kumar — Personal Portfolio

A modern, component-based personal portfolio for **Sunil Kumar**, a Python Developer & DevOps Engineer. Built with **Vite** and **Vanilla JavaScript**, and automatically deployed to **GitHub Pages** via **GitHub Actions**.

🌐 **Live site:** [sunil2409.github.io/sunil-kumar-portfolio](https://sunil2409.github.io/sunil-kumar-portfolio)

---

## ✨ Features

- ⚡ **Vite-powered** — lightning-fast dev server and optimized production builds
- 🧩 **Component-based architecture** — modular JS components for each section
- 🎨 **Animated UI** — floating cyber-particles canvas, mouse-reactive spotlight glow, live CLI background animation
- 📱 **Fully responsive** — mobile-first design with a hamburger nav
- 🚀 **Auto-deployed** — every push to `main` triggers a GitHub Actions build and deploy to GitHub Pages

---

## 🛠 Tech Stack

| Layer      | Technology                          |
|------------|-------------------------------------|
| Frontend   | Vanilla JavaScript (ES Modules)     |
| Styling    | Vanilla CSS                         |
| Fonts      | Space Grotesk · Sora · JetBrains Mono (Google Fonts) |
| Bundler    | Vite 7                              |
| CI/CD      | GitHub Actions → GitHub Pages       |

---

## 📁 Project Structure

```
.
├── .github/
│   └── workflows/
│       └── deploy.yml        # CI/CD — builds and deploys to GitHub Pages on push to main
├── public/
│   ├── Assets/               # Images (profile photo, project screenshots, etc.)
│   └── Font/                 # Local font files
├── src/
│   ├── components/
│   │   ├── App.js            # Root component — assembles all sections
│   │   ├── Hero.js           # Hero / landing section
│   │   ├── About.js          # About me section
│   │   ├── Skills.js         # Skills & tools section
│   │   ├── Experience.js     # Work experience timeline
│   │   ├── Projects.js       # Featured projects
│   │   ├── Journey.js        # Learning journey / milestones
│   │   ├── Credentials.js    # Certifications & credentials
│   │   ├── Contact.js        # Contact section
│   │   ├── Header.js         # Navigation header
│   │   └── utils.js          # Shared utility functions
│   ├── main.js               # Entry point — mounts app, canvas animations, CLI BG
│   └── styles.css            # Global styles & design tokens
├── index.html                # HTML shell
├── package.json
├── .gitignore
└── LICENSE
```

---

## 🚀 Running Locally

### Prerequisites
- Node.js `>= 20.19` (or `>= 22.12`)
- npm

### Steps

```bash
# 1. Clone the repo
git clone https://github.com/Sunil2409/sunil-kumar-portfolio.git
cd sunil-kumar-portfolio

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Other commands

| Command           | Description                        |
|-------------------|------------------------------------|
| `npm run dev`     | Start local development server     |
| `npm run build`   | Build production bundle to `dist/` |
| `npm run preview` | Preview the production build       |

---

## 🔄 CI/CD — GitHub Pages Deployment

Every push to `main` automatically:
1. Checks out the code on a GitHub Actions runner
2. Installs Node.js and dependencies
3. Runs `npm run build` to produce the `dist/` folder
4. Deploys `dist/` to the `gh-pages` branch using [`peaceiris/actions-gh-pages`](https://github.com/peaceiris/actions-gh-pages)

No secrets or manual configuration required — only the built-in `GITHUB_TOKEN` is used.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
