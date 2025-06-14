const footer = document.getElementById('footer')
footer.innerHTML = `
    <footer class="px-5 pt-14 md:pt-20 bg-[#fff]">
        <div class="max-w-7xl w-full mx-auto grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-20 gap-10 ">
            <div class="w-full">
                <img src="/docs/assets/images/whiteLogo.png" alt="" class="invert md:h-28 h-24">
                <p data-aos="fade-up" data-aos-delay="100" class="text-zinc-600  mt-5 text-sm">Lorem ipsum dolor, sit
                    amet
                    consectetur adipisicing elit. Laborum dignissimos, amet aut laudantium nulla, porro rem?
                </p>
            </div>

            <div class="w-full lg:pl-16">
                <h2 data-aos="fade-up" class="font-medium text-2xl  mb-3 text-zinc-800">Quick Link</h2>
                <div class="mt-7">
                    <ul data-aos="fade-up" class="space-y-3 text-zinc-600">
                        <li><a id="nav-home" href="/index.html"
                                class="hover:text-[#000] transition-all duration-500">Home</a>
                        </li>
                        <li><a id="nav-story" href="#" class="hover:text-[#000] transition-all duration-500">About </a>
                        </li>
                        <li><a id="nav-gallery" href="#"
                                class="hover:text-[#000] transition-all duration-500">Videos</a></li>
                        <li><a id="nav-hours" href="#"
                                class="hover:text-[#000] transition-all duration-500">Services</a>
                        </li>
                        <li><a id="nav-menu" href=""
                                class="hover:text-[#000] transition-all duration-500">Inquiries</a></li>
                        <li><a id="nav-events" href="/blog.html" class="hover:text-[#000] transition-all duration-500">Blog</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="w-full">
                <h2 data-aos="fade-up" class="font-medium text-2xl  mb-3 text-zinc-800">Contact Information</h2>
                <div class="mt-7">
                    <a data-aos="fade-up" href="#"
                        class="flex items-start gap-3 transition-all mt-4 duration-500 hover:text-[#214842] text-zinc-600"><i
                            class="fa-solid fa-location-dot text-xl text-zinc-500 mt-1"></i>Office No - 26</a>
                    <a data-aos="fade-up" href="mailto:abc@gmail.com"
                        class="flex items-start gap-3 transition-all mt-4 duration-500 hover:text-[#214842] text-zinc-600"><i
                            class="fa-solid fa-envelope text-xl text-zinc-500 mt-1"></i>abc@gmail.com</a>
                    <a data-aos="fade-up" href="tel:+01204992823"
                        class="flex items-center gap-3 transition-all mt-4 duration-500 hover:text-[#214842] text-zinc-600"><i
                            class="fa-solid fa-phone text-xl text-zinc-500 "></i>0123456789</a>
                    <div class="flex items-center gap-5 text-zinc-500 mt-8">
                        <a data-aos="fade-up" href=""><i
                                class="fa-brands transition-all duration-500 hover:text-[#214842] fa-facebook-f text-lg"></i></a>
                        <a data-aos="fade-up" data-aos-delay="100" href=""><i
                                class="fa-brands transition-all duration-500 hover:text-[#214842] fa-instagram text-xl"></i></a>
                        <a data-aos="fade-up" data-aos-delay="200" href=""><i
                                class="fa-brands transition-all duration-500 hover:text-[#214842] fa-youtube text-xl"></i></a>
                        <a data-aos="fade-up" data-aos-delay="200" href=""><i
                                class="fa-brands transition-all duration-500 hover:text-[#214842] fa-linkedin text-xl"></i></a>
                    </div>
                </div>
            </div>
        </div>
        <p class="max-w-7xl text-sm md:mt-16 mt-5 text-zinc-600 w-full mx-auto py-5 text-white text-center"> © 2025
            STRONG CRYPTO INNOVATIONS LLC - ALL RIGHTS RESERVED |
            Privacy Policy
        </p>
    </footer>
`