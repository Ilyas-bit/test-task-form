import "./style.css"

export const CustomSelect = ({
  options,
  handleChange,
  isDisabled,
}: {
  options: string[]
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
  isDisabled?: boolean
}) => {
  return (
    <div className="custom-select">
      <select onChange={handleChange} disabled={isDisabled}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}
