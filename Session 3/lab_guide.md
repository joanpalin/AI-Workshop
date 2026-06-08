# Session 3 Lab Guide: The IT Policy Intelligence Agent

**Cisco AI Technical Workshop**

---

> **How to use this guide:** Follow every phase in order. Read each step before you take the action — most problems come from skipping ahead. Each phase ends with a "What you should see" confirmation so you know when to move on. If something goes wrong, raise your hand and let a facilitator know.
>
> **What you are building:** A working AI agent that searches the web, reads an internal document from your laptop, reasons about the differences, and drafts a structured briefing for the ARK Industries CISO — pausing at a defined checkpoint for your review and approval before it finalises anything.

---

## Before You Begin — What You Need

Confirm all three of the following before Phase 1:

| Item | Where to Get It |
|---|---|
| **Jan AI open and Qwen3-4B loaded** | Already set up from Session 2 — no new installation needed |
| **Tavily API key** | Same key from Session 2 — displayed on the setup slide if needed |
| **`it-policy-summary.txt` in your ARK Industries folder** | In your ARK Industries file pack (USB stick or QR code) — it should be in the same folder as `network-report-site-A.txt` from Session 2 |

> ⚠️ **Confirm `it-policy-summary.txt` is in your ARK Industries folder now.** The agent reads this file via the Filesystem MCP server, which is already pointed at that folder from Session 2. If the file is missing, raise your hand — a facilitator has a copy.

---

## A Note on the Architecture

In Session 2, you used Jan AI's **Assistant** feature — a saved configuration with a system prompt and MCP tools, used for back-and-forth conversation. You asked a question; the AI answered. You directed each step.

Session 3 uses the same tools but in a different mode. The Tavily MCP gives the agent live web search. The Filesystem MCP gives the agent read access to your ARK Industries folder — including `it-policy-summary.txt`. Both are already configured from Session 2.

The shift from Session 2 to Session 3 is not about different tools — it is about a different kind of task. In Session 2, you asked questions. In Session 3, you set a goal and watch the agent plan and execute the work on its own, using those same MCP tools in sequence.

---

## The ARK Industries Scenario

You are a member of the IT team at **ARK Industries**, a UK-based advanced engineering company with 3,500 employees. The CISO has asked you to assess whether the company's security policies are aligned with the latest guidance from the **NCSC** — the National Cyber Security Centre, the UK government's authoritative body on cybersecurity.

Doing this manually — finding the right NCSC publications, reading them, cross-referencing the internal policy, writing up the gaps — takes two to three days.

Your agent is going to do it in under five minutes.

Your role throughout is to set the goal, watch the agent work, review its output, and decide whether it is good enough to approve. The agent handles the volume. You apply the judgement.

---

## The Instructions — Copy This Before Phase 1

Before you configure the Assistant, copy the system prompt below. This is the agent's instruction set — it defines its role, its task sequence, and — critically — the Human-in-the-Loop checkpoint where it stops and waits for your approval.

Select all the text in the box below and copy it. You will paste it into the Assistant settings in Phase 2.

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
2. Read the ARK Industries policy document from the filesystem
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

> 💡 This is plain English, not code. Every line is an instruction written in natural language. The `IMPORTANT` block is what creates the Human-in-the-Loop pause — the agent is explicitly told not to finalise the output until you respond.

---

## Phase 1: Launch Jan AI

**Steps:**

1. Find Jan AI in your **Start menu** (Windows), **Applications** folder (Mac), or application launcher (Linux)
2. Open the application
3. You should see the familiar Jan AI interface from Session 2 — sidebar on the left, chat panel on the right

**What you should see:** Jan AI opens. The left sidebar shows New Chat, New Projects, Search, Hub, and Settings. Your Session 2 conversations and the ARK Industries — Network Ops Assistant are visible. That is correct — Session 3 builds on what is already set up.

> ⚠️ **If Jan AI will not open on your machine:** Let a facilitator know.

---

## Phase 2: Create the IT Policy Intelligence Assistant

A **Jan AI Assistant** stores a name and instructions. In Session 2, you created the ARK Industries — Network Ops Assistant for conversational Q&A. In this session, you will create a second Assistant with different instructions — one designed for multi-step policy intelligence tasks.

The Project you create in Phase 3 will link to this Assistant, giving the agent its role, task sequence, and Human-in-the-Loop instruction.

**Steps:**

