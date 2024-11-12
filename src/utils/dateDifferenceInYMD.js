function dateDifferenceInYMD(date1, date2) {
    const startDate = new Date(date1);
    const endDate = new Date(date2);
  
    // Calculate the year difference
    let years = endDate.getFullYear() - startDate.getFullYear();
    
    // Calculate the month difference
    let months = endDate.getMonth() - startDate.getMonth();
    
    // Calculate the day difference
    let days = endDate.getDate() - startDate.getDate();
  
    // Adjust months and years if necessary
    if (days < 0) {
      months -= 1;
      days += new Date(endDate.getFullYear(), endDate.getMonth(), 0).getDate(); // days in the previous month
    }
  
    if (months < 0) {
      years -= 1;
      months += 12;
    }
  
    return { years, months, days };
  }
  export default dateDifferenceInYMD
