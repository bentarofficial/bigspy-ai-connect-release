<div align="center">

# BIGSPY AI Connect

### Meet Big Boss. Give your goal a team. Inspect the result.

**A local-first Windows workspace for AI models, project tasks, independent review and controlled execution.**

[![Windows](https://img.shields.io/badge/Windows-x64-003366?style=for-the-badge)](https://github.com/bentarofficial/bigspy-ai-connect-release/releases)
[![Public preview](https://img.shields.io/github/v/release/bentarofficial/bigspy-ai-connect-release?label=public%20preview&color=008080&style=for-the-badge)](https://github.com/bentarofficial/bigspy-ai-connect-release/releases/latest)
[![Languages](https://img.shields.io/badge/Language-EN%20%2F%20VI-7c3aed?style=for-the-badge)](#workspace-experience)

[**Product website**](https://bigspyai.com/bigspy-ai-connect/) · [**Windows downloads**](https://github.com/bentarofficial/bigspy-ai-connect-release/releases/latest) · [**Release notes**](https://github.com/bentarofficial/bigspy-ai-connect-release/releases/latest)

**Big Boss → Coordinator → Tasks → Reviewer → results back to Big Boss.**

</div>

> **Status: desktop preview 0.1.13 — published.** The latest public build is **v0.1.13**; see its [release notes](https://github.com/bentarofficial/bigspy-ai-connect-release/releases/tag/v0.1.13) for scope. Real-account acceptance remains open.

> **Role names:** Big Boss is the product’s signature assistant and your main point of contact. **Coordinator** (Điều phối) organizes the work; **Reviewer** (Kiểm tra chất lượng) checks the result in a separate review step. Resource Guardian keeps its name. Older installers and release notes may still show “Mini Boss” and “Cute Boss”; the source rename does not update an installed app.

**Explore:** [Why AI Connect](#why-ai-connect) · [Capabilities](#capability-matrix) · [AI team](#how-the-ai-team-works) · [Models](#connections-and-model-intelligence) · [Get started](#get-started) · [Roadmap](#development-direction) · [Support](#feedback-and-support) · [FAQ](#frequently-asked-questions)

## Download and installation

<!-- release-downloads:start -->
**Latest release: v0.1.13** — Windows x64 preview, unsigned · [Release notes](https://github.com/bentarofficial/bigspy-ai-connect-release/releases/tag/v0.1.13) · [All releases](https://github.com/bentarofficial/bigspy-ai-connect-release/releases)

| Package | Download | Size | Usage |
| :--- | :--- | :--- | :--- |
| **Setup.exe** | [`BIGSPY-AI-Connect-0.1.13-x64-Setup.exe`](https://github.com/bentarofficial/bigspy-ai-connect-release/releases/download/v0.1.13/BIGSPY-AI-Connect-0.1.13-x64-Setup.exe) | 118.1 MB | Install the Windows application. Supports in-app updates (Settings → Updates). |

SHA-256 — Setup: `cb03b2af69bab7212e6b2cd8a22a842a3f6deeccb735dd69e00a16f47e5fb5e4`
<!-- release-downloads:end -->

Install with Setup; updates arrive inside the app. Application data remains outside the install directory. Read the release-specific scope before relying on a tool. This repository distributes builds and public product information; source development is maintained separately.

## Why AI Connect

AI work becomes harder to manage when the request lives in one chat, the model choice in another tool, and the review in your memory. BIGSPY AI Connect gives that work a project, a task history and a visible checking process. Return to the original input, inspect the answer, see what Reviewer reviewed and continue the relevant work stream.

The product direction: explain the problem to **Big Boss**, let **Coordinator** coordinate the work, and inspect both the result and **Reviewer** findings. Big Boss can answer short questions directly or delegate work through the three-level structure, according to release scope. Task results travel back through Coordinator to the originating Big Boss conversation or paired Telegram channel.

| Focus | What it gives you |
| --- | --- |
| **Project context** | Separate projects, Coordinator sessions and task histories. |
| **Your connections** | Provider-specific readiness, model selection and a separate review step. |
| **Independent review** | Findings, bounded corrections and a report alongside the actual output. |
| **Local control** | Resource pressure handling, owned workers, persistence and backups. |
| **Visible progress** | Task events, provider-reported tokens and explicit waiting/error states. |

## Capability matrix

The published preview and current source have different scopes. Role names below use the new terminology; v0.1.12 retains its original labels. Live account/site acceptance varies by adapter.

| Capability | Published v0.1.12 | Later source / remaining work |
| --- | --- | --- |
| Big Boss, Coordinator chats and task workspace | Automatic delegation, task cards and formatted results | Further navigation and execution refinements |
| Files, images and website materials | Bounded desktop/Telegram inputs and public-page extraction | Provider/vision and real-account acceptance varies |
| Reviewer | Text review, bounded corrections and activity report | Browser/tool evidence review added in source; full outcome acceptance remains open |
| Browser and project sessions | Project sign-in reuse, routed requests, downloads and guarded actions | Live website acceptance and broader evidence checks remain open |
| Workspace, Git, commands, XLSX, Google and MCP | Scoped task tools with desktop approval | Specific live accounts/servers require acceptance |
| Model and effort | Release-specific configuration | Shared user-selected model/effort across Big Boss, Coordinator, Reviewer and tasks; Off blocks AI calls (UC.17) |
| Coding workbench | Release-specific file/Git tools | File mentions, repo rules, checks, background processes, worktrees and per-hunk change review implemented in source |
| Local knowledge and voice | Big Boss local memory | Second-brain/search/archive slices, local-model connection and voice tooling implemented; real runtime/device acceptance remains open |
| Long-running work | Bounded histories and tool loops | Durable context, compaction, checkpoints and recovery are P0 priorities; not fully accepted |

**[c]** in the source roadmap means implemented, awaiting real acceptance; **[x]** means the stated criteria were verified. Neither means the feature is in your installer.

## How the AI team works

~~~mermaid
flowchart TD
  U["User: goal or question"] <--> BB["Big Boss: intake and handoff"]
  BB -->|"Work request"| MB["Coordinator: coordinate and assign"]
  MB --> T["Tasks: scoped execution"]
  T --> CB["Reviewer: inspect output and evidence"]
  CB -->|"Findings and bounded corrections"| MB
  T -->|"Work output"| MB
  MB -->|"Results"| BB
  CB -->|"Review summary at handoff"| BB
  RG["Resource Guardian: local rules"] -->|"Scheduling signals"| MB
~~~

| Role | Responsibility | Boundary |
| --- | --- | --- |
| **Big Boss** | Intake, supported local system answers, outputs and review summaries. | Native popup and automatic intake; availability follows the installed release. |
| **Coordinator** | Coordinate tasks, reuse/create work streams, handle review findings. | Project context and granted capabilities. |
| **Task** | Execute with its connection, history and supported tools. | Release-specific tools and permissions. |
| **Reviewer** | Compare answer with request, report findings, recheck corrections. | Separate checking step using the shared model in current source; can miss errors. |
| **Resource Guardian** | Observe resources, regulate new work and owned workers. | Local rules, no AI call per measurement. |

### Review, correction and handoff

**Review loop:** task output → Reviewer findings → Coordinator corrections → recheck → Big Boss handoff.

Reviewer returns a verdict, checked items and severity-labelled findings. Failed findings go back for revision and recheck. Settings limit corrections to **0–3 rounds** and set a token threshold per input. Thresholds are checked between calls; a final call can exceed them. This is **not a hard monetary cap**. Review/correction consume additional provider fees or plan allowance.

Unreadable reviews, missing usage or exhausted limits preserve the answer and may show **Needs your decision**. Execution completion differs from accepted quality. Review activity is reported with the handoff, rather than continuously generating reports to Big Boss.

## Workspace experience

The main window has a project sidebar, Coordinator sessions and a task area. Big Boss is a separate movable, resizable popup. Show/Hide preserves its session without cancelling tasks. Adjust panels and switch sessions while keeping task context. Closing a tab closes its view; cancelling execution is separate.

English is the default UI, with **English / Tiếng Việt** in Settings. Agent reply language is separate. Light/dark appearance, local persistence and backup/restore help you continue work.

The workspace provides conversations at all three levels, a project-space drawer for outputs/folder browsing, and safe Markdown headings, tables, lists and code. Formatted Copy is intended for editors such as WordPress or Word; application-specific clipboard acceptance is still open.

### Controlled Browser work

The v0.1.12 release includes automatic Browser assignment with a persistent browser profile per project. Tasks reuse that project sign-in while cross-project sessions stay separate. Login, approval and clarification requests appear where the work was assigned: Big Boss, Coordinator or task. Only desktop decisions resume sensitive actions; Telegram announces the request. Password entry remains with the user. Live website/account acceptance is still open, including sites that restrict embedded browsers. Workspace process tools require desktop approval. Later source adds Browser evidence review; full real-site outcome acceptance remains open.

### Bring materials into the work

The v0.1.12 release includes file/image input in desktop chats; extraction and vision support depend on the format and provider. Bounded extraction covers text/code, CSV/JSON/HTML, DOCX, XLSX, PPTX and text-bearing PDF. Images depend on the model/bridge. Inputs allow **up to six files, 10 MB per file**; unsupported vision models use available text with a notice.

Linked website reading uses bounded HTTP/HTTPS GET requests and blocks private network addresses. Task and reviewer see the same extracted material as untrusted data. This differs from interactive browser work and grants no blanket account access.

## Connections and model intelligence


API adapters cover **Kyma, OpenAI, Anthropic, Gemini, OpenRouter, Groq, Ollama Cloud** and compatible endpoints. Keys have separate Windows-encrypted stores. Connection checks determine readiness; actual models, quotas and billing depend on your account. Published builds retain release-specific connection behavior. In current source, the user selects one shared model and effort for the whole agent; changing it applies to subsequent calls.

**ChatGPT/Codex** and **Claude Code** plan previews use official CLIs and native sign-in. They do not imply every native tool or subscription feature is available. Grok Build/Antigravity bridges remain planned. Provider terms and account access need validation for your setup.

Model profiles combine provider metadata with observed task experience: review outcomes, corrections, latency, errors and tokens. Refresh model lists as catalogues change. Promotional metadata is one ranking input, not proof the cheapest model suits the work.

Current source uses one shared **Low / Medium / High / Extra high / Max** effort choice, mapped to provider support. Big Boss, Coordinator, Reviewer and tasks use the user-selected model/effort. The choice is saved; **Off** blocks new AI calls. Changing it affects subsequent calls and preserves the running call and existing results. Specialist tools do not change that shared choice.

**Jev** is an experimental fast-decision layer with off/shadow/enabled modes, confidence gates, fallback and daily/monthly token controls. Public preview includes its options, but real protocol and effectiveness validation remain open. Synthetic evidence is not proof of real speed or cost savings.

## Telegram, resources and data

Pair a dedicated bot in **Settings → Channels** or Big Boss **⋯**. Test it, create a one-time code, send **/pair** with that code in private chat and confirm user/chat IDs on desktop. Public preview supports project/task commands and text results. The v0.1.12 release includes automatic delegation, photo/document intake (up to 10 MB), album grouping and notifications when work needs a desktop login, approval or answer. Results return to the originating paired channel.

The PC, app and Internet must stay running. Hide only hides the popup. Later source adds voice/file delivery slices awaiting live acceptance; a 24/7 relay remains planned. Remote input does not bypass desktop-only approvals.

![BIGSPY AI Connect Resource Guardian concept](https://bigspyai.com/wp-content/uploads/connect-local-control.png)

Guardian reduces new-task concurrency under RAM pressure and pauses new work at critical RAM/disk thresholds. Recovery thresholds prevent rapid toggling. It does not cancel running work simply to free memory or stop unrelated apps. Cleanup is restricted to protected Bigspy-owned temporary data.

Local-first keeps context and control on your machine. Cloud calls still send selected input, bounded history and review materials to configured providers. Browser content and attachments have scope/consent boundaries. Backups exclude API keys/tokens. Do not put secrets into shared knowledge or public reports.

## Get started

1. Open [public Windows downloads](https://github.com/bentarofficial/bigspy-ai-connect-release/releases/latest); download **Setup.exe**. Preview packages are unsigned.
2. Launch the app, select language and create a project with a local workspace.
3. Configure one AI connection and complete its inference check; checks may consume allowance.
4. Create a small AI task and inspect its output, Reviewer report and usage.
5. Optionally pair Telegram and review concurrency, Guardian, backup and update settings.

Installed apps update through **Settings → Updates** once task/input queues are clear. Data is outside the install directory and project files remain separate.

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
      Automatic delegation: v0.1.12
      Routed login and approvals: v0.1.12
    Quality
      Reviewer text review
      Bounded corrections
      Browser evidence review: later source
    Execution
      Browser and user Terminal
      Desktop materials: v0.1.12
      Guardian and recovery
~~~

| Next priority | Roadmap | Remaining work |
| --- | --- | --- |
| Reliable long-running work | TK.4a/b, TK.5a, TK.8a | Context provenance, compaction, durable execution/recovery and measured end-to-end acceptance. |
| Project browser and routed requests | AUTO.11/12, 2.6 | Implemented in newer source; live websites and accounts still need acceptance. |
| Usable inputs and outputs | AUTO.7/8/10/13, OUT/MI/TGF | Live desktop/Telegram attachment and clipboard tests, voice, diagrams and richer exports. |
| Budget and quality | UC.13/15, JEV.1/7, 3.5 | Work-level monetary controls and measured review/decision effectiveness. |
| Reusable knowledge and skills | BR, TK.4c, DS | Extend implemented local learning/search/archive slices; versioned accepted artifacts and scoped sharing remain open. |
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

The visible Terminal is user-controlled. Task workspace tools can edit files and run approved commands within configured grants; executables run with Windows user permissions, not a sandbox. Browser control follows release-specific boundaries.

### Does independent review guarantee correctness or lower costs?

No. Reviewer makes checking visible but can miss errors or flag valid output. Profiles/Jev need measured acceptance; no universal savings are guaranteed.

### Where do I report a problem or suggest an improvement?

Use [public Issues](https://github.com/bentarofficial/bigspy-ai-connect-release/issues) and the [suggestion board](https://github.com/bentarofficial/bigspy-ai-connect-release/blob/main/SUGGESTIONS.md). Include version, expected/actual behavior and a redacted reproduction. Never share keys, tokens, raw personal history or private paths.

---

<div align="center">

**BIGSPY AI Connect — give the work a place, and the result a review trail.**

[Website](https://bigspyai.com/bigspy-ai-connect/) · [Windows downloads](https://github.com/bentarofficial/bigspy-ai-connect-release/releases/latest) · [Contact](https://bigspyai.com/contact/)

</div>

