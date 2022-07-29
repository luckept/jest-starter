import axios from 'axios';

export type UserRoleType = "user" | "admin"

export interface GetUserRoleRes {
  userType: UserRoleType
}

export const getUserRole = async () => {
  return axios.get<GetUserRoleRes>("https://mysite.com/api/role");
};