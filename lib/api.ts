const API_URL = process.env.NEXT_PUBLIC_API_URL!;

// -------- PRODUCTS --------
export async function getProducts() {
  const res = await fetch(`${API_URL}/products`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

export async function getProduct(id: string | number) {
  const res = await fetch(`${API_URL}/products/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return null;
  }

  return res.json();
}

// -------- CART --------
export async function addToCart(productId: number, quantity = 1) {
  const res = await fetch(
    `${API_URL}/cart?product_id=${productId}&quantity=${quantity}`,
    {
      method: "POST",
    }
  );
  if (!res.ok) throw new Error("Failed to add to cart");
  return res.json();
}

export async function getCart() {
  const res = await fetch(`${API_URL}/cart`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch cart");
  return res.json();
}



// -------- ORDERS --------
export async function createOrder() {
  const res = await fetch(`${API_URL}/orders`, {
    method: "POST",
  });

  if (!res.ok) throw new Error("Failed to create order");

  return res.json();
}