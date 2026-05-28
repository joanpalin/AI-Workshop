# Session 2: Building AI Assistants
## Participant Lab Guide

**Cisco AI Technical Workshop**

---

> **How to use this guide**
>
> This document is your step-by-step companion for the Session 2 lab. Work through each phase in order. Every command and configuration value is ready to copy and paste — you will never need to compose anything from scratch.
>
> At the end of each phase, a **✅ What you should see** section tells you what success looks like before you move on. If what you see does not match, re-read the phase or raise your hand — a facilitator will come to you.
>
> The fictional company scenario throughout this lab is **ARK Industries**, a large UK infrastructure business with 52 sites. You are the IT Operations team.

---

## Before You Begin — Checklist

Confirm you have the following before Phase 1:

- [ ] A laptop with internet access
- [ ] The ARK Industries file pack (received on USB stick or via QR code) — both files saved in the same folder:
  - `network-report-site-A.txt` — used in this session
  - `it-policy-summary.txt` — used in Session 3
- [ ] A browser tab you can use for downloads and sign-up

> ⚠️ **File extension warning — do this now, before anything else.**
>
> Your operating system may hide file extensions by default. This can cause problems later in the lab when identifying and working with files. Make file extensions visible before continuing:
>
> **Windows:**
> 1. Open **File Explorer**
> 2. Click the **View** menu at the top
> 3. Click **Show**
> 4. Tick **File name extensions**
>
> **Mac:**
> 1. Open **Finder**
> 2. Click **Finder → Settings** (or Preferences on older versions)
> 3. Click the **Advanced** tab
> 4. Tick **Show all filename extensions**
>
> **Linux:** File extensions are visible by default in most file managers.
>
> Confirm that `network-report-site-A.txt` shows its `.txt` extension before continuing.

---

## Phase 1: Install Jan AI

> **What is Jan AI?** Jan AI is a free, open-source application that lets you run AI models directly on your own laptop. Nothing you type is sent to an external server — all processing happens on your machine. It also provides a simple, point-and-click interface for connecting AI tools such as web search and file access.

**Step 1.** Open a browser and go to **jan.ai**

**Step 2.** Click the **Download** button and select the version for your operating system.

**Step 3.** Once the installer has downloaded, open it to run it.

**Step 4.** Accept all default options and click through the installer. No settings need to be changed.

**Step 5.** When the installer finishes, open Jan AI. You should see the main Jan AI window with a sidebar on the left.

> ⚠️ **If your operating system or antivirus shows a security warning:** This is common with newly downloaded applications. Accept or allow the installer to proceed. If your corporate security policy blocks the install entirely, let a facilitator know.

---

### ✅ What you should see

Jan AI opens and displays its main window. The left sidebar shows icons for chat, hub, settings, and other panels. No model is loaded yet — that is correct.

---

## Phase 2: Download the Qwen3.5-4B-GGUF Model

> **What is this model?** Qwen3.5 is an open-source AI language model developed by Alibaba. The "4B" refers to approximately four billion parameters — this is a compact model designed to run efficiently on a standard laptop without a specialist graphics card. The version you will download is optimised for following instructions and, importantly, for reliably using tools such as web search and file access.
>
> **The download is the critical path item in this lab.** Start it now and continue with Phases 3 and 4 while it runs in the background.

**Step 1.** In Jan AI, click the **Hub** icon in the left sidebar. This opens the model catalogue — a searchable list of available AI models.

**Step 2.** In the search bar, type:

```
Qwen3.5
```

**Step 3.** Find **Qwen3.5-4B-GGUF** in the results (by Unsloth, 2.3 GB).

**Step 4.** Click **Download**. A progress indicator will appear showing download progress.

> ⚠️ **Do not close Jan AI while the model downloads.** The download runs in the background — you can continue with Phases 3 and 4 while it completes. You will need the model to be fully downloaded before Phase 5. If the progress bar stalls for more than two minutes, let a facilitator know.

---

### ✅ What you should see

A download progress indicator is visible in Jan AI showing the Qwen3.5-4B-GGUF download in progress. Jan AI remains fully usable — move on to Phase 3 immediately.

---

## Phase 3: Install Node.js LTS

