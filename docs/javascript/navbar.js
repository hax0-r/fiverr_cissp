
const navbar = document.getElementById("navbar");
navbar.innerHTML = `
    <nav class="fixed top-0 left-0 w-full bg-[#10243b] z-40">
        <div class="max-w-7xl mx-auto flex justify-between items-center w-full lg:p-5 p-3 lg:h-24 h-20">
            <a data-aos="fade-right" href="/index.html" class="flex items-center justify-center lg:justify-start">
                <div data-aos="fade-right" class="flex gap-1 justify-center items-center">
                        <div>
                            <img src="/docs/assets/images/favicon-removebg.png" alt="" class=" md:h-16 h-16">
                        </div>
                        <h2 class="text-[#fff] font-medium text-lg leading-5">SYNDESIS <br> SECURITY</h2>
                    </div>
            </a>
            <div class="flex items-center gap-10">
                <div class="lg:flex items-center gap-10 hidden">
                    <ul id="navbarLinks" data-aos="fade-left" class="lg:flex hidden items-center text-zinc-300 gap-10">
                        <li><a href="/index.html"
                                class="hover:text-[#fff] navUnderLine  transition-all duration-500">Home</a>
                        </li>
                        <li><a href="/about.html"
                                class="hover:text-[#fff] navUnderLine transition-all duration-500">About </a></li>
                                <li><a href="/services.html"
                                        class="hover:text-[#fff] navUnderLine transition-all duration-500">Services</a>
                                </li>
                                <li><a href="/industries.html"
                                        class="hover:text-[#fff] navUnderLine transition-all duration-500">Industries</a>
                                </li>
                                <li><a href="/inquiries.html"
                                class="hover:text-[#fff] navUnderLine transition-all duration-500">Inquiries</a></li>
                        <li><a href="/video.html"
                        class="hover:text-[#fff] navUnderLine transition-all duration-500">Videos</a></li>
                <li><a href="/blog.html"
                                class="hover:text-[#fff] navUnderLine transition-all duration-500">Blog</a>
                        </li>
                    </ul>
                </div>
            </div>
            <i id="mobileMenuBtn" data-aos="fade-left" class="fa-solid text-zinc-100 fa-bars lg:!hidden text-2xl cursor-pointer mr-2"></i>
        </div>
    </nav>

    <div id="mobileMenu"
        class="fixed left-0 top-0 bg-white w-0 overflow-hidden h-screen z-50 transition-all duration-500">
        <div class="flex items-end justify-end p-5">
            <i class="fa-solid mobileMenuCloseBtn fa-x z-50 text-zinc-800 text-xl cursor-pointer"></i>
        </div>
        <div class="p-6">
            <ul class="flex relative z-50 text-zinc-800 flex-col gap-7">
                <li><a href="/index.html" class="hover:text-[#000] transition-all duration-500">Home</a></li>
                <li><a href="/about.html" class="hover:text-[#000] transition-all duration-500">About</a></li>
                <li><a href="/services.html" class="hover:text-[#000] transition-all duration-500">Services</a></li>
                <li><a href="/industries.html" class="hover:text-[#000] transition-all duration-500">Industries</a></li>
                <li><a href="/inquiries.html" class="hover:text-[#000] transition-all duration-500">Inquiries</a></li>
                <li><a href="/video.html" class="hover:text-[#000] transition-all duration-500">Videos</a></li>
                <li><a href="/blog.html" class="hover:text-[#000] transition-all duration-500">Blog</a></li>
            </ul>
        </div>
    </div>
    <div class="lg:h-24 h-20"></div>
`

const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const mobileMenuCloseBtns = document.querySelectorAll(".mobileMenuCloseBtn");

mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.style.width = "100%";
});

mobileMenuCloseBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        mobileMenu.style.width = "0";
    });
});