<script>
  let { data } = $props();
  const { product } = data;
    import "$lib/styles/pagedetails.css";

</script>

<svelte:head>
  <title>{product.name} | MyProduct</title>
  <meta name="description" content={`Details about ${product.name}`} />
</svelte:head>


<div class="main-container">
<div class="back-off">
<a href="/products" class="back-btn">← Back</a>
</div>
<div class="container">
  <div class="card">

    <!-- Badge -->
    {#if product.badge}
      <span class="badge">{product.badge}</span>
    {/if}

    <!-- Title -->
    <h1>{product.name}</h1>
    <p class="tier">{product.tier}</p>

    <!-- Price -->
    <div class="price-box">
      {#if product.price !== null}
        <span class="price">₹{product.price}</span>
      {/if}

      {#if product.oldPrice}
        <span class="old-price">₹{product.oldPrice}</span>
      {/if}
    </div>

    <!-- Description -->
    <p class="desc">{product.desc}</p>

    <!-- Popular tag -->
    {#if product.popular}
      <p class="popular">🔥 Most Popular</p>
    {/if}

    <!-- Button -->
    <button>Buy Now</button>

  </div>
</div>
</div>
