export default function Home() {
  return (
    <main>
      <section>
        <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
          <div className="flex flex-wrap items-center mx-auto max-w-7xl">
            <div className="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
              <div>
                <div className="relative w-full max-w-lg">
                  <div className="absolute top-0 rounded-full bg-[#00F0DA] -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>

                  <div className="absolute rounded-full bg-[#00E8FA] -bottom-24 right-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                  <div className="relative hidden lg:block">
                    <img className="object-cover object-center mx-auto rounded-lg shadow-2xl" alt="hero" src="/twecon.png" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">
              <span className="mb-8 text-xs font-bold tracking-widest text-blue-600 uppercase"> twecon </span>
              <h1 className="mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl">tweconはサービスを終了しました</h1>
              <p className="mb-8 text-base leading-relaxed text-left text-gray-500">tweconはtwitterのAPIを使用しサービスを提供してまいりましたが、仕様変更によりサービスの継続が困難となったため2023年7月30日をもって開発並びに提供を終了させていただきます。</p>
              <p className="mb-8 text-base leading-relaxed text-left text-gray-500">長らくtweconをご愛用いただきありがとうございました。</p>
              <div className="flex-col mt-0 lg:mt-6 max-w-7xl sm:flex">
                <div className="prose prose-md">
                  <ul>
                    <li className="text-blue-400">
                      <a href="https://twitter.com/moons_dev">
                        開発者 moons14
                      </a>
                    </li>
                    <li className="text-gray-500">
                      tweconで提供していたいくつかの機能は
                      <a href="https://apps.cubes.life/" className="text-blue-400">
                        AppCubes
                      </a>
                      でも提供しています。
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
