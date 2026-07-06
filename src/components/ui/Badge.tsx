export function Badge({ children, variant = "default" }: { children: React.ReactNode; variant?: "default" | "deal" | "category" }) {
  const styles = {
    default: "bg-neutral-100 text-neutral-700",
    deal: "bg-accent-500 text-white",
    category: "bg-primary-50 text-primary-700",
  };
  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${styles[variant]}`}>
      {children}
    </span>
  );
}
