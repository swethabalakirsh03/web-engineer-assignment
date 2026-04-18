<!-- +layout.svelte -->
<script>
  import { page } from '$app/stores';
  import '../app.css';

  let { children } = $props();
</script>

<nav>
  <h2>MyProduct</h2>
  <div>
    <a href="/" class:active={$page.url.pathname === '/'}>Home</a>
    <a href="/products" class:active={$page.url.pathname.startsWith('/products')}>Products</a>

  </div>
</nav>

{@render children()}

<style>
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background: #111;   /* ← fixed typo (backg\round) */
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