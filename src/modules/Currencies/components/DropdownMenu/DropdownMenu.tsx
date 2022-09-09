import React, { ReactNode, useEffect, useState } from 'react'
import { useAppDispatch } from '../../../../hooks'
import { setBaseCurrency } from '../../../../store/modules'
import { Wrapper, StyledLabel } from './styled'

export const DropdownMenu = () => {
  const dispatch = useAppDispatch()
  const [event, setEvent] = useState('uah')
  const options = [
    {
      id: 1,
      label: 'eur',
    },
    {
      id: 2,
      label: 'usd',
    },
    {
      id: 3,
      label: 'uah',
    },
  ]

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setEvent(event.target.value)
  }

  useEffect(() => {
    dispatch(setBaseCurrency(event))
  }, [event])

  return (
    <Wrapper>
      <StyledLabel>
        <p>Base currency:</p>
        <select onChange={handleChange} defaultValue={options[2].label}>
          {options.map(
            (option): ReactNode => (
              <option key={option.id} value={option.label}>
                {option.label}
              </option>
            )
          )}
        </select>
      </StyledLabel>
    </Wrapper>
  )
}
