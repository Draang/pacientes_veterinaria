import { ReactNode } from 'react'

export default function Error({ children }: { children: ReactNode }) {
    return (
        <p className='text-left m-1  text-red-600 font-bold  text-sm'>
            {children}
        </p>
    )
}
