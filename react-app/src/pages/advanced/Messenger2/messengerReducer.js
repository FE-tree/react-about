export const initialState = {
  selectedId: 0,
  message: {},
};

export function messengerReducer(state, action) {
  switch (action.type) {
    case 'changed_selection': {
      return {
        ...state,
        selectedId: action.contactId
      };
    }
    case 'edited_message': {
      return {
        ...state,
        message: {
          ...state.message,
          [state.selectedId]: action.message
        }
      };
    }
    case 'sent_message': {
      return {
        ...state,
        message: {
          ...state.message,
          [state.selectedId]: ''
        }
      };
    }
    default: {
      throw Error('未知 action：' + action.type);
    }
  }
}
  