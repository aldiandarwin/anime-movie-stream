import Link from 'next/link';
import InputSearch from './InputSearch';
import UserActionButton from './UserActionButton';

const Navbar = () => {
    return (
        <header className='bg-color-accent'>
            <div className='flex flex-col justify-between gap-2 p-4 md:items-center md:flex-row'>
                <Link href='/' className='text-2xl font-bold '>
                    Live streaming Movie
                </Link>
                <InputSearch />
                <UserActionButton />
            </div>
        </header>
    );
};

export default Navbar;
