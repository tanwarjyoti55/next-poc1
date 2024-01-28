export default async function HelloPage(){
    await new Promise((resolve)=>{setTimeout(() => {
        resolve(1)
    }, 3000);})
    // throw Error('Bazinga');
    return <h2>Hello from NextJs</h2>
}