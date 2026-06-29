# Session 3: Building Agentic AI
## Participant Lab Guide — LM Studio Edition

**Cisco AI Technical Workshop**

---

> **Who this guide is for**
>
> This guide is for participants who are using **LM Studio** instead of Jan AI. The lab outcome is identical — a working AI agent that searches the web, reads your ARK Industries policy document, and drafts a structured briefing for CISO review, pausing for your approval before it finalises anything. The configuration steps are different, so follow this guide from start to finish rather than the standard lab guide.
>
> Follow every phase in order. Read each step before you take the action — most problems come from skipping ahead. Each phase ends with a **✅ What you should see** section so you know when to move on. If something goes wrong, raise your hand and let a facilitator know.
>
> **What you are building:** A working AI agent that searches the web for current NCSC cybersecurity guidance, reads the ARK Industries IT policy document from your laptop, reasons about the gaps between them, and drafts a structured briefing — pausing at a defined Human-in-the-Loop checkpoint for your review and approval before it finalises anything.

---

## Before You Begin — What You Need

Confirm all three of the following before Phase 1:

| Item | Where to Get It |
|---|---|
| **LM Studio open and Qwen3-4B loaded** | Already set up from Session 2 — no new installation needed |
| **Tavily API key** | Same key from Session 2 — displayed on the setup slide if needed |
| **`it-policy-summary.txt` in your ARK Industries folder** | Available in the workshop GitHub repository — download it and save it in the same folder as `network-report-site-A.txt` from Session 2 |

> ⚠️ **Confirm `it-policy-summary.txt` is in your ARK Industries folder now.** The agent reads this file via the Filesystem MCP server, which is already pointed at that folder from Session 2. If the file is missing, download it from the GitHub repository or ask a facilitator for a copy.

---

## A Note on the Architecture

In Session 2, you used LM Studio for back-and-forth conversation — you asked a question, the AI answered, you directed each step individually.

Session 3 uses the same tools but in a different mode. The Tavily MCP gives the agent live web search. The Filesystem MCP gives the agent read access to your ARK Industries folder — including `it-policy-summary.txt`. Both are already configured from Session 2, via the `mcp.json` file.

The shift from Session 2 to Session 3 is not about different tools — it is about a different kind of task. In Session 2, you asked questions. In Session 3, you set a goal and watch the agent plan and execute the work on its own, using those same MCP tools in sequence.

**One structural difference from the Jan AI path:** Jan AI has a "Projects" system — a dedicated workspace that bundles an assistant configuration with a model. LM Studio does not have this concept. Instead, you will paste the agent's instructions directly into LM Studio's **System Prompt** field before starting the lab. The effect is identical — the agent receives the same instructions and behaves in exactly the same way. The configuration method is simply different.

---

## The ARK Industries Scenario

You are a member of the IT team at **ARK Industries**, a UK-based advanced engineering company with 3,500 employees. The CISO has asked you to assess whether the company's security policies are aligned with the latest guidance from the **NCSC** — the National Cyber Security Centre, the UK government's authoritative body on cybersecurity.

Doing this manually — finding the right NCSC publications, reading them, cross-referencing the internal policy, writing up the gaps — takes two to three days.

Your agent is going to do it in under five minutes.

Your role throughout is to set the goal, watch the agent work, review its output, and decide whether it is good enough to approve. The agent handles the volume. You apply the judgement.

---

## The Instructions — Copy This Before Phase 1

Before you configure LM Studio, copy the system prompt below. This is the agent's instruction set — it defines its role, its task sequence, and — critically — the Human-in-the-Loop checkpoint where it stops and waits for your approval.

Select all the text in the box below and copy it. You will paste it into the LM Studio System Prompt field in Phase 2.

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

## Phase 1: Launch LM Studio

**Steps:**

1. Find LM Studio in your **Start menu** (Windows)
2. Open the application
3. You should see the familiar LM Studio interface from Session 2

