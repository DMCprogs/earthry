import { FC } from "react";
import Link from "next/link";
import { DivDefaultContainerSC } from "../styles.page";

const Test: FC = () => (
  <DivDefaultContainerSC>
    <h1>Test Page</h1>
    <Link href="/">Landing</Link>
  </DivDefaultContainerSC>
);

export default Test;
