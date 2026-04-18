<script>
  import { products } from '$lib/products.js';

</script>

<svelte:head>
  <title>Products | MyProduct</title>
  <meta name="description" content="Explore our products" />
</svelte:head>

<section class="page">
  <p class="label">Our products</p>
  <h1>Everything you need to grow</h1>
  <p class="sub">Pick the plan that fits your workflow — upgrade anytime.</p>

  <div class="grid">
    {#each products as product}
      <div class="card" class:featured={product.popular}>

        {#if product.badge}
          <span class="badge badge-{product.badge.toLowerCase()}">{product.badge}</span>
        {/if}

        <div class="icon" style="background:{product.iconColor};">
          <!-- swap SVG per product if needed -->
x
        </div>

        <div>
          <p class="name">{product.name}</p>
          <p class="tier">{product.tier}</p>
        </div>

        <p class="desc">{product.desc}</p>

        <div class="footer">
          <div class="pricing">
            {#if product.price === 0}
              <span class="price">₹0</span>
            {:else if product.price}
              <span class="price">₹{product.price.toLocaleString()}</span>
              {#if product.oldPrice}
                <span class="old-price">₹{product.oldPrice.toLocaleString()}</span>
              {/if}
            {:else}
              <span class="contact">Contact us</span>
            {/if}
          </div>
          <a href={"/products/" + product.id} class="btn">
            {product.price === null ? "Talk to sales" : product.price === 0 ? "Get started" : "Buy now"}
          </a>
        </div>

      </div>
    {/each}
  </div>
</section>

<style>
  .page {
    padding: 2rem 1.5rem;
  }

  .label {
    font-size: 13px;
    color: #888;
    margin: 0 0 4px;
  }

  h1 {
    font-size: 22px;
    font-weight: 500;
    margin: 0 0 6px;
  }

  .sub {
    font-size: 14px;
    color: #888;
    margin: 0 0 2rem;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 16px;
  }

  .card {
    background: white;
    border: 0.5px solid #ddd;
    border-radius: 12px;
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 10px;
    position: relative;
  }

  .card.featured {
    border: 2px solid #378ADD;
  }

  .badge {
    position: absolute;
    top: -11px;
    left: 1rem;
    font-size: 11px;
    padding: 3px 10px;
    border-radius: 8px;
    width:fit-content;
  }

  .badge-popular { background: #E6F1FB; color: #0C447C; }
  .badge-new     { background: #EEEDFE; color: #3C3489; }
  .badge-sale    { background: #EAF3DE; color: #27500A; }

  .icon {
    width: 38px;
    height: 38px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .name  { font-size: 15px; font-weight: 500; margin: 0; }
  .tier  { font-size: 12px; color: #888; margin: 2px 0 0; }
  .desc  { font-size: 12px; color: #888; margin: 0; line-height: 1.5; }

  .footer {
    margin-top: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .price     { font-size: 20px; font-weight: 500; }
  .old-price { font-size: 12px; color: #aaa; text-decoration: line-through; margin-left: 4px; }
  .contact   { font-size: 14px; color: #888; }

  .btn {
    padding: 7px 14px;
    border: 0.5px solid #ccc;
    border-radius: 8px;
    font-size: 12px;
    color: #111;
    text-decoration: none;
  }

  .btn:hover { background: #f5f5f5; }
</style>