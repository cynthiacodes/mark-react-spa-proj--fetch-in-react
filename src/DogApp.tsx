import { useState } from "react";

interface Dog {
  message: string;
}

function DogApp() {
  const [dog, setDog] = useState<Dog>();
  const [storePicture, setStorePicture] = useState<{message:string}[]>([]);

  const handleGetPicture = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const jsonBody:{message:string} = await response.json();
    setDog(jsonBody);
    if (dog) {
      setStorePicture(prevValue => [...prevValue, dog]);
    }
  };


  const listDogPic = storePicture.map((object,index)=> (
    <li key = {index}><img src={object.message} alt="" /></li>
  ));




  return (
    <div>
      <h1>Dog app</h1>
      {dog && (
        <>
          <img className = "image"src={dog.message} alt="" />
          <hr />
          <button onClick={handleGetPicture}>Get another picture</button>
          <hr />
          <ul>{listDogPic}</ul>
        </>
      )}
      {!dog && (
        <>
          <p>
            Click the button to trigger a <code>fetch</code> that gets a random
            dog picture from an API!
          </p>
          <hr />
          <button onClick={handleGetPicture}>Get picture</button>
        </>
      )}
    </div>
  );

}

export default DogApp;
