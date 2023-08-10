import { Header } from './components/Header'
import {Post} from './components/post'
import './Global.css'
import { Profile } from './components/profileUser'
import styleApp from './App.module.css'

const posts = 
[
  {
    id: 1,
    author: {
      urlPhotoAvatar: 'https://gitlab.com/uploads/-/system/user/avatar/12870782/avatar.png?width=400',
      name: 'Erivelton Campos',
      role: 'Dev React'
    },
    content: [
      { type: 'paragraph', content: 'Eae mrapaziada'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 publishedAgo LW Return, event '},
      {type: 'link', content: '👉 jane.design/doctorcare'}
    ],
    published: new Date('2023-08-08 15:25:36'),
  },
  {
    id: 2,
    author: {
      urlPhotoAvatar: 'https://media.licdn.com/dms/image/D4D03AQFYvsyjWv-gMg/profile-displayphoto-shrink_200_200/0/1678060811437?e=1697068800&v=beta&t=HhHzljIZa-6S68RhCvjyhhCHiYt_S418y3VBI8V6y8s',
      name: 'GB marinho',
      role: 'Dev React Calindra'
    },
    content: [
      { type: 'paragraph', content: 'Eae mrapaziada 🚀'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. 🚀 É um projeto que fiz 🚀 no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: '👉 jane.design/doctorcare'}
    ],
    published: new Date('2023-08-10 12:25:00'),
  },
  {
    id: 3,
    author: {
      urlPhotoAvatar: 'https://media.licdn.com/dms/image/D4D03AQHG8EB5JWb0zw/profile-displayphoto-shrink_200_200/0/1675173272619?e=1697068800&v=beta&t=XEZrgAOBBFyK9py3iFNu6Fz1gvXAsTwF8nsZ9kVjga8',
      name: 'Fael Costa',
      role: '👉 Dev Senior Calindra'
    },
    content: [
      { type: 'paragraph', content: 'Eae mrapaziada'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa.👉 É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: '👉 jane.design/doctorcare'}
    ],
    published: new Date('2023-07-08 15:25:36'),
  },
  {
    id: 4,
    author: {
      urlPhotoAvatar: 'https://media.licdn.com/dms/image/D4D03AQHYJiHBd8iDEQ/profile-displayphoto-shrink_100_100/0/1673241752201?e=1697068800&v=beta&t=c-EGQYv5JaYq9xqglijtv6hMY-Cje77xcQsGMHCv7Vc',
      name: 'Jhon Jhon',
      role: 'Dev Senior Master CO'
    },
    content: [
      { type: 'paragraph', content: 'Eae mrapaziada'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: '👉 jane.design/doctorcare'}
    ],
    published: new Date('2022-08-08 14:37:40'),
  },
];


function App() {
  

  return (
    <>
    <Header />

    <div className={styleApp.conterFeed}>
        <Profile
          name="Jhon Jhon"
          job="Dev Senior"
        />
        <div className={styleApp.post}>
            {posts.map(post => {
              return(
                <Post 
                  author = {post.author}
                  content = {post.content}
                  publishedAt = {post.published}
                />
              )
            })}
        </div>
    </div>
    </>
  )
}

export default App
