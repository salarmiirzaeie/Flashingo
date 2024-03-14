import {createReducer} from '@reduxjs/toolkit';
import {
  setIsSettedInitialSteps,
  setLearnLanguage,
  setLessonTime,
  setLevel,
} from '../actions/initialStepsAction';

interface ITokenState {
  learnLanguageName: 'en' | 'de' | null;
  selectedLevel: 1 | 2 | 3 | 4 | null;
  lessonTime: 1 | 2 | 3 | 4 | null;
  isSettedInitialSteps: boolean;
}

const initialState: ITokenState = {
  learnLanguageName: 'en',
  selectedLevel: 1,
  lessonTime: 1,
  isSettedInitialSteps: false,
};

const initialStepsReducer = createReducer(initialState, builder => {
  builder.addCase(setLearnLanguage, (state, action) => {
    state.learnLanguageName = action.payload;
  });
  builder.addCase(setLevel, (state, action) => {
    state.selectedLevel = action.payload;
  });
  builder.addCase(setLessonTime, (state, action) => {
    state.lessonTime = action.payload;
  });
  builder.addCase(setIsSettedInitialSteps, (state, action) => {
    state.isSettedInitialSteps = action.payload;
  });
});

export default initialStepsReducer;
