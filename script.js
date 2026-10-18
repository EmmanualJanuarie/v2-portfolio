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
    repository: "",
    fields: [
      ["Investigation objective", "[STATE WHAT YOU WANT TO DETERMINE]"],
      ["Scenario and alert details", "[IDENTIFY THE AUTHORISED LAB SCENARIO, ALERT OR RULE NAME, PROVIDED TIME WINDOW, LAB ACCOUNT/HOST CONTEXT, AND SCOPE. DO NOT ADD FICTIONAL RESULTS]", true],
      ["Lab environment and tools", "[RECORD LAB PROVIDER/ENVIRONMENT, RELEVANT SYSTEM OR PRODUCT VERSIONS, TOOLS AND VERSIONS, AND TIME ZONE]", true],
      ["Dataset source", "[IDENTIFY THE LOG SOURCE OR FILE, LAB REFERENCE, COLLECTION/EXPORT CONTEXT, INTEGRITY HASH IF AVAILABLE, AND KNOWN DATA LIMITATIONS]", true],
      ["Investigation methodology", "[NUMBER YOUR ACTUAL STEPS. INCLUDE INITIAL SCOPE CHECK, QUERIES/FILTERS, FIELDS REVIEWED, CORRELATION/PIVOTS, VALIDATION, AND HOW THE ORIGINAL DATA WAS PRESERVED]", true],
      ["Evidence and observations", "[FOR EACH ITEM, RECORD EVIDENCE ID, SOURCE, EVENT/RECORD ID, EXACT OBSERVED FIELDS, TIMESTAMP AND TIME ZONE, CONTEXT, RELEVANCE, AND LIMITATIONS. DISTINGUISH OBSERVATION FROM INTERPRETATION]", true],
      ["Commands, queries or filters", "[PASTE THE EXACT COMMAND/QUERY AND TIME RANGE YOU USED. EXPLAIN IMPORTANT FILTERS AND FIELDS; REMOVE SECRETS OR PERSONAL DATA]", true],
      ["Timeline of events", "[LIST VERIFIED EVENTS IN ORDER: TIMESTAMP WITH TIME ZONE, EVENT DESCRIPTION, SOURCE/EVIDENCE ID, AND ANY TIMESTAMP NORMALISATION. MARK GAPS CLEARLY]", true],
      ["Analysis and reasoning", "[STATE VERIFIED FACTS FIRST. THEN DISCUSS INTERPRETATION, SUPPORTING/CONTRADICTING EVIDENCE, PLAUSIBLE BENIGN EXPLANATIONS, AND WHAT CANNOT BE DETERMINED]", true],
      ["Findings and conclusion", "[SUMMARISE ONLY CONCLUSIONS SUPPORTED BY THE AVAILABLE LAB EVIDENCE. SEPARATE CONFIRMED FACTS, ASSESSMENT, AND UNRESOLVED QUESTIONS]", true],
      ["Severity and justification", "[NAME THE LAB/ORGANISATION SEVERITY FRAMEWORK IF PROVIDED; EXPLAIN SCOPE, POTENTIAL IMPACT, URGENCY, AND UNCERTAINTY. DO NOT INVENT A RATING]", true],
      ["Containment or remediation", "[SEPARATE RECOMMENDED ACTIONS FROM ACTIONS ACTUALLY TAKEN. NOTE ANY APPROVAL/OWNER REQUIREMENTS; DO NOT CLAIM ACTIONS YOU DID NOT TAKE]", true],
      ["Escalation decision", "[RECORD ESCALATE / DO NOT ESCALATE / UNDETERMINED, THE POLICY OR CRITERIA USED, REASONING, AND WHAT EVIDENCE OR OWNER IS NEEDED NEXT]", true],
      ["Lessons learned", "[NOTE WHAT YOU LEARNED AND WHAT YOU WOULD IMPROVE]", true],
      ["Screenshots and supporting evidence", "[LIST SUPPORTING FILES BY EVIDENCE ID AND FILENAME. EXPLAIN WHAT EACH SHOWS; SANITISE PERSONAL DATA, CREDENTIALS, TOKENS, AND PRIVATE DETAILS BEFORE PUBLISHING]", true],
    ],
  },
  {
    id: "phishing-email",
    title: "Phishing Email Investigation",
    summary: "Template for reviewing an authorised sample email, its authentication results, URLs, and indicators.",
    repository: "",
    fields: [
      ["Investigation objective", "[STATE WHAT YOU WANT TO DETERMINE ABOUT THE SAMPLE]"],
      ["Scenario and alert details", "[DESCRIBE THE AUTHORISED EXERCISE, ALERT CONTEXT, SAMPLE SOURCE, AND REVIEW SCOPE. DO NOT CLAIM THE MESSAGE REACHED A REAL USER]", true],
      ["Lab environment and tools", "[RECORD SANDBOX/MAIL ANALYSIS ENVIRONMENT, TOOLS AND VERSIONS, AND WHETHER NETWORK LOOKUPS WERE AUTHORISED]", true],
      ["Dataset source", "[IDENTIFY THE PROVIDED EMAIL SAMPLE OR TRAINING SOURCE, FILE/RECORD REFERENCE, HASH IF AVAILABLE, AND ANY MISSING HEADERS OR CONTEXT]", true],
      ["Investigation methodology", "[NUMBER YOUR REVIEW STEPS: PRESERVE SAMPLE, REVIEW SENDER/HEADER, CHECK AUTHENTICATION, INSPECT LINKS SAFELY, VALIDATE INDICATORS WITH APPROVED SOURCES, AND RECORD LIMITATIONS]", true],
      ["Evidence and observations", "[RECORD EVIDENCE ID AND EXACT HEADER/AUTHENTICATION FIELDS, URL/DOMAIN VALUES, REDIRECTS OR FILE DETAILS OBSERVED, SOURCE, AND CONTEXT. DO NOT OPEN SUSPICIOUS CONTENT OUTSIDE AN AUTHORISED SAFE ENVIRONMENT]", true],
      ["Commands, queries or filters", "[ADD THE EXACT SEARCH, COMMAND, OR FILTER AND ANY APPROVED LOOKUP SOURCE USED. REMOVE LIVE TOKENS OR PERSONAL DATA]", true],
      ["Timeline of events", "[RECORD ACTUAL MESSAGE, SUBMISSION, AND RELATED EVENT TIMES WITH TIME ZONE; STATE WHEN TIMESTAMPS WERE NOT PROVIDED]", true],
      ["Analysis and reasoning", "[SEPARATE OBSERVED MESSAGE FACTS FROM ASSESSMENT. EXPLAIN SUPPORTING/CONTRADICTING SIGNS, POSSIBLE LEGITIMATE EXPLANATIONS, AND UNVERIFIED INDICATORS]", true],
      ["Findings and conclusion", "[CLASSIFY AS MALICIOUS, SUSPICIOUS, BENIGN, OR INCONCLUSIVE ONLY WHEN THE AVAILABLE EVIDENCE SUPPORTS IT; STATE WHAT REMAINS UNKNOWN]", true],
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
    repository: "",
    fields: [
      ["Investigation objective", "[STATE THE ACTIVITY OR QUESTION TO INVESTIGATE]"],
      ["Scenario and alert details", "[DESCRIBE THE AUTHORISED ENDPOINT/NETWORK EXERCISE, ALERT CONTEXT, TARGET SYSTEMS IN SCOPE, AND PROVIDED TIME WINDOW]", true],
      ["Lab environment and tools", "[RECORD WINDOWS/LINUX LAB DETAILS, HOST OR SENSOR ROLE, TOOL VERSIONS, TIME ZONE, AND CAPTURE SETTINGS IF RELEVANT]", true],
      ["Dataset source", "[IDENTIFY EVENT LOG/SYSMON/PCAP FILE OR INDEX, SOURCE REFERENCE, COLLECTION PERIOD, HASH IF AVAILABLE, AND COVERAGE LIMITATIONS]", true],
      ["Investigation methodology", "[NUMBER YOUR ACTUAL REVIEW STEPS. INCLUDE EVENT/FIELD SELECTION, PROCESS OR NETWORK PIVOTS, TIME CORRELATION, VALIDATION, AND DATA PRESERVATION]", true],
      ["Evidence and observations", "[FOR EACH ITEM, RECORD EVIDENCE ID, SOURCE, EVENT ID OR PACKET/FLOW REFERENCE, TIMESTAMP AND TIME ZONE, EXACT FIELDS/VALUES, CONTEXT, AND LIMITATIONS]", true],
      ["Commands, queries or filters", "[ADD EXACT EVENT VIEWER FILTERS, SPLUNK SEARCHES, SHELL COMMANDS, OR WIRESHARK DISPLAY FILTERS AND THE TIME RANGE USED]", true],
      ["Timeline of events", "[RECORD VERIFIED TIMESTAMPS AND CORRELATED EVENTS IN ORDER; INCLUDE SOURCE/EVIDENCE IDS AND NOTE CLOCK OR TIME-ZONE DIFFERENCES]", true],
      ["Analysis and reasoning", "[EXPLAIN WHAT IS DIRECTLY OBSERVED, WHAT IS INFERRED, WHICH ALTERNATIVES WERE CONSIDERED, AND WHAT ADDITIONAL DATA WOULD CONFIRM OR REFUTE THEM]", true],
      ["Findings and conclusion", "[STATE EVIDENCE-BASED FINDINGS AND LIMITATIONS. DO NOT LABEL NORMAL OR SUSPICIOUS ACTIVITY WITHOUT SUPPORTING OBSERVATIONS]", true],
      ["Severity and justification", "[ASSESS SEVERITY FOR THE LAB CONTEXT AND EXPLAIN WHY]"],
      ["Containment or remediation", "[RECOMMEND NEXT STEPS; DO NOT CLAIM A RESPONSE WAS EXECUTED]", true],
      ["Escalation decision", "[RECORD WHETHER YOU WOULD ESCALATE AND WHAT EVIDENCE SUPPORTS THAT]"],
      ["Lessons learned", "[NOTE WHAT YOU LEARNED AND WHAT YOU WOULD IMPROVE]", true],
      ["Screenshots and supporting evidence", "[INSERT SCREENSHOT — USE AUTHORISED, SANITISED LAB DATA ONLY]", true],
    ],
  },
];
window.SOC_INVESTIGATION_TEMPLATES = investigationTemplates;

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

