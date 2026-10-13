const questions = [
  {
    question: 'How long does a Nutec or Wendy house take to build?',
    answer:
      'Build time depends on the size, design, and site conditions. Share your requirements with us and we will discuss a suitable timeline when preparing your quote.',
  },
  {
    question: 'What affects the price of a house?',
    answer:
      'The size, materials, roof type, finishes, and any additional services affect the final price. The price guide gives starting prices; contact us for a quote tailored to your project.',
  },
  {
    question: 'Can you handle other work as part of my project?',
    answer:
      'Yes. We also provide plumbing, electrical, flooring, painting, and paving services in addition to Nutec and Wendy house construction.',
  },
  {
    question: 'Which areas do you serve?',
    answer:
      'We work in Cape Town and across the Western Cape. Contact us with your town or city to confirm service availability for your project.',
  },
];

export default function FAQ() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.35em] text-brand-green">
          FAQ
        </p>
        <h2 id="faq-heading" className="mb-10 text-center text-3xl font-bold text-brand-charcoal md:text-4xl">
          Common questions
        </h2>
        <div className="divide-y divide-brand-line border-y border-brand-line">
          {questions.map(({ question, answer }) => (
            <details key={question} className="group py-5">
              <summary className="cursor-pointer list-none pr-8 text-lg font-semibold text-brand-charcoal marker:content-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-green">
                {question}
              </summary>
              <p className="mt-3 leading-relaxed text-brand-charcoal/75">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
