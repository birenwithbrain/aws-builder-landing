import { NextResponse } from "next/server";

export async function POST(request: Request) {
  console.log("🔥 API ROUTE HIT");

  try {
    const body = await request.json();

    console.log("📦 BODY:", body);

    const name = String(body.name || "").trim();
    const alias = String(body.alias || "").trim();

    if (!name || !alias) {
      return NextResponse.json(
        {
          success: false,
          error: "Name and alias are required.",
        },
        { status: 400 }
      );
    }

    console.log("Sending to Apps Script:", { name, alias });

    // const googleSheetsUrl = process.env.GOOGLE_SHEETS_URL;

    const googleSheetsUrl = "https://script.google.com/macros/s/AKfycbwsX5KvGZWl4im77OkT73UdqWsqJFNPtJs9xflYaQxbFHPCFksGg9UmerekPiFyn9k/exec";

    console.log("🔗 Google Sheets URL exists:", !!googleSheetsUrl);

    if (!googleSheetsUrl) {
    throw new Error("GOOGLE_SHEETS_URL is missing");
    }

    const response = await fetch(googleSheetsUrl, {
    method: "POST",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
        name,
        alias,
    }).toString(),
    redirect: "follow",
    });

    console.log("📡 Apps Script status:", response.status);
    console.log("📍 Final URL:", response.url);

    const result = await response.text();
    console.log("📨 Apps Script response:", result);

    return NextResponse.json({
      success: true,
    });

  } catch (error) {
    console.error("❌ Submission error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Submission failed.",
      },
      { status: 500 }
    );
  }
}