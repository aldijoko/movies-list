<script>
    export let movie;

</script>

<a href={'/movie/'+movie.id}>
    <div class="w-full">
        <img src={`https://image.tmdb.org/t/p/w500` + movie.poster_path} alt={movie.title}>
    </div>
    <div class="p-2">
        <p class="text-lg text-white leading-5 mb-2">{movie.title}</p>
        <p class="text-gray-400 text-sm inline-flex gap-2"><span class="iconify text-xl" data-icon="fluent:movies-and-tv-16-regular"></span> {movie.release_date}</p>
    </div>
</a>




<style lang="postcss">

</style>