import React from 'react'
import styled from 'styled-components'


export const AchievementCard = styled.div`
  border: 2px solid black;
  padding: 2rem;
  margin: 1rem 0;

  :hover {
    background: #f2f2f2;
  }
`

export const AchievementModal = styled.div`
  position: absolute;
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

  button {
    padding: .2rem 1.2rem;
    margin-right: 1rem;
    border: 2px solid #999;
  }
`

