import React from "react";
import LinkWrapper from "./Link.styles";

interface LinkProps {
  text?: string;
  href?: string;
}

const Link = ({ text, href }: LinkProps) => {
  return (
    <LinkWrapper>
      <a className="styled-button" href={href ?? "#"}>
        {text ? text : "no prop value provided"}
      </a>
    </LinkWrapper>
  );
};

// export const MemoizedLink = React.memo(Button);
// export { Link };
export default Link;
