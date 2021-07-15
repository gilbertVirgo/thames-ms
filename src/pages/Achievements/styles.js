import React from 'react'
import styled from 'styled-components'


export const AchievementsWrapper = styled.div`
  section p {
    font-size: 1.1rem;
    padding: 0;
  }

  h1, h2 {
    margin: 2rem 0 ;
  }

  section {
    background: #f2f2f2;
    padding: 3.4rem;
  }


  button {
    padding: .2rem 1.2rem;
    margin-right: 1rem;
    border: 2px solid #999;
  }

  button:hover {
    cursor: pointer
  }
`


export const AchievementCard = styled.div`
  border: 2px solid black;
  padding: 2rem;
  margin: 1rem 0;

  :hover {
    background: #f2f2f2;
    cursor: pointer;
  }
`

export const AchievementModal = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: #0a14274a;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  main {
    background: white;
    padding: 2rem;
    border: 2px solid black;
  }
`


export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 640px;
  line-height: 2;

  * {
    margin: 0.6rem 0;
  }

  label {
    padding-right: 2rem;
  }

  button {
    margin-right: 0;
  }
`
