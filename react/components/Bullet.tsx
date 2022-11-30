import React from "react"
import { Link } from "vtex.render-runtime"
import { LinkProps } from "./BulletTypes"
import { useCssHandles } from "vtex.css-handles"

import "./styles.css"

type Props ={
  src: string
  titleBullet : string
  link : LinkProps
}

const Bullet = ({src, titleBullet, link} : Props) =>{
  const CSS_HANDLES = [
    "bullet_item-main",
    "bullet_item--title",
    "bullet_item--image",
    "bullet_item--link"
  ]
  const handles = useCssHandles(CSS_HANDLES)

  return (
    <div className={handles["bullet_item-main"]}>

     <p  className={handles["bullet_item--title"]}>{titleBullet}</p>
      <Link
        className={handles["bullet_item--link"]}
        to = { link.url}
      >
          <img
            className={handles["bullet_item--image"]}
            src={src}
            alt={titleBullet}

          />
      </Link>
    </div>
  )
}

Bullet.schema = {
  title : "Bullet",
  type : "object",
  properties:{
    src:{
      title : "Imagen de Bullet",
      type:"string",
      widget:{
        "ui:widget": "image-uploader"
      }
    }
  }
}


export default Bullet
