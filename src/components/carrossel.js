import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"

const Carrossel = () => {
  const data = [
    {
      name: "E-mail",
      img: [
        { src: "../images/email.png", alt: "qr code para contato via email" },
      ],
      description: "",
      url: "",
    },
    {
      name: "WhatsApp",
      img: [
        {
          src: "../images/whats.png",
          alt: "qr code para contato via whatsapp",
        },
      ],
      description: "",
      url: "",
    },
    {
      name: "LinkedIn",
      img: [
        {
          src: "../images/linkedin.png",
          alt: "qr code para contato via linkedin",
        },
      ],
      description: "",
      url: "",
    },
    {
      name: "Git Hub",
      img: [
        {
          src: "../images/github.png",
          alt: "qr code para visualizar meu github",
        },
      ],
      description: "",
      url: "",
    },
  ]
  return data.map(i => (
    <React.Fragment>
      <div className="carrossel">
        <div className="item">
          <div className="image">
            <StaticImage
              src={i.img.src}
              loading="eager"
              width={64}
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt={i.img.alt}
              style={{ marginBottom: `var(--space-3)` }}
            />
          </div>
          <div className="info">
            <div className="description"></div>
            <div className="action"></div>
          </div>
        </div>
      </div>
    </React.Fragment>
  ))
}

export default Carrossel