> **What is Node.js?** Node.js is a free, open-source software platform. Jan AI uses it to run the MCP server packages (Tavily and Filesystem) in the background. You will not interact with Node.js directly — it runs silently behind the scenes. Think of it as the engine the tools need in order to operate.

**Step 1.** Open a browser tab and go to **nodejs.org**

**Step 2.** Click the **LTS** download button (LTS stands for Long Term Support — this is the stable, recommended version). Select the installer for your operating system.

**Step 3.** Once the installer downloads, open it to run it.

**Step 4.** Accept all default options and click through every screen. When the installer asks about additional tools, leave the defaults unchanged. Click **Finish** (or **Close** on Mac).

**Step 5.** Node.js is now installed. You do not need to open or configure it. It runs in the background automatically when Jan AI needs it.

> ⚠️ **If you see `npm warn deprecated` messages in a terminal window during installation:** These warnings are expected and harmless. They are internal package notices — not errors. The installation has succeeded. Dismiss the terminal if it stays open.

---

### ✅ What you should see

The Node.js installer completes and closes. No further action is required. Node.js will not appear as a visible application — that is correct. It runs as a background service.

---

## Phase 4: Create Your Tavily API Key

> **What is Tavily?** Tavily is a web search service designed specifically for AI tools. Your AI assistant will use it to search the internet in real time during the lab — giving it access to current information that is not in its training data.
>
> **Free tier:** 1,000 searches per month. No credit card required.

**Step 1.** Open a browser tab and go to **app.tavily.com**

**Step 2.** Click **Sign Up** and register with your email address. You will receive a verification email — click the link to confirm your account.

**Step 3.** Once logged in, click **Overview** in the left sidebar of the Tavily dashboard.

**Step 4.** Your API key is displayed on the Overview page. It begins with the letters **tvly-** followed by a long string of characters.

**Step 5.** Copy the full API key:
- Click the key to select it, or highlight it manually
- Press **Ctrl+C** (Windows/Linux) or **Cmd+C** (Mac) to copy it

> ⚠️ **Keep this browser tab open.** You will need to paste the key in Phase 5. If you accidentally close the tab, log back in to app.tavily.com and find the key in the Overview panel. If you already have a Tavily account, simply log in and retrieve your existing key.

---

### ✅ What you should see

Your Tavily API key is copied to your clipboard. It starts with `tvly-`. The Overview page is still visible in your browser tab.

---

## Phase 5: Configure MCP Servers in Jan AI

> **What are MCP servers?** MCP (Model Context Protocol) is the open standard that allows an AI model to connect to external tools. In this phase, you will add two MCP servers to Jan AI using its built-in settings interface — no file editing, no code required. You are telling Jan AI: "These are the tools I want my assistant to have access to."
>
> You will configure two servers:
> - **Tavily Web Search** — gives your assistant live internet search
> - **filesystem** — gives your assistant read access to your ARK Industries documents folder
>
> Jan AI manages the technical connection in the background. Your job is to fill in a short form for each one.

---

### Part A — Add the Tavily Web Search MCP server

**Step 1.** In Jan AI, click the **Settings** icon (gear icon) in the left sidebar.

**Step 2.** Select **MCP Servers** from the settings menu.

**Step 3.** Click **Add MCP Server** in the top-right corner of the MCP Servers panel. A dialog box labelled **Edit MCP Server** will appear.

**Step 4.** Fill in the dialog as follows:

| Field | Value to enter |
|---|---|
| **Server Name** | `Tavily Web Search` |
| **Transport Type** | `STDIO` (select this radio button) |
| **Command** | `npx` |

**Step 5.** In the **Arguments** section, click the **+** button to add each argument one at a time. Add them in this order:

| Argument | Value |
|---|---|
| First | `-y` |
| Second | `tavily-mcp@latest` |

**Step 6.** In the **Environment Variables** section, click the **+** button and add one entry:

| Key | Value |
|---|---|
| `TAVILY_API_KEY` | Paste your `tvly-` key from the browser tab you kept open in Phase 4 |

> ⚠️ **Paste the key exactly.** Do not add spaces before or after it. The key must start with `tvly-`. If you closed the Tavily tab, log back in to app.tavily.com → Overview to retrieve it.

