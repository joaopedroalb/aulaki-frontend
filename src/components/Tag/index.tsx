import { TagBG } from "./style"

type TagProps = {
    name:string
}

export default function Tag({name}:TagProps) {
  return (
    <TagBG>
        <p>{name}</p>
    </TagBG>
  )
}
