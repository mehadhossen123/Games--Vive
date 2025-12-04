import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';

const Review = () => {
    const[reviews,setReviews]=useState([])
   
     useEffect(() => {
       fetch("/review.json")
         .then((res) => res.json())
         .then((response) => {
           setReviews(response);
         });
     }, []);




   
   
    return (
      <div>
        <h1 className="text-3xl font-bold text-center my-5">
          What Our User Says
        </h1>
        <div>
          <Marquee pauseOnHover={true}>
            {reviews.map((re) => (
              <div class=" rounded-lg shadow-lg mx-5 p-4 max-w-md bg-gray-200  my-10">
                <div class="text-teal-600 text-4xl mb-4">“</div>

                <p class="text-gray-700 leading-relaxed mb-4 font-bold">
                  {re.review}
                </p>

                <div class="border-t border-dashed border-gray-300 mb-4"></div>

                <div class="flex items-center gap-3">
                  <img
                    src={re?.user_photoURL}
                    alt="Emma Brown"
                    class="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 class="font-semibold text-gray-900">{re.userName}</h4>
                    <p class="text-gray-500 text-sm">Player</p>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    );
};

export default Review;