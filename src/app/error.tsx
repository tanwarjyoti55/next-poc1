'use client'

import { Button } from "react-bootstrap"


interface ErrorProps{
    error: Error,
    reset:()=>void,
}
export default function Error({error,reset}:ErrorProps){
    return <>
    <h3>Error Occured</h3>
    <p>Something went wrong</p>
    <Button onClick={reset}>Try Again</Button>
    </>
}