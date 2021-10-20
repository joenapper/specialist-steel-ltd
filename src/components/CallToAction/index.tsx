import React from "react";
import Link from "next/link";
import { Wrapper } from "./styles";

interface CallToActionProps {
  primary?: boolean;
  href: string;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label: string;
}

const CallToAction: React.FC<CallToActionProps> = ({
  primary = false,
  href,
  size = "medium",
  backgroundColor,
  label,
}) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    <Link href={href}>
      <Wrapper
        className={["storybook-button", `storybook-button--${size}`, mode].join(
          " "
        )}
        style={{ backgroundColor }}
      >
        {label}
      </Wrapper>
    </Link>
  );
};

export default CallToAction;
