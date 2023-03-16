import React from 'react'

const Footer = () => {
  const current_year = new Date().getFullYear();

  return (
    <footer class=" bg-papaslightred rounded-lg shadow m-4">
    <div class="w-full mx-auto container md:p-6 p-4 md:flex md:items-center md:justify-between">
      <span class="text-lg text-papasblack sm:text-center">© {current_year} <a>Papa's Pizza</a>. MIT License.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-papasblack sm:mt-0">
        <li>
            <a href="https://www.buymeacoffee.com/GabrielEger" target="_blank" class="mr-4 hover:underline md:mr-6">Donate</a>
        </li>
        <li>
            <a href="https://github.com/GabrielEger2" target="_blank" class="mr-4 hover:underline md:mr-6">Creator's Github</a>
        </li>
        <li>
            <a href="https://en.wikipedia.org/wiki/MIT_License" target="_blank" class="mr-4 hover:underline md:mr-6">Licensing</a>
        </li>
        <li>
            <a href="https://gabrieleger.onrender.com/#contact" target="_blank" class="hover:underline">Contact</a>
        </li>
    </ul>
    </div>
</footer>
  )
}

export default Footer