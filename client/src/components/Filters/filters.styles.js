import styled from 'styled-components';

export const FiltersWrapper = styled.section`
  width: 17%;
  height: 100%;
  padding: 10pxpx;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #A65FD4;
`

export const FiltersContainer = styled.div`
position: relative;
font-size: 16px;
`

export const InputFilter = styled.select`
  width: 100%;
  height: 100%;
  border: black 2px solid;
  background-color: transparent;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 700;
  min-width: 200px;
  padding: 10px 5px;
  box-shadow: 0 0 0 1px rgba(113 119 144, 0.25);
  color: black;
  transition: all 0.3s ease-in-out;
  &:focus{
    outline: none;
    box-shadow: 0 0 0 1px rgba(113 119 144, 0.5);
  }
`

export const ResetBtn = styled.button`
  border: black 2px solid;
  background-color: transparent;
  font-size: 16px;
  border-radius: 10px;
  padding: 10px 15px;
  margin-top: 30px;
  min-width: 200px;
  transition: transform 0.3s ease-in-out;
  text-shadow: 0 0 0 1px white
  cursor: pointer;
  &:hover{
   transform: scale(1.05);
  }
`