// import React,{useRef} from "react";
//service-id:service_18s9w2q
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import "./contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div
        className="container contact_container"
        style={{
          width: "58%",
          display: "grid",
          gridTemplateColumns: "60% 58%",
          gap: "12%",
        }}
      >
        <div
          className="contact_options"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.rem",
          }}
        >
          <article
            className="contact_option"
            style={{
              background: "#2c2c6c",
              padding: "1.2rem",
              borderRadius: "1.2rem",
              textAlign: "center",
            }}
          >
            <MdOutlineEmail
              style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}
            />
            <h4>Email</h4>
            <h5 style={{wordBreak:"break-word"}}>akshay03.singh03@gmail.com</h5>
            <a
              href="mailto:akshay03.singh03@gmail.com"
              style={{
                marginTop: "0.7rem",
                display: "inline-block",
                fontSize: "0.8rem",
              }}
            >
              Send a message
            </a>
          </article>
          <article
            className="contact_option"
            style={{
              background: "#2c2c6c",
              padding: "1.2rem",
              borderRadius: "1.2rem",
              textAlign: "center",
            }}
          >
            <RiMessengerLine
              style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}
            />
            <h4 style={{wordBreak:"break-word"}}>Messenger</h4>
            <h5>Akshay Singh</h5>
            <a
              href="https://m.me/profile.php?id=100041956102699" target="_blank"
              style={{
                marginTop: "0.7rem",
                display: "inline-block",
                fontSize: "0.8rem",
              }}
               rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article
            className="contact_option"
            style={{
              background: "#2c2c6c",
              padding: "1.2rem",
              borderRadius: "1.2rem",
              textAlign: "center",
            }}
          >
            <BsWhatsapp
              style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}
            />
            <h4 style={{wordBreak:"break-word"}}>WhatsApp</h4>
            <h5 style={{wordBreak:"break-word"}}>+918882525312</h5>
            <a href="https://wa.me/918882525312" target="_blank"
            style={{
              marginTop: "0.7rem",
              display: "inline-block",
              fontSize: "0.8rem",
            }} rel="noreferrer">
              Send a message
            </a>
          </article>
        </div>
        <form action="" style={{
          display:"flex",
          flexDirection:"column",
          gap:"1.2rem"
        }}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
            style={{
              width:"100%",
              padding:"1.5rem",
              borderRadius:"0.5rem",
              background:"transparent",
              border:"2px solid grey",
              resize:"none",
              color:"white"
            }}
          />
          <input
            type="email"
            name="email"
            id=""
            placeholder="Your Email"
            required
            style={{
              width:"100%",
              padding:"1.5rem",
              borderRadius:"0.5rem",
              background:"transparent",
              border:"2px solid grey",
              resize:"none",
              color:"white"
            }}
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
            style={{
              width:"100%",
              padding:"1.5rem",
              borderRadius:"0.5rem",
              background:"transparent",
              border:"2px solid grey",
              resize:"none",
              color:"white"
            }}
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
