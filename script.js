const members = [
    { name: "Ippang", role: "Pendiri & Pemimpin Strategi", instagram: "https://instagram.com/cosmosy25" },
    { name: "Cuwang", role: "Ahli Teknologi & Informasi", instagram: "https://instagram.com/dzukwnn_" },
    { name: "Lutfi", role: "Spesialis Aksi & Operasi Lapangan", instagram: "https://instagram.com/luthfiedynda" },
    { name: "Fahri", role: "Master Infiltrasi", instagram: "https://instagram.com/urb4nviking__" },
    { name: "Irham", role: "Intelijen & Analisis", instagram: "https://instagram.com/irhmrifai" },
    { name: "Maul", role: "Pertahanan & Keamanan", instagram: "https://instagram.com/jrinzz_08" },
    { name: "Ocang", role: "Kode & Enkripsi", instagram: "https://instagram.com/zan_xnf1" }
];

const list = document.getElementById("member-list");

members.forEach(member => {
    const li = document.createElement("li");
    li.innerHTML = `
        <a href="${member.instagram}" target="_blank" style="color: #ff4c4c; text-decoration: none;">
            <strong>${member.name}</strong>
        </a> — ${member.role}
    `;
    list.appendChild(li);
});
