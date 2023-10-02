interface SpaInformationItemProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string
}

export const SpaInformationItem = ({
  label,
  children,
  ...props
}: SpaInformationItemProps) => {
  return (
    <div className="flex" {...props}>
      <div className="mr-4 w-[85px] text-neutral-400">{label}</div>
      <div>{children}</div>
    </div>
  )
}
