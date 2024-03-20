import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = cookies();
  const userId = cookieStore.get("userId")?.value;
  return Response.json({ userId });
}
