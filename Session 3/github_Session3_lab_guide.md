# Session 3 Lab Guide: The IT Policy Intelligence Agent

**Cisco AI Technical Workshop — London, 16 June 2026**

---

> **How to use this guide:** Follow every phase in order. Read each step before you take the action — most problems come from skipping ahead. Each phase ends with a "What you should see" confirmation so you know when to move on. If something goes wrong, go to [troubleshooting.md](troubleshooting.md) before raising your hand.
>
> **What you are building:** A working AI agent that searches the web, reads an internal document, reasons about the differences, and drafts a structured briefing for the ARK Industries CISO — pausing at a defined checkpoint for your review and approval before it finalises anything.

---

## Before You Begin — What You Need

Confirm all four of the following before Phase 1:

| Item | Where to Get It |
|---|---|
| **AnythingLLM Desktop installed** | Downloaded and installed during the lunch break — if not yet installed, go to `anythingllm.com/download` now and raise your hand so the facilitator can help you catch up |
| **Groq API key** | Displayed on the setup slide (Slide 3) — shared workshop key, valid for today |
| **Tavily API key** | Same key from Session 2 — also displayed on the setup slide |
| **`it-policy-summary.txt`** | In your ARK Industries file pack (USB stick or QR code download from this morning) |

> ⚠️ **Do not open or configure AnythingLLM before the facilitator begins Phase 1.** First-launch configuration is completed together so the whole room starts from the same point. If you have already opened it, close it now and wait for the facilitator's signal.

---

## A Note on the Architecture

In Session 2, you ran a small local model (Qwen 2.5 3B) on your own laptop, connected to files and the web via MCP servers. That model ran entirely on your own hardware.

Session 3 uses a different architecture, for a deliberate reason:

**AnythingLLM** is still a locally-installed desktop application — it runs on your laptop and stores your documents on your device. But the AI model it calls is **llama-3.3-70b-versatile**, running on **Groq's cloud servers**, accessed via an API key. Your prompts and document content are sent to Groq's server, the model processes them, and the response comes back over the internet.

This is a deliberate design choice, not a workaround. Multi-step autonomous tasks — where an agent needs to plan, search, read, and reason in sequence — currently require a larger model to execute reliably. A 3-billion-parameter local model is excellent for answering questions. A 70-billion-parameter cloud model is what makes reliable agentic task execution possible today.

**Document access** works differently too. In Session 2, the Filesystem MCP server connected the model to your files via a configuration file. In AnythingLLM, document access is built into the application natively — you upload a file into your workspace and AnythingLLM handles the rest. This is called **RAG (Retrieval-Augmented Generation)**. There is no MCP server involved, no configuration file to edit, and no terminal to open. AnythingLLM manages it all through its interface.

---

## The ARK Industries Scenario

You are a member of the IT team at **ARK Industries**, a UK-based advanced engineering company with 3,500 employees. The CISO has asked you to assess whether the company's security policies are aligned with the latest guidance from the **NCSC** — the National Cyber Security Centre, the UK government's authoritative body on cybersecurity.

Doing this manually — finding the right NCSC publications, reading them, cross-referencing the internal policy, writing up the gaps — takes two to three days.

Your agent is going to do it in under five minutes.

Your role throughout is to set the goal, watch the agent work, review its output, and decide whether it is good enough to approve. The agent handles the volume. You apply the judgement.

---

## The System Prompt — Copy This Before Phase 1

Before you configure the workspace, copy the system prompt below. This is the agent's instruction set — it defines its role, its task sequence, and — critically — the Human-in-the-Loop checkpoint where it stops and waits for your approval.

Select all the text in the box below and copy it. You will paste it into the workspace settings in Phase 6.

