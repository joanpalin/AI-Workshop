# Cisco Learning Resources — Next Steps After the Workshop

---

> **How to use this document:** The workshop gave you the foundations and working prototypes. This page is your map for going further. Every resource below is free or has a meaningful free tier.
---

## Cisco Learning

---

### Cisco U — AI Learning Paths
**URL:** [https://u.cisco.com/learn/artificial-intelligence](https://u.cisco.com/learn/artificial-intelligence)


The official Cisco learning platform with free tutorials, structured learning paths, and certification preparation content covering AI fundamentals, AI for network engineers, workflow automation, and building AI solutions on Cisco infrastructure. Two paths are particularly relevant after today: **AIBIZ** (for non-technical professionals who want to apply AI strategically) and **AITECH** (for technical practitioners ready to design and deploy AI solutions). Both have free tiers. The "Understanding AI and LLMs as a Network Engineer" tutorial is a strong first step for anyone who wants to deepen the foundations from Session 1.

---

### Cisco DevNet — AI Topic Hub
**URL:** [https://developer.cisco.com/site/ai/](https://developer.cisco.com/site/ai/)


Cisco's developer hub for AI and automation. The AI Topic Hub aggregates articles, video walkthroughs, and hands-on Learning Labs covering topics directly relevant to the skills from today: LLM fundamentals for network engineers, MCP server development for network automation, agentic AI workflows, and Cisco product AI integrations (Meraki, Catalyst Center, ThousandEyes). The sandbox environment lets you experiment with Cisco APIs in a safe, isolated lab — no production system access required.

---

### Cisco DevNet — Learning Labs
**URL:** [https://developer.cisco.com/learning/](https://developer.cisco.com/learning/)


Step-by-step guided labs covering network automation, API integration, and AI-assisted network operations. Labs run in your browser or against free sandbox environments. Relevant starting points include the machine learning for network engineers series and the AI-assisted configuration labs. All free; no prior development experience required for the introductory tracks.

---

### Cisco DevNet — Sandbox
**URL:** [https://developer.cisco.com/site/sandbox/](https://developer.cisco.com/site/sandbox/)


Free, isolated lab environments for testing Cisco APIs and automation tools — including Meraki, Catalyst Centre, and ThousandEyes — without touching production infrastructure. Always-on sandboxes require no reservation; reservation sandboxes give you a private environment for extended testing. A useful place to prototype the agentic Meraki integration discussed in Session 3 Q&A.

---

## Cisco Security — AI

---

### Cisco AI Defense — Product Page
**URL:** [https://www.cisco.com/site/us/en/products/security/ai-defense/index.html](https://www.cisco.com/site/us/en/products/security/ai-defense/index.html)


The product home for Cisco AI Defense — the enterprise AI security solution demonstrated in Session 4. Covers the core capabilities: AI visibility (discovering shadow and sanctioned AI usage), model and application validation (algorithmic red-teaming of AI deployments), and runtime protection (guardrails against prompt injection, jailbreaking, and data leakage). Includes a demo request option. The February 2026 expansion added MCP governance and agentic AI runtime protections — directly relevant to the tool-calling architectures you built today.

---

### Cisco AI Access — Product Page
**URL:** [https://www.cisco.com/site/us/en/products/security/secure-access/ai-access/index.html](https://www.cisco.com/site/us/en/products/security/secure-access/ai-access/index.html)


AI Access is the Cisco capability for governing employee use of third-party AI tools — classifying, monitoring, and controlling access to services like ChatGPT, Copilot, and others at the network layer. The most relevant product for a Line Manager or security lead starting a conversation with their CISO about shadow AI policy. Integrated with Cisco Secure Access SSE.

---

### Cisco AI Defense — Data Sheet (PDF)
**URL:** [https://www.cisco.com/c/en/us/products/collateral/security/ai-defense/ai-defense-ds.html](https://www.cisco.com/c/en/us/products/collateral/security/ai-defense/ai-defense-ds.html)


A concise, printable technical summary of AI Defense capabilities — useful for sharing with a CISO or security team who want the specifics before a scoping conversation.

---

## Open Standards — MCP

---

### Model Context Protocol — Official Documentation
**URL:** [https://modelcontextprotocol.io](https://modelcontextprotocol.io)


The official documentation for MCP — the open standard (introduced by Anthropic in November 2024, now hosted by the Linux Foundation) that underpinned the tool connections you built in Session 2. Covers the protocol architecture, available server implementations, and integration guides. Architects who want to understand how to connect their organisation's systems to an AI model — Meraki, internal databases, ticketing systems — will find the server registry and quickstart guides the most immediately useful sections.

---

### Anthropic — MCP Overview and Announcement
**URL:** [https://www.anthropic.com/news/model-context-protocol](https://www.anthropic.com/news/model-context-protocol)


A plain-English explanation of why MCP was created and what problem it solves — written for a technical-but-not-developer audience. A good resource to share with a colleague or manager who asks: "Why does the AI need a special protocol to connect to things?"

---

## Tools Used in the Workshop

---

### Jan AI — Documentation and Downloads
**URL:** [https://jan.ai](https://jan.ai)


The home of Jan AI — the local AI runtime used in Sessions 2 and 3. Download page, documentation, and release notes are all accessible from the main site. Jan AI supports local model running, MCP server connections (for web search and file access), an Assistants system for saving system prompt configurations, and a Projects system for agentic workflows. If you want to experiment with different models after today, the Jan AI Hub is the easiest place to browse and download — search for "Qwen3" or "Llama" to find the same family of models.

---

### Tavily — Free Web Search API
**URL:** [https://app.tavily.com](https://app.tavily.com)


The web search tool used via MCP in both Session 2 (connected to your AI assistant) and Session 3 (connected to the IT Policy Intelligence Agent). The free tier provides 1,000 searches per month — more than sufficient for personal experimentation. If you created a personal Tavily key during Session 2, that same key works across all Jan AI sessions. If you used only the shared workshop key, create your own free account here.

---

## Further Reading

---

### NCSC — AI Cyber Security Guidance
**URL:** [https://www.ncsc.gov.uk/collection/ai-cyber-security](https://www.ncsc.gov.uk/collection/ai-cyber-security) *(verify URL before publishing)*


The UK National Cyber Security Centre's official guidance on AI security for organisations — the live web source your Session 3 agent searched against in the lab. Useful background reading for anyone preparing an AI governance or acceptable use policy. The guidance is updated regularly, which is exactly why a live-retrieval approach (as in Session 3) is more reliable than relying on static training data.

---

### ICO — Guidance on AI and Data Protection
**URL:** [https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/)


The UK Information Commissioner's Office guidance on AI and GDPR compliance — the starting point for any conversation with your DPO about AI tool adoption. Covers data minimisation, transparency, and automated decision-making obligations.

---
*All URLs verified at time of publication. URLs are subject to change — if a link does not resolve, search the resource name directly from the organisation's homepage.*
