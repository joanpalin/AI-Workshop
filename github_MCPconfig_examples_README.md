# MCP Configuration Examples

This folder contains ready-to-use MCP configuration templates for LM Studio. They are the complete, correct contents of the `mcp.json` file that connects LM Studio to two tools: the Tavily web search MCP server and the Filesystem MCP server (which gives the AI read access to your ARK Industries folder).

You will use these files during **Phase 4 of the Session 2 lab** — or if you need to reset your configuration at any point. Each template requires two substitutions: your personal Tavily API key, and the folder path where you have saved your ARK Industries files. Instructions for both substitutions are inside the lab guide and inside each file below.

---

## Which file should I use?

| Your operating system | Use this file |
|---|---|
| Windows | `mcp_windows.json` |
| Mac | `mcp_mac.json` |

Do not mix the two. The Windows version uses double backslashes (`\\`) in folder paths; the Mac version uses single forward slashes (`/`). Using the wrong version will cause a configuration error.

---

## ⚠️ Critical warnings — read before you start

**Windows backslashes must be doubled.**
Every `\` in a Windows folder path must be written as `\\` inside `mcp.json`. This is a standard JSON rule — the backslash character has a special meaning in JSON, so you must write two of them to represent one actual backslash in a path. For example:

```
File Explorer shows:    C:\Users\Joan\Documents\ARK-Industries
In mcp.json you write:  C:\\Users\\Joan\\Documents\\ARK-Industries
```

If you use single backslashes, LM Studio will show a red error and the Filesystem MCP will not connect.

---

**The correct file location on Windows is:**

```
%USERPROFILE%\.lmstudio\mcp.json
```

**Always open this file using the Windows Run dialog** — press `Win+R`, type the path above, and press Enter. This opens the file directly in Notepad.

> ⚠️ Do **not** use LM Studio's built-in mcp.json editor. It does not save changes to disk reliably. Always use Notepad via the Run dialog.

---

*Cisco AI Technical Workshop — London, 16 June 2026 | Session 2: Building AI Assistants*
