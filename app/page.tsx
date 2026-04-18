export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">

      {/* HERO SECTION */}
      <section className="text-center py-24 px-6 bg-white">
        <h1 className="text-5xl font-bold mb-6">
          Journey of Believers
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          A community driven by faith, compassion, and action—empowering lives,
          spreading hope, and making a meaningful impact across communities.
        </p>

        <div className="flex justify-center gap-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold">
            Donate
          </button>
          <button className="bg-gray-200 px-6 py-3 rounded-lg font-semibold">
            Join Us
          </button>
        </div>
      </section>

      {/* MISSION STATEMENT */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">Our Mission</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-700">
          Our mission is to inspire and support individuals on their spiritual journey,
          while actively serving communities through outreach programs, education,
          and humanitarian initiatives. We believe in unity, faith in action, and
          creating lasting positive change.
        </p>
      </section>

      {/* FEATURED ACTIVITIES */}
      <section className="py-20 px-6 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Featured Activities
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-50 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-2">Community Outreach</h3>
            <p>
              Supporting vulnerable communities through food drives,
              mentorship, and local initiatives.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-2">Youth Programs</h3>
            <p>
              Empowering young people with guidance, education, and
              spiritual development opportunities.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-2">Faith & Fellowship</h3>
            <p>
              Bringing people together through events, teachings,
              and shared spiritual experiences.
            </p>
          </div>
        </div>
      </section>

      {/* IMPACT SECTION (Important for trust) */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-10">Our Impact</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-4xl font-bold text-blue-600">500+</h3>
            <p className="mt-2">Lives Impacted</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-blue-600">50+</h3>
            <p className="mt-2">Volunteers</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-blue-600">20+</h3>
            <p className="mt-2">Programs Conducted</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-6 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-10">
          What People Say
        </h2>

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg italic">
            “Journey of Believers has transformed my life. The sense of
            community and purpose I found here is truly inspiring.”
          </p>
          <p className="mt-4 font-semibold">— Community Member</p>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-24 px-6 text-center bg-blue-600 text-white">
        <h2 className="text-3xl font-bold mb-4">
          Be Part of the Journey
        </h2>
        <p className="mb-8 text-lg">
          Your support helps us reach more people and create lasting change.
        </p>

        <div className="flex justify-center gap-4">
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold">
            Donate Now
          </button>
          <button className="bg-gray-200 text-black px-6 py-3 rounded-lg font-semibold">
            Become a Volunteer
          </button>
        </div>
      </section>

    </main>
  );
}