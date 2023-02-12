import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'
import './Header.css'

const HeaderSocial = () => {
  return (
    <div className='header_social'>
    <a href="https://linkedin.com" target="_blank" rel="noreferrer"><BsLinkedin/></a>
    <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub/></a>
    <a href="https://instagram.com" target="_blank" rel="noreferrer"><AiFillInstagram/></a>
    </div>
  )
}

export default HeaderSocial