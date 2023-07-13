import { FC } from "react";
import Link from "next/link";
import { StaticImageData } from "next/image";
import{
    DivContainerCardSC,
    DivDescriptionCadSC,
    DivPostSC,
    DivNameSC,
    DivLinkidSC,
    DivImageSC,
  } from "./styles.about";

  type CardTeamProps = {
    name: string;
    post: string;
    links:string;
    images:StaticImageData;
  }
  import {BsLinkedin} from "react-icons/bs";

const CardTeam: FC<CardTeamProps> = ({name,post,links,images}) => (
<DivContainerCardSC>
<DivImageSC img={images}/>
<DivDescriptionCadSC>
    <DivNameSC>{name}</DivNameSC>
    <DivPostSC>{post}</DivPostSC>
</DivDescriptionCadSC>
<DivLinkidSC>
   <Link href={links}> <BsLinkedin size={30} color={'#195946'}/></Link>
    </DivLinkidSC>
</DivContainerCardSC>
);

export default CardTeam;
