import AuthLayout from "@/components/AuthLayout";
import { Inter } from "@next/font/google";
import Link from "next/link";
import { useState } from "react";

//import router
import Router from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Register() {
  const [field, setField] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const [error, setError] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  function value(e) {
    const name = e.target.getAttribute("name");
    setField({
      ...field,
      [name]: e.target.value,
    });
  }
  async function handler(e) {
    e.preventDefault();

    const fetchRegister = await fetch(`${process.env.SERVER}/register`, {
      method: "POST",
      body: JSON.stringify(field),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (fetchRegister.ok) {
      Router.push("/login");
    } else {
      const res = await fetchRegister.json();
      setError({
        name: res.name,
        email: res.email,
        password: res.password,
        password_confirmation: res.password_confirmation,
      });
    }
  }
  return (
    <>
      <AuthLayout
        title={"Bikin akun baru"}
        subTitle="Nggak susah kok, kamu cuma tinggal masukin beberapa data aja terus langsung jadi deh!"
        desc="Ayo mendaftar dan belajar dengan rajin di sini supaya jadi pinter dan nggak jadi beban kayak si Denis!"
        bgImage="/register.svg"
      >
        <form className="mt-11" onSubmit={handler}>
          <div>
            <label
              className={`${inter.className} block font-semibold text-base`}
              htmlFor="nama"
            >
              Nama
            </label>
            <input
              type="text"
              name="name"
              id="nama"
              onChange={value}
              className={`p-5 bg-[#F3F4F6] w-full rounded-lg mt-2.5  ${
                inter.className
              } ${
                error.name
                  ? "outline outline-red-500 outline-2"
                  : "focus:outline-none"
              }`}
            />
            {error.name && <p className="text-red-500 mt-2">{error.name}</p>}
          </div>
          <div className="mt-8">
            <label
              className={`${inter.className} block font-semibold text-base`}
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={value}
              className={`p-5 bg-[#F3F4F6] w-full ${
                error.email
                  ? "outline outline-red-500 outline-2"
                  : "focus:outline-none"
              } rounded-lg mt-2.5 ${inter.className}`}
            />
            {error.email && <p className="text-red-500 mt-2">{error.email}</p>}
          </div>
          <div className="mt-8">
            <div className="flex justify-between">
              <label
                className={`${inter.className} font-semibold text-base`}
                htmlFor="password"
              >
                Password
              </label>
            </div>
            <input
              type="password"
              name="password"
              id="password"
              onChange={value}
              className={`p-5 bg-[#F3F4F6] w-full ${
                error.password
                  ? "outline outline-red-500 outline-2"
                  : "focus:outline-none"
              } rounded-lg mt-2.5 ${inter.className}`}
            />
            {error.password && (
              <p className="text-red-500 mt-2">{error.password}</p>
            )}
          </div>
          <div className="mt-8">
            <div className="flex justify-between">
              <label
                className={`${inter.className} font-semibold text-base`}
                htmlFor="pass_conf"
              >
                Konfirmasi Password
              </label>
            </div>
            <input
              id="pass_conf"
              onChange={value}
              name="password_confirmation"
              type="password"
              className={`p-5 bg-[#F3F4F6] w-full ${
                error.password_confirmation
                  ? "outline outline-red-500 outline-2"
                  : "focus:outline-none"
              } rounded-lg mt-2.5 ${inter.className}`}
            />
            {error.password_confirmation && (
              <p className="text-red-500 mt-2">{error.password_confirmation}</p>
            )}
          </div>
          <p
            className={`${inter.className} py-8 text-[#4B5563] text-base font-normal mt-2.5`}
          >
            Dengan mendaftar berarti kamu setuju dengan Terms of Service dan
            Privacy Policy dari Namanyajugabelajar.io
          </p>
          <button
            className={`${inter.className} w-full font-semibold text-sm bg-primary-500 py-6  text-white text-center rounded-md`}
          >
            Mendaftar
          </button>
        </form>
        <p
          className={`${inter.className} font-semibold text-muted-500 mt-14 text-center`}
        >
          Sudah punya akun{" "}
          <Link className="text-primary-500" href="/login">
            Login Di sini!
          </Link>
        </p>
      </AuthLayout>
    </>
  );
}
