<script>
    import "../app.css";
	import Sidebar from "../lib/component/Sidebar.svelte";
  </script>
  
  <div class="w-full h-full flex">
    <aside class="w-1/6 h-screen border-r-2 shadow-md">
      <Sidebar />
    </aside>
    <main class="w-5/6 p-3">
      <slot />
    </main>
  </div>
 