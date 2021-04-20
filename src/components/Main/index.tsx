import * as S from './styles'

const Main = ({
  title = 'React - NextJs Boilerplate',
  description = 'Typescript, ReactJs, NextJs & Styled Components'
}) => (
  <S.Wrapper>
    <S.Logo src="/img/logo.svg" />
    <S.Tille>{title}</S.Tille>
    <S.Description>{description}</S.Description>
    <S.Illustration src="/img/hero-illustration.svg" />
  </S.Wrapper>
)

export default Main
