import React from 'react'

export default function about() {
  return (
    <section className="block">
      <div className="px-5 md:px-10">
        <div className="mx-auto w-full max-w-7xl">
          <div className="py-12 md:py-16 lg:py-20">
            <div className="flex items-stretch max-[991px]:min-h-[auto] max-[991px]:w-full max-[991px]:flex-col grid-cols-1 lg:grid-cols-[65%_30%] gap-8 lg:gap-20">
              <div className="flex-col flex-1 flex justify-center gap-8">
                <div className="flex-col flex gap-8">
                  <h2 className="font-bold text-3xl md:text-5xl">About us</h2>
                  <p className="max-[479px]:text-sm">Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin fermentum leo vel orci. Dui faucibus in ornare quam viverra orci sagittis eu. Viverra nam libero justo laoreet sit amet. Vulputate odio ut enim blandit volutpat maecenas volutpat blandit. A lacus vestibulum sed arcu non odio euismod. Feugiat pretium nibh ipsum consequat. Cum sociis natoque penatibus et. Leo in vitae turpis massa sed. Neque aliquam vestibulum morbi blandit cursus. Facilisis sed odio morbi quis. A pellentesque sit amet porttitor eget.</p>
                </div>
                <div className="flex items-center justify-start gap-4 flex-wrap">
                  <p className="inline-block cursor-pointer items-center bg-black px-6 py-3 text-center font-semibold text-white">Learn More</p>
                </div>
                <div className="mb-8 mt-8 h-px w-full bg-black"></div>
              </div>
              <div className="block overflow-hidden bg-[#f2f2f7] max-[991px]:h-[475px] rounded-md w-full lg:w-[30%]">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
