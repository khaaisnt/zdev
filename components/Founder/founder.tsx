import Image from "next/image"

const founders = [
  {
    name: "Ahmad Haidar E.",
    role: "UI/UX Designer",
    image: "/Haidar.jpg",
  },
  {
    name: "Rizq Valeant S.",
    role: "Team Leader",
    image: "/Valen.jpg",
  },
  {
    name: "Moh. Abdul Aziz",
    role: "Graphic Designer",
    image: "/Azizpp.jpg",
  },
  {
    name: "Yahya Az-Zyahabi",
    role: "BackEnd Developer",
    image: "/Yahya.jpg",
  },
  {
    name: "Rakha Adrian",
    role: "FrontEnd Developer",
    image: "/Rakha.jpg",
  },
  {
    name: "Shofiyulloh Kamil",
    role: "Machine Learning Engineer",
    image: "/Kale.jpg",
  },
]

export default function FounderSection() {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Meet Our Founders</h2>
          <p className="text-gray-700 text-lg">
            Bertemu dengan para founder Z Developer yang berpengalaman di bidang teknologi dan memiliki passion dalam
            pengembangan website.
          </p>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {founders.map((founder, index) => (
            <div key={index} className="relative group">
              {/* Card for name and role */}
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <div className="bg-white/90 backdrop-blur-sm border rounded-lg p-4 shadow-lg">
                  <h3 className="text-xl font-semibold text-primary">{founder.name}</h3>
                  <p className="text-gray-600">{founder.role}</p>
                </div>
              </div>

              {/* Image Container */}
              <div className="rounded-2xl border border-gray-200 overflow-hidden">
                <div className="relative aspect-[4/4] overflow-hidden">
                  <Image
                    src={founder.image || "/placeholder.svg"}
                    alt={founder.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

