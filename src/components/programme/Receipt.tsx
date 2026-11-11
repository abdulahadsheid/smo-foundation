import { receiptLines } from "@/data/programme";
import { siteConfig } from "@/data/site";

/**
 * Receipt — one grant, itemised like a market receipt.
 * The signature element of the site: transparency, in the trader's own idiom.
 */
export default function Receipt() {
  return (
    <div className="receipt-edge mx-auto w-full max-w-[26rem] rounded-t-[6px] bg-white px-7 pb-8 pt-7 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.25)]">
      <div className="text-center">
        <p className="font-display text-lg font-semibold tracking-tight text-green-900">SMO Foundation</p>
        <p className="text-sm text-muted">One trader grant</p>
      </div>

      <div className="my-5 border-t border-dashed border-ink/25" />

      <table className="w-full text-[0.95rem]">
        <caption className="sr-only">What one grant pays for</caption>
        <tbody>
          {receiptLines.map((line) => (
            <tr key={line.label} className="align-baseline">
              <th scope="row" className="py-1.5 pr-4 text-left font-normal text-ink">
                {line.label}
              </th>
              <td className="tabular py-1.5 text-right font-medium text-ink whitespace-nowrap">
                {line.amount}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="my-5 border-t border-dashed border-ink/25" />

      <div className="flex items-baseline justify-between">
        <p className="font-semibold text-green-900">In the trader&apos;s hands</p>
        <p className="tabular font-display text-2xl font-semibold text-green-900">{siteConfig.grantAmount}</p>
      </div>
      <p className="mt-4 text-sm text-muted">
        Paid into her own {siteConfig.partnerBank} account. No fees, no repayment.
      </p>
    </div>
  );
}
