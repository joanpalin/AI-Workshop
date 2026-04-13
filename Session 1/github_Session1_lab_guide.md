# Session 2: Building AI Assistants
## Participant Lab Guide

**Cisco AI Technical Workshop — London, 16 June 2026**

---

> **How to use this guide**
>
> This document is your step-by-step companion for the Session 2 lab. Work through each phase in order. Every command and configuration block is ready to copy and paste — you will never need to compose anything from scratch.
>
> At the end of each phase, a **✅ What you should see** section tells you what success looks like before you move on. If what you see does not match, re-read the phase or raise your hand — a facilitator will come to you.
>
> The fictional company scenario throughout this lab is **ARK Industries**, a large UK infrastructure business with 52 sites. You are the IT Operations team.

---

## Before You Begin — Checklist

Confirm you have the following before Phase 1:

- [ ] A Windows laptop with internet access
- [ ] The ARK Industries file pack (received on USB stick or via QR code): `network-report-site-A.txt`
- [ ] A browser tab you can use for downloads and sign-up

> ⚠️ **File extension warning — do this now, before anything else.**
>
> Windows hides file extensions by default. This will cause problems later in the lab when you create and rename files. Fix it now:
>
> 1. Open **File Explorer**
> 2. Click the **View** menu at the top
> 3. Click **Show**
> 4. Tick **File name extensions**
>
> You should now see full filenames including `.txt`, `.json`, `.exe` etc. in all File Explorer windows. Confirm that `network-report-site-A.txt` shows its `.txt` extension before continuing.

---

## Phase 1: Install LM Studio

> **What is LM Studio?** LM Studio is a free, open-source application that lets you run AI models directly on your own laptop. Nothing you type is sent to an external server — all processing happens on your machine.

**Step 1.** Open a browser and go to **lmstudio.ai**

**Step 2.** Click the **Download** button for your operating system (Windows).

**Step 3.** Once the installer has downloaded, double-click it to run it.

**Step 4.** Accept all default options and click through the installer. No settings need to be changed.

**Step 5.** When the installer finishes, open LM Studio. You should see the main LM Studio window with a sidebar on the left.

> ⚠️ **If Windows Defender or antivirus shows a warning:** Right-click the installer file and select **Run as administrator**. If your corporate security policy still blocks the install, use the pre-configured fallback laptop at your table and continue from Phase 2.

---

### ✅ What you should see

LM Studio opens and displays its main window. The left sidebar shows several icons (a house/home icon, a magnifying glass, a chat bubble, and others). The application is empty — no model is loaded yet. That is correct.

---

## Phase 2: Download the Qwen 2.5 3B Instruct Model

> **What is this model?** Qwen 2.5 3B Instruct is an open-source AI language model developed by Alibaba. The "3B" refers to three billion parameters — this is a compact model that runs efficiently on a standard laptop. The "Instruct" version is trained to follow instructions rather than just predict text. The "Q4_K_M" version you will download is a compressed format that reduces file size while preserving most of the model's quality.
>
> **Download size: approximately 1.9 GB.** On shared venue Wi-Fi this typically takes 10–15 minutes. Start the download now and continue with the remaining phases while it runs in the background.

**Step 1.** In LM Studio, click the **magnifying glass icon** in the left sidebar. This opens the **Discover** panel — a searchable catalogue of available models.

**Step 2.** In the search bar at the top, type:

```
Qwen2.5-3B-Instruct
```

**Step 3.** Find the result from **bartowski** in the search results. Bartowski is a well-known and trusted packager of open-source models in the AI community.

**Step 4.** Click the bartowski result to expand it. You will see several download options listed. Select **Q4_K_M**.

**Step 5.** Click **Download**. A progress bar will appear at the bottom of the LM Studio window showing download progress.

> ⚠️ **Do not close LM Studio while the model downloads.** The download runs in the background — you can continue with Phases 3, 4, 5, and 6 while it completes. You will need the model to be fully downloaded before Phase 8 (running the lab queries). If the progress bar stalls for more than two minutes, let a facilitator know.

---

### ✅ What you should see

A progress bar at the bottom of the LM Studio window showing a percentage and download speed. The bar is actively progressing. LM Studio remains fully usable — move on to Phase 3 immediately.

---

## Phase 3: Enable the LM Studio Local Server

> LM Studio includes a built-in local server that allows MCP tools (which you will configure in Phase 6) to communicate with the model. You need to start this server before the MCP connection will work.

