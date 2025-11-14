'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <div className="footer wf-section">
      <div className="footer-menu">
        <div className="wrapper-full">
          <div className="footer-on-flex">
            <div data-w-id="0dd22c20-1519-50fb-7dd5-2685cc139ade" className="column-footer">
              <div>
                <div className="footer-title"><strong className="bold-text-2">St. Pauls United Church of Christ</strong></div>
                <p className="white-paragraph transparence">As a congregation of Christ&apos;s people, we are called to demonstrate and share God&apos;s word of love, peace, mercy, and justice with all those whose lives we touch and welcome them into Christian fellowship.</p>
              </div>
            </div>
            <div data-w-id="0dd22c20-1519-50fb-7dd5-2685cc139af1" className="column-footer _17">
              <div className="footer-box-link">
                <div className="footer-title">MENU</div>
                <Link href="/" className="footer-nav-link transparence">Home</Link>
                <Link href="/worship-spiritual-life" className="footer-nav-link transparence">Worship &amp; Spiritual Life</Link>
                <Link href="/community-outreach" className="footer-nav-link transparence">Community Outreach</Link>
                <a href="https://www.eventbrite.com/o/st-paul-ucc-pekin-20138483458" target="_blank" rel="noopener noreferrer" className="footer-nav-link transparence">Events</a>
                <Link href="/special-music" className="footer-nav-link transparence">Special Music</Link>
                <a href="https://tithe.ly/give?c=2192819" target="_blank" rel="noopener noreferrer" className="footer-nav-link transparence">Online Giving</a>
                <Link href="/leadership" className="footer-nav-link transparence">Leadership</Link>
                <Link href="/calendar" className="footer-nav-link transparence">Calendar</Link>
                <Link href="/contact-us" className="footer-nav-link transparence">Contact Us</Link>
              </div>
            </div>
            <div data-w-id="0dd22c20-1519-50fb-7dd5-2685cc139b0b" className="column-footer contact-footer">
              <div className="footer-title">VISIT US</div>
              <div className="contact-us-block">
                <div>
                  <div className="address-icons"></div>
                </div>
                <div className="contact-parg-cont">
                  <p className="contact-paragraph transparence">101 N. 8th St. <br />Pekin IL</p>
                </div>
              </div>
              <div className="contact-us-block">
                <div>
                  <div className="address-icons _2"></div>
                </div>
                <div className="contact-parg-cont">
                  <p className="contact-paragraph transparence">stpauluccpekin@yahoo.com</p>
                </div>
              </div>
              <div className="contact-us-block">
                <div>
                  <div className="address-icons _3"></div>
                </div>
                <div className="contact-parg-cont">
                  <p className="contact-paragraph transparence">(309) 347-5196</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper-full">
        <div className="copy-box">
          <a href="http://www.redtowerdigital.com" className="template-link-footer transparence">Site Design by Red Tower</a>
        </div>
      </div>
    </div>
  );
}

