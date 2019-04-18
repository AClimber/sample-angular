export interface IType {
  id: number;
  name: string;
}

export interface IRule {
  id: number;
  type: IType;
  url: string;
}
