export const formatCurrency = (n) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(n);
export const formatDate = (iso) => new Date(iso).toLocaleString();
