# Fully Autonomous End-to-End QA Workflow

When triggered, execute the entire pipeline from end to end without stopping for manual approval or user input.

Execution Order:

1. Parse `requirements/app_requirements.md` and execute skill `requirement-to-cases`.
2. Execute skill `pom-code-builder` to write Page Objects and test specs.
3. Execute skill `runner-bug-reporter` to run tests, handle self-healing fixes, produce bug reports in `docs/bugs/`, and update execution status.
4. Display a final summary in chat with links to `docs/test-execution-report.md` and any logged bug reports.
