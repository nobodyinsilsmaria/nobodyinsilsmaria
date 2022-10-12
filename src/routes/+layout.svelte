<script>
import Header from '$lib/components/Header.svelte'
import '$lib/assets/css/app.scss';
const thisYear = new Date().getFullYear();
export const prerender = true;
</script>

<Header />

<main class="p-6 justify-center items-center flex flex-col">
  <slot />
</main>

<footer class="flex items-center justify-center text-lg font-bold underline ">This is me, someone who believes in what happens in Sils maria! {thisYear}&#169; </footer>
