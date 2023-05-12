import { connectToDatabase } from "@/utils/db"
import type { NextApiRequest, NextApiResponse } from "next"
type Favorites = {
  product_name: string
  generic_name: string
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Favorites | string>
) {
  const newFavorites = req.body
  if (!newFavorites) {
    res.status(400).json("New favorite is not defined")
    return
  }
  if (req.method === "POST") {
    try {
      const favorites: Favorites = JSON.parse(JSON.stringify(newFavorites))
      if (Object.values(favorites).some((value) => !value)) {
        res.status(400).json("Invalid favorite data")
        return
      }
      const db = await connectToDatabase()
      await db.collection("favorites").insertOne(favorites)
      res.status(200).json(favorites)
    } catch (error) {
      console.error(error)
      res.status(500).json("Internal Server Error")
    }
  } else {
    res.status(405).send(`Method ${req.method} Not Allowed`)
  }
}
