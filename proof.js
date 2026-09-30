"use strict";

// Add screenshots/videos to assets/proof/<project-id>/ and register each file below.
// Supported media types are "image" and "video". Use accurate alt text and captions.
const proofProjects = {
  udes: {
    title: "UDES — Digital Evidence Management System",
    summary: "Screenshots and recordings for the evidence-management workflow. Demonstration media should use synthetic data only.",
    backId: "project-udes",
    media: [
      {
        type: "image",
        src: "assets/proof/branch-video-requests.png",
        alt: "Video request screenshot of Branch Admin",
        title: "Branch Admin video Request",
        caption: "Screenshot of the Branch Admin User in the Requests section, showing additional information associated with a selected body-camera video and its assigned officer. The section provides visibility into recorded violations, flagged irregularities, late uploads, and potentially modified video files, supporting monitoring, accountability, and evidence integrity."
      },
      {
        type: "image",
        src: "assets/proof/branch-admin-video-pan.png",
        alt: "Screenshot of list of videos of officer from specific Branch",
        title: "Branch Admin - Specific Officer Video evidence list",
        caption: "Screenshot of the Branch Admin viewing the video list for officers within their assigned branch only."
      },
      {
        type: "image",
        src: "assets/proof/organization-owner-audit-logs.png",
        alt: "Screenshot of organization owner viewing audit logs of all his branches",
        title: "Audit log of all branches employees with organization",
        caption: "Screenshot of the Organization Owner viewing the Audit logs for all employees with owners organization."
      },
      {
        type: "image",
        src: "assets/proof/super-admin-report-info.png",
        alt: "Screenshot of super admin reports section",
        title: "Super Admin - Report Section",
        caption: "Screenshot of the Reports section, showing the Audit Log, Chain of Custody, and Video Evidence reports. All reports are available for secure PDF download and require authentication before downloading."
      },
      {
        type: "image",
        src: "assets/proof/video-generated-evidence.png",
        alt: "Screenshot indicating how exported video evidence looks of body camera",
        title: "Evidence Export - Body camera video",
        caption: "Screenshot showing an exported body-camera video with a company watermark and officer information embedded into the footage. This provides an additional layer of accountability and helps deter unauthorized alteration or misuse of the video evidence."
      },
      {
        type: "image",
        src: "assets/proof/officer-protected-evidence.png",
        alt: "Screenshot of protected session evidence and officer assignment details",
        title: "Protected Session Evidence",
        caption: "Protected-session summary showing its timeline, officer assignment, evidence summary, and linked recordings."
      }
    ],
  },
  "internship-kbs": {
    title: "KBS — Business Learning & Administration Portal",
    summary: "Screenshots and recordings from the learning and administration portal prototype.",
    backId: "project-internship-kbs",
    media: [],
  },
  "signalwatch": {
    title: "SignalWatch App",
    summary: "Screenshots and recordings documenting the task management API starter project.",
    backId: "project-signalwatch",
    media: [],
  },
  "faulttrace": {
    title: "FaultTracet App",
    summary: "Screenshots and recordings documenting the inventory management application starter project.",
    backId: "project-faulttrace",
    media: [],
  },
  "relaygrid": {
    title: "RelayGrid App",
    summary: "Screenshots and recordings documenting the .NET desktop library tracker starter project.",
    backId: "project-relaygrid",
    media: [],
  },
};

const params = new URLSearchParams(window.location.search);
const projectId = params.get("project");
const project = Object.hasOwn(proofProjects, projectId) ? proofProjects[projectId] : null;
const title = document.querySelector("#proof-title");
const summary = document.querySelector("#proof-summary");
const breadcrumb = document.querySelector("#breadcrumb-project");
const backLink = document.querySelector("#project-back");
const gallery = document.querySelector("#proof-gallery");
const count = document.querySelector("#proof-count");
const year = document.querySelector("#current-year");
const viewer = document.querySelector("#proof-viewer");
const viewerTitle = document.querySelector("#viewer-title");
const viewerBody = document.querySelector("#viewer-body");
const viewerCaption = document.querySelector("#viewer-caption");
const viewerClose = viewer?.querySelector(".viewer-close");
let activeViewerTrigger = null;

