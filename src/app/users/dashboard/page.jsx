import { authUserSession } from '@/libs/auth-lib';
import Image from 'next/image';
import Link from 'next/link';
const Page = async () => {
    const user = await authUserSession();

    return (
        <div className='flex flex-col items-center justify-center mt-8 text-color-primary '>
            <h5 className='mb-8 text-2xl font-bold'>wellcome, {user.name}</h5>
            <Image src={user.image} alt='...' width={250} height={250} rounded-xl />
            <div className='flex flex-wrap gap-4 py-8'>
                <Link
                    href='users/dashboard/collection'
                    className='px-4 py-3 text-xl font-bold bg-color-accent text-color-dark'>
                    my collection
                </Link>
                <Link
                    href='users/dashboard/comment'
                    className='px-4 py-3 text-xl font-bold bg-color-accent text-color-dark'>
                    my Comment
                </Link>
            </div>
        </div>
    );
};

export default Page;
