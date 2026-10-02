# Skill: DRY Playwright POM Code Builder & Reviewer

1. Inspect `docs/test-cases.md`.
2. Create or update Page Object Models in `tests/pages/`:
   - Inherit all Page Objects from `tests/utils/basePage.ts`.
   - Do NOT duplicate standard click/fill/wait logic.
   - Use web-first, resilient locators (`getByRole`, `getByTestId`, `getByLabel`).
3. Generate test spec files in `tests/specs/` using clean, readable TypeScript `test()` blocks.
4. Self-review the generated code: verify strict TypeScript typing, proper `await` keywords, and clean separation between tests and page abstractions.
