import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  max-width: 100%;
  height: 75px;
  position: sticky;
  place-items: center;
  place-content: space-around;
  background-color: #283655;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid #400053;
  z-index: 100;
  display: flex;
  top: 0;
`

export const Logo = styled.img`
  width: auto;
  max-height: 80px;
  cursor: pointer;
`

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 30px;
`

export const Item = styled(NavLink)` 
  position: relative;
  min-width: 105px;
  text-align: center;
  color: #fff;
  -webkit-transition: color 0.3s;
  transition: color 0.3s;
  display: block;
  padding: 1em;
  cursor: pointer;
  text-decoration: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-touch-callout: none;
  -khtml-user-select: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  &:hover {
    color: #be0d51;
  }
  &[aria-current]:not([aria-current="false"]) {
    color: #be0d51;
  }
`

export const Item_Link = styled.div`
  padding: 5px;
  text-decoration: none;
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.3em;
  font-weight: 800;
  border: white 3px solid;
  background-color: transparent;
  border-radius: 4px;
`
