import {createAction} from '@reduxjs/toolkit';

export const setLearnLanguage = createAction<'en' | 'de' | null>(
  'language/set',
);
export const setLevel = createAction<1 | 2 | 3 | 4 | null>('level/set');
export const setLessonTime = createAction<1 | 2 | 3 | 4 | null>('time/set');
export const setIsSettedInitialSteps = createAction<boolean>('isSet/set');
