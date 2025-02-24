// import React from 'react'
// import { Viewer } from '@react-pdf-viewer/core'

// export const ResumePage = () => {
//   return <Viewer fileUrl='./files/Ermiyas Damte CV.pdf'/>;

// }

import { useState } from 'react';
import { Document, Page } from 'react-pdf';

export const ResumePage = () => {
    const [numPages, setNumPages] = useState();
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div>
            <Document file="somefile.pdf" onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} />
            </Document>
            <p>
                Page {pageNumber} of {numPages}
            </p>
        </div>
    );
}

// export ResumePage;