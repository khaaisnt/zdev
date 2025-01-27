"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Berapa biaya untuk layanan pembuatan website atau desain grafis?",
    answer:
      "Biaya bervariasi tergantung kebutuhan proyek. Kami menawarkan paket custom yang disesuaikan dengan anggaran dan tujuan bisnis Anda. Hubungi kami untuk konsultasi gratis dan penawaran harga yang transparan!",
  },
  {
    question: "Apa saja layanan yang ditawarkan Z Developer?",
    answer:
      "Z Developer menyediakan layanan lengkap meliputi pembuatan website, desain grafis (logo, banner, brosur), dan desain UI/UX untuk aplikasi atau website. Kami juga menawarkan optimasi SEO dan maintenance website.",
  },
  {
    question: "Berapa lama proses pengerjaan sebuah website atau desain?",
    answer:
      "Waktu pengerjaan bervariasi tergantung kompleksitas proyek. Untuk landing page, biasanya memakan waktu 2-7 hari, sedangkan desain grafis atau UI/UX dapat diselesaikan dalam 1-2 minggu. Kami selalu berusaha memberikan hasil terbaik tanpa mengorbankan kualitas.",
  },
  {
    question: "Apakah website yang dibuat responsif dan mobile-friendly?",
    answer:
      "Tentu! Semua website yang kami buat dirancang responsif, artinya tampilan akan menyesuaikan dengan berbagai perangkat, termasuk desktop, tablet, dan smartphone, untuk pengalaman pengguna yang optimal.",
  },
  {
    question: "Bagaimana dengan revisi desain?",
    answer:
      "Kami menyediakan revisi desain hingga 3 kali untuk memastikan hasil sesuai dengan ekspektasi Anda. Tim kami akan bekerja sama dengan Anda hingga Anda puas dengan hasilnya.",
  },
  {
    question: "Apakah Z Developer menyediakan layanan maintenance setelah website selesai?",
    answer:
      "Ya, kami menawarkan layanan maintenance berkala, termasuk update konten, backup data, dan perbaikan teknis, untuk memastikan website Anda selalu berjalan lancar.",
  },
]

export default function FAQSection() {
  const midPoint = Math.ceil(faqs.length / 2)
  const leftColumnFaqs = faqs.slice(0, midPoint)
  const rightColumnFaqs = faqs.slice(midPoint)

  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">FAQs</h2>
          <h3 className="text-2xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h3>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Column */}
            <div>
              <Accordion type="single" collapsible className="space-y-4">
                {leftColumnFaqs.map((faq, index) => (
                  <AccordionItem
                    key={`left-${index}`}
                    value={`item-left-${index}`}
                    className="bg-white rounded-lg border px-4"
                  >
                    <AccordionTrigger className="text-left font-medium py-4 text-base hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 text-base pb-4">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Right Column */}
            <div>
              <Accordion type="single" collapsible className="space-y-4">
                {rightColumnFaqs.map((faq, index) => (
                  <AccordionItem
                    key={`right-${index}`}
                    value={`item-right-${index}`}
                    className="bg-white rounded-lg border px-4"
                  >
                    <AccordionTrigger className="text-left font-medium py-4 text-base hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 text-base pb-4">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
