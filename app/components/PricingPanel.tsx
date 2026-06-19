'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import { Calculator, X } from 'lucide-react';

const overlappingPriceRows = [
  { width: '2m', length: '2m', flatRoof: 'R17000', pitchedRoof: 'R17500' },
  { width: '2.4m', length: '2.4m', flatRoof: 'R18000', pitchedRoof: 'R19000' },
  { width: '2.4m', length: '3m', flatRoof: 'R20000', pitchedRoof: 'R21000' },
  { width: '3m', length: '3m', flatRoof: 'R22000', pitchedRoof: 'R23000' },
  { width: '3m', length: '4m', flatRoof: 'R25000', pitchedRoof: 'R27000' },
  { width: '3m', length: '6m', flatRoof: 'R28000', pitchedRoof: 'R30000' },
  { width: '3m', length: '9m', flatRoof: 'R36000', pitchedRoof: 'R38000' },
  { width: '3m', length: '12m', flatRoof: 'R45000', pitchedRoof: 'R48000' },
  { width: '6m', length: '6m', flatRoof: 'R54000', pitchedRoof: 'R56000' },
  { width: '6m', length: '9m', flatRoof: 'R62000', pitchedRoof: 'R65000' },
  { width: '9m', length: '9m', flatRoof: 'R78000', pitchedRoof: 'R80000' },
];

const wendyPriceRows = [
  { width: '2m', length: '2m', flatRoof: 'R12000', pitchedRoof: 'R12500' },
  { width: '2.4m', length: '2.4m', flatRoof: 'R13000', pitchedRoof: 'R13500' },
  { width: '2.4m', length: '3m', flatRoof: 'R13000', pitchedRoof: 'R13500' },
  { width: '3m', length: '3m', flatRoof: 'R14500', pitchedRoof: 'R15000' },
  { width: '3m', length: '4m', flatRoof: 'R16000', pitchedRoof: 'R16500' },
  { width: '3m', length: '6m', flatRoof: 'R18000', pitchedRoof: 'R18500' },
  { width: '3m', length: '9m', flatRoof: 'R25000', pitchedRoof: 'R25500' },
  { width: '3m', length: '12m', flatRoof: 'R32000', pitchedRoof: 'R33000' },
  { width: '4m', length: '6m', flatRoof: 'R24000', pitchedRoof: 'R24500' },
  { width: '6m', length: '6m', flatRoof: 'R30000', pitchedRoof: 'R31000' },
  { width: '6m', length: '9m', flatRoof: 'R40000', pitchedRoof: 'R42000' },
  { width: '6m', length: '12m', flatRoof: 'R45000', pitchedRoof: 'R47000' },
  { width: '9m', length: '9m', flatRoof: 'R48000', pitchedRoof: 'R50000' },
];

export default function PricingPanel() {
  return (
    <Sheet>
      <div>
        <div className="fixed right-0 top-[50%] z-50 -translate-y-1/2">
          <SheetTrigger asChild>
            <button
              type="button"
              className="flex h-[180px] w-[52px] flex-col items-center justify-center bg-brand-green text-white border-l border-white/10 shadow-[0_8px_20px_rgba(0,0,0,0.08)] transition duration-300 hover:-translate-x-2 hover:bg-[#4da720] hover:shadow-[0_10px_26px_rgba(0,0,0,0.12)] focus:outline-none focus:ring-2 focus:ring-brand-green/40 focus:ring-offset-2 focus:ring-offset-white rounded-none premium-glow-pulse"
              aria-label="Open price list"
              style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}
            >
              <span className="text-[11px] font-semibold uppercase tracking-[0.35em] leading-tight">
                PRICE LIST
              </span>
            </button>
          </SheetTrigger>
        </div>
      </div>

      <SheetContent
        side="right"
        className="h-full w-full max-w-[500px] border-l border-gray-200 bg-white p-0 shadow-2xl shadow-black/10 sm:max-w-[80vw] lg:max-w-[500px] rounded-none"
      >
        <div className="flex h-full flex-col overflow-hidden">
          <div className="sticky top-0 z-20 border-b border-gray-200 bg-white/95 px-6 py-5 backdrop-blur-sm">
            <div className="flex items-start justify-between gap-4">
              <SheetHeader>
                <SheetTitle className="text-xl font-bold text-brand-charcoal">
                  Nutec & Wendy House Price List
                </SheetTitle>
                <SheetDescription className="mt-2 text-sm text-gray-600">
                  View our standard pricing for Nutec and Wendy House structures.
                </SheetDescription>
              </SheetHeader>
              <SheetClose asChild>
                <button
                  type="button"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-brand-charcoal transition hover:bg-brand-gray focus:outline-none focus:ring-2 focus:ring-brand-green focus:ring-offset-2 focus:ring-offset-white"
                  aria-label="Close price list"
                >
                  <X className="h-5 w-5" />
                </button>
              </SheetClose>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-6 sm:px-8">
            <div className="space-y-6">
              {[
                {
                  title: 'Wendy House Price List',
                  rows: wendyPriceRows,
                },
                {
                  title: 'Overlapping Nutec Wendy House Price List',
                  rows: overlappingPriceRows,
                },
              ].map((table, tableIndex) => (
                <div key={tableIndex} className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
                  <div className="border-b border-gray-200 bg-brand-gray/50 px-4 py-3 text-sm font-semibold text-brand-charcoal">
                    {table.title}
                  </div>
                  <div className="overflow-x-auto">
                    <table className="min-w-[640px] w-full border-separate border-spacing-0 text-sm text-left">
                      <thead>
                        <tr className="bg-brand-gray text-gray-600 uppercase tracking-[0.18em] text-[0.75rem]">
                          <th className="sticky top-0 border-b border-gray-200 px-4 py-4 backdrop-blur-sm">
                            Width
                          </th>
                          <th className="sticky top-0 border-b border-gray-200 px-4 py-4 backdrop-blur-sm">
                            Length
                          </th>
                          <th className="sticky top-0 border-b border-gray-200 px-4 py-4 backdrop-blur-sm">
                            Flat Roof
                          </th>
                          <th className="sticky top-0 border-b border-gray-200 px-4 py-4 backdrop-blur-sm">
                            Pitched Roof
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {table.rows.map((row, index) => (
                          <tr
                            key={`${row.width}-${row.length}`}
                            className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                          >
                            <td className="border-t border-gray-200 px-4 py-4 font-semibold text-brand-charcoal">
                              {row.width}
                            </td>
                            <td className="border-t border-gray-200 px-4 py-4 text-gray-700">
                              {row.length}
                            </td>
                            <td className="border-t border-gray-200 px-4 py-4 text-gray-700">
                              {row.flatRoof}
                            </td>
                            <td className="border-t border-gray-200 px-4 py-4 text-gray-700">
                              {row.pitchedRoof}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-gray-200 bg-brand-gray p-5 text-sm text-gray-700 shadow-sm">
              <p>
                Prices are subject to change without notice. Contact us for custom quotations, bulk orders, special designs, and larger structures.
              </p>
            </div>

            <div className="mt-6">
              <Button asChild className="w-full sm:w-auto">
                <Link href="#contact" className="w-full text-center">
                  Request a Quote
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
