import { NextApiRequest, NextApiResponse } from "next"
import { connectToDatabase } from "@/utils/db"

type Favorites = {
  _id: string
  product_name: string
  generic_name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Favorites | Favorites[] | string>
) {
  try {
    switch (req.method) {
      case "GET": {
        // Get all users from the database
        const db = await connectToDatabase()
        const favorites = await db.collection("favorites").find().toArray()

        const convertedFavorites: Favorites[] = favorites.map(
          (favoritesDoc) => {
            return {
              product_name: favoritesDoc.product_name as string,
              generic_name: favoritesDoc.generic_name as string,
              _id: favoritesDoc._id.toString(),
            }
          }
        )

        if (convertedFavorites.length === 0) {
          console.log("PRETTY EMPTY DUDE")
          res.status(200).json("EMPTY")
        } else {
          res.status(200).json(convertedFavorites)
        }

        break
      }

      default: {
        // Return a 405 Method Not Allowed error for all other HTTP methods
        res.setHeader("Allow", ["GET", "POST"])
        res.status(405).end(`Method ${req.method} Not Allowed`)
        break
      }
    }
  } catch (error) {
    throw new Error("Something went wrong " + error)
  }
}
