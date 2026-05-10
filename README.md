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
| **Jan AI** | Runs the AI model locally on your laptop. Provides a built-in chat interface and a point-and-click interface for connecting AI tools. Think of it as "Spotify, but for AI models." | Free |
| **Qwen3-4B** | The AI model itself — downloaded inside Jan AI. Compact, capable, and reliable for tool use. | Free |
| **Node.js LTS** | A background software requirement that Jan AI needs to launch MCP servers. Installed via a standard GUI installer. You do not interact with it directly. | Free |
| **Tavily MCP server** | Gives your AI assistant live web search capability. Requires a free Tavily account (email signup only — no credit card). | Free (1,000 searches/month) |
| **Filesystem MCP server** | Gives your AI assistant read access to a folder of ARK Industries documents on your laptop. No account required. | Free |

---

## Before You Start

Make sure you have the following ready:

- **Your laptop** — Windows, with administrator rights (you will be installing software)
- **Wi-Fi connected** — you will need a working internet connection to download software and to use Tavily web search
- **ARK Industries file pack** — distributed via USB stick or QR code before this session. The pack contains two files — save both into the same folder on your laptop:
  - **`network-report-site-A.txt`** — used in this session (Session 2)
  - **`it-policy-summary.txt`** — used in Session 3 this afternoon
  - If you do not have the file pack, ask a facilitator now.

---

## ⚠️ One Thing to Know Before You Open the Lab Guide

> **⚠️ Windows hides file extensions by default.**
> Before the lab you will need to make file extensions visible in File Explorer (View → Show → File name extensions). This is required so you can correctly name and identify files. The lab guide walks you through this step.

---

## How This Session Is Structured

| Document | What It Contains |
|---|---|
| **`lab_guide.md`** ← *Start here* | The complete step-by-step lab. Follow this document from start to finish. |
| **`troubleshooting.md`** | Fixes for the most common problems — check here before asking for help. |

---

## The ARK Industries File Pack

Your file pack contains two documents. Save both into the same folder on your laptop — the Filesystem MCP will be pointed at that folder, and Session 3 this afternoon reads from it too.

| File | Used in | What It Contains |
|---|---|---|
| **`network-report-site-A.txt`** | Session 2 (this session) | A fictional network status report for an ARK Industries site. You will ask your AI assistant questions about it during the lab — specific answers from your own document, not generic internet content. |
| **`it-policy-summary.txt`** | Session 3 (this afternoon) | The ARK Industries IT policy summary. The Session 3 agent reads this file via the same Filesystem MCP you configure today. It must be in the same folder as `network-report-site-A.txt` before 1:00 p.m. |

---

## Ready?

Open **`lab_guide.md`** and follow it from Step 1.

If anything fails at any point, check **`troubleshooting.md`** first — most common issues are covered there with step-by-step fixes.
