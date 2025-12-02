# 🤖 AI AGENT DIRECTIVES FOR VIDSUMMIFY

<details>
<summary><strong>APEX AGENT PROTOCOL V1.2 (DECEMBER 2025)</strong></summary>

## 1. IDENTITY & PRIME DIRECTIVE
**Role:** You are operating as a Senior Principal Architect mandated to maintain and evolve `VidSummify-AI-Powered-Video-Summarizer-ReactNative-App`.
**Context:** This is a cross-platform mobile application utilizing a JS/TS backend API layer (Node/Express) to interface with Google Gemini for summary generation.
**Prime Directive:** Ensure the application maintains **Zero-Defect** integrity across its mobile (React Native/Expo) and API (NodeJS) layers. Prioritize performance, security (especially Supabase integration), and AI response coherence.
**Output Standard:** Execution-only. Update code/config based on detected needs or explicit instructions.

## 2. CONTEXT-AWARE APEX TECH STACKS (LATE 2025 STANDARDS)

*   **PRIMARY SCENARIO: MOBILE / WEB APPLICATION (TypeScript/JavaScript)**
    *   **Stack:** **TypeScript 5.x** (Strict Typing enforced via ESLint/Biome), **React Native (Expo SDK 51+ / Bare Workflow)** for maximum flexibility, **TailwindCSS** (via NativeWind/Tachyons for RN), **Node.js (v20+) / Express.js** for the API layer.
    *   **Architecture:** **Feature-Sliced Design (FSD)** applied rigidly to the React Native codebase to separate `App`, `Pages`, `Features`, `Entities`, `Shared`, and `Services`. The backend adheres to **Hexagonal Architecture** (Ports & Adapters) for API endpoints and external service integration.
    *   **AI Integration:** Deeply integrated with **Google Gemini API** (`gemini-2.5-pro` or latest stable variant). All prompt engineering must be versioned and stored in the `services/ai` module. Response fidelity is paramount.
    *   **State Management:** **Zustand** for global state; React Query/TanStack Query for server state synchronization (API/Supabase).
    *   **Data Persistence:** **Supabase** (PostgreSQL/Auth) used for user profiles, history, and preferences. All database interactions must be strictly via secure, authenticated routes defined in the Express API layer.

## 3. VERIFICATION & MAINTENANCE

*   **LINTING & FORMATTING:** **Biome** (Single-Pass Speed Toolchain) is mandatory for both TypeScript/JavaScript and configuration files. All commits must pass a pre-commit hook enforced by Husky.
*   **UNIT/INTEGRATION TESTING:** **Vitest** for rapid unit testing across RN and Node components. **Playwright** for cross-platform E2E flow validation (Web/PWA paths, if applicable, or mock device testing).
*   **CI/CD:** **GitHub Actions (`ci.yml`)** must execute Lint -> Test -> Build steps upon every PR/Push to `main`.

## 4. ARCHITECTURAL PRINCIPLES ENFORCED
1.  **SOLID:** Especially Dependency Inversion (D) when interfacing with Supabase/Gemini services.
2.  **DRY:** Abstract repetitive TTS generation logic and network request handling.
3.  **YAGNI:** Do not over-engineer features not currently requested. Keep the architecture clean for future iteration.

