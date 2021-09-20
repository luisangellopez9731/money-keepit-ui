import { FC } from "react";
import { Workspace } from "models";
import { useHistory } from "react-router";
import { useQuery } from "react-query";
import { WorkspaceService } from "services";

export interface WorkspaceButtonProps extends Workspace {}

export const WorkspaceButton: FC<WorkspaceButtonProps> = (props) => {
  const history = useHistory();
  const onClick = async () => {
    await WorkspaceService.login(props.id);
    history.push("/");
  };
  return <p onClick={onClick}>{props.name}</p>;
};

export const WorkspaceList = () => {
  const { data, isLoading } = useQuery<any[]>(
    "workspaces",
    WorkspaceService.getAll
  );
  if (isLoading) return <p>Is Loading</p>;
  if (data) {
    return (
      <>
        {data.map((workspace, i) => (
          <WorkspaceButton key={i} {...workspace} />
        ))}
      </>
    );
  }
  return <></>;
};
