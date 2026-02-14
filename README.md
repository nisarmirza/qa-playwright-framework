# 🚀 Playwright QA Automation Framework (UI + API + CI + Sharding)


QA Automation framework built with Playwright Test Made by Nisar Mirza

Designed to demonstrate:
- UI automation using Page Object Model (POM)
- API testing using Playwright request
- CI/CD integration (GitHub Actions)
- Parallel execution & test sharding
- Flake control strategy
- Allure + HTML reporting
- Test analytics generation
- Dockerized test execution

---

## 🏗 Architecture Overview

qa-playwright-framework/
tests/
ui/
api/
setup/
pages/
fixtures/
scripts/
.github/workflows/
playwright.config.ts


### Key Design Decisions

✔ Page Object Model for maintainability  
✔ storageState authentication for speed  
✔ Matrix-based sharding in CI  
✔ Per-test retry strategy (not global retries)  
✔ Failure artifacts: trace, video, screenshot  
✔ JSON analytics summary generation  

---

## 🧪 Test Coverage

### UI Tests
- Login validation
- Negative authentication cases
- Add-to-cart functionality
- Cart badge validation

### API Tests
- Basic availability checks
- Asset validation
- Contract-style checks

---

## 🔐 Authentication Strategy

Uses Playwright `storageState`:

- Dedicated setup project creates `storageState.json`
- All browser projects depend on setup
- Avoids re-login in every test
- Speeds up execution significantly

---

## ⚡ Parallelization & Sharding

CI runs tests using matrix sharding:

--shard=1/2
--shard=2/2


Benefits:
- Faster execution
- Scalable architecture
- Enterprise-ready test distribution

---

## 📊 Reporting

### HTML Report
npx playwright show-report


### Allure Report
npm run report:allure


CI uploads:
- Playwright HTML report (per shard)
- Allure results
- Test analytics JSON summary

---

## 📈 Test Analytics

Generates:

test-analytics-summary.json


Tracks:
- Total tests
- Passed
- Failed
- Flaky (retried + passed)
- Total execution time

Demonstrates reliability engineering awareness.

---

## 🐳 Run in Docker

Build:
docker build -t qa-playwright .


Run:
docker run --rm qa-playwright


Ensures consistent execution across environments.

---

## 💻 Run Locally

Install:
npm install
npx playwright install


Run all tests:
npm test


Run smoke only:
npm run test:smoke


Run sharded:
npx playwright test --shard=1/2


Generate analytics:
npm run test:analytics


---

## 🧠 Stability Strategy

Instead of global retries:

- Only known flaky suites use `test.describe.configure({ retries: 2 })`
- Root-cause analysis prioritized over masking instability
- Uses resilient locator strategy (data-test selectors)
- Explicit validation over fragile string matches

---

## 🔍 Why This Project Matters

This framework demonstrates:

- Advanced Playwright knowledge
- CI/CD implementation
- Parallel execution strategy
- Reporting & artifact management
- Flakiness control approach
- Test observability mindset

Designed to reflect real-world enterprise QA architecture.

---

## 🛠 Tech Stack

- Playwright Test
- TypeScript
- GitHub Actions
- Allure Reporter
- Docker
- Node.js

---

## 📌 Future Enhancements

- Test tagging strategy refinement
- Environment config management
- Contract testing with schema validation
- Performance smoke checks
- API mocking layer
- Coverage metrics dashboard

---

## 👨‍💻 Author Nisar Mirza

QA Automation Engineer focused on:
- System reliability
- Scalable test architecture
- CI optimization
- Flake reduction
- Automation strategy design