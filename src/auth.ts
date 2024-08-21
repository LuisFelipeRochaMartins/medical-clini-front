'use server'

import { jwtVerify } from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const secret = process.env.secret;
const key = new TextEncoder().encode(secret);

export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ["HS256"],
  });
  return payload;
}

export async function getSession() {
  const session = cookies().get("session")?.value;

  if (!session) {
    redirect("/");
  }

  return await decrypt(session);
}

export async function login(token: string) {
  const expires = new Date(Date.now() + 2 * 1000 * 60 * 60); 
  cookies().set("session", token, { expires, httpOnly: true});
  redirect("/dashboard")
}

export async function logout() {
  cookies().set("session", "", { expires: new Date(0) });
}
