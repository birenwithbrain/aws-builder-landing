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

    console.log("📤 Sending to Apps Script:", { name, alias });

    const response = await fetch(process.env.GOOGLE_SHEETS_URL!, {
      method: "POST",
      body: new URLSearchParams({
        name,
        alias,
      }),
    });

    console.log("📡 Apps Script status:", response.status);

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