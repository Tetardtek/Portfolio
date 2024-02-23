export default function Footer() {
  return (
    <>
      <footer>
        <div className="btn rounded-lg">
          <div className="btn-in rounded-lg">
            <a
              href="https://discord.com/users/235413280103858176"
              target="_blank"
            >
              <img
                className="w-8"
                src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/discord.svg"
                alt="Tetardtek"
              />
            </a>
            <a href="https://github.com/Tetardtek" target="_blank">
              <img
                className="w-8"
                src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/github.svg"
                alt="GitHub"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/kevin-turnaco/"
              target="_blank"
            >
              <img
                className="w-8"
                src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg"
                alt="LinkedIn"
              />
            </a>
          </div>
          <div>
            &nbsp; Kevin Turnaco &nbsp;
            <br />
            <br />
            &nbsp; Download{" "}
            <a
              className="hover:text-w-purple"
              href="/assets/CV/KEVIN_TURNACO_CV.pdf"
              download
            >
              my CV here
            </a>{" "}
            &nbsp;
            <br />
            <br />
            &nbsp; or contact me{" "}
            <a href="mailto:kvnn64@gmail.com" className="hover:text-w-purple">
              at this address
            </a>{" "}
            &nbsp;
          </div>
        </div>
      </footer>
    </>
  );
}
