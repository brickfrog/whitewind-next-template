"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { XRPC } from "@atcute/client"; // try this in future

const CACHE_EXPIRY_MS = 24 * 60 * 60 * 1000; // 24 hours

export function Avatar({ did }: { did: string }) {
  const [avatarUrl, setAvatarUrl] = useState<string>("");

  useEffect(() => {
    const fetchAvatarWithCache = async () => {
      try {
        const cachedAvatar = localStorage.getItem("avatarUrl");
        const lastFetchTime = localStorage.getItem("avatarFetchTime");

        const isCacheExpired =
          !lastFetchTime || Date.now() - parseInt(lastFetchTime, 10) > CACHE_EXPIRY_MS;

        if (cachedAvatar && !isCacheExpired) {
          setAvatarUrl(cachedAvatar);
          return;
        }

        const response = await fetch(
          `https://public.api.bsky.app/xrpc/app.bsky.actor.getProfile?actor=${did}`
        );

        if (!response.ok) {
          console.error("Failed to fetch avatar");
          return;
        }

        const profileData = await response.json();
        const newAvatarUrl = profileData.avatar || "";

        setAvatarUrl(newAvatarUrl);
        localStorage.setItem("avatarUrl", newAvatarUrl);
        localStorage.setItem("avatarFetchTime", Date.now().toString());
      } catch (error) {
        console.error("Error fetching avatar:", error);
      }
    };

    fetchAvatarWithCache();
  }, [did]);

  return avatarUrl ? (
    <Image
      width={18}
      height={18}
      src={avatarUrl}
      alt="Profile picture"
      className="inline rounded-full mr-1 mb-1"
    />
  ) : null;
}
