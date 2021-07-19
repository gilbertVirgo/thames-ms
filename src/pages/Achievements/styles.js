import React from 'react'
import styled from 'styled-components'


export const AchievementsWrapper = styled.div`
  section p {
    font-size: 1.1rem;
    padding: 0;
  }

  h1, h2 {
    margin: 2rem 0;
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

  h3 {
    overflow-wrap: break-word;
    max-width: 100%;
  }

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

  h1 {
    overflow-wrap: break-word;
  }

  main {
    background: white;
    border: 3px solid black;
    padding: 3rem 8rem;
    max-width: 760px;
    width: 100%;
  }

  button {
    background: white;
  }

  button:hover {
    background: #f2f2f2;
    cursor: pointer;
  }

  textarea {
    resize: none
  }

  textarea, input, data, .select {
    border: none;
    outline: none;
    background: #eee;
    padding: 1rem;
  }
`


export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;

  > * {
    margin: 0.6rem 0;
  }

  label {
    padding-right: 2rem;
  }

  button {
    margin-right: 0;
  }
`