**Step 7.** Click **Save**.

**Step 8.** The Tavily Web Search server now appears in the MCP Servers list. **Toggle the enable switch to ON** — the toggle bar next to the server name must be switched on for the server to be active.

---

### Part B — Add the Filesystem MCP server

**Step 1.** Click **Add MCP Server** again in the top-right corner. A new Edit MCP Server dialog opens.

**Step 2.** Fill in the dialog as follows:

| Field | Value to enter |
|---|---|
| **Server Name** | `filesystem` |
| **Transport Type** | `STDIO` (select this radio button) |
| **Command** | `npx` |

**Step 3.** In the **Arguments** section, click the **+** button to add each argument one at a time. Add them in this order:

| Argument | Value |
|---|---|
| First | `-y` |
| Second | `@modelcontextprotocol/server-filesystem` |
| Third | Your ARK Industries folder path — see Step 4 below |

**Step 4 — Find and copy your ARK Industries folder path.**

You need to tell the Filesystem server exactly where on your laptop the ARK Industries files are stored. Do not type a path from memory — copy it directly from your file manager:

**Windows:**
1. Open **File Explorer** (press **Windows + E**)
2. Navigate to the folder containing both `network-report-site-A.txt` and `it-policy-summary.txt`
3. Click the **address bar** at the top of the window — this highlights the full path
4. Press **Ctrl+A** then **Ctrl+C** to copy it
5. Return to Jan AI and paste this path into the third argument field

**Mac:**
1. Open **Finder**
2. Navigate to the folder containing both ARK Industries files
3. Right-click the folder and hold the **Option** key — select **Copy "[folder name]" as Pathname**
4. Return to Jan AI and paste this path into the third argument field

**Linux:**
1. Open your file manager and navigate to the ARK Industries folder
2. Copy the full path from the address bar (or press **Ctrl+L** to reveal it)
3. Return to Jan AI and paste this path into the third argument field

> **Your path will be unique to your machine.** Examples of what it might look like:
>
> Windows: `C:\Users\YourName\Documents\ARK-Industries`
>
> Mac: `/Users/YourName/Documents/ARK-Industries`
>
> Linux: `/home/yourname/Documents/ARK-Industries`
>
> ⚠️ **Windows users — if your Documents folder is synced with OneDrive**, the path will include OneDrive in the middle — for example:
> `C:\Users\YourName\OneDrive\Documents\ARK-Industries`
> This is normal and correct. Copy it exactly as File Explorer shows it.

**Step 5.** Leave the **Environment Variables** section empty — no key or value is needed for the Filesystem server.

**Step 6.** Click **Save**.

**Step 7.** The filesystem server now appears in the MCP Servers list. **Toggle the enable switch to ON.**

---

### ✅ What you should see

Both **Tavily Web Search** and **filesystem** are listed in the MCP Servers panel under Settings. Both have their enable toggle switched ON. You are ready to create your assistant.

**Now turn both MCP servers OFF and we will turn it on once we progress the lab.**

---

## Phase 6: Create Your ARK Industries Assistant

> **What is an Assistant?** In Jan AI, an Assistant is a saved configuration that combines a system prompt and a set of instructions. Creating an Assistant means your ARK Industries setup is stored permanently — you do not need to re-enter the instructions every time you start a new conversation.
>
> **What is a system prompt?** A system prompt is a hidden set of instructions given to the AI before any conversation begins. It defines the assistant's role, what it knows about your environment, and how it should behave. Think of it as a new contractor's orientation briefing — you tell the assistant who it is and what the rules are, and it follows those instructions for every message that follows.
>
> You will configure the ARK Industries Network Operations Assistant now. In Step 8 of the core lab, you will create a second Assistant with a system prompt for your own real role.

**Step 1.** In Jan AI, click the **Settings** icon in the left sidebar.

**Step 2.** Select **Assistants** from the settings menu.

**Step 3.** Click **Add Assistant**.

**Step 4.** Give your assistant a name. Use:

```
ARK Industries — Network Ops
```

**Step 5.** Find the **Instructions** field. Copy the following system prompt exactly as written and paste it into the field:

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

