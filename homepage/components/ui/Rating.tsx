import React from 'react'
import { FaStar } from 'react-icons/fa'

interface StarRatingProps {
  rating: number
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const stars = [1, 2, 3, 4, 5]

  return (
    <div className="flex">
      {stars.map((star) => (
        <FaStar
          key={star}
          className={`h-3 w-3 ${
            star <= rating ? 'text-yellow-500' : 'text-gray-300'
          }`}
          aria-hidden="true"
        />
      ))}
    </div>
  )
}

export default StarRating
