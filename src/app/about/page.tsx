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
import Bogati from "../images/Bogati.jpg";
import Edward from "../images/Edward.jpg";
import Ryan from "../images/Ryan.jpg";
import Capitan from "../images/Capitan.jpg";
import Jackob from "../images/Jackob.jpg";
import Joe from "../images/Joe.jpg";
import Mirko from "../images/Mirko.jpg";
import CardTeam from "./cardTeam";
import { BsArrowRight } from "react-icons/bs";
import ButtonWrapper from "../components/custom_button";

const About: FC = () => (
  <DivDefaultContainerSC style={{ marginTop: "40px" }}>
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
          images={Edward}
          links={"https://www.linkedin.com/in/edward-hinson-90975419/"}
          name={"Edward Hinson"}
          post={"CMO"}
        />
        <CardTeam
          images={Ryan}
          links={"https://www.linkedin.com/in/tagg-ryan-14229671/"}
          name={"Ryan Tag AR"}
          post={"VR Engineer"}
        />
        <CardTeam
          images={Capitan}
          links={"https://www.linkedin.com/in/captain-haiti-816b59208/"}
          name={"Captain Haiti"}
          post={"Community Development"}
        />
        <CardTeam
          images={Bogati}
          links={"https://www.linkedin.com/in/boogatti/"}
          name={"CJ NFT"}
          post={"Metaverse Lead"}
        />
        <CardTeam
          images={Jackob}
          links={"https://www.linkedin.com/in/jakob-von-rosen-imig-38b278204/"}
          name={"Jakob Von Rosen "}
          post={"COO"}
        />
         
         
          <CardTeam
          images={Mirko}
          links={"https://www.linkedin.com/in/mirko-tancredi-6898a9280/"}
          name={"Mirko Tancredi"}
          post={"Attorney"}
        />
          <CardTeam
          images={Joe}
          links={"https://www.linkedin.com/in/joseph-singer-332506223/"}
          name={"Joseph Singer"}
          post={"Engineering lead"}
        />
      </DivTeamSC>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "grid",
          justifyItems: "center",
          margin:'40px 0 60px 0',
        }}
      >
        {" "}
        <Link style={{marginTop: '15px'}} href={"https://www.linkedin.com/company/earthyinc/mycompany/?viewAsMember=true"}>
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
        <DivH1SC style={{marginBottom:'0px'}}>Join our community</DivH1SC>
        <DivH1SC style={{ fontWeight: "400",margin:'0px 0px 0px 0px' }}>
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
          <Link href={"https://discord.gg/rT6p247U"}>
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
