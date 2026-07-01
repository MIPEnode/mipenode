export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl px-6 py-10"
    >
      <div className="grid gap-16 lg:grid-cols-2 items-center">

        <div>
          <p className="uppercase tracking-[8px] text-blue-400">
            ABOUT
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Trusted Validator
            <br />
            Since 2024
          </h2>

          <p className="mt-8 text-gray-400 leading-8">
            MIPEnode provides professional blockchain infrastructure
            with a focus on security, reliability and performance.
            We operate validators, RPC endpoints, archive nodes and
            monitoring systems across multiple Proof-of-Stake
            ecosystems.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-8">

            <div>
              <h3 className="text-4xl font-bold text-blue-400">
                10+
              </h3>

              <p className="text-gray-400 mt-2">
                Networks
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-blue-400">
                99.9%
              </h3>

              <p className="text-gray-400 mt-2">
                Uptime
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-blue-400">
                24/7
              </h3>

              <p className="text-gray-400 mt-2">
                Monitoring
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-blue-400">
                0
              </h3>

              <p className="text-gray-400 mt-2">
                Slashing
              </p>
            </div>

          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-12">

          <h3 className="text-3xl font-bold">
            Why Choose Us?
          </h3>

          <ul className="mt-8 space-y-5 text-gray-300">

            <li>✔ Enterprise-grade infrastructure</li>

            <li>✔ DDoS Protection</li>

            <li>✔ Automated Failover</li>

            <li>✔ Daily Backups</li>

            <li>✔ Global Monitoring</li>

            <li>✔ Fast Support</li>

          </ul>

        </div>

      </div>
    </section>
  );
}