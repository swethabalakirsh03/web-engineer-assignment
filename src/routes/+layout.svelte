<!-- +layout.svelte -->
<script>
  import { page } from '$app/stores';
  import '../app.css';

  let { children } = $props();
</script>


<nav class="nav">
  <span class="nav-brand">YourStyle</span>
  <div class="nav-links">
    <a href="/">Home</a>
    <a href="/products">Products</a>
    <a href="/about">About</a>
  </div>
</nav>

{@render children()}

<style>
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px 0px;
    background: #111; 
    color: white;
    height:70px
  }

  a {
    color: white;
    margin-left: 20px;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  .active {
    text-decoration: underline;
  }
</style>