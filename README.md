# 📝 Blog Capstone

> A modern, elegant blogging platform built with Node.js and Express. Write, create, and manage your thoughts in style.

<div align="center">

![Node.js](https://img.shields.io/badge/Node.js-18+-green?style=flat-square&logo=node.js)
![Express](https://img.shields.io/badge/Express-5.2-black?style=flat-square&logo=express)
![EJS](https://img.shields.io/badge/Template-EJS-90c53f?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)

[Features](#features) • [Installation](#installation) • [Usage](#usage) • [Project Structure](#project-structure) • [Contributing](#contributing)

</div>

---

## ✨ Features

- **Create Posts** ✍️ Write beautiful blog posts with a clean, intuitive editor
- **View Feed** 📰 Browse all your posts in an elegant, card-based layout
- **Edit & Delete** 🔧 Full post management capabilities
- **Responsive Design** 📱 Works seamlessly on desktop, tablet, and mobile
- **Modern UI** 🎨 Hand-crafted CSS with smooth transitions and hover effects
- **Fast & Lightweight** ⚡ Built on Express for optimal performance

---

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/blog-capstone.git
   cd blog-capstone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or with nodemon for auto-reload
   npm run dev
   ```

4. **Open in your browser**
   ```
   http://localhost:3000
   ```

---

## 📚 Usage

### Create a New Post
1. Click **"Write New Post"** button on the homepage
2. Fill in your post title and content
3. Click **"Publish"** to share your post

### View Your Posts
- All posts appear on the homepage feed
- Browse through your blog entries instantly

### Manage Posts
- **Edit**: Update your posts anytime
- **Delete**: Remove posts you no longer want

---

## 📦 Project Structure

```
blog-capstone/
├── index.js                 # Main Express server
├── package.json            # Dependencies & scripts
├── public/
│   └── styles/
│       └── style.css       # Global styles & theme
├── views/
│   ├── index.ejs          # Homepage (blog feed)
│   ├── create.ejs         # Create post page
│   └── partials/
│       ├── header.ejs     # Navigation & head section
│       └── footer.ejs     # Footer component
└── README.md              # This file
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **Node.js** | Runtime environment |
| **Express.js** | Web framework |
| **EJS** | Templating engine |
| **Body-Parser** | Middleware for parsing request bodies |
| **CSS3** | Styling & animations |

---

## 📋 Available Scripts

```bash
# Start the server (production)
npm start

# Start with auto-reload (development)
npm run dev

# Install dependencies
npm install
```

---

## 🎨 Styling

The project features a custom design system with:
- **Color Palette**: Carefully selected blues, grays, and accent colors
- **Typography**: Clean, readable sans-serif fonts
- **Components**: Buttons, cards, forms with smooth interactions
- **Animations**: Subtle transitions for a polished feel

---

## 💡 Future Enhancements

- [ ] User authentication & profiles
- [ ] Search & filter functionality
- [ ] Comment system
- [ ] Social sharing features
- [ ] Dark mode toggle
- [ ] Rich text editor (Markdown support)
- [ ] Post categories/tags
- [ ] Reading time estimates

---

## 🤝 Contributing

We welcome contributions! Here's how:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 👨‍💻 Author

**Angela's Blog Capstone**

Created as a capstone project to showcase full-stack web development skills.

---

## 🙋‍♀️ Support

Have questions or found a bug? [Open an issue](https://github.com/yourusername/blog-capstone/issues) or reach out!

---

<div align="center">

**Made with ❤️ and ☕**

If you found this project helpful, please consider giving it a ⭐!

</div>
