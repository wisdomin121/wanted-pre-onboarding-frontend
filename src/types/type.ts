export interface ICreateTodo {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  list: any[];
  setList: React.Dispatch<React.SetStateAction<any[]>>;
}
