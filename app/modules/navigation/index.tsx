import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import styled from "styled-components";
import { Button } from "../../components/button";
import { navItems } from "./navItems";

const SNav = styled.nav`
  width: 100%;
  height: 60px;
  padding: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SNavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  list-style: none;
`;

const SNavListItem = styled.li<{ isLink?: boolean }>`
  color: ${({ theme }) => theme.color.white};
  position: relative;

  &:before {
    content: "";
    height: 2px;
    width: 0;
    border-radius: 2rem;
    position: absolute;
    bottom: -0.25rem;
    left: -0.4rem;
    background-color: ${({ theme }) => theme.color.primary};
  }

  &:hover {
    &:before {
      ${({ isLink }) =>
        isLink && "width: calc(100% + 0.8rem); transition: all 200ms ease-out;"}
    }
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.color.white};
  }
`;

export const Navigation = () => {
  const { replace } = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    replace("/signin");
  };

  return (
    <SNav>
      <Image
        src="/logo.png"
        alt="Zipapp Logo"
        width={100}
        height={24}
        priority
        color="#ffffff"
      />
      <SNavList>
        {navItems.map(({ name, href }) => (
          <SNavListItem key={href} isLink>
            <Link href={href}>{name}</Link>
          </SNavListItem>
        ))}
        <SNavListItem>
          <Button onClick={handleLogout}>Logout</Button>
        </SNavListItem>
      </SNavList>
    </SNav>
  );
};
