# Agentic QA Automation Framework (Playwright + TypeScript + Antigravity)

This repository contains an autonomous, agent-driven QA automation framework built with **Playwright**, **TypeScript**, and **Antigravity**. It automates the entire software testing lifecycle—from requirement analysis and test case creation to Page Object Model (POM) code generation, test execution, auto-healing, and bug reporting.

---

## How to Run the Autonomous Workflow

1. **Clone the repository:**

   ```bash
   git clone <YOUR_REPOSITORY_URL>
   cd <PROJECT_FOLDER>
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure Antigravity Execution Policy:**
   - Open VS Code Settings (`Ctrl + ,`).
   - Go to **Antigravity Settings** and set **Security Preset** to **Turbo Mode** (or enable **Auto-Approve** for terminal commands and file edits).

4. **Trigger the Autonomous Agent Pipeline:**
   - Open the **Antigravity Chat** panel in VS Code.
   - Run the following prompt:

   > "Read `requirements/app_requirements.md` and execute the full autonomous QA workflow defined in `.agent/rules/autonomous-qa.md`."

---

## What Happens Automatically?

When triggered, the Antigravity agent executes the pipeline hands-free without requiring manual intervention:

1. **Requirement Analysis & Scenario Design:** Parses `requirements/app_requirements.md` and outputs reviewed test cases in `docs/test-cases.md`.
2. **POM & Spec Generation:** Generates reusable Page Object Model classes under `tests/pages/` (extending `BasePage`) and corresponding test scripts under `tests/specs/`.
3. **Autonomous Execution & Auto-Healing:** Runs `npx playwright test` via CLI. If code compilation or locator issues arise, the agent auto-fixes the code and retries execution.
4. **Bug Reporting & Status Summary:** If functional defects are encountered, the agent logs structured Markdown bug reports under `docs/bugs/` using `templates/bug-report-template.md` and produces a final summary in `docs/test-execution-report.md`.
