import { ReactNode, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '../../../../hooks'
import { selectCurrency } from '../../../../store/modules'
import {
  CurrencyLogoEuro,
  CurrencyLogoUah,
  CurrencyLogoUsd,
  CurrencyText,
  CurrencyWrapper,
  ExchangeIcon,
  Wrapper,
} from './styled'

export const Currency = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch({ type: 'LOAD_DATA' })
  }, [])

  const currencies = [
    {
      id: 1,
      base: 'uah',
      logo: <CurrencyLogoEuro />,
      code: 'EUR',
      value: useSelector(selectCurrency).currency.EUR,
    },
    {
      id: 2,
      base: 'uah',
      logo: <CurrencyLogoUsd />,
      code: 'USD',
      value: useSelector(selectCurrency).currency.USD,
    },
    {
      id: 3,
      base: 'eur',
      logo: <CurrencyLogoUsd />,
      code: 'USD',
      value: (
        useSelector(selectCurrency).currency.USD /
        useSelector(selectCurrency).currency.EUR
      ).toFixed(2),
    },
    {
      id: 4,
      base: 'eur',
      logo: <CurrencyLogoUah />,
      code: 'UAH',
      value: (1 / useSelector(selectCurrency).currency.EUR).toFixed(3),
    },
    {
      id: 5,
      base: 'usd',
      logo: <CurrencyLogoEuro />,
      code: 'EUR',
      value: (
        useSelector(selectCurrency).currency.EUR /
        useSelector(selectCurrency).currency.USD
      ).toFixed(2),
    },
    {
      id: 6,
      base: 'usd',
      logo: <CurrencyLogoUah />,
      code: 'UAH',
      value: (1 / useSelector(selectCurrency).currency.USD).toFixed(3),
    },
  ]

  const baseCurrency = useSelector(selectCurrency).baseCurrency
  return (
    <Wrapper>
      {currencies.map((currency): ReactNode => {
        if (currency.base === baseCurrency) {
          return (
            <CurrencyWrapper key={currency.id}>
              {currency.logo}
              <CurrencyText>1 {currency.code}</CurrencyText>
              <ExchangeIcon />
              <CurrencyText>
                {currency.value + ` ${currency.base.toUpperCase()}`}
              </CurrencyText>
            </CurrencyWrapper>
          )
        }
      })}
    </Wrapper>
  )
}
