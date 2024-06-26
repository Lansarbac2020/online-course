"use client"
import React, { useState } from 'react';
import emailjs from '@emailjs/browser'

const BecomeTeacherForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        // cv: null
    });

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     if (name === 'cv') {
    //         setFormData({
    //             ...formData,
    //             // cv: files[0]
    //         });
    //     } else {
    //         setFormData({
    //             ...formData,
    //             [name]: value
    //         });
    //     }
    // };
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
          ...formData,
          [name]: value
      });
  };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formDataToSend = new FormData();
        formDataToSend.append('name', formData.name);
        formDataToSend.append('email', formData.email);
        formDataToSend.append('subject', formData.subject);
        formDataToSend.append('message', formData.message);
        // formDataToSend.append('cv', formData.cv);

        emailjs.sendForm('service_krfcjal', 'template_dsn10kp', e.target, {publicKey:'3e0XDQPi9Ydh5g-qa'})
            .then((result) => {
                //console.log(result.text);
                toast.success("Le formulaire a ete envoye avec succes",{
                    description:'Envoie du formulaire de contact'
                   })
            }, (error) => {
                //console.log(error.text);
                toast.error("Le formulaire non envoye",{
                    description:'Echec lors de l\'envoie formulaire'
                   })
            });
    };

    return (
        <div className="mt-[90px] max-w-md mx-auto bg-white p-8 border border-gray-300 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-center">Devenir Enseignant</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Nom
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                        Matière d'enseignement
                    </label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                    ></textarea>
                </div>
                {/* <div>
                    <label htmlFor="cv" className="block text-sm font-medium text-gray-700">
                        Télécharger CV (PDF uniquement)
                    </label>
                    <input
                        type="file"
                        id="cv"
                        name="cv"
                        accept=".pdf"
                        onChange={handleChange}
                        className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-600 hover:file:bg-indigo-100"
                        required
                    />
                </div> */}
                <div>
                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Soumettre
                    </button>
                </div>
            </form>
        </div>
    );
};

export default BecomeTeacherForm;
