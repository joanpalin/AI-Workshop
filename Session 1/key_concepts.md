# Key Concepts — Session 1: AI Fundamentals

Keep this card open throughout the day. Every term used in the sessions is defined here. No one is expected to memorise any of this — use **Ctrl+F** (Windows) or **Cmd+F** (Mac) to find what you need.

---

## 1 · LLM — Large Language Model

**The analogy:** Imagine hiring an incredibly well-read assistant who has read virtually everything ever published on the internet — every technical manual, every research paper, every forum post, every news article — and can recall and combine that information on demand, in response to anything you ask. That is an LLM.

**What it is:** The AI brain itself. A system trained on vast amounts of text that can understand and generate human language. ChatGPT, Claude, Microsoft Copilot, and Gemini are all LLMs. Today you will run one directly on your laptop.

**The catch:** Knowledge has a cut-off date. The assistant has read everything up to a point in time — but nothing after, and nothing about your organisation unless you provide it.

**Why it matters at ARK Industries:** An LLM alone can answer general questions, but it knows nothing specific about ARK's network, policies, or infrastructure. The concepts that follow are how we change that.

---

## 2 · Tool

**The analogy:** Imagine your new assistant has arrived at their desk — brilliant and well-read, but sitting there with nothing to work with. You give them a phone so they can make calls. You give them a laptop with internet access so they can search for information. You give them a key to the filing cabinet so they can retrieve documents. Each one of those is a **Tool** — a specific capability that enables a specific action.

**What it is:** Anything the AI can call to get information or take an action. A web search, a file reader, a calendar, a network dashboard, an API. Tools are what turn a knowledge resource into an active assistant.

**Why it matters at ARK Industries:** Without tools, the AI can only reason. With tools, it can search the web for the latest firmware advisories, read ARK's own configuration files, and query the Meraki dashboard — all in a single conversation.

---

## 3 · Skill

**The analogy:** Once your assistant has access to the phone, the laptop, and the filing cabinet, you train them in a specific procedure: "When a P1 incident comes in, first check the ticketing system, then pull the affected device's status from the dashboard, then cross-reference the known vulnerabilities list, then draft a preliminary assessment for the team lead." That trained, repeatable procedure is a **Skill**.

**What it is:** A packaged, reusable combination of tools and instructions that teaches an AI how to complete a specific job from start to finish. Skills are not written by developers — they are defined by the people who know the workflow.

**Why it matters at ARK Industries:** A skill turns a capable AI generalist into a specialist who follows ARK's exact process, every time, without skipping a step. The expertise that defines the skill comes from the professional — not the AI.

---

## 4 · MCP — Model Context Protocol

**The analogy:** Before MCP existed, connecting an AI to a new tool was like arriving in a different country with the wrong plug. Every integration needed its own custom adaptor — expensive, slow, and fragile. MCP is the universal travel adaptor. Write the connection once; any MCP-compatible AI can use it immediately.

**What it is:** An open standard — free, not owned by any single company — that allows any AI model to connect securely to any compatible tool, data source, or service without bespoke engineering work for every connection. Think of it as the USB standard of AI integration.

**In practice today:** In Session 2, you will configure two MCP servers on your laptop: one that gives the AI access to live web search (Tavily), and one that gives it access to ARK Industries documents stored on your filesystem. No code written. No custom integration built.

**Why it matters at ARK Industries:** Cisco has built MCP-compatible interfaces into Meraki, ThousandEyes, and Webex. That means the AI assistant you build today could, with minimal additional setup, query your Cisco infrastructure directly in natural language.

---

## 5 · RAG — Retrieval-Augmented Generation

**The analogy:** Your well-read assistant is brilliant — but they have never seen ARK Industries' internal documents. RAG is the equivalent of handing them the relevant file and saying: "Read this first, then answer my question." Instead of guessing, they answer from your actual data.

**What it is:** A technique where the AI retrieves relevant information from your own documents before generating its response. The result is answers grounded in your real data, not the model's general training. "Look it up before you answer."

**In practice today:** In Session 3, you will upload ARK Industries' IT policy document into the AI assistant. When you ask a policy question, the AI reads the document first and answers from it — not from the internet, and not from guesswork.

