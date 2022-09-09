import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const StyledLink = styled(Link)`
  padding: 1rem;

  font-family: 'Poppins';
  font-size: 1rem;

  text-decoration: none;

  color: #ffffff;

  cursor: pointer;

  &:hover {
    transition: 0.3s;

    color: #f3666e;
  }
`
