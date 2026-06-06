# Session 4: Securing AI

---

## What This Session Is About

You have spent the day building things. In Session 2, you gave an AI assistant access to tools and live data. In Session 3, you ran an autonomous agent that searched the web, read internal documents, and produced a structured output — pausing for your approval before it finished.

Now this session asks the question that has probably been forming in the back of your mind since the morning:

> **What happens when this goes wrong, gets misused, or is deliberately attacked?**

That is not a hypothetical question. Every component of the architecture you built today — the local model, the MCP-connected tools, the agentic workflow — exists in enterprise deployments at scale right now. And in most organisations, the governance layer to protect it does not yet exist.

This session changes that. By the end, you will have named the specific threats AI introduces, understood why visibility must come before policy, seen Cisco's purpose-built response in an environment, and produced a draft AI Acceptable Use Policy you can take back to your organisation and use.

---

## What This Session Covers

### Threat Category 1 — Shadow AI
Employees using personal AI tools — ChatGPT, Gemini, Copilot — on corporate devices, today, without IT's knowledge. They are pasting in contracts, customer data, internal reports, and technical documentation to get work done faster. No malicious intent. No audit trail. No record of what left the building or where it went.

### Threat Category 2 — Prompt Injection
A malicious actor embeds hidden instructions inside content your AI agent will process — a fake invoice, a phishing email, a webpage. The agent reads it, follows the hidden instruction, and takes an action it was never supposed to take. This is the attack you will carry out against your own assistant during the session.

### Threat Category 3 — Data Exfiltration via AI
An AI agent with access to sensitive data — exactly like the one you built this morning — can be manipulated into summarising and sending that data to an unauthorised destination. The agent is not malfunctioning. It is following instructions. The attack exploits the agent's obedience.

### Threat Category 4 — Model Poisoning
If an organisation fine-tunes an AI model on its own data, feeding corrupt or biased data into that process can cause the model to produce subtly incorrect outputs at scale. Confident. Coherent. Wrong. And potentially undiscovered until a real decision has been made based on the bad output.

### Threat Category 5 — Hallucination Risk
Not an attack — a property of the technology itself. AI models can state incorrect information with complete confidence. In a chat context, that is inconvenient. In an agentic context — an agent acting on hallucinated firmware version numbers, wrong IP addresses, or non-existent policy clauses — the consequences can be real and operational.

---

## The Cisco Response

Cisco AI Access and Cisco AI Defense are not presented here as hypothetical future tools. They are the purpose-built enterprise response to the exact threats listed above, and they are designed to govern the exact architecture you built today.

- **Cisco AI Access** gives your IT and security team the visibility they currently lack: which AI tools are in use on the network, by whom, how often, and what categories of data are being submitted. From that visibility, you can set policy — approve tools, block tools, and apply conditional access rules where needed.

- **Cisco AI Defense** protects the AI tools your organisation has deployed internally. It monitors for prompt injection attempts, detects anomalous behaviour in agentic workflows, and generates structured incident reports that your security team can triage and act on.

Together, they cover the full AI footprint — what your employees are reaching out to, and what your organisation has built and deployed.


---

## Materials in This Folder

| File | What It Contains |
|---|---|
| `threat_landscape_reference.md` | A plain-English reference card for each of the five AI threat categories, with a concrete ARK Industries example for each one |
| `ai_acceptable_use_policy_template.md` | The blank ARK Industries AI Acceptable Use Policy template — complete this during the session activity and take it back to your organisation |
| `cisco_ai_stack_reference.md` | A plain-English reference card for Cisco AI Access and Cisco AI Defense — what each one does, how it connects to the architecture you built today, and a concrete ARK Industries use case for each |

---

## What You Will Do in This Session

1. **Name the threats** — five categories of AI-specific risk, all active in enterprise environments today, none of them detectable by a traditional firewall
2. **Attack your own assistant** — paste three pre-written prompt injection attempts into your Jan AI ARK Industries assistant from Session 2 and observe what happens when there is no governance layer
3. **See Cisco's response** — navigate AI Defense environment showing acustomer's AI deployment and asset visiblity
4. **Draft your policy** — complete the first version of an ARK Industries AI Acceptable Use Policy using the template provided; the blank version is yours to take back and adapt for your own organisation

---

## What You Take Away

By the time this session closes, you will have:

- A vocabulary for AI-specific threats that you can use in a governance conversation with a CISO or board
- A lived understanding of what prompt injection looks like in practice
- A reference overview of the Cisco tools designed to address the governance gap
- A draft AI Acceptable Use Policy that is suitable for internal review and adaptation

---

## What Comes Next

This session is the final structured block of the day. After this, the workshop moves into the **General Discussion & Q&A** — an open forum where the facilitators, Cisco team, and the room work through the questions that have been building throughout the day.

---
