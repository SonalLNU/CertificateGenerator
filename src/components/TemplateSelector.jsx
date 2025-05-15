import React from 'react';
import './TemplateSelector.css';
import temp1 from '../assets/temp1.png';
import temp2 from '../assets/temp2.png';
import temp3 from '../assets/temp3.png';

const templates = [
    { id: '1', src: temp1, alt: 'Template 1' },
    { id: '2', src: temp2, alt: 'Template 2' },
    { id: '3', src: temp3, alt: 'Template 3' },
  ];
const TemplateSelector = ({ selectedTemplate, onSelect }) => {
  return (
    <div className="template-selector">
      {templates.map((template) => (
        <img
          key={template.id}
          src={template.src}
          alt={template.alt}
          className={`template-thumb ${selectedTemplate === template.id ? 'selected' : ''}`}
          onClick={() => onSelect(template.id)}
        />
      ))}
    </div>
  );
};

export default TemplateSelector;
