import Image from "next/image";

export default function AboutImage() {
  return (
    <div className="relative flex justify-center lg:justify-end">

      {/* Background Accent */}
      <div className="absolute top-8 right-8 hidden h-[420px] w-[420px] rounded-[40px] border border-[#C8A96A]/20 bg-[#C8A96A]/5 lg:block" />

      {/* Main Image */}
      <div className="group relative z-10 overflow-hidden rounded-[32px] shadow-[0_35px_70px_rgba(0,0,0,0.12)]">

        <Image
          src="/images/about/about-imagee.jpg"
          alt="Modern private office interior with desk seating and city views"
          width={620}
          height={760}
          priority
          className="h-[620px] w-[540px] object-cover transition duration-700 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />

      </div>

      {/* Floating Statistics Card */}
      <div className="absolute -bottom-8 -left-8 z-20 hidden rounded-3xl border border-[#E9E4D8] bg-white/95 px-8 py-7 shadow-2xl backdrop-blur-md lg:block">

        <p className="text-xs font-semibold uppercase tracking-[4px] text-[#C8A96A]">
          Premium Workspace
        </p>

        <h3 className="mt-2 text-3xl font-serif text-[#0F4C45]">
          Modern
          <br />
          Environment
        </h3>

        <div className="mt-5 h-px w-full bg-[#E5E5E5]" />

        <div className="mt-5 flex gap-8">

          <div>
            <h4 className="text-2xl font-bold text-[#0F4C45]">
              24×7
            </h4>

            <p className="mt-1 text-sm text-[#777]">
              Access
            </p>
          </div>

          <div>
            <h4 className="text-2xl font-bold text-[#0F4C45]">
              Wi-Fi
            </h4>

            <p className="mt-1 text-sm text-[#777]">
              High Speed
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}
