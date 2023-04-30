import { useEffect, useState } from "react";
import { apiUrls } from "../../constants/apiUrls";
import axiosInstance from "../utils/interceptor";

interface UserDetails {
  email: string;
  username: string;
}
export const useUserDetails = (): UserDetails => {
  const [userDetails, setUserDetails] = useState<UserDetails>({ email: "", username: "" });
  useEffect(() => {
    (async (): Promise<void> => {
      try {
        const response = await axiosInstance.get(apiUrls.USER_DETAILS);
        if (response.status === 200)
          setUserDetails({
            ...response.data,
          });
      } catch (e) {
        //Todo
      }
    })();
  }, []);

  return userDetails;
};
