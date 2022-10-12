<script>
    /** @type {import('./$types').PageData} */
    import {allArticles} from '$lib/store/store.js';
    import { page } from '$app/stores';
    let getArticle, articleComponent;
    allArticles.subscribe(value => {
        getArticle = value[Object.keys(value)[$page.params.slug]];
    });
    getArticle().then(({ default: loadedArticle }) => {
        articleComponent = loadedArticle;
    });
</script>

<svelte:component this="{articleComponent}" />