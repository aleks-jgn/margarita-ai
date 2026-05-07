# Margarita AI

**A sleek, modern AI chat interface built with Next.js, TypeScript, and Tailwind CSS, supporting multiple LLM models with configurable response parameters.**

[![Next.js](https://img.shields.io/badge/Next.js-16.2.5-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8)](https://tailwindcss.com/)
![License](https://img.shields.io/badge/license-AGPL--3.0-green)

---

## Overview

Margarita AI is a production-ready web application that allows users to interact with advanced large language models through a clean, adaptive interface. It provides:

- Choice between **DeepSeek V4 Pro** and **Qwen3.6 Flash** via a unified API proxy
- Adjustable **temperature**, **max tokens**, and **conversation style** presets
- **Dark/light theme** toggle with smooth transitions
- Session-based chat history (stored client-side, no registration required)
- Fully responsive design with animations and modern UI/UX

The project is actively maintained and continuously improved. It serves both as a practical tool and as a showcase of modern full-stack development practices.

---

## Features

- **Multi-model support** – switch between DeepSeek and Qwen models on the fly
- **Customizable responses** – control temperature (0–2), max tokens (up to 4096), and choose from six predefined conversation styles (`Standard`, `Creative`, `Business`, `Technical Expert`, `Friendly`, `Mentor`)
- **Responsive design** – works flawlessly on mobile, tablet, and desktop
- **Dark & light themes** – default dark mode with one‑click toggle; respects system preference only when manually switched
- **Client-side session** – messages persist within a single browser session without backend storage
- **Markdown rendering** – supports GitHub Flavored Markdown for rich, formatted responses
- **Privacy-focused** – no user accounts, no data collection; search engines are blocked by default (`noindex, nofollow`)

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| **Framework** | Next.js 16 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS v4 (utility-first with custom `globals.css`) |
| **Markdown** | `react-markdown` + `remark-gfm` |
| **AI Integration** | OpenAI-compatible SDK (`openai`) via routerai.ru proxy |
| **Theming** | `next-themes` (class strategy) |
| **Animations** | CSS `@keyframes` for slide-up/fade-in effects |
| **Tooling** | Turbopack, PostCSS |

---

## Development Highlights

- **Unified API abstraction** – models from different providers (DeepSeek, Qwen) are accessed through a single API route (`/api/chat`) using the OpenAI-compatible client. Provider routing and API keys are handled server-side for security.
- **Type‑safe configuration** – all model metadata, conversation styles, and message structures are typed with TypeScript interfaces, ensuring reliability and easy extensibility.
- **Tailwind v4 & next-themes** – custom `@variant` directive enables class-based dark mode without configuration files; animations and transitions are CSS‑only, avoiding runtime JavaScript overhead.
- **Client‑only history** – chat messages are stored in React state, providing instant responsiveness and eliminating the need for a database. The UI gracefully handles empty, loading, and error states.
- **SEO & privacy** – `robots` meta tag prevents indexing; no cookies, no tracking, no external analytics. Ideal for a personal assistant or demo.

---

## Roadmap

- [ ] Add more models (Gemini, Claude, etc.)
- [ ] Image generation support
- [ ] Local storage persistence for chat history across sessions
- [ ] Multi-language UI (i18n)

---

## License

AGPL-3.0 license © 2026 [aleks-jgn](https://github.com/aleks-jgn)

---

**Built with passion and attention to detail.**  
If you find this project useful, ⭐ star the repository!



















