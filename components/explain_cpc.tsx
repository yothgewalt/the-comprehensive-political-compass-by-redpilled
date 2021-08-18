import * as React from 'react';
import { GlobeIcon, CurrencyDollarIcon, LibraryIcon, CubeIcon, AcademicCapIcon, ArrowNarrowUpIcon, ArrowNarrowRightIcon, BanIcon, MapIcon, FireIcon, SpeakerphoneIcon, FlagIcon } from '@heroicons/react/outline'

const explains = [
    {
        name: 'Social freedom',
        description: 'The degree of freedom an individual enjoys in a sociocultural sphere.',
        icon: GlobeIcon
    },
    {
        name: 'Economic freedom',
        description: 'The degree of freedom an individual enjoys in the economic sphere.',
        icon: CurrencyDollarIcon
    },
    {
        name: 'Political freedom',
        description: 'The degree of freedom an individual enjoys in the sphere of political participation.',
        icon: LibraryIcon
    },
    {
        name: 'Diplomatic freedom',
        description: 'The degree of freedom an individual enjoys as a result of international policies.',
        icon: CubeIcon
    },
    {
        name: 'Head of state',
        description: 'The status of a head of state, sovereign or civilian.',
        icon: AcademicCapIcon
    },
    {
        name: 'Vertical separation',
        description: 'How powers are allocated between central and lower governments.',
        icon: ArrowNarrowUpIcon
    },
    {
        name: 'Horizontal separation',
        description: 'How powers are allocated between the three branches of government namely the legislature, the executive, and the judiciary.',
        icon: ArrowNarrowRightIcon
    },
    {
        name: 'Legal system',
        description: 'Common law or civil law. Adversarial or inquisitorial.',
        icon: BanIcon
    },
    {
        name: 'Environment',
        description: 'About Environmentalism vs. industrialism',
        icon: MapIcon
    },
    {
        name: 'Cultural preference',
        description: 'About Traditionalism vs. progressivism',
        icon: FireIcon
    },
    {
        name: 'Economic preference',
        description: 'About Communism vs. capitalism',
        icon: SpeakerphoneIcon
    },
    {
        name: 'National preference',
        description: 'About Globalism vs. nationalism',
        icon: FlagIcon
    }
]

export interface IExplainProps {
}

export default function Explain({}: IExplainProps) {
    return (
        <div className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h2 className="text-base text-indigo-600 font-medium tracking-wide uppercase">
                        Transactions
                    </h2>
                    <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
                        A better way to send money
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.
                    </p>
                </div>

                <div className="mt-10">
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                        {explains.map((explain) => (
                            <div key={explain.name} className="relative">
                                <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                        <explain.icon className="h-6 w-6" aria-hidden="true" />
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                                        {explain.name}
                                    </p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-500">
                                    {explain.description}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
}
