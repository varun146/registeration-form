import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const url = "http://localhost:3000/signup";
  const payload = {
    name,
    email,
    password,
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Hello");
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const response = await res.json();
      if (response.message === "success") {
        toast.success("User created Successfully");
      }
      setName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      toast.error("Error while signing up!!");
    }
  };
  return (
    <>
      <div className="w-full h-screen">
        <div className="bg-black/60 fixed  top-0 left-0 w-full h-screen"></div>
        <div className="fixed w-full px-8 py-24 z-50">
          <div className="max-w-[450px]  h-[600px] mx-auto rounded-xl bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto  py-16">
              <h1 className="text-3xl text-center mb-10 font-bold">Sign Up</h1>
              <Toaster position="bottom-center" />
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col py-4"
              >
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  required
                  placeholder="Name"
                  className="focus:outline-none rounded-md p-3 my-2 bg-gray-700 "
                />
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  required
                  placeholder="Email"
                  className="focus:outline-none p-3 my-2 bg-gray-700 rounded"
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  required
                  placeholder="Password"
                  className="focus:outline-none p-3 my-2 bg-gray-700 rounded"
                />
                <button
                  type="submit"
                  onSubmit={handleSubmit}
                  className="bg-purple-600 my-6 py-3 font-bold rounded"
                >
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
