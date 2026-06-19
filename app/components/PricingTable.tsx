'use client';

import type { PricingData } from '@/lib/pricing';

interface PricingTableProps {
  tables: PricingData[];
}

function PriceListTable({ data }: { data: PricingData }) {
  return (
    <div className="bg-white p-8 border border-gray-200 shadow-sm">
      <h3 className="text-2xl font-bold text-brand-charcoal mb-2">{data.title}</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 border-b-2 border-gray-300">
              <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-brand-charcoal">
                Width
              </th>
              <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-brand-charcoal">
                Length
              </th>
              <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-brand-charcoal">
                Flat Roof
              </th>
              <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-brand-charcoal">
                Pitched Roof
              </th>
            </tr>
          </thead>
          <tbody>
            {data.rows.map((row, index) => (
              <tr
                key={index}
                className={
                  index % 2 === 0
                    ? 'bg-purple-100 hover:bg-purple-150'
                    : 'bg-white hover:bg-gray-50'
                }
              >
                <td className="border border-gray-300 px-4 py-3 text-brand-charcoal font-medium">
                  {row.width}
                </td>
                <td className="border border-gray-300 px-4 py-3 text-brand-charcoal font-medium">
                  {row.length}
                </td>
                <td className="border border-gray-300 px-4 py-3 text-brand-charcoal font-medium">
                  {row.flatRoof}
                </td>
                <td className="border border-gray-300 px-4 py-3 text-brand-charcoal font-medium">
                  {row.pitchedRoof}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function PricingTable({ tables }: PricingTableProps) {
  return (
    <section className="mt-12 space-y-8">
      {tables.map((table) => (
        <PriceListTable key={table.title} data={table} />
      ))}

      <div className="p-4 bg-blue-50 border border-blue-200 rounded">
        <p className="text-sm text-gray-700">
          <span className="font-semibold">Note:</span> Prices are for standard structures.
          For custom sizes, modifications, or special requirements, please contact us for a detailed quote.
        </p>
      </div>
    </section>
  );
}
