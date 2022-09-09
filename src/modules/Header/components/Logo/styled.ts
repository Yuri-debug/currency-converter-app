import styled from 'styled-components'
import { BsCurrencyExchange } from 'react-icons/bs'

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  max-width: 200px;
  width: 100%;
`

export const LogoIcon = styled(BsCurrencyExchange)`
  max-width: 2rem;
  max-height: 2rem;
  width: 100%;
  height: 100%;

  align-self: center;

  padding: 1rem;

  color: #ffffff;
`

export const LogoText = styled.p`
  padding: 1rem;

  font-family: 'Poppins'
  font-size: 1rem;

  color: #ffffff;
`
