// Возможные роли пользователя - user/moderator/admin
// Tags: Enum, Union, Type, Interface

enum Role {
  USER = 'user',
  MODERATOR = 'moderator',
  ADMIN = 'admin',
}

interface User {
  id: number;
  login: string;
  role: Role;
}
  
const user: User = {
  id: 1,
  login: 'test',
  role: Role.USER,
};

type fn = (user: User) => boolean;

const checkPermissionsDecorator = (roles: Role[]):fn => {
  return (user: User): boolean => {
    return roles.includes(user.role);
  };
};
  
const checkPermission = checkPermissionsDecorator([Role.ADMIN]);
const hasPermissions = checkPermission(user);
    
