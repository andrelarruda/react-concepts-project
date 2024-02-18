import { useState } from 'react';
import './styles.css';
import { useEffect } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';

export default function ImageSlider({ url, limit, page = 1 }) {
    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(false);

    async function fetchImages(getUrl) {
        try {
            setLoading(true);
            const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
            const data = await response.json();

            if (data) {
                setImages(data);
                setLoading(false);
            }

        } catch (e) {
            setErrorMsg(e.message);
            setLoading(false);
        }

    }

    function handlePrevious() {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
        console.log(currentSlide)
    }

    function handleNext() {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
        console.log(currentSlide)
    }

    useEffect(() => {
        if (url !== '') fetchImages(url);
    }, [url]);

    if (loading) {
        return <div>Loading data! Please wait.</div>
    }

    if (errorMsg !== null) {
        return <div>Error occurred! {errorMsg}</div>
    }

    return (
        <div className='container'>
            <BsArrowLeftCircleFill className='arrow arrow-left' onClick={() => handlePrevious()} />
            {
                images && images.length
                    ? images.map((imageItem, index) => (
                        <img
                            key={imageItem.id}
                            alt={imageItem.download_url}
                            src={imageItem.download_url}
                            className={currentSlide === index ? "current-image" : "current-image hide-current-image"}
                        />
                    ))
                    : null
            }
            <BsArrowRightCircleFill className='arrow arrow-right' onClick={() => handleNext()} />
            <span className='circle-indicators'>
                {
                    images && images.length ?
                        images.map((_, index) => <button
                            key={index}
                            className={currentSlide === index ? "current-indicator" : "current-indicator inactive-indicator"}
                            onClick={() => setCurrentSlide(index)}></button>) : null
                }
            </span>
        </div>
    );
}