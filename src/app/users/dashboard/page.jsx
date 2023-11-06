import { authUserSession } from '@/libs/auth-lib';
import Image from 'next/image';

const Page = async () => {
    const user = await authUserSession();
    return (
        <div className='text-color-primary'>
            <h3>DASHBOARD</h3>
            <h5>wellcome, {user.name}</h5>
            <Image src={user.image} alt='...' width={250} height={250} />
        </div>
    );
};

export default Page;
