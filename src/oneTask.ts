// Возможные роли пользователя - user/moderator/admin
// Tags: Enum, Union, Type, Interface

type Role = 'user' | 'moderator' | 'admin';

interface User {
  id: number;
  login: string;
  role: Role;
}
  
const user: User = {
  id: 1,
  login: 'test',
  role: 'user',
};
  
const checkPermissionsDecorator = (roles: Role[]) => {
  return (user: User) => {
    return roles.includes(user.role);
  };
};
  
const checkPermission = checkPermissionsDecorator(['admin']);
const hasPermissions = checkPermission(user);
  
console.log(hasPermissions);
  