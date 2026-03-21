import { NextResponse } from 'next/server';
import { groq } from "next-sanity";
import { Social } from '@/typings';
import { client } from '@/sanity/lib/client';

const query = groq`
  *[_type == "social"]
`;

export async function GET() {
  try {
    const socials: Social[] = await client.fetch(query);
    return NextResponse.json({ socials });
  } catch (error) {
    console.error("Error fetching socials:", error);
    return NextResponse.json({ error: "Error fetching socials" }, { status: 500 });
  }
}