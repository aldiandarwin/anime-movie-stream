import { getAnimeResponse } from '@/libs/api-libs';
import VideoPlayer from '@/components/Utilities/VideoPlayer';
import Image from 'next/image';
import CollectionButton from '@/components/AnimeList/CollectionButton';
import { authUserSession } from '@/libs/auth-lib';
import prisma from '@/libs/prisma';

const Page = async ({ params: { id } }) => {
    const anime = await getAnimeResponse(`anime/${id}`);
    const user = await authUserSession();
    const collection = await prisma.collection.findFirst({
        where: { user_email: user?.email, anime_mal_id: id },
    });

    console.log(collection);

    return (
        <>
            <div className='px-4 pt-4'>
                <h3 className='text-2xl text-color-primary'>
                    {anime.data.title}-{anime.data.year}
                </h3>
                {!collection && user && <CollectionButton anime_mal_id={id} user_email={user?.email} />}
            </div>

            <div className='flex gap-2 px-4 pt-4 overflow-x-auto text-color-primary'>
                <div className='flex flex-col items-center justify-center p-2 border rounded w-36 border-color-primary'>
                    <h3>peringkat</h3>
                    <p>{anime.data.rank}</p>
                </div>
                <div className='flex flex-col items-center justify-center p-2 border rounded w-36 border-color-primary'>
                    <h3>skor</h3>
                    <p>{anime.data.score}</p>
                </div>

                <div className='flex flex-col items-center justify-center p-2 border rounded w-36 border-color-primary'>
                    <h3>anggota</h3>
                    <p>{anime.data.members}</p>
                </div>

                <div className='flex flex-col items-center justify-center p-2 border rounded w-36 border-color-primary'>
                    <h3>episode</h3>
                    <p>{anime.data.episodes}</p>
                </div>
            </div>

            <div className='flex flex-wrap gap-2 px-4 pt-4 sm:flex-nowrap text-color-primary'>
                <Image
                    src={anime.data.images.webp.image_url}
                    alt={anime.data.images.jpg.image_url}
                    width={250}
                    height={250}
                    className='object-cover w-full rounded'
                />
                <p className='text-xl text-justify'>{anime.data.synopsis}</p>
            </div>
            <div>
                <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
            </div>
        </>
    );
};

export default Page;
