const COOKIE_DEFAULT_EXPIRY_TIME = 7 * 24 * 60 * 60 * 1000;

/** function to get cookie
 * @param name coookie key
 * @returns cookie value
 */

export const getCookie = (name: string): string | undefined => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    const removedElem: string | undefined = parts.pop();
    if (removedElem) return removedElem.split(";").shift();
  }
};

/** function to set cookie
 * @param name
 * @param value
 * @param expiryTime
 * @param domain
 */

export const setCookie = (
  name: string,
  value: string,
  domain?: string | undefined,
  expiryTime: number = COOKIE_DEFAULT_EXPIRY_TIME,
): void => {
  const date = new Date();

  date.setTime(date.getTime() + expiryTime);

  let cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;

  if (domain) cookie += `domain=${domain};`;

  document.cookie = cookie;
};
