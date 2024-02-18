import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './styles.css';

export default function StarRating({noOfStars = 5}) {

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function handleClick(currentIndex) {
        if (currentIndex != rating) {
            setRating(currentIndex);
        } else {
            setRating(0);
        }
    }

    function handleMouseEnter(currentIndex) {
        setHover(currentIndex);
    }

    function handleMouseLeave() {
        setHover(0);
    }

    return (
        <div className="star-rating">
            {
                [...Array(noOfStars)].map((_, index) => {
                    index += 1;

                    return <FaStar 
                    key={index}
                    className={index <= (hover || rating) ? 'active' : 'inactive'}
                    onClick={() => handleClick(index)}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave()}
                    size={40}
                    />
                })
            }
        </div>
    );
};