import styleComment from './comment.module.css'

import { ThumbsUp, Trash, TrashSimple } from 'phosphor-react'
import pic_profile from '../assets/profile_picture.jpg'
import { Avatar } from './Avatar'

export function Comments(){
    return(
        <div className={styleComment.conterComment}>
            <div className={styleComment.pictureAndComment}>
                <Avatar
                    hasBorder = {false}
                    src="https://media.licdn.com/dms/image/D4D03AQHG8EB5JWb0zw/profile-displayphoto-shrink_200_200/0/1675173272619?e=1697068800&v=beta&t=XEZrgAOBBFyK9py3iFNu6Fz1gvXAsTwF8nsZ9kVjga8"
                />
                <div className={styleComment.Comment}>
                    <header>
                        <div className={styleComment.infoComment}>
                            <strong>Nome do cara</strong>
                            <time>Cerca de 2h</time>
                        </div>
                        <button className={styleComment.Button} title='Deletar comentario'>
                            <Trash
                                size={25}
                            />
                        </button>
                    </header>
                    <footer>
                        <p>Aqui esta o comentario feito</p>
                    </footer>
                </div>
            </div>
            <button className={styleComment.Button}>
                <strong>
                    <ThumbsUp/>
                    <span>
                        Aplaudir • 37
                    </span>
                </strong>
            </button>
        </div>
    )
}