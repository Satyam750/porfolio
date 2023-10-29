import NavLink from "./NavLink"
const MenuOverlay = ({link}) => {
  return (
    <ul className="flex flex-col py-4 items-center">
        {link.map((links, index)=>(
            <li key={index}>
               <NavLink href={links.path} title={links.title}/>
            </li>
        ))}
    </ul>
  )
}

export default MenuOverlay