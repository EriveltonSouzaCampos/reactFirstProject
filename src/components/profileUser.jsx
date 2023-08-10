import styleUserProfile from './profileUser.module.css';
import photoBack from '../assets/capa_de_perfil.jpg'
import pic_profile from '../assets/profile_picture.jpg'
import { PencilSimpleLine } from 'phosphor-react';
import { Avatar } from './Avatar';

export function Profile(infoUser){
    return(
        <div className={styleUserProfile.conterProfile}>
            <div className={styleUserProfile.contentAndEdit}>
                <div className={styleUserProfile.imageProfile}>
                    <img src={photoBack}/>
                    <Avatar hasBorder src="https://media.licdn.com/dms/image/D4D03AQHYJiHBd8iDEQ/profile-displayphoto-shrink_100_100/0/1673241752201?e=1697068800&v=beta&t=c-EGQYv5JaYq9xqglijtv6hMY-Cje77xcQsGMHCv7Vc"/>
                </div>
                <div className={styleUserProfile.userContent}>
                    <h1>{infoUser.name}</h1>
                    <p>{infoUser.job}</p>
                </div>
                <div className={styleUserProfile.buttonUser}>
                    <div>  <a href="#"> <PencilSimpleLine/>Edite seu perfil</a></div>
                </div>
            </div>
        </div>
    )
}