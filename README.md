# 📝 Assignment 5: Test Management for Word Puzzle Game

## 🎯 Learning Objectives

* Understand the components of a test plan (objectives, scope, resources, schedule)
* Apply entry and exit criteria to a testing process
* Perform risk analysis to prioritize test cases
* Practice test monitoring and control techniques
* Implement risk-based testing strategies

---

## 🕹️ Project Overview: Word Puzzle Game

You'll be testing a JavaScript word puzzle game with these features:

* Word scrambling logic
* Hint system
* Scoring mechanism
* Responsive UI
* JSON word bank

### Key Components

* Core game logic (`<script>` tag in HTML)
* Word database (JSON format)
* User interface (HTML/CSS)

---

## 📋 Test Planning Task

* Collaborate in groups of 3 to identify and document bugs via GitHub Issues.

Create a `Test_Plan.md` file with the following sections:

### 1. Test Objectives

> What critical functionality must be verified?
> *Example*: "Ensure word scrambling algorithm never reveals original word"

### 2. Scope

> What's included/excluded from testing?
> *Example*:
>
> * In scope: Game logic, scoring system
> * Out of scope: Browser compatibility

### 3. Resources

* **Team roles**: 1 tester
* **Tools**: Browser DevTools, JS console
* **Environment**: Chrome browser

### 4. Schedule

| Phase          | Time Estimate |
| -------------- | ------------- |
| Test Planning  |               |
| Test Design    |               |
| Test Execution |               |
| Reporting      |               |

### 5. Entry/Exit Criteria

* **Entry**: Game is functional on Chrome
* **Exit**: All critical bugs fixed, 90% test cases passed

---

## ⚠️ Risk Analysis Task

Create a `Risk_Analysis.md` file with:

### Risk Assessment Table

| Feature        | Risk                        | Likelihood | Impact | Priority |
| -------------- | --------------------------- | ---------- | ------ | -------- |
| Scoring System | Incorrect point calculation | Medium     | High   | Critical |
| Word Bank      | Missing words cause errors  | Low        | Medium | Medium   |
| Hint System    | Hint reveals solution       | High       | Medium | High     |

### Risk Mitigation Strategies

> *Example*: For scoring risks: Implement boundary value testing

---

## 🧪 Test Design & Execution

### 1. Risk-Based Test Cases

Design 5 test cases prioritizing high-risk areas. Use this format:

```
**ID**: TC-01  
**Feature**: Scoring System  
**Test**: Verify score deduction when using hint  
**Steps**:  
1. Solve puzzle without hint  
2. Note score  
3. Solve identical puzzle with hint  

**Expected**: Hint reduces score by 2 points  
**Risk Priority**: High  
```

### 2. Exploratory Testing

While executing your test cases:

* Monitor console for errors
* Control test execution with DevTools

### 3. Defect Reporting

Log **2 bugs** in GitHub Issues using this format:

```
**Title**: Score not reset after new game  
**Steps**:  
1. Solve puzzle (score = 10)  
2. Click "New Puzzle"  
3. Solve next puzzle  

**Expected**: Score starts from 0  
**Actual**: Score accumulates continuously  
**Severity**: Medium  
**Risk Impact**: High (affects game fairness)  
```

---

## 📤 Submission Instructions

Push the following to your GitHub repository:

### 📜 Submission Checklist

- ✅ Complete **test plan**
- ✅ **Risk analysis** with mitigation strategies
- ✅ **5 risk-based test cases**
- ✅ Links to **2 GitHub issues**
- ✅ **Reflection** on the process

### 📁 File to Submit

- `Test_Report.md` (Include all the above content in this single markdown file)

### ## Reflection

* How did risk analysis change your test approach?
* What trade-offs existed between test coverage and time?

---

## 🧠 Concept Reinforcement

### Risk-Based Testing Focus

> Prioritize tests based on:
> **Risk exposure = Probability × Impact**

### Test Monitoring Metrics

* Defect density (bugs/feature)
* Test case pass percentage
* Risk coverage ratio

### Entry/Exit Criteria Examples

| Phase          | Entry Criteria      | Exit Criteria           |
| -------------- | ------------------- | ----------------------- |
| Unit Testing   | Code compiled       | 100% statements covered |
| System Testing | Features integrated | <5% critical defects    |

---

