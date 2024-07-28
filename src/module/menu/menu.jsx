import React, { useState } from 'react';
import './menu.css'
export function Menu() {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const options = [
        { value: 'lunes', label: 'Lunes' },
        { value: 'martes', label: 'Martes' },
        { value: 'miercoles', label: 'Miercoles' },
    ];

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <div className="dropdown-container">
            <button className="dropdown-button" onClick={toggleDropdown}>
                {selectedOption ? selectedOption.label : 'Seleccionar Dia'}
            </button>
            {isOpen && (
                <ul className="dropdown-options">
                    {options.map((option) => (
                        <li key={option.value} onClick={() => handleOptionClick(option)}>
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );

}
