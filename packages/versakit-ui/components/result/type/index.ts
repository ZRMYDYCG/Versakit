type ResultType =
  | 'success'
  | 'warning'
  | 'error'
  | 'info'
  | '403'
  | '404'
  | '500'

export interface ResultProps {
  type?: ResultType
  icon?: string
}
