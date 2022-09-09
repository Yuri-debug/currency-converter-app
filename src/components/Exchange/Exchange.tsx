import { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { selectCurrency } from '../../store/modules'
import { Button, ExchangeWrapper, Text, Input, Wrapper } from './styled'

export const Exchange = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch({ type: 'LOAD_DATA' })
  }, [])

  const [res, setRes] = useState(String)
  const [submit, setSubmit] = useState(Boolean)

  const EUR = useAppSelector(selectCurrency).currency.EUR
  const USD = useAppSelector(selectCurrency).currency.USD

  const inputHandler = (input: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = input.target.value.split(' ')
    if (inputValue[1] === 'eur') {
      setRes(Number(inputValue[0]) * EUR + ' EUR')
    } else if (inputValue[1] === 'usd') {
      setRes(Number(inputValue[0]) * USD + ' USD')
    }
    setSubmit(false)
  }
  return (
    <Wrapper>
      <ExchangeWrapper>
        <Text>Exchange</Text>
        <Input type="text" onChange={inputHandler} />
        {submit && <Text>{res}</Text>}
        <Button
          onClick={() => {
            setSubmit(true)
          }}
        >
          Convert
        </Button>
      </ExchangeWrapper>
    </Wrapper>
  )
}
