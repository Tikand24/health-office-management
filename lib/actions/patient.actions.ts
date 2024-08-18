import UserHealth from "@/models/UserHealth";
import { connectDB } from "../mongodb";

export const createUser = async (user: CreateUserParams) => {
  try {
    //send the data to /api/user to save and return the user
    const response = await fetch("/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};