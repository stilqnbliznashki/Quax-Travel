"use client";
import { useCart } from "@/src/context/CartContext";

export default function CartPage() {
  const { items, removeItem } = useCart();
  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  if (items.length === 0) {
    return <div className="max-w-3xl mx-auto px-6 py-16 text-center text-neutral-600">Your cart is empty.</div>;
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="font-display text-3xl mb-8">Your cart</h1>
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="flex items-center justify-between border-b border-neutral-100 pb-4">
            <div>
              <p className="font-medium">{item.name}</p>
              <p className="text-sm text-neutral-600">Qty: {item.quantity}</p>
            </div>
            <div className="flex items-center gap-4">
              <p className="font-medium">{item.price * item.quantity} {item.currency}</p>
              <button onClick={() => removeItem(item.id)} className="text-sm text-red-500 hover:underline">
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-8 text-xl font-semibold">Total: {total} {items[0]?.currency}</p>
    </div>
  );
}