**✅ What you should see:** LM Studio opens with the sidebar on the left showing Chat, Discover, My Models, and other icons. This is the same interface you used in Session 2 — Session 3 builds on what is already set up.

> ⚠️ **If LM Studio will not open:** Let a facilitator know.

---

## Phase 2: Configure the Agent System Prompt

In LM Studio, the agent's instructions are set via the **System Prompt** field in the chat view. This is the equivalent of Jan AI's Assistant configuration — it tells the model who it is, what task sequence it follows, and when to stop for human approval.

> ⚠️ **Start a fresh chat before configuring the system prompt.** Do not use a chat window from Session 2. Starting fresh ensures the agent begins with a clean conversation history — no previous messages that could interfere with the agentic workflow.

**Steps:**

1. In LM Studio, click the **Chat** icon in the left sidebar
2. Click **New Chat** (or the equivalent button to start a fresh conversation)
3. At the top of the chat panel, confirm that **Qwen3-4B (Q4_K_M)** is selected in the model dropdown. If a different model is shown, click the dropdown and select Qwen3-4B

4. Locate the **System Prompt** field. Depending on your version of LM Studio, this appears:
   - As a text area at the top of the chat panel labelled **System Prompt**
   - In a right-hand settings panel when a model is loaded
   - Under a **Configure** or **⚙ Chat Settings** option

5. Click into the System Prompt field. Select all existing text and delete it.

6. Paste the full instructions you copied before Phase 1 — the block starting with *"You are the IT Policy Intelligence Agent for ARK Industries."* and ending with *"Flag the top risk item with: ⚠ PRIORITY:"*

> ⚠️ **Check the full text is present.** Scroll through the System Prompt field to confirm the paste was complete, including the `IMPORTANT` block and the formatting instructions at the end. If the text is cut off, clear the field and paste again.

**✅ What you should see:** The System Prompt field contains the full IT Policy Intelligence Agent instructions. The Qwen3-4B model is selected. A fresh chat is open and ready.

---

## Phase 3: Verify Both MCP Servers Are Active

The Tavily and Filesystem MCP servers were configured in Session 2 and should still be active — they are read from the same `mcp.json` file every time LM Studio starts. This phase is a quick check, not a setup step.

> **How LM Studio reads MCP configuration:** LM Studio loads `mcp.json` at startup. As long as the file was saved correctly in Session 2 and LM Studio has been restarted since, both servers should be active. You do not need to re-enter anything.

**Steps:**

1. Check that LM Studio is showing MCP tool availability in the chat interface — this may appear as a tool icon, a plug icon, or a list of available tools in the chat panel depending on your version
2. If LM Studio shows an MCP or tools indicator, confirm both **tavily-mcp** and **filesystem** are listed

> ⚠️ **If no MCP tools are visible:** LM Studio may need to be restarted. Close LM Studio completely and reopen it. After restarting, return to Phase 2 and re-enter the system prompt (it does not persist across sessions).
>
> ⚠️ **If tools are visible but only one server is listed:** Open `%USERPROFILE%\.lmstudio\mcp.json` in Notepad (press Windows + R, type `%USERPROFILE%\.lmstudio`, press Enter, then right-click `mcp.json` → Open with Notepad). Check that both `tavily-mcp` and `filesystem` blocks are present and that all backslashes in your folder path are doubled (`\\`). Save and restart LM Studio.

**One additional check — confirm your document is in place:**

1. Open **File Explorer** and navigate to your ARK Industries folder — the one configured in the `mcp.json` filesystem path from Session 2
2. Confirm `it-policy-summary.txt` is in that folder alongside `network-report-site-A.txt`

> ⚠️ **If `it-policy-summary.txt` is not in the folder:** Download it from the workshop GitHub repository and save it there now. The agent will not be able to read the policy document without this file in the correct location.

**✅ What you should see:** MCP tools are accessible in LM Studio. `it-policy-summary.txt` is confirmed in the ARK Industries folder. The agent can now search the web and read your policy document.