**Why it matters at ARK Industries:** RAG is how you stop the AI from hallucinating answers about ARK's specific policies, configurations, and infrastructure. It turns a generic chatbot into an organisation-specific specialist.

---

## 6 · Context Window

**The analogy:** Picture a physical desk. When you start a conversation with an AI, you place your question on the desk. The AI's response goes on the desk. Any documents you share go on the desk. The desk has a fixed surface area. When it fills up, older items fall off the edge — and the AI can no longer see them.

**What it is:** The AI's short-term working memory — everything it can see and reason about in the current conversation. This includes your prompts, the conversation history, and any documents you have provided. Measured in *tokens* (roughly three-quarters of a word each).

**Overflow in plain English:** If a conversation runs for a very long time, or you share very large documents, earlier parts of the conversation may drop out of the context window. If the AI seems to "forget" something you said earlier, this is usually why.

**Why it matters at ARK Industries:** When working with large ARK policy documents or lengthy network reports, be aware that very long conversations may need to be refreshed. Starting a new conversation resets the desk to empty.

---

## 7 · System Prompt

**The analogy:** Before your assistant starts their first day, you sit down with them and give them their briefing: "Your role is Network Operations Specialist. You only discuss topics relevant to ARK Industries' IT infrastructure. You are precise, professional, and always flag uncertainty rather than guessing. You never share information outside this team." That briefing is the **System Prompt**.

**What it is:** Hidden instructions given to the AI before any conversation begins — its role, behaviour, tone, constraints, and communication style. The AI's standing job description. Participants never see it in normal use; it runs silently in the background.

**In practice today:** In Session 2, you will write a system prompt that gives your AI assistant a specific ARK Industries persona and a defined set of responsibilities. You will see exactly how much difference a well-written system prompt makes to the quality and consistency of responses.

**Why it matters at ARK Industries:** A system prompt is what turns a general-purpose AI model into a specialist tool aligned with ARK's needs, tone, and data governance requirements. It is where professional domain expertise is directly encoded into the AI's behaviour.

---

## 8 · Agentic AI

**The analogy:** Up to this point, your assistant answers questions. Agentic AI is the assistant who takes a goal and runs with it — searching, reading, reasoning, drafting, checking — working through a sequence of steps autonomously until the job is done, and coming back to you with a result rather than waiting for you to direct every step.

**What it is:** An AI that doesn't just answer questions — it takes a sequence of independent actions to complete a goal. It can plan, use tools, check its own progress, and adapt to what it finds, rather than waiting for a human to direct each move.

**Important distinction:** While, Session 2 uses Jan AI's Assistants for conversational Q&A, Agentic AI is the subject of Session 3. Both sessions use the same local model (Qwen3-4B). The shift between them is not about model size — it is about task type and application concept. Session 3 uses Jan AI's Projects, a purpose-built environment for agentic workflows where the agent plans and executes a full sequence of steps autonomously, rather than responding to individual questions..

**Why it matters at ARK Industries:** An agentic AI could be given a goal — "Produce a firmware compliance summary for all ARK Industries sites" — and complete the entire research, retrieval, analysis, and drafting process independently, presenting a finished result for human review.

---

## 9 · Human-in-the-Loop (HITL)

**The analogy:** Your agentic assistant has done the research, assembled the report, and is ready to send it to the senior team. But before hitting send, they stop and put it on your desk with a Post-it note: *"Ready to go. Please review and confirm."* The assistant waits. You are in the loop. Nothing consequential happens without your sign-off.

**What it is:** A structural design pattern where the AI agent pauses at a defined checkpoint and waits for a human to review and approve its output before continuing. The human retains full decision authority. This is not a workaround or a sign of AI immaturity — it is a deliberate, professional design choice.

**In practice today:** Human-in-the-Loop is the centrepiece of the Session 3 lab. You will build an agentic workflow with an explicit approval gate: the agent completes its research and drafts its output, then stops and waits. Nothing is finalised until you confirm.

**Why it matters at ARK Industries:** HITL is what makes agentic AI safe and deployable in a professional IT environment. The AI handles the time-consuming research and synthesis; the professional exercises judgement on the result. AI as a co-pilot — not an autopilot.

---

*Missing something? Flag it to the facilitator — we add questions to the next cohort's materials.*
