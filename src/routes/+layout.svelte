<script>
    import "../app.css";
	import Sidebar from "../lib/component/Sidebar.svelte";
  </script>
  
  <div class="w-full h-full flex">
    <aside class="w-64 h-full border-r-2 shadow-md fixed " >
      <Sidebar />
    </aside>
    <main class="w-full p-3 ml-64" style="width: calc( 100vw - 256px);">
      <slot />
    </main>
  </div>
 