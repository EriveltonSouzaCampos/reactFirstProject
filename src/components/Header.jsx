import estiloDaHeader from './Header.module.css'
import logoIgnite  from '../assets/logo_ignite.svg'

console.log(estiloDaHeader);
export function Header(){
    return(
        <header className={estiloDaHeader.headSite}>
            <img src={logoIgnite} alt="Logo do site" />
            <h1>Ignite Feed</h1>
        </header>
    )
}