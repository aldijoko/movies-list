<script>

    const listCategory = [
        {name: 'Action'},
        {name: 'Detectives'},
        {name: 'Fantasy'},
        {name: 'Space'},
        {name: 'Blockbasters'},
        {name: 'Shitty but i love it'},
        {name: 'My Top 100'},
    ]
</script>

<div class="w-full h-full flex flex-col justify-between">
    <div class="mt-2 mx-3">
        <h1 class="font-bold text-red-500 text-2xl">Movielist</h1>
        <div class="h-7 w-full rounded-md border mt-3 mb-3">

        </div>
        <div class="w-full border-b border-t py-3">
            <a href="">
                <div class="w-full flex gap-4 items-center px-2 py-2 is-active">
                    <span class="iconify text-xl" data-icon="heroicons:home"></span>
                    <p class="text-sm">Home</p>
                </div>
            </a>
            
            <div class="w-full flex gap-4 items-center px-2 py-2">
                <span class="iconify text-xl" data-icon="ic:outline-library-add"></span>
                <p class="text-sm">Library</p>
            </div>
            <div class="w-full flex justify-between items-center">
                <div class="w-full flex gap-4 items-center px-2 py-2">
                    <span class="iconify text-xl" data-icon="icon-park-outline:people"></span>
                    <p class="text-sm">Friend</p>
                </div>
                <div class="px-2 py-1 bg-white rounded-full">
                    <p class="text-xs text-black">1</p>
                </div>
            </div>
            
        </div>
        <div class="w-full pt-3">
            <p class="text-gray-400 font-medium text-base uppercase px-3">My Lists</p>
            <div class="my-2">
                {#each listCategory as lc}
                <div class="w-full flex gap-4 items-center px-2 py-2">
                    <div class="w-6 h-6 bg-gray-500 rounded-md">

                    </div>
                    <p class="text-sm">{lc.name}</p>
                </div>
                {/each}
            </div>
            <button class="w-full h-full bg-red-500 rounded-md py-2 text-black text-sm font-bold">
                Create list
            </button>
        </div>
    </div>
    <div class="p-3 w-full flex items-center justify-between">
        <div class="flex items-center gap-2">
            <div class="w-7 h-7 rounded-full bg-gray-500">

            </div>
            <div class="text-white">
                <p class="text-sm font-bold">Chan Geme</p>
                <p class="text-xs">@changeme</p>
            </div>
        </div>
        <div>
            <button class="mt-2">
                <span class="iconify text-xl" data-icon="mdi:dots-horizontal"></span>
            </button>
        </div>
    </div>
</div>

<style lang="postcss">
    .is-active {
        @apply rounded-md bg-gray-600;
    }
</style>