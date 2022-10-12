<script>
import {allArticles} from '$lib/store/store.js';
let allArticlesValue;
allArticles.subscribe(value => {
	allArticlesValue = value;
});
let getArticles= [];

Object.keys(allArticlesValue).forEach((article, i) => {
    allArticlesValue[article]().then(({ default: loadedArticle }) => {
        getArticles =[...getArticles , {loaded:loadedArticle, id: i}];
    });
});

const props = {
    substr: true
}
</script>
    

{#each getArticles as article, i}
    <a class="w-full flex flex-col items-center" href="/blog/{article.id}">
      <svelte:component this={article.loaded} {...props} />
    </a>
{/each}

