import React from 'react';

export default function Thankyou({ formData }) {
  return (
    <div>
      <p>Hey {formData.name}, your record has been successfully saved.</p>
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
      <p>Date of Birth: {formData.dob}</p>
      <p>Your gender is:{formData.gender}</p>
      <img src={URL.createObjectURL(formData.image)} style={{ maxWidth: '400px', maxHeight: '400px' }} alt="dpImage" />
    </div>
  );
}
