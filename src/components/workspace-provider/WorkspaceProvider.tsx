import { FC, useContext, createContext, useState, useEffect } from "react";
import fetchIntercept from "fetch-intercept";

const WorkspaceContext = createContext<any>({});

export const useWorkspaceContext = () => useContext(WorkspaceContext);
export const WorkspaceProvider: FC = ({ children }) => {
  const [workspaceId, setWorkspaceId] = useState("test");
  useEffect(() => {
    const regex = new RegExp(`^/${workspaceId}`);
    if (!regex.test(window.location.pathname)) {
      window.location.replace(`http://${window.location.host}/${workspaceId}${window.location.pathname}`);
    }

    const unregister = fetchIntercept.register({
      request: function (url, config) {
        const urlObject = new URL(url);
        return [
          `${urlObject.origin}/${workspaceId}${urlObject.pathname}`,
          config,
        ];
      },
    });

    return () => {
      unregister();
    };
  }, []);
  return (
    <WorkspaceContext.Provider value={{ workspaceId }}>
      {children}
    </WorkspaceContext.Provider>
  );
};
