'use client';

import type { Metadata } from "next";
import { useState } from "react";

// Note: Since we're using 'use client', we need to export metadata differently
// For now, we'll handle this in the component itself

export default function ContactUsPage() {
 const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
 const [formData, setFormData] = useState({
 name: '',
 email: '',
 message: ''
 });

 const handleSubmit = async (e: React.FormEvent) => {
 e.preventDefault();
 setFormStatus('sending');

 try {
 const response = await fetch('/api/contact', {
 method: 'POST',
 headers: {
 'Content-Type': 'application/json',
 },
 body: JSON.stringify(formData),
 });

 if (response.ok) {
 setFormStatus('success');
 setFormData({ name: '', email: '', message: '' });
 } else {
 setFormStatus('error');
 }
 } catch (error) {
 setFormStatus('error');
 }
 };

 const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
 setFormData(prev => ({
 ...prev,
 [e.target.name]: e.target.value
 }));
 };

 return (
 <>
 <div className="hero-section contact wf-section">
 <div className="wrapper-full">
 <div className="left-hero-content">
 <div className="line-block w-clearfix">
 <div className="subtitle-line"></div>
 <div className="sub-hero-tittle">DROP US A LINE</div>
 </div>
 <h1 className="white-heading">Contact Us</h1>
 <p className="hero-paragraph">Please fill out the form below and<br />your comment will be emailed to our Main Office.
 </p>
 </div>
 </div>
 </div>
 <div className="section wf-section">
 <div className="wrapper-full border new">
 <div className="form-block contact-section new w-form">
 <form id="email-form" name="email-form" onSubmit={handleSubmit} className="form">
 <label htmlFor="name" className="field-label">NAME:</label>
 <input 
 type="text" 
 className="text-field w-input" 
 maxLength={256} 
 name="name" 
 placeholder="Enter your name" 
 id="name" 
 value={formData.name}
 onChange={handleChange}
 required
 />
 <label htmlFor="email" className="field-label">EMAIL ADDRESS:</label>
 <input 
 type="email" 
 className="text-field w-input" 
 maxLength={256} 
 name="email" 
 placeholder="Enter your email" 
 id="email" 
 value={formData.email}
 onChange={handleChange}
 required
 />
 <label htmlFor="Message-2" className="field-label">YOUR MESSAGE:</label>
 <textarea 
 className="text-field message w-input" 
 maxLength={1000} 
 name="message" 
 placeholder="Enter your message" 
 id="Message-2" 
 rows={6}
 value={formData.message}
 onChange={handleChange}
 required
 style={{ resize: 'vertical', minHeight: '120px' }}
 />
 <div className="top-padding">
 <input 
 type="submit" 
 value={formStatus === 'sending' ? 'Sending...' : 'Submit'} 
 disabled={formStatus === 'sending'}
 className="button left w-button" 
 />
 </div>
 </form>
 {formStatus === 'success' && (
 <div className="w-form-done" style={{display: 'block'}}>
 <div>Thank you! Your submission has been received!</div>
 </div>
 )}
 {formStatus === 'error' && (
 <div className="w-form-fail" style={{display: 'block'}}>
 <div>Oops! Something went wrong while submitting the form.</div>
 </div>
 )}
 <div className="contact-us-block">
 <div>
 <div className="address-icons"></div>
 </div>
 <div className="contact-parg-cont">
 <p>101 N. 8th St. <br />Pekin IL</p>
 </div>
 </div>
 <div className="contact-us-block">
 <div>
 <div className="address-icons _2"></div>
 </div>
 <div className="contact-parg-cont">
 <p><a style={{color:"#EF6A3F", textDecoration: "none"}} href="mailto:stpauluccpekin@yahoo.com">stpauluccpekin@yahoo.com</a></p>
 </div>
 </div>
 <div className="contact-us-block">
 <div>
 <div className="address-icons _3"></div>
 </div>
 <div className="contact-parg-cont">
 <p><a style={{color:"#EF6A3F", textDecoration: "none"}} href="tel:+13093475196">(309) 347-5196</a></p>
 </div>
 </div>
 </div>
 </div>
 </div>
 </>
 );
}

