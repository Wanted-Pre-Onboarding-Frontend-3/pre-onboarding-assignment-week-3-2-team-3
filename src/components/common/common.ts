import styled from "styled-components";

interface CommonStyle extends Omit<React.CSSProperties, "padding" | "margin"> {
  mt?: number;
  mr?: number;
  mb?: number;
  ml?: number;
  padding?: number[];
  margin?: number[];
}

const Flex = styled.div<CommonStyle>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  gap: ${({ gap }) => `${gap}px`};
  padding: ${({ padding }) => padding?.map((v) => `${v}px `)};
`;

const Span = styled.span<CommonStyle>`
  color: ${({ color }) => color};
  text-decoration: ${({ textDecoration }) => textDecoration};
  font-size: ${({ fontSize }) => `${fontSize}px`};
  font-weight: ${({ fontWeight }) => fontWeight};
  margin-top: ${({ mt }) => `${mt}px`};
  margin-right: ${({ mr }) => `${mr}px`};
  margin-bottom: ${({ mb }) => `${mb}px`};
  margin-left: ${({ ml }) => `${ml}px`};
`;

const Section = styled.section<CommonStyle>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || "column"};
  align-items: ${({ alignItems }) => alignItems || "center"};
  justify-content: ${({ justifyContent }) => justifyContent || "center"};
  margin-top: ${({ mt }) => (mt ? `${mt}px` : "72px")};
  margin-right: ${({ mr }) => (mr ? `${mr}px` : "12px")};
  margin-bottom: ${({ mb }) => (mb ? `${mb}px` : "36px")};
  margin-left: ${({ ml }) => (ml ? `${ml}px` : "12px")};
  line-height: 1.6;
`;

const Paragraph = styled.p<CommonStyle>`
  font-size: ${({ fontSize }) => `${fontSize}px`};
  color: ${({ color }) => color};
  text-align: ${({ textAlign }) => textAlign};
  text-decoration: ${({ textDecoration }) => textDecoration};
`;

const Heading1 = styled.h1<CommonStyle>`
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "18px")};
  font-weight: bold;
  margin-top: ${({ mt }) => `${mt}px`};
  margin-right: ${({ mr }) => `${mr}px`};
  margin-bottom: ${({ mb }) => `${mb}px`};
  margin-left: ${({ ml }) => `${ml}px`};
  text-align: ${({ textAlign }) => textAlign};
`;

const Button = styled.button<CommonStyle & { active?: boolean }>`
  padding: ${({ padding }) => padding?.map((v) => `${v}px `)};
`;

const Image = styled.img`
  animation-duration: 300ms;
  &:hover {
    opacity: 0.7;
  }
`;

export { Button, Flex, Heading1, Image, Paragraph, Section, Span };
