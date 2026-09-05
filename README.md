# 🚀 Developer Bio Page

A pure HTML5 and CSS3 personal bio and portfolio page built to demonstrate semantic markup and responsive design.[cite: 1, 2]

## Badges

## 📖 Project Overview

This project is a personal developer biography page for Jishnu Bhabak, an aspiring web developer and computer science student from India.[cite: 1] It serves as a practical assignment to demonstrate proficiency in front-end fundamentals, specifically semantic HTML5 accessibility and document structure.[cite: 1] The objective is to provide a clean, accessible, and responsive personal portfolio to showcase qualifications, technical skills, and projects.[cite: 1]

## 🔗 Demo

Live Demo: [LIVE_DEMO_URL]

## ✨ Features

* **Semantic Structure**: Built entirely with pure HTML5 semantic tags for optimal document structure.[cite: 1]
* **Technical Skills Dashboard**: Utilizes native `<meter>` tags to display technical proficiencies visually.[cite: 1]
* **Learning Progress Tracker**: Incorporates a native `<progress>` element to visualize learning milestones.[cite: 1]
* **Responsive UI**: Fully responsive layout adapting to mobile, tablet, and desktop screens.[cite: 2]
* **Contact Form**: Integrated functional contact form pointing to a Formspree endpoint.[cite: 1]
* **Custom Theming**: Uses CSS variables for consistent color palettes and easy theme management.[cite: 2]

## 📸 Project Preview

*(Please add project screenshots here)*

## 💻 Tech Stack

| Technology | Purpose |
| --- | --- |
| HTML5 | Semantic structure, accessibility, and content organization[cite: 1] |
| CSS3 | Styling, responsive layouts, and custom design variables[cite: 2] |

## 📂 Project Structure

```text
DEVELOPER-BIO/
│
├── .vscode/
│   └── settings.json
├── assets/
│   ├── css/
│   │   └── style.css
│   └── images/
│       └── Profile.jpg
└── index.html

```

## 🛠️ Installation

1. Clone the repository:
```bash
git clone [REPOSITORY_URL]

```


2. Navigate to the project directory:
```bash
cd [PROJECT_FOLDER]

```



*No external dependencies or package installations are required.*

## 🚀 Usage

Since this is a static website, you can run it directly in your browser:

1. Open the project folder on your local machine.
2. Double-click on `index.html` to open it in your default web browser.[cite: 1]

## ⚙️ Configuration

The contact form uses Formspree for handling form submissions.[cite: 1] To configure it for your own use:

1. Open `index.html`.[cite: 1]
2. Locate the `<form>` tag in the Contact section.[cite: 1]
3. Replace the `action` attribute `[https://formspree.io/f/your_endpoint_here](https://formspree.io/f/your_endpoint_here)` with your actual Formspree endpoint URL.[cite: 1]

## 🧠 Key Concepts / Learning Outcomes

* **Semantic HTML**: Proper utilization of structural tags like `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<figure>`, `<meter>`, and `<progress>`.[cite: 1]
* **CSS Architecture**: Implementation of CSS Variables (Custom Properties) to create a scalable, easily modifiable theme configuration.[cite: 2]
* **Responsive Layouts**: Application of CSS Grid and Flexbox for fluid, mobile-first design without relying on heavy frameworks.[cite: 2]

## 📱 Responsive Design

This project is fully responsive and supports:

* Mobile
* Tablet
* Desktop

Responsive techniques utilized:

* **Flexbox**: Used for the navigation bar, profile figure alignment, and form actions.[cite: 2]
* **CSS Grid**: Implemented in the "Personal Information" section (`.info-grid`) with `auto-fit` and `minmax` to automatically wrap and fit content columns.[cite: 2]
* **Media Queries**: Used to adjust flex directions, remove complex paddings, and center text for screens under `600px` wide.[cite: 2]
* **Fluid Layouts**: The main container utilizes percentage-based widths (`92%`) constrained by a `max-width` to prevent content from touching screen edges on smaller devices.[cite: 2]

## ♿ Accessibility

* **Semantic Elements**: Ensures screen readers can easily interpret the page hierarchy.[cite: 1]
* **ARIA Labels**: Utilizes `aria-label` and `aria-labelledby` attributes on navigations and sections for improved screen-reader context.[cite: 1]
* **Alt Text**: Descriptive text is provided for the profile image.[cite: 1]
* **Color Contrast**: The color palette applies high-contrast combinations (e.g., `#343a40` dark text on `#ffffff` white backgrounds) to ensure readability.[cite: 2]

## 🌐 Browser Compatibility

* Google Chrome
* Mozilla Firefox
* Microsoft Edge
* Safari

## ⚡ Performance

* **Zero Dependencies**: Relies completely on vanilla HTML and CSS, minimizing browser processing and load times.[cite: 1, 2]
* **System Fonts**: Uses standard OS fonts (`'Segoe UI', Roboto, Helvetica, Arial, sans-serif`) to eliminate the latency of external font loading.[cite: 2]
* **Image Fallbacks**: Implements a lightweight `onerror` attribute to gracefully load a UI-Avatars placeholder if the local profile image fails.[cite: 1]

## 🧪 Testing

No automated testing framework is currently implemented for this static HTML/CSS project.

## 🐛 Known Issues

No known issues at this time.

## 🔮 Future Improvements

* JavaScript functionality for dynamic UI elements
* Dark mode theme toggle
* Additional sub-pages for detailed portfolio projects

## 🤝 Contributing

1. Fork the repository
2. Clone your fork (`git clone [YOUR_FORK_URL]`)
3. Create a feature branch (`git checkout -b feature/your-feature`)
4. Commit your changes (`git commit -m "feat: add your feature"`)
5. Push to the branch (`git push origin feature/your-feature`)
6. Open a Pull Request

## 📝 Commit Convention

This project prefers conventional commit prefixes:

* `feat:` — New feature
* `fix:` — Bug fix
* `docs:` — Documentation
* `style:` — Styling
* `refactor:` — Code refactoring
* `chore:` — Maintenance

## 📄 License

This project is licensed under the [LICENSE] License.

## 👤 Author

**Jishnu Bhabak**[cite: 1]

* GitHub: [GITHUB_USERNAME]
* LinkedIn: [LINKEDIN_URL]
* Portfolio: [PORTFOLIO_URL]

## 🙏 Acknowledgements

* [UI Avatars](https://www.google.com/search?q=https://ui-avatars.com/) for dynamic placeholder image generation.[cite: 1]
* [Formspree](https://www.google.com/search?q=https://formspree.io/) for providing backend-free form endpoint handling.[cite: 1]

## 💬 Contact


---

*If you found this project useful, consider giving it a ⭐ on GitHub.*