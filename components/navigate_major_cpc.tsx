import * as React from 'react';
import Image from 'next/image'
import { ArrowNarrowRightIcon } from '@heroicons/react/solid'

export interface INavigateProps {
    publisher_brand: string
    publisher_brand_href: string
    facebook_share_href: string
    facebook_group_href: string
}

export default function Navigate({ publisher_brand, publisher_brand_href, facebook_share_href, facebook_group_href }: INavigateProps) {
    return (
        <div className="py-6 flex items-center justify-center text-sm leading-5 select-none">
            <a
                href={publisher_brand_href}
                className="group flex select-none"
            >
                <div className="inline-flex items-center text-gray-100">
                    <Image src={publisher_brand} alt="Comprehensive Political Compass" width={36} height={36} />
                </div>
            </a>
            <div className="flex space-x-10 ml-auto">
                <a
                    href={facebook_share_href}
                    className="group font-medium text-white inline-flex items-center hover:text-gray-300 transition-colors duration-150"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
                        <path fill="url(#paint0_linear)" d="M16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8"/>
                        <path fill="url(#paint1_linear)" d="M3 8.008C3 10.023 4.006 14 8 14C11.993 14 13 10.023 13 8.008C13 7.849 11.39 7 8 7C4.61 7 3 7.849 3 8.008Z"/>
                        <path fill="url(#paint2_linear)" d="M4.54102 12.5C5.34502 13.495 6.44802 14 8.01002 14C9.57302 14 10.665 13.495 11.469 12.5C10.918 11.912 9.87002 11 8.01002 11C6.15002 11 5.09302 11.912 4.54102 12.5Z"/><path fill="#2A3755" d="M6.21297 4.14378C6.47597 4.33178 6.71497 4.59878 6.62297 4.93178C6.55197 5.18578 6.42897 5.30078 6.20097 5.30278C5.42097 5.31378 4.49297 5.55778 3.69497 5.91478C3.62997 5.94378 3.49797 6.00278 3.36297 5.99978C3.23897 5.99678 3.11197 5.94178 3.03597 5.76278C2.96897 5.60578 2.96297 5.37478 3.31197 5.16478C3.85697 4.83478 4.56897 4.68478 5.22097 4.56078C4.81154 4.25823 4.37065 4.00074 3.90597 3.79278C3.47897 3.59878 3.52597 3.33578 3.58297 3.19278C3.70997 2.87578 4.19197 2.99678 4.66097 3.21878C5.20802 3.47428 5.72797 3.78417 6.21297 4.14378V4.14378ZM9.78997 4.14378C10.2742 3.78402 10.7935 3.47411 11.34 3.21878C11.81 2.99678 12.29 2.87578 12.418 3.19278C12.475 3.33578 12.522 3.59878 12.095 3.79278C11.6308 4.00053 11.1906 4.25804 10.782 4.56078C11.432 4.68378 12.145 4.83478 12.689 5.16478C13.038 5.37478 13.031 5.60478 12.965 5.76278C12.888 5.94278 12.762 5.99678 12.638 5.99978C12.503 6.00278 12.371 5.94378 12.306 5.91478C11.509 5.55778 10.581 5.31478 9.80197 5.30278C9.57397 5.30078 9.45097 5.18578 9.37997 4.93278C9.28897 4.59978 9.52697 4.33278 9.78997 4.14478V4.14378Z"/>
                        <defs>
                            <linearGradient id="paint0_linear" x1="8" x2="8" y1="1.64" y2="16" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#FEEA70"/><stop offset="1" stop-color="#F69B30"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear" x1="8" x2="8" y1="7" y2="14" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#472315"/><stop offset="1" stop-color="#8B3A0E"/>
                            </linearGradient>
                            <linearGradient id="paint2_linear" x1="8.005" x2="8.005" y1="11" y2="13.457" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#FC607C"/>
                                <stop offset="1" stop-color="#D91F3A"/>
                            </linearGradient>
                        </defs>
                    </svg> 
                    &nbsp;Share
                    <span className="sr-only sm:not-sr-only">
                        &nbsp;on Facebook
                    </span>
                </a>
                <a
                    href={facebook_group_href}
                    className="hidden md:block group font-normal text-gray-300"
                >
                    Looking for Political Group?
                    <strong className="font-medium inline-flex items-center text-white group-hover:text-gray-300 transition-colors duration-150">
                        &nbsp;Get them here&nbsp;<ArrowNarrowRightIcon className="w-3" />
                    </strong>
                </a>
            </div>
        </div>
    );
}
