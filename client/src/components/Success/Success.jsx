import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logoPad.jpg'
import {
  MainBtn,
  SuccessLogo,
  SuccessTitle,
  SuccessWrapper,
} from './success.styles'

export default function Success() {
  return (
    <SuccessWrapper>
      <SuccessLogo src={logo} alt="logo" />
      <SuccessTitle>Game added correctly!!</SuccessTitle>
      <Link to="/home">
        <MainBtn>Go home</MainBtn>
      </Link>
    </SuccessWrapper>
  )
}
