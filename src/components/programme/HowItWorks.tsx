import Photo from "@/components/shared/Photo";
import { steps } from "@/data/programme";

export default function HowItWorks() {
  return (
    <ol className="grid gap-12 md:grid-cols-3 md:gap-8">
      {steps.map((step, i) => (
        <li key={step.title}>
          <Photo photo={step.photo} ratio="4/3" sizes="(max-width: 768px) 100vw, 33vw" />
          <div className="mt-6 flex gap-4">
            <span
              className="tabular font-display text-[2rem] font-semibold leading-none text-green-900/20"
              aria-hidden="true"
            >
              {i + 1}
            </span>
            <div>
              <h3 className="text-[1.375rem] leading-snug">{step.title}</h3>
              <p className="mt-3 text-muted">{step.body}</p>
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}
