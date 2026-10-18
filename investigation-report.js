"use strict";

const reportGroups = [
  { title: "Scope and source", fields: ["Investigation objective", "Scenario and alert details", "Lab environment and tools", "Dataset source"] },
  { title: "Examination method", fields: ["Investigation methodology", "Commands, queries or filters"] },
  { title: "Evidence record", fields: ["Evidence and observations", "Timeline of events"] },
  { title: "Analysis and assessment", fields: ["Analysis and reasoning", "Findings and conclusion", "Severity and justification"] },
  { title: "Disposition and review", fields: ["Containment or remediation", "Escalation decision", "Lessons learned", "Screenshots and supporting evidence"] },
];

function reportElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}

const params = new URLSearchParams(window.location.search);
const labId = params.get("lab");
const templates = window.SOC_INVESTIGATION_TEMPLATES || [];
const investigation = templates.find((item) => item.id === labId);
const title = document.querySelector("#report-title");
const summary = document.querySelector("#report-summary");
const breadcrumb = document.querySelector("#report-breadcrumb-title");
const sections = document.querySelector("#report-sections");
const contents = document.querySelector("#report-contents-links");
const proofLink = document.querySelector("#report-proof-link");
const printButton = document.querySelector("#print-report");

function renderUnavailable() {
  document.title = "Investigation not found | Emmanual Januarie";
  title.textContent = "Investigation not found";
  breadcrumb.textContent = "Not found";
  summary.textContent = "This report link is not recognized. Return to the investigations section and open a listed lab template.";
  document.querySelector(".report-status").textContent = "NO REPORT SELECTED";
  document.querySelector(".report-metadata").hidden = true;
  document.querySelector(".report-integrity-note").hidden = true;
  contents.replaceChildren();
  proofLink.hidden = true;
  sections.append(reportElement("p", "report-empty", "Choose an investigation from the portfolio to view its report template."));
}

function renderField(field, sectionNumber) {
  const [label, value, , code] = field;
  const wrapper = reportElement("article", "report-field");
  const heading = reportElement("h3", "report-field-title", label);
  wrapper.append(heading);
  if (code) {
    const pre = reportElement("pre");
    pre.append(reportElement("code", "", value));
    wrapper.append(pre);
  } else {
    wrapper.append(reportElement("p", "", value));
  }
  wrapper.dataset.section = String(sectionNumber);
  return wrapper;
}

function renderReport(item) {
  document.title = `${item.title} | Investigation report`;
  title.textContent = item.title;
  breadcrumb.textContent = item.title;
  summary.textContent = item.summary;
  proofLink.href = `proof.html?lab=${encodeURIComponent(item.id)}`;
  proofLink.target = "_blank";
  proofLink.rel = "noopener noreferrer";

  const fieldMap = new Map(item.fields.map((field) => [field[0], field]));
  reportGroups.forEach((group, index) => {
    const section = reportElement("section", "report-chapter");
    const headingId = `report-section-${index + 1}`;
    section.id = headingId;
    const headingRow = reportElement("div", "report-chapter-heading");
    headingRow.append(
      reportElement("span", "report-chapter-index", String(index + 1).padStart(2, "0")),
      reportElement("h2", "", group.title),
    );
    section.append(headingRow);
    group.fields.forEach((fieldName) => {
      const field = fieldMap.get(fieldName);
      if (field) section.append(renderField(field, index + 1));
    });
    sections.append(section);

    const link = reportElement("a", "", `${String(index + 1).padStart(2, "0")}  ${group.title}`);
    link.href = `#${headingId}`;
    contents.append(link);
  });
}

if (printButton) printButton.addEventListener("click", () => window.print());
if (investigation) renderReport(investigation);
else renderUnavailable();