**Step 6.** Click **Save** (or the equivalent confirmation button). The ARK Industries — Network Ops assistant is now saved.

**Step 7.** Return to the main panel. Create a **New Project** in Jan AI and select **ARK Industries — Network Ops** as the Assistant for that project.

---

### ✅ What you should see

The ARK Industries — Network Ops Assistant is saved and appears in your Assistants list. A new project is open with that Assistant active. The instructions you entered are in effect — you will see their effect immediately when you send the first message in Phase 7.

---

## Phase 7: Run the Lab — Test Queries

You are now ready to run the core lab. Work through Steps 1–8 in order. Take your time — the key moments of learning are in the comparisons.

---

### Step 1 — Confirm your model is responding

In the Jan AI project chat, type the following and press **Enter**:

```
Hello. Are you ready to help with ARK Industries network operations?
```

Confirm that the model responds. The response should reflect the system prompt persona you just set — it should introduce itself as the ARK Industries network operations assistant, not as a generic AI.

---

### Step 2 — Test Tavily web search (baseline first — without MCP)

> This step shows you what the AI knows from its training data alone — before any live web search.

Type the following in the chat:

```
What is the latest NCSC guidance on securing AI in enterprise environments?
```

Read the response. Note that the model answers from its training data. The information may be accurate but it is not necessarily current — the model has a knowledge cutoff date and cannot access anything published after it was trained.

---

### Step 3 — Ask the same question WITH Tavily web search

Turn the Tavily MCP Server ON. Now ask the same question, but this time explicitly direct the AI to use its web search tool:

```
Search the web for the latest NCSC guidance on securing AI in enterprise environments. Use Tavily.
```

Watch the chat carefully. You should see an indicator appear showing that Jan AI is calling the Tavily tool — the AI is going out to the internet in real time to retrieve current information.

Compare the two responses. Notice:
- The web search result is more recent
- The AI cites the source it retrieved
- The AI is working with information it found, not information it memorised

> **This is MCP in action.** The AI has not changed. The model is identical. What changed is that it now has a tool — and it used it.

---

### Step 4 — Access the ARK Industries network report via Filesystem MCP

Turn the Filesystem MCP Server ON. Type the following in the chat:

```
Read the ARK Industries network report and tell me the three most urgent issues right now.
```

Watch the chat carefully. You should see a tool call indicator showing that Jan AI is calling the Filesystem MCP — the AI is reading `network-report-site-A.txt` directly from your laptop.

The response will be grounded in the specific contents of that document — not generic network advice from training data.

> **This is the moment that distinguishes a connected AI assistant from a chatbot.** The AI is reading your organisation's actual data and answering a specific operational question from that data.

---

### Step 5 — Try a follow-up question on the same document

```
Based on the same report, draft a brief summary suitable for an engineering team handover. Keep it under 100 words.
```

Notice how the AI stays within the context of the document and formats the response according to your instruction.

---

### Step 6 — Ask a combined query (web search + file)

```
Cross-check the issues in the ARK Industries report against current best-practice guidance from Cisco. Search the web for any relevant Cisco advisories or recommendations.
```

Observe how the AI uses both tools in combination — reading the local file for context and searching the web for external verification.

---

### Step 7 — Explore the limits

Try a question the document cannot answer:

```
How many staff are in the ARK Industries IT Operations team?
```

A well-configured AI assistant should acknowledge that this information is not in the documents and decline to guess. This is the correct behaviour — the system prompt instructs the assistant not to speculate. If the AI guesses anyway, note this as an example of why system prompt design matters.

---

### Step 8 — ⭐ Make It Yours

> This is the most valuable step in the session.

You have spent the lab using a system prompt written for ARK Industries. Now you are going to write one for your actual job.

**Open `System_prompt_template.md` from the Session 2 folder in the workshop GitHub repository and use the four-part template:**

| Section | What to Write |
|---|---|
| **IDENTITY** | Who is this assistant? What role does it play in your team? |
| **CONTEXT** | What does it need to know about your environment, your systems, your team size, your constraints? |
| **RULES** | What should it always do? What should it never do? What language or tone is appropriate? |
| **FORMAT** | How should it present responses? Bullet points? Formal tone? Short summaries? Escalation flags? |

