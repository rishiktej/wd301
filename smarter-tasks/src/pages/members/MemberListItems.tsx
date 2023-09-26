import { SubmitHandler } from "react-hook-form";
import { deleteMember } from "../../context/members/actions";
import {
  useMembersDispatch,
  useMembersState,
} from "../../context/members/context";

type Input = {
  id: number;
};
export default function MemberListItems() {
  // Access the members' state using the useMembersState hook.
  let state: any = useMembersState();
  const dispatchMembers = useMembersDispatch();
  const { members, isLoading, isError, errorMessage } = state;
  console.log(members);

  // If `isLoading` is true and there are no members, display a loading message.
  if (members.length === 0 && isLoading) {
    return <span>Loading...</span>;
  }

  // If there is an error, display the error message.
  if (isError) {
    return <span>{errorMessage}</span>;
  }

  const onSubmit: SubmitHandler<Input> = async (Id) => {
    const { id } = Id;
    const response = await deleteMember(dispatchMembers, id);
    if (response.ok) {
      console.log("user deleted");
    } else {
      console.log("user not deleted");
    }
  };
  return (
    <>
      {members.map((member: any) => (
        <div
          key={member.id}
          className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">
            {member.name}
          </h5>
          <p className="text-gray-500 dark:text-gray-400">{member.email}</p>
          <button
            onClick={() => onSubmit({ id: member.id })}
            className="mt-2 bg-red-500 hover:bg-red-600 text-white font-semibold px-2 py-1 rounded"
          >
            Delete
          </button>
        </div>
      ))}
    </>
  );
}
