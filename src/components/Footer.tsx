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
          {social.map((item) => {
            if (!item.link) return null;

            if (item.link.startsWith("mailto:")) {
              return (
                <a key={item.name} href={item.link} style={{ display: "inline-flex" }}>
                  <IconButton icon={item.icon} tooltip={item.name} size="s" variant="ghost" />
                </a>
              );
            }

            return (
              <SmartLink key={item.name} href={item.link} target="_blank" rel="noreferrer">
                <IconButton icon={item.icon} tooltip={item.name} size="s" variant="ghost" />
              </SmartLink>
            );
          })}
        </Row>
      </Row>

      <Row height="80" hide s={{ hide: false }} />
    </Row>
  );
};