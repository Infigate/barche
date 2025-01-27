import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import logoCircle from '../assets/logo-circle.svg';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const serviceId = 'service_jl7d788'; // EmailJS サービス ID
    const templateId = 'template_dduej7f';  // EmailJS テンプレート ID
    const publicKey = 'x-z2unYpuaVRqUqgm'; // EmailJS Public Key

    emailjs
      .send(serviceId, templateId, formData, publicKey)
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          alert('Your inquiry has been submitted!');
          setFormData({
            companyName: '',
            contactName: '',
            email: '',
            subject: '',
            message: '',
          });
        },
        (error) => {
          console.error('Error sending email:', error.text);
          alert('Failed to send your inquiry. Please try again.');
        }
      );
  };

  return (
    <div className="container my-5" id="contact">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 mb-5">
          <img src={logoCircle} alt="Service Image" className="d-block mx-auto mb-3" />
          <form onSubmit={handleSubmit} className="p-4 border rounded">
            <div className="mb-3">
              <label htmlFor="companyName" className="form-label">
                Company Name
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                className="form-control"
                value={formData.companyName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="contactName" className="form-label">
                Contact Name
              </label>
              <input
                type="text"
                id="contactName"
                name="contactName"
                className="form-control"
                value={formData.contactName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="subject" className="form-label">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="form-control"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="form-control"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="text-center"> {/* ボタンを中央寄せ */}
              <button type="submit" className="btn-custom">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;