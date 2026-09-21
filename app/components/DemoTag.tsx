type Props = {
  children?: string;
  className?: string;
};

/**
 * A quiet chip that marks mockup content — made-up contact details, fictional
 * artists, sample reviews — so nobody mistakes it for a real business.
 */
export default function DemoTag({ children = "Demo", className = "" }: Props) {
  return (
    <span
      className={`inline-flex items-center rounded-sm border border-bone/20 px-1.5 py-0.5 align-middle font-mono text-[9px] uppercase leading-none tracking-[0.18em] text-ash ${className}`}
    >
      {children}
    </span>
  );
}
