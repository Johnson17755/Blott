import { NextResponse } from "next/server";

const API_URL = process.env.API_URL;
const API_KEY = process.env.API_KEY;

export async function GET() {
  try {
    const response = await fetch(
      `${API_URL}?category=general&token=${API_KEY}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        next: { revalidate: 300 }, // Cache for 5 minutes
      }
    );

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }

    const data = await response.json();

    const articles = data.map((item) => ({
      image: item.image || "/placeholder.svg?height=200&width=300",
      source: item.source || "Unknown Source",
      datetime: new Date(item.datetime * 1000).toISOString(), // Convert Unix timestamp
      headline: item.headline || "No headline available",
      url: item.url || "#",
    }));

    return NextResponse.json({ articles });
  } catch (error) {
    console.error("News API Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch news" },
      { status: 500 }
    );
  }
}
