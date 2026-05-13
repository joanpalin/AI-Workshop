# Session 3: Building Agentic AI

**Cisco AI Technical Workshop**

---

## Session Goal

By the end of this session you will have run an autonomous AI agent that researches, reasons, and drafts — and pauses at a defined checkpoint for your approval before continuing.

---

## Why This Session Is Different from Session 2

In Session 2, you used Jan AI's Assistant feature — a saved configuration with instructions and MCP tools — designed for back-and-forth conversation. You asked the AI a question; it answered. You directed each step individually.

Session 3 does something fundamentally different: you set a goal and the agent plans and executes a multi-step task on its own — searching the web, reading a policy document, reasoning about gaps, and drafting a briefing — without you steering each step individually. That is agentic AI.

**The tools are the same. The task is different.**

Session 3 uses the same two MCP servers you configured in Session 2 — Tavily for web search and Filesystem for document access. The `it-policy-summary.txt` file in your ARK Industries folder is the document the agent will read. No new MCP setup is needed.

What changes is the application concept. Session 3 uses Jan AI's **Projects** — a purpose-built workspace that bundles your Assistant configuration and your model into one dedicated environment for agentic workflows. You will create a new Project, link it to the IT Policy Intelligence Assistant you build in this session, and run the agent from there.

The key shift from Session 2 to Session 3 is not in the tools — it is in the task: instead of answering a question you ask it, the agent plans and executes a full workflow on its own, using those same tools in sequence.

---

## Tools in Use This Session

| Tool | What It Does | Where It Comes From |
|---|---|---|
| **Jan AI** | The AI agent application — Projects, Assistants, and chat interface in one place | Already installed from Session 2 |
| **Qwen3-4B** | The local AI model powering the agent | Already downloaded from Session 2 — no action needed |
| **Tavily MCP server** | Web search — the agent uses this to find current information online | Same configuration from Session 2 — no re-setup needed |
| **Filesystem MCP server** | Document access — the agent reads `it-policy-summary.txt` directly from your ARK Industries folder | Same configuration from Session 2 — no re-setup needed |

**What is RAG?**
RAG stands for Retrieval-Augmented Generation. Instead of relying only on what the model learned during training, RAG lets the AI retrieve and read a specific document before answering — grounding its response in your data. When the agent reads `it-policy-summary.txt` via the Filesystem MCP, it is using RAG.

**What is a Project?**
A Jan AI Project is a contained working environment with its own Assistant configuration and model selection. Think of it as a dedicated desk for a specific task — the right assistant and the right model, bundled together in one place, separate from your other chats and sessions.

---

## What You Need to Have Ready

Before the session begins, confirm the following:

| Item | Where to Get It | Status |
|---|---|---|
| **Jan AI open and Qwen3-4B loaded** | Already set up from Session 2 — no new installation needed | ☐ |
| **Tavily API key** | Same key from Session 2 — displayed on the setup slide if needed | ☐ |
| **`it-policy-summary.txt` in your ARK Industries folder** | In your ARK Industries file pack (USB stick or QR code) — save it in the same folder as `network-report-site-A.txt` | ☐ |

> ⚠️ **Confirm `it-policy-summary.txt` is in your ARK Industries folder before the session starts.** The agent reads this file via the Filesystem MCP server, which is already pointed at that folder from Session 2. If the file is not there, the agent will not find it. Ask a facilitator for a copy if needed.

> ⚠️ **Do not create a Project or configure anything before the session starts.** The setup steps are completed together as a guided block at the start of the session.

> ⚠️ **If Jan AI will not install on your machine:** Let a facilitator know.

---

## The Lab Scenario

You are working as an IT professional at **ARK Industries**, a technology-intensive enterprise managing a complex infrastructure environment.

ARK Industries has an internal IT policy (`it-policy-summary.txt`) that covers acceptable use, security standards, and compliance requirements. Your task is to configure an AI agent that:

1. Reads the ARK Industries IT policy document
2. Searches the web for the latest relevant guidance and threats
3. Identifies any gaps or areas where the policy may need updating
4. Drafts a concise briefing document summarising its findings

You will then review that draft and decide whether to approve it.

The lab guide walks you through every step. Follow it in sequence.

---

## The Most Important Moment in This Lab

The most important moment in this lab is not when the agent starts — it is when it stops and asks for your permission.

Part-way through its task, the agent will pause. It will have gathered information, reasoned about the policy, and drafted its output. Before it does anything further, it will wait for you to type **APPROVE** or **REJECT**.

That pause is called a **Human-in-the-Loop checkpoint**. It is not a limitation of the technology. It is a structural design pattern — a deliberate point where human judgement re-enters the process before the agent continues. The agent does the research; you make the call.

This is what the Co-Pilot principle looks like in practice.

---

## Documents to Follow

All documents for this session are available in the GitHub repository.

| Document | Purpose |
|---|---|
| **`lab_guide.md`** | Step-by-step instructions for the session lab — follow this during the hands-on activity |
| **`sample_goal_prompts.md`** | Ready-to-use goal prompts at Starter, Intermediate, and Advanced level for the iteration phases |
| **`jan_ai_assistant_system_prompt.md`** | The full system prompt with plain-English explanation of each section, and a blank adaptation template for your own use case |

---

## Key Terms for This Session

| Term | Plain-English Definition |
|---|---|
| **LLM** | Large Language Model — an AI system trained on vast amounts of text that can understand and generate human language. Qwen3-4B is an LLM. |
| **Agentic AI** | An AI that does not just answer questions — it takes a sequence of independent actions (searching, reading, reasoning, drafting) to complete a goal, pausing for human approval at defined checkpoints. |
| **Human-in-the-Loop** | A structural design pattern where the agent stops and waits for a human to review and approve its output before continuing. The human retains decision authority. |
| **RAG** | Retrieval-Augmented Generation — the AI retrieves and reads a specific document before answering, grounding its response in your data rather than its training alone. In this session, RAG happens via the Filesystem MCP reading `it-policy-summary.txt` from your ARK Industries folder. |
| **Instructions** | The configuration given to the AI before any conversation begins — its role, behaviour, constraints, and communication style. The AI's job description. |
| **Context Window** | The AI's short-term working memory — everything it can see at once: your instructions, the conversation history, web search results, and document content. |
| **Project** | A Jan AI working environment that bundles an Assistant configuration and a model into one dedicated workspace for agentic tasks. |