**To apply your new system prompt in Jan AI:**

1. Go to **Settings → Assistants**
2. Click **Add Assistant** — give it your own name (your team name, your role, or whatever makes sense to you)
3. Paste your system prompt into the **Instructions** field
4. Click **Save**
5. Create a new Project in Jan AI and select your new Assistant
6. Ask one question — something you might genuinely ask in a normal working week
7. Read the response. Does it feel right for your role?

> There is no single correct answer. Your domain expertise is what makes this system prompt useful — the AI cannot write its own briefing.

---

## Consolidation

Before the session closes, take two minutes to discuss with the person next to you:

> **"What is one task in your day-to-day role where having a local AI assistant connected to your team's documents would make a genuine difference? And what would the system prompt need to say to make it useful for that task?"**

---

## What You Have Built Today

By completing this lab, you have:

- Installed and configured a local AI runtime (Jan AI) that processes everything on your own machine
- Downloaded and loaded an open-source AI model (Qwen3.5-4B-GGUF)
- Connected your assistant to live web search via the Tavily MCP server
- Connected your assistant to local documents via the Filesystem MCP server
- Created a saved Assistant with a system prompt that configures the AI for a specific operational role
- Experienced the before/after difference between a generic chatbot and a connected, context-aware assistant

**Total cost: £0.**

---

## Quick Reference

| Item | Detail |
|---|---|
| Jan AI | jan.ai |
| Model | Qwen3.5-4B-GGUF — search `Qwen3.5` in the Jan AI Hub |
| Tavily | app.tavily.com — free tier, 1,000 searches/month, no credit card |
| Tavily key format | Starts with `tvly-` |
| MCP settings location | Settings → MCP Servers |
| Assistant settings location | Settings → Assistants |
| ARK Industries lab files | `network-report-site-A.txt` (Session 2) · `it-policy-summary.txt` (Session 3) — both on USB / QR code; save in the same folder |
| File extension check | Windows: File Explorer → View → Show → File name extensions · Mac: Finder → Settings → Advanced → Show all filename extensions |
| Folder path | Copy from your file manager address bar |
| System prompt template | `System_prompt_template.md` — Session 2 folder in the workshop GitHub repository |

---

## Common Problems and Fixes

| Problem | Most Likely Cause | Fix |
|---|---|---|
| Jan AI will not install | Security policy blocking the installer | Allow the installer through your security prompt. If your corporate policy blocks it entirely, let a facilitator know. |
| Model download stalled | Wi-Fi congestion | Wait 2 minutes, then restart the download. Let a facilitator know if it continues to stall. |
| Tavily Web Search server shows error status | API key missing, truncated, or contains a space | Go to Settings → MCP Servers → select Tavily Web Search → edit. Check the `TAVILY_API_KEY` value starts with `tvly-` and has no extra spaces. |
| Filesystem server shows error status | Folder path is wrong, or folder does not contain the ARK Industries files | Go to Settings → MCP Servers → select filesystem → edit. Check the third argument is the correct folder path, copied from your file manager. Check the folder contains both `network-report-site-A.txt` and `it-policy-summary.txt`. |
| File not found even though MCP is enabled | File has a double extension (`.txt.txt`) | Enable file extensions in your operating system (see Before You Begin). If the file shows `.txt.txt`, rename it to remove the duplicate extension. |
| AI responds but never calls a tool | MCP servers not enabled in Settings | Go to Settings → MCP Servers. Confirm both servers have their enable toggle switched ON. |
| AI uses training data instead of searching the web | Model defaulting to internal knowledge | Be explicit in your prompt: `"Search the web using Tavily for..."` |
| `npm warn deprecated` message visible during MCP setup | Harmless internal package notice from the MCP server package | Expected behaviour — not an error. Confirm the enable toggle is ON for the affected server. |
| Assistant not available in project | Assistant was not saved | Go to Settings → Assistants and confirm the Assistant appears in the list. If not, recreate it and click Save. |
| Qwen3.5-4B-GGUF not available after creating a project | Model download not yet complete | Wait for the Phase 2 download to finish. The model will appear automatically once downloaded. |
