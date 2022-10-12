import { c as create_ssr_component, v as validate_component, e as escape } from "../../chunks/index.js";
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `
<header><nav><ul class="${"flex flex-row justify-center items-center"}"><li><a href="${"/"}">Home</a></li></ul></nav></header>`;
});
const app = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const thisYear = new Date().getFullYear();
  return `
${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

<main class="${"p-6"}">${slots.default ? slots.default({}) : ``}</main>

<footer class="${"flex items-center justify-center text-xl font-bold underline "}">This is me, someone in Sils maria! ${escape(thisYear)}\xA9 </footer>`;
});
export {
  Layout as default
};
