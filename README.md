# DevPortfolio – React Developer Portfolio Template

A modern and responsive developer portfolio template built with **React, Vite, and Tailwind CSS**.
Perfect for developers who want a clean and professional personal website to showcase projects and skills.

This template is designed to be **easy to customize**, lightweight, and developer-friendly.

---

# Live Demo

Demo: https://dev-portfolio-template-psi.vercel.app/

---

# Features

* Built with **React + Vite**
* Styled with **Tailwind CSS**
* **Fully responsive** (mobile, tablet, desktop)
* **Dark / Light mode**
* Smooth and clean UI
* Animated components using **Framer Motion**
* Projects section with images
* Skills section
* Contact form UI
* Social media links
* Modern developer-focused layout

---

# Tech Stack

* React
* Vite
* Tailwind CSS
* Framer Motion
* React Icons

---

# Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/devportfolio-template.git
```

Navigate to the project folder:

```bash
cd devportfolio-template
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open your browser and go to:

```
http://localhost:5173
```

---

# Project Structure

```
src
 ├─ components
 │   ├─ Navbar.jsx
 │   ├─ Footer.jsx
 │   └─ ThemeToggle.jsx
 │
 ├─ sections
 │   ├─ Hero.jsx
 │   ├─ About.jsx
 │   ├─ Projects.jsx
 │   ├─ Skills.jsx
 │   └─ Contact.jsx
 │
 ├─ App.jsx
 └─ main.jsx

public
 ├─ projects
 │   ├─ ecommerce.png
 │   ├─ task-manager.png
 │   └─ crypto-dashboard.png
 └─ cv.pdf
```

---

# Customization

## Change Hero Information

Open:

```
src/sections/Hero.jsx
```

Edit the following:

* Name
* Title
* Description
* Social links
* CV file

Example:

```
John Developer
Full Stack Developer specialized in modern web applications
```

---

# Adding Your Projects

Open:

```
src/App.jsx
```

Find the `projects` array.

Example:

```
const projects = [
  {
    title: "Ecommerce Platform",
    description: "Full stack ecommerce built with React and Spring Boot.",
    tech: ["React", "Spring Boot", "MySQL"],
    image: "/projects/ecommerce.png",
    github: "#",
    demo: "#"
  }
]
```

You can add more projects by adding more objects to the array.

---

# Project Images

Add your images inside:

```
public/projects/
```

Example:

```
public/projects/myproject.png
```

Then reference them in the project object:

```
image: "/projects/myproject.png"
```

---

# Updating Skills

Open:

```
src/sections/Skills.jsx
```

Edit the technologies listed to match your own stack.

Example:

```
React
Java
Spring Boot
Tailwind
Docker
AWS
```

---

# Contact Form

The contact form is provided **as UI only**.

To make it functional you can integrate a service such as:

* EmailJS
* Formspree
* Your own backend API

Example using EmailJS:

```
npm install emailjs-com
```

Then connect the form in `Contact.jsx`.

---

# Dark Mode

This template includes **Dark / Light mode support** using Tailwind CSS.

The theme can be toggled from the navigation bar.

---

# Deployment

You can deploy this template easily using:

* Vercel
* Netlify
* GitHub Pages

Example using Vercel:

```
npm install -g vercel
vercel
```

Or simply connect your GitHub repository to **Vercel dashboard**.

---

# License

This template is licensed for **personal and commercial use**.

You are allowed to:

* Use it for personal portfolios
* Use it for client projects
* Modify it

You are **not allowed to resell or redistribute the template as your own product**.

---

# Support

If you have any questions or issues, feel free to contact me.

Email: [your-email@example.com](mailto:your-email@example.com)

---

# Credits

Built with:

* React
* Tailwind CSS
* Framer Motion
* React Icons

---

# Author

Created by **Juan Nicolas Fiakosky – Full Stack Developer**
GitHub: https://github.com/Juan-Fiakosky