import { Row, IconButton, SmartLink, Text } from "@once-ui-system/core";
import { person, social } from "@/resources";
import styles from "./Footer.module.scss";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Row
      as="footer"
      fillWidth
      padding="8"
      horizontal="center"
      s={{ direction: "column" }}
    >
      <Row
        className={styles.mobile}
        maxWidth="m"
        paddingY="8"
        paddingX="16"
        gap="16"
        horizontal="between"
        vertical="center"
        s={{
          direction: "column",
          horizontal: "center",
          align: "center",
        }}
      >
        <Text variant="body-default-s" onBackground="neutral-strong">
          <Text onBackground="neutral-weak">© {currentYear}</Text>
          <Text paddingX="4">{person.name}</Text>
          <Text onBackground="neutral-weak">• All rights reserved.</Text>
        </Text>

        <Row gap="16">
          {social.map(
            (item) =>
              item.link && (
                <SmartLink
                  key={item.name}
                  href={item.link}
                  // only open a new tab for normal external links
                  target={item.link.startsWith("http") ? "_blank" : undefined}
                  rel={item.link.startsWith("http") ? "noreferrer" : undefined}
                >
                  <IconButton
                    icon={item.icon}
                    tooltip={item.name}
                    size="s"
                    variant="ghost"
                  />
                </SmartLink>
              )
          )}
        </Row>
      </Row>

      <Row height="80" hide s={{ hide: false }} />
    </Row>
  );
};