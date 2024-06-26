import React from "react";

// Dummy data
const rows = [
    { id: 1, alat: "Keyboard", harga: "Rp 200,000" },
    { id: 2, alat: "Gitar Akustik", harga: "Rp 150,000" },
    { id: 3, alat: "Speaker Aktif", harga: "Rp 300,000" },
    { id: 4, alat: "Mixer Audio", harga: "Rp 250,000" },
    { id: 5, alat: "Microphone", harga: "Rp 100,000" },
    { id: 6, alat: "Drum Elektrik", harga: "Rp 350,000" },
    { id: 7, alat: "Piano Digital", harga: "Rp 400,000" },
    { id: 8, alat: "Biola", harga: "Rp 180,000" },
];

const ListTableSewa = () => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border-collapse border border-gray-300">
                <thead className="bg-yellow-500">
                    <tr>
                        <th className="border border-gray-300 px-4 py-2">ID</th>
                        <th className="border border-gray-300 px-4 py-2">
                            Alat Musik
                        </th>
                        <th className="border border-gray-300 px-4 py-2">
                            Harga Sewa
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row) => (
                        <tr key={row.id}>
                            <td className="border border-gray-300 px-4 py-2">
                                {row.id}
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                                {row.alat}
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                                {row.harga}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListTableSewa;
