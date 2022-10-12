import { c as create_ssr_component, d as each, v as validate_component, m as missing_component } from "../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const allArticles = /* @__PURE__ */ Object.assign({ "../lib/articles/first/first.svelte": () => import("../../chunks/first.js"), "../lib/articles/second/second.svelte": () => import("../../chunks/second.js") });
  let getArticles = [];
  for (const article in allArticles) {
    allArticles[article]().then(({ default: loadedArticle }) => {
      getArticles = [...getArticles, loadedArticle];
    });
  }
  return `${each(getArticles, (article) => {
    return `${validate_component(article || missing_component, "svelte:component").$$render($$result, {}, {}, {})}`;
  })}`;
});
export {
  Page as default
};
