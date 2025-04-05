const Box = ({ className }: { className: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      className={className}
    >
      <path
        opacity="0.2"
        d="M4.1375 9.32422C4.04693 9.47979 3.99946 9.6567 4 9.83672V22.1617C4.00096 22.3397 4.04884 22.5144 4.13882 22.668C4.2288 22.8216 4.35769 22.9488 4.5125 23.0367L15.5125 29.2242C15.6608 29.309 15.8292 29.3521 16 29.3492L16.1125 15.9992L4.1375 9.32422Z"
        fill="#2DB324"
      />
      <path
        d="M28 22.1627V9.83766C27.999 9.65963 27.9512 9.485 27.8612 9.33137C27.7712 9.17775 27.6423 9.05057 27.4875 8.96266L16.4875 2.77516C16.3393 2.68958 16.1711 2.64453 16 2.64453C15.8289 2.64453 15.6607 2.68958 15.5125 2.77516L4.5125 8.96266C4.35769 9.05057 4.22879 9.17775 4.13882 9.33137C4.04884 9.485 4.00096 9.65963 4 9.83766V22.1627C4.00096 22.3407 4.04884 22.5153 4.13882 22.6689C4.22879 22.8226 4.35769 22.9497 4.5125 23.0377L15.5125 29.2252C15.6607 29.3107 15.8289 29.3558 16 29.3558C16.1711 29.3558 16.3393 29.3107 16.4875 29.2252L27.4875 23.0377C27.6423 22.9497 27.7712 22.8226 27.8612 22.6689C27.9512 22.5153 27.999 22.3407 28 22.1627V22.1627Z"
        stroke="#2DB324"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M22.125 19.0625V12.5625L10 5.875"
        stroke="#2DB324"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M27.8624 9.32422L16.1125 15.9992L4.13745 9.32422"
        stroke="#2DB324"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.1125 16L16 29.35"
        stroke="#2DB324"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Box;