---

### Smoke Test — Confirm the Agent Is Ready

Before starting the main lab, send a quick test message to confirm the system prompt is in effect:

In the LM Studio chat, type the following and press **Enter**:

```
Hello — are you the ARK Industries IT Policy Agent?
```

**✅ What you should see:** A brief, in-character response confirming the agent's role — something like *"Yes, I am the ARK Industries IT Policy Intelligence Agent, here to help the IT team..."* If you receive a generic response that makes no mention of ARK Industries, the system prompt has not saved correctly — return to Phase 2, clear the System Prompt field, and paste the instructions again.

---

## Phase 4: Verify Tool Calls Are Working

Before running the full agentic task, confirm the MCP tools fire correctly with a simple directed test.

**Step 1 — Test web search**

In the chat, type:

```
Use Tavily to search the web for the latest NCSC guidance on cybersecurity for UK businesses. Return the title and URL of one relevant result.
```

**✅ What you should see:** A tool call indicator appears showing LM Studio calling the Tavily MCP server, followed by a result that cites a specific NCSC publication with a URL.

> ⚠️ **If no tool call fires and the agent answers from memory:** Add "Use the Tavily web search tool — do not answer from your training data" to your message. If tool calls still do not appear after restarting LM Studio, let a facilitator know.

**Step 2 — Test file access**

In the chat, type:

```
Use the filesystem tool to read the ARK Industries IT policy document and tell me what Section 1 is about.
```

**✅ What you should see:** A tool call indicator showing LM Studio calling the filesystem MCP server, followed by a response that accurately describes content from `it-policy-summary.txt`.

> ⚠️ **If the agent says it cannot find the file:** The filesystem path in `mcp.json` may not match the folder where `it-policy-summary.txt` is stored. Open `mcp.json` in Notepad and check the third argument in the filesystem block — compare it against the actual folder location in File Explorer. Ensure all backslashes are doubled. Save, restart LM Studio, and re-enter the system prompt.

**✅ Setup complete.** Both MCP tools are confirmed working. `it-policy-summary.txt` is readable. Proceed to Phase 5.

---

## Phase 5: Run the Agent — Iteration 1: Basic Policy Query

You are now ready to run the agent. This is the first full agentic run — you set the goal, the agent executes the task, and you observe the agentic loop in action.

> ⚠️ **Start this phase in a new chat.** The tool tests in Phase 4 have created conversation history that may affect the agent's behaviour for the main task. Start a fresh chat (New Chat in LM Studio) and **re-paste the system prompt** before sending the goal below. This takes 30 seconds and prevents the most common single cause of unexpected agent behaviour.

**Step 1 — Re-confirm the system prompt is in place**

In your new chat, confirm the System Prompt field still contains the IT Policy Intelligence Agent instructions. If the field is empty, paste the instructions from the block at the top of this guide before continuing.

**Step 2 — Send the goal**

In the LM Studio chat window, type or paste the following. This is your instruction to the agent. You are not asking a question — you are setting a task. Copy the entire block:

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

> ⚠️ **The agent answers immediately without calling any tools:** Make the instruction more explicit by adding to your goal: *"Use the Tavily web search tool to find current NCSC guidance, then use the filesystem tool to read the ARK Industries IT policy document (`it-policy-summary.txt`). Do not answer from your training data."* If tool calls still do not fire after restarting LM Studio, let a facilitator know.
>
> ⚠️ **The agent searches the web but does not read the policy document:** Add to your goal: *"Do not write the briefing until you have completed both the web search AND read the ARK Industries IT policy document (`it-policy-summary.txt`) from the filesystem."* This explicit instruction resolves most single-tool-call failures.

**Step 4 — Read the draft briefing**

The agent will produce a structured output: a gap analysis, recommended next steps, and a priority flag. Read it carefully.

Ask yourself:

