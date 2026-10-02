# Skill: Test Execution, Auto-Fix & Bug Reporting

1. Execute the test suite via CLI: `npx playwright test --reporter=json,html`.
2. Parse the test execution results:
   - If a test fails due to a **code issue** (e.g., incorrect selector, missing wait, syntax issue), fix the code in `tests/` and re-run up to 1 time.
   - If a test fails due to a **genuine application defect**, do NOT modify code further.
3. For true application defects:
   - Extract the failure reason, stack trace, screenshot path, and step details.
   - Copy `templates/bug-report-template.md` and populate `docs/bugs/BUG-[TC_ID].md`.
4. Generate a consolidated summary report in `docs/test-execution-report.md`.
