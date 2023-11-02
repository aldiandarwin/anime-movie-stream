'use client';

import { XCircle } from '@phosphor-icons/react';
import { useState } from 'react';
import YouTube from 'react-youtube';

const VideoPlayer = ({ youtubeId }) => {
    const [isOpen, setIsOpen] = useState(true);

    const handleVideoPlayer = () => {
        setIsOpen((prevState) => !prevState);
    };

    const option = {
        width: '300',
        height: '250',
    };

    const Player = () => {
        return (
            <div className='fixed right-2 bottom-2'>
                <button
                    onClick={handleVideoPlayer}
                    className='float-right px-3 mb-1 text-color-primary bg-color-secondary'>
                    X
                </button>
                <YouTube videoId={youtubeId} onReady={(event) => event.target.pauseVideo()} opts={option} />
            </div>
        );
    };

    const ButtonOpenPlayer = () => {
        return (
            <button
                onClick={handleVideoPlayer}
                className='fixed w-32 text-xl transition-all rounded shadow-xl bottom-5 right-5 bg-color-primary text-color-dark hover:bg-color-accent'>
                Tonton trailer
            </button>
        );
    };

    return isOpen ? <Player /> : <ButtonOpenPlayer />;
};
export default VideoPlayer;
