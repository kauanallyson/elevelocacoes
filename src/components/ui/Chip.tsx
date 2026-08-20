type Props = {
  categoria: string;
  active?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
};

export default function Chip({ categoria, active = false, onClick, children }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="chip-categoria rounded-sm border border-graphite-300 px-3.5 py-1.5 text-sm font-medium text-graphite-900 transition-colors data-[active=true]:border-accent data-[active=true]:bg-accent-tint data-[active=true]:text-accent-dark cursor-pointer"
      data-categoria={categoria}
      data-active={String(active)}
      aria-pressed={active}
    >
      {children}
    </button>
  );
}
