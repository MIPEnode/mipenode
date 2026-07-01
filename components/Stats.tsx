export default function Stats() {
  const stats = [
    {
      number: "8",
      title: "Networks",
    },
    {
      number: "99.98%",
      title: "Validator Uptime",
    },
    {
      number: "24/7",
      title: "Monitoring",
    },
    {
      number: "0",
      title: "Slashing Events",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-8">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center transition hover:border-blue-500 hover:bg-white/10"
          >
            <h2 className="text-5xl font-bold text-blue-400">
              {item.number}
            </h2>

            <p className="mt-4 text-gray-400">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}