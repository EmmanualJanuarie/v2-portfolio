"use strict";

const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector("#primary-nav");

if (menuToggle && primaryNav) {
  const closeMenu = () => {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    primaryNav.classList.remove("is-open");
  };

  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
    primaryNav.classList.toggle("is-open", !isOpen);
  });

  primaryNav.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
}

const year = document.querySelector("#current-year");
if (year) year.textContent = String(new Date().getFullYear());

const investigationTemplates = [
  {
    id: "brute-force-login",
    title: "Brute-Force Login Investigation",
    summary: "Template for examining suspicious authentication activity and building an evidence-based event timeline.",
    fields: [
      ["Investigation objective", "[STATE WHAT YOU WANT TO DETERMINE]"],
      ["Scenario and alert details", "[DESCRIBE THE LAB SCENARIO AND ALERT; DO NOT ADD FICTIONAL RESULTS]"],
      ["Lab environment and tools", "[NAME THE AUTHORISED LAB ENVIRONMENT AND TOOLS YOU ACTUALLY USED]"],
      ["Dataset source", "[IDENTIFY THE PROVIDED OR GENERATED LAB DATASET]"],
      ["Investigation methodology", "[DOCUMENT YOUR ACTUAL INVESTIGATION STEPS IN ORDER]", true],
      ["Evidence and observations", "[RECORD OBSERVED FAILED AND SUCCESSFUL LOGIN EVENTS; INCLUDE SOURCE AND CONTEXT]", true],
      ["Commands, queries or filters", "[ADD SPLUNK QUERY OR FILTER YOU ACTUALLY USED]", true],
      ["Timeline of events", "[RECORD ACTUAL TIMESTAMPS AND EVENTS IN TIME ORDER]", true],
      ["Analysis and reasoning", "[EXPLAIN HOW THE EVIDENCE SUPPORTS OR DOES NOT SUPPORT EACH POSSIBILITY]", true],
      ["Findings and conclusion", "[ADD YOUR FINDINGS HERE; SEPARATE FACTS FROM POSSIBLE EXPLANATIONS]", true],
      ["Severity and justification", "[ASSESS SEVERITY USING THE LAB CONTEXT AND EXPLAIN YOUR REASONING]"],
      ["Containment or remediation", "[DOCUMENT RECOMMENDED ACTIONS; DO NOT CLAIM ACTIONS YOU DID NOT TAKE]", true],
      ["Escalation decision", "[RECORD WHETHER YOU WOULD ESCALATE AND WHY]"],
      ["Lessons learned", "[NOTE WHAT YOU LEARNED AND WHAT YOU WOULD IMPROVE]", true],
      ["Screenshots and supporting evidence", "[INSERT SCREENSHOT — USE AUTHORISED, SANITISED LAB EVIDENCE ONLY]", true],
    ],
  },
  {
    id: "phishing-email",
    title: "Phishing Email Investigation",
    summary: "Template for reviewing an authorised sample email, its authentication results, URLs, and indicators.",
    fields: [
      ["Investigation objective", "[STATE WHAT YOU WANT TO DETERMINE ABOUT THE SAMPLE]"],
      ["Scenario and alert details", "[DESCRIBE THE AUTHORISED EXERCISE AND PROVIDED ALERT]"],
      ["Lab environment and tools", "[NAME THE ENVIRONMENT AND TOOLS ACTUALLY USED]"],
      ["Dataset source", "[IDENTIFY THE TRAINING SAMPLE OR LAB DATA SOURCE]"],
      ["Investigation methodology", "[DOCUMENT HOW YOU REVIEWED THE MESSAGE AND ITS CONTEXT]", true],
      ["Evidence and observations", "[RECORD HEADER FIELDS, AUTHENTICATION RESULTS, URLS, AND INDICATORS THAT YOU OBSERVED]", true],
      ["Commands, queries or filters", "[ADD THE ACTUAL SEARCH, COMMAND, OR FILTER USED]", true],
      ["Timeline of events", "[RECORD ACTUAL MESSAGE AND EVENT TIMESTAMPS, IF PROVIDED]", true],
      ["Analysis and reasoning", "[EXPLAIN WHICH OBSERVATIONS SUPPORT OR WEAKEN EACH INTERPRETATION]", true],
      ["Findings and conclusion", "[CLASSIFY AS MALICIOUS, SUSPICIOUS, OR BENIGN ONLY IF THE EVIDENCE SUPPORTS IT]", true],
      ["Severity and justification", "[ASSESS POTENTIAL IMPACT IN THE EXERCISE CONTEXT]"],
      ["Containment or remediation", "[DOCUMENT RECOMMENDED USER, MESSAGE, OR INDICATOR ACTIONS]", true],
      ["Escalation decision", "[RECORD WHETHER FURTHER REVIEW IS NEEDED AND WHY]"],
      ["Lessons learned", "[NOTE WHAT YOU LEARNED AND WHAT YOU WOULD IMPROVE]", true],
      ["Screenshots and supporting evidence", "[INSERT SCREENSHOT — REMOVE PERSONAL DATA AND LIVE CREDENTIALS]", true],
    ],
  },
  {
    id: "endpoint-network",
    title: "Windows Endpoint or Network Investigation",
    summary: "Template for reviewing authorised Windows, Sysmon, or packet-capture data and explaining the findings.",
    fields: [
      ["Investigation objective", "[STATE THE ACTIVITY OR QUESTION TO INVESTIGATE]"],
      ["Scenario and alert details", "[DESCRIBE THE LAB SCENARIO AND ALERT DETAILS PROVIDED]"],
      ["Lab environment and tools", "[NAME THE AUTHORISED ENDPOINT OR NETWORK LAB AND TOOLS USED]"],
      ["Dataset source", "[IDENTIFY THE EVENT LOG, SYSMON DATA, OR PCAP SOURCE]"],
      ["Investigation methodology", "[LIST THE REVIEW STEPS YOU ACTUALLY PERFORMED]", true],
      ["Evidence and observations", "[RECORD RELEVANT EVENT IDs, PROCESS DETAILS, OR NETWORK OBSERVATIONS]", true],
      ["Commands, queries or filters", "[ADD YOUR ACTUAL FILTERS, COMMANDS, OR QUERY]", true],
      ["Timeline of events", "[RECORD ACTUAL TIMESTAMPS AND CORRELATED EVENTS]", true],
      ["Analysis and reasoning", "[EXPLAIN THE REASONING; LABEL UNCONFIRMED CAUSES AS POSSIBILITIES]", true],
      ["Findings and conclusion", "[ADD YOUR FINDINGS HERE; STATE LIMITATIONS AND UNCERTAINTY]", true],
      ["Severity and justification", "[ASSESS SEVERITY FOR THE LAB CONTEXT AND EXPLAIN WHY]"],
      ["Containment or remediation", "[RECOMMEND NEXT STEPS; DO NOT CLAIM A RESPONSE WAS EXECUTED]", true],
      ["Escalation decision", "[RECORD WHETHER YOU WOULD ESCALATE AND WHAT EVIDENCE SUPPORTS THAT]"],
      ["Lessons learned", "[NOTE WHAT YOU LEARNED AND WHAT YOU WOULD IMPROVE]", true],
      ["Screenshots and supporting evidence", "[INSERT SCREENSHOT — USE AUTHORISED, SANITISED LAB DATA ONLY]", true],
    ],
  },
];

