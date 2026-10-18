"use strict";

window.SOC_LABS = [
  {
    id: "brute-force-login",
    title: "Brute-Force Login Investigation",
    category: "AUTHENTICATION / LOG ANALYSIS",
    summary: "Review an authorised authentication dataset for repeated failed logins, check whether any later success is present, and document a time-ordered, evidence-based assessment.",
    repository: "",
    sections: [
      {
        title: "Scope and source",
        fields: [
          ["Investigation objective", "[STATE WHAT YOU WANT TO DETERMINE. For example, define the authentication activity and time range you intend to examine; do not state a result here.]"],
          ["Scenario and alert details", "[IDENTIFY THE AUTHORISED LAB SCENARIO, ALERT OR RULE NAME, PROVIDED TIME WINDOW, LAB ACCOUNT/HOST CONTEXT, AND SCOPE. DO NOT ADD FICTIONAL RESULTS]"],
          ["Lab environment and tools", "[RECORD LAB PROVIDER/ENVIRONMENT, RELEVANT SYSTEM OR PRODUCT VERSIONS, TOOLS AND VERSIONS, AND TIME ZONE]"],
          ["Dataset source", "[IDENTIFY THE LOG SOURCE OR FILE, LAB REFERENCE, COLLECTION/EXPORT CONTEXT, INTEGRITY HASH IF AVAILABLE, AND KNOWN DATA LIMITATIONS]"],
        ],
      },
      {
        title: "Examination method",
        fields: [
          ["Investigation methodology", "[NUMBER YOUR ACTUAL STEPS. INCLUDE INITIAL SCOPE CHECK, QUERIES/FILTERS, FIELDS REVIEWED, CORRELATION/PIVOTS, VALIDATION, AND HOW THE ORIGINAL DATA WAS PRESERVED]"],
          ["Commands, queries or filters", "[PASTE THE EXACT COMMAND/QUERY AND TIME RANGE YOU USED. EXPLAIN IMPORTANT FILTERS AND FIELDS; REMOVE SECRETS OR PERSONAL DATA]"],
        ],
      },
      {
        title: "Evidence record",
        fields: [
          ["Evidence and observations", "[FOR EACH ITEM, RECORD EVIDENCE ID, SOURCE, EVENT/RECORD ID, EXACT OBSERVED FIELDS, TIMESTAMP AND TIME ZONE, CONTEXT, RELEVANCE, AND LIMITATIONS. DISTINGUISH OBSERVATION FROM INTERPRETATION]"],
          ["Timeline of events", "[LIST VERIFIED EVENTS IN ORDER: TIMESTAMP WITH TIME ZONE, EVENT DESCRIPTION, SOURCE/EVIDENCE ID, AND ANY TIMESTAMP NORMALISATION. MARK GAPS CLEARLY]"],
        ],
      },
      {
        title: "Analysis and assessment",
        fields: [
          ["Analysis and reasoning", "[STATE VERIFIED FACTS FIRST. THEN DISCUSS INTERPRETATION, SUPPORTING/CONTRADICTING EVIDENCE, PLAUSIBLE BENIGN EXPLANATIONS, AND WHAT CANNOT BE DETERMINED]"],
          ["Findings and conclusion", "[SUMMARISE ONLY CONCLUSIONS SUPPORTED BY THE AVAILABLE LAB EVIDENCE. SEPARATE CONFIRMED FACTS, ASSESSMENT, AND UNRESOLVED QUESTIONS]"],
          ["Severity and justification", "[NAME THE LAB/ORGANISATION SEVERITY FRAMEWORK IF PROVIDED; EXPLAIN SCOPE, POTENTIAL IMPACT, URGENCY, AND UNCERTAINTY. DO NOT INVENT A RATING]"],
        ],
      },
      {
        title: "Disposition and review",
        fields: [
          ["Containment or remediation", "[SEPARATE RECOMMENDED ACTIONS FROM ACTIONS ACTUALLY TAKEN. NOTE ANY APPROVAL/OWNER REQUIREMENTS; DO NOT CLAIM ACTIONS YOU DID NOT TAKE]"],
          ["Escalation decision", "[RECORD ESCALATE / DO NOT ESCALATE / UNDETERMINED, THE POLICY OR CRITERIA USED, REASONING, AND WHAT EVIDENCE OR OWNER IS NEEDED NEXT]"],
          ["Lessons learned", "[NOTE WHAT YOU LEARNED AND WHAT YOU WOULD IMPROVE]"],
          ["Screenshots and supporting evidence", "[LIST SUPPORTING FILES BY EVIDENCE ID AND FILENAME. EXPLAIN WHAT EACH SHOWS; SANITISE PERSONAL DATA, CREDENTIALS, TOKENS, AND PRIVATE DETAILS BEFORE PUBLISHING]"],
        ],
      },
    ],
  },
  {
    id: "phishing-email",
    title: "Phishing Email Investigation",
    category: "EMAIL / INDICATOR REVIEW",
    summary: "Examine a training email sample and record its headers, authentication results, links, and indicators without opening unsafe content outside an authorised environment.",
    repository: "",
    sections: [
      {
        title: "Scope and source",
        fields: [
          ["Investigation objective", "[STATE WHAT YOU WANT TO DETERMINE ABOUT THE AUTHORISED EMAIL SAMPLE]"],
          ["Scenario and alert details", "[DESCRIBE THE AUTHORISED EXERCISE, ALERT CONTEXT, SAMPLE SOURCE, AND REVIEW SCOPE. DO NOT CLAIM THE MESSAGE REACHED A REAL USER]"],
          ["Lab environment and tools", "[RECORD SANDBOX/MAIL ANALYSIS ENVIRONMENT, TOOLS AND VERSIONS, AND WHETHER NETWORK LOOKUPS WERE AUTHORISED]"],
          ["Dataset source", "[IDENTIFY THE PROVIDED EMAIL SAMPLE OR TRAINING SOURCE, FILE/RECORD REFERENCE, HASH IF AVAILABLE, AND ANY MISSING HEADERS OR CONTEXT]"],
        ],
      },
      {
        title: "Examination method",
        fields: [
          ["Investigation methodology", "[NUMBER YOUR REVIEW STEPS: PRESERVE SAMPLE, REVIEW SENDER/HEADER, CHECK AUTHENTICATION, INSPECT LINKS SAFELY, VALIDATE INDICATORS WITH APPROVED SOURCES, AND RECORD LIMITATIONS]"],
          ["Commands, queries or filters", "[ADD THE EXACT SEARCH, COMMAND, OR FILTER AND ANY APPROVED LOOKUP SOURCE USED. REMOVE LIVE TOKENS OR PERSONAL DATA]"],
        ],
      },
      {
        title: "Evidence record",
        fields: [
          ["Evidence and observations", "[RECORD EVIDENCE ID AND EXACT HEADER/AUTHENTICATION FIELDS, URL/DOMAIN VALUES, REDIRECTS OR FILE DETAILS OBSERVED, SOURCE, AND CONTEXT. DO NOT OPEN SUSPICIOUS CONTENT OUTSIDE AN AUTHORISED SAFE ENVIRONMENT]"],
          ["Timeline of events", "[RECORD ACTUAL MESSAGE, SUBMISSION, AND RELATED EVENT TIMES WITH TIME ZONE; STATE WHEN TIMESTAMPS WERE NOT PROVIDED]"],
        ],
      },
      {
        title: "Analysis and assessment",
        fields: [
          ["Analysis and reasoning", "[SEPARATE OBSERVED MESSAGE FACTS FROM ASSESSMENT. EXPLAIN SUPPORTING/CONTRADICTING SIGNS, POSSIBLE LEGITIMATE EXPLANATIONS, AND UNVERIFIED INDICATORS]"],
          ["Findings and conclusion", "[CLASSIFY AS MALICIOUS, SUSPICIOUS, BENIGN, OR INCONCLUSIVE ONLY WHEN THE AVAILABLE EVIDENCE SUPPORTS IT; STATE WHAT REMAINS UNKNOWN]"],
          ["Severity and justification", "[ASSESS POTENTIAL IMPACT IN THE EXERCISE CONTEXT. IDENTIFY THE FRAMEWORK IF ONE IS PROVIDED AND EXPLAIN UNCERTAINTY]"],
        ],
      },
      {
        title: "Disposition and review",
        fields: [
          ["Containment or remediation", "[DOCUMENT RECOMMENDED USER, MESSAGE, OR INDICATOR ACTIONS; SEPARATE RECOMMENDATIONS FROM ACTIONS ACTUALLY TAKEN]"],
          ["Escalation decision", "[RECORD WHETHER FURTHER REVIEW IS NEEDED, WHO SHOULD REVIEW IT, AND WHY]"],
          ["Lessons learned", "[NOTE WHAT YOU LEARNED AND WHAT YOU WOULD IMPROVE]"],
          ["Screenshots and supporting evidence", "[LIST SANITISED FILES BY EVIDENCE ID AND FILENAME. REMOVE PERSONAL DATA, CREDENTIALS, TOKENS, AND PRIVATE DETAILS]"],
        ],
      },
    ],
  },
  {
    id: "endpoint-network",
    title: "Windows Endpoint or Network Investigation",
    category: "ENDPOINT / NETWORK TELEMETRY",
    summary: "Review authorised Windows event, Sysmon, Linux, or packet-capture data and document observed activity, relevant context, and unresolved questions.",
    repository: "",
    sections: [
      {
        title: "Scope and source",
        fields: [
          ["Investigation objective", "[STATE THE ACTIVITY OR QUESTION YOU PLAN TO EXAMINE]"],
          ["Scenario and alert details", "[DESCRIBE THE AUTHORISED ENDPOINT/NETWORK EXERCISE, ALERT CONTEXT, TARGET SYSTEMS IN SCOPE, AND PROVIDED TIME WINDOW]"],
          ["Lab environment and tools", "[RECORD WINDOWS/LINUX LAB DETAILS, HOST OR SENSOR ROLE, TOOL VERSIONS, TIME ZONE, AND CAPTURE SETTINGS IF RELEVANT]"],
          ["Dataset source", "[IDENTIFY EVENT LOG/SYSMON/PCAP FILE OR INDEX, SOURCE REFERENCE, COLLECTION PERIOD, HASH IF AVAILABLE, AND COVERAGE LIMITATIONS]"],
        ],
      },
      {
        title: "Examination method",
        fields: [
          ["Investigation methodology", "[NUMBER YOUR ACTUAL REVIEW STEPS. INCLUDE EVENT/FIELD SELECTION, PROCESS OR NETWORK PIVOTS, TIME CORRELATION, VALIDATION, AND DATA PRESERVATION]"],
          ["Commands, queries or filters", "[ADD EXACT EVENT VIEWER FILTERS, SPLUNK SEARCHES, SHELL COMMANDS, OR WIRESHARK DISPLAY FILTERS AND THE TIME RANGE USED]"],
        ],
      },
      {
        title: "Evidence record",
        fields: [
          ["Evidence and observations", "[FOR EACH ITEM, RECORD EVIDENCE ID, SOURCE, EVENT ID OR PACKET/FLOW REFERENCE, TIMESTAMP AND TIME ZONE, EXACT FIELDS/VALUES, CONTEXT, AND LIMITATIONS]"],
          ["Timeline of events", "[RECORD VERIFIED TIMESTAMPS AND CORRELATED EVENTS IN ORDER; INCLUDE SOURCE/EVIDENCE IDS AND NOTE CLOCK OR TIME-ZONE DIFFERENCES]"],
        ],
      },
      {
        title: "Analysis and assessment",
        fields: [
          ["Analysis and reasoning", "[EXPLAIN WHAT IS DIRECTLY OBSERVED, WHAT IS INFERRED, WHICH ALTERNATIVES WERE CONSIDERED, AND WHAT ADDITIONAL DATA WOULD CONFIRM OR REFUTE THEM]"],
          ["Findings and conclusion", "[STATE EVIDENCE-BASED FINDINGS AND LIMITATIONS. DO NOT LABEL NORMAL OR SUSPICIOUS ACTIVITY WITHOUT SUPPORTING OBSERVATIONS]"],
          ["Severity and justification", "[ASSESS SEVERITY FOR THE LAB CONTEXT USING THE PROVIDED FRAMEWORK, IF ANY. EXPLAIN IMPACT, SCOPE, AND UNCERTAINTY]"],
        ],
      },
      {
        title: "Disposition and review",
        fields: [
          ["Containment or remediation", "[RECOMMEND NEXT STEPS; RECORD WHETHER THEY WERE ONLY RECOMMENDED OR ACTUALLY PERFORMED]"],
          ["Escalation decision", "[RECORD WHETHER YOU WOULD ESCALATE, TO WHOM, WHAT POLICY OR CRITERIA APPLY, AND WHY]"],
          ["Lessons learned", "[NOTE WHAT YOU LEARNED AND WHAT YOU WOULD IMPROVE]"],
          ["Screenshots and supporting evidence", "[LIST SANITISED FILES BY EVIDENCE ID AND FILENAME; EXPLAIN WHAT THEY SHOW AND REMOVE SENSITIVE DATA]"],
        ],
      },
    ],
  },
];
