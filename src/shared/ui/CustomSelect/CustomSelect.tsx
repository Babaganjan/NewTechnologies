'use client';
import clsx from 'clsx';
import { useState, useRef, useEffect } from 'react';
import './customSelect.scss';

interface SelectOption {
  value: string;
  label: string;
}

interface CustomSelectProps {
  options: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export const CustomSelect = ({
  options,
  value,
  onChange,
  placeholder = 'Выберите город',
  className,
}: CustomSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value || '');
  const selectRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === selectedValue);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (option: SelectOption) => {
    setSelectedValue(option.value);
    onChange?.(option.value);
    setIsOpen(false);
  };

  return (
    <div
      ref={selectRef}
      className={clsx('custom-select', className, { 'custom-select--open': isOpen })}
    >
      <button type="button" className="custom-select__trigger" onClick={() => setIsOpen(!isOpen)}>
        <span className="custom-select__value">
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <span className="custom-select__arrow">
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
            <path
              d="M1 1.5L6 6.5L11 1.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      {isOpen && (
        <div className="custom-select__dropdown">
          <div className="custom-select__options">
            {options.map((option) => (
              <button
                key={option.value}
                type="button"
                className={clsx('custom-select__option', {
                  'custom-select__option--selected': option.value === selectedValue,
                })}
                onClick={() => handleSelect(option)}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Скрытый нативный select для формы */}
      <select
        name="city"
        value={selectedValue}
        onChange={(e) =>
          handleSelect({ value: e.target.value, label: e.target.selectedOptions[0].text })
        }
        className="custom-select__native"
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
