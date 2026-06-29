# Session 2: Building AI Assistants
## Participant Lab Guide — LM Studio Edition

**Cisco AI Technical Workshop**

---

> **Who this guide is for**
>
> This guide is for participants who are using **LM Studio** instead of Jan AI. The lab outcome is identical — a working local AI assistant connected to live web search and your ARK Industries documents. The tools and configuration steps are different, so follow this guide from start to finish rather than the standard lab guide.
>
> Work through each phase in order. Every command and configuration value is ready to copy and paste — you will never need to compose anything from scratch.
>
> At the end of each phase, a **✅ What you should see** section tells you what success looks like before you move on. If what you see does not match, re-read the phase or raise your hand — a facilitator will come to you.
>
> The fictional company scenario throughout this lab is **ARK Industries**, a large UK infrastructure business with 52 sites. You are the IT Operations team.

---

## Before You Begin — Checklist

Confirm you have the following before Phase 1:

- [ ] A Windows laptop with internet access and administrator rights
- [ ] The ARK Industries file pack — both files downloaded from the workshop GitHub repository and saved in the same folder on your laptop:
  - `network-report-site-A.txt` — used in this session
  - `it-policy-summary.txt` — used in Session 3
- [ ] A browser tab you can use for downloads and sign-up

> ⚠️ **File extension warning — do this now, before anything else.**
>
> Windows hides file extensions by default. This matters in this lab — you will be creating and editing a file called `mcp.json`, and if Windows is hiding extensions you may accidentally create a file called `mcp.json.txt` without realising it. Make file extensions visible before continuing:
>
> 1. Open **File Explorer** (press **Windows + E**)
> 2. Click the **View** menu at the top of the window
> 3. Click **Show**
> 4. Tick **File name extensions**
>
> Confirm that `network-report-site-A.txt` shows its `.txt` extension before continuing. If it shows only `network-report-site-A` with no extension visible, the setting has not taken effect — repeat the steps above.

---

## Phase 1: Install LM Studio

> **What is LM Studio?** LM Studio is a free, open-source application that lets you run AI models directly on your own laptop. Nothing you type is sent to an external server — all processing happens on your machine. It provides a familiar chat interface and, on Windows, the ability to connect external AI tools via a configuration file.

**Step 1.** Open a browser and go to **lmstudio.ai**

**Step 2.** Click the **Download** button and select the **Windows** version.

**Step 3.** Once the installer has downloaded, open it to run it.

**Step 4.** Accept all default options and click through the installer. No settings need to be changed.

**Step 5.** When the installer finishes, open LM Studio. You should see the main LM Studio window with a sidebar on the left.

> ⚠️ **If your operating system or antivirus shows a security warning:** This is common with newly downloaded applications. Accept or allow the installer to proceed. If your corporate security policy blocks the install entirely, let a facilitator know.

---

### ✅ What you should see

LM Studio opens and displays its main window. The left sidebar shows icons for Chat, Discover, My Models, and other panels. No model is loaded yet — that is correct.

---

## Phase 2: Download the Qwen3-4B Model

> **What is this model?** Qwen3 is an open-source AI language model developed by Alibaba. The "4B" refers to approximately four billion parameters — this is a compact model designed to run efficiently on a standard laptop without a specialist graphics card. It is the same model family used in the primary Jan AI path for this session, which means participants on both tracks will have a consistent experience throughout the day.
>
> **The download is the critical path item in this lab.** Start it now and continue with Phases 3 and 4 while it runs in the background.

**Step 1.** In LM Studio, click the **Discover** icon in the left sidebar (it looks like a search or compass icon). This opens the model search panel.

**Step 2.** In the search bar, type:

```
Qwen3
```

**Step 3.** In the results, find **Qwen3-4B** from Qwen. Look for the **Q4_K_M** quantisation option — this is the recommended version for this lab. It is approximately 2.3 GB.

**Step 4.** Click the **Download** button next to the Q4_K_M version. A progress bar will appear at the bottom of the LM Studio window.

