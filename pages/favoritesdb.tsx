import { connectToDatabase } from "@/utils/db"
import { Favorites } from "@/types/favorites"

export async function postProductToFavorites(
  product: Favorites
): Promise<void> {
  try {
    const db = await connectToDatabase()
    const collection = db.collection("favorites")
    await collection.insertOne(product)
    console.log("Product added to favorites:", product)
  } catch (err) {
    console.error("Failed to post product to favorites:", err)
    throw err
  }
}
