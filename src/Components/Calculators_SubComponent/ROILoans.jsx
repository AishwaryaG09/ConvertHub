import { useSelector } from "react-redux";
import { useState, useMemo } from "react";

const ROILoans = () => {
  const bankDetails = useSelector((state) => state.banks.Banks);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 4;

  const totalPages = Math.ceil(bankDetails.length / rowsPerPage);
  // const startIndex = (currentPage - 1) * rowsPerPage;
  // const currentRows = bankDetails.slice(startIndex, startIndex + rowsPerPage);
  const currentRows = useMemo(() => {
    const startIndex = (currentPage - 1) * rowsPerPage;
    return bankDetails.slice(startIndex, startIndex + rowsPerPage);
  }, [bankDetails, currentPage, rowsPerPage]);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <>
      <table
        border="1"
        cellPadding="10"
        style={{ borderCollapse: "collapse", width: "100%" }}
      >
        <thead>
          <tr>
            <th>IFSCCode</th>
            <th>BankName</th>
            <th>ROI of PersonalLoan</th>
            <th>ROI of HomeLoan</th>
            <th>ROI of CarLoan</th>
            <th>Agent Name</th>
            <th>Agent Contact no</th>
          </tr>
        </thead>

        <tbody>
          {currentRows.map((bank) => (
            <tr key={bank?.IFSCCode}>
              <td>{bank.IFSCCode}</td>
              <td>{bank.BankName}</td>
              <td>{bank.ROI.PersonalLoan}</td>
              <td>{bank.ROI.HomeLoan}</td>
              <td>{bank.ROI.CarLoan}</td>
              <td>{bank.AgentDetails.Name}</td>
              <td>{bank.AgentDetails.ContactNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <button onClick={handlePrev} disabled={currentPage === 1}>
          ⬅️ Previous
        </button>
        <span style={{ margin: "0 15px" }}>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNext} disabled={currentPage === totalPages}>
          Next ➡️
        </button>
      </div>
    </>
  );
};

export default ROILoans;
