import { siBluesky as BlueskyIcon, siGithub as GithubIcon } from "simple-icons";

import { config } from "#/config";
import { MY_DID } from "#/lib/bsky";

export function Footer() {
  return (
    <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href={`https://bsky.app/profile/${MY_DID}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg width={16} height={16} viewBox="0 0 24 24" className="svg-icon">
          <path d={BlueskyIcon.path} />
        </svg>
        Bluesky
      </a>
      {config.sites.github && (
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href={`https://github.com/${config.sites.github}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg width={16} height={16} viewBox="0 0 24 24" className="svg-icon">
            <path d={GithubIcon.path} />
          </svg>
          GitHub
        </a>
      )}
    </footer>
  );
}
