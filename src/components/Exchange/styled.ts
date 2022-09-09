import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  width: 90%;
  margin: 0 auto;
  padding: 100px 0;
`

export const ExchangeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`

export const Text = styled.p`
  font-family: 'Poppins';
  font-size: 2rem;

  color: #ffffff;
`

export const Input = styled.input`
  width: 276px;
  height: 50px;

  border-radius: 0.3rem;

  &:hover {
    transition: 0.3s;
    border: 2px solid grey;
  }
`

export const Button = styled.button`
  max-width: 130px;
  max-height: 50px;
  width: 100%;
  height: 100%;

  font-family: 'Poppins';
  font-size: 1.25rem;

  background: transparent;
  border: 2px solid #633b46;
  border-radius: 1rem;

  cursor: pointer;

  color: #ffffff;

  &:hover {
    background-color: #633b46;
    transition: 0.3s;
  }
`
