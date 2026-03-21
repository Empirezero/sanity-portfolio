
interface SanityBody{
   _id: string;
   _rev: string;
   _updatedAt: string;
   _createdAt: string;
}

interface Image{
   _type: "image";
  asset:{
    _ref:string;
    _type:'reference';
  }
}

export interface PostInfo extends SanityBody {
    _type: "postInfo";
    address: string;
    backgroundInformation: string;
    email: string;
    role: string;
    heroImage: Image;
    name: string;
    phoneNumber: string;
    profilePic: Image;
    title: string; // Add this line
}

export interface Skill extends SanityBody {
  _type: "skill";
  image: Image;
  progress: number;
  title: string;
  description?: string; // ✅ added
}

export interface Technology extends SanityBody {
    _type: "technology";
    image: Image;
    progress: number;
    title: string;
}

export interface Project extends SanityBody{
title:string;
_type:"project";
image:Image;
linkToBuild: string;
summary:string;
technologies:Technology[];
}

export interface Experience extends SanityBody{
_type:"experience";
company:string;
companyImage:Image;
dateStarted:Date;
dateEnded:Date;
isCurrentWorkingHere:boolean;
jobTite:string;
points: string[];
technologies:Technology[];
}
export interface Social extends SanityBody{
  _type:"social";
  title:string;
  url:string;
}