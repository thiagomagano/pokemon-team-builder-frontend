import { useContext } from "react";
import TeamContext from "../context/TeamProvider";

const useTeam = () => {
  return useContext(TeamContext);
}

export default useTeam;