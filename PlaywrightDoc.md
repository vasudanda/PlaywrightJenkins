# OrangeHRM Login Test Automation Suite – GitHub Repository Guide

## Overview
Playwright + Pytest automated test suite for OrangeHRM login flows. See [README.md](README.md) and [QUICK_START.md](QUICK_START.md) for general usage.

## Key Files
- Dependencies: [requirements.txt](requirements.txt)
- Pytest config: [pytest.ini](pytest.ini)
- Playwright config: [playwright.config.js](playwright.config.js)
- JS tooling (if any): [package.json](package.json)
- Architecture: [POM_ARCHITECTURE_GUIDE.md](POM_ARCHITECTURE_GUIDE.md)
- Test plan: [OrangeHRM_Login_Test_Plan.md](OrangeHRM_Login_Test_Plan.md)
- Framework overview: [VISUAL_FRAMEWORK_OVERVIEW.md](VISUAL_FRAMEWORK_OVERVIEW.md)
- Start: [START_HERE.md](START_HERE.md)

## Directory Structure (High-Level)
- pages/ Page Object Models.
- tests/ Test cases (Pytest).
- utilities/ Shared helpers.
- playwright-report/ HTML reports.
- test-results/ Raw artifacts.
- src/ Reusable core code.
- .github/ Repo workflows & docs.

## Installation
```bash
python -m venv .venv
source .venv/bin/activate  # Windows: .venv\Scripts\activate
pip install -r requirements.txt
```

## Running Tests
```bash
pytest -vv --html=playwright-report/report.html
```
Playwright browsers:
```bash
playwright install
```

## Allure Reporting
Generate and serve:
```bash
pytest --alluredir=./test-results/allure
allure serve ./test-results/allure
```

## Code Quality
Tools defined in [requirements.txt](requirements.txt):
```bash
black .
flake8 .
pylint src tests pages utilities
```

## Suggested GitHub Actions (CI)
Add a workflow at `.github/workflows/ci.yml` to run tests headless.

```yaml
name: CI
on:
  push:
    branches: [ main ]
  pull_request:
jobs:
  tests:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with:
          python-version: '3.11'
      - name: Install dependencies
        run: |
          python -m venv .venv
          source .venv/bin/activate
          pip install -r requirements.txt
          npx playwright install --with-deps
      - name: Run tests
        run: |
          source .venv/bin/activate
          pytest -vv --html=playwright-report/report.html
      - name: Upload HTML report
        uses: actions/upload-artifact@v4
        with:
          name: playwright-html-report
          path: playwright-report/
```

## Branching & PRs
1. Branch: feature/<short-description>
2. Run local quality + tests.
3. Open PR; attach test evidence (HTML/Allure).
4. Ensure reviewers for changes touching pages/ or utilities/.

## Issue Labels
- type:test
- type:infra
- bug
- enhancement
- docs

## Contribution Checklist
- Updated relevant doc (e.g. [POM_ARCHITECTURE_GUIDE.md](POM_ARCHITECTURE_GUIDE.md))
- Added/updated tests in [tests/](tests/)
- No lint errors
- Reports generated locally

## Security & Secrets
Use environment variables via python-dotenv (see .env guidance in docs). Never commit credentials.

## Next References
Consult:
- [TEST_AUTOMATION_README.md](TEST_AUTOMATION_README.md)
- [README_PYTHON_POM.md](README_PYTHON_POM.md)
- [EXTENSION_GUIDE.md](EXTENSION_GUIDE.md)
