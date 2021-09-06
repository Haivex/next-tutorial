//https://localhost:3000/fruit/apple WORKS
//https://localhost:3000/fruit/banana WORKS
//https://localhost:3000/fruit/apple/red NOT WORKING (we must create folder with  square bracket [] and file with square bracket inside and index file to working)

import { useRouter } from 'next/dist/client/router'

export default function FruitName() {
    const router = useRouter();

    function takeHome() {
        //router.replace('')
        router.push('/')
    }

    return (
            <h2>Hello {router.query.name} {router.query.subname} <button onClick={takeHome}>Home</button></h2>
    )
}