1. In Jan AI, click **Settings** in the left sidebar
2. Click **Assistants**
3. Click the button to create a **New Assistant**
4. Name it exactly:

```
IT Policy Intelligence Agent
```

5. Find the **Instructions** field
6. Click into it, select all existing content, and delete it
7. Paste the full instructions you copied before Phase 1 — the block starting with "You are the IT Policy Intelligence Agent for ARK Industries." and ending with "Flag the top risk item with: ⚠ PRIORITY:"
8. Click **Save**

**What you should see:** The IT Policy Intelligence Agent Assistant appears in your Assistants list. Scroll down in the Instructions field to confirm the full text is present, including the `IMPORTANT` block and the formatting instructions at the end.

> ⚠️ **If the Instructions field appears empty after saving:** Re-open Settings → Assistants, select the IT Policy Intelligence Agent, and check. If the text has not persisted, paste it again and save before navigating away.

---

## Phase 3: Create the ARK Industries Agent Project

A **Jan AI Project** is a contained workspace with its own Assistant configuration and model selection. Creating a Project links the IT Policy Intelligence Agent instructions and the Qwen3-4B model into one dedicated environment for this lab.

**Steps:**

1. In the left sidebar, click **New Projects** (or press **Ctrl + P**)
2. A dialog labelled **Create New Project** opens
3. In the name field, type exactly:

```
ARK Industries Agent
```

4. Click the **Assistant** dropdown — a list of your saved Assistants appears
5. Select **IT Policy Intelligence Agent** — the one you just created in Phase 2
6. Click **Create**

**What you should see:** The ARK Industries Agent Project opens in the main panel. The chat interface is visible with an "Ask me anything..." input bar at the bottom. At the top of the panel, a model dropdown shows the currently active model.

**Step 7 — Confirm the model:**

At the top of the Project chat panel, check the **model dropdown**. Confirm it shows **Qwen3_5-4B-IQ4_XS** (the Qwen3-4B model from Session 2). If a different model is shown, click the dropdown and select Qwen3_5-4B-IQ4_XS from the list.

> 💡 The model is already downloaded from Session 2. The dropdown simply selects which model this Project uses — no new download is needed.

**What you should see:** The model dropdown shows Qwen3_5-4B-IQ4_XS. The ARK Industries Agent Project is ready.

---

## Phase 4: Verify Both MCP Servers Are Active

The Tavily and Filesystem MCP servers were configured in Session 2 and should still be active. This phase is a quick check — not a setup step.

**Steps:**

1. In Jan AI, click **Settings** in the left sidebar
2. Click **MCP Servers**
3. Confirm **Tavily Web Search** is listed — toggle must be **ON**
4. Confirm **filesystem** is listed — toggle must be **ON**
5. Return to the **ARK Industries Agent** Project

> ⚠️ **If either toggle is off:** Switch it back on. No other change is needed.
>
> ⚠️ **If Tavily Web Search is not listed:** Return to Session 2's Phase 5 in your lab guide and re-add it. The configuration is identical.
>
> ⚠️ **If filesystem is not listed:** Return to Session 2's Phase 5 and re-add it, pointing it to the same ARK Industries folder. Confirm `it-policy-summary.txt` is in that folder.

**One additional check — confirm your document is in place:**

1. Open your file manager
2. Navigate to your ARK Industries folder — the one you configured the Filesystem MCP to point at in Session 2
3. Confirm `it-policy-summary.txt` is in that folder alongside `network-report-site-A.txt`

> ⚠️ **`it-policy-summary.txt` is not in the folder:** Copy it there now from your USB stick or QR code download. The agent will not be able to read the policy document without this file in the correct location.

**What you should see:** Both MCP servers are listed with their toggles ON. `it-policy-summary.txt` is confirmed in the ARK Industries folder. The agent can now search the web and read your policy document.

---

### Smoke Test — Confirm the Agent Is Ready

Before starting the main lab, confirm the setup is working:

1. Return to the **ARK Industries Agent** Project chat window
2. Type the following and press **Enter**:

```
Hello — are you the ARK Industries IT Policy Agent?
```

**What you should see:** A brief, in-character response confirming the agent's role — something like "Yes, I am the ARK Industries IT Policy Intelligence Agent, here to help the IT team..." If you receive a generic response that makes no mention of ARK Industries, the Assistant instructions have not saved correctly — return to Phase 2.

