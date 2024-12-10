import * as React from "react";

export default function Footer() {
  return (
    <div className="flex h-96  p-4 flex-col">
      <div className="w-full border border-solid border-neutral-700 border-opacity-20 max-md:max-w-full" />
      <div className="flex flex-wrap gap-5 justify-between items-start self-center mt-10 w-full max-w-[1517px] max-md:max-w-full">
        <div className="flex flex-wrap gap-10 items-center text-sm text-neutral-700 max-md:max-w-full">
          <img
            loading="lazy"
            src="/SVG/logo.svg"
            alt="Company logo"
            className="object-contain shrink-0 self-stretch my-auto aspect-[2.04] w-[133px]"
          />
          <div className="flex flex-wrap gap-10 items-start self-stretch my-auto min-w-[240px] max-md:max-w-full">
            <FooterColumn title="INFOS PRATIQUES" items={practicalInfo} />
            <FooterColumn title="LÉGAL" items={legalInfo} />
            <FooterColumn title="MON COMPTE" items={accountInfo} />
          </div>
        </div>
        <div className="flex flex-col items-end">
          <div className="text-lg font-bold text-neutral-700">NOUS SUIVRE</div>
          <div className="flex block items-center mt-3">
            {socialLinks.map((social, index) => (
              <SocialIcon key={index} icon={social.icon} alt={social.alt} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function FooterColumn({ title, items }) {
  return (
    <div className="flex flex-col">
      <div className="text-lg font-bold">{title}</div>
      {items.map((item, index) => (
        <div key={index} className="mt-2.5">
          {item.title}
        </div>
      ))}
    </div>
  );
}

function SocialIcon({ icon, alt }) {
  return (
    <div className="flex items-center self-stretch p-2.5 my-auto border-opacity-30 w-[62px]">
      <img
        loading="lazy"
        src={icon}
        alt={alt}
        className="object-contain self-stretch my-auto aspect-[0.96] w-[88px]"
      />
    </div>
  );
}

const practicalInfo = [
  { title: "À propos" },
  { title: "Livraisons & Reprises" },
  { title: "Mode d'emploi" },
  { title: "F.A.Q" },
];

const legalInfo = [
  { title: "Mentions légales" },
  { title: "CGU" },
  { title: "CGV" },
  { title: "Politique de confidentialité" },
];

const accountInfo = [
  { title: "Accéder à mon compte" },
  { title: "Ma liste d'envie" },
  { title: "Créer un compte" },
  { title: "Mot de passe oublié" },
];

const socialLinks = [
  {
    icon: "/Images/twitter.png",
    alt: "Social media icon",
  },
  {
    icon: "/Images/instagram.png",
    alt: "Social media icon",
  },
  {
    icon: "/Images/linkedin.png",
    alt: "Social media icon",
  },
];
