const ORDERS_KEY = "bloomy_orders";

function getOrdersRaw() {
  const raw = localStorage.getItem(ORDERS_KEY);
  return raw ? JSON.parse(raw) : [];
}

function saveOrders(orders) {
  localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
}

// ثبت سفارش جدید
export function createOrder({ userId, items, totalPrice }) {
  const orders = getOrdersRaw();

  const newOrder = {
    id: Date.now(),
    userId,
    items,       // آرایه‌ای از { productId, quantity, priceEach }
    totalPrice,
    createdAt: new Date().toISOString(),
    status: "در انتظار تأیید",
  };

  orders.push(newOrder);
  saveOrders(orders);

  return newOrder;
}

// لیست سفارش‌های یک کاربر
export function getUserOrders(userId) {
  const orders = getOrdersRaw();
  return orders.filter((o) => o.userId === userId);
}
