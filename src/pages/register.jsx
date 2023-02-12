import AuthLayout from "@/components/AuthLayout";
import { Inter } from "@next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Register() {
  function handler(e) {
    e.preventDefault();
  }
  return (
    <div className="py-60 md:py-0">
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
              id="nama"
              className={`p-5 bg-[#F3F4F6] w-full focus:outline-none rounded-lg mt-2.5 ${inter.className}`}
            />
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
              id="email"
              className={`p-5 bg-[#F3F4F6] w-full focus:outline-none rounded-lg mt-2.5 ${inter.className}`}
            />
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
              id="password"
              className={`p-5 bg-[#F3F4F6] w-full focus:outline-none rounded-lg mt-2.5 ${inter.className}`}
            />
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
              type="password"
              className={`p-5 bg-[#F3F4F6] w-full focus:outline-none rounded-lg mt-2.5 ${inter.className}`}
            />
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
    </div>
  );
}