> ✅ **Setup complete.** Three things are in place: Qwen3-4B model selected, both MCP servers active, `it-policy-summary.txt` confirmed in the ARK Industries folder. Proceed to Phase 5.

---

## Phase 5: Run the Agent — Iteration 1: Basic Policy Query

You are now ready to run the agent. This phase is the first full agentic run — you set the goal, the agent executes the task, and you observe the agentic loop in action.

**Step 1 — Confirm your tools are active**

Before sending the goal, do a quick check:

- **Web Search:** Settings → MCP Servers — Tavily Web Search toggle is ON
- **Document:** `it-policy-summary.txt` is confirmed in the ARK Industries folder

If either is not in place, fix it now using Phase 4 before continuing.

**Step 2 — Send the goal**

In the **ARK Industries Agent** Project chat window, type or paste the following. This is your instruction to the agent. You are not asking a question — you are setting a task. Copy the entire block:

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

You will see the agent working through the task in sequence — tool calls appearing as it searches the web and reads the document, followed by the reasoning and drafting steps. Each action is visible in the chat as it happens. A typical sequence looks like this:

```
🔍 Searching web: "NCSC AI security guidance enterprise 2025"
   → [search results retrieved]

📄 Reading document: it-policy-summary.txt
   → [document content retrieved]

🧠 Comparing sources and identifying gaps...
   → [reasoning step — internal planning]

✍️  Drafting executive briefing...
```

Each step is one turn of the agentic loop: the agent observes the current state of the task, decides what action to take next, takes it, and observes what came back. You are watching Plan → Act → Observe → Plan again — made visible.

> ⚠️ **The agent answers immediately without calling any tools:** Your MCP servers may not be active in this Project. Check Phase 4 — confirm both toggles are ON. You can also make the instruction more explicit by adding: "Use the Tavily web search tool to find current NCSC guidance, then use the filesystem tool to read the ARK Industries IT policy document." If tool calls still do not fire, let a facilitator know.
>
> ⚠️ **The agent searches the web but does not read the policy document:** Add this to the goal: "Do not write the briefing until you have completed both the web search AND read the ARK Industries IT policy document (`it-policy-summary.txt`) from the filesystem." This explicit instruction resolves most single-tool-call failures.

**Step 4 — Read the draft briefing**

The agent will produce a structured output: a gap analysis, recommended next steps, and a priority flag. Read it carefully.

Ask yourself:

- Does the gap analysis reference specific NCSC guidance by name or publication?
- Does it reference specific sections or clauses of the ARK Industries policy document?
- If both sources are mentioned, the agent has successfully synthesised two separate sources — a live web result and a local file — something a standard AI chatbot cannot do without this kind of setup.

**What you should see:** A structured briefing with a Gap Analysis section (5–8 bullet points), a Recommended Next Steps section (3–5 bullet points), and at least one item flagged `⚠ PRIORITY:`. At the end, the agent displays the Human-in-the-Loop pause message (see Phase 7 below).

---

## Phase 6: Run the Agent — Iteration 2: Refinement

After the Human-in-the-Loop checkpoint in Phase 7, you will refine the task and run the agent again. This phase gives you the options for iteration — choose the one most relevant to your interests or write your own.

This is prompt engineering applied to agents. The quality of the agent's output is shaped by the precision and specificity of your goal. A better goal produces a more useful output. You are the author of both.

Choose one of the following options, or write your own in the same style. Paste your chosen option into the chat after completing Phase 7:

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

Watch the tool calls again as it runs. Notice whether the agent calls the web search tool a second time — it may not, because it already has the information from the first run. Notice how the output changes in response to the refinement.

---

## Phase 7: The Human-in-the-Loop Checkpoint

At the end of its briefing output, the agent will pause and display this message exactly:

```
DRAFT READY FOR REVIEW
Please read the above and type APPROVE to finalise, or tell me
what changes you would like.
```

**Do not type APPROVE yet.**

---

### This is the moment that matters.

The agent has done its research. It has searched the web for current NCSC guidance. It has read the ARK Industries IT policy document from your laptop. It has reasoned about the differences between them. It has drafted a structured briefing with gap analysis, recommendations, and a priority flag.

Now it stops.

This pause is not a limitation of the technology. It is a structural design choice — a deliberate point where human judgement re-enters the process before the agent continues. It is called a **Human-in-the-Loop checkpoint**, and it is the architectural centrepiece of this entire session.

