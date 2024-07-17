// Возможные роли пользователя - user/moderator/admin
// Tags: Enum, Union, Type, Interface

enum  Role{
  user = "user",
  moderator = "moderator",
  admin = "admin",
}

type Person = { id: number, login:string, role: Role}

let user: Person = {
  id: 1,
  login: 'test',
  role: Role.user,
  }
  
type foo = (user: Person) => boolean;

const checkPermissionsDecorator  = (firstArr: Role):foo => {
  console.log(firstArr)
  return (user: Person) => {
    return  Role.includes(user.role);
  }
}
  
 const checkPermission = checkPermissionsDecorator([Role.admin]);
 const hasPermissions = checkPermission(Role.user);
  
  console.log(hasPermissions);

