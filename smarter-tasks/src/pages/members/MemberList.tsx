import React, { useEffect } from "react";
import { fetchMembers } from "../../context/members/actions";

// So, let's import the useProjectsDispatch custom hook.
import { useMembersDispatch } from "../../context/members/context";

import MembersListItems from "./MemberListItems";
const MembersList: React.FC = () => {
  // I'll define a new constant called dispatchPMembers
  // to call the useProjectsDispatch() hook.
  const dispatchMembers = useMembersDispatch();

  useEffect(() => {
    // And I'll pass the `dispatchPMembers to `fetchProjects` function.
    fetchMembers(dispatchMembers);
  }, []);
  return (
    <div className="grid gap-4 grid-cols-4 mt-5">
      {/*To keep this file clean, I'll move all the logic to access the projects 
       from our app-state, to a new component ProjectListItems */}
      <MembersListItems />
    </div>
  );
};
export default MembersList;
