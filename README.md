# Portfolio Website

A modern, responsive portfolio website built with HTML5, SCSS, and TypeScript. This project showcases professional experience, skills, and projects in an engaging and accessible way.

## Features

- Responsive design that works on all devices
- Dark mode toggle
- Smooth scrolling navigation
- Dynamic project cards
- Accessible design following WCAG guidelines
- Modern animations and transitions
- TypeScript for type-safe JavaScript
- SCSS with variables and mixins for maintainable styling

## Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)

## Setup

1. Clone the repository:

```bash
git clone <your-repo-url>
cd portfolio-website
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

The site will be available at `http://localhost:1234`

## Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
├── src/
│   ├── index.html          # Main HTML file
│   ├── styles/
│   │   └── main.scss       # Main SCSS file with variables and mixins
│   └── scripts/
│       └── main.ts         # TypeScript code for interactivity
├── package.json
├── tsconfig.json
└── README.md
```

## Customization

1. Update the content in `index.html` with your personal information
2. Modify the color scheme and typography in `src/styles/main.scss`
3. Add your projects to the `projects` array in `src/scripts/main.ts`

## Accessibility Features

- Semantic HTML structure
- ARIA labels for interactive elements
- High contrast color scheme
- Keyboard navigation support
- Screen reader friendly
- Responsive design for all devices

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT
