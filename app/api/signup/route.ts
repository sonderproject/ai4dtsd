import { NextResponse } from "next/server";

export type SignupPayload = {
  name: string;
  email: string;
  businessName: string;
  role: string;
  timeSink: string;
};

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let body: Partial<SignupPayload>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const businessName = (body.businessName ?? "").trim();
  const role = (body.role ?? "").trim();
  const timeSink = (body.timeSink ?? "").trim();

  if (!name || !email || !businessName || !role) {
    return NextResponse.json(
      { ok: false, error: "Please fill in all required fields." },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const payload: SignupPayload = { name, email, businessName, role, timeSink };

  // Lead ownership: this data belongs to Sonder Project.
  // For now we just log the payload so the form works end-to-end.
  console.log("[signup] New event signup:", payload);

  // TODO: Persist the signup to the database (Sonder Project lead store).
  // Replace this log with an insert into the events/signups table, e.g.:
  //   await db.insert(signups).values({ ...payload, createdAt: new Date() });

  return NextResponse.json({ ok: true });
}
