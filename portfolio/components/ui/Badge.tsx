type StatusType = 'In Market' | 'Launched' | 'Legacy' | 'In Development';

const statusStyles: Record<StatusType, string> = {
  'In Market': 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30',
  'In Development': 'bg-amber-500/15 text-amber-400 border border-amber-500/30',
  'Launched': 'bg-blue-500/15 text-blue-400 border border-blue-500/30',
  'Legacy': 'bg-muted text-muted-foreground border border-border',
};

export function StatusBadge({ status }: { status: StatusType }) {
  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${statusStyles[status]}`}>
      {status}
    </span>
  );
}
