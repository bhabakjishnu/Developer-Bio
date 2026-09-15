# Developer Bio

A clean, accessible, single-page developer biography and portfolio built with pure semantic HTML5 and modern vanilla CSS3.

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Dependencies](https://img.shields.io/badge/Dependencies-0_Zero-success?style=flat-square)](https://github.com/bhabakjishnu/Developer-Bio)
[![Form Backend](https://img.shields.io/badge/Form_Backend-Formspree-FF5722?style=flat-square&logo=formspree&logoColor=white)](https://formspree.io/)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Developer--Bio-181717?style=flat-square&logo=github)](https://github.com/bhabakjishnu/Developer-Bio)

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Configuration and Customization](#configuration-and-customization)
- [Design and Architecture](#design-and-architecture)
- [Responsive Design](#responsive-design)
- [Accessibility](#accessibility)
- [Browser Support](#browser-support)
- [Learning Objectives](#learning-objectives)
- [Deployment and Live Demo](#deployment-and-live-demo)
- [Future Improvements](#future-improvements)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

---

## Overview

**Developer Bio** is a lightweight, responsive, single-page developer profile built for **Jishnu Bhabak**, a Computer Science student and aspiring web developer from India.

The project demonstrates foundational front-end craftsmanship without external JavaScript runtimes, CSS frameworks, or compilation toolchains. It solves the need for a lean, fast-loading, and easily customizable personal bio page while serving as a practical reference for semantic HTML5 structure, modern CSS layout techniques (Flexbox and Grid), and accessible web practices.

### Intended Audience

- **Recruiters and Peers:** To review the developer's background, core competencies, qualifications, and contact channels.
- **Front-End Learners:** To explore clean semantic document structures, native HTML5 interactive widgets, and pure CSS layout patterns.

---

## Features

- **Semantic HTML5 Landmarks:** Structured using `<header>`, `<nav>`, `<main>`, `<section>`, `<figure>`, `<figcaption>`, `<dl>`, `<form>`, `<address>`, and `<footer>` elements for meaningful document hierarchy.
- **Native Interactive Widgets:** 
  - Zero-JavaScript project accordion powered by native `<details>` and `<summary>` elements.
  - Interactive skill ratings rendered via native `<meter>` tags with defined minimum, maximum, and optimum thresholds.
  - Overall learning progress displayed using a native `<progress>` bar.
- **Modern CSS Layouts:** Combines CSS Grid (`repeat(auto-fit, minmax(200px, 1fr))`) for the personal information grid with Flexbox for sticky navigation, header identity, form controls, and footer alignment.
- **Sticky Navigation Bar:** Top navigation bar (`position: sticky`) with smooth anchor scrolling (`scroll-behavior: smooth`) and target compensation (`scroll-margin-top: 80px`) to prevent header overlap.
- **Centralized Design Tokens:** Complete visual theming managed via CSS Custom Properties (`:root`), decoupling styles from structure and allowing effortless theme changes.
- **Accessible Data Presentation:** Tabular data formatted with a descriptive `<caption>` alongside explicit column and row header scopes (`scope="col"`, `scope="row"`).
- **Serverless Form Ready:** Built-in contact form pre-configured for [Formspree](https://formspree.io/) submission, complete with HTML5 validation, `autocomplete` attributes, and a form reset control.
- **Resilient Asset Fallback:** Profile portrait includes an inline `onerror` fallback that automatically requests a dynamic avatar from [UI Avatars](https://ui-avatars.com/) if the local image fails to load.

---

## Tech Stack

- **HTML5:** Semantic document outline, native form controls, and data presentation widgets (`<meter>`, `<progress>`, `<details>`).
- **CSS3:** Custom properties (design tokens), Flexbox, CSS Grid, media queries, and transition effects.
- **Third-Party Services:**
  - [Formspree](https://formspree.io/) — Form endpoint handling (configurable).
  - [UI Avatars](https://ui-avatars.com/) — Remote fallback avatar generation.
- **Development Tools:**
  - Git & GitHub — Version control and repository hosting.
  - VS Code — Code editing with Live Server integration (port `5501`).

---

## Project Structure

```text
Developer-Bio/
├── .vscode/
│   └── settings.json        # Workspace settings (configured for Live Server port 5501)
├── assets/
│   ├── css/
│   │   └── style.css        # Centralized stylesheet (tokens, reset, layout, components, media queries)
│   └── images/
│       └── Profile.jpg      # Developer portrait image asset
├── index.html               # Main semantic HTML5 single-page application
└── README.md                # Project documentation
```

### File Breakdown

- **`index.html`**: Contains the full semantic document structure, including the sticky navigation, profile hero, personal info grid, qualifications table, skills dashboard, project drawers, contact form, learning tracker, and footer.
- **`assets/css/style.css`**: Defines all CSS variables, typography, layout grids, component styling, hover transitions, and responsive breakpoint rules.
- **`assets/images/Profile.jpg`**: Local image asset displayed in the profile section.
- **`.vscode/settings.json`**: Pre-configures the local Live Server extension port to `5501`.

---

## Getting Started

Because this project relies strictly on native browser technologies, no package manager, compiler, or build step is required.

### Prerequisites

- A modern web browser (such as Google Chrome, Mozilla Firefox, Microsoft Edge, or Safari).
- [Git](https://git-scm.com/) installed on your machine (optional, for cloning).

---

## Installation

Clone the repository to your local machine:

```bash
git clone https://github.com/bhabakjishnu/Developer-Bio.git
cd Developer-Bio
```

---

## Usage

You can run and preview the project using any of the following approaches:

### Method 1: Direct File Opening

Open `index.html` directly in your default browser:

- **Windows (PowerShell):**
  ```powershell
  Start-Process index.html
  ```
- **macOS:**
  ```bash
  open index.html
  ```
- **Linux:**
  ```bash
  xdg-open index.html
  ```

### Method 2: VS Code Live Server (Recommended)

1. Open the project directory in Visual Studio Code:
   ```bash
   code .
   ```
2. Install the **Live Server** extension by Ritwick Dey if not already installed.
3. Click **"Go Live"** in the bottom status bar.
4. The workspace configuration (`.vscode/settings.json`) automatically runs the local server at:
   ```text
   http://localhost:5501/index.html
   ```

### Method 3: Lightweight Command-Line Server

If you prefer running a command-line HTTP server:

- **Python 3:**
  ```bash
  python -m http.server 5501
  ```
- **Node.js (`npx`):**
  ```bash
  npx --yes serve .
  ```

Once started, open `http://localhost:5501` in your browser.

---

## Configuration and Customization

### 1. Activating the Contact Form

The contact form in `index.html` is ready for [Formspree](https://formspree.io/). To route messages to your own email:

1. Register a free account at [formspree.io](https://formspree.io/).
2. Create a new form and copy your unique endpoint ID (for example, `xpznjkgw`).
3. In [index.html](file:///c:/Users/jishn/Desktop/Developer-Bio/index.html), locate line 135:
   ```html
   <form action="https://formspree.io/f/your_endpoint_here" method="post" class="contact-form">
   ```
4. Replace `your_endpoint_here` with your Formspree endpoint ID:
   ```html
   <form action="https://formspree.io/f/xpznjkgw" method="post" class="contact-form">
   ```

### 2. Customizing Theme Tokens

Colors, fonts, and spacing are defined as CSS variables at the top of [assets/css/style.css](file:///c:/Users/jishn/Desktop/Developer-Bio/assets/css/style.css) in the `:root` pseudo-class:

```css
:root {
    --primary-dark: #2b2d42;   /* Main dark tone for header, titles, and footer */
    --primary-light: #8d99ae;  /* Muted slate for captions and secondary elements */
    --accent: #d90429;         /* Vibrant accent color for borders and active links */
    --bg-body: #e9ecef;        /* Page background */
    --bg-container: #ffffff;   /* Card / container surface */
    --bg-card: #f8f9fa;        /* Subtle card and alternating row tint */
    --text-main: #343a40;      /* Primary text color */
    --text-muted: #495057;     /* Secondary text color */
}
```

Updating any of these variables immediately propagates across the entire page.

### 3. Updating Profile Information and Image

- **Replace Avatar:** Replace `assets/images/Profile.jpg` with your own image file (keeping the same name), or update the `src` attribute in `index.html`.
- **Update Avatar Fallback:** In `index.html`, modify the `onerror` query parameter in the `<img>` tag to match your name:
  ```html
  <img src="assets/images/Profile.jpg" 
       alt="Portrait photo of Jishnu Bhabak" 
       onerror="this.src='https://ui-avatars.com/api/?name=Your+Name&size=150&background=2b2d42&color=fff'" 
       height="150" width="150" class="profile-img">
  ```
- **Update Details:** Modify personal data, competition ranks, and skill ratings inside the respective `<section>` elements in `index.html`.

---

## Design and Architecture

### Document Outline (DOM Hierarchy)

The document is organized strictly around semantic HTML landmarks to ensure clean document traversal for screen readers and search engines:

```mermaid
graph TD
    HTML[html lang='en'] --> HEAD[head: Metadata & Stylesheet]
    HTML --> BODY[body]

    BODY --> HEADER[header.bio-header: Sticky Navigation]
    HEADER --> BRAND[div.header-brand: 'JB.']
    HEADER --> NAV[nav.main-nav aria-label='Main Navigation']
    NAV --> LINKS[ul: Home | About | Qualifications | Projects | Contact]

    BODY --> CONTAINER[div.bio-container id='home']
    
    CONTAINER --> PHEADER[div.profile-header: Profile Banner]
    PHEADER --> TITLE[h1.header-title: Developer Bio]
    PHEADER --> FIGURE[figure.profile-figure: Image & Caption]

    CONTAINER --> MAIN[main.main-content: Primary Content]
    MAIN --> S_ABOUT[section#about: Personal Information]
    MAIN --> S_QUAL[section#qualifications: Qualifications Table]
    MAIN --> S_SKILLS[section#skills: Technical Skills Dashboard]
    MAIN --> S_PROJ[section#projects: Project Showcase]
    MAIN --> S_CONTACT[section#contact: Contact Form]
    MAIN --> S_TRACK[section.tracker-section: Learning Progress]

    CONTAINER --> FOOTER[footer.bio-footer: Closing Landmark]
    FOOTER --> ADDR[address.contact-info: Phone & Email]
    FOOTER --> COPY[p.copyright: Attribution]
```

### Design System Tokens

| Token | Value | Applied To |
| :--- | :--- | :--- |
| `--primary-dark` | `#2b2d42` | Sticky header, profile hero, table text, footer background |
| `--primary-light` | `#8d99ae` | Table header background, secondary buttons, subtle borders |
| `--accent` | `#d90429` | Brand logo, section title accent borders, primary buttons, hover states |
| `--bg-body` | `#e9ecef` | Body canvas background |
| `--bg-container` | `#ffffff` | Main content card container |
| `--bg-card` | `#f8f9fa` | Info grid card, contact form card, alternating table rows |
| `--text-main` | `#343a40` | Body paragraph text, labels, description terms |
| `--text-muted` | `#495057` | Secondary descriptions, definition descriptions |
| `--text-light` | `#edf2f4` | Text displayed over dark surfaces (header, footer) |
| `--font-stack` | `'Segoe UI', Roboto, Helvetica, Arial, sans-serif` | Global typography |

---

## Responsive Design

The layout adapts seamlessly across desktops, tablets, and mobile screens.

### Strategy

- **Fluid Grid Units:** The personal information cards use CSS Grid with `repeat(auto-fit, minmax(200px, 1fr))`, automatically adjusting column counts based on container width without requiring breakpoint triggers.
- **Relative Widths:** The primary `.bio-container` is constrained to `width: 92%` with a `max-width: 800px`, maintaining comfortable margins on smaller viewports.
- **Horizontal Scroll Protection:** The qualifications table is wrapped in `.table-responsive` with `overflow-x: auto`, preventing page-level horizontal overflow on narrow displays.

### Breakpoint (`max-width: 600px`)

When the viewport width drops to 600px or below, the following adaptations take effect:

1. **Header & Navigation:** The header layout switches from a horizontal row to a centered column; navigation links wrap gracefully.
2. **Profile & Content Spacing:** Padding inside `.profile-header` and `.main-content` adjusts from 30px/40px down to 20px for optimal screen real estate.
3. **Personal Information:** The info grid simplifies to a single-column stack (`1fr`).
4. **Skills Dashboard:** Skill items switch from side-by-side rows to stacked columns, allowing `<meter>` elements to take full container width (`100%`).
5. **Progress Tracker:** Progress bar and label stack vertically, expanding the `<progress>` element to `100%`.
6. **Footer Contacts:** Contact links in the `<address>` block stack vertically to improve touch target accessibility.

---

## Accessibility

The project incorporates established web accessibility practices:

- **Explicit Form Associations:** Every `<input>` and `<textarea>` is linked to an explicit `<label for="...">` attribute.
- **Autofill Support:** Inputs utilize standard `autocomplete` attributes (`name` and `email`) to assist user input.
- **Semantic Landmark Roles:** Key page regions use `<header>`, `<nav>`, `<main>`, `<section>`, and `<footer>` instead of unsemantic `<div>` containers.
- **Section Labelling:** Sections utilize `aria-labelledby` referencing their respective `<h2>` heading identifiers.
- **Navigation Label:** The `<nav>` element explicitly declares `aria-label="Main Navigation"`.
- **Accessible Tables:** The qualifications table features a descriptive `<caption>` along with `scope="col"` and `scope="row"` headers to assist screen reader table traversal.
- **Keyboard Navigation:** Native interactive elements (`<summary>`, `<button>`, `<a>`, `<input>`) are keyboard-focusable with visible focus rings.
- **Target Offset Handling:** In-page anchor jumps account for the sticky header height via `scroll-margin-top: 80px`, preventing targeted headings from being obscured.
- **Content Contrast:** High-contrast text pairings are maintained throughout the design (for example, dark slate `#343a40` on white, and light off-white `#edf2f4` on dark navy `#2b2d42`).

---

## Browser Support

Tested and supported on modern evergreen browsers:

- **Google Chrome**
- **Mozilla Firefox**
- **Microsoft Edge**
- **Apple Safari**
- **Opera**

*Requires support for CSS Custom Properties, CSS Grid, CSS Flexbox, and native HTML5 elements (`<meter>`, `<progress>`, `<details>`).*

---

## Learning Objectives

This project serves as an educational exercise in front-end web fundamentals, demonstrating:

1. **Semantic Document Outlining:** How to structure a web page logically using semantic landmarks rather than generic container elements.
2. **Native HTML5 Capabilities:** Utilizing built-in elements (`<details>`, `<summary>`, `<meter>`, `<progress>`) to achieve interactivity without JavaScript overhead.
3. **Pure CSS Layout Systems:** Implementing two-dimensional layouts with CSS Grid and one-dimensional layouts with Flexbox.
4. **Design Token Architecture:** Structuring reusable styling variables using `:root` custom properties for clean maintainability.
5. **Responsive Web Techniques:** Managing fluid layouts and mobile adaptations with targeted CSS media queries.
6. **Accessible Form Design:** Pairing input fields with explicit labels, validation constraints, and autocomplete hints.

---

## Deployment and Live Demo

The project is structured as a static website and can be deployed directly to GitHub Pages or any static hosting platform.

### Deploying to GitHub Pages

1. Navigate to your repository on GitHub.
2. Go to **Settings** > **Pages** (in the left sidebar).
3. Under **Branch**, select `main` (or `Temp` if working on a feature branch) and the `/ (root)` folder.
4. Click **Save**.
5. Once the GitHub Actions deployment completes, your site will be live at:
   ```text
   https://<username>.github.io/Developer-Bio/
   ```

*(Replace `<username>` with your GitHub username, e.g., `https://bhabakjishnu.github.io/Developer-Bio/` once enabled).*

---

## Future Improvements

- [ ] **Theme Mode Switcher:** Add a lightweight CSS-only or JavaScript toggle for dark and light theme modes.
- [ ] **Project Case Studies:** Expand the projects section with screenshots and dedicated links to live applications.
- [ ] **Resume Action:** Add a direct download button for an updated PDF resume.
- [ ] **Client-Side Form Feedback:** Provide immediate feedback on form submission state.

---

## Contributing

Contributions, issues, and suggestions are welcome!

1. Fork the repository.
2. Create your feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add descriptive commit message"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a Pull Request on GitHub.

---

## License

This project does not currently include a formal open-source license. All rights are retained by the author. If you plan to reuse portions of this project for personal portfolios or educational purposes, please credit the author.

---

## Author

**Jishnu Bhabak**  
Computer Science Student & Aspiring Web Developer  
Sat Simulia, India

- **GitHub:** [@bhabakjishnu](https://github.com/bhabakjishnu)
- **Email:** [bhabakjishnu2004@gmail.com](mailto:bhabakjishnu2004@gmail.com)
- **Phone:** [+91 6294 131 405](tel:+916294131405)
