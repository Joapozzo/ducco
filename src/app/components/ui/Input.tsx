import { useState } from 'react';

interface InputProps {
    label: string;
    type?: 'text' | 'email' | 'tel' | 'password';
    placeholder: string;
    value?: string;
    onChange?: (value: string) => void;
    required?: boolean;
    disabled?: boolean;
    rows?: number; // Para textarea
    isTextarea?: boolean;
    className?: string;
}

const Input = ({
    label,
    type = 'text',
    placeholder,
    value,
    onChange,
    required = false,
    disabled = false,
    rows = 4,
    isTextarea = false,
    className = ''
}: InputProps) => {
    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(!!value);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const newValue = e.target.value;
        setHasValue(!!newValue);
        onChange?.(newValue);
    };

    const baseClasses = `
    w-full px-6 py-4 border-2 rounded-xl 
    transition-all duration-300 text-lg
    bg-white text-gray-700
    placeholder:text-gray-400 placeholder:font-light
    ${isFocused
            ? 'border-orange-500 shadow-lg shadow-orange-100 scale-[1.01]'
            : hasValue
                ? 'border-gray-500'
                : 'border-gray-300 hover:border-gray-400'
        }
    ${disabled ? 'bg-gray-100 cursor-not-allowed opacity-70' : ''}
    focus:outline-none focus:border-orange-500 focus:shadow-lg focus:shadow-orange-100
    ${className}
  `;

    const labelClasses = `
    block text-gray-700 font-bold mb-3 text-sm uppercase tracking-wide
    transition-all duration-300
    ${isFocused ? 'text-orange-600 transform scale-105' : ''}
    ${required ? 'after:content-["*"] after:text-red-500 after:ml-1' : ''}
  `;

    return (
        <div className="relative">
            <label className={labelClasses}>
                {label}
            </label>
            {isTextarea ? (
                <textarea
                    rows={rows}
                    value={value}
                    onChange={handleChange}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    placeholder={placeholder}
                    required={required}
                    disabled={disabled}
                    className={`${baseClasses} resize-none`}
                />
            ) : (
                <input
                    type={type}
                    value={value}
                    onChange={handleChange}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    placeholder={placeholder}
                    required={required}
                    disabled={disabled}
                    className={baseClasses}
                />
            )}
        </div>
    );
};

export default Input;