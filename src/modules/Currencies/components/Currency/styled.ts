import styled from 'styled-components'
import { IoLogoUsd, IoLogoEuro } from 'react-icons/io'
import { FaExchangeAlt, FaHryvnia } from 'react-icons/fa'

export const Wrapper = styled.div`
  max-width: 30%:
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const CurrencyWrapper = styled.div`
  display: flex;
  gap: 20px;

  margin: 20px 0;
`

export const CurrencyLogoEuro = styled(IoLogoEuro)`
  width: 40px;
  height: 40px;

  color: #ffffff;

  align-self: center;
`

export const CurrencyLogoUsd = styled(IoLogoUsd)`
  width: 40px;
  height: 40px;

  color: #ffffff;

  align-self: center;
`

export const CurrencyLogoUah = styled(FaHryvnia)`
  width: 40px;
  height: 40px;

  color: #ffffff;

  align-self: center;
`

export const CurrencyText = styled.p`
  font-family: 'Poppins';
  font-size: 2rem;

  color: #ffffff;

  align-self: center;
`

export const ExchangeIcon = styled(FaExchangeAlt)`
  width: 40px;
  height: 40px;

  color: #ffffff;

  align-self: center;

  &:hover {
    transition: 0.3s;

    color: #f3666e;
  }
`
