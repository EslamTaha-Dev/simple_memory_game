# 🧠 Memory Match Game

A simple, clean Memory Card matching game built to practice core TypeScript concepts, DOM manipulation, and event-driven UI logic — no JS frameworks or libraries for the game logic itself, just TypeScript + Vite, styled with Bootstrap.

🔗 **Live Demo:** [eslamtaha-dev.github.io/simple_memory_game](https://eslamtaha-dev.github.io/simple_memory_game/)

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=flat&logo=bootstrap&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)

---

## 🎮 About the Game

Flip two cards, find the matching pair, and clear the board. Classic memory-game mechanics, rebuilt from scratch to strengthen TypeScript and vanilla DOM fundamentals.

## ✨ Features

- Flip-and-match card gameplay with a responsive CSS Grid board
- Race-condition-safe card flipping using an `isLocked` guard, so rapid clicks can't break game state
- Type-safe DOM handling throughout (no `any` shortcuts)
- Built and bundled with Vite for a fast dev/build workflow
- Styled with Bootstrap 5

## 🛠️ Tech Stack

| Category | Tools |
|---|---|
| Language | TypeScript |
| Build Tool | Vite |
| Styling | Bootstrap 5, CSS3 (Grid) |
| Markup | HTML5 |

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/EslamTaha-Dev/simple_memory_game.git

# Move into the project
cd simple_memory_game

# Install dependencies
npm install

# Run the dev server
npm run dev
```

## 📚 What I Practiced

This project was built while working through TypeScript fundamentals, and became a hands-on playground for:

- Type annotations and optional chaining (`?.`)
- The difference between `null` and `undefined`, and when to use each
- Definite assignment assertions (`!`)
- Handling race conditions in event-driven UI with a simple lock flag
- Building a responsive layout with CSS Grid

## 🗺️ Roadmap — v2 (in progress)

This version was a learning exercise, and a bigger rebuild is on the way:

- [ ] Rewrite with React + TypeScript
- [ ] Add difficulty levels and a timer
- [ ] Score tracking / best-time leaderboard
- [ ] Animations with GSAP + sound effects
- [ ] Fully responsive, mobile-first redesign

## 👤 Author

**Eslam Taha**
Front-End Developer in progress · *"From Outside the Universe"*

- GitHub: [@EslamTaha-Dev](https://github.com/EslamTaha-Dev)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
