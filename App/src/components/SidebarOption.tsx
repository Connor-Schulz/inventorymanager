import styled from "styled-components";
import { Chevron } from "../assets/Icons";
import { useEffect, useState } from "react";
import Styles from "../Styles";

const OptionWrapper = styled.div`
  text-decoration: none;
  transition: background 0.25s ease;
  user-select: none;
  display: flex;
  align-items: center;
  margin: 5px 0;
  border-radius: 0 4px 4px 0;
  overflow: hidden;
  text-overflow: none;
  white-space: nowrap;
  padding: 0.5em;
  padding-left: 0;

  line-height: 1.5em;
  position: relative;

  &:hover {
    cursor: pointer;
    background: #575757;
  }

  &:hover * {
    fill: #8a88f7;
    color: #8a88f7;
  }
`;

const Link = styled.a`
  text-decoration: none;
`;

const Icon = styled.div`
  display: grid;
  place-items: center;
  padding: 0 10px;
`;

const OptionText = styled.div`
  margin: 0 auto 0 8px;
  font-size: 1.4em;
  color: ${Styles.white1};
`;

const SubOptions = styled.div<{ isOpen: boolean }>`
  transition: max-height 0.5s ease 0s;
  max-height: ${(props) => (props.isOpen ? "500px" : "1px")};
  padding-left: 25px;
  list-style-type: none;
  overflow: hidden;
`;

const SubOption = styled.div`
  font-size: 1.3em;
  color: ${Styles.white1};
  padding: 5px;
  text-transform: capitalize;

  &:hover {
    cursor: pointer;
    color: #a09bf9;
  }
`;

type OptionDropdownVals = {
  href?: string;
  svg: JSX.Element;
  title: string;
  childLinks: Array<{ name: string; href: string }>;
};

function Option({ href, svg, title, childLinks }: OptionDropdownVals) {
  const isDropDown = !!childLinks.length;

  const [isOpen, setIsOpen] = useState(
    JSON.parse(localStorage.getItem("dropdown") || "false")
  );

  useEffect(() => {
    localStorage.setItem("dropdown", isOpen.toString());
  }, [isOpen]);

  const showDropDown = () => {
    setIsOpen(!isOpen);
  };

  const mainButton = (
    <OptionWrapper>
      <Icon>{svg}</Icon>
      <OptionText>{title}</OptionText>
      {isDropDown ? <Chevron rotate={isOpen ? 90 : 0} /> : <></>}
    </OptionWrapper>
  );

  const dropDown = (
    <SubOptions isOpen={isOpen}>
      {childLinks.map((link) => (
        <Link href={link.href} key={link.name}>
          <SubOption>{link.name}</SubOption>
        </Link>
      ))}
    </SubOptions>
  );

  return (
    <>
      {isDropDown ? (
        <>
          <div onClick={showDropDown}>{mainButton}</div>
          {dropDown}
        </>
      ) : (
        <Link href={href} target="main-display">
          {mainButton}
        </Link>
      )}
    </>
  );
}

export type OptionVals = {
  title: string;
  href: string;
  svg: JSX.Element;
  childLinks?: Array<{ name: string; href: string }>;
};

export function SidebarOption({
  title,
  href,
  svg,
  childLinks = [],
}: OptionVals) {
  return <Option href={href} svg={svg} title={title} childLinks={childLinks} />;
}
