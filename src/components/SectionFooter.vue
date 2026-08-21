<script setup>
</script>

<template>
  <section class="relative default-bg-gray py-10" style="min-height: 10px;">
    <div class="w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-6">

      <!-- About -->
      <div class="flex flex-col md:items-start items-center">

        <!-- BrightSmile Dental Logo -->
        <div class="flex items-center gap-2 mb-4">
          <div class="flex items-center justify-center w-10 h-10 rounded-full bg-[#0085cc] text-white">
            <svg aria-hidden="true" class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 21C9.5 18.5 5 14.8 5 9.5C5 6.46 7.46 4 10.5 4C11.1 4 11.6 4.1 12 4.35C12.4 4.1 12.9 4 13.5 4C16.54 4 19 6.46 19 9.5C19 14.8 14.5 18.5 12 21Z"
                stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" />

              <path d="M9 9.5C9.7 10.2 10.7 10.5 12 10.5C13.3 10.5 14.3 10.2 15 9.5" stroke="currentColor"
                stroke-width="1.5" stroke-linecap="round" />
            </svg>
          </div>

          <div class="text-left">
            <div class="text-xl font-bold leading-tight text-[#0085cc]">
              BrightSmile
            </div>

            <div class="text-xs font-medium tracking-[0.2em] text-gray-500">
              DENTAL
            </div>
          </div>
        </div>

        <p class="text-sm leading-relaxed lato text-gray-600 text-[16px] text-center sm:text-left">
          BrightSmile Dental provides quality dental care focused on helping
          patients maintain healthy, confident smiles. Our team is committed
          to comfortable, personalized care for every patient.
        </p>
      </div>


      <!-- Dental Services -->
      <div class="pr-6">

        <h3 class="font-bold mb-3 border-b-[2px] text-center md:text-start
                 border-gray-400 pb-1 text-[22px] montserrat">
          Dental Services
        </h3>

        <ul class="space-y-3 lato text-[15px] text-gray-600 text-center sm:text-left">
          <li>
            <p class="hover:text-[#0085cc] transition-colors cursor-default">
              General Dentistry
            </p>
          </li>

          <li>
            <p class="hover:text-[#0085cc] transition-colors cursor-default">
              Dental Implants
            </p>
          </li>

          <li>
            <p class="hover:text-[#0085cc] transition-colors cursor-default">
              Cosmetic Dentistry
            </p>
          </li>

          <li>
            <p class="hover:text-[#0085cc] transition-colors cursor-default">
              Teeth Whitening
            </p>
          </li>

          <li>
            <p class="hover:text-[#0085cc] transition-colors cursor-default">
              Dental Crowns
            </p>
          </li>

          <li>
            <p class="hover:text-[#0085cc] transition-colors cursor-default">
              Dental Cleaning
            </p>
          </li>
        </ul>
      </div>


      <!-- Quick Links -->
      <div class="pr-6">

        <h3 class="font-bold mb-3 border-b-[2px] text-center md:text-start
                 border-gray-400 pb-1 text-[22px] montserrat">
          Quick Links
        </h3>

        <ul class="text-sm lato space-y-4 text-gray-600 text-[15px] text-center md:text-start">
          <li>
            <p class="hover:text-[#0085cc] transition-colors cursor-default">
              Home
            </p>
          </li>

          <li>
            <p class="hover:text-[#0085cc] transition-colors cursor-default">
              About Us
            </p>
          </li>

          <li>
            <p class="hover:text-[#0085cc] transition-colors cursor-default">
              Meet the Doctors
            </p>
          </li>

          <li>
            <p class="hover:text-[#0085cc] transition-colors cursor-default">
              Our Services
            </p>
          </li>

          <li>
            <p class="hover:text-[#0085cc] transition-colors cursor-default">
              Contact Us
            </p>
          </li>
        </ul>
      </div>


      <!-- Contact & Social -->
      <div>

        <h3 class="font-bold mb-3 border-b-[2px] text-center md:text-start
                 border-gray-400 pb-1 text-[22px] montserrat">
          Contact Us
        </h3>

        <!-- Address - NOT CLICKABLE -->
        <div class="lato text-[15px] text-gray-600 text-center md:text-start mb-5">

          <p class="font-semibold text-gray-700 mb-1">
            BrightSmile Dental
          </p>

          <p class="hover:text-[#0085cc] transition-colors cursor-default">
            123 Dental Avenue<br />
            Metro Manila, Philippines
          </p>

        </div>


        <!-- Phone - NOT CLICKABLE -->
        <div class="mb-5 text-center md:text-start">

          <p class="lato text-[15px] text-gray-600 hover:text-[#0085cc] transition-colors cursor-default">
            +63 917 111 1111
          </p>

        </div>


        <!-- Follow Us -->
        <h3 class="font-bold mb-3 border-b-[2px] text-center md:text-start
                 border-gray-400 pb-1 text-[22px] montserrat">
          Follow Us
        </h3>


        <ul class="flex space-x-3 justify-center sm:justify-start">

          <!-- Facebook - NOT CLICKABLE -->
          <li>
            <div aria-label="BrightSmile Dental Facebook" class="flex items-center justify-center w-12 h-12 rounded-full
                     bg-[#0046b2] text-white hover:bg-blue-800
                     transition-colors cursor-default">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 320 512" class="w-6 h-6">
                <path d="M279.14 288l14.22-92.66h-88.91V127.41c0-25.35
                  12.42-50.06 52.24-50.06h40.42V6.26S260.43
                  0 225.36 0c-73.22 0-121.14 44.38-121.14
                  124.72v70.62H22.89V288h81.33v224h100.2V288z" />
              </svg>
            </div>
          </li>


          <!-- Instagram - NOT CLICKABLE -->
          <li>
            <div aria-label="BrightSmile Dental Instagram" class="flex items-center justify-center w-12 h-12
                     rounded-full text-white transition-opacity
                     hover:opacity-80 cursor-default" style="background: radial-gradient(
                circle at 30% 107%,
                #fdf497 0%,
                #fdf497 5%,
                #fd5949 45%,
                #d6249f 60%,
                #285AEB 90%
              );">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-8 h-8">
                <path d="M12 2.163c3.204 0 3.584.012
                  4.85.07 1.366.062 2.633.35
                  3.608 1.325.975.975 1.262
                  2.242 1.324 3.608.058 1.266.069
                  1.646.069 4.834s-.012 3.568-.07
                  4.834c-.062 1.366-.349 2.633-1.324
                  3.608-.975.975-2.242 1.262-3.608
                  1.324-1.266.058-1.646-.069-4.834-.069
                  s-3.568-.012-4.834-.07c-1.366-.062-2.633-.349
                  -3.608-1.324-.975-.975-1.262-2.242-1.324-3.608
                  C2.175 15.568 2.163 15.188 2.163 12
                  s.012-3.568.07-4.834c.062-1.366.349-2.633
                  1.324-3.608.975-.975 2.242-1.262
                  3.608-1.324C8.432 2.175 8.812
                  2.163 12 2.163zm0 1.837c-3.17
                  0-3.548.012-4.796.07-.042.048-1.61.218
                  -1.986.364-.5.194-.86.426-1.237.803-.377.377
                  -.609.737-.803 1.237-.146.376-.316.944-.364
                  1.986-.058 1.248-.07 1.626-.07 4.796
                  s.012 3.548.07 4.796c.048 1.042.218 1.61.364
                  1.986.194.5.426.86.803 1.237.377.377.737.609
                  1.237.803.376.146.944.316 1.986.364
                  1.248.058 1.626.07 4.796.07s3.548-.012
                  4.796-.07c1.042-.048 1.61-.218 1.986-.364
                  .5-.194.86-.426 1.237-.803.377-.377.609-.737
                  .803-1.237.146-.376.316-.944.364-1.986
                  .058-1.248.07-1.626.07-4.796s-.012-3.548-.07
                  -4.796c-.048-1.042-.218-1.61-.364-1.986
                  -.194-.5-.426-.86-.803-1.237-.377-.377-.737-.609
                  -1.237-.803-.376-.146-.944-.316-1.986-.364
                  -1.248-.058-1.626-.07-4.796-.07zm0 3.838
                  a6.002 6.002 0 1 0 0 12.004 6.002 6.002 0 0 0
                  0-12.004zm0 9.9a3.9 3.9 0 1 1 0-7.8
                  3.9 3.9 0 0 1 0 7.8zm7.2-10.8a1.44 1.44 0 1 1-2.88
                  0 1.44 1.44 0 0 1 2.88 0z" />
              </svg>
            </div>
          </li>

        </ul>

      </div>

    </div>
  </section>
</template>

<style scoped>
/* Tailwind CSS is imported globally in main.js */
</style>