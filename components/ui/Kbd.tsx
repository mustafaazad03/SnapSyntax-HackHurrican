import { cn } from "@/lib/cn";
import { Fragment } from "react";

export default function Kbd({ keys }: { keys: string[] }) {
  return (
    <div className={cn("flex items-center gap-1")}>
      {keys.map((key) => (
        <Fragment key={key}>
          <kbd
            className={cn(
              "flex h-6 items-center justify-center rounded-[4px] px-2 font-medium",
              "bg-white text-black"
            )}
          >
            {key}
          </kbd>
          {key === "hover" && <span>and</span>}
        </Fragment>
      ))}
    </div>
  );
}
