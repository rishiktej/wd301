import Member from "../../pages/members";

export interface Member {
  id: number;
  name: string;
  email: string;
}
export interface MembersState {
  members: Member[];
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
}

// Define initial state
export const initialMembersState: MembersState = {
  members: [],
  isLoading: false,
  isError: false,
  errorMessage: '',
};

// Define action types
export type MembersActions =
  | { type: 'FETCH_MEMBERS_REQUEST' }
  | { type: 'FETCH_MEMBERS_SUCCESS'; payload: Member[] }
  | { type: 'FETCH_MEMBERS_FAILURE'; payload: string }
  | { type: 'ADD_MEMBER_SUCCESS'; payload:Member}
  | { type: 'REMOVE_MEMBER'; payload: number};

// Define the reducer
export const membersReducer = (
  state: MembersState = initialMembersState,
  action: MembersActions
): MembersState => {
  switch (action.type) {
    case 'FETCH_MEMBERS_REQUEST':
      return {
        ...state,
        isLoading: true,
      };
    case 'FETCH_MEMBERS_SUCCESS':
      return {
        ...state,
        isLoading: false,
        members: action.payload,
      };
    case 'FETCH_MEMBERS_FAILURE':
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
      };
    case 'ADD_MEMBER_SUCCESS':
      return { ...state, members: [...state.members, action.payload] };
    case 'REMOVE_MEMBER':
        return {
          ...state,
          members: state.members.filter((member) => member.id !== action.payload),
        };
    default:
      return state;
  }
};

