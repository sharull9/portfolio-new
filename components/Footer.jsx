import Link from "next/link";
import React from "react";
import { BiLogoFacebook, BiLogoTwitter } from "react-icons/bi";
import { BsDiscord, BsGithub, BsDribbble } from "react-icons/bs";

export default function Footer() {
  return (
    <footer class="bg-white">
      <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
            <Link href="/" class="flex items-center font-playfair">
              <span class="self-center text-2xl font-semibold whitespace-nowrap">
                SHARULL
              </span>
            </Link>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Resources
              </h2>
              <ul class="text-gray-500 font-medium">
                <li class="mb-4">
                  <a href="https://flowbite.com/" class="hover:underline">
                    Flowbite
                  </a>
                </li>
                <li>
                  <a href="https://tailwindcss.com/" class="hover:underline">
                    Tailwind CSS
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Follow us
              </h2>
              <ul class="text-gray-500 font-medium">
                <li class="mb-4">
                  <a
                    href="https://github.com/sharull9"
                    class="hover:underline "
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a href="https://discord.gg/bsyt7pbS" class="hover:underline">
                    Discord
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Legal
              </h2>
              <ul class="text-gray-500 font-medium">
                <li class="mb-4">
                  <Link href={"/privacy-policy"}>
                    <p class="hover:underline">Privacy Policy</p>
                  </Link>
                </li>
                <li>
                  <Link href={"/terms-condition"}>
                    <p class="hover:underline">Terms &amp; Conditions</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-500 sm:text-center">
            © 2023{" "}
            <a href="https://flowbite.com/" class="hover:underline">
              SHARULL™
            </a>
            . All Rights Reserved.
          </span>
          <div class="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            <Link
              href="https://discord.gg/bsyt7pbS"
              class="text-gray-500 hover:text-gray-900"
            >
              <BsDiscord size={"1.25rem"} />
              <span class="sr-only">Discord community</span>
            </Link>
            <Link
              href="https://github.com/sharull9"
              class="text-gray-500 hover:text-gray-900"
            >
              <BsGithub size={"1.25rem"} />
              <span class="sr-only">GitHub account</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
