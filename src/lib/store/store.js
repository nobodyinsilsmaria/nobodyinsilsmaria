import { writable } from 'svelte/store';
const fetchAllArticles = import.meta.glob("../articles/*/*.svelte");

export const allArticles = writable(fetchAllArticles);
