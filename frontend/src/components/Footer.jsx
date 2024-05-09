import React from 'react'

export const Footer = () => {
  return (
    <footer id="footer" className="footer footer-1 bg-white">
                {/* ============================================= --> */}
                <div className="footer-widget">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-6 col-md-3 widget--about">
                                <div className="widget--content">
                                    <div className="footer--logo">
                                        {/* <img src="/images/logo/logo-dark2.png" alt="logo" /> */}
                                    </div>
                                    <p>86 Petersham town, New South Wales Wardll Street, Australia PA 6550</p>
                                    <div className="footer--contact">
                                        <ul className="list-unstyled mb-0">
                                            <li>+61 525 240 310</li>
                                            <li><a href="mailto:contact@land.com">contact@land.com</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- .col-md-2 end --> */}
                            <div className="col-xs-12 col-sm-3 col-md-2 col-md-offset-1 widget--links">
                                <div className="widget--title">
                                    <h5>Company</h5>
                                </div>
                                <div className="widget--content">
                                    <ul className="list-unstyled mb-0">
                                        <li><a href="#">About us</a></li>
                                        <li><a href="#">Career</a></li>
                                        <li><a href="#">Services</a></li>
                                        <li><a href="#">Properties</a></li>
                                        <li><a href="#">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-3 col-md-2 widget--links">
                                <div className="widget--title">
                                    <h5>Learn More</h5>
                                </div>
                                <div className="widget--content">
                                    <ul className="list-unstyled mb-0">
                                        <li><a href="#">Privacy</a></li>
                                        <li><a href="#">Terms & Conditions</a></li>
                                        <li><a href="#">Account</a></li>
                                        <li><a href="#">FAQ</a></li>
                                    </ul>
                                </div>
                            </div>
                            {/* <!-- .col-md-2 end --> */}
                            <div className="col-xs-12 col-sm-12 col-md-4 widget--newsletter">
                                <div className="widget--title">
                                    <h5>newsletter</h5>
                                </div>
                                <div className="widget--content">
                                    <form className="newsletter--form mb-40">
                                        <input type="email" className="form-control" id="newsletter-email" placeholder="Email Address" />
                                        <button type="submit"><i className="fa fa-arrow-right"></i></button>
                                    </form>
                                    <h6>Get In Touch</h6>
                                    <div className="social-icons">
                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                        <a href="#"><i className="fa fa-facebook"></i></a>
                                        <a href="#"><i className="fa fa-vimeo"></i></a>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- .col-md-4 end --> */}

                        </div>
                    </div>
                    {/* <!-- .container end --> */}
                </div>
                {/* <!-- .footer-widget end --> */}

                <div className="footer--copyright text-center">
                    <div className="container">
                        <div className="row footer--bar">
                            <div className="col-xs-12 col-sm-12 col-md-12">
                                <span>© 2018 <a href="http://themeforest.net/user/zytheme">Zytheme</a>, All Rights Reserved.</span>
                            </div>

                        </div>
                    </div>
                </div>
            </footer>
  )
}
