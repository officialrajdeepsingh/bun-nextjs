import React from 'react';
import Image from "next/image";
import Link from 'next/link';

export default function Reading() {
  return (
    <div className="px-5 md:px-10">
      <div className="mx-auto w-full max-w-7xl">
        <div className="py-16 md:py-24 lg:py-32">
          <div className="mx-auto mb-12 flex flex-row items-start justify-around px-4 max-[991px]:flex-col md:mb-16 lg:mb-20 lg:items-start lg:justify-between">
            <div className="">
              <div className="mb-5">
                <Link href="#" className="inline-block max-w-full text-[#797979] no-underline hover:outline-0">
                  November 23, 2023
                </Link>
              </div>
              <div className="w-full max-w-lg">
                <div className="mb-12">
                  <h2 className="text-3xl font-semibold md:text-5xl">The Power of Clear Communication: Enhancing Team Collaboration</h2>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-between max-[479px]:flex-col sm:items-start">
              <div className="mb-4">
                <div className="w-full max-w-lg">
                  <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                </div>
              </div>
              <div className="flex items-center max-[479px]:mb-4 max-[479px]:flex-col max-[479px]:gap-y-4">
                <div className="mr-4">
                  <Image width={56} height={56} src="https://assets.website-files.com/64fde6fd0e029101efaf5157/64ff390b0a44c933e6dcad7f_image1.jpeg" alt="" className="inline-block h-[3.875px] min-h-[56px] w-32 max-w-full rounded-[48px] object-cover" />
                </div>
                <div className="">
                  <div className="text-lg text-[#9f9f9f]">Article written by</div>
                  <h4 className="text-xl font-semibold md:text-xl">Florencio Stracke</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="relative mx-auto mb-12 w-full overflow-hidden lg:mb-20 pt-[50%] max-[991px]:pt-[56.25%]">
            <Image width={1224} height={624} alt="Image" src="https://assets.website-files.com/64fde6fd0e029101efaf5157/64fdf4f93714902ecf7eba93_Clear%20Communication.png" className="absolute inset-[0%] inline-block h-full w-full max-w-full object-cover" />
          </div>
          <div className="mx-auto w-full max-w-5xl">
            <div className="mb-12">
              <h2 className="text-3xl font-semibold text-[#130b46] md:text-3xl">Introduction</h2>

              <p className="text-lg">The productivity mindset is a way of thinking about work and productivity that emphasizes the importance of habits, routines, and systems. It is based on the understanding that our habits have a profound impact on our productivity, and that by cultivating good habits, we can achieve our goals more easily and efficiently.</p>
              <p className="text-lg">There are many benefits to cultivating a productivity mindset. When we have a productivity mindset, we are more likely to:&nbsp;</p>
              <ul className="ml-2 list-disc overflow-hidden text-lg pl-6">
                <li className="mb-1 text-lg">Set clear goals and achieve them</li>
                <li className="mb-1 text-lg">Prioritize our time and energy</li>
                <li className="mb-1 text-lg">Avoid procrastination and distractions</li>
                <li className="mb-1 text-lg">Be more organized and efficient</li>
                <li className="mb-1 text-lg">Reduce stress and improve our overall well-being</li>
              </ul>
              <div className="mb-12 w-full bg-[#eaeaea] lg:w-[1024px] h-0.5"></div>
            </div>
            <div className="flex w-full flex-col items-center max-[479px]:mb-8 sm:w-auto">
              <h5 className="font-[Poppins,_sans-serif] text-base font-semibold text-[#414141] md:text-sm">Share This Blog:</h5>
              <div className="mt-4 grid grid-flow-col grid-cols-[max-content] justify-items-start">

                <div className="h-6 w-6">
                  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M16.2502 4.5C16.2502 3.80262 16.4931 3.12701 16.9372 2.58932C17.3813 2.05163 17.9988 1.68545 18.6837 1.55374C19.3685 1.42203 20.0778 1.53303 20.6897 1.86763C21.3015 2.20224 21.7777 2.73956 22.0363 3.38721C22.2949 4.03486 22.3198 4.75238 22.1068 5.4164C21.8937 6.08043 21.4559 6.64948 20.8687 7.02571C20.2815 7.40195 19.5816 7.56186 18.8893 7.47796C18.197 7.39407 17.5556 7.0716 17.0752 6.566L8.65423 11.245C8.78289 11.7401 8.78289 12.2599 8.65423 12.755L17.0752 17.434C17.5785 16.9049 18.2574 16.5775 18.9848 16.5132C19.7122 16.4489 20.4381 16.6521 21.0263 17.0847C21.6146 17.5173 22.0249 18.1496 22.1803 18.8631C22.3357 19.5766 22.2255 20.3223 21.8705 20.9603C21.5154 21.5984 20.9398 22.0851 20.2515 22.3291C19.5633 22.5731 18.8097 22.5577 18.132 22.2858C17.4543 22.0139 16.899 21.5042 16.5702 20.8521C16.2415 20.2001 16.1618 19.4506 16.3462 18.744L7.92523 14.066C7.51209 14.501 6.97801 14.8021 6.39198 14.9305C5.80595 15.0589 5.1949 15.0086 4.63773 14.7862C4.08056 14.5638 3.60288 14.1794 3.26637 13.6827C2.92987 13.1861 2.75 12.5999 2.75 12C2.75 11.4001 2.92987 10.8139 3.26637 10.3173C3.60288 9.8206 4.08056 9.43624 4.63773 9.21381C5.1949 8.99138 5.80595 8.94111 6.39198 9.0695C6.97801 9.19788 7.51209 9.49901 7.92523 9.934L16.3462 5.255C16.2823 5.00843 16.2501 4.75472 16.2502 4.5Z" fill="#636262"></path>
                  </svg>
                </div>

                <div className="h-6 w-6">
                  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5 2.25C9.9791 2.25005 7.55619 3.22647 5.73968 4.97439C3.92317 6.72231 2.85426 9.10586 2.75723 11.6249C2.6602 14.1439 3.5426 16.6026 5.21928 18.4851C6.89595 20.3676 9.23657 21.5275 11.75 21.7214V14.2501H9.5C9.30109 14.2501 9.11032 14.1711 8.96967 14.0304C8.82902 13.8898 8.75 13.699 8.75 13.5001C8.75 13.3012 8.82902 13.1104 8.96967 12.9698C9.11032 12.8291 9.30109 12.7501 9.5 12.7501H11.75V10.5001C11.7509 9.70472 12.0673 8.94218 12.6297 8.37977C13.1921 7.81736 13.9546 7.501 14.75 7.50009H16.25C16.4489 7.50009 16.6397 7.57911 16.7803 7.71976C16.921 7.86041 17 8.05118 17 8.25009C17 8.449 16.921 8.63977 16.7803 8.78042C16.6397 8.92107 16.4489 9.00009 16.25 9.00009H14.75C14.3523 9.00054 13.971 9.15872 13.6898 9.43993C13.4086 9.72114 13.2505 10.1024 13.25 10.5001V12.7501H15.5C15.6989 12.7501 15.8897 12.8291 16.0303 12.9698C16.171 13.1104 16.25 13.3012 16.25 13.5001C16.25 13.699 16.171 13.8898 16.0303 14.0304C15.8897 14.1711 15.6989 14.2501 15.5 14.2501H13.25V21.7214C15.7634 21.5275 18.104 20.3676 19.7807 18.4851C21.4574 16.6026 22.3398 14.1439 22.2427 11.6249C22.1457 9.10587 21.0768 6.72232 19.2603 4.9744C17.4438 3.22649 15.0209 2.25006 12.5 2.25Z" fill="#636262"></path>
                  </svg>
                </div>
                <div className="h-6 w-6">
                  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5 15C14.1569 15 15.5 13.6569 15.5 12C15.5 10.3431 14.1569 9 12.5 9C10.8431 9 9.5 10.3431 9.5 12C9.5 13.6569 10.8431 15 12.5 15Z" fill="#636262"></path>
                    <path d="M16.625 2.625H8.375C6.9831 2.62658 5.64865 3.18021 4.66443 4.16443C3.68021 5.14865 3.12658 6.4831 3.125 7.875V16.125C3.12658 17.5169 3.68021 18.8513 4.66443 19.8356C5.64865 20.8198 6.9831 21.3734 8.375 21.375H16.625C18.0169 21.3734 19.3513 20.8198 20.3356 19.8356C21.3198 18.8513 21.8734 17.5169 21.875 16.125V7.875C21.8734 6.4831 21.3198 5.14865 20.3356 4.16443C19.3513 3.18021 18.0169 2.62658 16.625 2.625ZM12.5 16.5C11.61 16.5 10.74 16.2361 9.99993 15.7416C9.25991 15.2471 8.68314 14.5443 8.34254 13.7221C8.00195 12.8998 7.91283 11.995 8.08647 11.1221C8.2601 10.2492 8.68868 9.44736 9.31802 8.81802C9.94736 8.18868 10.7492 7.7601 11.6221 7.58647C12.495 7.41283 13.3998 7.50195 14.2221 7.84254C15.0443 8.18314 15.7471 8.75991 16.2416 9.49993C16.7361 10.24 17 11.11 17 12C16.9987 13.1931 16.5241 14.3369 15.6805 15.1805C14.8369 16.0241 13.6931 16.4987 12.5 16.5ZM17.375 8.25C17.1525 8.25 16.935 8.18402 16.75 8.0604C16.565 7.93679 16.4208 7.76109 16.3356 7.55552C16.2505 7.34995 16.2282 7.12375 16.2716 6.90552C16.315 6.68729 16.4222 6.48684 16.5795 6.3295C16.7368 6.17217 16.9373 6.06502 17.1555 6.02162C17.3738 5.97821 17.6 6.00049 17.8055 6.08564C18.0111 6.17078 18.1868 6.31498 18.3104 6.49998C18.434 6.68499 18.5 6.9025 18.5 7.125C18.5 7.42337 18.3815 7.70952 18.1705 7.9205C17.9595 8.13147 17.6734 8.25 17.375 8.25Z" fill="#636262"></path>
                  </svg>
                </div>
                <div className="h-6 w-6">
                  <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.4898 7.58367L21.5441 10.5294C20.956 17.3537 15.2008 22.6563 8.31235 22.6563C6.89395 22.6563 5.72503 22.4314 4.83797 21.9878C4.1221 21.6299 3.82884 21.2457 3.75608 21.1365C3.6908 21.0386 3.64848 20.9272 3.63229 20.8106C3.6161 20.694 3.62646 20.5753 3.66258 20.4633C3.6987 20.3513 3.75967 20.2489 3.84091 20.1638C3.92216 20.0786 4.02159 20.0129 4.13178 19.9716C4.15691 19.9621 6.4607 19.0773 7.94967 17.3926C7.02353 16.7332 6.2084 15.9303 5.53497 15.0142C4.1963 13.1975 2.78048 10.0424 3.63744 5.32899C3.66295 5.18872 3.72635 5.0581 3.82079 4.95128C3.91522 4.84447 4.03709 4.76553 4.17318 4.72302C4.30927 4.68052 4.45439 4.67606 4.59283 4.71013C4.73128 4.74421 4.85775 4.81552 4.95857 4.91634C4.99299 4.95067 8.24393 8.15568 12.2181 9.19095L12.2186 8.59337C12.227 7.34252 12.7318 6.1462 13.6219 5.26735C14.512 4.38851 15.7147 3.89906 16.9655 3.90659C17.7781 3.91784 18.5739 4.13966 19.2751 4.55039C19.9764 4.96112 20.5591 5.54671 20.9664 6.24996L23.9374 6.25C24.0919 6.25 24.2429 6.29582 24.3714 6.38166C24.4999 6.46751 24.6 6.58952 24.6591 6.73227C24.7183 6.87502 24.7337 7.0321 24.7036 7.18365C24.6735 7.3352 24.5991 7.47441 24.4898 7.58367Z" fill="#636262"></path>
                  </svg>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
