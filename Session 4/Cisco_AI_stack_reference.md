# Cisco AI Access & AI Defense — Reference Card

**Session 4: Securing AI**

---

> **How to use this card:** This is a plain-English reference for the two Cisco tools demonstrated in Session 4. It explains what each product does, how it connects to the AI architecture you built during this workshop, and how it addresses the threats in `threat_landscape_reference.md`. It is not a sales document — it is a practical reference you can use to frame a governance conversation internally.

---

## Why Two Tools?

The AI governance challenge in an enterprise has two distinct dimensions:

**The first dimension** is about what your employees are doing with AI tools they access externally — cloud AI services, consumer tools, browser-based assistants. Most organisations today have no visibility into this. They cannot tell you which tools are in use, by whom, or what categories of data are being submitted.

**The second dimension** is about what your organisation has deployed and built internally — AI assistants, agents, and workflows connected to your own systems and data. These need to be protected from attack and monitored for anomalous behaviour.

Cisco AI Access addresses the first dimension. Cisco AI Defense addresses the second. They are designed to work together and cover the full AI footprint of an enterprise.

---

## Cisco AI Access

### The Problem It Solves

Most organisations today cannot answer three basic questions about their own AI usage:

- Which AI tools are employees using on the corporate network?
- What categories of data are being submitted to those tools?
- Which of those tools have been reviewed and approved by IT?

Without the ability to answer these questions, writing a meaningful AI Acceptable Use Policy is impossible. You cannot govern what you cannot see. And you cannot ask people to follow a policy that is based on an incomplete or inaccurate picture of what is actually happening on your network.

This is not a future problem. It is the state of most enterprise networks today, right now.

### How It Works

Cisco AI Access operates as a proxy layer for AI traffic. When an employee on the corporate network submits a prompt to an AI tool — any AI tool, whether approved, under review, or unknown to IT — that traffic passes through AI Access. The system classifies the traffic, identifies the destination tool, categorises the type of content being submitted (for example: internal technical data, personal data, financial information, general productivity queries), and logs the interaction.

This produces a visibility dashboard — called AI Canvas — that gives the IT or security team a real-time view of AI usage across the organisation. From that dashboard, the team can set governance policies: approve specific tools for use with specific data categories, block tools that present an unacceptable risk, and apply conditional access rules — for example, requiring additional authentication before an employee can submit regulated personal data to any AI service.

The model is familiar. It works the same way as an existing web proxy and URL filtering system, which most enterprise IT teams already operate and understand. The difference is that AI Access classifies AI traffic specifically, not just general web traffic. It understands the difference between a prompt containing an internal technical report and a general search query.

### How It Connects to the Architecture You Built Today

In Sessions 2 and 3, you built AI tools and used them. You directed your AI assistant to read files from the ARK Industries document set. You ran an agent that searched the web and analysed IT policy documents. You did this in a controlled workshop environment, on a local machine.

In your organisation, employees are doing the equivalent of this — submitting work-related content to external AI services — without that controlled environment and without IT's knowledge. AI Access is the tool that makes that activity visible and manageable.

 The AI Defense dashboard showed you what that visibility looks like in practice: a structured view of which AI tools are active on the network, categorised by risk tier, with data category breakdowns for each.

### ARK Industries Use Case

ARK Industries has approximately 400 employees across three sites. The IT team suspects that several teams — particularly the project management and customer success functions — are regularly using personal AI tools to draft client communications and summarise internal reports.

With Cisco AI Access deployed, the IT team opens the AI Access dashboard on a Monday morning and sees:

- 12 distinct AI services accessed across the ARK Industries network in the past 7 days
- 4 of those services are categorised as Approved
- 6 are categorised as Under Review (accessed but not yet assessed)
- 2 have been flagged as Prohibited based on known data handling concerns
- The data category breakdown shows that 34% of AI submissions in the past week contained content classified as internal technical data

This is the information the IT team needs to write an AI Acceptable Use Policy that reflects reality. It is also the information the security team needs to begin a risk conversation with the business about which tools require immediate attention.

Without AI Access, none of this information exists.

---

## Cisco AI Defense

### The Problem It Solves

Once an organisation has deployed AI tools internally — a local AI assistant, an agentic workflow, an AI-powered application — those tools become part of the organisation's attack surface. They can be targeted by prompt injection attempts. Their agentic behaviour can be manipulated. Their outputs can be exploited if not validated.

The AI model powering those tools is not a security system. It does its best to reject malicious inputs based on its training and its system prompt instructions. But it cannot reliably classify injection attempts, it cannot log anomalous inputs, and it cannot alert your security team when something suspicious happens. When it fails — even partially — nothing is recorded.

The exercise you completed during this session demonstrated exactly this. You submitted prompt injection attempts to your own Jan AI assistant. Some prompts were rejected. Some may have partially succeeded. None of the attempts were logged. No alert was generated. The model tried its best. That is not enough.

Cisco AI Defense sits above the model. It operates independently of the model's own guardrails and addresses the governance gap the model alone cannot fill.

### How It Works