const detectionTemplates = [
  {
    title: "Multiple Failed Login Attempts",
    fields: [
      ["Detection objective", "[DEFINE THE AUTHENTICATION BEHAVIOUR TO IDENTIFY]"],
      ["Data source", "[NAME THE AUTHORISED LOG SOURCE AND EVENT FIELDS]"],
      ["Query or detection logic", "[ADD SPLUNK QUERY — EXAMPLE ONLY; VALIDATE BEFORE USE]", true, true],
      ["Query explanation", "[EXPLAIN EACH FILTER, THRESHOLD, AND GROUPING]", true],
      ["Expected behaviour", "[DESCRIBE WHAT SHOULD MATCH; NO RESULTS ARE CLAIMED YET]"],
      ["Testing method", "[DESCRIBE HOW YOU WILL TEST USING AUTHORISED LAB DATA]"],
      ["False-positive considerations", "[IDENTIFY LEGITIMATE ACTIVITY THAT COULD MATCH]", true],
      ["Actual test results", "[ADD RESULTS AFTER RUNNING AND VERIFYING THE TEST]"],
      ["Possible improvements", "[RECORD LIMITATIONS AND A REFINEMENT TO EXPLORE]"],
    ],
  },
  {
    title: "Suspicious PowerShell Activity",
    fields: [
      ["Detection objective", "[DEFINE THE POWERSHELL BEHAVIOUR TO IDENTIFY]"],
      ["Data source", "[NAME THE AUTHORISED WINDOWS OR SYSMON LOG SOURCE]"],
      ["Query or detection logic", "[ADD SPLUNK QUERY — EXAMPLE ONLY; VALIDATE BEFORE USE]", true, true],
      ["Query explanation", "[EXPLAIN THE FIELDS, FILTERS, AND MATCH CONDITIONS]", true],
      ["Expected behaviour", "[DESCRIBE EXPECTED MATCHES AND KNOWN LIMITATIONS]"],
      ["Testing method", "[DESCRIBE A SAFE, AUTHORISED LAB TEST]"],
      ["False-positive considerations", "[NOTE ADMINISTRATIVE SCRIPTS OR OTHER LEGITIMATE USE CASES TO REVIEW]", true],
      ["Actual test results", "[ADD RESULTS ONLY AFTER TESTING]"],
      ["Possible improvements", "[NOTE HOW CONTEXT OR ALLOWLISTING MIGHT BE EVALUATED]"],
    ],
  },
  {
    title: "Unusual Authentication Behaviour",
    fields: [
      ["Detection objective", "[DEFINE THE AUTHENTICATION PATTERN TO IDENTIFY]"],
      ["Data source", "[NAME THE AUTHORISED IDENTITY OR SIGN-IN LOG SOURCE]"],
      ["Query or detection logic", "[ADD SPLUNK QUERY — EXAMPLE ONLY; VALIDATE BEFORE USE]", true, true],
      ["Query explanation", "[EXPLAIN HOW THE LOGIC IDENTIFIES DEVIATION FROM EXPECTED ACTIVITY]", true],
      ["Expected behaviour", "[DESCRIBE WHAT SHOULD MATCH AND WHAT CONTEXT IS NEEDED]"],
      ["Testing method", "[DESCRIBE HOW YOU WILL TEST USING AUTHORISED LAB DATA]"],
      ["False-positive considerations", "[CONSIDER TRAVEL, VPN, SHIFT PATTERNS, AND OTHER EXPECTED VARIATION]", true],
      ["Actual test results", "[ADD RESULTS AFTER RUNNING AND VERIFYING THE TEST]"],
      ["Possible improvements", "[RECORD HOW BASELINES OR ADDITIONAL CONTEXT COULD IMPROVE THE RULE]"],
    ],
  },
];

