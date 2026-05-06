import { FooterBar, FooterContent, FooterLogo, FooterText, LogoIcon } from './styles'

const CutleryIcon = () => (
  <LogoIcon viewBox="0 0 40 40" aria-hidden="true">
    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.6">
      <path d="M9 5v10M14 5v10M19 5v10M14 5v30M8 16c0 5 3 9 6 9s6-4 6-9" />
      <path d="M29 5c5 6 5 14 0 20v10M34 5v30" />
    </g>
  </LogoIcon>
)

const Footer = () => (
  <FooterBar>
    <FooterContent>
      <FooterLogo aria-label="efood">
        <span>efood</span>
        <CutleryIcon />
      </FooterLogo>

      <FooterText>Viva experiências gastronômicas no conforto da sua casa</FooterText>
    </FooterContent>
  </FooterBar>
)

export default Footer
