import { useEffect, useState } from "react"

export default function DogPics() {
    const [dogPic, setDogPic] = useState('')
    const randomPic = () => fetch(`https://dog.ceo/api/breeds/image/random`)
        .then((response) => response.json())
        .then((actualData) => setDogPic(actualData.message))
        .catch((err) => {
            console.log(err.message);
        });


    useEffect(() => {
        console.log("it's ok");
    }, [dogPic]);
    return (
        <div className='dog-pics'>
            <img src={dogPic} />
            <button onClick={randomPic}>🐶</button>
        </div>
    )
}