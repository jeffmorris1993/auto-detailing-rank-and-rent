import type { FAQ } from "@/lib/pages";

type FAQSectionProps = {
  faqs: FAQ[];
  heading?: string;
  intro?: string;
  id?: string;
};

export function FAQSection({
  faqs,
  heading = "Frequently asked questions",
  intro,
  id = "faq",
}: FAQSectionProps) {
  return (
    <section id={id} className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {heading}
        </h2>
        {intro && <p className="mt-3 text-lg text-slate-600">{intro}</p>}

        <dl className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
          {faqs.map((faq) => (
            <div key={faq.question} className="py-6">
              <dt>
                <h3 className="text-lg font-semibold text-slate-900">
                  {faq.question}
                </h3>
              </dt>
              <dd className="mt-2 text-base leading-relaxed text-slate-700">
                {faq.answer}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
