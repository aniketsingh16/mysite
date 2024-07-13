import Image from "next/image";
import React from "react";

const AboutInfo = () => {
    return (
        <section className="ps-about--info">
            <h2> About Us </h2>
            <br />
            <h3 className="ps-block__title">
                Our Story
            </h3>
            <hr />
            <div className="ps-block__subtitle">
                Healthfirst Medicorp is one of India&apos;s leading healthcare and 
                medical equipments wholesale supplier. We operate across 23 states 
                and offer a quality range of first aid kits, hospital furniture, and
                medical equipment known for their low maintenance, high efficiency, 
                and superior performance. These attributes have helped us surpass our
                competitors in quality, innovative technology, and ethical business practices.
                <br />
                <br />
                Our director Mr. Ravi Singh, a seasoned professional with over 15 years
                of experience in the medical industry. With a distinguished background
                in the Indian Navy, Ravi brings a unique blend of discipline, dedication,
                and expertise to our company. His leadership and passion for improving 
                healthcare have been the driving force behind our success.
            </div>
            <br /><br />
            <h3 className="ps-block__title">
                Director&apos;s Message
            </h3>
            <hr />
            <div className="ps-about__content">
                <section className="ps-about__project">
                    <div className="container"> 
                        <section className="ps-section--block-grid">
                            <div className="ps-section__thumbnail">
                                <a className="ps-section__image" href="#">
                                    <Image
                                        src="/static/img/Director.png"
                                        height={350}
                                        width={350}
                                        alt=""
                                    />
                                </a>
                            </div>
                            <div className="ps-section__content">
                                <div className="ps-section__desc">
                                    <h3 className="ps-section__title">
                                        <img src="/static/img/quote-icon.png" alt="" />
                                    </h3>
                                    At Healthfirst Medicorp, Our mission is to enhance the quality of healthcare 
                                    by providing state-of-the-art medical equipments that healthcare professionals 
                                    can rely on. We push the boundaries of excellence in everything we do, so we can
                                    deliver the highest standards products that not only meet but exceed industry 
                                    standards, ensuring the best care for patients.
                                        <hr />
                                </div>
                                <h4>Ravi Singh</h4>
                                <p>Director & Chief Executive Officer</p>
                            </div>
                        </section>
                    </div>
                </section> 
                <h3 className="ps-block__title">
                Our Values
            </h3>
            <hr />
            </div>    
            <div className="ps-about__extent">
                <div className="row m-0">
                    <div className="col-12 col-md-4 p-0">
                        <div className="ps-block--about">
                            <div className="ps-block__icon">
                                <img
                                    src="/static/img/icon/award-icon-2.png"
                                    alt=""
                                />
                            </div>
                            <h2>
                                Quality
                            </h2>
                            <div className="ps-block__subtitle">
                            We are committed to offering only the highest quality
                            products that ensures safety and reliability.
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 p-0">
                        <div className="ps-block--about">
                            <div className="ps-block__icon">
                                <img
                                    src="/static/img/icon/dentistry-icon-2.png"
                                    alt=""
                                />
                            </div>
                            <h2>
                                Integrity 
                            </h2>
                            <div className="ps-block__subtitle">
                            Our business practices are founded on honesty and transparency,
                            building trust with our clients.
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 p-0">
                        <div className="ps-block--about">
                            <div className="ps-block__icon">
                                <img
                                    src="/static/img/icon/toothbrush-icon-2.png"
                                    alt=""
                                />
                            </div>
                            <h2>
                                Customer Focus
                            </h2>
                            <div className="ps-block__subtitle">
                            We prioritize our customers, offering personalized services
                             and support them to find the right solutions.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutInfo;
