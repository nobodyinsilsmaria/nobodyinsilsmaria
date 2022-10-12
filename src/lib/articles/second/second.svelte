<script>
import Second from './second.md';
import Article from '$lib/components/Article.svelte';
export let substr = false;
</script>

<Article substr="{substr}"  tags={['sils']}>
    <Second/>
</Article>
