import { useMemo } from "react";

import type { ApplyType } from "../../ApplyModal.types";

import PhoneApplyView from "./PhoneApplyView";
import ResumeApplyView from "./ResumeApplyView";
import SmsApplyView from "./SmsApplyView";

interface ApplyContentViewProps {
  applyType: ApplyType;
}

export default function ApplyContentView({ applyType }: ApplyContentViewProps) {
  const Content = useMemo(() => {
    switch (applyType) {
      case "phone":
        return <PhoneApplyView phoneNumber="010-1234-5678" />;
      case "sms":
        return <SmsApplyView />;
      case "resume":
        return <ResumeApplyView />;
      default:
        return null;
    }
  }, [applyType]);

  return Content;
}
