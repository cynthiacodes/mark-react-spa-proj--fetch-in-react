import { useState } from "react";

interface Dog {
  message: string;
  status: string;
}

function DogApp() {
  const [dog, setDog] = useState<Dog>();

  const handleGetPicture = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const jsonBody:{message:string, status:string} = await response.json();
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
          <button onClick={handleGetPicture}>Get another picture</button>
        </>
      )}
    </>
  );

  //   if (dog) {
  //     return (
  //       <div>
  //         <h1>Dog app</h1>
  //           <img src="https://images.dog.ceo/breeds/maltese/n02085936_13013.jpg" alt=""/>
  //         <hr />
  //         <button onClick={handleGetPicture}>Get another picture</button>
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <div>
  //         <h1>Dog app</h1>
  //         <p>
  //           Click the button to trigger a <code>fetch</code> that gets a random
  //           dog picture from an API!
  //         </p>
  //         <button onClick={handleGetPicture}>Get picture </button>
  //       </div>
  //     );
  //   }
}

export default DogApp;
