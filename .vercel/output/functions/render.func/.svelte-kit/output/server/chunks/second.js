import { c as create_ssr_component, v as validate_component } from "./index.js";
const Second = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2>This is me, somebody in Sils Maria,</h2>
<h4>Do you want to know me more, follow my articles.</h4>`;
});
const Second_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"max-w border-1 rounded overflow-hidden shadow-lg"}"><div class="${"px-6 py-4"}"><p class="${"text-gray-700 text-base"}">${validate_component(Second, "Second").$$render($$result, {}, {}, {})}</p></div>

<div class="${"px-6 pt-4 pb-2"}"><span class="${"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"}">#photography</span>
    <span class="${"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"}">#travel</span>
    <span class="${"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"}">#winter</span></div></div>`;
});
export {
  Second_1 as default
};
