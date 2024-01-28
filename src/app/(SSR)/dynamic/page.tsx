import { UnsplashImage } from "@/modals/unsplash-image";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {Alert} from '@/components/bootstrap'

export const metadata: Metadata = {
    title: "Dynamic Fetching - NextJs Image Gallery",
  };
  
export const revalidate = 0; 

export default async function DynamicPage(){
 const res= await fetch('https://api.unsplash.com/photos/random?client_id='+ process.env.UNSPLASH_ACCESS_KEY)
const image: UnsplashImage = await res.json();

const width = Math.min(500, image.width);
const height= Math.min(width/image.width) * image.height;

return(
    <div className="d-flex flex-column align-items-center">
        <Alert>
            This page <strong> fetches data dynamically</strong>. 
            Every time you refresh the page, you get a new image from the Unsplash API.
        </Alert>
       <Image 
            src={image.urls.raw}
            alt={image.description}
            width={width}
            height={height}
            className="rounded shadow mw-100 h-100"
       />
       by <Link href={'/users/' + image.user.username}>{image.user.username}</Link> 
    </div>
)
}
