# Monday Morning Action Plan

---

> **How to use this document:** Pick one experiment. Just one. Do it this week. Then pick another. The goal is not to transform your organisation in a fortnight — it is to build enough direct experience that you can speak about AI from practice, not from theory. Every experiment below requires only the tools you used today, costs nothing, and can be run on your own laptop without involving your IT department.

---

## The Five Experiments

---

### Experiment 1: The Network Report Analyst
**Audience: IT Operators**

Take a real network report, device log, or incident summary from your own environment — anonymise it if necessary — and ask your Jan AI assistant to summarise it, identify the three most urgent issues, and draft a plain-English action list for the on-call engineer. Compare the AI's output to what you would have written yourself. Note where it was useful, where it was wrong, and what you would change in the prompt to improve it.

**Tool:** Jan AI + Qwen3-4B (the assistant you built in Session 2)

**Expected outcome:** A first-draft incident summary produced in under two minutes, plus a clear sense of where AI adds value in your specific reporting workflow and where human judgement is non-negotiable.

**Time investment:** 30 minutes, including time to prepare the sample file and iterate on the prompt once.

---

### Experiment 2: The Policy Gap Spotter
**Audience: IT Operators and IT Architects**

Save one of your organisation's internal IT or security policies as a plain text file (.txt) in your ARK Industries folder — the same folder your Filesystem MCP server points to from Session 2. Then use the IT Policy Intelligence Agent — the same agentic workflow you ran in Session 3 — to ask it: "Read the policy file from the filesystem and search the web for the latest NCSC guidance on [your policy topic]. Compare them. What is covered? What is missing? What has changed in the last 12 months?" Review the output critically before acting on anything it surfaces.

**Tool:** Jan AI + Qwen3-4B + Tavily MCP (your personal Tavily key from Session 2)

**Expected outcome:** A first-cut gap analysis in under five minutes that would typically take an analyst 30–60 minutes to produce manually. Even if the agent misses something — and it will — the draft gives you a far faster starting point than a blank page.

**Time investment:** 30 minutes, including saving your policy file in the correct folder and running the agent once or twice with different prompts.

---

### Experiment 3: The System Prompt Tuner
**Audience: IT Architects**

Return to the ARK Industries network assistant you built in Session 2 and redesign the system prompt for a different role in your own organisation — a service desk assistant, a change management assistant, or a documentation helper. Think carefully about: What is this assistant's job? What should it never do? What tone should it use? What should it always recommend as a next step? Write the system prompt on the System Prompt Worksheet from today, then test it with five realistic questions a colleague in that role would actually ask.

**Tool:** Jan AI + Qwen3-4B (your Session 2 Assistant setup, with a new system prompt)

**Expected outcome:** A working prototype of an AI assistant tailored to a specific role in your organisation — something you can demonstrate to a colleague or manager as a concrete example of what "AI as a co-pilot" looks like in your environment.

**Time investment:** 1 hour, including writing the system prompt, testing it, and iterating at least twice.

---

### Experiment 4: The Agent Design Sprint
**Audience: IT Architects**

Take the Agent Design Canvas you filled in during Session 3 and turn it into a real brief. For the task you wrote in Box 1, identify: the specific data source the agent would need to read (a log file, an internal policy document, a website), the tool that would give it access, and the approval point where you would want to review the output before it goes anywhere. Write this up as a one-page proposal — not a technical specification, but a plain-English description of the agent and its business case. This is the document you would use to start the conversation with your IT Director or security lead.

**Tool:** Your completed Agent Design Canvas (printed) + Jan AI Projects as a prototype environment

**Expected outcome:** A one-page agent brief that is concrete enough to discuss with a decision-maker, grounded in a specific workflow your team actually runs, and framed around a measurable benefit.

**Time investment:** 1.5 hours, including reviewing the canvas, writing the brief, and running a prototype version of the agent in Jan AI to validate that the task is achievable.

---

### Experiment 5: The Manager Pilot Proposal
**Audience: IT Line Managers**

Use the email template in `manager_brief_email_template.md` as a starting point, then personalise it for your specific organisation and team. Before you send it, open Jan AI and ask it to help you anticipate the three most likely objections your manager will raise — data security, cost, and resource requirement are usually top of the list. For each objection, draft a one-paragraph response grounded in what you did today: the tools are free, the data stayed on your laptop, and the time investment was four hours to get from zero to a working prototype. Send the email this week.

**Tool:** Jan AI + Qwen3-4B (for objection preparation) + your own email client

**Expected outcome:** A sent email that starts a real conversation about a 30-day internal pilot — with objections pre-empted and a specific, low-risk ask on the table.

**Time investment:** 45 minutes, including personalising the template, running the objection-preparation exercise, and sending the email.

---

## A Note on All Five Experiments

None of these require budget approval. None require your IT department's involvement at this stage. None require writing a line of code. All five use the exact tools you set up today — the only prerequisite is that your laptop is open and Jan AI is running.

The goal of each experiment is not to produce a production-ready output. The goal is to produce something specific and real from your own organisation's context — something you could show a colleague on a Monday afternoon and say: *"I built this this morning. Here is what it can do. Here is where it needs human judgement. Here is what I would do differently next time."*

That is the entire skill. You practised it today. Now you continue.

---

> **Next step:** If you are not sure which experiment to start with, start with Experiment 1 if you are an Operator, Experiment 3 if you are an Architect, and Experiment 5 if you are a Manager. The others will follow naturally.

---

*All tools free or open source. No code required.*
