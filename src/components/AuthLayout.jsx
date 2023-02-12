import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });
export default function AuthLayout({
  children,
  title,
  subTitle,
  desc,
  bgImage,
}) {
  return (
    <>
      <div className="flex justify-between items-center h-screen">
        <div className="flex justify-center items-center h-screen lg:w-1/2 w-full">
          <div className="container px-6 md:px-8 lg:px-20">
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
              {title}
            </h1>
            <p
              className={`${inter.className} text-[#4B5563] text-base font-normal mt-2.5`}
            >
              {subTitle}
            </p>
            {children}
          </div>
        </div>
        <div className="hidden lg:block bg-gradient-to-t from-primary-900 to-primary-700 w-1/2">
          <div className="flex flex-col h-screen justify-center items-center">
            <img src={bgImage} className="w-full" />
            <div className="container px-20">
              <p
                className={`${inter.className} text-white text-opacity-60 font-semibold mt-16`}
              >
                NAMANYAJUGABELAJAR.IO
              </p>
              <p
                className={`${inter.className} text-white text-2xl font-normal mt-2.5`}
              >
                {desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
