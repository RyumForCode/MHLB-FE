import instance from "./instance/instance";

const getPeopleList = async (workspaceId:number | undefined) => {
  const response = await instance.get(`/api/workspaces/${workspaceId}/people`);
  return response.data;
};

export { getPeopleList };