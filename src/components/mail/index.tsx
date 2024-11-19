import { Mail } from "@/components/mail/components/mail";
import { accounts, mails } from "@/components/mail/data";

export default function MailPage() {
  return (
    <>
      <div className="md:hidden">
        <img
          src="/examples/mail-dark.png"
          width={1280}
          height={727}
          alt="Mail"
          className="hidden dark:block"
        />
        <img
          src="/examples/mail-light.png"
          width={1280}
          height={727}
          alt="Mail"
          className="block dark:hidden"
        />
      </div>
      <div className="hidden flex-col md:flex w-full shrink-0 grow-0 h-screen">
        <Mail
          accounts={accounts}
          mails={mails}
          defaultLayout={undefined}
          defaultCollapsed={undefined}
          navCollapsedSize={4}
        />
      </div>
    </>
  );
}
