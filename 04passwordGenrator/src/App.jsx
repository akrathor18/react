import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [lenght, setLenght] = useState(8);
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [pass, setPass] = useState("");
  const [copy, setCopyText] = useState("Copy");

  // useRef hook in react
  const passRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
    if (numAllow) str += "0123456789";
    if (charAllow) str += "!@#$%^&*(){}[]/";

    for (let i = 1; i <= lenght; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPass(pass);
  }, [lenght, numAllow, charAllow, setPass]);
  const copyPassword = useCallback(() => {
    setCopyText("Copy");
    setCopyText("copied!");
    window.navigator.clipboard.writeText(pass);
    setTimeout(() => {
      setCopyText("Copy");
    }, 1000);
  }, [pass]);

  useEffect(() => {
    passwordGenerator();
  }, [lenght, numAllow, charAllow, setPass]);

  return (
    <>
      <center>
        <div>
          <div className=" justify-center  w-full items-center space-x-2 md:w-1/3 bg-gray-400 p-5 mt-9">
            <h1>Password Genrator</h1>
            <div className="flex w-full items-center space-x-2">
              <input
                ref={passRef}
                readOnly
                value={pass}
                className="flex text-black bg-white m-6  h-10 w-full rounded-md border border-white/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1"
              />
              <button
                onClick={copyPassword}
                type="button"
                className="rounded-md h-10  bg-white px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                {copy}
              </button>
            </div>
            <div className="flex w-full items-center space-x-2">
              <input
                type="range"
                min={6}
                max={20}
                value={lenght}
                className="cursor-pointer"
                onChange={(e) => {
                  setLenght(e.target.value);
                }}
              />
              <label>Lenght: {lenght}</label>

              <label>
                <input
                  type="checkbox"
                  onChange={() => {
                    setNumAllow((prev) => !prev);
                  }}
                />
                Number
              </label>
              <label>
                <input
                  type="checkbox"
                  onChange={() => {
                    setCharAllow((prev) => !prev);
                  }}
                />
                Special Charter
              </label>
            </div>
          </div>
        </div>
      </center>
    </>
  );
}

export default App;
