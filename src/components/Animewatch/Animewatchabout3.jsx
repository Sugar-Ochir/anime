import React from 'react'
import ReactPlayer from "react-player"
import './animewatch.css'
import undead from '../../images/undead.jpg';
import { NavLink } from 'react-router-dom'

function Animewatchabout3() {
  return (
    <div>
    <NavLink to="/Home"><header><i class="bi bi-arrow-left bi-arrow-left1" ></i></header></NavLink>
    <div className='video1'>
    <ReactPlayer
    url="https://balu0816.wistia.com/medias/gvx6c7x9e5"
    width="69%"
    height="70%"
    controls={true}
        style={{ position: 'fixed', top: 50, left:0}}
    config={{
        wistia: {
          options: {
            videoFoam: true,
           
            title: 'Your Video Title Here',
          },
        },
      }}/></div>
    <div className='aniwatchrec1'>
    <div className='animeabout'>
    <NavLink to="/Animewatch3"><i class="bi bi-list-ul"></i></NavLink>
    <i class="bi bi-info-circle"></i>
    <div className='activeline2'></div>
    </div>
        <div className='aniwatchimg1'><img src={undead} alt='undead'></img></div>
        <div className='epsdate'>
        <p className='eps'>Ангиуд 1-12</p>
        <p className='animedate'>2023-10-28</p>
        </div>
        <div className='aniwatchdivider'></div>
        <div className='aboutrec1'>
            <p>Хүрсэн хүнээ золгүй болгодгоосоо болж энгийн амьдралаар 
                амьдарч чадахгүй болсон охин Изүмо Фүко. Өөрийн дуртай 
                мангагаа уншиж дуусгаад амиа хорлохоор шийдсэн байсан охины өмнө, 
                өөрийгөө үхэшгүй гэсэн залуу гарч ирэв. Түүний золгүйтлийн чадварыг 
                өөрийг нь алж чадах хүч байж магадгүй гэж бодсон залуу охиныг дагуулан 
                хүчийг нь судлахаар шийдэв.</p>
        </div>

    </div>


      <footer></footer>
      </div>
  )
}

export default Animewatchabout3