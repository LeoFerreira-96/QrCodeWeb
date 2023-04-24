import { Link } from "gatsby"
import * as React from "react"
import "./style.css"

const Carrossel = () => {
  const data = [
    {
      name: "E-mail",
      img: {
        src: require("../../images/email.png").default,
        alt: "qr code para contato via email",
      },
      description: "Lorem Ipsom nhapo nhapo",
      url: "mailto:exemplo@exemplo.com",
    },
    {
      name: "WhatsApp",
      img: {
        src: require("../../images/whats.png").default,
        alt: "qr code para contato via whatsapp",
      },
      description: "Lorem Ipsom nhapo nhapo",
      url: "https://wa.me/xxxxxxxxxxx",
    },
    {
      name: "LinkedIn",
      img: {
        src: require("../../images/linkedin.png").default,
        alt: "qr code para contato via linkedin",
      },
      description: "Lorem Ipsom nhapo nhapo",
      url: "https://www.linkedin.com/in/seu-nome-aqui",
    },
    {
      name: "Git Hub",
      img: {
        src: require("../../images/github.png").default,
        alt: "qr code para visualizar meu github",
      },
      description: "Lorem Ipsom nhapo nhapo",
      url: "https://github.com/seu-username-aqui",
    },

    {
      name: "E-mail",
      img: {
        src: require("../../images/email.png").default,
        alt: "qr code para contato via email",
      },
      description: "Lorem Ipsom nhapo nhapo",
      url: "mailto:exemplo@exemplo.com",
    },
    {
      name: "WhatsApp",
      img: {
        src: require("../../images/whats.png").default,
        alt: "qr code para contato via whatsapp",
      },
      description: "Lorem Ipsom nhapo nhapo",
      url: "https://wa.me/xxxxxxxxxxx",
    },
    {
      name: "LinkedIn",
      img: {
        src: require("../../images/linkedin.png").default,
        alt: "qr code para contato via linkedin",
      },
      description: "Lorem Ipsom nhapo nhapo",
      url: "https://www.linkedin.com/in/seu-nome-aqui",
    },
    {
      name: "Git Hub",
      img: {
        src: require("../../images/github.png").default,
        alt: "qr code para visualizar meu github",
      },
      description: "Lorem Ipsom nhapo nhapo",
      url: "https://github.com/seu-username-aqui",
    },
  ]
  return (
    <React.Fragment>
      <div className="carrossel">
        {data.map((i, index) => (
          <div className="item" key={index}>
            <b>{i.name}</b>
            <div className="image">
              <img src={i.img.src} alt={i.img.alt} />
            </div>
            <div className="info">
              <div className="description">
                <p>{i.description}</p>
              </div>
              <div className="action">
                <Link to={i.url}>
                  <b>Entrar</b>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  )
}

export default Carrossel
