import React from 'react';
import { Checkbox } from '../ui/checkbox';

export interface FilterCheckboxProps {
  text: string;
  value: string;
  name?: string;
  checked?: boolean;
  endAdornment?: React.ReactNode;
  onCheckedChange?: (checked: boolean) => void;
}

export const FilterCheckbox: React.FC<FilterCheckboxProps> = ({
  text,
  value,
  name,
  checked,
  endAdornment,
  onCheckedChange,
}) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        id={`checkbox-${String(name)}-${String(value)}`}
        value={value}
        checked={checked}
        className="rounded-[8px] w-6 h-6"
        onCheckedChange={onCheckedChange}
      />
      <label
        htmlFor={`checkbox-${String(name)}-${String(value)}`}
        className="leading-none cursor-pointer flex-1">
        {text}
      </label>
      {endAdornment}
    </div>
  );
};
