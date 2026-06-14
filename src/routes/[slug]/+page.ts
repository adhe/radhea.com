import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import type { Component } from 'svelte';

interface MarkdownModule {
	default: Component;
	metadata?: {
		title?: string;
		heading?: string;
		client?: string;
		type?: string;
		period?: string;
		description?: string;
		image?: string;
		tags?: string;
		order?: number;
	};
}

const modules = import.meta.glob<MarkdownModule>('/src/lib/content/*.md');

export const load: PageLoad = async ({ params }) => {
	const path = `/src/lib/content/${params.slug}.md`;
	const loader = modules[path];

	if (!loader) {
		error(404, `No content found for "${params.slug}"`);
	}

	const mod = await loader();
	return {
		component: mod.default,
		metadata: mod.metadata ?? {}
	};
};
