type SocialLinkProps = {
  link: string;
  iconSrc: string;
};

export function SocialLink({ link, iconSrc }: SocialLinkProps) {
  return (
    <a href={link} target="_blank">
      <img src={iconSrc} width={36} height={36} />
    </a>
  );
}