Cisco AI Defense monitors AI workloads deployed inside the organisation. It operates at the level above the model — classifying inputs before they reach the model, monitoring the sequence of actions in agentic workflows, and generating structured incident reports when anomalous behaviour is detected.

Specifically:

- **Prompt injection detection:** AI Defense classifies incoming inputs against known injection patterns. If a request matches the profile of a prompt injection attempt — including attempts embedded inside documents or data the agent has been asked to process — AI Defense classifies the attempt, takes an automated action (block or flag for review), and logs the event. The model's own response to the input is recorded alongside the detection result.

- **Agentic workflow monitoring:** In agentic workflows, AI Defense monitors the sequence of actions the agent takes. If an agent begins executing a sequence that deviates significantly from its expected behaviour pattern — for example, attempting to access file paths outside its configured scope, or making an unusually high number of external requests — AI Defense flags the anomaly for review.

- **Structured incident reporting:** Every detected event generates a human-readable incident report. The report includes the type of threat detected, the classification confidence, the automated action taken, and a recommended next step for the security analyst receiving it. This is not a raw log — it is a structured, actionable document designed for triage.

The security team makes the response decisions. AI Defense provides the detection, classification, logging, and structured reporting that makes those decisions possible.

### How It Connects to the Architecture You Built Today

The Jan AI assistant you built in Session 2 — running locally, connected to Tavily search and your ARK Industries Filesystem MCP — is exactly the kind of internal AI workload that Cisco AI Defense is designed to govern. Not a future enterprise deployment. The thing you built today.

The Jan AI agent you ran in Session 3 — autonomously searching the web, reading the IT policy document, drafting a gap analysis before pausing for your approval — is exactly the kind of agentic sequence that AI Defense monitors for anomalous behaviour.

### ARK Industries Use Case

ARK Industries has deployed an internal AI assistant for the IT operations team, built on the same architecture as the one produced in Session 2: a local model, connected to a web search tool and a read-access file system integration covering the network documentation folder.

An external actor discovers the assistant is accessible on the internal network and submits a crafted prompt embedded inside what appears to be a routine network status update — matching the format of documents the assistant regularly processes.

The embedded instruction attempts to redirect the assistant's next response to a format that exposes its system prompt configuration.

With Cisco AI Defense in place:

- The input is classified as a prompt injection attempt at the governance layer before it reaches the model
- The attempt is blocked automatically; the model never processes the embedded instruction
- An incident report is generated and sent to the ARK Industries security analyst on duty, containing: threat type (prompt injection, hidden-instruction variant), classification confidence, the specific input flagged, the automated action taken, and a recommended next step (review assistant access controls; check for similar patterns in the past 24-hour log)
- The security analyst reviews the report, confirms the classification, and initiates a brief review of the assistant's access scope

The analyst made the response decision. AI Defense provided everything needed to make that decision quickly, accurately, and without manual log review.

---

## The Two Tools Together

| | Cisco AI Access | Cisco AI Defense |
|---|---|---|
| **What it governs** | External AI tools employees access from the corporate network | Internal AI tools and agents the organisation has deployed |
| **Primary function** | Visibility and access policy for employee AI usage | Threat detection, classification, and incident reporting for deployed AI workloads |
| **Key output** | Defense ashboard — a real-time view of AI usage, data categories, and tool risk tiers | Structured incident reports — human-readable, actionable records of detected threats |
| **Who uses it** | IT team and security team — for inventory, policy-setting, and compliance | Security team — for monitoring, triage, and incident response |
| **What it connects to in this workshop** | The AI tools you used in Sessions 2 and 3 — the external access dimension | The AI tools you built in Sessions 2 and 3 — the internal deployment dimension |
| **Threats it addresses** | Shadow AI primarily; supports governance response to all five threat categories | Prompt Injection, Data Exfiltration via AI, Hallucination Risk (via monitoring and logging); supports response to all five threat categories |

---

## A Note on Integration

Both solutions are designed to work with existing Cisco infrastructure. They are not rip-and-replace proposals. AI Access integrates with existing network security architecture and extends it to classify and govern AI-specific traffic. AI Defense integrates with AI workloads regardless of the underlying model or platform.

If your organisation has concerns about integration with existing tools or infrastructure, that is the right question for a scoping conversation with the Cisco team. The conversation does not require a budget approval or a project plan to start — it requires a one-hour call.

---

## Starting Point

The most common response from IT professionals after a session like this: "This makes sense, but I'm not sure where to start."

The practical answer, based on what you have seen today:

1. **Start with visibility.** You cannot write a policy, make a risk decision, or have a credible conversation with your CISO until you know what is actually happening on your network. AI Defense and AI Defense is that starting point.

2. **Use the AUP draft you produced today.** It is an imperfect first version. That is appropriate — it is a draft, not a finished policy. Take it to your CISO or IT security lead and use it to start the governance conversation.

3. **Book a scoping call.** Neither tool requires a full procurement process to evaluate. A conversation with the Cisco team to understand what a deployment would look like for your specific environment is a low-cost, low-commitment first step.

The organisations that act on this now — even with a first draft and a single conversation — will be ahead of the ones that wait for a perfect plan.

---