```
You are the IT Policy Intelligence Agent for ARK Industries.

ARK Industries is a UK-based advanced engineering company with
3,500 employees across 52 office and R&D locations. The IT team
manages a Cisco Meraki network estate, Cisco Webex for
communications, and a mix of cloud and on-premises systems.
Security and data privacy are top priorities.

Your role is to help the IT team research current best-practice
guidance, compare it against internal policies, identify gaps, and
draft structured briefings for the CISO and senior leadership.

When given a research task, work through it in this order:
1. Search the web for current, authoritative guidance on the topic
2. Read the ARK Industries policy document to understand the
   current internal position
3. Compare the external guidance against the internal policy and
   identify any gaps or missing controls
4. Draft a structured executive briefing summarising your findings
   and recommended next steps

IMPORTANT: When your draft is complete, do not finalise it
automatically. Instead, present it to the user and write exactly:

"DRAFT READY FOR REVIEW
Please read the above and type APPROVE to finalise, or tell me
what changes you would like."

Wait for the user's response before proceeding.

Format all briefings as follows:
- Gap Analysis: 5–8 bullet points
- Recommended Next Steps: 3–5 bullet points
- Write for a non-technical CISO audience — no jargon, clear
  business language
- Flag the top risk item with: ⚠ PRIORITY:
```

> 💡 This is plain English, not code. Every line is an instruction written in natural language. The `IMPORTANT` block at the end is what creates the Human-in-the-Loop pause — the agent is explicitly told not to finalise the output until you respond.

---

## Phase 1: Launch AnythingLLM Desktop

**Steps:**

1. Find AnythingLLM in your **Start menu** (Windows) or **Applications** folder (Mac)
2. Open the application
3. If this is your first time opening it, a setup wizard will appear — continue directly to Phase 2, which walks through the wizard step by step

**What you should see:** The AnythingLLM application opens. You are either looking at the setup wizard (first launch) or the main AnythingLLM screen with a sidebar and workspace area.

> ⚠️ If the application does not open at all, go to `troubleshooting.md` — section "AnythingLLM did not install."

---

## Phase 2: Create a New Workspace — "ARK Industries Agent"

A **workspace** in AnythingLLM is a contained environment with its own documents, system prompt, and agent settings. Think of it as a dedicated desk for a specific project. Everything you configure in this workspace stays here and does not affect other workspaces.

**Steps:**

1. On the main AnythingLLM screen, find the button or option to create a **New Workspace** — it is typically in the left-hand sidebar
2. Click it
3. When prompted for a name, type exactly:

```
ARK Industries Agent
```

4. Click **Create** (or equivalent — the button label may read "Create workspace" or show a tick icon)

**What you should see:** A new workspace named "ARK Industries Agent" appears in the sidebar. Clicking it opens a chat window on the right. The workspace is empty — no documents, no messages.

> ⚠️ If you accidentally named the workspace something else, you can rename it in the workspace settings (gear icon) before continuing. The exact name does not affect functionality — it is a label for your reference.

---

## Phase 3: Connect to Groq — Enter the Shared API Key and Select the Model

This is where you tell AnythingLLM which AI model to use. You are connecting to **Groq**, a cloud AI service, using a shared workshop API key. The model is **llama-3.3-70b-versatile** — a large, capable model specifically chosen because it can reliably execute multi-step agentic tasks.

**Steps:**

1. In the setup wizard, or in **Settings → LLM Provider** (accessible from the main menu or a settings icon), find and select **Groq** from the list of providers
2. In the **API Key** field, type or paste the key displayed on the setup slide. Enter it carefully — one incorrect character will produce an authentication error
3. Click **Load models** or the equivalent button — a dropdown list of available models will appear
4. From the list, select **llama-3.3-70b-versatile**
5. Click **Save** and continue

**What you should see:** After saving, the LLM provider shows as Groq and the model shows as llama-3.3-70b-versatile. No error message is displayed.

> ⚠️ **"Invalid API key" error:** Delete the key field completely and re-paste from the slide. A single extra space at the beginning or end of the key will cause this error.

> ⚠️ **`llama-3.3-70b-versatile` is not in the dropdown:** Click the refresh or reload button next to the model list. If the model still does not appear, select `llama3-70b-8192` as a fallback — it is a comparable model and the lab will work correctly.

> 💡 The shared API key is valid for today's workshop only. If you would like your own free key for personal use after today, create an account at `console.groq.com` — no credit card is required. Groq's free tier provides substantial usage for personal and small-team workflows.

---

## Phase 4: Enable Tavily Web Search in AnythingLLM Agent Skills

This phase gives your agent the ability to search the live web. Without this, the agent will answer from its training data only — which has a cutoff date and cannot retrieve current NCSC publications. **Tavily** is the same web search service you connected to in Session 2. You are re-using the same key.

