import React from 'react'

function Hero() {
  return (
    <div>

<div class="bg-white pb-6 sm:pb-8 lg:pb-12">
  <div class="mx-auto max-w-screen-2xl px-4 md:px-8">


    <section class=" mt-12 min-h-96 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100 py-16 shadow-lg md:py-20 xl:py-48">
      {/* <!-- image - start --> */}
      <img src='/bg.jpg' loading="lazy" alt="Photo by Fakurian Design" class="absolute inset-0 h-full w-full object-cover object-center" />
      {/* <!-- image - end --> */}

      {/* <!-- overlay - start --> */}
      <div class="absolute inset-0 "></div>
      {/* <!-- overlay - end --> */}

      {/* <!-- text start --> */}
      <div class="relative flex flex-col items-center p-4 sm:max-w-xl">
        {/* <p class="mb-4 text-center text-lg text-indigo-200 sm:text-xl md:mb-8">Very proud to introduce</p>
        <h1 class="mb-8 text-center text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-6xl">Revolutionary way to build the web</h1> */}

        <div class="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
          {/* <a href="#" class="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Start now</a> */}
        </div>
      </div>
      {/* <!-- text end --> */}
    </section>
  </div>
</div>
<div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
    <div class="mx-auto flex max-w-xl flex-col items-center text-center">
      <p class="mb-4 font-semibold text-indigo-500 md:mb-6 md:text-lg xl:text-xl">Talk, Heal, Thrive</p>

      <h1 class="mb-8 text-3xl font-bold text-black sm:text-4xl md:mb-12 md:text-5xl">Chat Your Way to Better Mental Health</h1>

      <div class="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
        <a href="/dash" class="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Get Started</a>

      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Hero