**Step 1.** In LM Studio, click the **←→ icon** in the left sidebar. This opens the **Local Server** panel (it may also be labelled "Developer" depending on your LM Studio version).

**Step 2.** Click the **Start Server** button. The button label will change and a green status indicator will appear, confirming the server is running.

**Step 3.** Leave this panel — you do not need to change any settings here. The server will continue running in the background.

> ⚠️ **If you do not enable the local server, MCP tools will not connect later in the lab.** If you return to verify MCP in Phase 8 and both tools show as disconnected, come back here and confirm the server is running.

---

### ✅ What you should see

The Local Server panel shows a green status indicator and the button reads **Stop Server** (or similar). The server address displayed will be something like `http://localhost:1234`. This confirms the server is active.

---

## Phase 4: Install Node.js LTS

> **What is Node.js?** Node.js is a free, open-source software platform. LM Studio uses it to run the MCP server packages (Tavily and Filesystem) in the background. You will not interact with Node.js directly — it runs silently behind the scenes. Think of it as an engine that the tools need to operate.

**Step 1.** Open a browser tab and go to **nodejs.org**

**Step 2.** Click the **LTS** download button (LTS stands for Long Term Support — this is the stable, recommended version).

**Step 3.** Once the installer downloads, double-click it to run it.

**Step 4.** Accept all default options and click through every screen. When the installer asks about additional tools, leave the defaults unchanged. Click **Finish**.

**Step 5.** Node.js is now installed. You do not need to open or configure it. It runs in the background automatically when LM Studio needs it.

> ⚠️ **If you see npm warn deprecated messages in a terminal window during installation:** These warnings are expected and harmless. They are internal package notices from the MCP server — not errors. The installation has succeeded if you see these messages followed by a prompt returning to normal. Dismiss the terminal if it stays open.

---

### ✅ What you should see

The Node.js installer completes and closes. No further action is required. Node.js will not appear as a visible application — that is correct. It runs as a background service.

---

## Phase 5: Create Your Tavily API Key

> **What is Tavily?** Tavily is a web search service designed specifically for AI tools. Your AI assistant will use it to search the internet in real time during the lab — giving it access to current information that is not in its training data.
>
> **Free tier:** 1,000 searches per month. No credit card required.

**Step 1.** Open a browser tab and go to **app.tavily.com**

**Step 2.** Click **Sign Up** and register with your email address. You will receive a verification email — click the link to confirm your account.

**Step 3.** Once logged in, click **Overview** in the left sidebar of the Tavily dashboard.

**Step 4.** Your API key is displayed on the Overview page. It begins with the letters **tvly-** followed by a long string of characters.

**Step 5.** Copy the full API key:
- Click the key to select it, or highlight it manually
- Press **Ctrl+C** to copy it

> ⚠️ **Keep this browser tab open.** You will need to paste the key in Phase 6. If you accidentally close the tab, log back in to app.tavily.com and find the key in the Overview panel. If you already have a Tavily account, simply log in and retrieve your existing key.

---

### ✅ What you should see

Your Tavily API key is copied to your clipboard. It starts with `tvly-`. The Overview page is still visible in your browser tab.

---

## Phase 6: Create the mcp.json Configuration File

> **What is mcp.json?** This is the configuration file that tells LM Studio which MCP tools to connect to and how to connect to them. You are telling LM Studio: "These are the tools I want my assistant to have access to." The file uses JSON format — a standard structured data format. You will paste a ready-made template and update two values. You do not need to understand JSON syntax to complete this step.
>
> **Important:** You will edit this file using **Windows Notepad**, opened via the **Run dialog**. Do not use the built-in editor inside LM Studio — it does not save changes to this file reliably.

**Step 1.** Press **Windows + R** on your keyboard. A small "Run" dialog box will appear at the bottom-left of your screen.

**Step 2.** In the Run box, type the following exactly as shown, then press **Enter**:

```
notepad %USERPROFILE%\.lmstudio\mcp.json
```

> This command tells Windows to open Notepad and load the MCP configuration file directly. The `%USERPROFILE%` part is a shortcut that Windows automatically expands to your user folder path (for example, `C:\Users\Joan`).

**Step 3.** Notepad will open. If the file already contains content, select all of it with **Ctrl+A** and delete it with the **Delete** key. The file should be empty.

**Step 4.** Copy the entire configuration block below and paste it into Notepad (**Ctrl+V**):

