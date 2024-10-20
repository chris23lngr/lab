"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AvatarGroup } from "@/registry/components/avatar-group";

export default function AvatarGroupDemo() {
  return (
    <div className="flex h-full min-h-64 w-full items-center justify-center">
      <AvatarGroup>
        <Avatar>
          <AvatarImage src="https://avatars.githubusercontent.com/u/41869956?v=4" />
          <AvatarFallback>
            <span>CL</span>
          </AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="https://avatars.githubusercontent.com/u/124599?v=4" />
          <AvatarFallback>
            <span>CN</span>
          </AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="https://avatars.githubusercontent.com/u/34928425?v=4" />
          <AvatarFallback>
            <span>CN</span>
          </AvatarFallback>
        </Avatar>
      </AvatarGroup>
    </div>
  );
}
