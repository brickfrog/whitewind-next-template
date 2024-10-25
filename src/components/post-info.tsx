// src/components/post-info.tsx

import { ClockIcon } from "lucide-react";
import { Avatar } from "./avatar";
import readingTime from "reading-time";

import { MY_DID } from "#/lib/bsky";
import { date } from "#/lib/date";

import { Paragraph } from "./typography";

export function PostInfo({
  createdAt,
  content,
  includeAuthor = false,
}: {
  createdAt?: string;
  content: string;
  includeAuthor?: boolean;
}) {
  const did = "did:plc:fmnwe2six767bnsxd7qcr55x";

  return (
    <Paragraph>
      {includeAuthor && (
        <>
          <Avatar did={did} />
          <a
            href={`https://bsky.app/profile/${MY_DID}`}
            className="hover:underline hover:underline-offset-4"
          >
            カエル
          </a>{" "}
          &middot;{" "}
        </>
      )}
      {createdAt && (
        <>
          <time dateTime={createdAt}>{date(new Date(createdAt))}</time> &middot;{" "}
        </>
      )}
      <ClockIcon className="text-inherit inline size-3.5 mb-0.5" />{" "}
      {readingTime(content).text}
    </Paragraph>
  );
}
