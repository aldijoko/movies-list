<script>
	import CardMovie from "$lib/component/CardMovie.svelte";
	import { fly } from "svelte/transition";


    export let data;

    const {searchMovie} = data
</script>

<div class="w-full p-5" >
    <h1 class="text-2xl text-gray-500 uppercase">Your Search Movies</h1>
    <div class="w-full grid grid-cols-5 gap-x-4 gap-y-8 py-5" in:fly={{  x:-30, duration: 1000, delay: 200 }} out:fly={{ x: 15, duration: 200}}>
      {#each searchMovie as movie}
       <CardMovie {movie} />
      {/each}
    </div>
  </div>

