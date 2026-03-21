import { NextResponse } from 'next/server';
import { groq } from "next-sanity";
import { PostInfo } from '@/typings';
import { client } from '@/sanity/lib/client';

const query = groq`
  *[_type == "postInfo"]
`;

export async function GET() {
  try {
    const pageInfo: PostInfo[] = await client.fetch(query);
    return NextResponse.json({ pageInfo });
  } catch (error) {
    console.error("Error fetching pageInfo:", error);
    return NextResponse.json({ error: "Error fetching pageInfo" }, { status: 500 });
  }
}