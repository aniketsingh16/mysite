import React, { useState } from "react";
import { Toaster, toast } from 'sonner'

const Subscribe = () => {
    const [email, setEmail] = useState('');
    const promise = () => new Promise((resolve) => setTimeout(() => resolve({ name: 'Enquiry' }), 2000));

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        // toast.success('Subscribed successfully..');
        toast.promise(promise, {
            loading: 'Subscribing..',
            success: (data) => {
                return 'Subscribed successfully..'
            },
            error: 'Error',
            });
        console.log("Data: ", email)
        setEmail('');
      };

      
    return (
        <section
            className="ps-section--newsletter bg--cover"
            style={{ backgroundImage: "url(/static/img/newsletter-bg.jpg)" }}>
            <h3 className="ps-section__title">
                Join our newsletter and get <br />
               latest updates on medical products
            </h3>
            <div className="ps-section__content">
                <form action="do_action" onSubmit={handleSubmit}>
                    <div className="ps-form--subscribe">
                        <div className="ps-form__control">
                            <input
                                className="form-control ps-input"
                                type="email"
                                required
                                placeholder="Enter your email address"
                                value={email}
                                onChange={handleEmailChange}
                            />
                            <button className="ps-btn ps-btn--warning" type="submit">
                                Subscribe
                            </button>
                            <Toaster position="bottom-center" richColors  />
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Subscribe;
