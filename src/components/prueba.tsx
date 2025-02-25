import Image from "next/image";

export default function Prueba() {
  return (
    <section className="bg-gray-100 py-8 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 font-sans mb-4">Discover Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 shadow-md rounded-md">
            <Image
              src="/1.jpeg"
              alt="Feature 1"
              width={1200}
              height={800}
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-700 font-sans mb-2">Feature One</h3>
            <p className="text-gray-600 font-sans">Explore the amazing feature one that enhances your experience.</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-md">
            <Image
              src="/2.jpeg"
              alt="Feature 2"
              width={1200}
              height={800}
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-700 font-sans mb-2">Feature Two</h3>
            <p className="text-gray-600 font-sans">Discover how feature two can be beneficial for you.</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-md">
            <Image
              src="/3.jpeg"
              alt="Feature 3"
              width={1200}
              height={800}
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-700 font-sans mb-2">Feature Three</h3>
            <p className="text-gray-600 font-sans">Learn more about feature three and its advantages.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
