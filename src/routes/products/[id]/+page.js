import { error } from "@sveltejs/kit";
import { products } from "$lib/products";

export function load({ params }) {
  const product = products.find((p) => Number(p.id) === Number(params.id));

  if (!product) {
    error(404, "Product not found"); // throws a proper 404
  }

  return { product };
}
