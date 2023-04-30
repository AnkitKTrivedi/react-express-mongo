import { StringMap } from "../common/interfaces/stringMap";

const apiDomain = process.env.REACT_APP_API_DOMAIN || "";

export const apiUrls: StringMap = {
  LOGIN: `${apiDomain}/user/login`,
  USER_DETAILS: `${apiDomain}/user/me`,
};
