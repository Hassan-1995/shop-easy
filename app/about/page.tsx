import Link from "next/link";

const AboutUsPage = () => {
  return (
    <div className="bg-white text-emerald-900">
      <section className="border-b text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl italic text-emerald-900 font-bold mb-4">
          Gravitee
        </h1>
        <p className="text-lg md:text-2xl text-amber-400">
          Elevate Your Wardrobe with Gravitee
        </p>
      </section>

      <section className="py-12 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4 border-b-4 border-amber-400 inline-block pb-1">
          Our Story
        </h2>
        <p className="mt-4 text-lg leading-relaxed">
          At Gravitee, fashion is more than just clothing — it’s a lifestyle. We
          launched our brand with one goal in mind: to provide high-quality,
          stylish, and comfortable shirts and trousers for everyone. Whether
          you&apos;re dressing for a casual day out or a formal event, Gravitee
          offers versatile styles that speak to your personality. We are
          passionate about combining timeless fashion with contemporary trends
          to bring you the very best.
        </p>
      </section>

      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8 border-b-4 border-amber-400 inline-block pb-1">
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Quality</h3>
              <p>
                We use premium fabrics to ensure comfort and durability in every
                product.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Style</h3>
              <p>
                From classic to modern, our styles are designed to fit every
                taste.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Inclusivity</h3>
              <p>
                We design for everyone — all genders, all sizes, all styles.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 space-x-2 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Ready to Refresh Your Style?
        </h2>
        <Link href="/shirts">
          <p className="inline-block bg-amber-400 text-emerald-900 font-semibold py-3 px-6 rounded-full shadow-md hover:bg-amber-300 transition">
            Buy Shirt Now
          </p>
        </Link>
        <Link href="/trousers">
          <p className="inline-block bg-amber-400 text-emerald-900 font-semibold py-3 px-6 rounded-full shadow-md hover:bg-amber-300 transition">
            Buy Trouser Now
          </p>
        </Link>
      </section>

      <section className="py-12 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4 border-b-4 border-amber-400 inline-block pb-1">
          Meet the Founder
        </h2>
        <p className="mt-4 text-lg">
          Gravitee was founded by a group of fashion enthusiasts with a vision
          to redefine wardrobe essentials. With a background in textile design
          and a passion for timeless fashion, we set out to build a brand that
          delivers value, quality, and confidence in every outfit.
        </p>
      </section>
    </div>
  );
};

export default AboutUsPage;
