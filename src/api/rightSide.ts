import instance from "./instance/instance";

const getPeopleList = async (workspaceId:number | undefined) => {
  if(workspaceId){
    const response = await instance.get(`/api/workspaces/${workspaceId}/people`);
    return response.data;
  }
};

const getPrevMessages = async (workspaceId:number) => {
  const response = await instance.get(`/api/inbox/${workspaceId}`);
  return response.data;
};

const getUuid = async (userId:number) => {
  const response = await instance.post(`/api/inbox/${userId}`);
  return response.data;
};

export { getPeopleList, getPrevMessages, getUuid };