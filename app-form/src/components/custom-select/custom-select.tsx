import React from "react"
import "./styles.css"

interface Option {
  id: string
  name: string
}

interface SelectDropdownProps {
  options: Option[]
  value: string
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
  disabled: boolean
  placeholder: string
}

const SelectDropdown: React.FC<SelectDropdownProps> = React.memo(
  ({ options, value, onChange, disabled, placeholder }) => {
    return (
      <div className={`custom-select ${disabled ? "disabled" : ""}`}>
        <select value={value} onChange={onChange} disabled={disabled}>
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
        </select>
      </div>
    )
  }
)

export default SelectDropdown
