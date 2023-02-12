import AuthLayout from "@/components/AuthLayout";
import { Inter } from "@next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Login() {
  function handler(e) {
    e.preventDefault();
  }
  return (
    <>
      <AuthLayout
        title={"Masuk ke akun kamu"}
        subTitle="Belajar gratis di Namanyajugabelajar.io, dan memulai karir yang kamu cita-citata sejak dalam embrio!"
        desc="Belajar secara online semakin mudah – tetep belajar walaupun pake kuota dari Kemendikbud hehe~"
        bgImage="/login.svg"
      >
        <form className="mt-11" onSubmit={handler}>
          <div>
            <label
              className={`${inter.className} block font-semibold text-base`}
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              className={`p-5 bg-[#F3F4F6] w-full focus:outline-none rounded-lg mt-2.5 ${inter.className}`}
            />
          </div>
          <div className="mt-8">
            <div className="flex justify-between">
              <label
                className={`${inter.className} font-semibold text-base`}
                htmlFor="password"
              >
                password
              </label>
              <a
                href="#"
                className={`${inter.className} font-semibold text-primary-500`}
              >
                Lupa Kata Sandi?
              </a>
            </div>
            <input
              type="password"
              className={`p-5 bg-[#F3F4F6] w-full focus:outline-none rounded-lg mt-2.5 ${inter.className}`}
            />
          </div>
          <div className="mt-8 flex">
            <input
              type="checkbox"
              id="remember"
              className="w-6 h-6 border-0 mr-3"
            />
            <label
              htmlFor="remember"
              className={`${inter.className} block font-semibold text-base`}
            >
              Ingat saya
            </label>
          </div>
          <button
            className={`${inter.className} w-full mt-8 font-semibold text-base bg-primary-500 py-6 text-white text-center rounded-md`}
          >
            Masuk
          </button>
        </form>
        <p
          className={`${inter.className} font-semibold text-muted-500 mt-14 text-center`}
        >
          Belum punya akun{" "}
          <Link className="text-primary-500" href="/register">
            Daftar sekarang, gratis!
          </Link>
        </p>
      </AuthLayout>
    </>
  );
}
