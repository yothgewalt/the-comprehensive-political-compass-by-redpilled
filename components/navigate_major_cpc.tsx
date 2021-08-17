import * as React from 'react';
import { LibraryIcon, ArrowNarrowRightIcon } from '@heroicons/react/solid'

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
                    <LibraryIcon className="w-7" />
                </div>
            </a>
            <div className="flex space-x-10 ml-auto">
                <a
                    href={facebook_share_href}
                    className="group font-medium text-white inline-flex items-center hover:text-gray-300 transition-colors duration-150"
                >
                    <svg width="20" height="20" fill="currentColor" className="text-white"><path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"></path></svg>
                    &nbsp;Share
                    <span className="sr-only sm:not-sr-only">
                        &nbsp;on Twitter
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