> **Important:** AnythingLLM's document access is built into the application natively — it is **not** an MCP server, and you do not need to configure it separately. Once you upload a document into the workspace (Phase 5), AnythingLLM handles the connection automatically. Only web search requires a separate key.

**Steps:**

1. Inside your **ARK Industries Agent** workspace, find the **Settings** or gear icon — it is typically next to the workspace name in the sidebar or at the top of the workspace panel
2. Click it to open workspace settings
3. Navigate to **Agent Configuration** (it may also appear as "Agent Skills" depending on your version of AnythingLLM)
4. Find the **Web Search** option
5. Click the dropdown and select **Tavily**
6. In the API key field that appears, paste the Tavily key displayed on the setup slide
7. Click **Save**

**What you should see:** Web Search shows as enabled with Tavily selected and the key accepted. No error message is displayed.

> ⚠️ **Tavily does not appear in the Web Search dropdown:** Close the settings panel and reopen it. If Tavily still does not appear, check the AnythingLLM version — it should be v1.11.0 or later. If your version is older, look for an "Agent Skills" section rather than "Agent Configuration."

> ⚠️ **The web search toggle does not appear at all:** The Agent Configuration section is workspace-specific. Confirm you opened settings from within the ARK Industries Agent workspace, not from the top-level application settings.

---

## Phase 5: Upload the ARK Industries IT Policy Document

This phase embeds your company's IT policy into the workspace so the agent can read it during the task. This is **RAG — Retrieval-Augmented Generation**: instead of relying only on what the model learned during training, the agent will retrieve and reason over your specific document. The document is processed and stored within AnythingLLM on your device — it does not leave your machine independently of your prompts.

**Steps:**

1. Inside your **ARK Industries Agent** workspace, find the document upload area — this is typically a button labelled "Upload Document", a paperclip icon, or a drag-and-drop zone within the workspace panel
2. Locate `it-policy-summary.txt` on your laptop — this file is in the ARK Industries file pack you received this morning (USB stick or QR code download). It should be in the same folder as `network-report-site-A.txt` from Session 2
3. Upload the file by dragging it into the upload area or using the file picker
4. Wait for processing — you will see a status indicator. When complete, the file will show a tick, "Embedded", or similar confirmation

**What you should see:** `it-policy-summary.txt` appears in the workspace document list with an "Embedded" or tick status. This means AnythingLLM has processed the file and the agent can read it.

> ⚠️ **"Error embedding" or upload failure:** Confirm the file is `it-policy-summary.txt` in plain text format (.txt). If it is showing as a Word document (.docx) or similar, ask the facilitator for the correct file. If the error persists, open the file in Notepad (Windows) or TextEdit (Mac), select all the text, copy it, and paste it into AnythingLLM using a text-paste option if available.

> ⚠️ **Cannot find `it-policy-summary.txt`:** Raise your hand — the facilitator has a copy on USB. Do not proceed to Phase 6 without the document uploaded. The gap analysis will not work correctly without it.

---

## Phase 6: Set the Workspace System Prompt

The system prompt is the agent's hidden instruction set — it defines who the agent is, how it behaves, what sequence it follows, and when it stops to ask for your approval. You copied this text at the start of the lab guide. Now you paste it into the workspace settings.

> 💡 **What is a system prompt?** A system prompt is the instruction given to the AI before any conversation begins. It shapes everything about how the agent responds: its role, its constraints, its output format, and its behaviour at the Human-in-the-Loop checkpoint. You are writing the agent's job description.

**Steps:**

1. In your **ARK Industries Agent** workspace settings (same gear icon as Phase 4), find the **System Prompt** field — it is typically a large text box near the top of the settings panel
2. Click into the field and select all existing text (`Ctrl + A` on Windows, `Cmd + A` on Mac)
3. Delete the selected text
4. Paste the system prompt you copied earlier — the full block starting with "You are the IT Policy Intelligence Agent for ARK Industries." The text should fill several lines
5. Click **Save**

**What you should see:** The system prompt field contains the full ARK Industries agent prompt text. After saving, the settings panel closes or confirms the save.

> ⚠️ **The field appears empty after saving:** Re-open the settings and check. If the text has not persisted, paste it again and save. In some versions of AnythingLLM, you must click Save before navigating away — closing the panel without saving will discard changes.

