import { LinkWrapper, StyledLink } from './styled'

export const Links = () => {
  return (
    <LinkWrapper>
      <StyledLink to="/">Currencies</StyledLink>
      <StyledLink to="/exchange">Exchange</StyledLink>
    </LinkWrapper>
  )
}
