const footer = document.getElementById('footer')
footer.innerHTML = `
    <footer class="px-5 pt-14 md:pt-20 bg-[#fff]">
        <div class="max-w-7xl w-full mx-auto grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-20 gap-10 ">
            <div class="w-full">
                <div class="max-w-[6rem]">
                    <div data-aos="fade-up" class="flex flex-col gap-1 justify-center items-center">
                        <div>
                            <img src="/docs/assets/images/favicon-removebg.png" alt="" class="invert md:h-16 h-16">
                        </div>
                        <h2 class="text-[#060607] font-medium text-lg leading-5">SYNDESIS <br> SECURITY</h2>
                    </div>
                </div>
                <p data-aos="fade-up" data-aos-delay="100" class="text-zinc-600  mt-5 text-sm">Protecting your business
                    through prudent cybersecurity strategy and technology
                    Industry expertise to safeguard your resources from the ever-expanding threat landscape

                </p>
            </div>

            <div class="w-full lg:pl-16">
                <h2 data-aos="fade-up" class="font-medium text-2xl  mb-3 text-zinc-800">Quick Link</h2>
                <div class="mt-7">
                    <ul data-aos="fade-up" class="space-y-3 text-zinc-600">
                        <li><a href="/index.html" class="hover:text-[#000] transition-all duration-500">Home</a></li>
                        <li><a href="/about.html" class="hover:text-[#000] transition-all duration-500">About </a></li>
                        <li><a href="/services.html" class="hover:text-[#000] transition-all duration-500">Services</a>
                        </li>
                        <li><a href="/industries.html"
                                class="hover:text-[#000] transition-all duration-500">Industries</a>
                        <li><a href="/inquiries.html"
                                class="hover:text-[#000] transition-all duration-500">Inquiries</a></li>
                        <li><a href="/video.html" class="hover:text-[#000] transition-all duration-500">Videos</a></li>
                        </li>
                        <li><a href="/blog.html" class="hover:text-[#000] transition-all duration-500">Blog</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="w-full">
                <h2 data-aos="fade-up" class="font-medium text-2xl  mb-3 text-zinc-800">Contact Information</h2>
                <div class="mt-7">
                    <a data-aos="fade-up" href="mailto:karligiannoglou@gmail.com"
                        class="flex items-start gap-3 transition-all mt-4 duration-500 hover:text-[#214842] text-zinc-600"><i
                            class="fa-solid fa-envelope text-xl text-zinc-500 mt-1"></i>karligiannoglou@gmail.com</a>
                    <div class="flex items-center gap-8 text-zinc-500 mt-8">
                        <a data-aos="fade-up" data-aos-delay="200" href=""><i
                                class="fa-brands transition-all duration-500 hover:text-[#214842] fa-youtube text-2xl"></i></a>
                        <a data-aos="fade-up" data-aos-delay="200" href=""><i
                                class="fa-brands transition-all duration-500 hover:text-[#214842] fa-linkedin text-2xl"></i></a>
                    </div>
                </div>
            </div>
        </div>
        <p class="max-w-7xl text-sm md:mt-16 mt-5 text-zinc-600 w-full mx-auto py-5 text-white text-center"> © 2025
            SYNDESIS SECURITY LLC - ALL RIGHTS RESERVED
        </p>
    </footer>
`