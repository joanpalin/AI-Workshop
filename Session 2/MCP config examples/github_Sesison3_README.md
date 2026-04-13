# Session 3: Building Agentic AI

**Cisco AI Technical Workshop — London, 16 June 2026**

---

## Session Goal

By the end of this session you will have run an autonomous AI agent that researches, reasons, and drafts — and pauses at a defined checkpoint for your approval before continuing.

---

## Why This Session Is Different from Session 2

In Session 2, we ran a small local model (Qwen 2.5 3B) on your own machine, connected to your files and the web via MCP servers. That approach is powerful for answering questions, retrieving information, and augmenting a conversation with real data.

Session 3 does something fundamentally different: it asks the AI to plan and execute a multi-step task on its own — searching the web, reading a policy document, reasoning about gaps, and drafting a briefing — without you steering each step individually. That is agentic AI.

**Here is why the architecture changes:**

> In Session 2, we ran a small local model. In Session 3, we are connecting to a much larger cloud model via Groq. Here is why: small local models are excellent for answering questions with your files. Multi-step autonomous tasks — where the AI needs to plan, search, read, and reason in sequence — currently need a larger model to do reliably. Today we are using **llama-3.3-70b-versatile** via Groq's free API.

This is a deliberate architectural choice, not a workaround. The shift from a 3-billion-parameter local model to a 70-billion-parameter cloud model is what makes reliable autonomous task execution possible with today's technology. As local models improve, this boundary will shift — but for now, cloud capacity is where agentic performance lives.

Session 3 also does **not** use MCP servers. AnythingLLM handles document access through its own built-in document workspace — you upload a file and the application manages it natively. Web search runs through AnythingLLM's built-in Web Search skill, re-using the same Tavily key from Session 2. The result is a simpler setup that still demonstrates the full agentic loop.

---

## Tools in Use This Session

| Tool | What It Does | Where It Comes From |
|---|---|---|
| **AnythingLLM Desktop** | The AI agent application you interact with — workspace, agent, and document upload all in one place | Installed during the lunch break (`anythingllm.com/download`) |
| **Groq cloud API — llama-3.3-70b-versatile** | The large-language model powering the agent — hosted in Groq's cloud, called via API | Shared workshop key displayed on the setup slide |
| **Tavily** | Web search — the agent uses this to find current information online | Same key as Session 2, re-entered during setup |
| **AnythingLLM native document RAG** | Lets the agent read and reason over the ARK Industries IT policy file you upload | Built into AnythingLLM — this is **not** an MCP server |

**What is RAG?**
RAG stands for Retrieval-Augmented Generation. Instead of relying only on what the model learned during training, RAG lets the AI search a specific document before answering — grounding its response in your data. When the agent reads `it-policy-summary.txt`, it is using RAG.

**What is Groq?**
Groq is a cloud inference platform that provides fast, free-tier access to large open-source language models. No GPU, no credit card, and no enterprise licence is required. The workshop provides a shared API key. After today, you can create your own free Groq account at `console.groq.com`.

---

## What You Need to Have Ready

Before the session begins at 1:00 p.m., confirm the following:

| Item | Where to Get It | Status |
|---|---|---|
| **AnythingLLM Desktop installed** | Downloaded and installed during the lunch break — if you have not done this, raise your hand now | ☐ |
| **Groq API key** | Displayed on the setup slide (Slide 3) — shared workshop key, valid for today | ☐ |
| **Tavily API key** | Same key you used in Session 2 — also displayed on the setup slide | ☐ |
| **`it-policy-summary.txt`** | ARK Industries IT policy file — on your USB stick or downloaded via QR code | ☐ |

> ⚠️ **Do not open or configure AnythingLLM before 1:00 p.m.** The first-launch configuration is completed together as a guided 10-minute block at the start of the session. If you open it early and step through the wizard on your own, you may need to reset the application.

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

| Document | Purpose |
|---|---|
| **`lab_guide.md`** | Step-by-step instructions for the session lab — follow this during the hands-on activity |
| **`troubleshooting.md`** | Fixes for the most common failures — check here before raising your hand |
| **Agent Design Canvas** | Printed worksheet on your table — fill this in during the lab to plan your own agentic workflow back at your organisation |

---

## Key Terms for This Session

| Term | Plain-English Definition |
|---|---|
| **LLM** | Large Language Model — an AI system trained on vast amounts of text that can understand and generate human language. llama-3.3-70b-versatile is an LLM. |
| **Agentic AI** | An AI that does not just answer questions — it takes a sequence of independent actions (searching, reading, reasoning, drafting) to complete a goal, pausing for human approval at defined checkpoints. |
| **Human-in-the-Loop** | A structural design pattern where the agent stops and waits for a human to review and approve its output before continuing. The human retains decision authority. |
| **RAG** | Retrieval-Augmented Generation — the AI searches an external knowledge source before answering, grounding its response in your specific data rather than its training alone. |
| **System Prompt** | Hidden instructions given to the AI before any conversation begins — its role, behaviour, constraints, and communication style. The AI's job description. |
| **Context Window** | The AI's short-term working memory — everything it can see at once: your instructions, the conversation history, and any documents you have provided. |

---

*Cisco AI Technical Workshop — London, 16 June 2026*
*Session 3 of 4 — Building Agentic AI*
