import Image from "next/image";

const WatchMore = () => {
  return (
    <section className="bg-[#132647] py-12 px-4">
      <div className="max-w-[1200px] mx-auto text-center">
        <h2 className=" text-3xl font-bold text-white mb-6">
          Watch and Discover More <br />
          <span className="text-white">
            About <span className="text-secondary">Hey</span>
            <span className="text-white">Learn</span>
            <span className="text-secondary">2</span>
            <span className="text-white">Code</span>
          </span>
        </h2>

        {/* Embedded YouTube Video */}
        <div className="  relative flex justify-center">
          <iframe
            className="rounded-lg w-full max-w-[997px] h-[689px]"
            src="https://www.youtube.com/embed/HF0iqQ2ZzFU"
            title="HeyLearn2Code Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Contact Info */}
        <div className="flex md:flex-row flex-col md:justify-between justify-center items-center md:items-end">
          <div className="mt-8 text-white  gap-8">
            <div className="flex items-center py-4">
              <Image src="/mailbox.svg" alt="Email" width={30} height={30} />
              <a
                href="mailto:shaun@heylearn2code.com"
                className="ml-2 underline text-lg"
              >
                shaun@heylearn2code.com
              </a>
            </div>
            <div className="flex items-center">
              <Image src="/phone.svg" alt="Phone" width={30} height={30} />
              <p className="ml-2 text-lg">+6 012 339 7028</p>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="mt-8 flex flex-row justify-center sm:gap-6 gap-4">
            <a href="#" className="text-white">
              <Image src="/li.svg" alt="LinkedIn" width={32} height={32} />
            </a>
            <a href="#" className="text-white">
              <Image src="/insta.svg" alt="Instagram" width={32} height={32} />
            </a>
            <a href="#" className="text-white">
              <Image src="/tw.svg" alt="Twitter" width={32} height={32} />
            </a>
            <a href="#" className="text-white">
              <Image src="/yt.svg" alt="YouTube" width={32} height={32} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <p className="mt-6 text-white text-sm">
          © 2024 HeyLearn2Code. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default WatchMore;
