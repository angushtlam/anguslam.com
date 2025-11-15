import * as React from "react";

export default function Footer() {
  const [isWide, setIsWide] = React.useState(true);

  React.useEffect(() => {
    const handleResize = () => {
      setIsWide(window.innerWidth >= 599);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <footer style={{ color: '#696969', fontStyle: 'italic' }}>
      <div style={{ display: 'flex', flexDirection: isWide ? 'row' : 'column' }}>
        <div style={{ flex: '1 0' }}>
          <h3>Socials</h3>
          <ul>
            <li>
              <a
                href="https://angushtlam.substack.com/"
                rel="noreferrer"
                target="_blank"
              >
                Substack
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/angustofar"
                rel="noreferrer"
                target="_blank"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
        <div style={{ flex: '2 0' }}>
          <h3>Why does the site look like a default nginx page?</h3>
          <p>
            I have very fond memories of snooping autoindex pages on poorly
            configured servers back in the late 2000s. It's hard to find those
            nowadays. "Browser default" HTML also has a brutalistic and
            uninstrusive quality. I think this makes a great foundation for me
            to share all kinds of things I do. That is not to say there's no
            styling here—every detail is still meticulously chosen. I could have
            went for a more conventional modern minimalist design, but what's
            the fun in that?
          </p>
        </div>
      </div>

      <p>© Angus Lam 2015-{new Date().getFullYear()}</p>
    </footer>
  );
}
