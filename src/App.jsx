import React from 'react';
import  { useState, useEffect } from 'react';
import axios from 'axios';

// API URL (replace <api_key> with your actual API key)
const API_URL = "https://financialmodelingprep.com/api/v3/income-statement/AAPL?period=annual&apikey=OM6BMSBb2JM9GXd8GeHXhke0ocxGj0E0";

const App = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState({
    startDate: '',
    endDate: '',
    minRevenue: '',
    maxRevenue: '',
    minNetIncome: '',
    maxNetIncome: ''
  });
  const [sortConfig, setSortConfig] = useState(null);

  // Fetch data from the API
  useEffect(() => {
    axios.get(API_URL)
      .then(response => {
        setData(response.data);
        setFilteredData(response.data);  // Initially, show all data
      })
      .catch(error => console.error("Error fetching data: ", error));
  }, []);

  // Apply filters and sorting
  useEffect(() => {
    let filtered = [...data];

    // Apply Date Range Filter
    if (filters.startDate && filters.endDate) {
      filtered = filtered.filter(item => {
        const date = new Date(item.date);
        return date >= new Date(filters.startDate) && date <= new Date(filters.endDate);
      });
    }

    // Apply Revenue Filter
    if (filters.minRevenue) {
      filtered = filtered.filter(item => item.revenue >= filters.minRevenue);
    }
    if (filters.maxRevenue) {
      filtered = filtered.filter(item => item.revenue <= filters.maxRevenue);
    }

    // Apply Net Income Filter
    if (filters.minNetIncome) {
      filtered = filtered.filter(item => item.netIncome >= filters.minNetIncome);
    }
    if (filters.maxNetIncome) {
      filtered = filtered.filter(item => item.netIncome <= filters.maxNetIncome);
    }

    // Apply Sorting
    if (sortConfig) {
      const { key, direction } = sortConfig;
      filtered.sort((a, b) => {
        if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
        if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
        return 0;
      });
    }

    setFilteredData(filtered);
  }, [filters, sortConfig, data]);

  // Handle filter changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  // Handle sorting
  const handleSort = (key) => {
    const direction = sortConfig && sortConfig.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc';
    setSortConfig({ key, direction });
  };

  return (
    <div className='w-full h-full justify-center align-middle'>
      <h1 className="text-3xl text-center mt-0 ">Apple Inc. Annual Income Statement</h1>
      
      {/* Filters */}
      <div className="mb-4">
      <div className="grid grid-cols-6 gap-4 font-extrabold">   <input 
            type="date"
            name="startDate"
            value={filters.startDate}
            onChange={handleFilterChange}
            className="border px-3 py-2 rounded"
          />
          <input
            type="date"
            name="endDate"
            value={filters.endDate}
            onChange={handleFilterChange}
            className="border px-3 py-2 rounded"
          />
          <input
            type="number"
            name="minRevenue"
            placeholder="Min Revenue"
            value={filters.minRevenue}
            onChange={handleFilterChange}
            className="border px-3 py-2 rounded"
          />
          <input
            type="number"
            name="maxRevenue"
            placeholder="Max Revenue"
            value={filters.maxRevenue}
            onChange={handleFilterChange}
            className="border px-3 py-2 rounded"
          />
          <input
            type="number"
            name="minNetIncome"
            placeholder="Min Net Income"
            value={filters.minNetIncome}
            onChange={handleFilterChange}
            className="border px-3 py-2 rounded"
          />
          <input
            type="number"
            name="maxNetIncome"
            placeholder="Max Net Income"
            value={filters.maxNetIncome}
            onChange={handleFilterChange}
            className="border px-3 py-2 rounded"
          />
        </div>
      </div>

      {/* Data Table */}
      <table className="table-auto w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="border p-2 cursor-pointer" onClick={() => handleSort('date')}>Date</th>
            <th className="border p-2 cursor-pointer" onClick={() => handleSort('revenue')}>Revenue</th>
            <th className="border p-2 cursor-pointer" onClick={() => handleSort('netIncome')}>Net Income</th>
            <th className="border p-2">Gross Profit</th>
            <th className="border p-2">EPS</th>
            <th className="border p-2">Operating Income</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              <td className="border p-2">{item.date}</td>
              <td className="border p-2">{item.revenue}</td>
              <td className="border p-2">{item.netIncome}</td>
              <td className="border p-2">{item.grossProfit}</td>
              <td className="border p-2">{item.eps}</td>
              <td className="border p-2">{item.operatingIncome}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
