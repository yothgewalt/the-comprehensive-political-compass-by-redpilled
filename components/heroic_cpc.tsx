import * as React from 'react';
import { BadgeCheckIcon, ScaleIcon, CodeIcon } from '@heroicons/react/outline'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export interface IHeroicProps {
    labelQuestion: string
    labelLicense: string
    labelStack: string
}

export default function Heroic({ labelQuestion, labelLicense, labelStack }: IHeroicProps) {
    return (
        <div className="sm:pt-4 pb-10 sm:pb-14 flex flex-wrap items-center select-none">
            <div className="w-full flex-none text-center mt-10">
                <div className="text-white text-4xl leading-10 font-medium">
                    Comprehensive Political Compass,
                    <span className="block text-gray-300">
                        by the developer of Rhodesia.
                    </span>
                </div>
                <div className="flex flex-nowrap justify-center whitespace-nowrap font-medium text-gray-200 mt-3 leading-5">
                    <div className="flex items-center mx-3 mt-3">
                        <BadgeCheckIcon className="w-6 mr-2" /> {labelQuestion}
                    </div>
                    <div className="flex items-center mx-3 mt-3">
                        <ScaleIcon className="w-6 mr-2" /> {labelLicense}
                    </div>
                    <div className="flex items-center mx-3 mt-3">
                        <CodeIcon className="w-6 mr-2" /> {labelStack}
                    </div>
                </div>
            </div>
            <div className="w-auto flex-none flex flex-row items-start space-y-0 mt-10 mx-auto">
                <a
                    href=""
                    className="group flex"
                >
                    <div className={classNames(
                        "w-full sm:w-auto inline-flex items-center justify-center text-black font-medium",
                        "leading-none bg-white rounded-lg shadow-sm group-hover:shadow-lg py-3 px-5",
                        "border border-transparent transform group-hover:-translate-y-1 transition-all duration-150"
                    )}>
                        <svg width="24" height="24" fill="currentColor" className="text-black mr-3 transform">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z"></path>
                        </svg>
                        <span>Documentation</span>
                    </div>
                </a>
                <a
                    href=""
                    className="group flex"
                >
                    <div className={classNames(
                        "ml-3 w-full sm:w-auto inline-flex items-center justify-center text-black font-medium",
                        "leading-none bg-white rounded-lg shadow-sm group-hover:shadow-lg py-3 px-5",
                        "border border-transparent transform group-hover:-translate-y-1 transition-all duration-150"
                    )}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 48 48" className="mr-3">
                            <rect width="48" height="48" fill="#000000" rx="24"/><path fill="#fff" d="M36.0367 15.7798C33.8349 14.0183 31.1927 13.1376 28.4037 12.9908L27.9633 13.4312C30.4587 14.0183 32.6606 15.1926 34.7156 16.8073C32.2202 15.4862 29.4312 14.6055 26.4954 14.3119C25.6147 14.1651 24.8807 14.1651 24 14.1651C23.1193 14.1651 22.3853 14.1651 21.5046 14.3119C18.5688 14.6055 15.7798 15.4862 13.2844 16.8073C15.3394 15.1926 17.5413 14.0183 20.0367 13.4312L19.5963 12.9908C16.8073 13.1376 14.1651 14.0183 11.9633 15.7798C9.46789 20.4771 8.14679 25.7615 8 31.1926C10.2018 33.5413 13.2844 35.0092 16.5138 35.0092C16.5138 35.0092 17.5413 33.8349 18.2752 32.8073C16.367 32.367 14.6055 31.3394 13.4312 29.7248C14.4587 30.3119 15.4862 30.8991 16.5138 31.3394C17.8349 31.9266 19.156 32.2202 20.4771 32.5138C21.6514 32.6605 22.8257 32.8073 24 32.8073C25.1743 32.8073 26.3486 32.6605 27.5229 32.5138C28.844 32.2202 30.1651 31.9266 31.4862 31.3394C32.5138 30.8991 33.5413 30.3119 34.5688 29.7248C33.3945 31.3394 31.633 32.367 29.7248 32.8073C30.4587 33.8349 31.4862 35.0092 31.4862 35.0092C34.7156 35.0092 37.7982 33.5413 40 31.1926C39.8532 25.7615 38.5321 20.4771 36.0367 15.7798ZM19.156 28.5504C17.6881 28.5504 16.367 27.2293 16.367 25.6147C16.367 24 17.6881 22.6789 19.156 22.6789C20.6239 22.6789 21.945 24 21.945 25.6147C21.945 27.2293 20.6239 28.5504 19.156 28.5504ZM28.844 28.5504C27.3761 28.5504 26.055 27.2293 26.055 25.6147C26.055 24 27.3761 22.6789 28.844 22.6789C30.3119 22.6789 31.633 24 31.633 25.6147C31.633 27.2293 30.3119 28.5504 28.844 28.5504Z"/>
                        </svg>
                        <span>Rhodesia's Discord</span>
                    </div>
                </a>
            </div>
        </div>
    );
}
