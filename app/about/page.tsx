import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=1600&h=900&fit=crop')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/90 to-amber-700/80"></div>
        </div>
        
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
              Our Story
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              Young entrepreneurs bringing quality coffee to UNIVEN
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">The Beginning of Coffee Haven</h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
          </div>

          <div className="prose prose-lg mx-auto mb-12">
            <p className="text-gray-700 leading-relaxed mb-6">
              Coffee Haven Limpopo was born from a simple dream shared by two University of Venda alumni: 
              to create a space where students could find not just great coffee, but a home away from home. 
              In 2022, <strong>Kharendwe Mambani</strong> and <strong>Lufuno Nekhumbe</strong>, both passionate 
              about entrepreneurship and their community, decided to transform this dream into reality.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Having experienced the challenges of student life firsthand, they understood the need for an 
              affordable, comfortable space where students could study, socialize, and refuel. What started 
              as conversations over countless cups of coffee during their final year evolved into a 
              comprehensive business plan that would serve the UNIVEN community.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Today, Coffee Haven stands as a testament to young, black entrepreneurship in Venda. We're 
              proud to be 100% black-owned and operated, providing employment to local youth while serving 
              the best coffee in Thohoyandou.
            </p>
          </div>

          {/* Founders Section */}
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 text-center transform hover:scale-105 transition-all duration-300">
              <div className="w-32 h-32 bg-amber-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-4xl text-white font-bold">KM</span>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Kharendwe Mambani</h3>
              <p className="text-amber-700 font-semibold mb-4">Co-Founder & CEO</p>
              <p className="text-gray-700">
                A visionary entrepreneur with a passion for community development. Kharendwe believes in 
                creating opportunities for young people in Venda through sustainable business practices.
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 text-center transform hover:scale-105 transition-all duration-300">
              <div className="w-32 h-32 bg-amber-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-4xl text-white font-bold">LN</span>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Lufuno Nekhumbe</h3>
              <p className="text-amber-700 font-semibold mb-4">Co-Founder & COO</p>
              <p className="text-gray-700">
                With a background in hospitality and a love for coffee culture, Lufuno ensures every 
                cup served meets the highest standards while maintaining student-friendly prices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gradient-to-br from-amber-900 to-amber-800 text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-amber-100 text-lg">What drives us every day</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Community First</h3>
              <p className="text-amber-100">
                Supporting local suppliers and creating jobs for Venda youth
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">📚</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Student Success</h3>
              <p className="text-amber-100">
                Providing an environment conducive to learning and growth
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">☕</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Quality & Value</h3>
              <p className="text-amber-100">
                Premium coffee at prices that respect student budgets
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Experience Coffee Haven Today</h2>
          <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
            Join us for a cup of coffee and become part of our growing family. 
            We're more than just a coffee shop – we're a community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#menu" className="bg-amber-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-700 transition-colors transform hover:scale-105">
              View Our Menu
            </Link>
            <Link href="/#contact" className="bg-white border-2 border-amber-600 text-amber-600 px-8 py-3 rounded-full font-semibold hover:bg-amber-50 transition-colors transform hover:scale-105">
              Visit Us Today
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}