- Does the gap analysis reference specific NCSC guidance by name or publication?
- Does it reference specific sections or clauses of the ARK Industries policy document?
- If both sources are mentioned, the agent has successfully synthesised two separate sources — a live web result and a local file — something a standard AI chatbot cannot do without this kind of setup.

**✅ What you should see:** A structured briefing with a Gap Analysis section (5–8 bullet points), a Recommended Next Steps section (3–5 bullet points), and at least one item flagged `⚠ PRIORITY:`. At the end, the agent displays the Human-in-the-Loop pause message (see Phase 6 below).

---

## Phase 6: The Human-in-the-Loop Checkpoint

At the end of its briefing output, the agent will pause and display this message:

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

This pause is not a limitation of the technology. It is a structural design choice — a deliberate point where human judgement re-enters the process before the agent continues. It is called a **Human-in-the-Loop (HITL) checkpoint**, and it is the architectural centrepiece of this entire session.

Your job at this moment is not to rubber-stamp the output. It is to apply the expertise the AI cannot have: your knowledge of your organisation's real risk tolerance, its political realities, the context behind the policy clauses, the relationships involved in getting a recommendation acted on. The agent has done the legwork. Now you make the call.

**Read the briefing. Apply your expertise. Ask yourself:**

- Does the gap analysis accurately represent the ARK Industries policy? Are there any gaps it has identified that are actually covered by the policy?
- Are the recommended next steps realistic for an organisation of ARK Industries' size and complexity?
- Is the priority flag on the right item — or would you rank the risks differently?
- Would you be comfortable sending this briefing to a real CISO?

**If you want to change something:** Type your specific feedback directly in the chat — for example, *"The second bullet in the gap analysis is incorrect — ARK Industries does cover endpoint encryption in Section 2. Please remove that item and re-rank the remaining gaps."* The agent will revise and present the updated draft for your review again.

**When you are satisfied:** Type `APPROVE` and press **Enter**.

The agent will proceed with the finalised output.

> 💡 **If the agent does not produce the HITL pause message:** The system prompt may not have been applied correctly, or the new chat was started without re-entering it. Start a new chat, re-paste the instructions into the System Prompt field, and re-run the goal from Phase 5.

**✅ What you should see:** After typing `APPROVE`, the agent confirms the briefing is finalised. You have completed a full end-to-end agentic workflow — research, synthesis, draft, human review, and approval.

---

### Save Your Work — Three Things to Capture Before Moving On

Before proceeding to Phase 7, take two minutes to save these items:

**1. A screenshot of the completed run**

Capture a screenshot showing the tool call steps, the completed gap analysis, and the HITL pause message.

- Windows: press `Windows + Shift + S` to open the Snipping Tool and select the area

**2. The goal prompt**

Copy the goal text from Phase 5 Step 2 and paste it into a notes app or document. This is a reusable template — with minimal adjustment, you can run the same workflow against your own policy documents.

**3. The instructions**

Copy the instructions from the grey block at the top of this lab guide and save them alongside the goal prompt. Together, these two texts are everything you need to recreate this agent in any LM Studio session or any other AI tool that supports system prompts.

---

## Phase 7: Run the Agent — Iteration 2: Refinement

Now refine the task. This phase demonstrates that the quality of an agent's output is shaped by the precision and specificity of your goal. A better goal produces a more useful output. You are the author of both.

Choose one of the following options, or write your own in the same style. Paste your chosen option into the chat after completing Phase 6:

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

## Phase 8: Design Your Own Agentic Workflow

Everything you need for this activity is in the GitHub repository. Open the **Agent Design Canvas** file from the repository and work through it alongside these questions.

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

> 💡 Rough notes are fine. One sentence per box is enough to start. The purpose is to leave today with a concrete, specific plan — not an abstract idea.

---

## What You Have Built

By completing this lab, you have:

