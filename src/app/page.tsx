import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-[1200px] m-auto pl-[1em] pr-[1em]">
      <header className="m-[1em] flex justify-between">
        <h1 className="text-4xl">&gt; ryand_</h1>
        <nav>
          <ul className="flex flex-row flex-wrap justify-between m-[.5em] gap-[.5em]">
            <li><a href="/" className="hover:text-blue-600">Home</a></li>
            <li><a href="https://blog.ryand.ca" className="hover:text-blue-600">Blog</a></li>
            <li><a href="https://q.ryand.ca" className="hover:text-blue-600">Quartz</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="flex flex-col md:flex-row gap-[15px] md:gap-[60px] mb-[30px]">
          <div className="md:card">
            <h2 className="text-lg">About Me</h2>
            <p>Hello, my name is Ryan. I'm currently studying computer engineering at <a
              href="https://www.nait.ca" className="underline">NAIT</a>. I've worked on a few projects that helped me get to where I am today.
            </p>
          </div>
          <div>
            <a href="https://skillicons.dev">
              <img src="https://skillicons.dev/icons?i=nix,arch,linux,cs,cpp,net,ts,react,nextjs,gatsby,js,nodejs,electron,express,mongo,mysql,html,css,markdown,lua,java,androidstudio,vscode,visualstudio,git,github,githubactions,gitlab,docker,nginx,aws,gcp,azure,cloudflare,vercel,netlify,aftereffects,photoshop,stackoverflow,discord,twitter,linkedin,mastodon&perline=9" alt="Skill Icons" />
            </a>
          </div>
        </section>
        <section className="mb-[30px]">
          <h2>What I'm currently working on</h2>
          <ul className="font-light list-disc pl-[25px]">
            <li>WineUSBDM (Debugging and flashing 9S12 microcontrollers on Linux, preferably Nix)</li>
            <li>Wrangler (Cloudflare Workers SDK) flake</li>
            <li>R2 Upload Action (S3 compatible API action for GitHub Actions)</li>
            <li>Contributing to Nixpkgs, the package repository for Nix</li>
            <li>Selfhosting many different services.</li>
          </ul>
        </section>
        <section>
          <h2>Want to contact me?</h2>
          <p>You can email me at <a href="mailto:contact@ryand.ca" className="underline">contact@ryand.ca</a>. I also have a <a href="https://github.com/ryand56" className="underline">GitHub</a> and <a href="https://linkedin.com/in/ryand56" className="underline">LinkedIn</a>.</p>
        </section>
      </main>
    </div>
  );
}
