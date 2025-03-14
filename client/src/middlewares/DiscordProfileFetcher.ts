import axios from "axios";
import { Profile } from "../types/Profile";
 const fetchProfile = async (setProfile: (profile: Profile) => void) => {
  try {
    const response = await axios.get("http://localhost:3000/profile");
    setProfile(response.data);
  } catch (error) {
    console.error("Error fetching Discord profile:", error);
  }
};

export default fetchProfile;