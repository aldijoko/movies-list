<script>
	import { fly } from "svelte/transition";


    export let data

    const { movieDetails } = data;
    // console.log(movieDetails)
</script>

<div class="w-full p-5">
    <div class="flex items-center gap-2">
        <a href="/">
            <span class="iconify text-xl text-gray-400" data-icon="material-symbols:arrow-back-ios-rounded"></span>
        </a>
        <h1 class="text-2xl text-gray-500 uppercase">Movie Detail: {movieDetails.title}</h1>
    </div>
    
    <div class="py-10" in:fly={{  y:-30, duration: 500 }} out:fly={{ duration: 200}}>
        <div class="w-full rounded-xl">
            <img class="rounded-xl" src={'https://image.tmdb.org/t/p/original' + movieDetails.backdrop_path} alt={movieDetails.title}>
        </div>
        <div class="mt-5 px-5 w-full gap-5">
            <h2 class="text-2xl font-bold text-white">{movieDetails.original_title}</h2>
            <div class="w-full flex gap-5">
                <div class="w-1/2">
                    <div class="w-1/2 flex justify-between items-center mt-2">
                        <p class="flex gap-2 text-base items-center">
                            <span class="iconify" data-icon="mdi:clock-time-three-outline"></span>
                            {movieDetails.runtime}
                            Minutes
                        </p>
                        <p class="flex gap-2 text-base items-center">
                            <span class="iconify" data-icon="material-symbols:star"></span>
                            {movieDetails.vote_average}
                        </p>
                    </div>
                    <div class="w-full mt-2">
                        <div class="w-full flex item text-xl gap-3">
                            <p class="font-medium">Release Date :</p>
                            <p>{movieDetails.release_date}</p>
                        </div>
                        <div class="w-full flex text-xl gap-2 mt-2">
                            <p class="font-medium">Genre :</p>
                            <div class="grid grid-cols-4 gap-4">
                                {#each movieDetails.genres as genre}
                                <div class="w-full bg-white rounded-md px-2 py-1 text-black flex justify-center items-center">
                                    <p class="text-sm">{genre.name}</p>
                                </div>
                                
                                {/each}
                            </div>
                            
                        </div>
                        <div class="w-full flex items-center text-xl gap-3 mt-5">
                            <p class="font-medium">Status :</p>
                            <div class=" bg-white rounded-md px-3 py-1 text-black flex justify-center items-center">
                                <p class="text-sm">{movieDetails.status}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-1/2">
                    <h3 class="text-xl font-bold mb-2">Overview:</h3>
                    <p>{movieDetails.overview}</p>
                </div>
                
            </div>
            
            <!-- <div class="w-full">
                <div class="w-1/2 flex gap-2">
                    <p class="text-xl">Release Date</p>
                    <p class="text-lg font-light">{movieDetails.release_date}</p>
                </div>
            </div> -->
        </div>
    </div>
</div>

<style lang="postcss">

</style>