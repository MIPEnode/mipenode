export default function Services() {
  const services = [
    {
      title: "RPC",
      description:
        "Public RPC endpoints for developers and applications.",
    },

    {
      title: "API",
      description:
        "REST API and gRPC endpoints for blockchain data.",
    },

    {
      title: "Explorer",
      description:
        "Blockchain explorer for transactions and validator statistics.",
    },

    {
      title: "Snapshot",
      description:
        "State sync snapshots for fast node synchronization.",
    },
  ];

  return (
    <section
      id="services"
      className="mx-auto max-w-7xl px-6 py-10"
    >
      <h2 className="mb-10 text-center text-4xl font-bold">
        Developer Tools
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-blue-500 hover:bg-white/10"
          >
            <h3 className="text-xl font-bold">
              {service.title}
            </h3>

            <p className="mt-4 text-sm text-gray-400">
              {service.description}
            </p>

            <div className="mt-6 inline-flex rounded-full bg-blue-500/20 px-3 py-1 text-xs text-blue-300">
              Coming Soon
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}