export const exportTokenToCSV = async () => {
    const token = localStorage.getItem('accessToken');
    const timestamp = new Date().toISOString();
    
    // Create CSV content
    const csvContent = `Timestamp,Token\n${timestamp},${token}`;
    
    // Create blob and download
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'access_token.csv');
    link.click();
  }
  