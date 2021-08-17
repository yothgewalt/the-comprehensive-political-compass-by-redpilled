import * as React from 'react';

export interface IContainerProps {
    children: string
}

export default function Container({ children }: IContainerProps) {
    return (
        <div className="container mx-auto px-4">
            {children}
        </div>
    );
}
