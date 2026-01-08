export function BrandMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M4 6.5 8.6 12 4 17.5h4.2L11 14.1l2.8 3.4H18L13.4 12 18 6.5h-4.2L11 9.9 8.2 6.5H4Z"
        fill="currentColor"
      />
      <path
        d="M11 2.8c.8 0 1.4.6 1.4 1.4v1.1c0 .8-.6 1.4-1.4 1.4s-1.4-.6-1.4-1.4V4.2c0-.8.6-1.4 1.4-1.4Z"
        fill="currentColor"
        opacity="0.7"
      />
      <path
        d="M20.8 11c.8 0 1.4.6 1.4 1.4s-.6 1.4-1.4 1.4h-1.1c-.8 0-1.4-.6-1.4-1.4s.6-1.4 1.4-1.4h1.1Z"
        fill="currentColor"
        opacity="0.7"
      />
    </svg>
  );
}

