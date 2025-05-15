import React from 'react';
import './CertificateForm.css';



export default function CertificateForm({formData , setFormData}) {
  return (
      <form className="certificate-form">
        <label htmlFor="name">Name</label>
        <input type="text" value={formData.name} onChange={(e)=> setFormData({...formData,name:e.target.value})} id="name" placeholder="Name of the awardee" />
        <label htmlFor="date">Date</label>
        <input type="date" value={formData.date} onChange={(e)=> setFormData({...formData,date:e.target.value})} id="date" placeholder="Date" />
        <label htmlFor="signature">Signature</label>
        <input type="text" value={formData.signature} onChange={(e)=> setFormData({...formData, signature:e.target.value})} id="signature" placeholder="Signature" />
        <label htmlFor="description">Description</label>
        <input type="text" value={formData.description} onChange={(e)=> setFormData({...formData, description:e.target.value})} id="description" placeholder="Description" />
      </form>
  );
}
