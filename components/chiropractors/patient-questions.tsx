import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";

const QUESTIONS = [
  {
    question: "Why should I trust this practice?",
    body: "Credibility comes through clearly: doctor information, experience, credentials, reviews, and a presentation that matches the quality of the care.",
  },
  {
    question: "Can this practice help with what I’m dealing with?",
    body: "Services and condition information are easy to find, easy to understand, and easy to navigate.",
  },
  {
    question: "What happens if I become a patient?",
    body: "The first-visit and new-patient process is explained, which removes a lot of the uncertainty that keeps people from booking.",
  },
  {
    question: "How do I schedule?",
    body: "The next step is obvious on every page, without forcing a visitor to hunt for a phone number or a booking link.",
  },
  {
    question: "Does the experience work on my phone?",
    body: "Mobile is treated as the primary experience rather than a scaled-down version of the desktop site.",
  },
  {
    question: "Can the practice tell what is working?",
    body: "Important actions are measurable, so the business can understand how the website contributes to inquiries and appointments.",
  },
];

export function PatientQuestions() {
  return (
    <section className="border-b border-border">
      <Container className="py-16 sm:py-20 lg:py-24">
        <SectionHeading
          title="A strong chiropractic website should answer a few questions quickly."
          lead="Most of these are decided in the first minute, often on a phone, before anyone contacts the practice."
        />

        <ul className="mt-12 grid border-t border-border sm:mt-14 sm:grid-cols-2">
          {QUESTIONS.map((item) => (
            <li
              key={item.question}
              className="border-b border-border py-8 sm:py-10 sm:odd:pr-10 sm:even:border-l sm:even:pl-10"
            >
              <h3 className="mt-5 text-title font-semibold text-foreground">
                {item.question}
              </h3>
              <p className="mt-3 max-w-md leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
