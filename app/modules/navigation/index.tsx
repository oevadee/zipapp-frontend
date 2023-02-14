import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import styled from "styled-components";
import { Button } from "../../components/button";

const SNav = styled.nav`
  width: 100%;
  height: 80px;
  padding: 2rem;
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

const SNavListItem = styled.li`
  color: ${({ theme }) => theme.color.white};

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.color.white};
  }
`;

export const Navigation = () => {
  const { push } = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    push("/signin");
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
        <SNavListItem>
          <Link href="/">Home</Link>
        </SNavListItem>
        <SNavListItem>
          <Link href="/profile">Profile</Link>
        </SNavListItem>
        <SNavListItem>
          <Button onClick={handleLogout}>Logout</Button>
        </SNavListItem>
      </SNavList>
    </SNav>
  );
};
