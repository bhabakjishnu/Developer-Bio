# Developer Bio

Semantic HTML5 and CSS3 personal bio page for **Jishnu Bhabak**, built as a front-end fundamentals assignment. No frameworks, no build step — markup, accessibility, and responsive layout only.

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![License](https://img.shields.io/badge/license-unlicensed-lightgrey)](#license)

**Live demo:** [bhabakjishnu.github.io/Developer-Bio](https://bhabakjishnu.github.io/Developer-Bio/)  
**Source:** [github.com/bhabakjishnu/Developer-Bio](https://github.com/bhabakjishnu/Developer-Bio)

---

## Overview

This site is a single-page developer biography: personal information, qualifications, a skills dashboard, project notes, and a contact form. The goal is to show production-minded HTML and CSS — semantic document structure, accessible form controls, and a mobile-first layout — without relying on JavaScript libraries or CSS frameworks.

## Features

- Semantic landmarks (`header`, `nav`, `main`, `section`, `article`-adjacent patterns, `figure`, `footer`, `address`)
- Native `<meter>` skill ratings and a `<progress>` learning tracker
- Responsive layout with Flexbox, CSS Grid, and a `600px` breakpoint
- Theme tokens via CSS custom properties in `assets/css/style.css`
- Contact form wired for [Formspree](https://formspree.io/) (endpoint must be replaced before use)
- Profile image fallback to [UI Avatars](https://ui-avatars.com/) if the local photo fails to load

## Tech stack

| Layer | Choice | Role |
| --- | --- | --- |
| Markup | HTML5 | Document structure, forms, tables, native widgets |
| Style | CSS3 | Layout, theming, sticky header, media queries |
| Forms | Formspree | Serverless POST handling for the contact form |
| Hosting | GitHub Pages (static) | Optional public demo |

## Project structure

```text
Developer-Bio/
├── assets/
│   ├── css/
│   │   └── style.css
│   └── images/
│       └── Profile.jpg
├── index.html
└── README.md
```

## Getting started

Clone and open the page locally. There are no npm packages or compilers.

```bash
git clone https://github.com/bhabakjishnu/Developer-Bio.git
cd Developer-Bio
```

Open `index.html` in a browser, or serve the folder so relative assets always resolve:

```bash
npx --yes serve .
```

Then visit the URL printed in the terminal (typically `http://localhost:3000`).

## Configuration

The contact form posts to a Formspree placeholder. Replace it with your form ID before collecting real submissions.

In `index.html`, find:

```html
<form action="https://formspree.io/f/your_endpoint_here" method="post" class="contact-form">
```

Swap `your_endpoint_here` for the ID from your Formspree dashboard.

Theme colors, type, and radii live in `:root` at the top of `assets/css/style.css`. Change those custom properties to restyle the page without hunting through selectors.

## Accessibility

- Landmarks and labelled sections (`aria-label`, `aria-labelledby`)
- Associated `<label>` elements on form fields, meters, and progress
- Table `caption`, `scope`, and `th` for the qualifications table
- Descriptive `alt` on the profile image
- High-contrast text (`#343a40` on `#ffffff`) and visible focus/hover on navigation and buttons

## Browser support

Chrome, Firefox, Edge, and Safari (current stable versions). Layout uses widely supported Flexbox, Grid, custom properties, `<meter>`, and `<progress>`.

## Roadmap

- Dark-mode toggle
- Dedicated project pages
- Light JavaScript for form feedback and UI polish

## Contributing

This is a personal portfolio assignment, but improvements are welcome.

1. Fork the repository
2. Create a branch: `git checkout -b feat/short-description`
3. Commit with a conventional prefix (`feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `chore:`)
4. Open a pull request against `main`

## License

No license file is published. The code is provided for learning and portfolio use. Ask before redistributing.

## Author

**Jishnu Bhabak** — aspiring web developer, India

- GitHub: [bhabakjishnu](https://github.com/bhabakjishnu)
- Email: [bhabakjishnu2004@gmail.com](mailto:bhabakjishnu2004@gmail.com)

---

If this project was useful, star the repository on GitHub.