**VALIDATION COMMANDS:**
- Lint & Format Check: `npx biome check --apply"
- Unit Tests Run: `npm run test:unit` (RN) / `npm run test:api` (Node)
- Full CI Simulation: `npx changeset pre enter --type=patch` (Simulates pre-release validation)

</details>

---

# VidSummify

## AI-Powered Video Summarization & Cross-Platform Knowledge Capture

<p align="center">
  <a href="https://github.com/chirag127/VidSummify-AI-Powered-Video-Summarizer-ReactNative-App" title="Star on GitHub">
    <img src="https://img.shields.io/github/stars/chirag127/VidSummify-AI-Powered-Video-Summarizer-ReactNative-App?style=flat-square&logo=github" alt="GitHub Stars" />
  </a>
  <a href="https://github.com/chirag127/VidSummify-AI-Powered-Video-Summarizer-ReactNative-App/actions/workflows/ci.yml" title="Build Status">
    <img src="https://img.shields.io/github/actions/workflow/status/chirag127/VidSummify-AI-Powered-Video-Summarizer-ReactNative-App/ci.yml?style=flat-square" alt="Build Status" />
  </a>
  <a href="https://codecov.io/gh/chirag127/VidSummify-AI-Powered-Video-Summarizer-ReactNative-App" title="Code Coverage">
    <img src="https://img.shields.io/codecov/c/github/chirag127/VidSummify-AI-Powered-Video-Summarizer-ReactNative-App?style=flat-square" alt="Code Coverage" />
  </a>
  <a href="https://img.shields.io/badge/Language-JavaScript%20%7C%20TypeScript-F7DF1E?style=flat-square" alt="Language">
    <img src="https://img.shields.io/badge/Language-JavaScript%20%7C%20TypeScript-F7DF1E?style=flat-square" alt="Language" />
  </a>
  <a href="https://img.shields.io/badge/Frameworks-React%20Native%20%7C%20NodeJS-112446?style=flat-square" alt="Frameworks">
    <img src="https://img.shields.io/badge/Frameworks-React%20Native%20%7C%20NodeJS-112446?style=flat-square" alt="Frameworks" />
  </a>
  <a href="https://img.shields.io/badge/License-CC%20BY--NC%204.0-97ca00?style=flat-square" alt="License">
    <img src="https://img.shields.io/badge/License-CC%20BY--NC%204.0-97ca00?style=flat-square" alt="License" />
  </a>
</p>

> **VidSummify** transforms lengthy video content into actionable, condensed knowledge via Google Gemini. Capture key insights directly on your mobile device, synchronized securely via Supabase for persistent history and personalized Text-to-Speech playback.

## ✨ Features at a Glance

*   **AI-Powered Summarization:** Generate executive summaries, bullet points, or Q&A sessions from video transcripts using the Gemini API.
*   **Cross-Platform Deployment:** Unified codebase leveraging React Native and Expo for iOS, Android, and PWA compatibility.
*   **Secure Authentication:** User management, authentication, and history storage handled by Supabase.
*   **Audio Output:** Customizable Text-to-Speech (TTS) generation for hands-free consumption of summaries.
*   **History Management:** Persistent local and cloud-synced record of all processed videos and generated summaries.

## 🏗️ Architecture Overview

This project employs a decoupled service architecture separating the mobile client, the Node/Express API gateway, and external services (Gemini, Supabase).

mermaid
graph TD
    subgraph Client (React Native Mobile/PWA)
        A[UI/UX Layer - FSD Architecture]
        B[Local State/Caching - Zustand]
        A -- State/Sync --> B
    end

    subgraph API Gateway (NodeJS/Express)
        C[Controller/Routes]
        D[Service Layer - Hexagonal]
        E[Adapter: Supabase Client]
        F[Adapter: Gemini Client]
        D --> E
        D --> F
    end

    A -- HTTPS/Auth --> C
    B -- Local Data --> G[AsyncStorage]

    style C fill:#e0f7fa,stroke:#00bcd4
    style D fill:#fff3e0,stroke:#ff9800
    style F fill:#fce4ec,stroke:#e91e63
    style E fill:#e8f5e9,stroke:#4caf50


## 🚀 Development & Setup

This repository adheres to strict componentization (FSD) and high-speed tooling (Biome).

### Prerequisites
Ensure you have Node.js (v20+), `npm`/`yarn`/`pnpm`, and the Expo CLI installed.

bash
# 1. Clone the repository
git clone https://github.com/chirag127/VidSummify-AI-Powered-Video-Summarizer-ReactNative-App.git
cd VidSummify-AI-Powered-Video-Summarizer-ReactNative-App

# 2. Install Dependencies (Using npm)
npm install

# 3. Setup Environment Variables (Supabase & Gemini)
# Create a .env.development file in the root and api/ directory
# Requires SUPABASE_URL, SUPABASE_ANON_KEY, GEMINI_API_KEY

# 4. Start Development Servers
# Start React Native Metro Bundler
npm run start:rn

# Start API Gateway
npm run start:api


### Scripts Table

| Script (Client) | Description | Execution Command |
| :--- | :--- | :--- |
| `start:rn` | Starts the Metro bundler for RN development. | `npm run start:rn` |
| `test:unit` | Runs Vitest suite for client components. | `npm run test:unit` |
| `lint:fix` | Applies formatting and linting fixes via Biome. | `npx biome check --apply` |
| `build:apk` | Builds the Android production APK. | `npx expo run:android --variant production` |

| Script (API) | Description | Execution Command |
| :--- | :--- | :--- |
| `start:api` | Starts the Express server. | `npm run start:api` |
| `test:api` | Runs Pytest/Jest suite for Node backend. | `npm run test:api` |

## 🛡️ Security & Compliance

*   **Authentication:** All interaction with user history requires a valid JWT, validated by the Express API against Supabase RLS policies.
*   **Input Sanitization:** All inputs destined for the Gemini API must be rigorously sanitized to prevent prompt injection attacks.
*   **License:** This project is governed by the **CC BY-NC 4.0 License** (Attribution-NonCommercial).

## 🤝 Contributing

We welcome contributions that enhance feature robustness or performance. Please review our guidelines.

*   All pull requests must pass mandatory CI checks.
*   Follow the **Feature-Sliced Design (FSD)** principles for all new features in the React Native side.
*   Ensure comprehensive unit tests accompany all new or modified business logic.

[CONTRIBUTING.md](.github/CONTRIBUTING.md)

---

*Authored and Maintained by [chirag127](https://github.com/chirag127).* 

[🏠 Back to Top](#vidsummify)
