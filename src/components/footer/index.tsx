import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaGlobe, FaWhatsapp } from "react-icons/fa";
import * as Styles from "./styles";

function Footer() {
  return (
    <Styles.FooterContainer>
      <Styles.ContentWrapper>
        <Styles.InfoSection>
          <Styles.SectionTitle>HELENA MAIA ❤</Styles.SectionTitle>
          <Styles.Description>
            This project was built to demonstrate and refine my skills with Redux. 
            All interactions, such as adding, removing, incrementing, or decrementing 
            products in the cart, as well as performing login actions, are managed through 
            a global state accessible to any component that requires this data. 
            The repository link below provides full documentation on how to run the 
            project and includes additional details on the Redux implementation.
          </Styles.Description>

          <Styles.RepoLink href="https://github.com/DevHelena/redux-store" target="_blank" rel="noopener noreferrer">
            <Styles.Icon>
              <FaGithub />
            </Styles.Icon>
            Repo: github.com/DevHelena/redux-store
          </Styles.RepoLink>
        </Styles.InfoSection>

        <Styles.SocialSection>
          <Styles.SectionTitle>SOCIAL</Styles.SectionTitle>
          <Styles.SocialLinks>
            <Styles.ContactItem>
              helenaaraujo.dev@gmail.com
              <Styles.Icon>
                <FaEnvelope />
              </Styles.Icon>
            </Styles.ContactItem>
            <Styles.SocialItem
              href="https://github.com/DevHelena"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/DevHelena
              <Styles.Icon>
                <FaGithub />
              </Styles.Icon>
            </Styles.SocialItem>

            <Styles.SocialItem
              href="https://helenamaiadev.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              helenamaiadev.com
              <Styles.Icon>
                <FaGlobe />
              </Styles.Icon>
            </Styles.SocialItem>

            <Styles.SocialItem
              href="https://www.linkedin.com/in/devhelena/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/devhelena
              <Styles.Icon>
                <FaLinkedin />
              </Styles.Icon>
            </Styles.SocialItem>            
            
            <Styles.SocialItem
              href="https://wa.me/5569999187754"
              target="_blank"
              rel="noopener noreferrer"
            >
              +55 (69) 99918-7754
              <Styles.Icon>
                <FaWhatsapp />
              </Styles.Icon>
            </Styles.SocialItem>

            <Styles.ContactItem>
              +55 (69) 98121-7773
              <Styles.Icon>
                <FaPhone />
              </Styles.Icon>
            </Styles.ContactItem>
          </Styles.SocialLinks>
        </Styles.SocialSection>
      </Styles.ContentWrapper>

      <Styles.Divider />

      <Styles.FooterNote>
        © Copyright {new Date().getFullYear()} . Made by{" "}
        <Styles.AuthorName
          href="https://helenamaiadev.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Helena Maia {" "}
        </Styles.AuthorName>❤
      </Styles.FooterNote>
    </Styles.FooterContainer>
  );
}

export default Footer;
