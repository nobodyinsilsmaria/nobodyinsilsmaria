<script lang="ts">
import First from './first.md';
import Article from '$lib/components/Article.svelte';
export let substr = false;
</script>

<Article substr="{substr}" tags={[]}>
    <First/>
</Article>

