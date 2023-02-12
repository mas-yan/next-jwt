import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });
export default function Register() {
  function handler(e) {
    console.log(e);
  }
  return (
    <>
      <div className="flex justify-between">
        <div className="flex justify-center items-center h-screen lg:w-1/2 w-full">
          <div className="container mx-40">
            <div className="bg-primary-500 bg-opacity-10 px-3.5 py-2.5 rounded-xl inline-block">
              <h2
                className={`${inter.className} font-semibold text-xl text-primary-500 block`}
              >
                G
              </h2>
            </div>
            <h1
              className={`${inter.className} mt-14 font-semibold text-2xl block`}
            >
              Masuk ke akun kamu
            </h1>
            <p
              className={`${inter.className} text-[#4B5563] text-base font-normal mt-2.5`}
            >
              Belajar gratis di Namanyajugabelajar.io, dan memulai karir yang
              kamu cita-citata sejak dalam embrio!
            </p>
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
                    htmlFor="email"
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
                className={`${inter.className} w-full mt-8 font-semibold text-base bg-primary-500 py-6 px-48 text-white text-center rounded-md`}
              >
                Masuk
              </button>
            </form>
          </div>
        </div>
        <div className="hidden lg:block bg-gradient-to-t from-primary-900 to-primary-800 w-1/2">
          <div className="flex flex-col h-screen justify-center items-center">
            <img src="/register.svg" className="w-full" />
            <div className="container px-20">
              <p
                className={`${inter.className} text-white text-opacity-60 font-semibold mt-16`}
              >
                NAMANYAJUGABELAJAR.IO
              </p>
              <p
                className={`${inter.className} text-white text-2xl font-normal mt-2.5`}
              >
                Belajar secara online semakin mudah – tetep belajar walaupun
                pake kuota dari Kemendikbud hehe~
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
