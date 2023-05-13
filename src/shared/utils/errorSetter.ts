import React from 'react';

export const errorSetter = <T>(
  setState: React.Dispatch<React.SetStateAction<T>>,
  error: any,
) => {
  setState(state => ({
    ...state,
    loading: false,
    isError: true,
    error: error?.message || error,
  }));
};
