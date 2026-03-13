import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, service, address, message } = body;

    if (!name || !phone || !service) {
      return NextResponse.json(
        { error: "Name, phone, and service are required" },
        { status: 400 }
      );
    }

    // Forward to n8n webhook
    const webhookUrl = process.env.N8N_WEBHOOK_URL;
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          service,
          address,
          message,
          source: "website",
          timestamp: new Date().toISOString(),
        }),
      });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
