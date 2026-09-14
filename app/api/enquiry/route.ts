const types = new Set(["retail", "foodservice", "general"])

export async function POST(request: Request) {
  let body: Record<string, unknown>
  try {
    body = await request.json()
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 })
  }

  const field = (key: string) => (typeof body[key] === "string" ? (body[key] as string).trim() : "")
  const enquiry = {
    type: types.has(field("type")) ? field("type") : "general",
    name: field("name"),
    business: field("business"),
    email: field("email"),
    phone: field("phone"),
    message: field("message"),
  }

  if (!enquiry.name || !enquiry.message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(enquiry.email)) {
    return Response.json({ error: "Please add your name, a valid email and a message." }, { status: 400 })
  }

  // TODO: deliver enquiries by email once the recipient address and mail provider are confirmed.
  console.log("New enquiry", enquiry)

  return Response.json({ ok: true })
}