> ⚠️ **Only part of the system prompt was pasted:** This sometimes happens if you copied from a printed page and the copy was incomplete. Return to the system prompt block at the top of this lab guide, select all the text in the fenced box from "You are the IT Policy Intelligence Agent" to "Flag the top risk item with: ⚠ PRIORITY:", copy it in full, and paste it again.

---

### Smoke Test — Confirm the Agent Is Ready

Before starting the main lab, confirm the setup is working:

1. Return to the main **ARK Industries Agent** workspace chat window
2. Type the following and press **Enter**:

```
Hello — are you the ARK Industries IT Policy Agent?
```

**What you should see:** A brief, in-character response confirming the agent's role — something like "Yes, I am the ARK Industries IT Policy Intelligence Agent, here to help the IT team..." If you receive a generic response that makes no mention of ARK Industries, the system prompt has not saved correctly — return to Phase 6.

> ✅ **Setup complete.** All four tools are in place: Groq model connected, Tavily web search active, IT policy document uploaded, system prompt saved. Proceed to Phase 7.

---

## Phase 7: Run the Agent — Iteration 1: Basic Policy Query

You are now ready to run the agent. This phase is the first full agentic run — you set the goal, the agent executes the task, and you observe the agentic loop in action.

**Step 1 — Confirm your tools are active**

Before sending the goal, do a quick check:

- **Web Search:** Go to workspace settings → Agent Configuration — Tavily should show as enabled
- **Document:** `it-policy-summary.txt` should appear in the workspace document list with an Embedded status

If either is missing, fix it now using Phases 4 or 5 before continuing.

**Step 2 — Send the goal**

In the **ARK Industries Agent** chat window, type or paste the following. This is your instruction to the agent. You are not asking a question — you are setting a task. Copy the entire block:

```
I need you to conduct a policy intelligence review for ARK Industries.

Please do the following:
1. Search the web for the latest NCSC guidance on AI security for
   enterprise organisations. Look for publications from 2024 or 2025.
2. Read our ARK Industries IT policy document.
3. Compare the NCSC guidance against our internal policy. Identify
   any gaps — controls or recommendations in the NCSC guidance that
   are not addressed in our current policy.
4. Draft an executive briefing for our CISO: findings, gaps, and
   prioritised next steps. Use the format from your instructions.

Work through each step in order and show me what you find at each stage.
```

Press **Enter**.

**Step 3 — Watch the agentic loop**

Do not type anything. Watch the interface.

You will see a sequence of thought chain banners appearing above the response text. Each banner shows exactly what the agent is doing at that moment. A typical sequence looks like this:

```
🔍 Searching web: "NCSC AI security guidance enterprise 2025"
   → [search results retrieved]

📄 Reading document: it-policy-summary.txt
   → [document content retrieved]

🧠 Comparing sources and identifying gaps...
   → [reasoning step — no tool call, internal planning]

✍️  Drafting executive briefing...
```

Each banner is one turn of the agentic loop: the agent observes the current state of the task, decides what action to take next, takes it, and observes what came back. You are watching Plan → Act → Observe → Plan again — made visible.

> ⚠️ **No thought chain banners appear and the agent answers immediately:** Your web search tool may not be active. Check Phase 4 — confirm Tavily is selected and the key is saved. You can also make the instruction more explicit by adding to your prompt: "Use the web search tool to find current NCSC AI security guidance." If thought chains still do not fire, go to `troubleshooting.md`.

> ⚠️ **The agent completes the web search but stops before reading the document:** Add this to the goal: "Do not write the briefing until you have completed both the web search AND read the ARK Industries policy document." This explicit sequencing instruction resolves most single-tool-call failures.

**Step 4 — Read the draft briefing**

The agent will produce a structured output: a gap analysis, recommended next steps, and a priority flag. Read it carefully.

Ask yourself:

- Does the gap analysis reference specific NCSC guidance by name or publication?
- Does it reference specific elements of the ARK Industries policy document?
- If both sources are mentioned, the agent has successfully synthesised two separate documents — a live web source and an internal file — something a standard AI chatbot cannot do without this kind of setup.

**What you should see:** A structured briefing with a Gap Analysis section (5–8 bullet points), a Recommended Next Steps section (3–5 bullet points), and at least one item flagged `⚠ PRIORITY:`. At the end, the agent displays the Human-in-the-Loop pause message (see Phase 9 below).

---

