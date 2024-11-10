import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
  try {
    return NextResponse.json({
      success: true,
      message: "Logged out successfully",
    });
  } catch (error) {
    console.error("Logout error: ", error);
    return NextResponse.json({
      message: "Error during logout",
      status: 500,
    });
  }
}
