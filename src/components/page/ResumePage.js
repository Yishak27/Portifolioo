// import React, { useState } from 'react';
// import { Document, Page, pdfjs } from 'react-pdf';
// import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
// import 'react-pdf/dist/esm/Page/TextLayer.css';

// // Set up the worker for pdf.js
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// export const ResumePage = () => {
//   const [numPages, setNumPages] = useState(null);
//   const [pageNumber, setPageNumber] = useState(1);

//   const onDocumentLoadSuccess = ({ numPages }) => {
//     setNumPages(numPages);
//   };

//   const goToPreviousPage = () => {
//     setPageNumber((prevPage) => Math.max(prevPage - 1, 1));
//   };

//   const goToNextPage = () => {
//     setPageNumber((prevPage) => Math.min(prevPage + 1, numPages));
//   };

//   return (
//     <div style={{ textAlign: 'center', marginTop: '20px' }}>
//       <h1>My CV</h1>
//       <div style={{ marginTop: '20px' }}>
//         <Document
//           file="/Ermiyas Damte CV.pdf.pdf" // Path to your PDF file in the public folder
//           onLoadSuccess={onDocumentLoadSuccess}
//         >
//           <Page pageNumber={pageNumber} />
//         </Document>
//         <div style={{ marginTop: '10px' }}>
//           <button onClick={goToPreviousPage} disabled={pageNumber <= 1}>
//             Previous
//           </button>
//           <span style={{ margin: '0 10px' }}>
//             Page {pageNumber} of {numPages}
//           </span>
//           <button onClick={goToNextPage} disabled={pageNumber >= numPages}>
//             Next
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };


import React from 'react'
import NavBar from './NavBar'

export const ResumePage = () => {
    return (
        <>
            <NavBar></NavBar>
            <embed src="/Ermiyas Damte CV.pdf" type="application/pdf" width="100%" style={{
                height: "100vh", width: "100%"
            }} height="1000px" />
        </>)
}