## Phase 8: Run the Agent — Iteration 2: Gap Analysis with Web Search

After the Human-in-the-Loop checkpoint in Phase 9, you will refine the task and run the agent again. This phase gives you the options for iteration — choose the one most relevant to your interests or write your own.

This is prompt engineering applied to agents. The quality of the agent's output is shaped by the precision and specificity of your goal. A better goal produces a more useful output. You are the author of both.

Choose one of the following options, or write your own in the same style. Paste your chosen option into the chat after completing Phase 9:

**Option A — Sharpen the focus:**

```
Good. Now refine the executive briefing to focus only on the
top 3 gaps. Rank them: Critical, High, or Medium risk.
Explain why each one is at that risk level.
```

**Option B — Change the framework:**

```
Re-run the comparison, but this time compare our ARK Industries
policy against ISO 27001 controls rather than NCSC guidance.
What are the top gaps from that perspective?
```

**Option C — Change the audience:**

```
Rewrite the executive briefing for a non-technical board of
directors audience. No acronyms, no technical terms. Pure
business risk language. Maximum 200 words.
```

**Option D — Add a risk dimension:**

```
Based on the gaps you identified, draft a short risk summary:
what is the realistic worst-case consequence for ARK Industries
if the top 3 gaps remain unaddressed for 12 months?
```

Watch the thought chain again as it runs. Notice whether the agent calls the web search tool a second time — it may not, because it already has the information from the first run. Notice how the output changes in response to the refinement. The agent adapts to the new goal while working from its existing knowledge of your documents.

---

## Phase 9: The Human-in-the-Loop Checkpoint

At the end of its briefing output, the agent will pause and display this message exactly:

```
DRAFT READY FOR REVIEW
Please read the above and type APPROVE to finalise, or tell me
what changes you would like.
```

**Do not type APPROVE yet.**

---

### This is the moment that matters.

The agent has done its research. It has searched the web for current NCSC guidance. It has read the ARK Industries IT policy document. It has reasoned about the differences between them. It has drafted a structured briefing with gap analysis, recommendations, and a priority flag.

Now it stops.

This pause is not a limitation of the technology. It is a structural design choice — a deliberate point where human judgement re-enters the process before the agent continues. It is called a **Human-in-the-Loop checkpoint**, and it is the architectural centrepiece of this entire session.

Your job at this moment is not to rubber-stamp the output. It is to apply the expertise the AI cannot have: your knowledge of your organisation's real risk tolerance, its political realities, the context behind the policy clauses, the relationships involved in getting a recommendation acted on. The agent has done the legwork. Now you make the call.

**Read the briefing. Apply your expertise. Ask yourself:**

- Does the gap analysis accurately represent the ARK Industries policy? Are there any gaps it has identified that are actually covered by the policy?
- Are the recommended next steps realistic for an organisation of ARK Industries' size and complexity?
- Is the priority flag on the right item — or would you rank the risks differently?
- Would you be comfortable sending this briefing to a real CISO?

**If you want to change something:** Type your specific feedback directly in the chat — for example, *"The second bullet in the gap analysis is incorrect — ARK Industries does cover endpoint encryption in Section 4. Please remove that item and re-rank the remaining gaps."* The agent will revise and present the updated draft for your review again.

**When you are satisfied:** Type `APPROVE` and press Enter.

The agent will proceed with the finalised output.

> 💡 **If the agent does not produce the HITL pause message:** The system prompt may not have saved correctly. Go to workspace settings, check that the full system prompt is present including the `IMPORTANT` block at the end, and save again. Then start a new chat in the workspace and re-run the goal prompt from Phase 7.

**What you should see:** After typing `APPROVE`, the agent confirms the briefing is finalised. You have completed a full end-to-end agentic workflow — research, synthesis, draft, human review, and approval.

---

### Save Your Work — Three Things to Capture Before Moving On

Before proceeding to Phase 10, take two minutes to save these items:

**1. A screenshot of the completed run**

Capture a screenshot showing the thought chain banners, the completed gap analysis, and the HITL pause message. This is evidence of a working agentic workflow.

- Windows: press `Windows + Shift + S` to open the Snipping Tool, select the area, and save to your desktop
- Mac: press `Cmd + Shift + 4`, drag to select the area, and the file saves to your desktop automatically

**2. The goal prompt**

