export default function Services() {
  const services = [
    {
      title: "RPC",
      description:
        "Public RPC endpoints for developers and applications.",
      comingSoon: true,
    },

    {
      title: "API",
      description:
        "REST API and gRPC endpoints for blockchain data.",
      comingSoon: true,
    },

    {
      title: "Explorer",
      description:
        "Blockchain explorer for transactions and validator statistics.",
      comingSoon: true,
    },

    {
      title: "Snapshot",
      description:
        "State sync snapshots for fast node synchronization.",
      comingSoon: true,
    },
  ];

  return (
    <section
      id="services"
      className="mx-auto max-w-7xl px-6 py-10"
    >
      <h2 className="mb-16 text-center text-5xl font-bold">
        Developer Tools
      </h2>

      <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-blue-500 hover:bg-white/10"
          >
            <h3 className="text-2xl font-bold">
              {service.title}
            </h3>

            <p className="mt-5 text-gray-400">
              {service.description}
            </p>

            {service.comingSoon ? (
              <div className="mt-8 inline-flex rounded-full bg-blue-500/20 px-4 py-2 text-sm text-blue-300">
                Coming Soon
              </div>
            ) : (
              <div className="mt-8 flex gap-4">
                {service.buttons?.map((button) => (
                  <a
                    key={button.name}
                    href={button.link}
                    className={`rounded-full px-6 py-3 text-sm font-semibold transition ${button.color}`}
                  >
                    {button.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}