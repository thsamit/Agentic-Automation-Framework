# Skill: Requirements to Test Cases Generator

1. Read and parse requirements from `requirements/app_requirements.md` (or `requirements.md`).
2. Identify:
   - Application Under Test & Base URL
   - Target Modules & Functional Areas
   - Test Data & Credentials (valid, invalid, edge cases)
   - Positive & Negative Scenarios, Assertions, and Edge Conditions
3. Design structured test cases with unique identifiers (e.g. `TC-AUTH-001`, `TC-AUTH-002`, etc.).
4. For each test case, include:
   - ID, Title, Priority/Severity
   - Pre-conditions
   - Step-by-step Execution Actions
   - Test Data used
   - Expected Results & Assertions
5. Output the structured test suite to `docs/test-cases.md`.