```json
{
  "mcpServers": {
    "tavily": {
      "command": "npx",
      "args": ["-y", "tavily-mcp@0.1.4"],
      "env": {
        "TAVILY_API_KEY": "tvly-PASTE-YOUR-KEY-HERE"
      }
    },
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "PASTE-YOUR-FOLDER-PATH-HERE"
      ]
    }
  }
}
```

**Step 5.** Replace `tvly-PASTE-YOUR-KEY-HERE` with your Tavily API key. Switch to your browser tab, copy the key, then paste it in Notepad between the quotation marks:

```json
"TAVILY_API_KEY": "tvly-AbCdEfGhIjKlMnOpQrStUv1234"
```

> ⚠️ **Do not remove the quotation marks.** The key must be inside double quotes. Do not add spaces before or after the key.

**Step 6.** Leave `PASTE-YOUR-FOLDER-PATH-HERE` in place for now. You will replace it in Phase 7.

**Step 7.** Do **not** save the file yet. Continue to Phase 7.

---

### ✅ What you should see

Notepad is open with the JSON configuration block pasted in. Your Tavily API key appears where `tvly-PASTE-YOUR-KEY-HERE` was. The folder path placeholder is still in place — that is correct. Do not close Notepad.

---

## Phase 7: Configure the Filesystem MCP — Point It to Your ARK Industries Folder

> In this phase, you will tell the Filesystem MCP server where your ARK Industries documents are stored on your laptop. The AI assistant will be able to read files from this folder during the lab.

**Step 1.** Open **File Explorer** (the yellow folder icon in your taskbar, or press **Windows + E**).

**Step 2.** Navigate to the folder where you saved the ARK Industries files from the USB stick or QR code. This folder should contain `network-report-site-A.txt`.

**Step 3.** Click the **address bar** at the top of the File Explorer window — the bar that currently shows your location in the folder structure (for example, `This PC > Documents > ARK-Industries`). Clicking it will highlight the full folder path.

**Step 4.** Press **Ctrl+A** then **Ctrl+C** to copy the full path.

**Step 5.** Switch back to Notepad. Replace `PASTE-YOUR-FOLDER-PATH-HERE` by pasting the path you just copied.

**Step 6 — Critical: Double every backslash in the path.**

