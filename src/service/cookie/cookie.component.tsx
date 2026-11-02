'use client';

interface CookieProps {
  onClick: () => void;
}

const cookieArt = [
  '       .-""""-.       ',
  '     /  .--.  \\     ',
  '    |  (    )  |     ',
  '    |   `--`   |     ',
  '     \\        /     ',
  '       `----`        ',
];

export default function Cookie({ onClick }: CookieProps) {
  return (
    <button onClick={onClick} className="cookie-art">
      <span>{cookieArt.join('\n')}</span>
    </button>
  );
}