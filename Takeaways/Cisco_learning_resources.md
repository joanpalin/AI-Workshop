# Cisco Learning Resources — Next Steps After the Workshop

## Cisco AI Technical Workshop — London, 16 June 2026

---

> **How to use this document:** The workshop gave you the foundations and working prototypes. This page is your map for going further. Every resource below is free or has a meaningful free tier. Resources are labelled by audience: **Operator** (hands-on practitioners), **Architect** (infrastructure and integration designers), **Manager** (governance, strategy, and team leadership), or **All** (relevant to everyone in the room today).

---

## Cisco Learning

---

### Cisco U — AI Learning Paths
**URL:** [https://u.cisco.com/learn/artificial-intelligence](https://u.cisco.com/learn/artificial-intelligence)
**Audience:** All

The official Cisco learning platform with free tutorials, structured learning paths, and certification preparation content covering AI fundamentals, AI for network engineers, workflow automation, and building AI solutions on Cisco infrastructure. Two paths are particularly relevant after today: **AIBIZ** (for non-technical professionals who want to apply AI strategically) and **AITECH** (for technical practitioners ready to design and deploy AI solutions). Both have free tiers. The "Understanding AI and LLMs as a Network Engineer" tutorial is a strong first step for anyone who wants to deepen the foundations from Session 1.

---

### Cisco DevNet — AI Topic Hub
**URL:** [https://developer.cisco.com/site/ai/](https://developer.cisco.com/site/ai/)
**Audience:** Operator, Architect

Cisco's developer hub for AI and automation. The AI Topic Hub aggregates articles, video walkthroughs, and hands-on Learning Labs covering topics directly relevant to the skills from today: LLM fundamentals for network engineers, MCP server development for network automation, agentic AI workflows, and Cisco product AI integrations (Meraki, Catalyst Center, ThousandEyes). The sandbox environment lets you experiment with Cisco APIs in a safe, isolated lab — no production system access required.

---

### Cisco DevNet — Learning Labs
**URL:** [https://developer.cisco.com/learning/](https://developer.cisco.com/learning/)
**Audience:** Operator, Architect

Step-by-step guided labs covering network automation, API integration, and AI-assisted network operations. Labs run in your browser or against free sandbox environments. Relevant starting points include the machine learning for network engineers series and the AI-assisted configuration labs. All free; no prior development experience required for the introductory tracks.

---

### Cisco DevNet — Sandbox
**URL:** [https://developer.cisco.com/site/sandbox/](https://developer.cisco.com/site/sandbox/)
**Audience:** Operator, Architect

Free, isolated lab environments for testing Cisco APIs and automation tools — including Meraki, Catalyst Centre, and ThousandEyes — without touching production infrastructure. Always-on sandboxes require no reservation; reservation sandboxes give you a private environment for extended testing. A useful place to prototype the agentic Meraki integration discussed in Session 3 Q&A.

---

## Cisco Security — AI

---

### Cisco AI Defense — Product Page
**URL:** [https://www.cisco.com/site/us/en/products/security/ai-defense/index.html](https://www.cisco.com/site/us/en/products/security/ai-defense/index.html)
**Audience:** Manager, Architect

The product home for Cisco AI Defense — the enterprise AI security solution demonstrated in Session 4. Covers the core capabilities: AI visibility (discovering shadow and sanctioned AI usage), model and application validation (algorithmic red-teaming of AI deployments), and runtime protection (guardrails against prompt injection, jailbreaking, and data leakage). Includes a demo request option. The February 2026 expansion added MCP governance and agentic AI runtime protections — directly relevant to the tool-calling architectures you built today.

---

### Cisco AI Access — Product Page
**URL:** [https://www.cisco.com/site/us/en/products/security/secure-access/ai-access/index.html](https://www.cisco.com/site/us/en/products/security/secure-access/ai-access/index.html)
**Audience:** Manager, Architect

AI Access is the Cisco capability for governing employee use of third-party AI tools — classifying, monitoring, and controlling access to services like ChatGPT, Copilot, and others at the network layer. The most relevant product for a Line Manager or security lead starting a conversation with their CISO about shadow AI policy. Integrated with Cisco Secure Access SSE.

---

### Cisco AI Defense — Data Sheet (PDF)
**URL:** [https://www.cisco.com/c/en/us/products/collateral/security/ai-defense/ai-defense-ds.html](https://www.cisco.com/c/en/us/products/collateral/security/ai-defense/ai-defense-ds.html)
**Audience:** Manager, Architect

A concise, printable technical summary of AI Defense capabilities — useful for sharing with a CISO or security team who want the specifics before a scoping conversation.

---

## Open Standards — MCP

---

### Model Context Protocol — Official Documentation
**URL:** [https://modelcontextprotocol.io](https://modelcontextprotocol.io)
**Audience:** Architect

The official documentation for MCP — the open standard (introduced by Anthropic in November 2024, now hosted by the Linux Foundation) that underpinned the tool connections you built in Session 2. Covers the protocol architecture, available server implementations, and integration guides. Architects who want to understand how to connect their organisation's systems to an AI model — Meraki, internal databases, ticketing systems — will find the server registry and quickstart guides the most immediately useful sections.

---

### Anthropic — MCP Overview and Announcement
**URL:** [https://www.anthropic.com/news/model-context-protocol](https://www.anthropic.com/news/model-context-protocol)
**Audience:** Architect, Manager

A plain-English explanation of why MCP was created and what problem it solves — written for a technical-but-not-developer audience. A good resource to share with a colleague or manager who asks: "Why does the AI need a special protocol to connect to things?"

---

## Tools Used in the Workshop

---

### LM Studio — Documentation and Downloads
**URL:** [https://lmstudio.ai](https://lmstudio.ai)
**Audience:** Operator, Architect

The home of LM Studio — the local AI runtime used in Session 2. Download page, documentation, and the model library are all accessible from the main site. If you want to experiment with different models after today, the model catalogue inside LM Studio is the easiest place to browse — search for "Qwen", "Llama", or "Mistral" to find the same family of models used in the workshop.

---

### AnythingLLM — Documentation and Downloads
**URL:** [https://anythingllm.com](https://anythingllm.com)
**Audience:** Operator, Architect

The home of AnythingLLM Desktop — the agentic AI application used in Session 3. The documentation covers workspace configuration, document upload for RAG, agent skills (including web search and MCP connections), and the system prompt editor. If you want to connect your personal Groq key after today, the setup is identical to what you did this afternoon — swap the shared workshop key for your own in workspace Agent Configuration.

---

### Groq — Free API Console
**URL:** [https://console.groq.com](https://console.groq.com)
**Audience:** Operator, Architect

The Groq console where you create a free personal API key to replace the shared workshop key after today. No credit card required. The free tier is generous enough for daily personal experimentation. The model you used today — `llama-3.3-70b-versatile` — is available in the free tier. Create an account, generate a key, and swap it into your AnythingLLM workspace Agent Configuration settings.

---

### Tavily — Free Web Search API
**URL:** [https://app.tavily.com](https://app.tavily.com)
**Audience:** Operator, Architect

The web search tool used in both Session 2 (via MCP in LM Studio) and Session 3 (via AnythingLLM's agent skill). The free tier provides 1,000 searches per month — more than sufficient for personal experimentation. If you created a personal Tavily key during Session 2, it works in both LM Studio and AnythingLLM. If you used only the shared workshop key, create your own free account here.

---

## Further Reading

---

### NCSC — AI Cyber Security Guidance
**URL:** [https://www.ncsc.gov.uk/collection/ai-cyber-security](https://www.ncsc.gov.uk/collection/ai-cyber-security) *(verify URL before publishing)*
**Audience:** Manager, Architect

The UK National Cyber Security Centre's official guidance on AI security for organisations — the live web source your Session 3 agent searched against in the lab. Useful background reading for anyone preparing an AI governance or acceptable use policy. The guidance is updated regularly, which is exactly why a live-retrieval approach (as in Session 3) is more reliable than relying on static training data.

---

### ICO — Guidance on AI and Data Protection
**URL:** [https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/)
**Audience:** Manager

The UK Information Commissioner's Office guidance on AI and GDPR compliance — the starting point for any conversation with your DPO about AI tool adoption. Covers data minimisation, transparency, and automated decision-making obligations.

---

*Cisco AI Technical Workshop — London, 16 June 2026*
*All URLs verified at time of publication. URLs are subject to change — if a link does not resolve, search the resource name directly from the organisation's homepage.*
