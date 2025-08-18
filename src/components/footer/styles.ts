import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #000;
  color: #fff;
  padding: 4vw 10vw;
  
  @media (max-width: 960px) {
    padding: 2rem 10vw;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6vw;
  margin-bottom: 4vw;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 960px) {
    flex-direction: row;
    gap: 0;
    align-items: flex-start;
  }
`;

export const InfoSection = styled.div`
  max-width: 500px;
`;

export const RepoLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1.5rem;
  font-size: 0.85rem;
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  svg {
    font-size: 1rem;
  }

  
  @media (max-width: 960px) {
    justify-content: center;
  }

  @media (max-width: 440px) {
    font-size: 0.7rem;
  }
`;

export const SectionTitle = styled.h4`
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 1rem;
  
  @media (max-width: 960px) {
    text-align: center;
  }
`;

export const Description = styled.p`
  font-size: 0.85rem;
  margin-bottom: 0.5rem;

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 440px) {
    font-size: 0.8rem;
  }
`;

export const SocialSection = styled.div`
  text-align: center;

  @media (min-width: 960px) {
    text-align: right;
  }
`;

export const SocialLinks = styled.div`
  margin-top: 1rem;
`;

export const SocialItem = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  color: #fff;
  font-size: 0.75rem;
  margin-bottom: 0.8rem;
  text-decoration: none;

  @media (min-width: 960px) {
    justify-content: flex-end;
  }

  @media (max-width: 440px) {
    font-size: 0.7rem;
  }

  &:hover {
    text-decoration: underline;
  }
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  font-size: 0.75rem;
  margin-bottom: 0.8rem;

  @media (min-width: 960px) {
    justify-content: flex-end;
  }

  @media (max-width: 440px) {
    font-size: 0.7rem;
  }
`;

export const Icon = styled.div`
  font-size: 18px;
  display: flex;
  align-items: center;
  color: #fff;
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  margin-bottom: 2rem;
`;

export const FooterNote = styled.p`
  font-size: 0.75rem;
  text-align: center;

  @media (max-width: 440px) {
    font-size: 0.6rem;
  }
`;

export const AuthorName = styled.a`
  font-weight: bold;
  text-decoration: underline;
  color: #fff;
  
  @media (max-width: 440px) {
    font-size: 0.6rem;
  }
`;