Copy the goal text from Phase 7 Step 2 and paste it into a Notes app, email draft, or Word document. This is a reusable template — with minimal adjustment (swap ARK Industries for your own organisation, swap NCSC for a relevant framework), you can run the same workflow against your own policy documents next week.

**3. The system prompt**

Copy the system prompt from the grey block at the top of this lab guide and save it alongside the goal prompt. Together, these two texts are everything you need to recreate this agent in any AnythingLLM workspace.

---

## Phase 10: Complete the Agent Design Canvas for Your Own Use Case

Pick up the **Agent Design Canvas** printed worksheet on your table. This is your take-home planning tool — the bridge between today's lab and your first real agent deployment.

Turn to the person next to you. Work through two questions together for five minutes:

**Question 1:** What would you change about the goal prompt we used today to make the output more useful for your specific organisation? Think about your actual IT policies, the frameworks that matter to your compliance team, and the specific risks your CISO cares about.

**Question 2:** What is one task in your own role — not ARK Industries, your real role — that follows a predictable sequence of steps and ends with you reviewing and approving something? That is your first candidate for an agentic workflow.

**Fill in the canvas with your answers:**

| Canvas Section | What to Write |
|---|---|
| **1. Goal** | The task in one sentence: "The agent does X, then Y, then drafts Z for my approval." |
| **2. Trigger** | What starts it? A time, an event, a manual button press? |
| **3. Tools the agent needs** | What data sources or systems does it need to access? |
| **4. Steps in order** | List each action the agent takes, one line each |
| **5. Human approval point** | Where does the agent stop and wait? After which step? |
| **6. How I would use this** | Who benefits, and what problem does it solve? |

> 💡 Rough notes are fine. One sentence per box is enough to start. The purpose is to leave today with a concrete, specific plan — not an abstract idea. The Agent Design Canvas goes with you. The agent you designed in Session 2 stays on your laptop and works on Monday.

---

## What You Have Built

By completing this lab, you have:

- Configured a locally-installed AI agent application (AnythingLLM) to use a 70-billion-parameter cloud model (Groq)
- Connected the agent to a live web search tool (Tavily) — the same service you connected to this morning
- Embedded a private document into the agent's workspace using RAG — no MCP server, no configuration file, just a file upload
- Written and applied a system prompt that defines the agent's role, task sequence, and Human-in-the-Loop checkpoint
- Directed the agent using plain English goals to complete a multi-step autonomous task
- Observed the agentic loop — Plan → Act → Observe → Adapt — in real time through the thought chain interface
- Reviewed a draft output, applied your own professional judgement, and made the approval decision

Every one of these steps used only free tools, no code, and kept you — the human — in control of every decision that mattered.

---

## Reference: Key Terms for This Session

| Term | Plain-English Definition |
|---|---|
| **LLM** | Large Language Model — an AI system trained on vast amounts of text that can understand and generate human language. `llama-3.3-70b-versatile` is an LLM. |
| **Agentic AI** | An AI that does not just answer questions — it takes a sequence of independent actions (searching, reading, reasoning, drafting) to complete a goal, pausing for human approval at defined checkpoints. |
| **Human-in-the-Loop** | A structural design pattern where the agent stops and waits for a human to review and approve its output before continuing. The human retains decision authority. |
| **RAG** | Retrieval-Augmented Generation — the AI searches an external knowledge source (your uploaded document) before answering, grounding its response in your specific data rather than its training alone. |
| **System Prompt** | Hidden instructions given to the AI before any conversation begins — its role, behaviour, constraints, and output format. The AI's job description. |
| **Context Window** | The AI's short-term working memory — everything it can see at once: your goal, the conversation history, the web search results, and the document content retrieved via RAG. |
| **Thought Chain** | The visible sequence of steps the agent takes during a task — each banner in the AnythingLLM interface represents one turn of the agentic loop. |
| **Groq** | A cloud AI inference service providing fast, free-tier access to large open-source language models. No GPU, no credit card required for personal use. |

---

*If something is not working, go to [troubleshooting.md](troubleshooting.md) before raising your hand.*

---

*Cisco AI Technical Workshop — London, 16 June 2026*
*Session 3 of 4 — Building Agentic AI*
*Stack: AnythingLLM Desktop + Groq (llama-3.3-70b-versatile) + Tavily Web Search + ARK Industries RAG*
