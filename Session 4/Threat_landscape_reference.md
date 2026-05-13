# AI Threat Landscape — Reference Card

**Session 4: Securing AI**

---

> **How to use this card:** This is a reference document, not a slide deck. It gives you a plain-English description of each of the five AI threat categories covered in Session 4, along with a concrete example of how each threat could manifest at ARK Industries. Take it back to your organisation and use it as the starting point for a threat discussion with your security or IT leadership team.

---

## A Note Before You Read

Every threat category on this page is already active in enterprise environments. These are not future risks — they are present-tense operational realities. None of them are detectable by a traditional firewall or endpoint protection tool, because those tools were designed for a different threat model. AI creates a new surface area that requires new thinking.

The five categories below are not exhaustive. They are the ones most immediately relevant to IT professionals adopting AI tools and building AI-connected workflows — which is exactly what you have been doing today.

---

## Threat 1 — Shadow AI

**What it is:**
Employees using personal or unsanctioned AI tools — ChatGPT, Google Gemini, Microsoft Copilot, or others — on corporate devices, without IT's knowledge or approval. The data they submit to those tools leaves the organisation's control with no audit record of what was shared, with which service, or when.

**Why it is different from Shadow IT:**
Shadow IT — employees signing up for Dropbox or Salesforce without telling IT — has been a familiar problem for twenty years. Shadow AI has the same structure, but the adoption velocity is incomparable. Creating a Dropbox account takes minutes and requires configuration. Typing a prompt into ChatGPT takes ten seconds and requires nothing. The volume of data potentially leaving the building is orders of magnitude higher, and it is accelerating daily.

**Why your existing tools cannot see it:**
Your firewall, SIEM, and endpoint detection tools classify traffic by known threat signatures, protocol anomalies, and behavioural patterns. Prompt submission to an AI tool looks, to those systems, like ordinary HTTPS web traffic. There is nothing malicious to flag. The exposure is invisible.

**ARK Industries example:**
An ARK Industries network engineer needs to summarise a site audit report before a client call. They copy the report — which contains internal IP addressing, firmware versions, and configuration details for the customer's network — into ChatGPT to get a quick summary. The summary is useful. The full internal document is now on a third-party server, unlogged, outside ARK's control, with no record that the submission ever happened. The engineer did nothing malicious. The exposure is real regardless.

---

## Threat 2 — Prompt Injection

**What it is:**
A malicious actor embeds hidden instructions inside content that an AI agent will process as part of a normal task — a document, an email, a webpage, an API response. When the agent reads that content, it interprets the hidden instructions as legitimate commands and acts on them, potentially ignoring its original instructions and taking an action it was never supposed to take.

**Why it is particularly dangerous for agentic AI:**
In a basic chat interaction, the risk is limited to the model producing an unexpected response. In an agentic workflow — where the AI is autonomously searching, reading, reasoning, and taking actions — the consequences of a successful injection can be operational. An agent that has been tricked into believing its instructions have changed may search for different data, write different content, send outputs to unauthorised destinations, or skip its Human-in-the-Loop approval checkpoint entirely.

**Why the model alone cannot reliably defend against it:**
Language models cannot consistently distinguish between legitimate instructions from the operator and malicious instructions hidden inside content they are processing. This is a fundamental property of how the technology works, not a flaw in a specific model. Some inputs will be rejected. Some will not. The outcome is unpredictable — and unpredictability at the security layer is not acceptable.

**ARK Industries example:**
An ARK Industries IT manager configures an agent to check incoming vendor emails for firmware update announcements and summarise the key details. A malicious actor sends a carefully crafted email that appears to be a routine vendor communication. Embedded in the email body, invisible in the rendered view, is an instruction telling the agent to forward a copy of all future email summaries to an external address. The agent processes the email, follows the hidden instruction, and begins exfiltrating summarised internal communications. No alert is triggered. The agent is doing exactly what it was told to do.

---

## Threat 3 — Data Exfiltration via AI

**What it is:**
An AI agent that has been granted access to sensitive internal data — documents, file systems, databases — can be manipulated, through a successful prompt injection or a misconfigured system prompt, into retrieving and transmitting that data to an unauthorised destination. The agent is not malfunctioning. It is behaving exactly as its instructions tell it to. The attack exploits the agent's access permissions and its obedience.

**How it differs from traditional data exfiltration:**
Traditional data exfiltration requires an attacker to directly access and extract data from a system. AI-assisted exfiltration uses the AI agent as a proxy: the attacker does not need direct system access. They need only to influence the agent's instructions — through a prompt injection or a manipulated system prompt — and the agent does the rest, using the legitimate access it was already granted.

**Why least-privilege access matters:**
An agent should only have access to the data it needs to complete its specific task. An agent with broad file system access that has been compromised can retrieve far more than a narrowly scoped agent. The architecture you built today with Filesystem MCP is a good example of this principle applied correctly — the tool's scope can be limited to a specific folder. The governance challenge is ensuring those scope limits are consistently applied and monitored.

