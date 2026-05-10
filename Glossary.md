# Glossary

Every acronym and bit of jargon we use during the workshop, in plain English. Keep this tab open — no one is expected to memorise any of this, and there's no such thing as a silly lookup.

Terms are grouped by theme, then alphabetical within each group. If you're looking for a specific acronym, use **Ctrl+F** (Windows) or **Cmd+F** (Mac) to jump straight to it.

---

## The Core AI Concepts

**Agent / Agentic AI** — An AI system that doesn't just answer a question and stop. It can take a goal, plan a sequence of steps, use tools to carry them out, check its own progress, and loop until the job is done. Think of an assistant that can actually *do* things, not just *tell* you things. Session 3 is entirely about this.

**Context Window** — How much text an LLM can "hold in its head" at once — your question, the documents it's reading, and its own answer, all combined. Measured in tokens. When you hear "the model forgot what we said earlier," it usually means the conversation overflowed the context window.

**Embedding** — A way of turning a chunk of text into a list of numbers that captures its meaning, so a computer can compare two pieces of text and tell how similar they are. This is the magic underneath RAG.

**Fine-tuning** — Taking an existing LLM and training it a bit further on your own data so it picks up your style or domain. We are **not** doing this today — RAG gets you 90% of the benefit with none of the cost or complexity.

**Hallucination** — When an LLM confidently makes something up that isn't true. It's not lying; it genuinely doesn't know the difference. This is exactly why we ground assistants in real documents (RAG) and keep a human in the loop.

**LLM (Large Language Model)** — The AI brain itself. A model trained on vast amounts of text that can generate human-like responses. Today we run models locally on your laptop and via the cloud — depending on the session, the model is chosen to give you the best balance of privacy, cost, and capability.

**Prompt** — What you type to the AI. "Write me an email about…" is a prompt. Good prompts are clear, specific, and give the model the context it needs.

**RAG (Retrieval-Augmented Generation)** — A technique where the AI first *retrieves* relevant information from your own documents, then *generates* an answer based on that. The result: answers grounded in your real data, not the model's general training. This is how we stop the assistant from making things up about ARK Industries.

**System Prompt** — The standing instructions you give the AI before any conversation starts: its role, its tone, what it should and shouldn't do. You'll write one in Session 2.

**Token** — The unit an LLM reads and writes in. Roughly three-quarters of a word. "Hello world" is about three tokens. You'll see this word in pricing pages and model limits.

---

## The Building Blocks We'll Use

**Filesystem MCP** — An official MCP server built and maintained by Anthropic that gives an AI assistant read (and optionally write) access to folders on your local machine. In Session 2, we use it so the assistant can read ARK Industries documents stored on your laptop. It is completely free and requires no account.

**HITL (Human-in-the-Loop)** — A workflow design where the AI pauses at a critical step and waits for a human to approve, edit, or reject its proposed action before continuing. This is the structural embodiment of our "AI as a Co-Pilot" North Star, and it's the centrepiece of the Session 3 lab.

**Jan AI** — A free, open-source desktop application for running AI models locally on your own laptop — no cloud required, no data leaving the building. In Session 2, we use Jan AI's **Assistants** feature: a saved configuration combining a system prompt, an MCP-connected model, and tool access, used for conversational Q&A. In Session 3, we use Jan AI's **Projects** feature: a purpose-built workspace that bundles an Assistant configuration and model into one environment for agentic workflows. One application; two distinct ways of working with AI.

**MCP (Model Context Protocol)** — An open standard that lets an AI assistant safely plug into external tools — your filesystem, a search engine, a Cisco Meraki dashboard, Gmail, anything. Think of it as a universal adapter: write the connection once, any MCP-compatible AI can use it. We'll configure two MCPs in Session 2.

**Node.js** — A lightweight, free software runtime that allows certain tools to run on your laptop. You won't write a single line of Node.js code today — we just need it installed so that Jan AI can load MCP servers in Session 2. Think of it as a quiet engine running in the background.

**Qwen3-4B** — The AI model we download into Jan AI for Sessions 2 and 3. Built by Alibaba's Qwen research team and fully open-source, it runs smoothly on a standard corporate laptop without a dedicated graphics card. "4B" refers to approximately four billion parameters — compact enough to run locally, capable enough for both conversational assistant tasks and agentic workflows.

**Tavily** — A web-search service designed specifically for AI assistants. Where a standard search engine gives you ten blue links, Tavily returns clean, summarised information the AI can read directly. It has a generous free tier (1,000 searches per month, email sign-up only, no credit card). We connect it to Jan AI via MCP in both Session 2 and Session 3 — your personal Tavily key from Session 2 carries over automatically.

**Tool (in an AI context)** — Anything the AI can call to get information or take an action — a search engine, a file reader, a calendar, an API. MCPs are how we give the AI tools.

---

## The Cisco AI Stack

**Cisco AI Access** — Cisco's solution for giving employees safe, governed access to approved AI tools, with visibility into who's using what. Covered in Session 4.

**Cisco AI Defense** — Cisco's solution for protecting AI applications themselves from threats like prompt injection, data leakage, and model abuse. Covered in Session 4.

**Cisco Meraki** — Cisco's cloud-managed networking platform. In Session 2, we connect an AI assistant to a Meraki MCP server so it can answer questions about a (fictional) ARK Industries network.

**ThousandEyes** — Cisco's internet and network visibility platform. Mentioned in Session 4 as part of the broader AI-ready infrastructure story.

**Webex** — Cisco's collaboration platform. Relevant as an integration target for AI assistants and agents.

---

## Security & Governance

**AUP (Acceptable Use Policy)** — A written policy that tells employees what they may and may not do with AI tools at work. You'll get a starter template in `05_takeaways/`.

**Guardrails** — Rules and filters that constrain what an AI is allowed to say or do. Can be built into the system prompt, enforced by a tool like AI Defense, or both.

**Prompt Injection** — An attack where someone hides malicious instructions inside content the AI reads (a webpage, a document, an email) to hijack its behaviour. One of the core threats covered in Session 4.

**Shadow AI** — Employees using AI tools without IT's knowledge or approval. The problem Cisco AI Access is designed to solve.

---

## ARK Industries

**ARK Industries** — The fictional company we use as the running example all day. An industrial conglomerate with a sprawling IT estate, realistic problems, and just enough messy documentation to make the labs feel real. Any reference to NorthGrid or Stark Industries in older materials means the same thing — treat them as legacy names.

---

**Missing something?** Flag it to the facilitator and we'll add it to this page for the next cohort.
