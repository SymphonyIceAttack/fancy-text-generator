# Fancy Text Generator ✨

Transform your text into beautiful Unicode styles with our free, fast, and user-friendly online tool. Perfect for social media, messaging, and creative projects.

![Fancy Text Generator](https://img.shields.io/badge/Fancy-Text--Generator-ff6b6b?style=for-the-badge&logo=sparkles&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge&logo=license&logoColor=white)

**[🌐 Live Demo](https://fancytextgenerator.art/)** • **[📖 Documentation](#features)** • **[🐛 Issues](https://github.com/SymphonyIceAttack/fancy-text-generator/issues)** • **[💡 Contributing](#contributing)**

## 🎨 Features

- **12+ Text Styles**: Bold, italic, script, monospace, circled, boxed, mathematical symbols, and more
- **🌍 Multi-Language Support**: Works with English and Chinese characters
- **📱 Social Media Ready**: Perfect for Instagram, Twitter, Facebook, Discord, WhatsApp
- **⚡ Instant Copy & Paste**: One-click copying with visual feedback
- **🎯 Universal Compatibility**: Works across all platforms and devices
- **🌙 Dark/Light Theme**: Automatic theme detection with manual toggle
- **📱 Responsive Design**: Optimized for mobile, tablet, and desktop
- **🚀 Fast Performance**: Built with Next.js 16 for optimal speed

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/SymphonyIceAttack/fancy-text-generator.git
cd fancy-text-generator
```

2. **Install dependencies**
```bash
pnpm install
# or
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env.local
```

Edit `.env.local` with your configuration:
```env
NEXT_PUBLIC_DIRECTUS_URL=your_directus_url
DIRECTUS_ACCESS_TOKEN=your_access_token
```

4. **Run the development server**
```bash
pnpm dev
# or
npm run dev
```

5. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Available Scripts

```bash
# Development server
pnpm dev

# Production build
pnpm build

# Start production server
pnpm start

# Code linting and formatting
pnpm run lint
pnpm run format

# Type checking
pnpm run type-check
```

## 📚 Project Structure

```
fancy-text-generator/
├── app/                     # Next.js App Router
│   ├── api/                # API routes
│   ├── posts/              # Blog posts pages
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/             # React components
│   ├── blog/              # Blog components
│   ├── ui/                # shadcn/ui components
│   ├── fancy-text-generator.tsx # Main text transformer
│   ├── faq.tsx            # FAQ section
│   └── theme-toggle.tsx   # Theme switcher
├── lib/                   # Utility libraries
│   ├── directus.ts        # Directus CMS client
│   └── utils.ts           # Utility functions
├── public/                # Static assets
└── .github/workflows/     # CI/CD configuration
```

## 🔧 Technology Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/) 5
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) 4
- **Components**: [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **CMS**: [Directus](https://directus.io/) for blog content
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)
- **Deployment**: [Vercel](https://vercel.com/)
- **Code Quality**: [Biome](https://biomejs.dev/) (linting & formatting)

## 🎯 Usage

### Text Transformation

1. **Enter Your Text**: Type or paste your text in the input field
2. **Choose Style**: Select from 12+ available Unicode text styles
3. **Copy Result**: Click the copy button to copy transformed text
4. **Use Everywhere**: Paste the styled text anywhere - social media, messaging apps, documents

### Available Text Styles

- **Bold Text** - Enhanced readability
- *Italic Text* - Emphasized elegance  
- Script Text - Beautiful handwriting style
- `Monospace Text` - Clean code-like appearance
- ⓈⒸℛℰℰ𝒟 Text - Mathematical notation
- 🅣🅗🅘🅒 Text - Bold outlined characters
- 🄌🅀🅈 Text - Mathematical double-struck
- ⒻⒶ𝒩𝒞𝒴 - Small capital letters
- 𝒯𝓔𝒳𝒯 - Mathematical script
- 𝔽𝔞𝔫𝔠𝔶 - Fraktur style
- ⌘⌘⌘ Text - Symbols and icons

## 🌐 API

### Directus CMS Integration

The project includes blog functionality powered by Directus CMS:

```typescript
// Fetch blog posts
const posts = await directus.request(
  readItems("posts", {
    fields: ["id", "title", "slug"],
    filter: { status: { _eq: "published" } }
  })
);
```

## 🎨 Customization

### Adding New Text Styles

1. Add character mappings to `charMaps` object in `components/fancy-text-generator.tsx`
2. Create transform function with Chinese character handling
3. Add to `textStyles` array
4. Test with various input types

### Theming

The project supports dark/light themes through CSS variables:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
}
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Workflow

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** your changes: `git commit -m 'Add amazing feature'`
4. **Push** to the branch: `git push origin feature/amazing-feature`
5. **Open** a Pull Request

### Code Style

- Use **Biome** for linting and formatting
- Follow **TypeScript** best practices
- Write **descriptive** commit messages
- Add **tests** for new features

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Unicode Consortium](https://unicode.org/) for Unicode standards
- [shadcn/ui](https://ui.shadcn.com/) for beautiful UI components
- [Directus](https://directus.io/) for the excellent headless CMS
- [Vercel](https://vercel.com/) for seamless deployment

## 📞 Support

- **Website**: [https://fancytextgenerator.art/](https://fancytextgenerator.art/)
- **GitHub Issues**: [Report bugs and requests](https://github.com/SymphonyIceAttack/fancy-text-generator/issues)
- **Email**: support@fancytextgenerator.art

## 🚀 Deploy

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/SymphonyIceAttack/fancy-text-generator)

### Other Platforms

The project can be deployed to any platform that supports Next.js:

- **Netlify**: Configure build command and output directory
- **Railway**: Connect your GitHub repository
- **AWS Amplify**: Import from GitHub
- **DigitalOcean**: Use App Platform

## 📈 Roadmap

- [ ] Add more Unicode text styles
- [ ] Implement user preferences
- [ ] Add text history/favorites
- [ ] Create mobile app versions
- [ ] Add batch text processing
- [ ] Support for custom fonts

---

<div align="center">

**Made with ❤️ by [SymphonyIceAttack](https://github.com/SymphonyIceAttack)**

[Website](https://fancytextgenerator.art/) • [GitHub](https://github.com/SymphonyIceAttack) • [Issues](https://github.com/SymphonyIceAttack/fancy-text-generator/issues)

</div>