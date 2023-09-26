import React, { createContext, useContext, useReducer } from "react";
import {
  membersReducer,
  MembersState,
  MembersActions,
  initialMembersState,
} from "./reducer";
export const MembersStateContext = createContext<MembersState | undefined>(
  undefined
);
export const MembersDispatchContext = createContext<
  React.Dispatch<MembersActions> | undefined
>(undefined);

// Create a members provider component
export const MembersProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(membersReducer, initialMembersState);

  return (
    <MembersStateContext.Provider value={state}>
      <MembersDispatchContext.Provider value={dispatch}>
        {children}
      </MembersDispatchContext.Provider>
    </MembersStateContext.Provider>
  );
};

// Custom hook for accessing members state
export const useMembersState = () => useContext(MembersStateContext);

// Custom hook for accessing members dispatch
export const useMembersDispatch = () => useContext(MembersDispatchContext);
