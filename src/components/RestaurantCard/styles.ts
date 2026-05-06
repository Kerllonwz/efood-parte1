import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Card = styled.article`
  background-color: #FFFFFF;
  color: #E66767;
`

export const ImageArea = styled.div`
  height: 167px;
  position: relative;
  width: 100%;
`

export const Cover = styled.img`
  height: 167px;
  object-fit: cover;
  width: 100%;
`

export const Tags = styled.div`
  display: flex;
  gap: 8px;
  position: absolute;
  right: 8px;
  top: 8px;
`

export const Tag = styled.span`
  background-color: #E66767;
  color: #FFFFFF;
  display: inline-block;
  font-size: 12px;
  font-weight: 700;
  line-height: 1;
  padding: 4px 8px;
`

export const Content = styled.div`
  border: 1px solid #E66767;
  border-top: 0;
  padding: 8px;
`

export const TitleLine = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  gap: 16px;
`

export const Title = styled.h2`
  color: #E66767;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.2;
`

export const Rating = styled.span`
  align-items: center;
  color: #E66767;
  display: inline-flex;
  flex: 0 0 auto;
  font-size: 16px;
  font-weight: 700;
  gap: 8px;
  line-height: 1;
`

export const Star = styled.span`
  color: #FFB930;
  font-size: 18px;
  line-height: 1;
`

export const Description = styled.p`
  color: #E66767;
  font-size: 14px;
  line-height: 1.6;
  margin: 8px 0;
`

export const Button = styled(Link)`
  align-items: center;
  background-color: #E66767;
  border: 0;
  color: #FFFFFF;
  cursor: pointer;
  display: flex;
  font-size: 14px;
  font-weight: 700;
  justify-content: center;
  line-height: 1.4;
  margin-top: 8px;
  padding: 4px 0;
  text-align: center;
  width: 100%;
`
