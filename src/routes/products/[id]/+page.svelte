<script>
  let { data } = $props();
  const { product } = data;

  let currentIndex = $state(0);  // ← $state() makes it reactive in Svelte 5

  function next() {
    currentIndex = (currentIndex + 1) % product.list.length;
  }

  function prev() {
    currentIndex = (currentIndex - 1 + product.list.length) % product.list.length;
  }

let selectedSize = $state('M');
let quantity = $state(1);

function increaseQty() {
  quantity += 1;
}

function decreaseQty() {
  if (quantity > 1) quantity -= 1;
}


  import "$lib/styles/pagedetails.css";
</script>

<svelte:head>
  <title>{product.name} | YourStyle</title>
  <meta name="description" content={`Details about ${product.name}`} />
</svelte:head>



<div class="pd-root">

  <div class="pd-back">
    <a href="/products" class="pd-back-btn">← Back</a>
  </div>

  <div class="pd-layout">

    <!-- LEFT: IMAGE SECTION -->
    <div class="pd-gallery">

      <!-- Main Image -->
      <div class="pd-main-img">
        <img src={product.list[currentIndex]} alt={product.name} />

        <!-- Arrows -->
<button class="pd-arrow left" on:click={prev}>‹</button>
<button class="pd-arrow right" on:click={next}>›</button>
      </div>

      <!-- Thumbnails -->
      <div class="pd-thumbs">
        {#each product.list as img, i}
          <img
            src={img}
            alt=""
            class:selected={i === currentIndex}
            on:click={() => currentIndex = i}
          />
        {/each}
      </div>
    </div>

    <!-- RIGHT: DETAILS -->
    <div class="pd-info">



      <h1 class="pd-title">{product.name}</h1>
      <p class="pd-category">{product.category}</p>

      <div class="pd-price-row">
        <span class="pd-price">₹{product.price}</span>
        {#if product.oldPrice}
          <span class="pd-old">₹{product.oldPrice}</span>
        {/if}
      </div>


      <p class="pd-desc">{product.desc}</p>

      {#if product.popular}
        <p class="pd-popular">🔥 Most Popular</p>
      {/if}

      <!-- SIZE SELECTOR -->
  <div class="pd-section">
    <p class="pd-label">Select Size</p>
    <div class="pd-sizes">
      {#each ['S', 'M', 'L', 'XL'] as size}
        <button
          class="pd-size-btn"
          class:active={selectedSize === size}
          on:click={() => selectedSize = size}
        >
          {size}
        </button>
      {/each}
    </div>
  </div>


  <!-- QUANTITY PICKER -->
  <div class="pd-section">
    <p class="pd-label">Quantity</p>
    <div class="pd-qty">
      <button class="pd-qty-btn" on:click={decreaseQty}>−</button>
      <span class="pd-qty-count">{quantity}</span>
      <button class="pd-qty-btn" on:click={increaseQty}>+</button>
    </div>
  </div>

      <button class="pd-buy">Buy Now</button>

    </div>

  </div>
</div>
