import Image from "next/image";

const Testimonials = () => {
    return (
        <section className="py-10 bg-gray-100 dark:bg-gray-900 sm:py-16 lg:py-24">
            <div className="px-4 mx-auto container sm:px-6 lg:px-8">
                <div className=" text-start">
                    <h2 className="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl">
                        What our customers say
                    </h2>
                    <p className=" mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-300">
                        Hear from our happy clients about their experience with us.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 px-4 mt-12 sm:px-0 xl:mt-20 xl:grid-cols-4 sm:grid-cols-2">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="overflow-hidden bg-white dark:bg-gray-800 rounded-md">
                            <div className="px-5 py-6">
                                <div className="flex items-center justify-between">
                                    <Image
                                    width={100}
                                    height={100}
                                        className="flex-shrink-0 object-cover w-10 h-10 rounded-full"
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                    />
                                    <div className="min-w-0 ml-3 mr-auto">
                                        <p className="text-base font-semibold text-black dark:text-white truncate">
                                            {testimonial.name}
                                        </p>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                                            @{testimonial.username}
                                        </p>
                                    </div>
                                    <a href="#" className="inline-block text-sky-500">
                                        <svg
                                            className="w-6 h-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                        >
                                            <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z" />
                                        </svg>
                                    </a>
                                </div>
                                <blockquote className="mt-5">
                                    <p className="text-base text-gray-800 dark:text-gray-300">
                                        {testimonial.feedback}
                                        <span className="block text-sky-500">{testimonial.hashtag}</span>
                                    </p>
                                </blockquote>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const testimonials = [
    {
        name: "Darrell Steward",
        username: "darrels",
        image: "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-1.jpg",
        feedback: "You made it so simple. My new site is so much faster and easier to work with than my old site.",
        hashtag: "#another",
    },
    {
        name: "Leslie Alexander",
        username: "lesslie",
        image: "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-2.jpg",
        feedback: "Simply the best. Better than all the rest. I’d recommend this product to everyone!",
        hashtag: "#Celebration",
    },
    {
        name: "Jenny Wilson",
        username: "jennywilson",
        image: "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-3.jpg",
        feedback: "This is a top quality product. No need to think twice before making it live on the web.",
        hashtag: "#make_it_fast",
    },
    {
        name: "Kristin Watson",
        username: "kristinwatson2",
        image: "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-4.jpg",
        feedback: "Finally, I’ve found a template that covers all bases for a bootstrapped startup.",
        hashtag: "#Celebration",
    },
];

export default Testimonials;
