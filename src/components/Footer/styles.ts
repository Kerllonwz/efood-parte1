import styled from 'styled-components'

export const FooterBar = styled.footer`
  background-color: #E66767;
  padding: 40px 0;
`

export const FooterContent = styled.div`
  align-items: center;
  color: #FFEBD9;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1366px;
  padding: 0 40px;
  text-align: center;
`

export const FooterLogo = styled.div`
  align-items: center;
  border: 2px solid #FFEBD9;
  color: #FFEBD9;
  display: inline-flex;
  font-size: 36px;
  font-weight: 900;
  gap: 10px;
  line-height: 1;
  padding: 8px 16px;
`

export const LogoIcon = styled.svg`
  display: block;
  flex: 0 0 auto;
  height: 36px;
  width: 36px;
`

export const FooterText = styled.p`
  color: #FFEBD9;
  font-size: 16px;
  line-height: 1.5;
  margin-top: 16px;
`
