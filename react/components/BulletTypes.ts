export type BulletsSchema = Array<{
  titleBullet? : string
  image: string
  image2: string
  image3: string
  link? : LinkProps
}>

export interface LinkProps{
  url: string
  attributeNofollow : boolean
  attributeTitle?:string
  openNewTab? : boolean
  newTab?: boolean
}
