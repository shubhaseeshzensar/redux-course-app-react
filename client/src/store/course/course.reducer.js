import { COURSE_ACTION_TYPES } from "./course.type";

const COURSE_INITIAL_STATE = {
  courses: [],
  loading: false,
};

export const courseReducer = (state = COURSE_INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case COURSE_ACTION_TYPES.GET_ALL_COURSE: {
      return {
        ...state,
        courses: payload,
        loading: false,
      };
    }
    case COURSE_ACTION_TYPES.SET_COURSE: {
      return {
        ...state,
      };
    }
    case COURSE_ACTION_TYPES.DELETE_COURSE: {
      return {
        ...state,
        loading: false,
      };
    }

    default:
      return state;
  }
};
