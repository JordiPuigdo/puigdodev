import ca from "messages/ca.json";
import es from "messages/es.json";
import en from "messages/en.json";

export function getProjects(locale: string) {
  const messages = getLocale(locale);

  return messages.projects.items;
}

function getLocale(locale: string) {
  switch (locale) {
    case "ca":
      return ca;
    case "es":
      return es;
    case "en":
      return en;
    default:
      return ca;
  }
}

export function getItems(locale: string) {
  const messages = getLocale(locale);

  return messages;
}
