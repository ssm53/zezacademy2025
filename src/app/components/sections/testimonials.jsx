const testimonials = [
  {
    name: "Chris Do",
    feedback:
      "Lorem ipsum dolor amet consectetur pellentesque scelerisque fermentum bibendum ipsum massa cursus aliquet feugiat.",
    image: "/path-to-image.jpg", // Replace with actual image path or URL
    rating: 4,
  },
  {
    name: "Kris Steigerwald",
    feedback:
      "Lorem ipsum dolor amet consectetur pellentesque scelerisque fermentum bibendum ipsum massa cursus aliquet feugiat.",
    image: "/path-to-image.jpg",
    rating: 4,
  },
  {
    name: "Aliya M.",
    feedback:
      "Lorem ipsum dolor amet consectetur pellentesque scelerisque fermentum bibendum ipsum massa cursus aliquet feugiat.",
    image: "/path-to-image.jpg",
    rating: 5,
  },
  {
    name: "Hussain K.",
    feedback:
      "Lorem ipsum dolor amet consectetur pellentesque scelerisque fermentum bibendum ipsum massa cursus aliquet feugiat.",
    image: "/path-to-image.jpg",
    rating: 4,
  },
  {
    name: "Denial S.",
    feedback:
      "Lorem ipsum dolor amet consectetur pellentesque scelerisque fermentum bibendum ipsum massa cursus aliquet feugiat.",
    image: "/path-to-image.jpg",
    rating: 5,
  },
  {
    name: "Rahul Sharma",
    feedback:
      "Lorem ipsum dolor amet consectetur pellentesque scelerisque fermentum bibendum ipsum massa cursus aliquet feugiat.",
    image: "/path-to-image.jpg",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className=" px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-6">
        What Our Students Are Saying
      </h2>
      <p className="text-lg text-center text-gray-600 mb-12">
        Real experiences, real results. Hear from students who have transformed
        their careers with our bootcamp.
      </p>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-6 shadow-md rounded-md text-center"
          >
            <div className="text-5xl text-blue-500 mb-4">“</div>
            <p className="text-gray-600 mb-6">{testimonial.feedback}</p>
            <div className="flex items-center justify-center mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p className="font-bold">{testimonial.name}</p>
                <div className="flex">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                  {Array.from({ length: 5 - testimonial.rating }).map(
                    (_, i) => (
                      <span key={i} className="text-gray-300">
                        ★
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
