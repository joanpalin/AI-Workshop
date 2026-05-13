# Session 3 Lab — Sample Goal Prompts
## IT Policy Intelligence Agent: ARK Industries
### Cisco AI Technical Workshop

---

> **How to use this page:** These prompts are designed for **Phase 6** (iteration) and **Phase 8** (Agent Design Canvas) of the Session 3 lab. They range from Starter level — simple, single-step retrieval — to Advanced level, which asks the agent to plan and execute a multi-step research, comparison, and drafting workflow. Copy any prompt directly into your **ARK Industries Agent** Project chat window and press Enter. You do not need to type anything from scratch.

---

## Starter Prompts
*Single-step retrieval from the ARK Industries policy document. The agent reads one source and answers a direct question. No web search required.*

---

### Prompt 1 — Policy Lookup

**Difficulty:** Starter
**What the agent will do:** Retrieve a specific policy rule from `it-policy-summary.txt` via the Filesystem MCP and summarise it in plain language.

```
Using only the ARK Industries IT policy document, tell me: what
is the current rule about installing software on company devices?
Who needs to approve it, and how does an employee request approval?
```

---

### Prompt 2 — Incident Reporting Briefing

**Difficulty:** Starter
**What the agent will do:** Locate the incident reporting section of the policy document and produce a short plain-English summary suitable for sharing with new starters.

```
Read the ARK Industries IT policy document and produce a short
summary — no more than 150 words — of what employees must do if
they suspect a security incident. Write it for someone who has
just joined the company and is not an IT specialist.
```

---

## Intermediate Prompts
*Multi-step tasks combining document retrieval with web search, or requiring structured analysis and comparison. The agent will use both tools and show thought chain steps.*

---

### Prompt 3 — Data Classification Gap Check

**Difficulty:** Intermediate
**What the agent will do:** Search the web for current UK government data classification standards, read the ARK Industries policy, and identify whether the internal classification scheme aligns with current guidance.

```
I need to check whether ARK Industries' data classification approach
is consistent with current UK government guidance.

Please do the following:
1. Search the web for the current UK government data classification
   framework and any ICO guidance on data categorisation for
   organisations handling personal data.
2. Read the ARK Industries IT policy document — specifically
   Section 5 on data classification.
3. Identify any gaps or misalignments between the internal policy
   and the external guidance.
4. Summarise your findings in 5 bullet points for the Head of IT
   Operations.
```

---

### Prompt 4 — Remote Access Modernisation Review

**Difficulty:** Intermediate
**What the agent will do:** Search for current best-practice guidance on remote access security, compare against the ARK Industries remote access policy, and identify where the policy may be lagging behind current practice.

```
ARK Industries' remote access policy was last reviewed in 2024.
I want to know whether it still reflects current best practice.

Please:
1. Search the web for current guidance on remote access security
   for enterprise organisations — look for NCSC, CISA, or NIST
   publications from 2024 or 2025.
2. Read Section 4 of the ARK Industries IT policy document.
3. Identify where the internal policy may have gaps compared to
   current best practice — particularly around zero trust approaches
   and MFA requirements.
4. Draft a short briefing (3–4 paragraphs) for the IT Security
   team summarising what has changed and what needs updating.
```

---

### Prompt 5 — Acceptable Use Policy and AI Tools

**Difficulty:** Intermediate
**What the agent will do:** Identify whether the ARK Industries Acceptable Use policy addresses the use of AI tools, search for UK employer guidance on AI acceptable use policies, and flag the gap.

```
A line manager has asked whether employees are allowed to use
publicly available AI tools like ChatGPT for work tasks. I need
to check what our current policy says and whether it is adequate.

Please:
1. Read Section 1 of the ARK Industries IT policy document and
   identify any reference to AI tools, large language models, or
   generative AI.
2. Search the web for current UK employer guidance on AI acceptable
   use policies — look for NCSC, Acas, or CIPD guidance published
   in 2024 or 2025.
3. Compare what our policy says (or does not say) against current
   recommended practice.
4. Draft a short briefing: what gap exists, and what should the
   policy say?
```

---

## Advanced Prompts
*Full multi-step agentic workflows: web research + document analysis + gap identification + structured output drafting, followed by a Human-in-the-Loop review pause. These prompts closely mirror the main lab task and extend it to different frameworks or audiences.*

---

### Prompt 6 — Full NCSC Cyber Essentials Alignment Review

