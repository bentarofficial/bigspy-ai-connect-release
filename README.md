<div align="center">

# BIGSPY AI Connect

### One goal. A coordinated AI team. Results you can inspect.

**A local-first Windows workspace for AI models, project tasks, independent review and controlled execution.**

[![Windows](https://img.shields.io/badge/Windows-x64-003366?style=for-the-badge)](https://github.com/bentarofficial/bigspy-ai-connect-release/releases)
[![Public preview](https://img.shields.io/github/v/release/bentarofficial/bigspy-ai-connect-release?label=public%20preview&color=008080&style=for-the-badge)](https://github.com/bentarofficial/bigspy-ai-connect-release/releases/latest)
[![Languages](https://img.shields.io/badge/Language-EN%20%2F%20VI-7c3aed?style=for-the-badge)](#workspace-experience)

[**Product website**](https://bigspyai.com/bigspy-ai-connect/) · [**Windows downloads**](https://github.com/bentarofficial/bigspy-ai-connect-release/releases/latest) · [**Release notes**](https://github.com/bentarofficial/bigspy-ai-connect-release/releases/latest)

![BIGSPY AI Connect architecture with Big Boss, Mini Boss, tasks, Cute Boss and Resource Guardian](https://bigspyai.com/wp-content/uploads/connect-architecture-v2.png)

*Architecture concept illustration. Some relationships describe the development direction; see the capability matrix.*

</div>

> **Status: desktop preview 0.1.12 — published.** The latest public build is **v0.1.12**; see its [release notes](https://github.com/bentarofficial/bigspy-ai-connect-release/releases/tag/v0.1.12) for scope. Real-account acceptance remains open.

**Explore:** [Why AI Connect](#why-ai-connect) · [Capabilities](#capability-matrix) · [AI team](#how-the-ai-team-works) · [Models](#connections-and-model-intelligence) · [Get started](#get-started) · [Roadmap](#development-direction) · [Support](#feedback-and-support) · [FAQ](#frequently-asked-questions)

## Download and installation

<!-- release-downloads:start -->
**Latest release: v0.1.12** — Windows x64 preview, unsigned · [Release notes](https://github.com/bentarofficial/bigspy-ai-connect-release/releases/tag/v0.1.12) · [All releases](https://github.com/bentarofficial/bigspy-ai-connect-release/releases)

| Package | Download | Size | Usage |
| :--- | :--- | :--- | :--- |
| **Setup.exe** | [`BIGSPY-AI-Connect-0.1.12-x64-Setup.exe`](https://github.com/bentarofficial/bigspy-ai-connect-release/releases/download/v0.1.12/BIGSPY-AI-Connect-0.1.12-x64-Setup.exe) | 112.6 MB | Install the Windows application. Supports in-app updates (Settings → Updates). |

SHA-256 — Setup: `2345148c8a55831e89e18293bd67e086c11147f3e71411371ce9dd726a930a2c`
<!-- release-downloads:end -->

Install with Setup for in-app updates, or run Portable and update manually. Application data remains outside the install directory. Read the release-specific scope before relying on a tool. This repository distributes builds and public product information; source development is maintained separately.

## Why AI Connect

AI work becomes harder to manage when the request lives in one chat, the model choice in another tool, and the review in your memory. BIGSPY AI Connect gives that work a project, a task history and a visible checking process. Return to the original input, inspect the answer, see what Cute Boss reviewed and continue the relevant work stream.

The product direction: explain the problem to **Big Boss**, let **Mini Boss** coordinate the work, and inspect both the result and **Cute Boss** findings. Newer source can answer short questions directly or delegate work through the three-level structure. Task results travel back through Mini Boss to the originating Big Boss conversation or paired Telegram channel.

| Focus | What it gives you |
| --- | --- |
| **Project context** | Separate projects, Mini Boss sessions and task histories. |
| **Your connections** | Provider-specific readiness, model selection and an independently configured reviewer. |
| **Independent review** | Findings, bounded corrections and a report alongside the actual output. |
| **Local control** | Resource pressure handling, owned workers, persistence and backups. |
| **Visible progress** | Task events, provider-reported tokens and explicit waiting/error states. |

## Capability matrix

**Public preview** means included in published v0.1.11 scope, with provider/site acceptance varying. **Newer source** means implemented with test/smoke evidence but awaiting relevant real-world acceptance. **Planned** means open roadmap work.

| Capability | Public v0.1.11 | Newer source / remaining work |
| --- | --- | --- |
| Projects, Mini Boss/task tabs, native Big Boss popup | Included | Separate chats, project-space drawer and navigation refinements. |
| Provider API cards and official CLI plan previews | Included | Five effort levels and improved native model labels. |
| Cute Boss text review, corrections and separate report | Included | Rich output rendering; full browser outcome review remains planned. |
| Browser/Terminal tools per task | Included | Refined layouts, approved downloads and extension work; live acceptance varies. Terminal remains user-controlled. |
| Task-operated Browser | Per-tab control switch; desktop input; up to 30 steps | Automatic assignment and project sign-in reuse implemented in newer source (AUTO.11/12), awaiting live site/account acceptance. |
| Model/work profiles; Jev options | Included; Jev off by default | Real protocol/effectiveness gates still open. No universal savings claim. |
| Telegram private text and local results | Included | Automatic Big Boss flow, photo/document intake and desktop-request notifications in newer source (AUTO.4/9); live bot acceptance open. |
| Automatic Big Boss → Mini Boss → task delegation | Not in this public build | AUTO.1–3 implemented; up to four assignments per Mini Boss response. |
| Linked website materials | Not in this public build | AUTO.7 extracts bounded public-page text for task and reviewer. |
| Desktop files/images and formatted copy | Not in this public build | AUTO.8/10/13 implemented; model/clipboard acceptance open. |
| Shared accepted knowledge, voice, work-level money budgets, self-improvement PRs | Planned | DS, MI, UC.13 and Phase 6. |

The source roadmap is authoritative. Its **[c]** marker means code completed, awaiting real acceptance; **[x]** means the stated criteria were verified. Neither marker alone means a feature is in an installer.

## How the AI team works

~~~mermaid
flowchart TD
  U["User: goal or question"] <--> BB["Big Boss: intake and handoff"]
  BB -->|"Work request"| MB["Mini Boss: coordinate and assign"]
  MB --> T["Tasks: scoped execution"]
  T --> CB["Cute Boss: inspect output and evidence"]
  CB -->|"Findings and bounded corrections"| MB
  T -->|"Work output"| MB
  MB -->|"Results"| BB
  CB -->|"Review summary at handoff"| BB
  RG["Resource Guardian: local rules"] -->|"Scheduling signals"| MB
~~~

| Role | Responsibility | Boundary |
| --- | --- | --- |
| **Big Boss** | Intake, supported local system answers, outputs and review summaries. | Native popup; automatic intake is newer source. |
| **Mini Boss** | Coordinate tasks, reuse/create work streams, handle review findings. | Project context and granted capabilities. |
| **Task** | Execute with its connection, history and supported tools. | Release-specific tools and permissions. |
| **Cute Boss** | Compare answer with request, report findings, recheck corrections. | Can miss errors; full browser outcome review is not complete. |
| **Resource Guardian** | Observe resources, regulate new work and owned workers. | Local rules, no AI call per measurement. |

### Review, correction and handoff

![BIGSPY AI Connect animated request, execution, review and handoff loop](https://bigspyai.com/wp-content/uploads/connect-review-loop.gif)

*Workflow explanation, not a recording of a live app run.*

Cute Boss returns a verdict, checked items and severity-labelled findings. Failed findings go back for revision and recheck. Settings limit corrections to **0–3 rounds** and set a token threshold per input. Thresholds are checked between calls; a final call can exceed them. This is **not a hard monetary cap**. Review/correction consume additional provider fees or plan allowance.

Unreadable reviews, missing usage or exhausted limits preserve the answer and may show **Needs your decision**. Execution completion differs from accepted quality. Review activity is reported with the handoff, rather than continuously generating reports to Big Boss.

## Workspace experience

The main window has a project sidebar, Mini Boss sessions and a task area. Big Boss is a separate movable, resizable popup. Show/Hide preserves its session without cancelling tasks. Adjust panels and switch sessions while keeping task context. Closing a tab closes its view; cancelling execution is separate.

English is the default UI, with **English / Tiếng Việt** in Settings. Agent reply language is separate. Light/dark appearance, local persistence and backup/restore help you continue work.

Newer source adds conversations at all three levels, a project-space drawer for outputs/folder browsing, and safe Markdown headings, tables, lists and code. Formatted Copy is intended for editors such as WordPress or Word; application-specific clipboard acceptance is still open.

### Controlled Browser work

Newer source can assign Browser work automatically, using one persistent browser profile per project. Tasks reuse that project sign-in while cross-project sessions stay separate. Login, approval and clarification requests appear where the work was assigned: Big Boss, Mini Boss or task. Only desktop decisions resume sensitive actions; Telegram announces the request. Password entry remains with the user. Live website/account acceptance is still open, including sites that restrict embedded browsers. Terminal automation and full Cute Boss Browser review remain planned.

### Bring materials into the work

Newer source supports file selection, drag/drop and pasted images in desktop chats. Bounded extraction covers text/code, CSV/JSON/HTML, DOCX, XLSX, PPTX and text-bearing PDF. Images depend on the model/bridge. Inputs allow **up to six files, 10 MB per file**; unsupported vision models use available text with a notice.

Linked website reading uses bounded HTTP/HTTPS GET requests and blocks private network addresses. Task and reviewer see the same extracted material as untrusted data. This differs from interactive browser work and grants no blanket account access.

## Connections and model intelligence

![BIGSPY AI Connect provider, task model and reviewer concept](https://bigspyai.com/wp-content/uploads/connect-model-selection.png)

API adapters cover **Kyma, OpenAI, Anthropic, Gemini, OpenRouter, Groq, Ollama Cloud** and compatible endpoints. Keys have separate Windows-encrypted stores. Connection checks determine readiness; actual models, quotas and billing depend on your account. A changed default does not silently reroute existing task connections.

**ChatGPT/Codex** and **Claude Code** plan previews use official CLIs and native sign-in. They do not imply every native tool or subscription feature is available. Grok Build/Antigravity bridges remain planned. Provider terms and account access need validation for your setup.

Model profiles combine provider metadata with observed task experience: review outcomes, corrections, latency, errors and tokens. Refresh model lists as catalogues change. Promotional metadata is one ranking input, not proof the cheapest model suits the work.

Newer source offers **Low / Medium / High / Extra high / Max** effort levels, mapped to supported provider options. Tasks retain their choices; a Mini Boss suggestion does not override an explicit user setting. Unsupported levels may be reduced or omitted.

**Jev** is an experimental fast-decision layer with off/shadow/enabled modes, confidence gates, fallback and daily/monthly token controls. Public preview includes its options, but real protocol and effectiveness validation remain open. Synthetic evidence is not proof of real speed or cost savings.

## Telegram, resources and data

Pair a dedicated bot in **Settings → Channels** or Big Boss **⋯**. Test it, create a one-time code, send **/pair** with that code in private chat and confirm user/chat IDs on desktop. Public preview supports project/task commands and text results. Newer source adds automatic delegation, photo/document intake (up to 10 MB), album grouping and notifications when work needs a desktop login, approval or answer. Results return to the originating paired channel.

The PC, app and Internet must stay running. Hide only hides the popup. Telegram voice, richer result delivery and a 24/7 relay remain planned. Remote input does not bypass desktop-only approvals.

![BIGSPY AI Connect Resource Guardian concept](https://bigspyai.com/wp-content/uploads/connect-local-control.png)

Guardian reduces new-task concurrency under RAM pressure and pauses new work at critical RAM/disk thresholds. Recovery thresholds prevent rapid toggling. It does not cancel running work simply to free memory or stop unrelated apps. Cleanup is restricted to protected Bigspy-owned temporary data.

Local-first keeps context and control on your machine. Cloud calls still send selected input, bounded history and review materials to configured providers. Browser content and attachments have scope/consent boundaries. Backups exclude API keys/tokens. Do not put secrets into shared knowledge or public reports.

## Get started

1. Open [public Windows downloads](https://github.com/bentarofficial/bigspy-ai-connect-release/releases/latest); choose **Setup** or **Portable**. Preview packages are unsigned.
2. Launch the app, select language and create a project with a local workspace.
3. Configure one AI connection and complete its inference check; checks may consume allowance.
4. Create a small AI task and inspect its output, Cute Boss report and usage.
5. Optionally pair Telegram and review concurrency, Guardian, backup and update settings.

Installed apps update through **Settings → Updates** once task/input queues are clear. Portable builds update manually. Data is outside the install directory and project files remain separate.

## Development direction

~~~mermaid
mindmap
  root((BIGSPY AI Connect))
    Context
      Project and task history
      Model and work profiles
      Accepted knowledge board: planned
    Coordination
      Three-level conversations
      Automatic delegation: newer source
      Routed login and approvals: newer source
    Quality
      Cute Boss text review
      Bounded corrections
      Browser evidence review: planned
    Execution
      Browser and user Terminal
      Desktop materials: newer source
      Guardian and recovery
~~~

| Next priority | Roadmap | Remaining work |
| --- | --- | --- |
| Automatic workflow acceptance | AUTO.1–4, UC.3/10 | Real connections/return delivery; multi-task synthesis (AUTO.5). |
| Project browser and routed requests | AUTO.11/12, 2.6 | Implemented in newer source; live websites and accounts still need acceptance. |
| Usable inputs and outputs | AUTO.7/8/10/13, OUT/MI/TGF | Live desktop/Telegram attachment and clipboard tests, voice, diagrams and richer exports. |
| Budget and quality | UC.13/15, JEV.1/7, 3.5 | Work-level monetary controls and measured review/decision effectiveness. |
| Shared project knowledge | DS, PS.2/3 | Versioned accepted artifacts, dependencies, scoped cross-project access. |
| Controlled self-improvement | Phase 6 | Branches/PRs, approval, regression checks and rollback. |

These are development directions, not promises of availability in today's installer.

## Feedback and support

Report reproducible problems in [Issues](https://github.com/bentarofficial/bigspy-ai-connect-release/issues), or follow the [suggestion board](SUGGESTIONS.md). Settings → Suggestions lets you preview a redacted proposal before you choose to open GitHub and submit it yourself. Feedback is not uploaded silently.

Include the app version, expected behavior, what happened and a minimal redacted example. Never publish API keys, bot tokens, private account details or raw task histories. For product and collaboration questions, visit [BIGSPY AI](https://bigspyai.com/contact/).

## Frequently asked questions

### Is this a browser service or an offline chatbot?

It is a Windows desktop workspace. The website introduces the product; Big Boss needs the native bridge. Cloud models need connectivity. Local-first does not promise offline inference.

### Does the downloaded app contain everything on main?

No. Check public release notes and the capability matrix. Source implementations can still need live account/bot/machine acceptance and may not be packaged.

### Can AI run arbitrary Terminal commands or edit all files?

No general capability is promised. Terminal is user-controlled; automatic editing, broader permissions and Git self-improvement remain scoped roadmap work. Browser control follows release-specific boundaries.

### Does independent review guarantee correctness or lower costs?

No. Cute Boss makes checking visible but can miss errors or flag valid output. Profiles/Jev need measured acceptance; no universal savings are guaranteed.

### Where do I report a problem or suggest an improvement?

Use [public Issues](https://github.com/bentarofficial/bigspy-ai-connect-release/issues) and the [suggestion board](https://github.com/bentarofficial/bigspy-ai-connect-release/blob/main/SUGGESTIONS.md). Include version, expected/actual behavior and a redacted reproduction. Never share keys, tokens, raw personal history or private paths.

---

<div align="center">

**BIGSPY AI Connect — give the work a place, and the result a review trail.**

[Website](https://bigspyai.com/bigspy-ai-connect/) · [Windows downloads](https://github.com/bentarofficial/bigspy-ai-connect-release/releases/latest) · [Contact](https://bigspyai.com/contact/)

</div>
