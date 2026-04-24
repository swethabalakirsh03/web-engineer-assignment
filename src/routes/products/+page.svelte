<script>
  import { products } from '$lib/products.js';
  import "$lib/styles/products.css";

</script>

<svelte:head>
  <title>Products | YourStyle</title>
  <meta name="description" content="Explore our products" />
</svelte:head>


<section class="page">
  <p class="label">Our Collection</p>
  <h1>Latest Fashion Picks</h1>
  <p class="sub">Discover styles crafted for comfort and confidence.</p>

 <div class="grid">
  {#each products as product}
    <div class="card" >

     
      <!-- Image -->
      <div class="img-wrapper">
        <img 
          src={product.image} 
          alt={""} 
        />
      </div>

      <!-- Content -->
      <div class="content">
        <p class="name">{product.name}</p>
        <p class="tier">{product.category}</p>
        <p class="desc">{product.desc}</p>
      </div>

      <!-- Footer -->
      <div class="footer">
        <div class="pricing">
          <span class="price">₹{product.price}</span>
          {#if product.oldPrice}
            <span class="old-price">₹{product.oldPrice}</span>
          {/if}
        </div>

        <a href={"/products/" + product.id} class="btn">
          View
        </a>
      </div>

    </div>
  {/each}
</div>
</section>
