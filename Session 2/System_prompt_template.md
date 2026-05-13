# Session 2 — Building AI Assistants
## System Prompt Reference & Template

> **What this file is for:** This file gives you two things. First, the ready-to-use system prompt for the ARK Industries lab — copy and paste it exactly as written. Second, a guided template you can complete for your own role. By the end of this session, you will have a working, personalised AI assistant briefed for your actual job.
>
> This file is available in the Session 2 folder of the workshop GitHub repository.

---

## PART 1 — Phase 6: Copy this into Jan AI for the lab

> **Instruction:** In Jan AI, go to **Settings → Assistants** and open the **ARK Industries — Network Ops** Assistant you created in Phase 6 of the lab guide. The Instructions field should already contain the text below — this file is your reference copy. If you need to re-enter it for any reason, copy everything inside the box and paste it into the Instructions field, then click Save.

```
You are the Network Operations Assistant for ARK Industries.
Your role is to help IT Operators analyse network reports,
identify anomalies, and draft clear, factual summaries for
engineering teams.

Always base your answers on the documents in your file system.
If the answer is not in the documents, say so — do not guess.

When asked to search the web, use Tavily to find current
information and cite the source.

You are a tool for the operator's judgement, not a replacement
for it.
```

Once your Assistant is set up and a project is open, ask this test question:

```
We have a Cisco Meraki MX appliance showing packet loss at Site A.
What are the first three things I should check?
```

Notice how the assistant now behaves like an ARK Industries IT specialist — it uses the right format, asks for a serial number before diving in, and flags anything that needs escalating. That behaviour came entirely from the system prompt you just pasted in.

---

## PART 2 — What makes a system prompt work?

A good system prompt has five elements. You do not need to use all five every time — but understanding each one will help you write prompts that produce consistent, trustworthy results.

**1. Role — Who is the AI playing?**

Tell the AI what kind of expert it is and who it works for. The more specific you are, the more useful the responses. "You are an AI assistant" produces generic answers. "You are a network infrastructure assistant for the Contoso IT team, specialising in Cisco Meraki and Azure AD" produces something you can actually use at work.

**2. Data sources — What should it consult?**

Tell the AI what information it has access to. If you have connected tools (web search, a folder of documents), name them explicitly. This prevents the AI from guessing or making things up — it knows to look in the right place before answering.

**3. Tone and style — How should it communicate?**

Your team's working environment will shape this. A triage support team needs short, direct answers with clear action steps. A leadership briefing needs summary language without jargon. A compliance team may need formal, numbered outputs. You decide — and you write it down.

**4. Constraints — What should it never do?**

This is the most important element for professional use. Define the guardrails. Common examples: *Never recommend production changes without confirmation. Never speculate about security incidents — always escalate. Never provide costs or SLA figures without checking current contracts.* These rules make the AI safe to use in your environment, not just capable.

**5. Handoff — When should it stop and ask the human?**

Some decisions should never be delegated to an AI. Define those moments explicitly. *If this request involves customer data, stop and ask me before proceeding. If you cannot find the answer in the ARK Industries documents, say so and suggest who to ask.* This is the AI co-pilot principle in practice: the AI does the research and drafting, the human makes the call.

---

## PART 3 — Write yours: the blank template

> **Step 8 instruction:** Use the space below to write a system prompt for your own role — not ARK Industries, but the job you go back to after the workshop. Work through each section, then assemble your draft at the bottom. Once written, go to **Settings → Assistants** in Jan AI, click **Add Assistant**, paste your prompt into the **Instructions** field, and ask one real question from your working week.

---

### Section 1 — Role

*Who is this assistant? What expertise does it have? What team or organisation does it serve?*

**Fill in:** `You are a [DESCRIBE THE ROLE AND EXPERTISE] for the [YOUR TEAM OR ORGANISATION] team.`

Your notes:

```
[Write your Role statement here]
```

---

### Section 2 — Context

*What does the AI need to know about your environment to be genuinely useful? Think about: team size, key systems and platforms, organisational constraints, regulatory requirements, or any background a new colleague would need on day one.*

**Fill in:** `[YOUR TEAM OR ORGANISATION] [DESCRIBE YOUR ENVIRONMENT — key systems, locations, size, constraints].`

Your notes:

```
[Write your Context statement here]
```

---

### Section 3 — Data sources

*What information does this assistant have access to? Name the tools you have connected (web search, a folder of documents) and any important knowledge sources it should draw on.*

**Fill in:** `You have access to [NAME YOUR TOOLS AND DOCUMENTS].`

Your notes:

```
[Write your Data sources statement here]
```

---

### Section 4 — Rules

*What should this assistant always do? What should it never do? Think about the behaviours that would make it both safe and genuinely useful in your working environment.*

**Examples to adapt:**
- Always ask for [KEY IDENTIFIER — serial number, ticket ID, customer reference] before beginning any troubleshooting.
- When citing information, state whether it came from [WEB SEARCH] or [YOUR DOCUMENT SOURCE].
- If you are uncertain, say so clearly — do not guess. Suggest escalation to [TEAM OR CONTACT].
- Never recommend changes to [PRODUCTION SYSTEMS / CUSTOMER CONFIGURATIONS / FINANCIAL RECORDS] without explicit confirmation.

Your notes:

```
Rules:
- [YOUR RULE 1]
- [YOUR RULE 2]
- [YOUR RULE 3]
```

---

### Section 5 — Format

*How should responses be structured to be most useful in your day-to-day work?*

**Examples to adapt:**
- Use bullet points for step-by-step instructions.
- Keep responses under [NUMBER] lines unless a full breakdown is requested.
- Use bold text for any action the reader must take.
- Flag anything requiring escalation with: ⚠️ ESCALATE:
- Write in [formal / plain / technical] language appropriate for [YOUR AUDIENCE].

Your notes:

```
Format:
- [YOUR FORMAT RULE 1]
- [YOUR FORMAT RULE 2]
```

---

### Your complete system prompt — assemble it here

*Once you have worked through the sections above, write your complete prompt in the box below. Then copy it into Jan AI — Settings → Assistants → Add Assistant — paste it into the Instructions field, and ask one question from your real working week.*

```
[YOUR COMPLETE SYSTEM PROMPT — write it here, then copy into Jan AI]




```

---

### Test question — ask this once your prompt is in place

*What is one question you would genuinely ask in a typical working week — a troubleshooting query, a policy check, a research task? Write it below, then ask it.*

```
[YOUR TEST QUESTION]
```

---

## Take-away checklist

Before you leave Session 2, aim to have:

- [ ] Pasted the ARK Industries system prompt (Part 1) and seen the AI respond as a configured IT assistant
- [ ] Completed your own system prompt draft in Part 3
- [ ] Created your own Assistant in Jan AI and asked one real question
- [ ] Taken a screenshot of your assistant returning a live MCP-powered response
- [ ] Taken a screenshot of your assistant reading an ARK Industries document

> **After the workshop:** Your system prompt draft is yours to keep and refine. Paste it into any AI assistant that supports system prompts — Jan AI, Claude Desktop, or ChatGPT — and it will behave as your configured assistant immediately. The specific tool changes. The principle does not.
