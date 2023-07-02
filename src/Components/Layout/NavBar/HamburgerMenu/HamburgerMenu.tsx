import React from 'react'
import { HamburgerButton } from './HamburgerMenu.styles'

interface HamburgerMenuProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
};

const HamburgerMenu = ({ isOpen, setIsOpen }: HamburgerMenuProps) => {
  return (
      <HamburgerButton
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          $isOpen={isOpen}
          aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
      >
          <span />
          <span />
          <span />
      </HamburgerButton>
  )
}

export default HamburgerMenu