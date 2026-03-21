import { NextResponse } from 'next/server';
import { groq } from "next-sanity";
import { Skill, Social } from '@/typings';
import { client } from '@/sanity/lib/client';

const query = groq`
  *[_type == "skill"]{
    _id,
    _type,
    title,
    progress,
    image
  }
`;

export async function GET() {
  try {
    const skills: Skill[] = await client.fetch(query);
    return NextResponse.json({ skills });
  } catch (error) {
    console.error("Error fetching skills:", error);
    return NextResponse.json({ error: "Error fetching skills" }, { status: 500 });
  }
}