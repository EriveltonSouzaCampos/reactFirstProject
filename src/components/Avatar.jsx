import styleAvatar from './Avatar.module.css'

export function Avatar(props){
    if(props.hasBorder === "False"){
        
    }
    return(
        <img 
        className={props.hasBorder ? styleAvatar.avatar : styleAvatar.avatarWithoutBorder} 
        src={props.src}/>
    )
}