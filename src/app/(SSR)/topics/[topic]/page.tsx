import { UnsplashImage } from "@/modals/unsplash-image";
import Image from "next/image";
import {Alert} from '@/components/bootstrap'
import styles  from './TopicPage.module.css'
import { Metadata } from "next";

interface Pageprops {
    params :{
        topic: string
    },
    // searchParams :{ [key: string]: string | string[] | undefined }
}

export function generateMetadata({ params : {topic} }: Pageprops):Metadata {
    return {
        title: topic + '- NextJs Image Gallery',
    }
} 

// export const revalidate = 0;

// export const dynamicParams = false;  use when i don't want to fetch data except advance cached data mean generateStaticParams

export function generateStaticParams(){
    return ['health','place','coding'].map(topic => ({topic}));
}

export default async function DynamicRoute({params: {topic}}:Pageprops) {
    const res= await fetch(`https://api.unsplash.com/photos/random?query=${topic}&count=8&client_id=${ process.env.UNSPLASH_ACCESS_KEY}`);
    const images : UnsplashImage[]= await res.json();

    return(
        <div>
            <Alert>
                 This page uses <strong>generateStaticProps</strong> to render and cache static pages at build time, 
                 even though the url has a dynamic parameter. Pages that are not included in generateStaticParams 
                 will be fetched & rendered on first access and then <strong>cached
                 for subsequent requests</strong>(this can be disabled).
            </Alert>
            <h1>{topic}</h1>
            <div className={styles.container}>
            {
                images.map((image)=>(
                    <div key={image.urls.raw}  style={{overflow:'hidden',width:'250px',height:'250px',margin:'0.25rem'}}>
                        <Image 
                        src={image.urls.raw}
                        width={250}
                        height={250}
                        alt={image.description}
                        key={image.urls.raw}                   
                        className={styles.image} 
                    />
                    </div>
                    
                ))
            }
            </div>
          
        </div>
    )
    
}