import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
     <div class="container contact-wrapper">
            <div class="section-contact mt-5">
                <div class="row justify-content-center">
                    <div class="col-12 col-lg-10 col-xl-8">
                        <div class="header-section text-center">
                            <h2 class="title">Get In Touch
                                <span class="dot"></span>
                                <span class="big-title">CONTACT</span>
                            </h2>
                            

                        </div>
                    </div>
                </div>
                <div class="form-contact">
                    <form>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="single-input">
                                    <i class="fas fa-user"></i>
                                    <input type="text" name="name" placeholder="ENTER YOUR NAME"/>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="single-input">
                                    <i class="fas fa-envelope"></i>
                                    <input type="text" name="email" placeholder="ENTER YOUR EMAIL"/>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="single-input">
                                    <i class="fas fa-phone"></i>
                                    <input type="text" name="phoneNumber" placeholder="ENTER YOUR PHONE NUMBER"/>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="single-input">
                                    <i class="fas fa-check"></i>
                                    <input type="text" name="subject" placeholder="ENTER YOUR SUBJECT"/>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="single-input">
                                    <i class="fas fa-comment-dots"></i>
                                    <textarea placeholder="ENTER YOUR MESSAGE"></textarea>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="submit-input text-center">
                                    <input type="submit" name="submit" value="SUBMIT NOW"/>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default Contact