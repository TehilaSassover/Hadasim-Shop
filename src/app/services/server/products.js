import clientPromise from './mongo';

// Fetch all products
export async function fetchProducts() {
  try {
    const client = await clientPromise;
    const db = client.db("Hadasim"); // שם ה־DB שיצרת באטלס
    const products = await db.collection("Products").find({}).toArray();
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw new Error("Database error while fetching products");
  }
}

// Add a new product
export async function addProduct(productData) {
  try {
    const client = await clientPromise;
    const db = client.db("Hadasim");
    const result = await db.collection("Products").insertOne(productData);
    return result;
  } catch (error) {
    console.error("Error adding product:", error);
    throw new Error("Database error while adding product");
  }
}
