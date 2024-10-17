import React, { useEffect, useRef, useState } from "react";

const Manager = () => {
  const ref = useRef();
  const [form, setform] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setpassword] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setpassword(JSON.parse(passwords));
    }
  });

  const showPassword = () => {
    alert("Show password is clicked");
  };
  const savePassword = () => {
    console.log(form);
    setpassword({ ...passwordArray, form });
    localStorage.setItem(
      "password",
      JSON.stringify({ ...passwordArray, form })
    );
  };
  const handlechange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>

      <div className="container  bg-transparent mx-auto  my-10 px-5   rounded-lg max-w-lg">
        <h1 className="flex justify-center text-gray-50 text-7xl py-5">
          <span className="text-orange-300"> &lt;</span>
          Pass
          <span className="text-orange-300">OP/&gt; </span>
        </h1>
        <div className="flex justify-center text-gray-50  text-2xl py-5">
          Your own password Manager
        </div>

        <div className=" flex flex-col  border-emerald-200 text-blue">
          <input
            value={form.site}
            onChange={handlechange}
            placeholder="Enter the website link  "
            type="text"
            name="site"
            id=""
            className="text-black w-full rounded-lg border-4 border-indigo-500/50"
          />
          <div className="flex flex-row gap-10 p-10 justify-center rounded-lg  ">
            <input
              onChange={handlechange}
              placeholder="Enter your Username"
              value={form.username}
              name="username"
              className="w-full rounded-lg border-4 border-indigo-500/50"
              type="text"
            />
            <div className="relative">
              <input
                onChange={handlechange}
                value={form.password}
                name="password"
                placeholder="Enter your Password"
                className="w-45 rounded-lg border-4 border-indigo-500/50"
              />
              <button
                className="absolute right-0.5 top-1    font-bold"
                onClick={showPassword}
              >
                show
              </button>
            </div>
          </div>
          <div>
            <button
              onClick={savePassword}
              className="text-orange-300 flex justify-center text-2xl hover:text-white bg-slate-600 rounded-full items-center mx-20 px-10 py-1 w-fit hover:bg-orange-300"
            >
              <lord-icon
                src="https://cdn.lordicon.com/jeuxydnh.json"
                trigger="hover"
              ></lord-icon>
              Add password
            </button>
          </div>
        </div>
        
        <div className="passwords w-max ">
          <h2 className="text-orange-300 text-center py-5">Your passwords</h2>
          <table className="table-auto w-full bg-slate-800 text-orange-300 rounded-lg  ">
            <thead>
              <tr>
                <th className="py-2">Song</th>
                <th className="py-2">Artist</th>
                <th className="py-2">Year</th>
              </tr>
            </thead >
            <tbody className="text-center table-auto w-full bg-sky-500 text-orange-300 rounded-lg overflow-hidden py-2 ">
              <tr>
                <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                <td>Malcolm Lockyer</td>
                <td>1961</td>
              </tr>
              <tr>
                <td>Witchy Woman</td>
                <td>The Eagles</td>
                <td>1972</td>
              </tr>
              <tr>
                <td>Shining Star</td>
                <td>Earth, Wind, and Fire</td>
                <td>1975</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Manager;
