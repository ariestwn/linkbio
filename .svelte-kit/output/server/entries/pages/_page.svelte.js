import { F as pop, C as push, O as spread_attributes, I as head, M as escape_html, K as attr } from "../../chunks/index.js";
import { a as siteName, b as siteDescription } from "../../chunks/app.config.js";
function DarkModeToggle($$payload, $$props) {
  push();
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  pop();
}
function Threads($$payload, $$props) {
  let {
    size = "24",
    color = "currentColor",
    ariaLabel = "Threads Icon",
    $$slots,
    $$events,
    ...rest
  } = $$props;
  $$payload.out += `<svg${spread_attributes(
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 448 512",
      width: size,
      height: size,
      fill: color,
      "aria-label": ariaLabel,
      ...rest
    },
    void 0,
    void 0,
    3
  )}><path d="M331.5 235.7c2.2 .9 4.2 1.9 6.3 2.8c29.2 14.1 50.6 35.2 61.8 61.4c15.7 36.5 17.2 95.8-30.3 143.2c-36.2 36.2-80.3 52.5-142.6 53h-.3c-70.2-.5-124.1-24.1-160.4-70.2c-32.3-41-48.9-98.1-49.5-169.6V256v-.2C17 184.3 33.6 127.2 65.9 86.2C102.2 40.1 156.2 16.5 226.4 16h.3c70.3 .5 124.9 24 162.3 69.9c18.4 22.7 32 50 40.6 81.7l-40.4 10.8c-7.1-25.8-17.8-47.8-32.2-65.4c-29.2-35.8-73-54.2-130.5-54.6c-57 .5-100.1 18.8-128.2 54.4C72.1 146.1 58.5 194.3 58 256c.5 61.7 14.1 109.9 40.3 143.3c28 35.6 71.2 53.9 128.2 54.4c51.4-.4 85.4-12.6 113.7-40.9c32.3-32.2 31.7-71.8 21.4-95.9c-6.1-14.2-17.1-26-31.9-34.9c-3.7 26.9-11.8 48.3-24.7 64.8c-17.1 21.8-41.4 33.6-72.7 35.3c-23.6 1.3-46.3-4.4-63.9-16c-20.8-13.8-33-34.8-34.3-59.3c-2.5-48.3 35.7-83 95.2-86.4c21.1-1.2 40.9-.3 59.2 2.8c-2.4-14.8-7.3-26.6-14.6-35.2c-10-11.7-25.6-17.7-46.2-17.8H227c-16.6 0-39 4.6-53.3 26.3l-34.4-23.6c19.2-29.1 50.3-45.1 87.8-45.1h.8c62.6 .4 99.9 39.5 103.7 107.7l-.2 .2zm-156 68.8c1.3 25.1 28.4 36.8 54.6 35.3c25.6-1.4 54.6-11.4 59.5-73.2c-13.2-2.9-27.8-4.4-43.4-4.4c-4.8 0-9.6 .1-14.4 .4c-42.9 2.4-57.2 23.2-56.2 41.8l-.1 .1z"></path></svg>`;
}
function Instagram($$payload, $$props) {
  let {
    size = "24",
    color = "currentColor",
    ariaLabel = "Instagram Icon",
    $$slots,
    $$events,
    ...rest
  } = $$props;
  $$payload.out += `<svg${spread_attributes(
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 448 512",
      width: size,
      height: size,
      fill: color,
      "aria-label": ariaLabel,
      ...rest
    },
    void 0,
    void 0,
    3
  )}><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>`;
}
function Youtube($$payload, $$props) {
  let {
    size = "24",
    color = "currentColor",
    ariaLabel = "Youtube Icon",
    $$slots,
    $$events,
    ...rest
  } = $$props;
  $$payload.out += `<svg${spread_attributes(
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 576 512",
      width: size,
      height: size,
      fill: color,
      "aria-label": ariaLabel,
      ...rest
    },
    void 0,
    void 0,
    3
  )}><path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"></path></svg>`;
}
function Linkedin($$payload, $$props) {
  let {
    size = "24",
    color = "currentColor",
    ariaLabel = "Linkedin Icon",
    $$slots,
    $$events,
    ...rest
  } = $$props;
  $$payload.out += `<svg${spread_attributes(
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 448 512",
      width: size,
      height: size,
      fill: color,
      "aria-label": ariaLabel,
      ...rest
    },
    void 0,
    void 0,
    3
  )}><path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"></path></svg>`;
}
function BadgeCheck($$payload, $$props) {
  let {
    size = "24",
    color = "currentColor",
    ariaLabel = "BadgeCheck Icon",
    $$slots,
    $$events,
    ...rest
  } = $$props;
  $$payload.out += `<svg${spread_attributes(
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512",
      width: size,
      height: size,
      fill: color,
      "aria-label": ariaLabel,
      ...rest
    },
    void 0,
    void 0,
    3
  )}><path d="M256 0c36.8 0 68.8 20.7 84.9 51.1C373.8 41 411 49 437 75s34 63.3 23.9 96.1C491.3 187.2 512 219.2 512 256s-20.7 68.8-51.1 84.9C471 373.8 463 411 437 437s-63.3 34-96.1 23.9C324.8 491.3 292.8 512 256 512s-68.8-20.7-84.9-51.1C138.2 471 101 463 75 437s-34-63.3-23.9-96.1C20.7 324.8 0 292.8 0 256s20.7-68.8 51.1-84.9C41 138.2 49 101 75 75s63.3-34 96.1-23.9C187.2 20.7 219.2 0 256 0zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"></path></svg>`;
}
function Xyoutube($$payload) {
  $$payload.out += `<svg class="fill-dark dark:fill-light w-[45%]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"></path></svg>`;
}
function Xmoney($$payload) {
  $$payload.out += `<svg class="fill-dark dark:fill-light w-[45%]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M3.9 22.9C10.5 8.9 24.5 0 40 0L472 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L396.4 195.6C316.2 212.1 256 283 256 368c0 27.4 6.3 53.4 17.5 76.5c-1.6-.8-3.2-1.8-4.7-2.9l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 65.3C-.7 53.4-2.8 36.8 3.9 22.9zM288 368a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm120.8-32.6c.6-.9 1.8-2.1 4.2-3.4c5.1-2.7 12.5-4.1 18.7-4c8.2 .1 17.1 1.8 26.4 4.1c8.6 2.1 17.3-3.1 19.4-11.7s-3.1-17.3-11.7-19.4c-5.6-1.4-11.6-2.7-17.9-3.7l0-9.4c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 9.5c-6.1 1.2-12.3 3.2-18 6.3c-11.8 6.3-23 18.4-21.8 37.2c1 16 11.7 25.3 21.6 30.7c8.8 4.7 19.7 7.8 28.6 10.3l1.8 .5c10.3 2.9 17.9 5.2 23.2 8.3c4.5 2.7 4.7 4.2 4.7 5.6c.1 2.4-.5 3.7-1 4.5c-.6 1-1.8 2.2-4 3.3c-4.7 2.5-11.8 3.8-18.5 3.6c-9.5-.3-18.5-3.1-29.9-6.8c-1.9-.6-3.8-1.2-5.8-1.8c-8.4-2.6-17.4 2.1-20 10.5s2.1 17.4 10.5 20c1.6 .5 3.3 1 5 1.6c0 0 0 0 0 0s0 0 0 0c7 2.3 15.1 4.8 23.7 6.6l0 11.4c0 8.8 7.2 16 16 16s16-7.2 16-16l0-10.8c6.2-1.1 12.5-3.1 18.3-6.2c12.1-6.5 22.3-18.7 21.7-36.9c-.5-16.2-10.3-26.3-20.5-32.3c-9.4-5.6-21.2-8.9-30.5-11.5l-.2 0c-10.4-2.9-18.3-5.2-23.9-8.2c-4.8-2.6-4.8-4-4.8-4.5c0 0 0 0 0-.1c-.1-1.9 .3-2.9 .8-3.6z"></path></svg>`;
}
function Astronaut($$payload) {
  $$payload.out += `<svg class="w-[50%] fill-dark dark:fill-light" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"><g id="Layer_1"><path class="cls-1" d="M251.8,397.2l-32.7-32.7,24.5-24.5c49.4-49.2,98.2-139.1,136-220.5-81.4,37.8-171.4,86.6-220.5,136l-24.6,24.6-32.7-32.7,24.5-24.5c65.7-66.1,194-129.1,289.9-170.3l30.4,30.4c-41.2,96-104.3,224.2-170.4,290l-24.5,24.5Z"></path><rect class="cls-2" x="156.7" y="376.6" width="119.6" height="46.3" transform="translate(-219.2 270.2) rotate(-45)"></rect><rect class="cls-2" x="39.5" y="259.3" width="119.6" height="46.3" transform="translate(-170.7 152.9) rotate(-45)"></rect><rect class="cls-2" x="40.7" y="339.2" width="191.9" height="46.3" transform="translate(-216.2 202.8) rotate(-45)"></rect><path class="cls-1" d="M269.9,496.9v-23.1c0-133.1-108.3-241.3-241.3-241.3H5.4v-46.3s23.1,0,23.1,0c158.6,0,287.6,129,287.6,287.6v23.1s-46.3,0-46.3,0Z"></path></g></svg>`;
}
function Globe($$payload) {
  $$payload.out += `<svg class="fill-dark dark:fill-light w-[45%]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z"></path></svg>`;
}
function _page($$payload, $$props) {
  push();
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>${escape_html(siteName)}</title>`;
    $$payload2.out += `<meta name="description"${attr("content", siteDescription)}>`;
  });
  $$payload.out += `<div class="w-full m-auto max-w-[1400px]"><div class="grid grid-cols-12 mx-auto lg:gap-16 xl:gap-20 2xl:gap-24"><div class="top-0 flex flex-col col-span-12 gap-6 p-6 overflow-y-auto lg:h-screen lg:sticky lg:col-span-6 xl:col-span-5 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-14 md:p-12 lg:p-16 xl:p-20 2xl:p-24 lg:pr-0 xl:pr-0 2xl:pr-0"><div class="flex flex-col items-center md:flex-row"><a class="flex flex-col items-center justify-center gap-3 pt-5 text-center md:pt-0 md:justify-start md:text-left md:flex-row md:gap-5 lg:gap-4 xl:gap-6" href="https://www.threads.net/intent/follow?username=nwtseira" target="_blank"><img src="/images/profile.jpg" alt="Arie" class="w-20 h-20 rounded-full md:w-16 md:h-16"> <div class="flex flex-col items-center justify-center text-xl md:items-start md:justify-start md:text-xl xl:text-xl"><span class="flex items-center gap-[0.3em] font-extrabold">Arie Setiawan `;
  BadgeCheck($$payload, { class: "text-[#4a99e9] w-[1em] h-[1em]" });
  $$payload.out += `<!----></span> <span class="font-medium opacity-60">@nwtseira</span></div></a> <div class="flex items-center gap-5 mt-6 md:mt-0 xl:gap-6 md:ml-auto"><div class="absolute top-10 right-10 md:top-0 md:right-0 md:relative opacity-40 hover:opacity-100">`;
  DarkModeToggle($$payload);
  $$payload.out += `<!----></div> <a class="text-lg xl:text-xl font-bold rounded-full bg-dark dark:bg-light hover:opacity-80 px-[1em] py-[0.5em] text-light dark:text-dark" href="https://www.threads.net/intent/follow?username=nwtseira" target="_blank">Follow</a></div></div> <div class="px-5 text-xl text-center md:text-left md:text-2xl lg:text-2xl xl:text-2xl md:px-0"><p>👋 Hai! Mau revenue penjualan brand kamu aku <strong>Scale Up 2-3x</strong> lipat?</p> <br> <p>Kamu <strong><u>fokus dengan hal yang lebih penting</u></strong> untuk bisnis kamu. Biarin aku yang jalanin strategi Iklan brand kamu.</p> <p><br> Aku bakal datangkan leads, <strong><u>naikkan sales</u></strong> dan <strong><u>revenue kamu 2-3x lipat</u></strong>.</p></div> <div class="flex items-center justify-center gap-10 py-6 mt-auto lg:py-0 md:justify-start"><a class="p-2 -m-2 opacity-100 hover:opacity-60" href="https://www.threads.net/intent/follow?username=nwtseira" target="_blank">`;
  Threads($$payload, { class: "w-8 h-8" });
  $$payload.out += `<!----></a> <a class="p-2 -m-2 opacity-100 hover:opacity-60" href="https://youtube.com/@ariestwn" target="_blank">`;
  Youtube($$payload, { class: "w-8 h-8" });
  $$payload.out += `<!----></a> <a class="p-2 -m-2 opacity-100 hover:opacity-60" href="https://instagram.com/nwtseira" target="_blank">`;
  Instagram($$payload, { class: "w-8 h-8" });
  $$payload.out += `<!----></a> <a class="p-2 -m-2 opacity-100 hover:opacity-60" href="https://linkedin.com/in/nwtseira" target="_blank">`;
  Linkedin($$payload, { class: "w-8 h-8" });
  $$payload.out += `<!----></a></div></div> <div class="col-span-12 p-6 -mt-6 lg:col-span-6 xl:col-span-7 md:p-12 lg:p-16 xl:p-20 2xl:p-24 lg:pl-0 xl:pl-0 2xl:pl-0 md:-mt-12 lg:mt-0"><div class="flex flex-col gap-6 text-base md:text-xl md:gap-6 lg:gap-7 xl:gap-8"><a class="rounded-[20px] md:rounded-[25px] p-5 md:p-6 bg-dark/5 hover:bg-dark/10 dark:bg-light/5 dark:hover:bg-light/10 flex items-center gap-[1.5em]" href="https://www.ariestwn.com/contact/" target="_blank"><div class="w-[80px] md:w-[90px] md:h-[90px] md:rounded-[18px] h-[80px] rounded-[15px] shrink-0 flex items-center justify-center bg-light dark:bg-dark">`;
  Xmoney($$payload);
  $$payload.out += `<!----></div> <div class="flex flex-col"><h2 class="font-bold">Hire me as an Advertiser</h2> <p class="opacity-50 font-medium mt-[0.1em]">Bantu naikkan penjualan kamu 2-3x lipat 🚀</p></div></a> <a class="rounded-[20px] md:rounded-[25px] p-5 md:p-6 bg-dark/5 hover:bg-dark/10 dark:bg-light/5 dark:hover:bg-light/10 flex items-center gap-[1.5em]" href="https://youtu.be/CYWoB5FUsps" target="_blank"><div class="w-[80px] md:w-[90px] md:h-[90px] md:rounded-[18px] h-[80px] rounded-[15px] shrink-0 flex items-center justify-center bg-light dark:bg-dark">`;
  Xyoutube($$payload);
  $$payload.out += `<!----></div> <div class="flex flex-col"><h2 class="font-bold">Jadi Digital Marketer di tahun 2024</h2> <p class="opacity-50 font-medium mt-[0.1em]">Video youtube untuk jadi digital marketer di tahun 2024</p></div></a> <a class="rounded-[20px] md:rounded-[25px] p-5 md:p-6 bg-dark/5 hover:bg-dark/10 dark:bg-light/5 dark:hover:bg-light/10 flex items-center gap-[1.5em]" href="https://be.mailketing.co.id/show_form.php?web_form_id=vigIsa3sCHAK2XozMdLmVg%3D%3D" target="_blank"><div class="w-[80px] md:w-[90px] md:h-[90px] md:rounded-[18px] h-[80px] rounded-[15px] shrink-0 flex items-center justify-center bg-light dark:bg-dark">`;
  Astronaut($$payload);
  $$payload.out += `<!----></div> <div class="flex flex-col"><h2 class="font-bold">Roadmap Performance Marketer</h2> <p class="opacity-50 font-medium mt-[0.1em]">Roadmap untuk jadi performance marketer</p></div></a> <a class="rounded-[20px] md:rounded-[25px] p-5 md:p-6 bg-dark/5 hover:bg-dark/10 dark:bg-light/5 dark:hover:bg-light/10 flex items-center gap-[1.5em]" href="https://www.ariestwn.com" target="_blank"><div class="w-[80px] md:w-[90px] md:h-[90px] md:rounded-[18px] h-[80px] rounded-[15px] shrink-0 flex items-center justify-center bg-light dark:bg-dark">`;
  Globe($$payload);
  $$payload.out += `<!----></div> <div class="flex flex-col"><h2 class="font-bold">Blog</h2> <p class="opacity-50 font-medium mt-[0.1em]">Tempat aku menuangkan isi Pikiran</p></div></a> <div class="opacity-50 flex flex-col items-center justify-center w-full gap-[1em] text-center p-6 md:p-8 lg:p-10 xl:p-12 2xl:p-14"><span class="text-3xl font-medium">¯\\_(ツ)_/¯</span> <p class="font-medium">I guess I should ship more.</p></div></div></div></div></div>`;
  pop();
}
export {
  _page as default
};
