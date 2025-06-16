"use server"
import { dbConnect } from "@/lib/dbConnect";

export const RegisterUser = async (user) => {
      try {
            // Need to check if unique username was given

            console.log(user)
            const result = await dbConnect("users").insertOne(user)
            return result
      } catch (error) {
            console.log(error)
            return null
      }
};