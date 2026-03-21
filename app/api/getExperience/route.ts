import { NextResponse } from 'next/server';
import { groq } from "next-sanity";
import { Experience } from '@/typings';
import { client } from '@/sanity/lib/client';



const query = groq`
  *[_type == "experience"]{
    ...,
    technologies[]->
  }
`;

export async function GET() {
  try {
    const experiences: Experience[] = await client.fetch(query);
    return NextResponse.json({ experiences });
  } catch (error) {
    console.error("Error fetching experiences:", error);
    return NextResponse.json({ error: "Error fetching experiences" }, { status: 500 });
  }
}