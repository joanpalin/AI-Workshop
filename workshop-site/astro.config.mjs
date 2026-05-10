// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// GitHub Pages project site: https://joanpalin.github.io/AI-Workshop/
// If you publish only the Astro app from the repo root, change base to '/'.
export default defineConfig({
	site: 'https://joanpalin.github.io',
	base: '/AI-Workshop',
	integrations: [
		starlight({
			title: 'Cisco AI Technical Workshop',
			description:
				'Hands-on guide for IT professionals — assistants, agentic AI, and securing AI (London, June 2026).',
			customCss: ['./src/styles/print.css'],
			social: [
				{
					icon: 'github',
					label: 'Workshop materials on GitHub',
					href: 'https://github.com/joanpalin/AI-Workshop',
				},
			],
			sidebar: [
				{ label: 'Home', link: '/' },
				{ label: 'Glossary', link: '/glossary/' },
				{
					label: 'Session 1 — AI fundamentals',
					items: [
						{ label: 'Overview', slug: 'session-1' },
						{ label: 'Key concepts', slug: 'session-1/key-concepts' },
						{ label: 'Group activity worksheet', slug: 'session-1/group-activity' },
					],
				},
				{
					label: 'Session 2 — AI assistants',
					items: [
						{ label: 'Overview', slug: 'session-2' },
						{ label: 'Lab guide', slug: 'session-2/lab-guide' },
						{ label: 'System prompt template', slug: 'session-2/system-prompt-template' },
						{ label: 'Troubleshooting', slug: 'session-2/troubleshooting' },
					],
				},
				{
					label: 'Session 3 — Agentic AI',
					items: [
						{ label: 'Overview', slug: 'session-3' },
						{ label: 'Lab guide', slug: 'session-3/lab-guide' },
						{ label: 'Assistant system prompt', slug: 'session-3/assistant-system-prompt' },
						{ label: 'Sample goal prompts', slug: 'session-3/sample-goal-prompts' },
						{ label: 'IT policy summary (lab doc)', slug: 'session-3/it-policy-summary' },
						{ label: 'Troubleshooting', slug: 'session-3/troubleshooting' },
					],
				},
				{
					label: 'Session 4 — Securing AI',
					items: [
						{ label: 'Overview', slug: 'session-4' },
						{ label: 'Threat landscape', slug: 'session-4/threat-landscape' },
						{ label: 'Cisco AI stack', slug: 'session-4/cisco-ai-stack' },
						{ label: 'AUP template', slug: 'session-4/acceptable-use-policy-template' },
					],
				},
				{
					label: 'Takeaways',
					items: [
						{ label: 'Overview', slug: 'takeaways' },
						{ label: 'Monday action plan', slug: 'takeaways/monday-action-plan' },
						{ label: 'Manager brief email', slug: 'takeaways/manager-brief-email' },
						{ label: 'Cisco learning resources', slug: 'takeaways/cisco-learning-resources' },
					],
				},
			],
			components: {
				// Use default expressive code (copy buttons on code blocks).
			},
		}),
	],
});
