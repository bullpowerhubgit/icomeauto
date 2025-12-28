# Copilot Instructions for this repo

> Last updated: 2025-12-28

## Current state
- The repository contains only the `.git` directory; no source files, docs, or config are present yet.
- Because there is no established tech stack or architecture, avoid inventing non-confirmed details.

## How to proceed safely
- Always confirm the desired stack, language, and target platform with the user before scaffolding anything.
- When creating initial scaffolding, propose a minimal plan first (folders, package manager, build tool, lint/test setup).
- Add a `README.md` describing the chosen stack, install/run/test commands, and any environment variables.
- Create a `.gitignore` appropriate to the selected stack.

## Scaffolding etiquette
- Keep the initial footprint small: only add what is required to demonstrate the requested functionality.
- Prefer well-supported defaults (e.g., pnpm/npm/yarn for JS, pip/uv for Python, cargo for Rust) unless the user specifies otherwise.
- If secrets or API keys are needed, add placeholders in a `.env.example` and **never** commit real secrets.

## Collaboration & hygiene
- Explain any architectural choices you introduce (folder layout, layering, dependency injection, etc.).
- Include a basic test when adding non-trivial code; document how to run it.
- Use deterministic versions (lockfiles) and note required tool versions (Node/Java/Python/etc.).

## When more code appears
- Once real code or docs exist, update this file with:
  - Major components and their responsibilities
  - Build/test/lint commands and entry points
  - Integration points (APIs, databases, queues) and how they are configured
  - Project-specific patterns (e.g., logging, error handling, DI, state management)

## Ask for clarification
- If any requirement is ambiguous, ask concise follow-up questions before committing changes.
