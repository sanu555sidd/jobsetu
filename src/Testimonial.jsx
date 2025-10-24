import React from "react";
import Slider from "react-slick";
import { Star } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Rahul Sharma",
    photo: "https://i.pravatar.cc/100?img=1",
    rating: 5,
    comment: "JobSetu made it super easy for me to find reliable job opportunities. Highly recommend!"
  },
  {
    name: "Priya Verma",
    photo: "https://i.pravatar.cc/100?img=2",
    rating: 4,
    comment: "Great platform for both job seekers and employers. Very user-friendly interface."
  },
  {
    name: "Amit Singh",
    photo: "https://i.pravatar.cc/100?img=3",
    rating: 5,
    comment: "I found a driver for my family within a day! JobSetu is a game-changer."
  },
  {
    name: "Neha Kapoor",
    photo: "https://i.pravatar.cc/100?img=4",
    rating: 5,
    comment: "The best place to connect with helpers and skilled workers. Smooth experience!"
  }
];

const TestimonialCard = ({ name, photo, rating, comment }) => (
  <div className="bg-white shadow-md rounded-2xl p-6 max-w-sm text-center mx-auto">
    <img
      src={photo}
      alt={name}
      className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-blue-200"
    />
    <h3 className="text-lg font-semibold mb-2">{name}</h3>
    <div className="flex justify-center mb-3">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${
            i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
    <p className="text-gray-600 italic">"{comment}"</p>
  </div>
);

export default function TestimonialsCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <div className="bg-gray-50 py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">
        What People Say About <span className="text-blue-600">JobSetu</span>
      </h2>
      <div className="max-w-5xl mx-auto">
        <Slider {...settings}>
          {testimonials.map((t, idx) => (
            <div key={idx} className="px-4">
              <TestimonialCard {...t} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
