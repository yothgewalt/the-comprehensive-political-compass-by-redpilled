import * as React from 'react';
import Heroic from './heroic_cpc';
import Navigate from './navigate_major_cpc';

export interface IMajorProps {
}

export default function Major({ }: IMajorProps) {
    return (
        <header className="bg-[#5f2c82] px-16">
            <div className="mx-auto divide-y divide-black divide-opacity-10 max-w-8xl">
                <Navigate 
                    publisher_brand_href="https://github.com/einemutigeschlacht/comprehensive-political-compass"
                    facebook_group_href=""
                    facebook_share_href=""
                />
                <Heroic 
                    labelQuestion="500 Questions"
                    labelLicense="MIT Licensed"
                    labelStack="Next.js + Tailwind Libraries"
                />
            </div>
        </header>
    );
}
