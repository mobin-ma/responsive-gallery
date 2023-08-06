import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhotos } from '../redux/featuers/photosSlice';
import Image from './Image';
import Loader from './Loader';
import Error from './Error';

const Gallery = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.photos.data);
    const loading = useSelector((state) => state.photos.loading);
    const error = useSelector((state) => state.photos.error);

    useEffect(() => {
        dispatch(fetchPhotos())
    }, [dispatch])

    // Error section
    if (error) {
        return <Error error={error} />;
    }

    return (
        <div id='gallery' className='w-full relative mt-5 columns-2 gap-4 space-y-4 md:columns-3 md:gap-5 md:space-y-5 p-5'>
            {
                loading ? <Loader /> : data.map((photo) => <Image key={photo.id} image={photo} />)
            }
        </div>
    )
}

export default Gallery