> ⚠️ **Do not close LM Studio while the model downloads.** The download runs in the background — you can continue with Phases 3 and 4 while it completes. You will need the model to be fully downloaded before Phase 5. If the progress bar stalls for more than two minutes, let a facilitator know.

---

### ✅ What you should see

A download progress bar is visible at the bottom of LM Studio showing the Qwen3-4B download in progress. LM Studio remains fully usable — move on to Phase 3 immediately.

---

## Phase 3: Install Node.js LTS

> **What is Node.js?** Node.js is a free, open-source software platform. LM Studio uses it to run the MCP server packages (Tavily and Filesystem) in the background. You will not interact with Node.js directly — it runs silently behind the scenes. Think of it as the engine the tools need in order to operate.

**Step 1.** Open a browser tab and go to **nodejs.org**

**Step 2.** Click the **LTS** download button (LTS stands for Long Term Support — this is the stable, recommended version). Select the **Windows Installer (.msi)** option.

**Step 3.** Once the installer downloads, open it to run it.

**Step 4.** Accept all default options and click through every screen. When the installer asks about additional tools, leave the defaults unchanged. Click **Finish**.

**Step 5.** Node.js is now installed. You do not need to open or configure it. It runs in the background automatically when LM Studio needs it.

> ⚠️ **If you see a black terminal window appear briefly during installation:** This is expected and harmless. It closes automatically. The installation has succeeded.

> ⚠️ **If you see `npm warn deprecated` messages:** These warnings are expected and harmless. They are internal package notices — not errors. The installation has succeeded.

---

### ✅ What you should see

The Node.js installer completes and closes. Node.js will not appear as a visible application — that is correct. It runs as a background service. No further action is required.

---

## Phase 4: Create Your Tavily API Key

> **What is Tavily?** Tavily is a web search service designed specifically for AI tools. Your AI assistant will use it to search the internet in real time during the lab — giving it access to current information that is not in the model's training data.
>
> **Free tier:** 1,000 searches per month. No credit card required.

**Step 1.** Open a browser tab and go to **app.tavily.com**

**Step 2.** Click **Sign Up** and register with your email address. You will receive a verification email — click the link to confirm your account.

**Step 3.** Once logged in, click **Overview** in the left sidebar of the Tavily dashboard.

**Step 4.** Your API key is displayed on the Overview page. It begins with the letters **tvly-** followed by a long string of characters.

**Step 5.** Copy the full API key:
- Click the key to select it, or highlight it manually
- Press **Ctrl+C** to copy it

> ⚠️ **Keep this browser tab open.** You will need to paste the key in Phase 5. If you accidentally close the tab, log back in to app.tavily.com and find the key in the Overview panel. If you already have a Tavily account, simply log in and retrieve your existing key.

---

### ✅ What you should see

Your Tavily API key is copied to your clipboard. It starts with `tvly-`. The Tavily Overview page is still visible in your browser tab.

---

## Phase 5: Configure MCP Servers via mcp.json

> **What are MCP servers?** MCP (Model Context Protocol) is the open standard that allows an AI model to connect to external tools. On Windows, LM Studio reads MCP server configuration from a file called `mcp.json` stored in a specific location on your laptop. In this phase, you will create and edit that file using Windows Notepad.
>
> You are configuring two tools:
> - **Tavily Web Search** — gives your assistant live internet search
> - **filesystem** — gives your assistant read access to your ARK Industries documents folder
>
> **This phase uses Notepad on Windows.** The LM Studio in-app configuration editor does not save reliably and must not be used. The Notepad method described below is the confirmed working approach.

---

### Part A — Open the mcp.json file location

**Step 1.** Press **Windows + R** to open the Run dialog. A small box labelled "Run" will appear.

**Step 2.** Type the following exactly into the Run dialog and press **Enter**:

```
%USERPROFILE%\.lmstudio
```

> This opens the hidden `.lmstudio` folder in your user profile in File Explorer. This is where LM Studio stores its configuration files.

**Step 3.** Look inside the `.lmstudio` folder for a file called **`mcp.json`**.

- **If `mcp.json` already exists:** right-click it and select **Open with → Notepad**. Delete all existing content before continuing.
- **If `mcp.json` does not exist:** you will create it in the next step.

