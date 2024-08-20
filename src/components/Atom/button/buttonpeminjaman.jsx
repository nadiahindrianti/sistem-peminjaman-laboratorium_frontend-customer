import React from "react";

const ButtonTambahPeminjaman = ({ onClick, label }) => {
    return <button className="button-peminjaman" onClick={onClick} style={{marginLeft: "10px", display: "flex", marginTop: "-20px", backgroundColor: "rgba(51, 132, 178, 0.86)"}}>{label}</button>
}
export default ButtonTambahPeminjaman