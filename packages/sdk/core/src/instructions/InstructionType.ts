export enum InstructionType {
  CreateRealm = 0,
  DepositGoverningTokens = 1,
  WithdrawGoverningTokens = 2,
  SetGovernanceDelegate = 3,
  CreateGovernance = 4,
  CreateProgramGovernance = 5,

  CreateProposal = 6,
  AddSignatory = 7,
  RemoveSignatory = 8,

  InsertTransaction = 9,
  RemoveTransaction = 10,
  CancelProposal = 11,
  SignOffProposal = 12,
  CastVote = 13,
  FinalizeVote = 14,
  RelinquishVote = 15,
  ExecuteTransaction = 16,

  CreateMintGovernance = 17,
  CreateTokenGovernance = 18,
  SetGovernanceConfig = 19,
  FlagTransactionError = 20,
  SetRealmAuthority = 21,
  SetRealmConfig = 22,
  CreateTokenOwnerRecord = 23,
  UpdateProgramMetadata = 24,
  CreateNativeTreasury = 25,
}