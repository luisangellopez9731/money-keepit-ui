import { WorkspaceList } from "./WorkspaceList";
import { render } from "@testing-library/react";

it("Should render", () => {
  const { getByTitle } = render(<WorkspaceList />);
});
