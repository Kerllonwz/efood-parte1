import styled from 'styled-components'

const cutleryPattern = encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96">
    <g fill="none" stroke="#E66767" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" opacity=".15">
      <path d="M29 16v22M39 16v22M34 16v62M24 18v14c0 8 5 14 10 14s10-6 10-14V18"/>
      <path d="M64 17c8 9 8 21 0 30v31M73 17v61"/>
    </g>
  </svg>
`)

export const HeaderBar = styled.header`
  background-color: #FFF8F2;
  background-image: url("data:image/svg+xml,${cutleryPattern}");
  background-repeat: repeat;
  padding: 64px 0;
`

export const HeaderContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  max-width: 1366px;
  padding: 0 40px;
  text-align: center;
`

export const Logo = styled.div`
  align-items: center;
  border: 2px solid #E66767;
  color: #E66767;
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

export const BannerText = styled.h1`
  color: #E66767;
  font-size: 36px;
  font-weight: 700;
  line-height: 1.2;
  margin-top: 40px;

  @media (max-width: 640px) {
    font-size: 30px;
  }
`
