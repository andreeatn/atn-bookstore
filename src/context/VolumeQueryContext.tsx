import VolumeQuery from "entities/VolumeQuery";
import React from "react";
import { ReactNode, createContext, useState } from "react";

interface Props {
  children: ReactNode;
}

const VolumeQueryContext = React.createContext({
  volumeQuery: {} as VolumeQuery,
  setVolumeQuery: (volumeQuery: VolumeQuery) => {},
});

export default VolumeQueryContext;

export function VolumeQueryProvider({ children }: Props) {
  const [query, setQuery] = useState<VolumeQuery>({} as VolumeQuery);

  return (
    <VolumeQueryContext.Provider
      value={{ volumeQuery: query, setVolumeQuery: setQuery }}
    >
      {children}
    </VolumeQueryContext.Provider>
  );
}
