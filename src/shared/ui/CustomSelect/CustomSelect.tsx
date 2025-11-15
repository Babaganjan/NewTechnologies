'use client';
import clsx from 'clsx';
import { useState, useRef, useEffect } from 'react';

import type { AddressContactType } from '@/shared/const/data';
import { ArrowSmall } from '@/shared/icons/ArrowSmall/ArrowSmall';
import type { ThemeType } from '@/widgets/header/header.types';

import './customSelect.scss';
import { useLocalStorageSSR } from './../../../hooks/useLocalStorage';

interface CustomSelectProps extends ThemeType {
  options: readonly AddressContactType[];
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  isModalOpen?: boolean;
}

export const CustomSelect = ({
  options,
  value,
  onChange,
  className,
  isModalOpen = false,
}: CustomSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const initialCity = value || options[0]?.city || 'Алматы';
  const [selectedValue, setSelectedValue] = useLocalStorageSSR('city', initialCity);

  const selectRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.city === selectedValue);
  const filterOption = options.filter((opt) => opt.city !== selectedValue);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (option: AddressContactType) => {
    setSelectedValue(option.city);
    onChange?.(option.city);
    setIsOpen(false);
  };

  return (
    <div
      ref={selectRef}
      className={clsx('custom-select', className, { 'custom-select--open': isOpen })}
      onMouseLeave={() => isOpen && setIsOpen(false)}
    >
      <button
        type="button"
        className="custom-select__trigger"
        onMouseEnter={() => !isOpen && setIsOpen(true)}
      >
        <span
          className={clsx('custom-select__value', isModalOpen && 'custom-select__value--modal')}
        >
          {selectedOption?.city}
        </span>
        <ArrowSmall className={clsx(isOpen && 'btn-icon--active')} />
      </button>

      {isOpen && (
        <div className="custom-select__dropdown">
          <div className="custom-select__options">
            {filterOption.map((option) => (
              <button
                key={option.city}
                type="button"
                className={clsx(
                  {
                    'custom-select__option--selected': option.city === selectedValue,
                  },
                  isModalOpen ? 'custom-select__option--modal' : 'custom-select__option'
                )}
                onClick={() => handleSelect(option)}
              >
                {option.city}
              </button>
            ))}
          </div>
        </div>
      )}

      <select
        name="city"
        value={selectedValue}
        onChange={(e) => {
          const selectedOption = options.find((opt) => opt.city === e.target.value);

          if (selectedOption) {
            handleSelect(selectedOption);
          }
        }}
        className="custom-select__native"
      >
        {options.map((option) => (
          <option key={option.city} value={option.city}>
            {option.city}
          </option>
        ))}
      </select>
    </div>
  );
};
