import { NextResponse } from 'next/server';
import { groq } from "next-sanity";
import { client } from '@/sanity/lib/client';
import { Project } from '@/typings';

const query = groq`
  *[_type == "project"]{
    ...,
    technologies[]->
  }
`;

export async function GET() {
  try {
    const projects: Project[] = await client.fetch(query);
    return NextResponse.json({ projects });
  } catch (error) {
    console.error("Error fetching projects:", error);
    return NextResponse.json({ error: "Error fetching projects" }, { status: 500 });
  }
}