import styled from "styled-components";
import { Add, BoxClosed, Move, Search, Stats } from "../assets/Icons";
import { SidebarOption, OptionVals } from "./SidebarOption";
const Nav = styled.nav<{ isActive: boolean }>`
  grid-area: sidebar;
  width: ${(props) => (props.isActive ? "200px" : "50px")};
  transition: width 0.15s ease;
  overflow-y: auto;
  overflow-x: hidden;
`;

function createOption(
  optTitle: string,
  href: string,
  svgName: JSX.Element,
  links: Array<{ name: string; href: string }> = []
): OptionVals {
  return {
    title: optTitle,
    href: href,
    svg: svgName || "settings.svg",
    childLinks: links,
  };
}

const sidebarOptions = [
  createOption("Move", "/move", <Move />),
  createOption("Pick", "/pick", <BoxClosed />),
  createOption("Search", "/search", <Search />),

  createOption("Create", "/create", <Add />, [
    { name: "product", href: "/product" },
    { name: "tag", href: "/tag" },
    { name: "order", href: "/order" },
  ]),
  createOption("Stats", "/stats", <Stats />),
];

const Options = styled.div`
  padding: 0;
  list-style-type: none;
`;

type SidebarProps = {
  isActive: boolean;
};

export function Sidebar({ isActive }: SidebarProps) {
  return (
    <Nav isActive={isActive}>
      <Options>
        {sidebarOptions.map((option) => (
          <SidebarOption {...option} key={option.title} />
        ))}
      </Options>
    </Nav>
  );
}
