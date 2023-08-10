import stylePost from './Post.module.css'
import pic_profile from '../assets/profile_picture.jpg'
import { Comments } from './comment'
import { Avatar } from './Avatar'

export function Post(props){
    return(
        <div className={stylePost.conterPosts}>
            <header className={stylePost.headerSite}>
                <div className={stylePost.userInfo}>
                    <Avatar
                        hasBorder
                        src={props.author.urlPhotoAvatar}
                    />
                    <span>
                        <strong>{props.author.name}</strong>
                        <p>{props.author.role}</p>
                    </span>
                </div>
                <time>Publicado há 1h</time>
            </header>
            <body>
                <div className={stylePost.conterBody}>
                    <p>Fala galeraa 👋</p>
                    <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 asd sdsadas sadjasdhask asdajkdhsa askjhasdaiiu asjdasd</p>
                    <p>👉 <a href="#">jane.design/doctorcare</a></p>
                    <div className={stylePost.hpHashtag}>
                        <a href="#">#algoAi</a>
                        <a href="#">#algoAi</a>
                        <a href="#">#algoAi</a>
                    </div>
                </div>
            </body>
            <footer className={stylePost.footerSite}>
                <strong>Feedback</strong>
                <form className={stylePost.commentForm}>
                    <textarea cols="5" rows="3" placeholder='Deixe seu cometario...'></textarea>
                    <div className={stylePost.buttonForm}><button type='submit'>Publicar</button></div>
                </form>
            </footer>
            <div className={stylePost.commented}>
                <Comments 
                />
                <Comments 
                />
                <Comments 
                />
            </div>
        </div>

    )
}
