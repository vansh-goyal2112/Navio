export default function NavioHomeCard({ title, text }) {
  return (
    <div className="group relative overflow-hidden rounded-[28px] border border-[#E2E8F0] bg-white p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-[#334155] dark:bg-[#1E293B]">
      
      {/* subtle gradient glow */}
      <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
        <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-blue-500/10 blur-2xl" />
        <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-red-500/10 blur-2xl" />
      </div>

      {/* icon placeholder */}
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-xl dark:bg-blue-500/10">
        📍
      </div>

      {/* title */}
      <h2 className="mb-2 text-xl font-bold tracking-tight text-[#0F172A] transition group-hover:text-[#0B5FFF] dark:text-white dark:group-hover:text-blue-300">
        {title}
      </h2>

      {/* description */}
      <p className="text-sm leading-6 text-[#475569] dark:text-slate-300">
        {text}
      </p>
    </div>
  );
}