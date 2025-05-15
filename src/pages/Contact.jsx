import { useState } from 'react';

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log('Form submitted:', formData);
    setSubmitStatus('success');
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  const contactInfo = [
    {
      title: 'Phone',
      content: ['(555) 123-4567', '(555) 765-4321'],
    },
    {
      title: 'Email',
      content: ['info@ortizandpartners.com', 'contact@ortizandpartners.com'],
    },
    {
      title: 'Address',
      content: ['1401 Main Street', 'Suite 300', 'Columbia, SC 29201'],
    },
    {
      title: 'Office Hours',
      content: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: By Appointment'],
    },
  ];

  return (
    <div>
      {/* Page Header */}
      <div style={{ 
        backgroundColor: '#1B2B4B', 
        color: 'white', 
        padding: '4rem 2rem', 
        textAlign: 'center',
        marginBottom: '3rem'
      }}>
        <h1 style={{ 
          fontSize: '2.5rem', 
          fontFamily: 'Cormorant Garamond, serif', 
          marginBottom: '1rem' 
        }}>
          Contact Us
        </h1>
        <h3 style={{ fontWeight: 'normal' }}>
          Get in Touch with Our Legal Team
        </h3>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', marginBottom: '4rem' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
          {/* Contact Information */}
          <div style={{ flex: '1 1 300px', minWidth: '300px' }}>
            <h2 style={{ 
              fontFamily: 'Cormorant Garamond, serif', 
              marginBottom: '2rem',
              color: '#1B2B4B',
            }}>
              Contact Information
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {contactInfo.map((info) => (
                <div 
                  key={info.title}
                  style={{
                    padding: '1.5rem',
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                  }}
                >
                  <div style={{ marginBottom: '1rem', color: '#1B2B4B', fontSize: '1.5rem' }}>
                    {info.title === 'Phone' && '📞'}
                    {info.title === 'Email' && '✉️'}
                    {info.title === 'Address' && '📍'}
                    {info.title === 'Office Hours' && '🕒'}
                  </div>
                  <h3 style={{ 
                    fontFamily: 'Cormorant Garamond, serif', 
                    marginBottom: '0.5rem',
                    color: '#1B2B4B',
                  }}>
                    {info.title}
                  </h3>
                  {info.content.map((line) => (
                    <p 
                      key={`${info.title}-${line}`}
                      style={{ 
                        color: '#666',
                        marginBottom: '0.25rem',
                        fontSize: '0.95rem'
                      }}
                    >
                      {line}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div style={{ flex: '1 1 500px', minWidth: '500px' }}>
            <div style={{
              backgroundColor: 'white',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              padding: '2rem',
            }}>
              <h2 style={{ 
                fontFamily: 'Cormorant Garamond, serif', 
                marginBottom: '1.5rem',
                color: '#1B2B4B',
              }}>
                Send Us a Message
              </h2>
              {submitStatus === 'success' && (
                <div style={{
                  backgroundColor: '#d4edda',
                  color: '#155724',
                  padding: '1rem',
                  borderRadius: '4px',
                  marginBottom: '1rem'
                }}>
                  Thank you for your message. We will get back to you soon!
                </div>
              )}
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                  <div style={{ flex: '1 1 250px' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem' }}>Name*</label>
                    <input
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        borderRadius: '4px',
                        border: '1px solid #ccc',
                        fontSize: '1rem'
                      }}
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div style={{ flex: '1 1 250px' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem' }}>Email*</label>
                    <input
                      required
                      type="email"
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        borderRadius: '4px',
                        border: '1px solid #ccc',
                        fontSize: '1rem'
                      }}
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                  <div style={{ flex: '1 1 250px' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem' }}>Phone</label>
                    <input
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        borderRadius: '4px',
                        border: '1px solid #ccc',
                        fontSize: '1rem'
                      }}
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div style={{ flex: '1 1 250px' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem' }}>Subject*</label>
                    <input
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        borderRadius: '4px',
                        border: '1px solid #ccc',
                        fontSize: '1rem'
                      }}
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem' }}>Message*</label>
                  <textarea
                    required
                    rows={6}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      borderRadius: '4px',
                      border: '1px solid #ccc',
                      fontSize: '1rem',
                      resize: 'vertical'
                    }}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                <div style={{ marginTop: '1rem' }}>
                  <button
                    type="submit"
                    style={{
                      backgroundColor: '#1B2B4B',
                      color: 'white',
                      padding: '0.75rem 1.5rem',
                      border: 'none',
                      borderRadius: '4px',
                      fontSize: '1rem',
                      cursor: 'pointer',
                      fontFamily: 'Cormorant Garamond, serif',
                    }}
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Google Maps Embed - South Carolina Location */}
      <div style={{ height: '400px', width: '100%' }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3346.1519351163897!2d-80.84377492392789!3d32.99182937349251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88fc6b3c5d0f1f21%3A0x5e66f2d723c4c0c9!2sColumbia%2C%20SC%2029201!5e0!3m2!1sen!2sus!4v1715133265!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Office Location - Columbia, South Carolina"
        />
      </div>
    </div>
  );
};

export default Contact;
