import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

const features = [
  "Premium Workstations",
  "Private Executive Cabins",
  "Meeting & Conference Rooms",
  "High-Speed Internet",
  "Unlimited Tea & Coffee",
  "24×7 Secure Access",
];

export default function AboutContent() {
  return (
    <div className="max-w-xl">

      {/* Small Label */}

      <div className="mb-8 flex items-center gap-4">

        <span className="h-px w-14 bg-[#C8A96A]" />

        <span className="text-xs font-semibold uppercase tracking-[6px] text-[#C8A96A]">
          About Mannat
        </span>

      </div>

      {/* Heading */}

      <h2 className="font-serif text-5xl leading-[1.05] text-[#1A1A1A] lg:text-7xl">

        A Workspace
        <br />

        <span className="text-[#0F4C45]">
          Designed To
        </span>

        <br />

        Inspire Success.

      </h2>

      {/* Description */}

      <p className="mt-8 text-lg leading-9 text-[#5F6368]">

        At Mannat Coworking, every detail is thoughtfully
        designed to help professionals, startups, freelancers,
        and growing businesses work smarter in an inspiring,
        elegant, and productivity-focused environment.

      </p>

      {/* Features */}

      <div className="mt-12 grid grid-cols-2 gap-y-6 gap-x-10">

        {features.map((feature) => (

          <div
            key={feature}
            className="flex items-center gap-3"
          >

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0F4C45]/10">

              <Check
                size={18}
                className="text-[#0F4C45]"
              />

            </div>

            <span className="text-[16px] font-medium text-[#1A1A1A]">

              {feature}

            </span>

          </div>

        ))}

      </div>

      {/* CTA */}

      <div className="mt-14 flex gap-5">
  <Link
    href="/contact"
    className="inline-flex items-center rounded-xl bg-[#0F4C45] px-8 py-4 text-sm font-semibold uppercase tracking-[2px] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#0A3D37] hover:shadow-xl"
  >
    Book A Visit
  </Link>

  <Link
    href="/gallery"
    className="inline-flex items-center gap-2 rounded-xl border border-[#C8A96A] px-8 py-4 text-sm font-semibold uppercase tracking-[2px] text-[#1A1A1A] transition-all duration-300 hover:bg-[#C8A96A] hover:text-white"
  >
    Explore Space
    <ArrowRight size={18} />
  </Link>
</div>

</div>
  );
}