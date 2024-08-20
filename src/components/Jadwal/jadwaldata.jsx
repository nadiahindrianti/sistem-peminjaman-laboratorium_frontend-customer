import React, { useState, useEffect } from 'react';
import { BiSortAlt2 } from "react-icons/bi";
import '../../styles/TableSection.css';
import axios from 'axios';
import { useAuth } from '../Layout/AuthContext';
import { useNavigate } from 'react-router-dom';

const JadwalData = () => {
  const navigate = useNavigate();
  const { token } = useAuth();

  const [tableData, setTableData] = useState([]);
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: 'ascending',
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const getDataPenjadwalan = async () => {
    try {
      if (token) {
        const response = await axios.get('https://sistem-peminjaman-centrumlab.onrender.com/api/v1/public/jadwal', {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });
        const data = response.data;
        setTableData(data.data || []);
        console.log(data.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getDataPenjadwalan();
  }, [token]);

  const sortTable = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });

    const sortedData = [...tableData].sort((a, b) => {
      if (direction === 'ascending') {
        return (a[key]?.localeCompare(b[key])) || 0;
      } else {
        return (b[key]?.localeCompare(a[key])) || 0;
      }
    });

    setTableData(sortedData);
  };

  const handlePageChange = (e) => {
    setCurrentPage(parseInt(e.target.value, 10));
  };

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(parseInt(e.target.value, 10));
    setCurrentPage(1);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = tableData.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(tableData.length / itemsPerPage);

  return (
    <div className="body-container-jadwal">
      <div className="table-container-jadwal">
        <table className="data-table-jadwal">
          <thead>
            <tr>
              <th onClick={() => sortTable('jadwal_id')}>
                ID Penjadwalan <BiSortAlt2 />
              </th>
              <th onClick={() => sortTable('tanggal_jadwal')}>
                Tanggal Peminjaman <BiSortAlt2 />
              </th>
              <th onClick={() => sortTable('waktu_jadwal')}>
                Waktu <BiSortAlt2 />
              </th>
              <th onClick={() => sortTable('name_lab')}>
                Nama Ruang Laboratorium <BiSortAlt2 />
              </th>
              <th onClick={() => sortTable('name_user')}>
                Nama Peminjam <BiSortAlt2 />
              </th>
              <th onClick={() => sortTable('status')}>
                Status <BiSortAlt2 />
              </th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.length > 0 ? (
              paginatedData.map((row) => (
                <tr key={row.id} onClick={() => handleRowClick(row)}>
                  <td>{row.jadwal_id || '-'}</td>
                  <td>{row.tanggal_jadwal || '-'}</td>
                  <td>{row.waktu_jadwal || '-'}</td>
                  <td>{row.name_lab || '-'}</td>
                  <td>{row.name_user || '-'}</td>
                  <td>{row.status || '-'}</td> 
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">Tidak ada data penjadwalan</td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="pagination-container">
          <div className="pagination-controls">
            <label>
              Items per page:
              <select value={itemsPerPage} onChange={handleItemsPerPageChange}>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
                <option value={20}>20</option>
              </select>
            </label>
          </div>
          <div className="pagination-dropdown">
            <span>Page: </span>
            <select onChange={handlePageChange} value={currentPage}>
              {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                <option key={page} value={page}>
                  {page}
                </option>
              ))}
            </select>
            <span> of {totalPages}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JadwalData;
