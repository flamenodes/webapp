import { Link } from '@tanstack/react-router'

export default function ({
  name = true,
  iconSize= 10,
  textSize=20,
}: {
  name?: boolean
  iconSize?: number
  textSize?: number
}) {
  return (
    <Link to="/" aria-label="home" className="flex items-center space-x-2">
      <img className={`size-${iconSize}`} src="/flamenodes.png" alt="" />
      {name ? <span className="text-xl font-bungee ">FLAME NODES</span> : ''}
    </Link>
  )
}
