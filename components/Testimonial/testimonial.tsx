"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Mario Achmad Taufik",
    comment: "Website yang dihasilkan sangat sesuai dengan kebutuhan bisnis saya. Terima kasih Z Developer!",
    role: "Pengusaha UMKM"
  },
  {
    name: "Reza Fahlevi",
    comment: "Proses pengerjaan cepat dan komunikasi yang sangat baik. Hasil desainnya memuaskan!",
    role: "Startup Founder"
  },
  {
    name: "Justine Hezekiel Ramli",
    comment: "Sangat puas dengan layanan maintenance website yang diberikan. Respon cepat dan solusi tepat.",
    role: "Marketing Manager"
  },
  {
    name: "Eep Syaiful Nurohman",
    comment: "Website responsif dan loading cepat. SEO nya juga bagus, traffic organik meningkat signifikan.",
    role: "Business Owner"
  },
  {
    name: "Satrio Adi Prakoso",
    comment: "Desain UI/UX yang modern dan user-friendly. Pengerjaan sesuai timeline yang dijanjikan.",
    role: "Product Manager"
  },
]

export default function TestimonialSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  )

  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Testimonial
          </h2>
          <p className="text-gray-700 text-lg">
            Kami percaya bahwa pengalaman terbaik datang dari client yang telah menggunakan jasa Z Developer.
          </p>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
        </div>

        <div className="w-full mx-auto">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            plugins={[plugin.current]}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="bg-slate-50">
                    <CardContent className="p-6">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-primary text-xl font-bold">
                            {testimonial.name.charAt(0)}
                          </span>
                        </div>
                        <blockquote className="text-gray-700 text-lg mb-4">
                            &quot;{testimonial.comment}&quot;
                        </blockquote>
                        <div className="space-y-1">
                          <h3 className="text-primary font-semibold">
                            {testimonial.name}
                          </h3>
                          <p className="text-gray-500 text-sm">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  )
}
