import fs from "fs";

const raw = JSON.parse(fs.readFileSync("playwright-json-report.json", "utf-8"));

let total = 0, passed = 0, failed = 0, flaky = 0, durationMs = 0;

function walk(suite) {
  for (const spec of suite.specs || []) {
    for (const test of spec.tests || []) {
      total++;
      const results = test.results || [];
      // flaky if multiple runs and final is passed
      const final = results[results.length - 1];
      const hadRetry = results.length > 1;
      durationMs += results.reduce((a, r) => a + (r.duration || 0), 0);

      if (final?.status === "passed") passed++;
      else failed++;

      if (hadRetry && final?.status === "passed") flaky++;
    }
  }
  for (const child of suite.suites || []) walk(child);
}

walk(raw.suites[0]);

const summary = {
  total,
  passed,
  failed,
  flaky,
  durationSeconds: Math.round(durationMs / 1000),
  timestamp: new Date().toISOString(),
};

fs.writeFileSync("test-analytics-summary.json", JSON.stringify(summary, null, 2));
console.log(summary);