- Configured LM Studio with an agent system prompt that defines a role, a task sequence, and a Human-in-the-Loop pause
- Verified that the Tavily and Filesystem MCP servers from Session 2 carry over automatically via `mcp.json`
- Directed the agent using plain English goals to complete a multi-step autonomous task
- Watched the agentic loop — Plan → Act → Observe → Adapt — in real time through the tool call interface
- Reviewed a draft output, applied your own professional judgement, and made the approval decision

Every one of these steps used only free tools, no code, and kept you — the human — in control of every decision that mattered.

---

## Quick Reference

| Item | Detail |
|---|---|
| LM Studio | Already installed from Session 2 |
| Model | Qwen3-4B (Q4_K_M) — already downloaded from Session 2 |
| Tavily | Same key from Session 2 — already in `mcp.json` |
| MCP config file | `%USERPROFILE%\.lmstudio\mcp.json` — no changes needed from Session 2 |
| System prompt | Paste into System Prompt field in LM Studio chat view at the start of each new chat session |
| System prompt persists? | No — re-paste the instructions at the start of every new chat in LM Studio |
| `it-policy-summary.txt` | Must be in the same folder as `network-report-site-A.txt` — the folder the filesystem MCP is pointed at |
| ARK Industries lab files | Available in the workshop GitHub repository |
| Agent instructions | Full text at the top of this lab guide, and in `jan_ai_assistant_system_prompt.md` in the Session 3 GitHub folder |
| Sample goal prompts | `sample_goal_prompts.md` — Session 3 folder in the GitHub repository |
| Agent Design Canvas | Available in the GitHub repository |

---

## Common Problems and Fixes

| Problem | Most Likely Cause | Fix |
|---|---|---|
| Agent responds generically — no mention of ARK Industries | System prompt field is empty or was not saved before sending | Return to Phase 2. Start a new chat, paste the full instructions into the System Prompt field, and confirm the text is present before sending any message. |
| Agent answers from training data without calling any tools | MCP servers not loaded (LM Studio not restarted after `mcp.json` was created in Session 2), or tool call not explicitly requested | Restart LM Studio. After restarting, re-enter the system prompt. In your goal, add: "Use the Tavily web search tool to search the web and the filesystem tool to read `it-policy-summary.txt` — do not answer from training data." |
| Agent searches the web but does not read the policy document | Model skipped the filesystem step | Add to your goal: "Do not write the briefing until you have read the ARK Industries IT policy document (`it-policy-summary.txt`) from the filesystem." |
| Filesystem tool cannot find `it-policy-summary.txt` | File is not in the folder the filesystem MCP is pointed at, or file has a double extension | Confirm `it-policy-summary.txt` is in your ARK Industries folder. Check the file does not show as `it-policy-summary.txt.txt` (enable file extensions in File Explorer: View → Show → File name extensions). If the path in `mcp.json` is wrong, correct it and restart LM Studio. |
| Agent does not display the HITL pause message | Instructions were truncated during paste, or the `IMPORTANT` block is missing | Open the System Prompt field and scroll to the end. Confirm the full `IMPORTANT` block is present. If not, clear the field, paste the instructions again from the top of this guide, and start a new chat. |
| MCP tools not visible after LM Studio restart | `mcp.json` has a syntax error | Open `mcp.json` in Notepad. Check every backslash in the folder path is doubled (`\\`), the Tavily key starts with `tvly-` and has no spaces, and all JSON brackets and commas are in place. Save and restart. |
| Agent produces HITL pause but does not wait for APPROVE | Model is not following the instruction precisely | This can happen with smaller models under load. Respond with exactly `APPROVE` in uppercase. If the agent continues without waiting consistently, note this as an observation about the role of instruction clarity in agentic workflows — it is a valid teaching moment. |
| System prompt is empty after starting a new chat | LM Studio does not persist system prompts across new chats | Expected behaviour. Re-paste the instructions from the top of this guide at the start of each new chat session. Keep this guide open in a browser tab for quick access. |
