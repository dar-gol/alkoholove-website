export type ToastType = 'success' | 'warning' | 'info' | 'error';

export type RequestMethod = 'POST' | 'GET' | 'PUT' | 'DELETE';

export type IQueryKey<T = string> = {queryKey: T[]};
