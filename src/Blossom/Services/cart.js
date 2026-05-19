const CART_KEY = "bloomy_cart";

function getCartRaw() {
  const raw = localStorage.getItem(CART_KEY);
  return raw ? JSON.parse(raw) : [];
}

function saveCart(items) {
  localStorage.setItem(CART_KEY, JSON.stringify(items));
}

// items: [{ id, userId, productId, quantity }]
export function getCart(userId) {
  const all = getCartRaw();
  return all.filter((item) => item.userId === userId);
}

export function addToCart(userId, productId, quantity = 1) {
  const all = getCartRaw();

  const existing = all.find(
    (item) => item.userId === userId && item.productId === productId
  );

  if (existing) {
    existing.quantity += quantity;
  } else {
    all.push({
      id: Date.now(),
      userId,
      productId,
      quantity,
    });
  }

  saveCart(all);
}

export function updateCartItem(itemId, quantity) {
  const all = getCartRaw();
  const item = all.find((i) => i.id === itemId);
  if (!item) return;

  if (quantity <= 0) {
    const filtered = all.filter((i) => i.id !== itemId);
    saveCart(filtered);
  } else {
    item.quantity = quantity;
    saveCart(all);
  }
}

export function clearCart(userId) {
  const all = getCartRaw();
  const filtered = all.filter((i) => i.userId !== userId);
  saveCart(filtered);
}
