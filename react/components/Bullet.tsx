import React from "react"
import { Link } from "vtex.render-runtime"
import { LinkProps } from './BulletTypes';
import { useCssHandles } from "vtex.css-handles"

import "./styles.css"

type Props ={
  src: string
  src2: string
  src3: string

  titleBullet : string
  link : LinkProps


}

const Bullet = ({src, src2,src3, titleBullet, link} : Props) =>{
  const CSS_HANDLES = [
    "bullet_item-main",
    "bullet_item--title-container",
    "bullet_item--triangule",
    "bullet_item--title",
    "bullet_item--main-image",
    "bullet_item--image",
    "bullet_item--link"
  ]
  const handles = useCssHandles(CSS_HANDLES)

  return (
    <div className={handles["bullet_item-main"]}>
      <div className={handles["bullet_item--title-container"]}>
      <div className={handles["bullet_item--triangule"]}></div>
       <p  className={handles["bullet_item--title"]}>{titleBullet}</p>
      </div>
      <div className={handles["bullet_item--main-image"]}>

      <Link
        className={handles["bullet_item--link"]}
        to = { link.url}
      > <img
            className={handles["bullet_item--image"]}
            src={src}
            alt={titleBullet}
          />
            </Link>

            <Link
        className={handles["bullet_item--link"]}
        to = { link.url}
      >
           <img
            className={handles["bullet_item--image"]}
            src={src2}
            alt={titleBullet}
          />
           </Link>
           <Link
        className={handles["bullet_item--link"]}
        to = { link.url}
      >
           <img
            className={handles["bullet_item--image"]}
            src={src3}
            alt={titleBullet}
          />
           </Link>
      </div>
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
        "ui:widget": "image-uploader",
      }
    }
  }
}


export default Bullet