**ARK Industries example:**
The ARK Industries AI assistant built in Session 2 has been granted read access to a specific folder of network reports via the Filesystem MCP integration. An attacker discovers this assistant is accessible and crafts a prompt that convinces it to read files outside its intended scope — invoking the Filesystem MCP tool with a broader path argument. The assistant complies, reads configuration files containing authentication credentials for network devices, and returns the contents in its response. The attack requires no direct system access. It requires only the ability to submit a prompt.

---

## Threat 4 — Model Poisoning

**What it is:**
When an organisation trains or fine-tunes an AI model on its own internal data — a process increasingly common as organisations look to build AI assistants that reflect their specific context and terminology — the quality of that training data directly determines the quality of the model's outputs. Feeding corrupt, biased, or deliberately manipulated data into the fine-tuning process can cause the model to produce subtly incorrect outputs at scale, with no visible sign that anything has gone wrong.

**Why it is difficult to detect:**
A poisoned model does not fail in an obvious way. It continues to sound confident and coherent. Its outputs are plausible. The errors it introduces are likely to be systematic — consistently wrong in a specific direction — rather than random, which means they may go unnoticed until a decision has been made based on the bad output. Standard application testing that checks for uptime and response time will not detect model poisoning.

**Where the risk is highest:**
Organisations that fine-tune models on sensitive internal data — policy documents, financial records, customer data, operational procedures — face the highest exposure if that training pipeline is compromised. The risk is not limited to external attackers: an insider who can influence the training data, or a misconfigured data pipeline that introduces errors at scale, presents the same threat.

**ARK Industries example:**
ARK Industries decides to fine-tune a local language model on its internal IT policy documentation, so that staff can query policies in natural language. The training data pipeline pulls from a shared document repository. An insider with write access to that repository makes a series of small, targeted edits to several policy documents — slightly altering approval thresholds, exception clauses, and access control requirements. The fine-tuned model learns these corrupted policies as ground truth. For the next six months, every employee who queries the AI for policy guidance receives subtly incorrect answers. The model never flags an error. The outputs are never audited against source documents. The decisions made based on those outputs are never reviewed.

---

## Threat 5 — Hallucination Risk

**What it is:**
AI language models can state incorrect information with complete confidence. This is not a bug in a specific model, and it is not something that will be entirely eliminated by more capable models. It is a fundamental property of how the technology works: models generate responses based on statistical patterns in their training data, not by accessing verified facts. When they do not have reliable information, they may generate plausible-sounding but incorrect content rather than admitting uncertainty.

**Why context matters:**
In a conversational context, hallucination is an inconvenience that an alert user will catch and verify. In an agentic context — where the AI is taking a sequence of autonomous actions based on its own outputs — the consequences can cascade. An agent that hallucinates a firmware version number, an incorrect IP address, a non-existent policy clause, or a made-up compliance deadline may take real actions based on that false information before any human has the opportunity to review it.

**Human-in-the-Loop as a structural defence:**
The Human-in-the-Loop design pattern you saw in Session 3 — where the agent pauses at a defined checkpoint and waits for human approval before continuing — is one of the most effective defences against hallucination risk in agentic workflows. It ensures that a human reviews the agent's reasoning before any irreversible action is taken. It does not eliminate hallucination. It creates a checkpoint at which a human can catch it before it becomes an operational problem.

**ARK Industries example:**
The ARK Industries agent is asked to check network devices across all managed sites for firmware versions more than two versions behind the current release, and draft a prioritised update schedule. The agent searches for current firmware release information, reads the internal network report, and drafts the schedule. In one case, it hallucinates a firmware version number that does not exist — confidently stating that a router model's current release is v9.4.1 when the actual current release is v7.2.0. It classifies six devices as critically out of date based on the incorrect baseline. An ARK Industries engineer receives the draft schedule, does not check the version numbers independently, and raises an emergency change request for those six devices. The emergency work is unnecessary, and the devices that are genuinely out of date are not flagged. The model produced the error. The Human-in-the-Loop checkpoint was bypassed because the draft looked authoritative.

---

## Quick Reference Summary

| Threat | In One Sentence | Requires a Malicious Actor? |
|---|---|---|
| Shadow AI | Employees using unsanctioned AI tools with company data, with no IT visibility or audit trail | No |
| Prompt Injection | Hidden instructions embedded in content that trick an AI agent into taking unauthorised actions | Yes |
| Data Exfiltration via AI | An AI agent manipulated into retrieving and transmitting sensitive internal data to an unauthorised destination | Yes |
| Model Poisoning | Corrupt or manipulated training data causing a fine-tuned model to produce systematically incorrect outputs | Yes (or accidental) |
| Hallucination Risk | An AI model confidently stating incorrect information, with downstream consequences in an agentic workflow | No |

---

*This reference card is yours to keep. Use it as a starting point for a threat discussion with your security or IT leadership team.*
