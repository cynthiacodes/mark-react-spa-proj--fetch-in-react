import { useState } from "react";

interface Dog {
  message: string;
}

function DogApp() {
  const [dog, setDog] = useState<Dog>();

  const handleGetPicture = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const jsonBody:{message:string} = await response.json();
    setDog(jsonBody);
  };

  return (
    <>
      <h1>Dog app</h1>
      {dog && (
        <>
          <img src={dog.message} alt="" />
          <button onClick={handleGetPicture}>Get another picture</button>
        </>
      )}
      {!dog && (
        <>
          <p>
            Click the button to trigger a <code>fetch</code> that gets a random
            dog picture from an API!
          </p>
          <button onClick={handleGetPicture}>Get picture</button>
        </>
      )}
    </>
  );

}

export default DogApp;
