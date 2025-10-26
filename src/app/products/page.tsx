// "use client";
// import { useEffect, useState } from "react";
// import { fetchProducts } from "../services/client/products";
// import Card from "../components/Card/Card";

// export default function ProductsPage() {
//   const [products, setProducts] = useState<any[]>([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetchProducts();
//         const data = await res.json();
//         setProducts(data || []);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>Products Page</h1>
//       <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 16 }}>
//         {products.map((p) => (
//           <Card key={p.id ?? p._id} product={p} />
//         ))}
//       </div>
//     </div>
//   );
// }
"use client";
import { useEffect, useState } from "react";
import { fetchProducts } from "../services/client/products";
import Card from "../components/Card/Card";

export default function ProductsPage() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProducts(); // כבר מחזיר JSON
        setProducts(data ?? []);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Products Page</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 16 }}>
        {products.map((p) => (
          <Card key={p.id ?? p._id} product={p} />
        ))}
      </div>
    </div>
  );
}

