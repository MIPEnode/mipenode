import Image from "next/image";

export default function Networks() {
  const networks = [
    {
      name: "AtomOne",
      logo: "https://pbs.twimg.com/profile_images/1891894823390429185/9swkoZNn_400x400.png",
      status: "Mainnet",
      active: true,
      stake: "https://winscan.winsnip.xyz/atomone-mainnet/validators/atonevaloper1e3vld469ekks28mhtd4aqua3mdaz64qgj2f8cj",
      docs: "https://github.com/atomone-hub/atomone",
    },
    {
      name: "Axone Protocol",
      logo: "https://pbs.twimg.com/profile_images/1841523650043772928/EeZIYE7B_400x400.jpg",
      status: "Mainnet",
      active: true,
      stake: "https://winscan.winsnip.xyz/axone-mainnet/validators/atonevaloper1e3vld469ekks28mhtd4aqua3mdaz64qgj2f8cj",
      docs: "https://docs.axone.xyz/",
    },
    {
      name: "Shido",
      logo: "https://pbs.twimg.com/profile_images/1918437415141670912/sZxHWrI-_400x400.jpg",
      status: "Mainnet",
      active: true,
      stake: "https://winscan.winsnip.xyz/shido-mainnet/validators/shidovaloper1jmn9qrkf9tjwz2t5zvl068e6txhanztzj9yxsl",
      docs: "https://services.256x25.tech/docs/shido",
    },
    {
      name: "Lumen",
      logo: "https://pbs.twimg.com/profile_images/2013162676466126848/4gz_0rlD_400x400.jpg",
      status: "Mainnet",
      active: true,
      stake: "https://explorer.onenov.xyz/lumen/staking/lmnvaloper1e3vld469ekks28mhtd4aqua3mdaz64qgknt3xu",
      docs: "https://github.com/network-lumen/validator-kit/blob/master/ops/become_validator.md",
    },
    {
      name: "Paxi",
      logo: "https://pbs.twimg.com/profile_images/1978133769899888641/tXQdRucd_400x400.jpg",
      status: "Mainnet",
      active: true,
      stake: "https://winscan.winsnip.xyz/paxi-mainnet/validators/paxivaloper1ch74m9zzx82hssd6jg5l3dkdzhx76mljlh7uhz",
      docs: "https://github.com/paxi-web3/paxi",
    },
    {
      name: "Jay Network",
      logo: "https://pbs.twimg.com/profile_images/2055149830532681728/iI-lIENl_400x400.jpg",
      status: "Mainnet",
      active: true,
      stake: "https://winscan.winsnip.xyz/thejaynetwork-mainnet/validators/yjayvaloper1e3vld469ekks28mhtd4aqua3mdaz64qge8sf72",
      docs: "#",
    },
    {
      name: "Epix",
      logo: "https://pbs.twimg.com/profile_images/1826747785439240195/kxcZs3bD_400x400.jpg",
      status: "Mainnet",
      active: true,
      stake: "https://winscan.winsnip.xyz/epix-mainnet/validators/epixvaloper18xwkzrs3dtwqjyy5lcqekt9pn55a9jg3td0ymh",
      docs: "https://github.com/EpixZone",
    },
    {
      name: "Safro",
      logo: "https://pbs.twimg.com/profile_images/1938593981517955072/vTcJ4t5i_400x400.jpg",
      status: "Mainnet",
      active: true,
      stake: "https://winscan.winsnip.xyz/safrochain-mainnet/validators/addr_safrovaloper1p77zp9ec7lhy2a7sz26pdfvesc04f4fdf95zse",
      docs: "https://docs.safrochain.com/",
    },
    {
      name: "Pactus",
      logo: "https://pbs.twimg.com/profile_images/2008631651459305473/65tXKrlQ_400x400.jpg",
      status: "Mainnet",
      active: true,
      stake: "https://pactusscan.com/address/pc1rrnyrp4rsaes23ntr4jcqyg4fh3wvgframed97q",
      docs: "https://github.com/pactus-project/pactus-gui",
    },
  ];

  return (
    <section
      id="networks"
      className="mx-auto max-w-6xl px-6 py-12"
    >
      <p className="text-center uppercase tracking-[8px] text-blue-400">
        Networks
      </p>

      <h2 className="mt-3 text-center text-4xl font-bold">
        Supported Networks
      </h2>

      <p className="mx-auto mt-3 max-w-3xl text-center text-gray-400">
        We operate validators across multiple blockchain ecosystems.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {networks.map((network) => (
          <div
            key={network.name}
            className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-blue-500 hover:bg-white/10"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Image
                  src={network.logo}
                  alt={network.name}
                  width={48}
                  height={48}
                  className="rounded-xl"
                />

                <div>
                  <h3 className="text-lg font-bold">
                    {network.name}
                  </h3>

                  <p className="text-sm text-green-400">
                    ● {network.status}
                  </p>
                </div>
              </div>

              <span
                className={`h-3 w-3 rounded-full shadow-lg ${
                  network.active
                    ? "bg-green-500 shadow-green-500/70"
                    : "bg-red-500 shadow-red-500/70"
                }`}
              />
            </div>

            <div className="mt-8 flex gap-3">
              <a
                href={network.stake}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 rounded-full bg-blue-600 px-3 py-2 text-center text-sm font-semibold transition hover:bg-blue-700"
              >
                Stake
              </a>

              <a
                href={network.docs}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-center text-sm font-semibold transition hover:bg-white/10"
              >
                Docs
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}