Your job at this moment is not to rubber-stamp the output. It is to apply the expertise the AI cannot have: your knowledge of your organisation's real risk tolerance, its political realities, the context behind the policy clauses, the relationships involved in getting a recommendation acted on. The agent has done the legwork. Now you make the call.

**Read the briefing. Apply your expertise. Ask yourself:**

- Does the gap analysis accurately represent the ARK Industries policy? Are there any gaps it has identified that are actually covered by the policy?
- Are the recommended next steps realistic for an organisation of ARK Industries' size and complexity?
- Is the priority flag on the right item — or would you rank the risks differently?
- Would you be comfortable sending this briefing to a real CISO?

**If you want to change something:** Type your specific feedback directly in the chat — for example, *"The second bullet in the gap analysis is incorrect — ARK Industries does cover endpoint encryption in Section 2. Please remove that item and re-rank the remaining gaps."* The agent will revise and present the updated draft for your review again.

**When you are satisfied:** Type `APPROVE` and press Enter.

The agent will proceed with the finalised output.

> 💡 **If the agent does not produce the HITL pause message:** The instructions may not have saved correctly. Go to Settings → Assistants → IT Policy Intelligence Agent, confirm the full instructions are present including the `IMPORTANT` block, and save again. Then return to the Project, start a new chat, and re-run the goal prompt from Phase 5.

**What you should see:** After typing `APPROVE`, the agent confirms the briefing is finalised. You have completed a full end-to-end agentic workflow — research, synthesis, draft, human review, and approval.

---

### Save Your Work — Three Things to Capture Before Moving On

Before proceeding to Phase 8, take two minutes to save these items:

**1. A screenshot of the completed run**

Capture a screenshot showing the tool call steps, the completed gap analysis, and the HITL pause message.

- Windows: press `Windows + Shift + S` to open the Snipping Tool and select the area
- Mac: press `Cmd + Shift + 4` and drag to select the area — the file saves to your desktop automatically
- Linux: use your desktop environment's screenshot tool or press `Print Screen`

**2. The goal prompt**

Copy the goal text from Phase 5 Step 2 and paste it into a notes app or document. This is a reusable template — with minimal adjustment, you can run the same workflow against your own policy documents.

**3. The instructions**

Copy the instructions from the grey block at the top of this lab guide and save them alongside the goal prompt. Together, these two texts are everything you need to recreate this agent in any Jan AI Project.

---

## Phase 8: Design Your Own Agentic Workflow

Everything you need for this activity is in the page on the table. Turn to the participants on the table and work through two questions together for five minutes:

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

> 💡 Rough notes are fine. One sentence per box is enough to start. The purpose is to leave today with a concrete, specific plan — not an abstract idea.

---

## What You Have Built

By completing this lab, you have:

- Used Jan AI's Projects system to create a dedicated workspace for an agentic workflow
- Linked an Assistant containing the IT Policy Intelligence Agent instructions to the Project
- Verified that the Tavily and Filesystem MCP servers from Session 2 carry over automatically
- Directed the agent using plain English goals to complete a multi-step autonomous task
- Watched the agentic loop — Plan → Act → Observe → Adapt — in real time through the tool call interface
- Reviewed a draft output, applied your own professional judgement, and made the approval decision

Every one of these steps used only free tools, no code, and kept you — the human — in control of every decision that mattered.

---

## Reference: Key Terms for This Session

| Term | Plain-English Definition |
|---|---|
| **LLM** | Large Language Model — an AI system trained on vast amounts of text that can understand and generate human language. Qwen3-4B is an LLM. |
| **Agentic AI** | An AI that does not just answer questions — it takes a sequence of independent actions (searching, reading, reasoning, drafting) to complete a goal, pausing for human approval at defined checkpoints. |
| **Human-in-the-Loop** | A structural design pattern where the agent stops and waits for a human to review and approve its output before continuing. The human retains decision authority. |
| **RAG** | Retrieval-Augmented Generation — the AI retrieves and reads a specific document before answering, grounding its response in your data rather than its training alone. In this session, RAG happens via the Filesystem MCP reading `it-policy-summary.txt`. |
| **Instructions** | The configuration given to the AI before any conversation begins — its role, behaviour, constraints, and output format. The AI's job description. |
| **Context Window** | The AI's short-term working memory — everything it can see at once: your goal, the conversation history, web search results, and document content. |
| **Project** | A Jan AI working environment that bundles an Assistant configuration and a model into one dedicated workspace for agentic tasks. |