---

### Part B — Find your ARK Industries folder path

Before you write the configuration, you need the exact path to the folder on your laptop where the ARK Industries files are stored.

**Step 1.** Open **File Explorer** and navigate to the folder containing both `network-report-site-A.txt` and `it-policy-summary.txt`.

**Step 2.** Click the **address bar** at the top of the File Explorer window — the path becomes highlighted and editable.

**Step 3.** Press **Ctrl+A** then **Ctrl+C** to copy the full path.

**Step 4.** Paste it temporarily into Notepad (or a blank text document) so you can refer to it.

> **Your path will look something like one of these:**
>
> `C:\Users\YourName\Documents\ARK-Industries`
>
> `C:\Users\YourName\OneDrive\Documents\ARK-Industries`
>
> ⚠️ **If your Documents folder is synced with OneDrive**, the path will include OneDrive in the middle — for example `C:\Users\YourName\OneDrive\Documents\ARK-Industries`. This is normal. Copy it exactly as File Explorer shows it.
>
> **Keep this path handy.** You will need it in Part C.

---

### Part C — Write the mcp.json configuration file

> ⚠️ **Critical Windows path rule:** In the `mcp.json` file, every backslash `\` in a Windows path must be doubled to `\\`. This is a technical requirement of the JSON file format. A path that looks like `C:\Users\YourName\Documents\ARK-Industries` in File Explorer must be written as `C:\\Users\\YourName\\Documents\\ARK-Industries` inside the file.
>
> The template below shows this clearly. Do not forget to apply this rule to your own folder path.

**Step 1.** Open **Notepad**. You can find it by pressing **Windows** and typing `Notepad`.

**Step 2.** Copy the entire block below and paste it into Notepad:

```json
{
  "mcpServers": {
    "tavily-mcp": {
      "command": "npx",
      "args": ["-y", "tavily-mcp@latest"],
      "env": {
        "TAVILY_API_KEY": "PASTE-YOUR-TAVILY-KEY-HERE"
      }
    },
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "PASTE-YOUR-ARK-INDUSTRIES-FOLDER-PATH-HERE"
      ]
    }
  }
}
```

**Step 3.** Replace `PASTE-YOUR-TAVILY-KEY-HERE` with your actual Tavily API key. The result should look like:

```
"TAVILY_API_KEY": "tvly-AbCdEfGhIjKlMnOpQrStUvWx"
```

**Step 4.** Replace `PASTE-YOUR-ARK-INDUSTRIES-FOLDER-PATH-HERE` with your folder path — remembering to double every backslash. For example:

```
"C:\\Users\\YourName\\Documents\\ARK-Industries"
```

A completed example of the full file, with a real-looking path substituted in, would look like:

```json
{
  "mcpServers": {
    "tavily-mcp": {
      "command": "npx",
      "args": ["-y", "tavily-mcp@latest"],
      "env": {
        "TAVILY_API_KEY": "tvly-AbCdEfGhIjKlMnOpQrStUvWx"
      }
    },
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "C:\\Users\\YourName\\Documents\\ARK-Industries"
      ]
    }
  }
}
```

> ⚠️ **Double-check before saving:**
> - Every `\` in your folder path is doubled to `\\`
> - Your Tavily key starts with `tvly-` and has no spaces before or after it
> - The structure of the file — the curly braces, square brackets, and commas — is exactly as shown above. JSON is strict: a missing comma or bracket will stop the file from working.

**Step 5.** In Notepad, click **File → Save As**.

**Step 6.** In the Save As dialog:
- Navigate to the `.lmstudio` folder (use the address bar — type `%USERPROFILE%\.lmstudio` and press Enter)
- In the **File name** field, type exactly: `mcp.json`
- In the **Save as type** dropdown, select **All Files (\*.\*)** — this is critical. If you leave it as "Text Documents (*.txt)", Windows will save the file as `mcp.json.txt` and LM Studio will not find it.
- Click **Save**

> ⚠️ **Confirm the file is saved correctly.** In the `.lmstudio` folder, you should see a file called `mcp.json` — not `mcp.json.txt`. If you see `.txt` at the end, repeat the Save As process and ensure **All Files** is selected in the Save as type dropdown.

---

### ✅ What you should see

A file called `mcp.json` (not `mcp.json.txt`) exists in `%USERPROFILE%\.lmstudio`. When you open it in Notepad, it contains your Tavily key and your ARK Industries folder path, with all backslashes doubled. You are ready to move on.

---

## Phase 6: Load the Model and Configure Your Chat

> **What is a system prompt?** A system prompt is a hidden set of instructions given to the AI before any conversation begins. It defines the assistant's role, what it knows about your environment, and how it should behave. Think of it as a new contractor's orientation briefing — you tell the assistant who it is and what the rules are, and it follows those instructions for every message that follows.

**Step 1.** In LM Studio, click the **Chat** icon in the left sidebar.

**Step 2.** At the top of the chat panel, click the model selector dropdown (it may say "Select a model" or show the name of any previously loaded model).

**Step 3.** Select **Qwen3-4B (Q4_K_M)** from the list. LM Studio will begin loading the model into memory.

> ⚠️ **Wait for the model to finish loading before continuing.** A status indicator at the bottom of the window will confirm when the model is ready. Loading typically takes 15–30 seconds on a standard laptop.

**Step 4.** In LM Studio, look for the **System Prompt** panel. Depending on your version of LM Studio, this may appear:
- As a text area at the top of the chat panel labelled **System Prompt**
- In a right-hand settings panel when a model is loaded
- Under a **Configure** or **⚙ Chat Settings** option

**Step 5.** Click into the System Prompt area. Delete any existing default text. Copy the following system prompt exactly as written and paste it in:

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

**Step 6.** Restart LM Studio completely — close the application and reopen it. LM Studio reads the `mcp.json` file only at startup. If you do not restart, the MCP tools will not be available.

> ⚠️ **This restart step is required.** Do not skip it. After restarting, reselect the Qwen3-4B model and re-enter the system prompt if it has not been saved.

---

### ✅ What you should see

LM Studio is open, the Qwen3-4B (Q4_K_M) model is loaded and shows a "Ready" or green status indicator. The system prompt is in place. You are ready to begin the lab queries.

---

## Phase 7: Run the Lab — Test Queries

You are now ready to run the core lab. Work through Steps 1–8 in order. Take your time — the key moments of learning are in the comparisons between what the AI knows from training alone versus what it can access through MCP tools.

---

### Step 1 — Confirm your model is responding

In the LM Studio chat, type the following and press **Enter**:

```
Hello. Are you ready to help with ARK Industries network operations?
```

Confirm that the model responds. The response should reflect the system prompt persona you just set — it should introduce itself as the ARK Industries network operations assistant, not as a generic AI chatbot.

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

Now ask the same question, but this time explicitly direct the AI to use its web search tool:

```
Search the web for the latest NCSC guidance on securing AI in enterprise environments. Use Tavily.
```

Watch the chat carefully. You should see an indicator appear showing that LM Studio is calling the Tavily tool — the AI is going out to the internet in real time to retrieve current information.

Compare the two responses. Notice:
- The web search result is more recent
- The AI cites the source it retrieved
- The AI is working with information it found, not information it memorised

> **This is MCP in action.** The AI has not changed. The model is identical. What changed is that it now has a tool — and it used it.

---

### Step 4 — Access the ARK Industries network report via Filesystem MCP

Type the following in the chat:

```
Read the ARK Industries network report and tell me the three most urgent issues right now.
```

Watch the chat carefully. You should see a tool call indicator showing that LM Studio is calling the Filesystem MCP — the AI is reading `network-report-site-A.txt` directly from your laptop.

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

**To apply your new system prompt in LM Studio:**

1. In the LM Studio chat panel, clear the current System Prompt field
2. Paste your new system prompt into the System Prompt field
3. Ask one question — something you might genuinely ask in a normal working week
4. Read the response. Does it feel right for your role?

> There is no single correct answer. Your domain expertise is what makes this system prompt useful — the AI cannot write its own briefing.

---

## Consolidation

Before the session closes, take two minutes to discuss with the person next to you:

> **"What is one task in your day-to-day role where having a local AI assistant connected to your team's documents would make a genuine difference? And what would the system prompt need to say to make it useful for that task?"**

---

## What You Have Built Today

By completing this lab, you have:

- Installed and configured a local AI runtime (LM Studio) that processes everything on your own machine
- Downloaded and loaded an open-source AI model (Qwen3-4B, Q4_K_M)
- Configured MCP tool access via an `mcp.json` file — connecting your assistant to live web search and local documents
- Given your assistant a system prompt that configures it for a specific operational role
- Experienced the before/after difference between a generic chatbot and a connected, context-aware assistant

**Total cost: £0.**

---

## Quick Reference

| Item | Detail |
|---|---|
| LM Studio | lmstudio.ai |
| Model | Qwen3-4B — search `Qwen3` in LM Studio Discover; select Q4_K_M (~2.3 GB) |
| Tavily | app.tavily.com — free tier, 1,000 searches/month, no credit card |
| Tavily key format | Starts with `tvly-` |
| MCP config file location | `%USERPROFILE%\.lmstudio\mcp.json` — open via Windows Run dialog |
| Backslash rule | Every `\` in a Windows path inside `mcp.json` must be doubled: `\\` |
| Save as type | Must be **All Files (\*.\*)** in Notepad — not "Text Documents" |
| Restart required | LM Studio must be restarted after saving `mcp.json` |
| ARK Industries lab files | `network-report-site-A.txt` (Session 2) · `it-policy-summary.txt` (Session 3) — both in the workshop GitHub repository; download and save in the same folder before the session |
| File extension check | Windows: File Explorer → View → Show → File name extensions |
| System prompt location | System Prompt panel in LM Studio chat view |
| System prompt template | `System_prompt_template.md` — Session 2 folder in the workshop GitHub repository |

---

## Common Problems and Fixes

| Problem | Most Likely Cause | Fix |
|---|---|---|
| LM Studio will not install | Security policy blocking the installer | Allow the installer through your security prompt. If your corporate policy blocks it entirely, let a facilitator know. |
| Model download stalled | Wi-Fi congestion | Wait 2 minutes, then click the download again to resume. Let a facilitator know if it continues to stall. |
| AI responds but never calls a tool | LM Studio not restarted after saving `mcp.json`, or `mcp.json` has an error | Restart LM Studio completely. If the problem persists, open `mcp.json` in Notepad and check: all backslashes are doubled, the Tavily key starts with `tvly-`, and all JSON brackets and commas are in place. |
| `mcp.json` saved as `mcp.json.txt` | Notepad "Save as type" was left as "Text Documents" | In Notepad, File → Save As → change Save as type to **All Files** → retype filename as `mcp.json` → Save. Delete the `.txt` version. |
| Filesystem MCP cannot find the ARK Industries files | Folder path is wrong, or backslashes are not doubled | Open `mcp.json` in Notepad. Check the third argument under `filesystem` → `args`. Compare it against your actual folder path from File Explorer. Ensure every `\` is `\\`. Save and restart LM Studio. |
| File not found even with correct path | File has a double extension (`.txt.txt`) | In File Explorer, enable file extensions (View → Show → File name extensions). If `network-report-site-A.txt` shows as `network-report-site-A.txt.txt`, right-click → Rename → delete the duplicate `.txt`. |
| AI uses training data instead of searching the web | Model defaulting to internal knowledge | Be explicit in your prompt: `"Search the web using Tavily for..."` |
| System prompt not being followed | System prompt field was cleared when model reloaded | Re-enter the system prompt in the System Prompt panel. In LM Studio, the system prompt may need to be re-entered after each model reload. |
| `npm warn deprecated` message in a terminal | Harmless internal MCP package notice | Expected behaviour — not an error. MCP tools will still work correctly. |
| LM Studio showing "model not found" after restart | Model was not fully downloaded before restart | Go to Discover → My Models and check the model status. Re-download if needed. |
