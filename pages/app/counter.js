import { useState, useEffect } from "react";
import Button from "../../components/Button";

const counter = () => {
  const [count, setCount] = useState(0);
  const [showAlert, setShowAlert] = useState(false);

  const HandleDecrementCount = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <div>
      <head>
        <title>Counter App - Rahmat Agung Julians</title>
      </head>
      <main className="flex flex-col justify-center items-center p-10 min-h-screen">
        <div className="max-w-md">
          <h1 className="text-4xl font-bold mb-10">Counter App</h1>
          <h2
            className={`text-4xl font-bold mb-10 text-center ${
              count < 0 ? "text-red-500" : "text-green-500"
            }`}
          >
            {count}
          </h2>
          <div className="flex flex-row justify-between min-w-full">
            <Button text="Kurang" onClick={HandleDecrementCount} />
            <Button text="Tambah" onClick={() => setCount(count + 1)} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default counter;
