"use client";

declare function gtag_report_conversion(url?: string): boolean;

interface PhoneLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export default function PhoneLink({ href, className, children }: PhoneLinkProps) {
  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    gtag_report_conversion(href);
    window.location.href = href;
  }

  return (
    <a href={href} className={className} onClick={handleClick}>
      {children}
    </a>
  );
}
