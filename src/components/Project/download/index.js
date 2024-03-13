import React from 'react';
import './style.css';


function DownloadButton() {
  const handleDownload = async () => {
    try {
      const response = await fetch('URL');
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'DocumentacaoColdStart.pdf');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Erro ao baixar o arquivo:', error);
    }
  };

  return (
    <button className='download' onClick={handleDownload}>
      DOWNLOAD DOCUMENTATION
    </button>
  );
}

export default DownloadButton;
