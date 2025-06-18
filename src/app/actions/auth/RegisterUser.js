"use server"
import { collectionNames, dbConnect } from "@/lib/dbConnect";

export const RegisterUser = async (user) => {
      try {
            // Need to check if unique username was given

            console.log(user)
            const result = await dbConnect(collectionNames.USERS).insertOne(user)
            return result
      } catch (error) {
            console.log(error)
            return null
      }
};