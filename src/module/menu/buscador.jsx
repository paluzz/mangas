import { useState } from "react";

// en construccion, todavia falla



export default function Buscador({ data, onFilter }) {
    const [search, setSearch] = useState("");

    const handleChange = (value) => {
        setSearch(value);

        const filtered =
            value.trim() === ""
                ? data
                : data.filter((item) =>
                    item.name?.toLowerCase().includes(value.toLowerCase())
                );

        onFilter(filtered);
    };

    return (
        <div className="buscador-container">
            <input
                className="buscador-input"
                type="text"
                placeholder="Buscar..."
                value={search}
                onChange={(e) => handleChange(e.target.value)}
            />
        </div>
    );
}