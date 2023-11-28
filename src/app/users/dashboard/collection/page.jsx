import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Dashboard/Header';
const Page = () => {
    return (
        <section section className='w-full px-4 mt-4'>
            <Header title={'my collection'} />
            <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
                <Link href='/' className='relative border-2 border-color-accent'>
                    <Image src='' alt='' width={350} height={350} className='w-full' />
                    <div className='absolute bottom-0 flex items-center justify-center w-full h-16 bg-color-accent'>
                        <h5 className='text-xl text-center'>judul anime adalah bla bla bla</h5>
                    </div>
                </Link>
                <Link href='/' className='relative border-2 border-color-accent'>
                    <Image src='' alt='' width={350} height={350} className='w-full' />
                    <div className='absolute bottom-0 flex items-center justify-center w-full h-16 bg-color-accent'>
                        <h5 className='text-xl text-center'>judul anime adalah bla bla bla</h5>
                    </div>
                </Link>
                <Link href='/' className='relative border-2 border-color-accent'>
                    <Image src='' alt='' width={350} height={350} className='w-full' />
                    <div className='absolute bottom-0 flex items-center justify-center w-full h-16 bg-color-accent'>
                        <h5 className='text-xl text-center'>judul anime adalah bla bla bla</h5>
                    </div>
                </Link>
                <Link href='/' className='relative border-2 border-color-accent'>
                    <Image src='' alt='' width={350} height={350} className='w-full' />
                    <div className='absolute bottom-0 flex items-center justify-center w-full h-16 bg-color-accent'>
                        <h5 className='text-xl text-center'>judul anime adalah bla bla bla</h5>
                    </div>
                </Link>
            </div>
        </section>
    );
};
export default Page;