function makeDisclosure({ title, summary, label, fields }) {
  const details = makeElement("details", "disclosure-card");

  const summaryElement = makeElement("summary");
  summaryElement.append(
    makeElement("span", "card-kicker", label),
    makeElement("span", "card-title", title),
    makeElement("span", "card-summary", summary),
  );
  details.append(summaryElement);

  const body = makeElement("div", "disclosure-body");
  const fieldGrid = makeElement("div", "report-fields");
  fields.forEach((field) => fieldGrid.append(makeField(field)));
  body.append(fieldGrid);
  details.append(body);
  return details;
}

function makeInvestigationEntry(item, index) {
  const entry = makeElement("article", "investigation-entry");
  const number = makeElement("span", "investigation-index", String(index + 1).padStart(2, "0"));
  const content = makeElement("div", "investigation-main");
  content.append(
    makeElement("p", "investigation-label", "AUTHORISED LAB TEMPLATE"),
    makeElement("h3", "investigation-title", item.title),
    makeElement("p", "investigation-summary", item.summary),
  );
  const actions = makeElement("div", "investigation-actions");
  const repoUrl = typeof item.repository === "string" ? item.repository.trim() : "";
  if (repoUrl && isSafeExternalUrl(repoUrl)) {
    const repo = makeElement("a", "button button-secondary investigation-button", "GitHub Repository ↗");
    repo.href = repoUrl;
    repo.target = "_blank";
    repo.rel = "noopener noreferrer";
    actions.append(repo);
  } else {
    const repo = makeElement("button", "button button-secondary investigation-button", "GitHub Repository · not added");
    repo.type = "button";
    repo.disabled = true;
    repo.title = "Add a real, sanitised repository URL to this investigation before publishing it";
    actions.append(repo);
  }
  const report = makeElement("a", "button button-primary investigation-button", "View Full Report →");
  report.href = `investigation-report.html?lab=${encodeURIComponent(item.id)}`;
  actions.append(report);
  content.append(actions);
  entry.append(number, content);
  return entry;
}

function isSafeExternalUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === "https:" && url.hostname.length > 0;
  } catch {
    return false;
  }
}

const investigationList = document.querySelector("#investigation-list");
if (investigationList) {
  investigationTemplates.forEach((item, index) => investigationList.append(makeInvestigationEntry(item, index)));
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
