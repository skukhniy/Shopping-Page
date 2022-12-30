import React from 'react';
import { SocialMediaIconsReact } from 'social-media-icons-react';

export default function Footer() {
  return (
    <footer id="footerContainer">
      <h3>Contact</h3>
      <p>800-123-4567</p>
      <div>
        <SocialMediaIconsReact
          borderColor="rgba(0,0,0,0.25)"
          borderWidth="3"
          borderStyle="solid"
          icon="facebook"
          iconColor="rgba(255,255,255,1)"
          backgroundColor="rgba(11,11,11,0)"
          iconSize="5"
          roundness="16%"
          url="/checkout"
          size="20"
        />
        <SocialMediaIconsReact
          borderColor="rgba(0,0,0,0.25)"
          borderWidth="3"
          borderStyle="solid"
          icon="instagram"
          iconColor="rgba(255,255,255,1)"
          backgroundColor="rgba(11,11,11,0)"
          iconSize="5"
          roundness="16%"
          url="/checkout"
          size="20"
        />
        <SocialMediaIconsReact
          borderColor="rgba(0,0,0,0.25)"
          borderWidth="3"
          borderStyle="solid"
          icon="twitter"
          iconColor="rgba(255,255,255,1)"
          backgroundColor="rgba(11,11,11,0)"
          iconSize="5"
          roundness="16%"
          url="/checkout"
          size="20"
        />
        <SocialMediaIconsReact
          borderColor="rgba(0,0,0,0.25)"
          borderWidth="3"
          borderStyle="solid"
          icon="linkedin"
          iconColor="rgba(255,255,255,1)"
          backgroundColor="rgba(11,11,11,0)"
          iconSize="5"
          roundness="16%"
          url="/checkout"
          size="20"
        />
      </div>
      <div>
        <a
          href="https://github.com/skukhniy"
          target="_blank"
          rel="noopener noreferrer"
        >
          &copy; https://github.com/skukhniy
        </a>
      </div>
    </footer>
  );
}
