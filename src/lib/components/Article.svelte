<script lang="ts">
export let tags;
export let substr = false;
let is_truncated= false;
let substr_limit = 400;
let content, newContent;
$: if(content?.innerHTML) {
    const contentHTML= content.innerHTML;
    const isSubstrAndContentBiggerThanSubStrLimit = content.innerText.length > substr_limit;
    const isSubstrAndContentSmallerEqualThanSubStrLimit = !isSubstrAndContentBiggerThanSubStrLimit;
    const isNotSubstr = !substr;
    if(isSubstrAndContentBiggerThanSubStrLimit) {
            newContent = contentHTML.substring(0,substr_limit);
            is_truncated = true;
    }
    if(isSubstrAndContentSmallerEqualThanSubStrLimit || isNotSubstr) {
        newContent = contentHTML;
    }

}
</script>

<div class="w-10/12 mt-4 rounded overflow-hidden shadow-lg bg-white">
    <div class="px-6 py-4">
        <p class="text-gray-700 text-base relative" >
            {@html newContent}
            {#if substr && is_truncated}
                <div class="absolute h-1/3 bottom-0 left-0 w-full bg-gradient-to-t from-white"></div>
            {/if}
        </p>
        <p class="hidden" bind:this={content}>
            <slot/>
        </p>
    </div>
    {#if tags.length }
        <div class="px-6 pt-4 pb-2">
        {#each tags as tag}
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{tag}</span>
        {/each}
        </div>
    {/if}
</div>


