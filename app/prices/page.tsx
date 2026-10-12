import Link from 'next/link';

const pricingData = [
  {
    name: 'Wooden Wendy houses',
    description:
      'Timber-walled Wendy houses. Quick to put up and good for garden rooms, offices and play space.',
    rows: [
      [2, 2, 12000, 12500],
      [2.4, 2.4, 13000, 13500],
      [2.4, 3, 13000, 13500],
      [3, 3, 14500, 15000],
      [3, 4, 16000, 16500],
      [3, 6, 18000, 18500],
      [3, 9, 25000, 25500],
      [3, 12, 32000, 33000],
      [4, 6, 24000, 24500],
      [6, 6, 30000, 31000],
      [6, 9, 40000, 42000],
      [6, 12, 45000, 47000],
      [9, 9, 48000, 50000],
    ],
  },
  {
    name: 'Nutec Wendy houses, large boards',
    description:
      'Large Nutec boards are cut to fit each wall, with joined boards on bigger walls. This is the faster, lower-cost way to get a Nutec Wendy house.',
    rows: [
      [2, 2, 12000, 12500],
      [2.4, 2.4, 13000, 13500],
      [2.4, 3, 13500, 14000],
      [3, 3, 15000, 15500],
      [3, 4, 17000, 18000],
      [3, 6, 20000, 21000],
      [3, 9, 24000, 25000],
      [3, 12, 34000, 35000],
      [4, 6, 26000, 27000],
      [6, 6, 32000, 33000],
      [6, 9, 36000, 37000],
      [6, 12, 48000, 50000],
      [9, 9, 64000, 66000],
    ],
  },
  {
    name: 'Nutec Wendy houses, overlapping',
    description:
      'Nutec planks are laid horizontally, each overlapping the one below. Water drips off each plank instead of running down the wall, and the look matches a traditional Wendy house.',
    rows: [
      [2, 2, 17000, 17500],
      [2.4, 2.4, 18000, 19000],
      [2.4, 3, 20000, 21000],
      [3, 3, 22000, 23000],
      [3, 4, 25000, 27000],
      [3, 6, 28000, 30000],
      [3, 9, 36000, 38000],
      [3, 12, 45000, 48000],
      [6, 6, 54000, 56000],
      [6, 9, 62000, 65000],
      [9, 9, 78000, 80000],
    ],
  },
];

const formatMoney = (amount: number) =>
  new Intl.NumberFormat('en-ZA', {
    style: 'currency',
    currency: 'ZAR',
    maximumFractionDigits: 0,
  }).format(amount);

export default function PricesPage() {
  return (
    <main className="min-h-screen bg-brand-gray text-brand-charcoal">
      <header className="border-b border-brand-line bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-green">
              Greenbuild
            </p>
            <h1 className="mt-2 text-3xl font-bold md:text-4xl">Price guide</h1>
          </div>
          <Link
            href="/"
            className="inline-flex items-center border border-brand-charcoal px-4 py-2 text-sm font-semibold uppercase tracking-wide text-brand-charcoal transition-colors hover:bg-brand-charcoal hover:text-white"
          >
            Back to site
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <p className="max-w-3xl text-lg text-brand-charcoal/80">
          Starting prices for Wendy houses by size and roof type. Pick a build type,
          find your size, and ask for a quote on WhatsApp.
        </p>

        <div className="mt-8 space-y-10">
          {pricingData.map((group) => (
            <div key={group.name} className="overflow-hidden border border-brand-line bg-white shadow-sm">
              <div className="border-b border-brand-line bg-brand-white p-6">
                <h2 className="text-2xl font-bold text-brand-charcoal">{group.name}</h2>
                <p className="mt-2 max-w-3xl text-brand-charcoal/75">{group.description}</p>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse text-left">
                  <thead>
                    <tr className="bg-brand-gray">
                      <th className="border-b border-brand-line px-4 py-3 text-sm font-bold uppercase tracking-wide text-brand-charcoal">
                        Width
                      </th>
                      <th className="border-b border-brand-line px-4 py-3 text-sm font-bold uppercase tracking-wide text-brand-charcoal">
                        Length
                      </th>
                      <th className="border-b border-brand-line px-4 py-3 text-sm font-bold uppercase tracking-wide text-brand-charcoal">
                        Flat roof
                      </th>
                      <th className="border-b border-brand-line px-4 py-3 text-sm font-bold uppercase tracking-wide text-brand-charcoal">
                        Pitched roof
                      </th>
                      <th className="border-b border-brand-line px-4 py-3 text-sm font-bold uppercase tracking-wide text-brand-charcoal">
                        Quote
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {group.rows.map(([width, length, flat, pitched], index) => {
                      const message = `Hi Greenbuild, I would like a quote for a ${group.name} (${width}m x ${length}m).`;

                      return (
                        <tr key={`${group.name}-${width}-${length}-${index}`} className={index % 2 === 0 ? 'bg-brand-white' : 'bg-[#f4f7f2]'}>
                          <td className="border-b border-brand-line px-4 py-3 text-brand-charcoal">
                            {width}m
                          </td>
                          <td className="border-b border-brand-line px-4 py-3 text-brand-charcoal">
                            {length}m
                          </td>
                          <td className="border-b border-brand-line px-4 py-3 font-semibold text-brand-charcoal">
                            {formatMoney(flat)}
                          </td>
                          <td className="border-b border-brand-line px-4 py-3 font-semibold text-brand-charcoal">
                            {formatMoney(pitched)}
                          </td>
                          <td className="border-b border-brand-line px-4 py-3">
                            <a
                              href={`https://wa.me/27842785134?text=${encodeURIComponent(message)}`}
                              target="_blank"
                              rel="noreferrer"
                              className="font-semibold text-brand-green underline decoration-brand-green/60 underline-offset-4"
                            >
                              Get quote
                            </a>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-none border-l-4 border-brand-green bg-white p-5 shadow-sm">
          <p className="text-base text-brand-charcoal/80">
            These sizes and prices are a base guide and a starting point for your project. Contact us for a consultation and we will work out your exact needs and tailor a quote to them.
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="https://wa.me/27842785134?text=Hi%2C%20I%20need%20a%20quote"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center bg-brand-green px-8 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand-green-dark"
          >
            Ask for a custom quote on WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