if (year) year.textContent = String(new Date().getFullYear());

function setEmptyState(message) {
  const empty = document.createElement("div");
  empty.className = "proof-empty";
  const heading = document.createElement("h3");
  heading.textContent = "Project media will appear here";
  const description = document.createElement("p");
  description.textContent = message;
  empty.append(heading, description);
  gallery.replaceChildren(empty);
}

function addMediaItem(item) {
  if (!item || (item.type !== "image" && item.type !== "video") || typeof item.src !== "string") return false;
  const figure = document.createElement("figure");
  figure.className = "proof-item";
  const media = document.createElement(item.type === "video" ? "video" : "img");
  media.src = item.src;
  if (item.type === "video") {
    media.controls = true;
    media.preload = "metadata";
    media.controlsList = "nodownload noremoteplayback";
    media.disablePictureInPicture = true;
    media.disableRemotePlayback = true;
    media.addEventListener("contextmenu", (event) => event.preventDefault());
    if (item.poster) media.poster = item.poster;
  } else {
    media.loading = "lazy";
    media.alt = item.alt || item.title || "Project screenshot";
  }
  const caption = document.createElement("figcaption");
  const captionCopy = document.createElement("div");
  captionCopy.className = "proof-caption-copy";
  const heading = document.createElement("strong");
  heading.textContent = item.title || (item.type === "video" ? "Project recording" : "Project screenshot");
  captionCopy.append(heading, document.createTextNode(item.caption || ""));
  const enlargeButton = document.createElement("button");
  enlargeButton.className = "button button-outline proof-enlarge";
  enlargeButton.type = "button";
  enlargeButton.textContent = "Enlarge";
  enlargeButton.setAttribute("aria-label", `Enlarge ${item.type}: ${heading.textContent}`);
  enlargeButton.addEventListener("click", () => openViewer(item, enlargeButton));
  caption.append(captionCopy, enlargeButton);
  figure.append(media, caption);
  gallery.append(figure);
  return true;
}

function openViewer(item, trigger) {
  if (!viewer || !viewerBody) return;
  activeViewerTrigger = trigger;
  viewerTitle.textContent = item.title || (item.type === "video" ? "Project recording" : "Project screenshot");
  viewerCaption.textContent = item.caption || "";
  const media = document.createElement(item.type === "video" ? "video" : "img");
  media.src = item.src;
  if (item.type === "video") {
    media.controls = true;
    media.autoplay = true;
    media.preload = "metadata";
    media.controlsList = "nodownload noremoteplayback";
    media.disablePictureInPicture = true;
    media.disableRemotePlayback = true;
    media.addEventListener("contextmenu", (event) => event.preventDefault());
    if (item.poster) media.poster = item.poster;
  } else {
    media.alt = item.alt || item.title || "Project screenshot";
  }
  viewerBody.replaceChildren(media);
  viewer.showModal();
  viewerClose?.focus();
}

if (viewer && viewerClose) {
  viewerClose.addEventListener("click", () => viewer.close());
  viewer.addEventListener("click", (event) => {
    if (event.target === viewer) viewer.close();
  });
  viewer.addEventListener("close", () => {
    viewerBody?.querySelector("video")?.pause();
    viewerBody?.replaceChildren();
    activeViewerTrigger?.focus();
    activeViewerTrigger = null;
  });
}

if (!project) {
  document.title = "Project proof not found | Your Name";
  title.textContent = "Project proof not found";
  summary.textContent = "Choose a project from the portfolio to view its proof and media.";
  breadcrumb.textContent = "Not found";
  count.textContent = "";
  setEmptyState("This project link is not recognized. Return to the Projects section and choose a project.");
} else {
  document.title = `${project.title} | Project proof`;
  title.textContent = project.title;
  summary.textContent = project.summary;
  breadcrumb.textContent = project.title;
  backLink.href = `index.html#${project.backId}`;
  const validMedia = project.media.filter(addMediaItem);
  count.textContent = `${validMedia.length} ${validMedia.length === 1 ? "item" : "items"}`;
  if (validMedia.length === 0) {
    setEmptyState("No proof files have been added yet. Put project images or videos in assets/proof/ and register them in proof.js. Keep private data, credentials, and customer information out of published media.");
  }
}
