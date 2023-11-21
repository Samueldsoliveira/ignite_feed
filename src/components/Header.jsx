import igniteLogo from '../assets/ignite-logo.svg'

export function Header() {
  return(
    <header 
    className="bg-gray-800 flex justify-center py-5 mt-3 gap-2">
      <img src={igniteLogo} alt="Logo do ignite" width={40} />
        <strong className="text-xl">Ignite feed</strong>
    </header>
  )
}