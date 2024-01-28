import { UnsplashImage } from "@/modals/unsplash-image";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {Alert} from '@/components/bootstrap'

export const metadata: Metadata = {
    title: "Static Fetching - NextJs Image Gallery",
  };
  

export default async function StaticPage(){
 const res= await fetch('https://api.unsplash.com/photos/random?client_id='+ process.env.UNSPLASH_ACCESS_KEY)
const image: UnsplashImage = await res.json();

const width = Math.min(500, image.width);
const height= Math.min(width/image.width) * image.height;

return(
    <div className="d-flex flex-column align-items-center">
        <Alert>
            This page <strong> fetches and caches at build time</strong>. 
            Even though the Unsplash API always returns a new image, we see 
            the same image after refreshing the page until we copline the project again.
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