JSON requires Windows folder paths to use double backslashes (`\\`) instead of single backslashes (`\`). After pasting, go through the path and change every `\` to `\\`.

**Example:**

| ❌ Incorrect — single backslashes | ✅ Correct — double backslashes |
|---|---|
| `C:\Users\Joan\Documents\ARK-Industries` | `C:\\Users\\Joan\\Documents\\ARK-Industries` |

Your completed `filesystem` section should look like this:

```json
"filesystem": {
  "command": "npx",
  "args": [
    "-y",
    "@modelcontextprotocol/server-filesystem",
    "C:\\Users\\Joan\\Documents\\ARK-Industries"
  ]
}
```

> ⚠️ **This is the single most common error in this lab.** If your path uses single backslashes, the Filesystem MCP will fail with an error (ENOENT — file not found). Double-check every `\` in your path before saving.

> ⚠️ **Check your folder name is spelled exactly as it appears in File Explorer.** Capitalisation matters. `ARK-Industries` and `ark-industries` are different folder names to the computer.

**Step 7.** Save the file in Notepad: **Ctrl+S**.

**Step 8.** Close LM Studio completely (close the application window, not just minimise it).

**Step 9.** Reopen LM Studio.

---

### ✅ What you should see

Notepad shows the complete mcp.json configuration with your real Tavily API key and your real folder path — with double backslashes throughout. The file has been saved. LM Studio has been closed and reopened.

**Your completed mcp.json should look similar to this (with your own values):**

```json
{
  "mcpServers": {
    "tavily": {
      "command": "npx",
      "args": ["-y", "tavily-mcp@0.1.4"],
      "env": {
        "TAVILY_API_KEY": "tvly-AbCdEfGhIjKlMnOpQrStUv1234"
      }
    },
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "C:\\Users\\Joan\\Documents\\ARK-Industries"
      ]
    }
  }
}
```

---

## Phase 8: Verify Both MCP Servers Are Connected in LM Studio

> You will now confirm that LM Studio has successfully loaded both MCP tool connections — Tavily (web search) and Filesystem (file access).

**Step 1.** In LM Studio, click the **chat bubble icon** in the left sidebar to open the Chat panel.

**Step 2.** At the top of the Chat panel, open the model selector drop-down and select **Qwen2.5-3B-Instruct** (the model you downloaded in Phase 2). If the download is still in progress, wait for it to complete before continuing.

**Step 3.** Look for the **>_ icon** in the chat interface. Click it to open the **Integrations** panel (this may also be labelled "Tools" depending on your LM Studio version).

**Step 4.** You should see two entries listed:

- **tavily**
- **filesystem**

**Step 5.** Confirm that both entries have a **blue toggle** indicating they are active and connected.

> ⚠️ **If you see a red warning or error instead of a blue toggle:**
>
> - **For `tavily`:** Open Notepad via **Windows + R → `notepad %USERPROFILE%\.lmstudio\mcp.json`** and check that the API key is pasted correctly, starts with `tvly-`, and has no extra spaces before or after it. Save the file and restart LM Studio.
>
> - **For `filesystem`:** Open mcp.json as above and check: (1) does every `\` in your folder path use double backslashes `\\`? (2) does the folder name match exactly what you see in File Explorer? (3) does the folder actually exist and contain the ARK Industries files? Fix any errors, save, and restart LM Studio.
>
> - **If mcp.json cannot be found via the Run dialog:** LM Studio may not have created the `.lmstudio` folder yet. Open LM Studio at least once before trying again. If the folder still does not exist, open File Explorer, navigate to `C:\Users\[your-username]`, create a folder called `.lmstudio`, and create a new text file inside it called `mcp.json`. Open it in Notepad and paste the configuration from Phase 6.
>
> - **If the `>_` icon shows an `npm warn deprecated` message:** This warning is harmless — it is an internal message from the MCP package. Confirm the blue toggle is present. If it is blue, the tool is working correctly.

---

### ✅ What you should see

Both **tavily** and **filesystem** are listed in the Integrations panel with blue toggles. The Qwen2.5-3B-Instruct model is selected and loaded. You are ready to run the lab.

---

## Phase 9: Set Your System Prompt for the ARK Industries Network Operations Assistant

> **What is a system prompt?** A system prompt is a hidden set of instructions given to the AI before any conversation begins. It defines the assistant's role, what it knows about your environment, and how it should behave. Think of it as a new contractor's orientation briefing — you tell the assistant who it is and what the rules are, and it follows those instructions for every message that follows.
>
> You will configure the ARK Industries Network Operations Assistant persona now. In Step 8 of the core lab, you will write a system prompt for your own real role.

**Step 1.** In LM Studio's Chat panel, find the **System Prompt** field. This is typically located:
- At the top of the Chat panel as a collapsible text area, or
- Inside a **Settings** or **Chat Settings** panel (look for a gear or settings icon near the chat area)

**Step 2.** Click into the System Prompt field and delete any existing content.

**Step 3.** Copy the following system prompt exactly as written and paste it into the field:

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

**Step 4.** Confirm the system prompt is saved. In LM Studio this typically happens automatically when you click away from the field. If there is a **Save** or **Apply** button, click it.

> ⚠️ **If you cannot locate the system prompt field:** Look for a text area labelled "System" or "System Prompt" above the chat input box. In some LM Studio versions, you may need to click a gear icon or "Advanced" option to reveal it. Ask a facilitator if you cannot find it.

---

### ✅ What you should see

The system prompt text is entered and saved. The ARK Industries assistant persona is now active for this chat session. When you start a new conversation, the AI will respond in the role of the Network Operations Assistant.

---

## Phase 10: Run the Lab — Test Queries

You are now ready to run the core lab. Work through Steps 1–8 in order. Take your time — the key moments of learning are in the comparisons.

---

### Step 1 — Confirm your model is responding

In the LM Studio chat, type the following and press **Enter**:

```
Hello. Are you ready to help with ARK Industries network operations?
```

Confirm that the model responds. The response should reflect the system prompt persona you just set.

---

### Step 2 — Test Tavily web search (without MCP comparison baseline first)

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

Watch the chat carefully. You should see a small banner or indicator appear showing that LM Studio is calling the Tavily tool — the AI is going out to the internet in real time to retrieve current information.

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

### Step 8 — ⭐ Make It Yours (10 minutes)

> This is the most valuable step in the session.

You have spent the lab using a system prompt written for ARK Industries. Now you are going to write one for your actual job.

**Use the four-part template on your printed worksheet:**

| Section | What to Write |
|---|---|
| **IDENTITY** | Who is this assistant? What role does it play in your team? |
| **CONTEXT** | What does it need to know about your environment, your systems, your team size, your constraints? |
| **RULES** | What should it always do? What should it never do? What language or tone is appropriate? |
| **FORMAT** | How should it present responses? Bullet points? Formal tone? Short summaries? Escalation flags? |

**To apply your new system prompt in LM Studio:**

1. Click **+ New Chat** (or the equivalent button to start a fresh conversation — this clears the previous context)
2. Delete the ARK Industries system prompt text
3. Paste your own system prompt into the System Prompt field
4. Ask one question — something you might genuinely ask in a normal working week
5. Read the response. Does it feel right for your role?

> **Write your system prompt in the worksheet first, then paste it into LM Studio.** Writing on paper first helps you think through what the assistant actually needs to know before you commit it to the configuration.
>
> There is no single correct answer. Your domain expertise is what makes this system prompt useful — the AI cannot write its own briefing.

---

## Consolidation

Before the session closes, take two minutes to discuss with the person next to you:

> **"What is one task in your day-to-day role where having a local AI assistant connected to your team's documents would make a genuine difference? And what would the system prompt need to say to make it useful for that task?"**

---

## What You Have Built Today

By completing this lab, you have:

- Installed and configured a local AI runtime (LM Studio) that processes everything on your own machine
- Downloaded and loaded an open-source AI model (Qwen 2.5 3B Instruct)
- Connected your assistant to live web search via the Tavily MCP server
- Connected your assistant to local documents via the Filesystem MCP server
- Written and applied a system prompt that configures the AI for a specific operational role
- Experienced the before/after difference between a generic chatbot and a connected, context-aware assistant

**Total cost: £0.**

---

## Quick Reference

| Item | Detail |
|---|---|
| LM Studio | lmstudio.ai |
| Model | Qwen2.5-3B-Instruct — bartowski — Q4_K_M |
| Model size | ~1.9 GB |
| Tavily | app.tavily.com — free tier, 1,000 searches/month, no credit card |
| Tavily key format | Starts with `tvly-` |
| mcp.json location | `%USERPROFILE%\.lmstudio\mcp.json` |
| How to open mcp.json | Windows + R → `notepad %USERPROFILE%\.lmstudio\mcp.json` |
| ARK Industries lab file | `network-report-site-A.txt` (received on USB / QR code) |
| Double backslash reminder | Every `\` in a Windows path inside JSON must be `\\` |
| File extension check | File Explorer → View → Show → File name extensions |

---

## Common Problems and Fixes

| Problem | Most Likely Cause | Fix |
|---|---|---|
| LM Studio will not install | Windows security blocking the installer | Right-click installer → Run as administrator |
| Model download stalled | Venue Wi-Fi congestion | Wait 2 minutes, then restart the download. Or use the pre-configured facilitator machine to observe the steps while your download completes |
| mcp.json cannot be found | .lmstudio folder not yet created by LM Studio | Open LM Studio at least once, then try again. If the folder still does not exist, create it manually at `C:\Users\[username]\.lmstudio` |
| Filesystem MCP shows red (ENOENT error) | Single backslashes in folder path, or wrong folder name | Open mcp.json in Notepad. Check every `\` is `\\`. Check folder name matches File Explorer exactly |
| File not found even though MCP is connected | File has a double extension (`.txt.txt`) | Enable file extensions in File Explorer (View → Show → File name extensions). If the file shows `.txt.txt`, rename it to remove the duplicate |
| Tavily MCP shows red | API key typo or extra space | Open mcp.json in Notepad. Check key starts with `tvly-` and has no spaces inside or outside the quotes |
| AI responds but never calls a tool | MCP toggle is off for this chat session | Click the `>_` icon in the chat panel. Confirm both toggles are blue. If not, toggle them on |
| AI uses training data instead of searching the web | Model defaulting to internal knowledge | Be explicit: `"Search the web using Tavily for..."` |
| LM Studio in-app mcp.json editor not saving | Known reliability issue with the in-app editor | Always use Notepad via Windows + R. Never use the in-app editor for this file |
| npm warn deprecated message appears | Harmless internal package notice | Expected behaviour — not an error. Confirm the blue toggle is showing in the Integrations panel |

---

*Participant Lab Guide — Session 2: Building AI Assistants*
*Cisco AI Technical Workshop — London, 16 June 2026*
*North Star: No Code Required · Low Cost / High Accessibility · AI as a Co-Pilot*
