import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#F8F7F2] text-[#0F4C45] flex items-center justify-center px-6">
      <section className="w-full max-w-4xl text-center">

        {/* Small Label */}
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-[#C9A45C]">
          Mannat Coworking
        </p>

        {/* 404 */}
        <h1 className="text-[120px] leading-none font-semibold tracking-[-0.06em] text-[#0F4C45] sm:text-[180px]">
          404
        </h1>

        {/* Heading */}
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#171717] sm:text-5xl">
          Looks like this space is unavailable.
        </h2>

        {/* Description */}
        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-[#5F6663] sm:text-lg">
          The page you’re looking for doesn’t exist or may have moved.
          Let’s get you back to a productive space.
        </p>

        {/* Buttons */}
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">

          <Link
            href="/"
            className="inline-flex min-h-12 items-center justify-center rounded-md bg-[#0F4C45] px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#F8F7F2] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B3B36] hover:shadow-lg"
          >
            Back to Home
          </Link>

          <Link
            href="/gallery"
            className="inline-flex min-h-12 items-center justify-center rounded-md border border-[#0F4C45] px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#0F4C45] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0F4C45] hover:text-[#F8F7F2]"
          >
            Explore Spaces
          </Link>

        </div>

        {/* Bottom Line */}
        <div className="mt-14 flex items-center justify-center gap-4">
          <span className="h-px w-10 bg-[#C9A45C]" />

          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#0F4C45]">
            Work. Connect. Grow.
          </span>

          <span className="h-px w-10 bg-[#C9A45C]" />
        </div>

      </section>
    </main>
  );
}