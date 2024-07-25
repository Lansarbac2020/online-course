import Image from 'next/image'
import React from 'react'

function Blog() {
  return (
    <div className=' m-8 mt-[120px] md:-translate-x-[25%] lg:md:-translate-x-[2px] grid grid-cols-1 md:mr-2 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        
        {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

<article
  className="rounded-lg border border-gray-100 bg-white dark:bg-[#11001f] p-4 shadow-sm transition hover:shadow-lg sm:p-6"
>
 <Image src='/software.jpg' alt='blog' height={100} width={200}/>

  <a href="#">
    <h3 className="mt-0.5 text-lg font-medium text-gray-900 dark:font-bold dark:text-white">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    </h3>
  </a>

  <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-white/80">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur
    animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia
    itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
    Molestias explicabo corporis voluptatem?
  </p>

  <a href="#" className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
    Find out more

    <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
      &rarr;
    </span>
  </a>
</article>
<article
  className="rounded-lg border border-gray-100 bg-white dark:bg-[#11001f] p-4 shadow-sm transition hover:shadow-lg sm:p-6"
>
 <Image src='/software.jpg' alt='blog' height={100} width={200}/>

  <a href="#">
    <h3 className="mt-0.5 text-lg font-medium text-gray-900 dark:font-bold dark:text-white">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    </h3>
  </a>

  <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-white/80">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur
    animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia
    itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
    Molestias explicabo corporis voluptatem?
  </p>

  <a href="#" className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
    Find out more

    <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
      &rarr;
    </span>
  </a>
</article>
<article
  className="rounded-lg border border-gray-100 bg-white dark:bg-[#11001f] p-4 shadow-sm transition hover:shadow-lg sm:p-6"
>
 <Image src='/software.jpg' alt='blog' height={100} width={200}/>

  <a href="#">
    <h3 className="mt-0.5 text-lg font-medium text-gray-900 dark:font-bold dark:text-white">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    </h3>
  </a>

  <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-white/80">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur
    animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia
    itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
    Molestias explicabo corporis voluptatem?
  </p>

  <a href="#" className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
    Find out more

    <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
      &rarr;
    </span>
  </a>
</article>

        </div>
  )
}

export default Blog