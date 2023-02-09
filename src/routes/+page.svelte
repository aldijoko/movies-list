<script>
	import CardMovie from "$lib/component/CardMovie.svelte";

  export let data;

  const { popular } = data
  console.log(popular, 'data')
</script>

<div class="w-full p-5">
  <h1 class="text-2xl text-gray-500 uppercase">Your Recent Movies</h1>
  <div class="w-full grid grid-cols-5 gap-x-4 gap-y-8 py-5">
    {#each popular as movie}
     <CardMovie {movie} />
    {/each}
  </div>
</div>
  
 
  
  <style lang="postcss">

  </style>