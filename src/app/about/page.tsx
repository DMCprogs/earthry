import { FC } from "react";
import Link from "next/link";
import { DivDefaultContainerSC } from "../styles.page";
import {
  DivH1SC,
  DivDetailTextSC,
  ContainerSC,
  DivContainerTeamSC,
  DivTeamSC,
  ButtonLinkenInSC,
  DivJoinSC,
  ButtonJoinSC,
} from "./styles.about";
import teamLogo from "../images/Team.jpg";
import CardTeam from "./cardTeam";
import { BsArrowRight } from "react-icons/bs";
import ButtonWrapper from "../components/custom_button";

const About: FC = () => (
  <DivDefaultContainerSC style={{ marginTop: "140px" }}>
    <DivH1SC>Our vision and motivation</DivH1SC>
    <ContainerSC>
      <DivDetailTextSC>
        A key aspect of our philosophy is recognizing the power of shared values
        and beliefs. When people with common spiritual backgrounds come
        together, they can create strong bonds, provide mutual support, and
        inspire each other to grow and reach their full potential. And the
        platform we are building is designed to bring people of all faiths and
        beliefs together and create an environment conducive to those shared
        connections.
      </DivDetailTextSC>
    </ContainerSC>
    <DivContainerTeamSC>
      <DivH1SC >Our team</DivH1SC>
      <DivTeamSC>
        <CardTeam
          images={teamLogo}
          links={"https://www.linkedin.com/"}
          name={"Sam Singer"}
          post={"General director"}
        />
        <CardTeam
          images={teamLogo}
          links={"https://www.linkedin.com/"}
          name={"Sam Singer"}
          post={"General director"}
        />
        <CardTeam
          images={teamLogo}
          links={"https://www.linkedin.com/"}
          name={"Sam Singer"}
          post={"General director"}
        />
        <CardTeam
          images={teamLogo}
          links={"https://www.linkedin.com/"}
          name={"Sam Singer"}
          post={"General director"}
        />
        <CardTeam
          images={teamLogo}
          links={"https://www.linkedin.com/"}
          name={"Sam Singer"}
          post={"General director"}
        />
        <CardTeam
          images={teamLogo}
          links={"https://www.linkedin.com/"}
          name={"Sam Singer"}
          post={"General director"}
        />
      </DivTeamSC>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "grid",
          justifyItems: "center",
        }}
      >
        {" "}
        <Link style={{marginTop: '15px'}} href={"https://www.linkedin.com/"}>
            <ButtonWrapper
                primary={false}
                width={326}
                height={84}
                directionRadius={"rtl"}>
                  <span>View serv on Linkedin </span>
            </ButtonWrapper>
            
        </Link>{" "}
      </div>

      <DivJoinSC>
        <DivH1SC style={{marginBottom:'10px'}}>Join our community</DivH1SC>
        <DivH1SC style={{ fontWeight: "400",margin:'10px 0' }}>
          Ready to improve the environment with us?
        </DivH1SC>
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "grid",
            justifyItems: "center",
          }}
        >
          {" "}
          <Link href={"#"}>
            <ButtonWrapper
                primary={true}
                width={326}
                height={84}
                directionRadius={"rtl"}>
                  <span>Join the community</span>
            </ButtonWrapper>
            </Link>
        </div>
      </DivJoinSC>
    </DivContainerTeamSC>
  </DivDefaultContainerSC>
);

export default About;
