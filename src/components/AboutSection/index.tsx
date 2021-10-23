import React from "react";
import { Wrapper, Title, Text } from "./styles";

import CallToAction from "../CallToAction";

const AboutSection: React.FC = () => {
  return (
    <Wrapper>
      <Title>About Us</Title>
      <Text>
        <strong>
          Specialist Steel Ltd is an BS EN 1090 and ISO 9001 accredited,
          fabrication and welding specialist based in Rotherham, South
          Yorkshire.
        </strong>
        <br />
        Specialist Steel is located Close to the M1 on the border between
        Rotherham and Sheffield, we are suitably located to offer our services
        nationwide.
      </Text>
      <Text>
        We offer an extensive range of subcontract manufacturing services
        including state of the art material cutting, a broad range of
        fabrication processes, Mig, Stick and Tig coded welding, finishing
        services and assembly. Whether you require individual component parts,
        or a complete manufacturing service, we are able to cater for all your
        needs.
      </Text>
      <Text>
        Our goal is to strive for perfection in all that we do. We have put
        together a strong, highly skilled and dedicated team with a wealth of
        experience that share a strong company ethos of doing things right, with
        the upmost of integrity, offering fast quote turnaround, competitive
        pricing, high quality product and prompt deliveries.
      </Text>
      <CallToAction primary href="/" label="Get in touch" />
    </Wrapper>
  );
};

export default AboutSection;
