import Image from "next/image"
import ProfilePhoto from '../public/assets/images/me.jpg'
import DownloadIcon from '../public/assets/images/download-icon.svg'
import UzbekistanFlag from '../public/assets/images/uzbekistan.png'
import ArrowUpRight from '../public/assets/images/arrow-up-right.svg'
import Mohirpool from '../public/assets/images/mohirpool.png'
import NajotTalim from '../public/assets/images/najottalim.png'
import Serius from '../public/assets/images/serius.jpg'
import Ibexlab from '../public/assets/images/ibexlab.png'
import MaxWay from '../public/assets/images/maxway_cover.jpg'
import Yoshop from '../public/assets/images/yoshop.jpg'
import Planner from '../public/assets/images/planner.jpg'
import Vixpay from '../public/assets/images/vixpay.jpg'
import Pomodoro from '../public/assets/images/pomodoro.jpg'
import greenLine from '../public/assets/images/greenline.png'
import apcBridge from '../public/assets/images/apc-bridge.png'

export default function Home() {
  return (
    <main>
      <div className="">
        <div className="w-full">
          <div className="poster w-full h-32 lg:h-44 relative">
            <div className="absolute home-layout top-6 left-1/2 -translate-x-1/2 hidden lg:block">
              <div className="flex justify-end">
                {/* <div className="FunEditor_window__HYG68 w-[200px] h-[120px]">
                  <div className="FunEditor_dots__ejXAt">
                    <div className="FunEditor_redDot__qw4CI"></div>
                    <div className="FunEditor_yellowDot__1a9Hb"></div>
                    <div className="FunEditor_greenDot__ekPCa"></div>
                  </div>
                  <code className="FunEditor_code__vrhtN">
                    <span className="text-yellow-400">
                      function
                      <span>
                        <span className="text-purple-400">
                          GoTo
                          <span>
                            <span className="text-gray-400">
                        
                            </span>
                            <div className="FunEditor_tab__hm59n">
                              <span className="text-gray-400">...</span>
                            </div>
                            <span className="text-gray-400">
                         
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </code>
                </div> */}
              </div>
            </div>
            <div className="-z-10 absolute inset-0 bg-gradient-to-r from-[#C5AFEF] to-[#FACDE1]"></div>
          </div>
          <div className="home-layout w-[90%] mx-auto">
            <div className="flex w-full flex-col lg:flex-row justify-between">
              <div className="flex flex-col lg:flex-row flex-1">
                <div className="profile-img-wrapper w-fit h-fit rounded-full drop-shadow-xl -mt-16">
                  <Image src={ProfilePhoto} alt="me" className="w-32 object-cover h-32 lg:w-44 lg:h-44 rounded-full profile-image-border text-transparent" />
                </div>
                <div className="mt-6 lg:ml-6">
                  <h1 className="h1 font-headline font-semibold">Sardor Khayitmuradov</h1>
                  <h2 className="h3 mt-1 text-gray-500">I am a Frontend Developer based in Tashkent, Uzbekistan.</h2>
                </div>
              </div>
              <div className="buttons flex mt-2 md:mt-4 lg:mt-6 space-x-3 items-start">
                <a className="btn btn-regular inline-block" target="_blank" href="https://github.com/sardorkhayitmuradov">View Github</a>
                <a href="/assets/files/Sardor Khayitmuradov Resume.docx" className="btn btn-primary flex">
                  <Image className="mr-2 text-transparent" src={DownloadIcon} alt="download" /> Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="home-layout w-[90%] mx-auto">
          <div id="AboutMe">
            <div className="my-8 h-px bg-gray-200"></div>
            <div className="lg:flex relative">
              <div className="self-start sticky top-0 lg:top-4 bg-white py-4 lg:py-0 z-10 w-full lg:w-1/4">
                <h1 className="font-headline section-title text-xl block font-MontserratSemibold">About Me</h1>
              </div>
              <div className="flex-1 mt-4 lg:mt-0 ">
                {/* <p className="text-gray-500 -mt-5 lg:mt-0">Detail-oriented and highly motivated Frontend Developer with 2 years of experience, seeking a challenging role to utilize my skills in React.js, TypeScript, Next.js, Ant Design, Tailwind CSS, and SASS. Adept at building and maintaining CRM systems with custom styling components using Ant Design and Material UI. Committed to delivering high-quality, responsive, and user-friendly web applications.</p> */}
                <p className="text-gray-500 -mt-5 lg:mt-0">• About 2+ years of industry experience in Frontend Development. <br />
                  • Top skills include JavaScript, TypeScript, React JS, and Next JS.<br />
                  • Experienced working in fast-paced, Agile, and Scrum project management environments.<br />
                  • Strong design, coding, and debugging skills using Javascript and its technology.<br />
                  • Solid understanding of algorithms, data structures, and object-oriented programming.<br />
                  • Experience working with APIs.<br />
                  • Experience working with a collaboration team on GitHub and GIT.<br />
                  • Other skills include HTML, CSS, XML, SASS, BOOTSTRAP, SCSS, MATERIAL UI, TAILWIND, ANT DESIGN<br />
                </p>
                <div className="space-y-5 lg:space-y-0 mt-6 flex flex-col max-[1530px]:gap-y-5 lg:flex-row lg:bg-primary-20 px-6 py-4 lg:rounded-lg bg-[#f3eefc]">
                  <div className="font-semibold lg:flex-1">
                    <h2 className="lg:text-primary-80 text-[#9e80e4] max-[1024px]:text-[#6b7280]">Location</h2>
                    <div className="flex space-x-2 items-center mt-2">
                      <div className="img-wrapper w-fit h-fit">
                        <Image src={UzbekistanFlag} alt="UzbekistanFlag" className="w-6 h-6 rounded-full object-cover border border-gray-300 text-transparent" />
                      </div>
                      <h3 className="text-lg lg:text-primary-100 text-[#8057db]">Tashkent, Uzbekistan</h3>
                    </div>
                  </div>
                  <div className="font-semibold lg:flex-1">
                    <h2 className="lg:text-primary-80 text-[#9e80e4] max-[1024px]:text-[#6b7280]">Github</h2>
                    <div className="flex space-x-2 items-center mt-1.5">
                      <a className="flex items-center text-primary-100" target="_blank" href="https://github.com/sardorkhayitmuradov">
                        <h3 className="text-lg text-[#845cdc]">sardorkhayitmuradov</h3>
                        <Image src={ArrowUpRight} alt="arrow-up-right" className="w-[24px] h-[24px] ml-2 text-transparent" />
                      </a>
                    </div>
                  </div>
                  <div className="font-semibold lg:flex-1">
                    <h2 className="lg:text-primary-80 text-[#9e80e4] max-[1024px]:text-[#6b7280]">LinkedIn</h2>
                    <div className="flex space-x-2 items-center mt-1.5">
                      <a className="flex items-center text-primary-100" target="_blank" href="https://www.linkedin.com/in/sardorxayitmurodov/">
                        <h3 className="text-lg text-[#845cdc]">sardorxayitmurodov</h3>
                        <Image src={ArrowUpRight} alt="arrow-up-right" className="w-[24px] h-[24px] ml-2 text-transparent" />
                      </a>
                    </div>
                  </div>
                  <div className="font-semibold lg:flex-1">
                    <h2 className="lg:text-primary-80 text-[#9e80e4] max-[1024px]:text-[#6b7280]">Email</h2>
                    <div className="flex space-x-2 items-center mt-1.5">
                      <a className="flex items-center text-primary-100" target="_blank" href="mailto:sardorxayitmurodov@gmail.com">
                        <h3 className="text-lg text-[#845cdc]">sardorxayitmurodov@gmail.com</h3>
                        <Image src={ArrowUpRight} alt="arrow-up-right" className="w-[24px] h-[24px] ml-2 text-transparent" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="Experience">
            <div className="my-8 h-px bg-gray-200"></div>
            <div className="lg:flex relative">
              <div className="self-start sticky top-0 lg:top-4 bg-white py-4 lg:py-0 z-10 w-full lg:w-1/4">
                <h1 className="font-headline section-title font-MontserratSemibold text-xl block">Experience</h1>
              </div>
              <div className="flex-1 mt-4 lg:mt-0 ">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
                  <div className="border border-gray-200 rounded-lg pt-6 w-full shadow hover:scale-[1.02] duration-300">
                    <div className="main-info px-8 mb-4">
                      <div className="flex">
                        <div className="img-wrapper">
                          <Image src={Ibexlab} alt="company" className="w-12 h-12 text-transparent" />
                        </div>
                        <div className="flex-1 ml-4">
                          <h2 className="text-lg font-semibold font-headline">Middle Frotend Developer</h2>
                          <h3 className="text-gray-500">Ibexlab LTD</h3>
                        </div>
                      </div>
                      <div className="period mt-5 text-gray-500">Jun 2023 - Present
                      </div>
                    </div>
                    <div>
                      <hr />
                      <div className="flex w-full px-5 justify-end py-3 gap-3">
                        <a target="_blank" className="duration-75 text-[#8057db] font-semibold border border-transparent hover:border-[#9979e2] hover:bg-[#f3eefc] px-3 py-1 rounded-md" href="https://www.ibexlab.com/">View Website</a>
                      </div>
                    </div>
                  </div>
                  <div className="border border-gray-200 rounded-lg pt-6 w-full shadow hover:scale-[1.02] duration-300">
                    <div className="main-info px-8 mb-4">
                      <div className="flex">
                        <div className="img-wrapper">
                          <Image src={Serius} alt="company" className="w-12 h-12 text-transparent" />
                        </div>
                        <div className="flex-1 ml-4">
                          <h2 className="text-lg font-semibold font-headline">Frontend Developer</h2>
                          <h3 className="text-gray-500">SERIUS AGENCY</h3>
                        </div>
                      </div>
                      <div className="period mt-5 text-gray-500">Dec 2020 - Jan 2023</div>
                    </div>
                    <div>
                      <hr />
                      <div className="flex w-full px-5 justify-end py-3 gap-3">
                        <a target="_blank" className="duration-75 text-[#8057db] font-semibold border border-transparent hover:border-[#9979e2] hover:bg-[#f3eefc] px-3 py-1 rounded-md" href="https://t.me/serius_agency">View on Telegram</a>
                        <a target="_blank" className="duration-75 text-[#8057db] font-semibold border border-transparent hover:border-[#9979e2] hover:bg-[#f3eefc] px-3 py-1 rounded-md" href="http://www.serius.uz/">View Website</a>
                      </div>
                    </div>
                  </div>
                  <div className="border border-gray-200 rounded-lg pt-6 w-full shadow hover:scale-[1.02] duration-300">
                    <div className="main-info px-8 mb-4">
                      <div className="flex">
                        <div className="img-wrapper">
                          <Image src={NajotTalim} alt="company" className="w-12 h-12 text-transparent" />
                        </div>
                        <div className="flex-1 ml-4">
                          <h2 className="text-lg font-semibold font-headline">Frontend Engineer Mentor</h2>
                          <h3 className="text-gray-500">Najot Ta'lim</h3>
                        </div>
                      </div>
                      <div className="period mt-5 text-gray-500">June 2022 - Jan 2023</div>
                    </div>
                    <div>
                      <hr />
                      <div className="flex w-full px-5 justify-end py-3 gap-3">
                        <a target="_blank" className="duration-75 text-[#8057db] font-semibold border border-transparent hover:border-[#9979e2] hover:bg-[#f3eefc] px-3 py-1 rounded-md" href="https://najottalim.uz/">View Website</a>
                      </div>
                    </div>
                  </div>
                  <div className="border border-gray-200 rounded-lg pt-6 w-full shadow hover:scale-[1.02] duration-300">
                    <div className="main-info px-8 mb-4">
                      <div className="flex">
                        <div className="flex-1 ml-4">
                          <h2 className="text-lg font-semibold font-headline">Frontend Developer Intern</h2>
                          <h3 className="text-gray-500">Mohirpool</h3>
                        </div>
                        <div className="img-wrapper">
                          <Image src={Mohirpool} className="w-full h-12 text-transparent object-fill" alt="company" />
                        </div>
                      </div>
                      <div className="period mt-5 text-gray-500">Sep 2020 - Nov 2020</div>
                    </div>
                    <div>
                      <hr />
                      <div className="flex w-full px-5 justify-end py-3 gap-3">
                        <a target="_blank" className="duration-75 text-[#8057db] font-semibold border border-transparent hover:border-[#9979e2] hover:bg-[#f3eefc] px-3 py-1 rounded-md" href="https://mohirpool.uz/">View Website</a>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
          <div id="Projects">
            <div className="my-8 h-px bg-gray-200"></div>
            <div className="lg:flex relative">
              <div className="self-start sticky top-0 lg:top-4 bg-white py-4 lg:py-0 z-10 w-full lg:w-1/4">
                <h1 className="font-headline section-title font-MontserratSemibold text-xl block">Projects</h1>
              </div>
              <div className="flex-1 mt-4 lg:mt-0 ">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                  <div className="rounded-lg w-full flex flex-col">
                    <div className="img-wrapper relative">
                      <Image src={MaxWay} alt="project icon" className="w-full rounded-t-md text-transparent h-auto" />
                    </div>
                    <div className="border border-gray-200 border-t-0 rounded-b-md flex flex-col flex-1">
                      <div className="main-info px-4 py-4 flex-1">
                        <h2 className="text-lg font-bold font-headline">Food Delivery</h2>
                        <h3 className="text-md text-gray-500 font-medium mt-1">A Website where people can order different types of fast food to their doors.</h3>
                        <p className="text-gray-500 whitespace-pre-wrap mt-3">· Designed a scalable architecture <br />
                          · 7% increase in sales of the physical store <br />
                          · Daily 100+ orders with $150+ revenue<br />
                          · $100,000+ revenue in total
                        </p>
                      </div>
                      <div>
                        <hr />
                        <div className="flex w-full px-5 justify-end py-3 gap-3">
                          <a target="_blank" className="duration-75 text-[#8057db] font-semibold border border-transparent hover:border-[#9979e2] hover:bg-[#f3eefc] px-3 py-1 rounded-md" href="https://maxway.uz/">View Project</a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg w-full flex flex-col">
                    <div className="img-wrapper relative h-full">
                      <Image src={Yoshop} alt="project icon" className="w-full rounded-t-md text-transparent h-full" />
                    </div>
                    <div className="border border-gray-200 border-t-0 rounded-b-md flex flex-col flex-1">
                      <div className="main-info px-4 py-4 flex-1">
                        <h2 className="text-lg font-bold font-headline">Yoshop Pos Terminal</h2>
                        <h3 className="text-md text-gray-500 font-medium mt-1">A website of a Multifunctional inventory software that allows people to fully automates the work of the store</h3>
                        <p className="text-gray-500 whitespace-pre-wrap mt-3">· Designed a scalable architecture <br />
                          · Over 100+ <br />
                          · Daily 100+ orders with $150+ revenue<br />
                          · $100,000+ revenue in total
                        </p>
                      </div>
                      <div>
                        <hr />
                        <div className="flex w-full px-5 justify-end py-3 gap-3">
                          <a target="_blank" className="duration-75 text-[#8057db] font-semibold border border-transparent hover:border-[#9979e2] hover:bg-[#f3eefc] px-3 py-1 rounded-md" href="https://www.yoshop.kz/">View Project</a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg w-full flex flex-col">
                    <div className="img-wrapper relative">
                      <Image src={Vixpay} alt="project icon" className="w-full rounded-t-md text-transparent" />
                    </div>
                    <div className="border border-gray-200 border-t-0 rounded-b-md flex flex-col flex-1">
                      <div className="main-info px-4 py-4 flex-1">
                        <h2 className="text-lg font-bold font-headline">Vixpay</h2>
                        <h3 className="text-md text-gray-500 font-medium mt-1">A Website where people can order different types of fast food to their doors.</h3>
                        <p className="text-gray-500 whitespace-pre-wrap mt-3">· Designed a scalable architecture <br />
                          · 7% increase in sales of the physical store <br />
                          · Daily 100+ orders with $150+ revenue<br />
                          · $100,000+ revenue in total
                        </p>
                      </div>
                      <div>
                        <hr />
                        <div className="flex w-full px-5 justify-end py-3 gap-3">
                          <a target="_blank" className="duration-75 text-[#8057db] font-semibold border border-transparent hover:border-[#9979e2] hover:bg-[#f3eefc] px-3 py-1 rounded-md" href="https://www.vixpay.net/">View Project</a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg w-full flex flex-col">
                    <div className="img-wrapper relative">
                      <Image src={Planner} alt="project icon" className="w-full rounded-t-md text-transparent" />
                    </div>
                    <div className="border border-gray-200 border-t-0 rounded-b-md flex flex-col flex-1">
                      <div className="main-info px-4 py-4 flex-1">
                        <h2 className="text-lg font-bold font-headline">Planner CRM System</h2>
                        <h3 className="text-md text-gray-500 font-medium mt-1">A Website for Fast food restaurnts admin dashboard to manage the online orders from the clients</h3>
                      </div>
                      <div>
                        <hr />
                        <div className="flex w-full px-5 justify-end py-3 gap-3">
                          <a target="_blank" className="duration-75 text-[#8057db] font-semibold border border-transparent hover:border-[#9979e2] hover:bg-[#f3eefc] px-3 py-1 rounded-md" href="https://eltuvchi-dashboard.vercel.app/login">View Project</a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg w-full flex flex-col">
                    <div className="img-wrapper relative">
                      <Image src={Pomodoro} alt="project icon" className="w-full rounded-t-md text-transparent" />
                    </div>
                    <div className="border border-gray-200 border-t-0 rounded-b-md flex flex-col flex-1">
                      <div className="main-info px-4 py-4 flex-1">
                        <h2 className="text-lg font-bold font-headline">Pomodoro</h2>
                        <h3 className="text-md text-gray-500 font-medium mt-1">A Website where people can order different types of fast food to their doors.</h3>
                        <p className="text-gray-500 whitespace-pre-wrap mt-3">· A scalable time manager for controlling necessary time</p>
                      </div>
                      <div>
                        <hr />
                        <div className="flex w-full px-5 justify-end py-3 gap-3">
                          <a target="_blank" className="duration-75 text-[#8057db] font-semibold border border-transparent hover:border-[#9979e2] hover:bg-[#f3eefc] px-3 py-1 rounded-md" href="https://pomodoro-app-v1.netlify.app/">View Project</a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg w-full flex flex-col">
                    <div className="img-wrapper relative">
                      <Image src={greenLine} alt="project icon" className="w-full rounded-t-md text-transparent" />
                    </div>
                    <div className="border border-gray-200 border-t-0 rounded-b-md flex flex-col flex-1">
                      <div className="main-info px-4 py-4 flex-1">
                        <h2 className="text-lg font-bold font-headline">GTD RELIABLE ENERGY SUPPLIER
MIDDLE EAST AND AFRICA COUNTRIES</h2>
                        <h3 className="text-md text-gray-500 font-medium mt-1">A Website for Greenline Trade Distribution LLC is a distributor of EV charges, Solar systems, Industrial Batteries and UPS Systems.</h3>
                      
                      </div>
                      <div>
                        <hr />
                        <div className="flex w-full px-5 justify-end py-3 gap-3">
                          <a target="_blank" className="duration-75 text-[#8057db] font-semibold border border-transparent hover:border-[#9979e2] hover:bg-[#f3eefc] px-3 py-1 rounded-md" href="http://greenlinetd.ae/">View Project</a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg w-full flex flex-col">
                    <div className="img-wrapper relative">
                      <Image src={apcBridge} alt="project icon" className="w-full rounded-t-md text-transparent" />
                    </div>
                    <div className="border border-gray-200 border-t-0 rounded-b-md flex flex-col flex-1">
                      <div className="main-info px-4 py-4 flex-1">
                        <h2 className="text-lg font-bold font-headline">APC by Schneider Electric</h2>
                        <h3 className="text-md text-gray-500 font-medium mt-1">APC, the flagship brand of Schneider Electric,
provides clean battery backup, protection
surge protection and physical infrastructure
IT inside and outside the traditional IT environment</h3>
                      </div>
                      <div>
                        <hr />
                        <div className="flex w-full px-5 justify-end py-3 gap-3">
                          <a target="_blank" className="duration-75 text-[#8057db] font-semibold border border-transparent hover:border-[#9979e2] hover:bg-[#f3eefc] px-3 py-1 rounded-md" href="http://apc-abrisdc.com/">View Project</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-primary-20 border-t border-t-primary-100 text-primary-100 py-5 px-4 mt-8 text-center font-semibold tracking-wider font-headline">Sardor Khayitmuradov</div>
      </div>
    </main>
  )
}
