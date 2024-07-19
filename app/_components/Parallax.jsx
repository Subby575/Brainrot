import React from 'react'

function Parallax() {
  return (
    <div><div
    class="px-12 h-screen w-screen overflow-y-scroll bg-cover bg-fixed bg-center bg-no-repeat shadow-lg bg-[url('/mental.gif')]"
>
    <div class="mt-40">
      <div class="bg-white p-4 sm:p-8">
        {/* <div
          class="font-inter text-2xl font-extrabold tracking-tight text-black">
          Majestic peaks, nature's embrace.
        </div> */}
        <div class="mt-1 text-xl justify-center items-center ml-56 text-slate-500">
        You don&apos;t have to control your thoughts. You just have to stop letting them control you
        </div>
        {/* <p class="mt-4 leading-7 text-slate-500">
        You don’t have to control your thoughts. You just have to stop letting them control you
        </p> */}
        {/* <p class="mt-4 leading-7 text-slate-500">
          As the sun rises over the rugged peaks, casting a golden glow on
          the majestic landscape, a sense of awe fills the heart,
          reminding us of the grandeur and power that reside in the
          mountains.
        </p> */}
      </div>
    </div>
  </div></div>
  )
}

export default Parallax