const labNoteTemplates = [
  "Networking Fundamentals",
  "Wireshark Analysis",
  "Windows Event IDs",
  "Sysmon",
  "Linux Log Analysis",
  "Splunk Searches",
  "IOC Investigation",
  "Phishing Analysis",
].map((topic) => ({
  title: topic,
  fields: [
    ["Objective", "[STATE THE QUESTION OR CONCEPT YOU ARE LEARNING]"],
    ["Tools used", "[LIST TOOLS USED IN THIS AUTHORISED EXERCISE]"],
    ["Steps performed", "[RECORD YOUR ACTUAL STEPS]", true],
    ["Commands or queries", "[ADD COMMANDS OR QUERIES YOU ACTUALLY RAN]", true],
    ["Observations", "[RECORD WHAT YOU OBSERVED; DO NOT ADD FABRICATED OUTPUT]", true],
    ["What I learned", "[SUMMARISE THE CONCEPT IN YOUR OWN WORDS]", true],
    ["References", "[ADD RELEVANT DOCUMENTATION OR LAB REFERENCES]", true],
  ],
}));

function makeElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}

function makeField(field) {
  const [label, value, wide = false, code = false] = field;
  const wrapper = makeElement("article", `report-field${wide ? " report-field-wide" : ""}`);
  wrapper.append(makeElement("h4", "", label));
  if (code) {
    const pre = makeElement("pre");
    pre.append(makeElement("code", "", value));
    wrapper.append(pre);
  } else {
    wrapper.append(makeElement("p", "", value));
  }
  return wrapper;
}

function makeDisclosure({ title, summary, label, fields, labId, status }) {
  const details = makeElement("details", "disclosure-card");
  if (labId) details.id = `report-${labId}`;

  const summaryElement = makeElement("summary");
  summaryElement.append(
    makeElement("span", "card-kicker", label),
    makeElement("span", "card-title", title),
    makeElement("span", "card-summary", summary),
  );
  details.append(summaryElement);

  const body = makeElement("div", "disclosure-body");
  if (status) body.append(makeElement("span", "template-status", status));
  const fieldGrid = makeElement("div", "report-fields");
  fields.forEach((field) => fieldGrid.append(makeField(field)));
  body.append(fieldGrid);

  if (labId) {
    const actions = makeElement("div", "detail-actions");
    const repository = makeElement("button", "text-action text-action-disabled", "Repository · add link");
    repository.type = "button";
    repository.disabled = true;
    repository.title = "Add a real repository URL when this lab report is ready";
    const report = makeElement("button", "text-action text-action-disabled", "Live report · add link");
    report.type = "button";
    report.disabled = true;
    report.title = "The report template is displayed above; add a published report URL when available";
    const media = makeElement("a", "text-action", "Proof & media ↗");
    media.href = `proof.html?lab=${encodeURIComponent(labId)}`;
    media.target = "_blank";
    media.rel = "noopener noreferrer";
    actions.append(repository, report, media);
    body.append(actions);
  }
  details.append(body);
  return details;
}

const investigationList = document.querySelector("#investigation-list");
if (investigationList) {
  investigationTemplates.forEach((item) => investigationList.append(makeDisclosure({
    ...item,
    labId: item.id,
    label: "LAB TEMPLATE — NOT YET COMPLETED",
    status: "LAB TEMPLATE — NOT YET COMPLETED",
  })));
}

const detectionList = document.querySelector("#detection-list");
if (detectionList) {
  detectionTemplates.forEach((item) => detectionList.append(makeDisclosure({
    ...item,
    label: "DETECTION TEMPLATE",
    summary: "Unvalidated template · testing results not yet added",
  })));
}

const notesList = document.querySelector("#notes-list");
if (notesList) {
  labNoteTemplates.forEach((item) => notesList.append(makeDisclosure({
    ...item,
    label: "LAB NOTE TEMPLATE",
    summary: "Add your authorised exercise notes",
  })));
}

if (window.location.hash) {
  const requestedId = decodeURIComponent(window.location.hash.slice(1));
  const target = document.getElementById(requestedId);
  if (target instanceof HTMLDetailsElement) {
    target.open = true;
    requestAnimationFrame(() => target.scrollIntoView({ block: "start" }));
  }
}
