'use client';

import { FileSearch } from '@phosphor-icons/react/dist/ssr';
import { useRouter } from 'next/navigation';

const Page = () => {
    const router = useRouter();
    return (
        <div className='flex items-center justify-center max-w-xl min-h-screen mx-auto'>
            <div className='flex flex-col items-center justify-center gap-4'>
                <FileSearch size={44} className='bg-color-accent' />
                <h3 className='text-4xl font-bold text-color-accent'>NOT FOUND</h3>
                <button
                    onClick={() => router.back()}
                    className='underline transition-all text-color-primary hover:text-color-accent'>
                    kembali
                </button>
            </div>
        </div>
    );
};

export default Page;
