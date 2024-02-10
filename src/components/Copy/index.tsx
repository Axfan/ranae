import { useState } from "react";
import { CopyIcon, CopyCheck, Check } from "lucide-react";

import { Button } from "../Button";
import { Separator } from "../Separator";
import {
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
  Tooltip,
} from "../Tooltip";

const CopyText = ({ children }: { children: string }) => {
  const [copied, setCopied] = useState(false);

  const Icon = copied ? CopyCheck : CopyIcon;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            onClick={() => {
              navigator.clipboard.writeText(children);
              setCopied(true);
              setTimeout(() => {
                setCopied(false);
              }, 1000);
            }}
          >
            {children}
            <Separator orientation="vertical" className="rn-mx-2" />
            <span>
              <Icon
                className={`rn-w-4 rn-h-4 rn-text-gray-400 ${
                  copied ? "rn-text-teal-600" : ""
                }`}
              />
            </span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Copy</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

const CopyButton = ({ value }: { value: string }) => {
  const [copied, setCopied] = useState(false);

  const Icon = copied ? Check : CopyIcon;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            onClick={() => {
              navigator.clipboard.writeText(value);
              setCopied(true);
              setTimeout(() => {
                setCopied(false);
              }, 1000);
            }}
            className="rn-w-24 rn-text-align-left"
          >
            <span>
              <Icon
                className={`rn-w-4 rn-h-4 rn-text-gray-400 rn-mr-2 ${
                  copied ? "rn-text-teal-600" : ""
                }`}
              />
            </span>
            {copied ? "Copied" : "Copy"}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Copy</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export { CopyText, CopyButton };
