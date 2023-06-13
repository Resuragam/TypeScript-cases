/**
* @desc record 获取属性映射
*/
type RequestMethods = 'GET' | 'POST' | 'DELETE'
// type MethodsAny = {
//     GET: string;
//     POST: string;
//     DELETE: string;
// }
type MethodsAny = Record<RequestMethods, string>
