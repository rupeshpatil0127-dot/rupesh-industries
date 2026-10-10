import Navbar from './components/Navbar';
import Header from './components/Header';
import SectionTitle from './components/SectionTitle';

const services = [
  {
    title: 'Structural fabrication',
    description: 'Custom steel frames, equipment supports, platforms and utility structures engineered for durability and precision.',
  },
  {
    title: 'Industrial civil works',
    description: 'Foundations, flooring, drainage and plant infrastructure delivered to specification and on schedule.',
  },
  {
    title: 'Site supervision',
    description: 'Hands-on project oversight that keeps installation quality, safety and progress in alignment with your plan.',
  },
];

const process = [
  { number: '01', title: 'Consultation', description: 'We understand your facility requirements, constraints and urgent priorities.' },
  { number: '02', title: 'Planning', description: 'Our team maps the work scope, sequencing and safety controls before execution begins.' },
  { number: '03', title: 'Execution', description: 'Skilled crews complete fabrication, installation and finishing with quality checks throughout.' },
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <Header />

      <main className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <section id="services" className="py-8">
          <SectionTitle
            eyebrow="Our strengths"
            title="Industrial solutions shaped around performance."
            description="We combine fabrication expertise, civil execution and project oversight to help facilities stay productive and compliant."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-lg font-black text-sky-700">
                  {service.title.charAt(0)}
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-slate-900">{service.title}</h3>
                <p className="mt-4 text-base leading-7 text-slate-600">{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="process" className="py-20">
          <SectionTitle
            eyebrow="How we work"
            title="A clear process that keeps every phase moving."
            description="Our workflow is designed to reduce surprises, protect safety and give clients visibility at every milestone."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {process.map((step) => (
              <div key={step.number} className="rounded-3xl border border-slate-200 bg-slate-900 p-6 text-white shadow-lg shadow-slate-200/60">
                <span className="inline-flex rounded-full bg-sky-500/15 px-3 py-1 text-sm font-semibold text-sky-300">
                  {step.number}
                </span>
                <h3 className="mt-5 text-2xl font-bold">{step.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-300">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="grid gap-8 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:grid-cols-[1fr_1.1fr] lg:p-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-sky-700">Why clients choose us</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              Reliable execution from planning through handover.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-7 text-slate-600">
            <p>
              We partner with factories, plants and commercial facilities that need dependable execution and practical project leadership.
            </p>
            <p>
              Whether your priority is structural integrity, clean site delivery or rapid maintenance support, our team focuses on quality, schedule discipline and safe operations.
            </p>
          </div>
        </section>

        <section id="contact" className="pt-20">
          <div className="rounded-[2rem] bg-slate-900 px-6 py-12 text-center text-white shadow-xl shadow-slate-300/60 sm:px-10">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-sky-300">Let’s talk</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
              Need a trusted partner for your next project?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300">
              Share your requirements and we’ll help you plan the right solution for quality, timing and site safety.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:hello@rupeshindustries.com"
                className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
              >
                hello@rupeshindustries.com
              </a>
              <a
                href="tel:+917057907579"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                +91 70579 07579
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
