# Session 2: Building AI Assistants

**Cisco AI Technical Workshop — ARK Industries Lab**
*Park House, London — 16 June 2026*

---

## Session Goal

By the end of this session you will have a working local AI assistant, connected to live web search and your own files, running entirely on your laptop.

---

## What You Will Build

A personally configured AI assistant that:

- Runs on your own machine — no cloud, no data leaving your laptop
- Has a defined role and persona set by you via a system prompt
- Can search the web in real time using the Tavily MCP server
- Can read ARK Industries documents from your laptop using the Filesystem MCP server

---

## Tools in Use This Session

| Tool | What It Does | Cost |
|---|---|---|
| **LM Studio** | Runs the AI model locally on your laptop. Provides a built-in chat interface. Think of it as "Spotify, but for AI models." | Free |
| **Qwen 2.5 3B Instruct** (~1.9 GB) | The AI model itself — downloaded inside LM Studio. Compact, capable, and reliable for tool use. | Free |
| **Node.js LTS** | A background software requirement that LM Studio needs to launch MCP servers. Installed via a standard GUI installer. You do not interact with it directly. | Free |
| **Tavily MCP server** | Gives your AI assistant live web search capability. Requires a free Tavily account (email signup only — no credit card). | Free (1,000 searches/month) |
| **Filesystem MCP server** | Gives your AI assistant read access to a folder of ARK Industries documents on your laptop. No account required. | Free |

---

## Before You Start

Make sure you have the following ready:

- **Your laptop** — Windows, with administrator rights (you will be installing software)
- **Wi-Fi connected** — you will need a working internet connection to download software and to use Tavily web search
- **ARK Industries file: `network-report-site-A.txt`** — distributed via USB stick or QR code before this session. If you do not have it, ask a facilitator now.

---

## ⚠️ Two Things to Know Before You Open the Lab Guide

> **⚠️ Backslashes must be doubled in the config file.**
> Every backslash `\` in a Windows file path inside the MCP configuration file (`mcp.json`) must be written as `\\`. For example:
> `C:\Users\YourName\Documents` becomes `C:\\Users\\YourName\\Documents`
>
> This is the single most common error in this lab. The lab guide explains it in detail and shows you exactly where it applies.

> **⚠️ Windows hides file extensions by default.**
> Before the lab you will need to make file extensions visible in File Explorer (View → Show → File name extensions). This is required so you can correctly name and identify files. The lab guide walks you through this step.

---

## How This Session Is Structured

| Document | What It Contains |
|---|---|
| **`lab_guide.md`** ← *Start here* | The complete step-by-step lab. Follow this document from start to finish. |
| **`mcp_config_examples/`** | Ready-to-copy MCP configuration JSON for the `mcp.json` file. Use these rather than typing from scratch. |
| **`troubleshooting.md`** | Fixes for the most common problems — check here before asking for help. |

---

## The Lab File You Will Use

During the lab you will work with this ARK Industries file:

**`network-report-site-A.txt`** — A fictional network status report for an ARK Industries site. You will load this into your Filesystem MCP setup and ask your AI assistant questions about it. This is where the lab becomes real: your AI will answer questions about *your* document, not generic internet content.

---

## Ready?

Open **`lab_guide.md`** and follow it from Step 1.

If anything fails at any point, check **`troubleshooting.md`** first — most common issues are covered there with step-by-step fixes.
