export function Tag({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center px-2.5 py-1 rounded text-xs font-medium bg-muted text-muted-foreground border border-border">
      {label}
    </span>
  );
}
