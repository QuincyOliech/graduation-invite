import React, { useState } from 'react';
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';

const RsvpForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [attendance, setAttendance] = useState('yes');
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail();
    Swal.fire({
      icon: 'success',
      title: 'Thank you for RSVPing!',
      text: 'Your response has been recorded.',
    });
    setName('');
    setEmail('');
    setAttendance('yes');
    closeModal();
  };
  
  const sendEmail = () => {
    const attendingMessage = attendance === 'yes' ? 'Attending' : 'Not Attending';
  
    const templateParams = {
      to_name: name,
      to_email: email,
      message: attendingMessage,
    };
    
    const templateId = attendance === 'yes' ? 'template_ot0bem2' : 'template_y1ybs5o';
  
    emailjs
      .send('Quincy', templateId, templateParams, 'xNqcIVwCVfHH2-XOM')
      .then((response) => {
        console.log('Email sent successfully!', response);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };
  
  return (
    <>
      <button
        className="bg-yellow-500 text-black font-bolder mr-4 py-2 px-4 rounded-lg hover:bg-red-700 hover:text-white hover:font-bolder"
        onClick={openModal}
      >
         RSVP 
      </button>

      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 ">
          <div className="absolute inset-0 bg-black opacity-50 "></div>
          <div className="relative max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md  p-10 ">
          <div className="text-center">
                <p className="text-lg text-gray-900 mb-4 dark:text-white">
                  Please fill out the form to RSVP to the event.
                </p>
              </div>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name" className="block text-sm font-medium text-gray-900 dark:text-gray-300">
                Name:
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mb-4 p-2 rounded-md border border-gray-400 focus:outline-none focus:border-purple-700 dark:focus:border-pink-500 w-full"
                required
              />
              <label htmlFor="email" className="block text-sm font-medium text-gray-900  dark:text-gray-300">
                Email:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mb-4 p-2 rounded-md border border-gray-400 focus:outline-none focus:border-purple-700 dark:focus:border-pink-500 w-full"
                required
              />
              <label htmlFor="attendance" className="block text-sm font-medium text-gray-900  dark:text-gray-300">
                Will you be attending?
              </label>
              <select
                name="attendance"
                id="attendance"
                value={attendance}
          onChange={(e) => setAttendance(e.target.value)}
          className="mb-4 p-2 rounded-md border border-gray-400 focus:outline-none focus:border-purple-700 dark:focus:border-pink-500 w-full"
          required
        >
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        <div className="flex justify-center">
        <button
          type="submit"
          className="px-8 py-3 rounded-md bg-red-700 text-white font-bold hover:bg-yellow-500 transition duration-300"
        >
          RSVP
        </button>
        </div>
        
      </form>
    </div>
  );
</div>
)}
</>
);
};

export default RsvpForm;