**Difficulty:** Advanced
**What the agent will do:** Search for the current NCSC Cyber Essentials framework requirements, systematically compare them against all sections of the ARK Industries IT policy document, produce a structured gap analysis covering all five Cyber Essentials control areas, and draft an executive briefing with prioritised recommendations — then pause for approval.

```
I need a comprehensive review of whether ARK Industries' IT policy
aligns with the NCSC Cyber Essentials framework.

Please work through the following:
1. Search the web for the current NCSC Cyber Essentials requirements —
   the five control areas: boundary firewalls and internet gateways,
   secure configuration, access control, malware protection, and
   patch management. Look for the most recent version.
2. Read the full ARK Industries IT policy document.
3. For each of the five Cyber Essentials control areas, identify
   whether our current policy adequately addresses the requirement
   or whether there is a gap.
4. Draft a structured gap analysis table: Control Area | Current
   Policy Coverage | Gap | Recommended Action.
5. Write an executive summary for the CISO — no more than 200 words —
   explaining the overall alignment status and the top two priorities.

Use the format from your instructions. Pause for my approval before
finalising.
```

---

### Prompt 7 — Board-Level AI Risk Briefing

**Difficulty:** Advanced
**What the agent will do:** Search for current UK board-level guidance on AI governance and risk, cross-reference against the ARK Industries policy document, identify the absence of any AI-specific governance provisions, and draft a board paper executive summary in non-technical language — then pause for approval.

```
Our board has asked for a short briefing on ARK Industries' current
AI governance posture. I need to know: do our existing IT policies
adequately govern the use of AI tools and AI-generated outputs by
our staff?

Please:
1. Search the web for current UK guidance on AI governance for
   company boards — look for guidance from the NCSC, the Alan Turing
   Institute, the UK AI Safety Institute, or equivalent bodies
   published in 2024 or 2025.
2. Read the ARK Industries IT policy document and identify any
   provisions that specifically address AI tools, large language
   models, or automated decision-making.
3. Identify the gaps between what leading governance guidance
   recommends and what our current policy contains.
4. Draft a 250-word executive summary for the board in plain
   business language — no acronyms, no technical terms. The board
   needs to understand the risk and the recommended action, not
   the technical detail.
5. Flag the single most urgent risk item with ⚠ PRIORITY.

Pause for my review and approval before finalising.
```

---

### Prompt 8 — Incident Response Maturity Assessment

**Difficulty:** Advanced
**What the agent will do:** Search for current incident response maturity frameworks, compare the ARK Industries incident reporting policy against current framework requirements, identify specific maturity gaps, draft a structured assessment with recommended improvements, and pause for approval.

```
I want to assess the maturity of ARK Industries' incident response
capability based on what is documented in our IT policy.

Please:
1. Search the web for a current incident response maturity
   framework — the NIST Computer Security Incident Handling Guide
   (SP 800-61) or NCSC's guidance on incident management would
   be ideal. Look for the most recent published versions.
2. Read Section 6 of the ARK Industries IT policy document and
   any references to the Incident Response Plan (ARK-IT-IRP-001).
3. Compare what our policy documents against the framework's
   recommended capabilities across these areas: preparation,
   detection and analysis, containment and eradication, recovery,
   and post-incident review.
4. Identify specific gaps — where the framework requires a
   documented capability that our policy does not address.
5. Draft a maturity assessment with:
   - A one-paragraph overall maturity verdict
   - A gap analysis: 5–7 bullet points covering specific shortfalls
   - Recommended next steps: 3–4 prioritised actions
   - ⚠ PRIORITY flag on the most critical gap

Write for the Head of IT Operations. Use clear, direct language.
Pause for my review and approval before finalising.
```

---

## A Note on Prompt Difficulty

The difference between Starter and Advanced prompts is not about what *you* do — in all cases, you type a goal and press Enter. The difference is in what *the agent* has to do:

- **Starter prompts** ask the agent to retrieve and summarise from one source. One tool. One step.
- **Intermediate prompts** ask the agent to use two sources (web + document), compare them, and structure the output. Two tools. Multiple steps.
- **Advanced prompts** ask the agent to plan a full research-and-analysis workflow, use both tools in sequence, apply a structured output format, and stop at a defined checkpoint for human review. These prompts exercise the full agentic loop — Plan → Act → Observe → Adapt — and the Human-in-the-Loop pause.

In every case, your job is the same: set the goal, watch the tool calls, review the output, and decide. The agent does the legwork. You make the call.
