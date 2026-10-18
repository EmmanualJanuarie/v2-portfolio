"use strict";

const navigationButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#primary-nav");

if (navigationButton && navigation) {
  const closeNavigation = () => {
    navigationButton.setAttribute("aria-expanded", "false");
    navigationButton.setAttribute("aria-label", "Open navigation");
    navigation.classList.remove("is-open");
  };

  navigationButton.addEventListener("click", () => {
    const isOpen = navigationButton.getAttribute("aria-expanded") === "true";
    navigationButton.setAttribute("aria-expanded", String(!isOpen));
    navigationButton.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
    navigation.classList.toggle("is-open", !isOpen);
  });

  navigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeNavigation();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeNavigation();
  });
}

const currentYear = document.querySelector("#current-year");
if (currentYear) currentYear.textContent = String(new Date().getFullYear());

function makeTextElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}

function isSafeRepositoryUrl(value) {
  try {
    return new URL(value).protocol === "https:";
  } catch {
    return false;
  }
}

function createLabEntry(lab, index) {
  const entry = makeTextElement("article", "lab-entry");
  entry.append(makeTextElement("span", "lab-number", String(index + 1).padStart(2, "0")));

  const content = makeTextElement("div", "lab-entry-content");
  const category = makeTextElement("p", "lab-category", lab.category);
  const title = makeTextElement("h3", "lab-title", lab.title);
  const summary = makeTextElement("p", "lab-summary", lab.summary);
  const status = makeTextElement("p", "lab-status", "LAB REPORT TEMPLATE · NOT YET COMPLETED");
  const actions = makeTextElement("div", "lab-actions");

  if (typeof lab.repository === "string" && isSafeRepositoryUrl(lab.repository)) {
    const repository = makeTextElement("a", "button button-outline lab-button", "GitHub Repo ↗");
    repository.href = lab.repository;
    repository.target = "_blank";
    repository.rel = "noopener noreferrer";
    actions.append(repository);
  } else {
    const repository = makeTextElement("button", "button button-outline lab-button lab-button-disabled", "GitHub Repo · not linked");
    repository.type = "button";
    repository.disabled = true;
    repository.title = "Add a real GitHub repository URL to this lab before enabling this link";
    actions.append(repository);
  }

  const report = makeTextElement("a", "button button-primary lab-button", "Full Report →");
  report.href = `lab-report.html?lab=${encodeURIComponent(lab.id)}`;
  actions.append(report);
  content.append(category, title, summary, status, actions);
  entry.append(content);
  return entry;
}

const labList = document.querySelector("#lab-list");
if (labList && Array.isArray(window.SOC_LABS)) {
  window.SOC_LABS.forEach((lab, index) => labList.append(createLabEntry(lab, index)));
}
