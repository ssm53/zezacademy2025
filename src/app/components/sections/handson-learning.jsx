import Marquee from "react-fast-marquee";

const logos = [
  "/css3.svg",
  "/github.svg",
  "/graphql.svg",
  "/pinia.svg",
  "/psql.svg",
  "/react.svg",
  "/sequelize.svg",
  "/svelte.svg",
  "/psql.svg",
  "/react.svg",
  "/css3.svg",
  "/github.svg",
  "/graphql.svg",
  "/pinia.svg",
  "/psql.svg",
  "/react.svg",
  "/sequelize.svg",
  "/svelte.svg",
  "/psql.svg",
  "/react.svg",
  "/css3.svg",
  "/github.svg",
  "/graphql.svg",
  "/pinia.svg",
  "/psql.svg",
  "/react.svg",
  "/sequelize.svg",
  "/svelte.svg",
  "/psql.svg",
  "/react.svg",
];

const HandsOnLearning = () => {
  return (
    <section className="bg-lightBlue py-16">
      <div className="text-center text-white mb-8 px-4">
        <h2 className="text-4xl font-bold">A Hands-On Approach To Learning</h2>
        <p className="text-lg mt-4 max-w-xl mx-auto">
          This is not another theory-heavy course. We focus on doing. You'll
          build real projects, get feedback, and learn by doing.
        </p>
      </div>

      <div className="overflow-hidden">
        <Marquee gradient={false} speed={40} pauseOnHover={false}>
          <div className="flex space-x-8 px-8">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center bg-white rounded-lg p-4 shadow-lg"
                style={{ width: "100px", height: "100px" }}
              >
                <img
                  src={logo}
                  alt={`Logo ${index}`}
                  className="h-full w-full object-contain"
                />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default HandsOnLearning;
