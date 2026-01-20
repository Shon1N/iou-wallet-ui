import PermissionDTO from "./permission-dto";
import RoleDTO from "./role-dto";

export default interface AuthDTO {
  id: string;
  username: string;
  publiName: string;
  email: string;
  phone: string;
  updatedAt: Date;
  roles: RoleDTO[];
  permissions: PermissionDTO[];
  token: string;
  jwtExpiryDate: Date;
  createdAt: Date;
}
