import React from "react";
import { Axios } from 'axios';
import * as API from 'api';

export type TodoItemState = {
  id: string,
  task: string,
  completed: boolean
};

export interface TodoItemProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string,
  task: React.ReactNode,
  completed: boolean
}

export interface responseApi {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

export type Extra = {
  client: Axios,
  api: typeof API,
};