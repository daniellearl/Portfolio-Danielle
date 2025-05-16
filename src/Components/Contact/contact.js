import React from "react";
import "../../App.css";
import "./contact.css";

const contactLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/danielle-denise-arlantico-2b0052292/",
    external: true,
  },
  {
    label: "Email",
    href: "mailto:danielle.arlantico@gmail.com",
    external: false,
  },
  {
    label: "GitHub",
    href: "https://github.com/denisearl",
    external: true,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h1>Contact</h1>
      <h2>
        Let's Work Together!
        <br />
        I’m always open to cool projects and new opportunities. You can find my
        LinkedIn, Email, and GitHub down below, feel free to reach out anytime!
      </h2>

      <div className="contact-buttons">
        {contactLinks.map(({ label, href, external }) => (
          <a
            key={label}
            href={href}
            className="contact-button"
            {...(external && {
              target: "_blank",
              rel: "noopener noreferrer",
            })}
          >
            {label}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
