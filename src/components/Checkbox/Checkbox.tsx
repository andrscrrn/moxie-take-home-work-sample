interface CheckboxProps extends React.HTMLAttributes<HTMLInputElement> {
  label?: string
}

export const Checkbox = ({ label }: CheckboxProps) => {
  return (
    <label className="flex flex-row gap-4">
      <div className="inline-flex h-6 w-6 items-center justify-center p-0.5">
        <input
          type="checkbox"
          className="relative h-5 w-5 rounded-[3px] border-2 border-neutral-300"
        />
      </div>
      <div className="text-gray-600 text-sm font-normal leading-normal">
        {label}
      </div>
    </label>
  )
}
