import React, { forwardRef } from 'react';
import Certificate1 from './templates/Certificate1';
import Certificate2 from './templates/Certificate2';
import Certificate3 from './templates/Certificate3';

const CertificatePreview = forwardRef(({ selectedTemplate, formData },ref) => {
  const props = { ...formData,ref }

  switch (selectedTemplate) {
    case '1':
      return <Certificate1 {...props} />;
    case '2':
      return <Certificate2 {...props} />;
    case '3':
      return <Certificate3 {...props} />;
    default:
      return <div>Please select a template.</div>;
  }
  
});

export default CertificatePreview;
