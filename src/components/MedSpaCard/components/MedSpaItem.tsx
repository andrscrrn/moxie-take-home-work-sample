interface MedSpaCardItemProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string
}

export const MedSpaCardItem = ({
  label,
  children,
  ...props
}: MedSpaCardItemProps) => {
  return (
    <div className="flex" {...props}>
      <div className="w-[85px] mr-4 text-neutral-400">{label}</div>
      <div>{children}</div>
    </div>
  )
}
