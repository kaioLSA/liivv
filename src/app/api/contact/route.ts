import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    if (!name || !message) {
      return NextResponse.json(
        { error: "Nome e mensagem são obrigatórios." },
        { status: 400 }
      );
    }

    // Integration point: send email/notification here
    console.log("New contact:", { name, email, phone, message });

    return NextResponse.json({ success: true, message: "Mensagem recebida!" });
  } catch {
    return NextResponse.json({ error: "Erro interno." }, { status: 500 });
  }
}
