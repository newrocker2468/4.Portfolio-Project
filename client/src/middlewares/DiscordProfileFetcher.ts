import axios from "axios";
import { Profile } from "../types/Profile";
 const fetchProfile = async (setProfile: (profile: Profile) => void) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/profile`
    );
    setProfile(response.data);

  } catch (error) {
    console.error("Error fetching Discord profile:", error);
  }
};

export default fetchProfile;