import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Wrapper, Form, Input, TextArea, Button } from "./styles";

const ContactSection: React.FC = () => {
  const router = useRouter();
  return (
    <Wrapper>
      <h2>Get in touch</h2>
      <p>Please use the contact form below to send a message</p>
      <Form>
        <Input type="text" placeholder="Name*" required />
        <Input type="text" placeholder="Number" />
        <Input type="email" placeholder="Email*" required />
        <Input type="text" placeholder="Company" />
        <TextArea placeholder="Message" cols="30" rows="10"></TextArea>
        <div>
          <Button type="submit" value="Send message" />
        </div>
      </Form>
      {/* Stops next/image src error throwing in Storybook */}
      {router === null ? (
        <img
          src="/contact-img.png"
          alt="Person welding"
          height={287}
          width={450}
        />
      ) : (
        <Image
          src="/contact-img.png"
          alt="Person welding"
          height={287}
          width={450}
        />
      )}
    </Wrapper>
  );
};

export default ContactSection;
