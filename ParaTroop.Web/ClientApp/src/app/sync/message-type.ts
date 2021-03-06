export enum MessageType {
  Connect = 1,
  Operation = 2,
  SetMark = 3,
  // Authenticate = 4,
  Remove = 5,
  EvaluateString = 6,
  EvaluateBlock = 7,
  GetAll = 8,
  SetAll = 9,
  Select = 10,
  Reset = 11,
  Kill = 12,
  ConnectAck = 13,
  RequestAck = 14,
  // Constraint = 15,
  Console = 16,
  KeepAlive = 17,
  StopAll = 18,
}
